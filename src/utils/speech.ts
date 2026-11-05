/**
 * Speech synthesis utility for native audio pronunciation of Kilwana words.
 * 100% free, runs entirely in the user's browser with no external APIs.
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
    window.speechSynthesis.cancel(); // Stop any ongoing utterance

    // Clean text to pronounce (strip all asterisks, markdown, and symbols so voice reads naturally)
    const cleanWord = text
      .replace(/\*+/g, '') // remove all stars/asterisks completely
      .replace(/[_#`~]/g, '')
      .replace(/•/g, '')
      .replace(/['’]/g, '')
      .replace(/\s+/g, ' ')
      .trim();
    const utterance = new SpeechSynthesisUtterance(cleanWord);

    utterance.rate = 0.85; // slightly slower for instructional clarity
    utterance.pitch = 1.0;

    // Pick a preferred voice if available (Swahili or African English if present)
    const voices = window.speechSynthesis.getVoices();
    const preferredVoice = voices.find(
      (v) =>
        v.lang.startsWith('sw') ||
        v.lang === 'en-KE' ||
        v.lang === 'en-ZA' ||
        v.lang.startsWith('en')
    );
    if (preferredVoice) {
      utterance.voice = preferredVoice;
    }

    if (onStart) utterance.onstart = onStart;
    if (onEnd) {
      utterance.onend = onEnd;
      utterance.onerror = onEnd;
    }

    window.speechSynthesis.speak(utterance);
    return true;
  } catch (err) {
    console.warn('Speech synthesis error:', err);
    if (onEnd) onEnd();
    return false;
  }
};
