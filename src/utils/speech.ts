/**
 * Speech synthesis utility for native audio pronunciation of Kilwana words and AI heritage answers.
 * 100% free, runs entirely in the user's browser with zero external APIs.
 * Specially optimized for instant mobile playback on Android and iOS without network download delays.
 */

// Retain active utterances in memory to prevent mobile Chromium / WebKit garbage collection drops
const activeUtterances = new Set<SpeechSynthesisUtterance>();
let keepAliveTimer: ReturnType<typeof setInterval> | null = null;

// Voice caching so getVoices() never blocks on click
let cachedVoices: SpeechSynthesisVoice[] = [];

if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
  try {
    cachedVoices = window.speechSynthesis.getVoices();
    window.speechSynthesis.onvoiceschanged = () => {
      cachedVoices = window.speechSynthesis.getVoices();
    };
  } catch {
    // Ignore in environments where speech is not permitted
  }
}

/**
 * Finds the fastest, immediately available local voice on the user's device.
 * Critical: Never forces an uninstalled remote voice on mobile phones, which is what
 * causes phones to hang for minutes waiting for voice data downloads over mobile networks.
 */
const getOptimalInstantVoice = (): { voice: SpeechSynthesisVoice | null; lang: string } => {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    return { voice: null, lang: 'en-US' };
  }

  const voices = cachedVoices.length > 0 ? cachedVoices : window.speechSynthesis.getVoices();
  if (!voices || voices.length === 0) {
    return { voice: null, lang: 'en-US' };
  }

  // 1. Look for pre-installed local Swahili voice if available
  const localSwahili = voices.find((v) => v.lang.toLowerCase().startsWith('sw') && v.localService);
  if (localSwahili) return { voice: localSwahili, lang: localSwahili.lang };

  // 2. Look for pre-installed local African English voice
  const localAfEnglish = voices.find(
    (v) => (v.lang === 'en-KE' || v.lang === 'en-ZA' || v.lang === 'en-NG') && v.localService
  );
  if (localAfEnglish) return { voice: localAfEnglish, lang: localAfEnglish.lang };

  // 3. Look for device default voice that is locally available
  const defaultLocalVoice = voices.find((v) => v.default && v.localService);
  if (defaultLocalVoice) return { voice: defaultLocalVoice, lang: defaultLocalVoice.lang };

  // 4. Look for any local English voice (instant response, zero network delay)
  const anyLocalEnglish = voices.find((v) => v.lang.toLowerCase().startsWith('en') && v.localService);
  if (anyLocalEnglish) return { voice: anyLocalEnglish, lang: anyLocalEnglish.lang };

  // 5. Look for any voice flagged as localService
  const anyLocal = voices.find((v) => v.localService);
  if (anyLocal) return { voice: anyLocal, lang: anyLocal.lang };

  // 6. Device default fallback (let the phone use its pre-installed synthesizer default)
  const systemDefault = voices.find((v) => v.default);
  if (systemDefault) return { voice: systemDefault, lang: systemDefault.lang };

  return { voice: null, lang: 'en-US' };
};

/**
 * Clean text to pronounce by stripping asterisks, markdown symbols, and formatting
 * so the synthesizer speaks cleanly and smoothly.
 */
