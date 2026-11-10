import React, { useState, useRef, useEffect } from 'react';
import {
  Sparkles,
  X,
  Send,
  Volume2,
  BookOpen,
  ArrowRight,
  Award,
  RotateCcw,
  CheckCircle2,
  XCircle,
  MessageSquare,
  User,
  Trash2
} from 'lucide-react';
import {
  answerHeritageQuery,
  AIAnswer,
  CULTURAL_PRESET_QUESTIONS,
  KILWANA_QUIZ_QUESTIONS
} from '../utils/aiKnowledgeEngine';
import { playPronunciation, stopSpeech } from '../utils/speech';
import { PageId } from './Navbar';
import { useBodyScrollLock } from '../hooks/useBodyScrollLock';

interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  answer?: AIAnswer;
  time: string;
}

// Key cultural terms stressed with bold and matching rich dark teal color
const STRESSED_CULTURAL_TERMS = [
  'Hayu',
  'Gasa',
  "A'lima",
  'Wailwana',
  'Ilwana',
  'Kilwana',
  'Chaana',
  'Chaana Do Kweeto',
  'Waato',
  'Mwaato',
  'Tasi',
  'Ngoma',
  'Bunki',
  'Firiimbi',
  'Chika',
  'Kitoko',
  'Koras',
  'Mashingwe',
  'Mkao',
  'Irraanga',
  'Locholo',
  'Kapu',
  'Dokwena',
  'Samaki',
  'Wayu',
  'Karari',
  'Mamboya',
  'Hajeji',
  'Abole',
  'Karayu',
  'Ilaani',
  'Galgedha',
  'Islam',
  'River Tana'
];

const renderHighlightedWords = (text: string): React.ReactNode => {
  const pattern = new RegExp(`\\b(${STRESSED_CULTURAL_TERMS.join('|')})\\b`, 'gi');
  const parts = text.split(pattern);

  return (
    <>
      {parts.map((part, idx) => {
        const isMatch = STRESSED_CULTURAL_TERMS.some(
          (term) => term.toLowerCase() === part.toLowerCase()
        );
        if (isMatch) {
          return (
            <strong key={idx} className="font-extrabold text-[#0f4c5c]">
              {part}
            </strong>
          );
        }
        return <span key={idx}>{part}</span>;
      })}
    </>
  );
};

const renderFormattedHeritageText = (rawText: string): React.ReactNode => {
  // Strip any asterisks completely so no stars ever appear
  const clean = rawText.replace(/\*+/g, '').trim();

  // If text starts with a labeled section like "Stage 1 — A'lima (The Talk):" or "Core Instruments:"
  const prefixMatch = clean.match(/^([^:—]+[:—])\s*(.*)$/);
  if (prefixMatch) {
    const [, prefix, rest] = prefixMatch;
    return (
      <span>
        <strong className="font-extrabold text-[#0f4c5c] tracking-wide">{prefix}</strong>{' '}
        <span>{renderHighlightedWords(rest)}</span>
      </span>
    );
  }

  return renderHighlightedWords(clean);
};

interface CulturalAssistantModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: PageId) => void;
  onSelectGlossaryTerm: (termId: string) => void;
}

