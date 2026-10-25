import React, { useState, useMemo } from 'react';
import { Search, X, BookOpen, MapPin, Shield, Music, ArrowRight } from 'lucide-react';
import { GLOSSARY_DATA, GlossaryEntry } from '../data/glossaryData';
import { SETTLEMENTS_DATA, SONGS_DATA, CLANS_DATA } from '../data/heritageData';
import { PageId } from './Navbar';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: PageId) => void;
  onSelectGlossaryTerm?: (termId: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onNavigate,
  onSelectGlossaryTerm,
}) => {
  const [query, setQuery] = useState('');

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return { terms: [], settlements: [], songs: [], clans: [] };

    const terms = GLOSSARY_DATA.filter(
      (item) =>
        item.term.toLowerCase().includes(q) ||
        item.englishMeaning.toLowerCase().includes(q) ||
        (item.swahiliMeaning && item.swahiliMeaning.toLowerCase().includes(q)) ||
        (item.culturalContext && item.culturalContext.toLowerCase().includes(q))
    ).slice(0, 6);

    const settlements = SETTLEMENTS_DATA.filter(
      (s) =>
        s.name.toLowerCase().includes(q) ||
        s.constituencyOrArea.toLowerCase().includes(q) ||
        (s.description && s.description.toLowerCase().includes(q))
    ).slice(0, 4);

    const songs = SONGS_DATA.filter(
      (song) =>
        song.title.toLowerCase().includes(q) ||
        song.category.toLowerCase().includes(q) ||
        song.originalLyrics.some((l) => l.toLowerCase().includes(q))
    ).slice(0, 4);

    const clans = CLANS_DATA.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.roleDescription.toLowerCase().includes(q)
    ).slice(0, 4);

    return { terms, settlements, songs, clans };
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6 md:p-20 flex justify-center items-start">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-stone-950/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-[#fbf9f5] border border-stone-300 rounded-xl shadow-2xl overflow-hidden mt-6 sm:mt-12">
        {/* Search Input Bar */}
        <div className="relative border-b border-stone-200 bg-white px-4 py-3 flex items-center gap-3">
          <Search className="w-5 h-5 text-stone-400 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Kilwana vocabulary, clans, songs, or settlements..."
            className="w-full bg-transparent border-none text-stone-900 placeholder-stone-400 focus:outline-hidden text-base"
            autoFocus
          />
          {query ? (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-stone-400 hover:text-stone-700 rounded-md"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          ) : (
            <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[11px] font-mono text-stone-400 bg-stone-100 border border-stone-200 rounded">
              ESC
            </kbd>
          )}
        </div>

        {/* Results Area */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-6">
          {!query && (
            <div className="py-8 text-center text-stone-500 space-y-2">
              <p className="text-sm">Try searching for keywords like:</p>
              <div className="flex flex-wrap justify-center gap-2 pt-1">
                {['Hayu', 'Gasa', 'Kitoko', 'Mwaato', 'River Tana', 'Bura', 'Wayu', 'Buyuyu'].map(
                  (sample) => (
                    <button
                      key={sample}
                      onClick={() => setQuery(sample)}
                      className="text-xs px-2.5 py-1 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-md transition-colors"
                    >
                      {sample}
                    </button>
                  )
                )}
              </div>
            </div>
          )}

          {query &&
            results.terms.length === 0 &&
            results.settlements.length === 0 &&
            results.songs.length === 0 &&
            results.clans.length === 0 && (
              <div className="py-12 text-center text-stone-500">
                <p className="text-sm">No recorded results found for "{query}".</p>
                <p className="text-xs text-stone-400 mt-1">
                  You can check the full A–Z Glossary or explore the Kilwana Language Centre.
                </p>
              </div>
            )}

          {/* Kilwana Vocabulary Matches */}
          {results.terms.length > 0 && (
            <div>
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-stone-200">
                <span className="text-xs font-semibold uppercase tracking-wider text-stone-600 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-[#0f4c5c]" /> Kilwana Glossary ({results.terms.length})
                </span>
                <button
                  onClick={() => {
                    onClose();
                    onNavigate('glossary');
                  }}
                  className="text-xs text-[#0f4c5c] hover:underline flex items-center gap-1"
                >
                  View full glossary <ArrowRight className="w-3 h-3" />
                </button>
              </div>
              <div className="space-y-1.5">
                {results.terms.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      onClose();
                      if (onSelectGlossaryTerm) {
                        onSelectGlossaryTerm(item.id);
                      } else {
                        onNavigate('glossary');
                      }
                    }}
                    className="w-full text-left p-2.5 hover:bg-stone-100 rounded-lg transition-colors flex items-start justify-between gap-3 group"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-serif font-bold text-stone-900 group-hover:text-[#0f4c5c]">
                          {item.term}
                        </span>
                        <span className="text-[11px] text-stone-600 font-sans">
                          {item.category}
                        </span>
                        {item.status === 'pending_confirmation' && (
                          <span className="text-[10px] text-amber-700 bg-amber-50 px-1.5 py-0.2 border border-amber-200 rounded">
                            Requires Confirmation
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-stone-600 mt-0.5 line-clamp-1">
                        {item.englishMeaning}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-stone-300 group-hover:text-[#0f4c5c] shrink-0 mt-1" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Settlements Matches */}
          {results.settlements.length > 0 && (
            <div>
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-stone-200">
                <span className="text-xs font-semibold uppercase tracking-wider text-stone-600 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#9a3412]" /> Settlements & Homeland ({results.settlements.length})
                </span>
                <button
                  onClick={() => {
                    onClose();
                    onNavigate('geography');
                  }}
                  className="text-xs text-[#9a3412] hover:underline flex items-center gap-1"
                >
                  View geography <ArrowRight className="w-3 h-3" />
                </button>
              </div>
              <div className="space-y-1.5">
                {results.settlements.map((s, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      onClose();
                      onNavigate('geography');
                    }}
                    className="w-full text-left p-2.5 hover:bg-stone-100 rounded-lg transition-colors flex items-center justify-between group"
                  >
                    <div>
                      <span className="font-semibold text-stone-900 group-hover:text-[#9a3412] text-sm">
                        {s.name}
                      </span>
                      <p className="text-xs text-stone-500">{s.constituencyOrArea}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-stone-300 group-hover:text-[#9a3412] shrink-0" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Songs Matches */}
          {results.songs.length > 0 && (
            <div>
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-stone-200">
                <span className="text-xs font-semibold uppercase tracking-wider text-stone-600 flex items-center gap-1.5">
                  <Music className="w-3.5 h-3.5 text-teal-600" /> Traditional Songs & Lyrics ({results.songs.length})
                </span>
                <button
                  onClick={() => {
                    onClose();
                    onNavigate('arts');
                  }}
                  className="text-xs text-teal-700 hover:underline flex items-center gap-1"
                >
                  View arts & music <ArrowRight className="w-3 h-3" />
                </button>
              </div>
              <div className="space-y-1.5">
                {results.songs.map((song, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      onClose();
                      onNavigate('arts');
                    }}
                    className="w-full text-left p-2.5 hover:bg-stone-100 rounded-lg transition-colors flex items-center justify-between group"
                  >
                    <div>
                      <span className="font-semibold text-stone-900 group-hover:text-teal-700 text-sm">
                        {song.title}
                      </span>
                      <p className="text-xs text-stone-500 font-mono italic">
                        "{song.originalLyrics[0]}"
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-stone-300 group-hover:text-teal-700 shrink-0" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Clans Matches */}
          {results.clans.length > 0 && (
            <div>
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-stone-200">
                <span className="text-xs font-semibold uppercase tracking-wider text-stone-600 flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-amber-600" /> Traditional Clans ({results.clans.length})
                </span>
                <button
                  onClick={() => {
                    onClose();
                    onNavigate('governance');
                  }}
                  className="text-xs text-amber-700 hover:underline flex items-center gap-1"
                >
                  View governance <ArrowRight className="w-3 h-3" />
                </button>
              </div>
              <div className="space-y-1.5">
                {results.clans.map((clan, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      onClose();
                      onNavigate('governance');
                    }}
                    className="w-full text-left p-2.5 hover:bg-stone-100 rounded-lg transition-colors flex items-center justify-between group"
                  >
                    <div>
                      <span className="font-semibold text-stone-900 group-hover:text-amber-700 text-sm">
                        {clan.name} Clan
                      </span>
                      <p className="text-xs text-stone-500 line-clamp-1">{clan.roleDescription}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-stone-300 group-hover:text-amber-700 shrink-0" />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-4 py-3 bg-stone-100 border-t border-stone-200 flex items-center justify-between text-xs text-stone-500">
          <span>Search Kilwana vocabulary, traditions & settlements</span>
          <button
            onClick={onClose}
            className="px-3 py-1 bg-stone-200 hover:bg-stone-300 text-stone-700 rounded-md transition-colors font-medium"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