export const cleanSpeechText = (text: string): string => {
  return text
    .replace(/\*+/g, '') // remove all stars/asterisks completely
    .replace(/[_#`~]/g, '')
    .replace(/•/g, '')
    .replace(/['’]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
};

/**
 * Stops all speech synthesis immediately and resets active timers and queues.
 */
export const stopSpeech = (): void => {
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    try {
      window.speechSynthesis.cancel();
    } catch {
      // Ignore
    }
  }
  if (keepAliveTimer) {
    clearInterval(keepAliveTimer);
    keepAliveTimer = null;
  }
  activeUtterances.clear();
};

/**
 * Splits longer passages into concise, natural sentence chunks so mobile devices
 * can start speaking the first sentence within 50-100ms instead of waiting for
 * an entire multi-sentence paragraph to buffer and download.
 */
const splitIntoSentences = (text: string): string[] => {
  // Match sentences ending in ., !, ? or newline
  const matches = text.match(/[^.!?;\n]+[.!?;\n]*/g);
  if (!matches || matches.length === 0) {
    return [text];
  }

  const results: string[] = [];
  for (const item of matches) {
    const trimmed = item.trim();
    if (trimmed.length > 0) {
      // If a single segment is unusually long (>160 characters), split further on commas
      if (trimmed.length > 160) {
        const subParts = trimmed.split(/,\s+/);
        for (const sub of subParts) {
          const subTrim = sub.trim();
          if (subTrim.length > 0) results.push(subTrim);
        }
      } else {
        results.push(trimmed);
      }
    }
  }

  return results.length > 0 ? results : [text];
};

/**
 * Play native speech pronunciation with zero mobile delay.
 */
export const playPronunciation = (
  text: string,
  phoneticHint?: string,
  onStart?: () => void,
  onEnd?: () => void
): boolean => {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    return false;
  }

  try {
    // 1. Immediately cancel any ongoing speech and unpause queue
    stopSpeech();

    const clean = cleanSpeechText(text);
    if (!clean) {
      if (onEnd) onEnd();
      return false;
    }

    // 2. Select optimal local voice that won't stall waiting for remote network downloads
    const { voice, lang } = getOptimalInstantVoice();

    // 3. For mobile performance, chunk sentences so speech starts immediately on chunk #1
    const sentences = splitIntoSentences(clean);
    const totalSentences = sentences.length;

    let hasStarted = false;
    let completedCount = 0;

    const cleanup = () => {
      if (keepAliveTimer) {
        clearInterval(keepAliveTimer);
        keepAliveTimer = null;
      }
      activeUtterances.clear();
      if (onEnd) onEnd();
    };

    // Mobile keep-alive: Android Chrome pauses speech synthesis after ~14 seconds
    keepAliveTimer = setInterval(() => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        if (window.speechSynthesis.speaking && !window.speechSynthesis.paused) {
          window.speechSynthesis.pause();
          window.speechSynthesis.resume();
        }
      }
    }, 6000);

    // Run on minimal timeout to give mobile Safari/Chrome audio context time to reset after cancel()
    setTimeout(() => {
      try {
        if (window.speechSynthesis.paused) {
          window.speechSynthesis.resume();
        }

        sentences.forEach((sentenceText, idx) => {
          const utterance = new SpeechSynthesisUtterance(sentenceText);
          utterance.rate = 0.92; // Natural, clear pacing
          utterance.pitch = 1.0;
          utterance.lang = lang;

          if (voice) {
            utterance.voice = voice;
          }

          if (idx === 0) {
            utterance.onstart = () => {
              if (!hasStarted) {
                hasStarted = true;
                if (onStart) onStart();
              }
            };
          }

          utterance.onend = () => {
            activeUtterances.delete(utterance);
            completedCount++;
            if (completedCount >= totalSentences) {
              cleanup();
            }
          };

          utterance.onerror = (e) => {
            console.warn('Speech chunk error or interrupted:', e);
            activeUtterances.delete(utterance);
            completedCount++;
            if (completedCount >= totalSentences) {
              cleanup();
            }
          };

          activeUtterances.add(utterance);
          window.speechSynthesis.speak(utterance);
        });

        // Some Android browsers need an explicit resume to unblock queued utterances
        if (window.speechSynthesis.paused) {
          window.speechSynthesis.resume();
        }
      } catch (err) {
        console.warn('Failed to queue speech utterances:', err);
        cleanup();
      }
    }, 15);

    return true;
  } catch (err) {
    console.warn('Speech synthesis initialization error:', err);
    if (onEnd) onEnd();
    return false;
  }
};