export const CulturalAssistantModal: React.FC<CulturalAssistantModalProps> = ({
  isOpen,
  onClose,
  onNavigate,
  onSelectGlossaryTerm,
}) => {
  const [activeTab, setActiveTab] = useState<'ask' | 'quiz'>('ask');
  const [inputQuery, setInputQuery] = useState('');
  const [isSpeakingId, setIsSpeakingId] = useState<string | null>(null);

  // Lock body scroll so home page / background never scrolls behind modal
  useBodyScrollLock(isOpen);

  // Initial welcome message
  const [messages, setMessages] = useState<ChatMessage[]>(() => [
    {
      id: 'welcome',
      sender: 'assistant',
      text: 'Aaye! Welcome to the Ilwana AI Cultural Knowledge Assistant. Ask me any question about the Hayu leadership, our 8 clans, marriage (A\'lima), traditional dances, crafts (Waato & Mwaato), or vocabulary.',
      answer: answerHeritageQuery('Who is the Hayu?'),
      time: 'Just now'
    }
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Quiz State
  const [quizIndex, setQuizIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [quizScore, setQuizScore] = useState(0);
  const [answeredCount, setAnsweredCount] = useState(0);

  // Auto-scroll on new message
  useEffect(() => {
    if (activeTab === 'ask' && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, activeTab]);

  // Focus input on tab change or open
  useEffect(() => {
    if (isOpen && activeTab === 'ask') {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen, activeTab]);

  // Clean up speech synthesis on modal close, unmount, or tab switch
  useEffect(() => {
    if (!isOpen) {
      stopSpeech();
      setIsSpeakingId(null);
    }
    return () => {
      stopSpeech();
    };
  }, [isOpen]);

  useEffect(() => {
    stopSpeech();
    setIsSpeakingId(null);
  }, [activeTab]);

  if (!isOpen) return null;

  const handleAsk = (queryText: string) => {
    const trimmed = queryText.trim();
    if (!trimmed) return;

    const userMsgId = `user-${Date.now()}`;
    const userMsg: ChatMessage = {
      id: userMsgId,
      sender: 'user',
      text: trimmed,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    // Calculate answer immediately
    const answer = answerHeritageQuery(trimmed);
    const aiMsgId = `ai-${Date.now() + 1}`;
    const aiMsg: ChatMessage = {
      id: aiMsgId,
      sender: 'assistant',
      text: answer.summary,
      answer,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg, aiMsg]);
    setInputQuery('');
  };

  const handleClearChat = () => {
    stopSpeech();
    setIsSpeakingId(null);
    setMessages([
      {
        id: `welcome-${Date.now()}`,
        sender: 'assistant',
        text: 'Chat cleared. Ask me any question about Ilwana history, governance, clans, language, or culture!',
        answer: answerHeritageQuery('Who is the Hayu?'),
        time: 'Just now'
      }
    ]);
  };

  const handleSpeak = (msgId: string, textToSpeak: string) => {
    if (isSpeakingId === msgId) {
      stopSpeech();
      setIsSpeakingId(null);
      return;
    }

    setIsSpeakingId(msgId);
    playPronunciation(
      textToSpeak,
      undefined,
      () => setIsSpeakingId(msgId),
      () => setIsSpeakingId(null)
    );
  };

  const currentQuiz = KILWANA_QUIZ_QUESTIONS[quizIndex];

  const handleSelectOption = (idx: number) => {
    if (selectedOption !== null) return;
    setSelectedOption(idx);
    setAnsweredCount((prev) => prev + 1);
    if (idx === currentQuiz.correctIndex) {
      setQuizScore((prev) => prev + 1);
    }
  };

  const handleNextQuiz = () => {
    setSelectedOption(null);
    setQuizIndex((prev) => (prev + 1) % KILWANA_QUIZ_QUESTIONS.length);
  };

  const handleResetQuiz = () => {
    setQuizIndex(0);
    setSelectedOption(null);
    setQuizScore(0);
    setAnsweredCount(0);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/65 backdrop-blur-xs animate-in fade-in duration-200 overscroll-contain">
      <div
        className="fixed inset-0 touch-none"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="relative w-full max-w-2xl bg-[#faf9f5] rounded-3xl shadow-2xl border-2 border-stone-300 overflow-hidden flex flex-col h-[92vh] max-h-[820px] overscroll-contain z-10">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#0f4c5c] to-[#14532d] text-white p-4 sm:p-5 flex items-center justify-between shrink-0 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-white/15 flex items-center justify-center shadow-inner shrink-0">
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-amber-300" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-serif text-lg sm:text-2xl font-black tracking-tight">
                  Ilwana AI Cultural Guide
                </h2>
                <span className="text-[10px] uppercase font-mono font-bold bg-amber-400 text-stone-950 px-2 py-0.5 rounded-full">
                  100% Free · Client-Side
                </span>
              </div>
              <p className="text-xs text-stone-200 font-medium">
                Instant interactive answers directly from verified Ilwana heritage records
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer shrink-0"
            aria-label="Close Assistant"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center justify-between border-b-2 border-stone-200 bg-stone-100/90 px-3 sm:px-4 pt-1.5 shrink-0">
          <div className="flex gap-1 sm:gap-2">
            <button
              onClick={() => setActiveTab('ask')}
              className={`flex items-center gap-2 py-2 sm:py-2.5 px-3 sm:px-4 font-bold text-xs sm:text-sm border-b-2 transition-colors cursor-pointer ${
                activeTab === 'ask'
                  ? 'border-[#0f4c5c] text-[#0f4c5c] bg-white rounded-t-xl shadow-2xs'
                  : 'border-transparent text-stone-600 hover:text-stone-950'
              }`}
            >
              <MessageSquare className="w-4 h-4" />
              <span>Ask Heritage Assistant</span>
            </button>
            <button
              onClick={() => setActiveTab('quiz')}
              className={`flex items-center gap-2 py-2 sm:py-2.5 px-3 sm:px-4 font-bold text-xs sm:text-sm border-b-2 transition-colors cursor-pointer ${
                activeTab === 'quiz'
                  ? 'border-[#0f4c5c] text-[#0f4c5c] bg-white rounded-t-xl shadow-2xs'
                  : 'border-transparent text-stone-600 hover:text-stone-950'
              }`}
            >
              <Award className="w-4 h-4" />
              <span>Language & Heritage Quiz</span>
              {answeredCount > 0 && (
                <span className="text-[10px] font-mono bg-[#14532d] text-white px-1.5 py-0.2 rounded-full font-bold">
                  {quizScore}/{answeredCount}
                </span>
              )}
            </button>
          </div>

          {activeTab === 'ask' && messages.length > 1 && (
            <button
              onClick={handleClearChat}
              className="text-xs text-stone-500 hover:text-rose-700 flex items-center gap-1 font-semibold p-1 transition-colors cursor-pointer"
              title="Clear conversation"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Clear</span>
            </button>
          )}
        </div>

        {/* Tab 1: Interactive Chat */}
        {activeTab === 'ask' && (
          <div className="flex-1 flex flex-col min-h-0 bg-[#fbf9f5]">
            {/* Scrollable Message List */}
            <div className="flex-1 overflow-y-auto p-3 sm:p-5 space-y-4">
              {/* Quick Questions Starter Pills */}
              <div className="bg-white/80 p-3 sm:p-3.5 rounded-2xl border border-stone-200 shadow-2xs space-y-2">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-stone-500 block">
                  Quick Prompts (Tap any to ask):
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {CULTURAL_PRESET_QUESTIONS.slice(0, 5).map((q, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleAsk(q)}
                      className="text-xs bg-[#fdfbf7] hover:bg-[#0f4c5c] hover:text-white border border-stone-300 text-stone-900 font-semibold px-2.5 py-1.5 rounded-lg transition-colors text-left cursor-pointer"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message Feed */}
              {messages.map((msg) => (
                <div key={msg.id} className="space-y-2 animate-in fade-in duration-200">
                  {msg.sender === 'user' ? (
                    /* User Question Bubble */
                    <div className="flex justify-end items-end gap-2 pl-8">
                      <div className="bg-[#0f4c5c] text-white p-3.5 sm:p-4 rounded-2xl rounded-br-xs shadow-sm max-w-lg space-y-1">
                        <div className="flex items-center justify-between gap-4 text-[10px] font-mono text-teal-200 font-bold border-b border-teal-500/40 pb-1">
                          <span>You</span>
                          <span>{msg.time}</span>
                        </div>
                        <p className="text-sm sm:text-base font-semibold leading-relaxed break-words">
                          {msg.text}
                        </p>
                      </div>
                      <div className="w-7 h-7 rounded-full bg-stone-300 flex items-center justify-center text-stone-700 shrink-0">
                        <User className="w-4 h-4" />
                      </div>
                    </div>
                  ) : (
                    /* Assistant Answer Bubble */
                    <div className="flex items-start gap-2 pr-4 sm:pr-8">
                      <div className="w-8 h-8 rounded-full bg-[#14532d] flex items-center justify-center text-amber-300 shrink-0 shadow-xs mt-1">
                        <Sparkles className="w-4 h-4" />
                      </div>
                      <div className="bg-white border-2 border-stone-300 text-stone-950 p-4 sm:p-5 rounded-2xl rounded-tl-xs shadow-sm flex-1 space-y-3.5">
                        <div className="flex items-center justify-between border-b border-stone-200 pb-2">
                          <span className="font-serif font-black text-xs text-[#0f4c5c]">
                            Ilwana Heritage Guide
                          </span>
                          <button
                            onClick={() =>
                              handleSpeak(
                                msg.id,
                                `${msg.answer?.summary || msg.text}. ${
                                  msg.answer?.details?.join('. ') || ''
                                }`
                              )
                            }
                            className="inline-flex items-center gap-1.5 text-xs font-bold px-2 py-0.5 bg-stone-100 hover:bg-stone-200 text-stone-900 rounded-md border border-stone-300 cursor-pointer transition-colors"
                            title="Listen to audio reading"
                          >
                            <Volume2
                              className={`w-3.5 h-3.5 ${
                                isSpeakingId === msg.id ? 'text-teal-600 animate-pulse' : ''
                              }`}
                            />
                            <span>{isSpeakingId === msg.id ? 'Pause' : 'Listen'}</span>
                          </button>
                        </div>

                        {/* Summary */}
                        <p className="font-serif text-base sm:text-lg text-stone-950 font-bold leading-relaxed">
                          {renderFormattedHeritageText(msg.answer ? msg.answer.summary : msg.text)}
                        </p>

                        {/* Bullet Details */}
                        {msg.answer?.details && msg.answer.details.length > 0 && (
                          <ul className="space-y-2 text-sm sm:text-base text-stone-900">
                            {msg.answer.details.map((point, idx) => (
                              <li key={idx} className="flex items-start gap-2 leading-relaxed font-normal">
                                <span className="text-[#0f4c5c] font-black text-lg leading-none mt-0.5">
                                  •
                                </span>
                                <span>{renderFormattedHeritageText(point)}</span>
                              </li>
                            ))}
                          </ul>
                        )}

                        {/* Related Glossary Terms with Pronunciation */}
                        {msg.answer?.relatedTerms && msg.answer.relatedTerms.length > 0 && (
                          <div className="pt-2 border-t border-stone-200 space-y-2">
                            <span className="text-[11px] font-mono font-bold text-stone-500 uppercase tracking-wider block">
                              Related Vocabulary:
                            </span>
                            <div className="flex flex-wrap gap-1.5">
                              {msg.answer.relatedTerms.map((term) => (
                                <div
                                  key={term.id}
                                  className="inline-flex items-center gap-1.5 bg-[#fdfbf7] border border-stone-300 rounded-lg px-2 py-1 shadow-2xs"
                                >
                                  <button
                                    onClick={() => {
                                      onSelectGlossaryTerm(term.id);
                                      onClose();
                                    }}
                                    className="font-serif font-black text-xs text-[#0f4c5c] hover:underline cursor-pointer"
                                  >
                                    {term.term}
                                  </button>
                                  <button
                                    onClick={() => playPronunciation(term.term, term.phoneticHint)}
                                    className="text-stone-500 hover:text-stone-950 p-0.5 transition-colors cursor-pointer"
                                    title={`Pronounce ${term.term}`}
                                  >
                                    <Volume2 className="w-3.5 h-3.5" />
                                  </button>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Suggested Section Deep-link */}
                        {msg.answer?.suggestedPage && (
                          <div className="pt-2">
                            <button
                              onClick={() => {
                                onNavigate(msg.answer!.suggestedPage!.id);
                                onClose();
                              }}
                              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#0f4c5c] hover:underline cursor-pointer"
                            >
                              <BookOpen className="w-4 h-4" />
                              <span>Explore Section: {msg.answer.suggestedPage.title}</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        )}

                        {/* Follow-up question chips */}
                        {msg.answer?.suggestedQuestions && msg.answer.suggestedQuestions.length > 0 && (
                          <div className="pt-2 border-t border-stone-100 flex flex-wrap items-center gap-1.5">
                            <span className="text-[10px] font-mono font-bold text-stone-400 mr-1">
                              Follow up:
                            </span>
                            {msg.answer.suggestedQuestions.map((sq, idx) => (
                              <button
                                key={idx}
                                onClick={() => handleAsk(sq)}
                                className="text-xs bg-stone-100 hover:bg-stone-200 text-stone-800 font-medium px-2 py-1 rounded-md transition-colors cursor-pointer"
                              >
                                {sq}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Bar */}
            <div className="p-3 sm:p-4 border-t-2 border-stone-200 bg-white shadow-xs">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleAsk(inputQuery);
                }}
                className="flex items-center gap-2"
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={inputQuery}
                  onChange={(e) => setInputQuery(e.target.value)}
                  placeholder="Ask a question (e.g., What are the 8 clans? Who is the Hayu?)..."
                  className="flex-1 bg-stone-50 border-2 border-stone-300 rounded-xl px-4 py-2.5 sm:py-3 text-sm sm:text-base text-stone-950 placeholder:text-stone-400 focus:outline-hidden focus:bg-white focus:border-[#0f4c5c] transition-colors"
                />
                <button
                  type="submit"
                  disabled={!inputQuery.trim()}
                  className="bg-[#0f4c5c] hover:bg-[#14532d] disabled:opacity-40 text-white px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl font-bold flex items-center gap-2 transition-colors cursor-pointer shrink-0 shadow-xs active:scale-95"
                >
                  <Send className="w-4 h-4" />
                  <span className="hidden sm:inline">Ask</span>
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Tab 2: Interactive Quiz */}
        {activeTab === 'quiz' && (
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 bg-white">
            <div className="flex items-center justify-between border-b border-stone-200 pb-3">
              <div>
                <span className="text-xs font-mono font-bold text-emerald-800 uppercase tracking-wider">
                  Question {quizIndex + 1} of {KILWANA_QUIZ_QUESTIONS.length} · {currentQuiz.category}
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-stone-950 mt-1">
                  {currentQuiz.question}
                </h3>
              </div>
              <div className="text-right shrink-0">
                <span className="text-xs font-mono text-stone-500 block">Score</span>
                <span className="font-mono text-base font-bold text-[#0f4c5c]">
                  {quizScore} / {answeredCount}
                </span>
              </div>
            </div>

            {/* Options */}
            <div className="space-y-2.5">
              {currentQuiz.options.map((option, idx) => {
                const isSelected = selectedOption === idx;
                const isCorrect = idx === currentQuiz.correctIndex;
                const showResult = selectedOption !== null;

                let buttonStyles =
                  'border-2 border-stone-300 bg-white hover:border-[#0f4c5c] text-stone-900';
                if (showResult) {
                  if (isCorrect) {
                    buttonStyles =
                      'border-2 border-emerald-600 bg-emerald-50 text-emerald-950 font-bold';
                  } else if (isSelected) {
                    buttonStyles =
                      'border-2 border-rose-500 bg-rose-50 text-rose-950 font-bold';
                  } else {
                    buttonStyles = 'border-stone-200 bg-stone-50 text-stone-400';
                  }
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(idx)}
                    disabled={selectedOption !== null}
                    className={`w-full p-4 rounded-xl text-left transition-all flex items-start justify-between gap-3 text-sm sm:text-base font-medium cursor-pointer ${buttonStyles}`}
                  >
                    <span>{option}</span>
                    {showResult && isCorrect && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    )}
                    {showResult && isSelected && !isCorrect && (
                      <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Explanation on Answer */}
            {selectedOption !== null && (
              <div className="p-4 bg-[#fdfbf7] rounded-xl border-2 border-stone-300 space-y-2 animate-in fade-in">
                <span className="font-bold text-xs uppercase tracking-wider text-stone-900 block">
                  {selectedOption === currentQuiz.correctIndex ? '✓ Correct!' : 'Cultural Note:'}
                </span>
                <p className="text-sm sm:text-base text-stone-900 font-normal leading-relaxed">
                  {currentQuiz.explanation}
                </p>
              </div>
            )}

            {/* Next Question / Reset buttons */}
            <div className="flex items-center justify-between pt-2">
              <button
                onClick={handleResetQuiz}
                className="inline-flex items-center gap-1.5 text-xs text-stone-500 hover:text-stone-950 font-bold cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Restart Quiz</span>
              </button>

              {selectedOption !== null && (
                <button
                  onClick={handleNextQuiz}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0f4c5c] hover:bg-[#14532d] text-white text-sm font-bold rounded-xl shadow-xs transition-colors cursor-pointer"
                >
                  <span>Next Question</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
