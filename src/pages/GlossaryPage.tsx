import React, { useState, useMemo, useEffect } from 'react';
import { GLOSSARY_DATA, GlossaryEntry, TermCategory, VerificationStatus } from '../data/glossaryData';
import { PageId } from '../components/Navbar';
import {
  BookOpen,
  Search,
  Filter,
  CheckCircle2,
  AlertCircle,
  Volume2,
  RotateCcw,
  Sparkles,
  Layers,
  ArrowRight
} from 'lucide-react';

interface GlossaryPageProps {
  onNavigate: (page: PageId) => void;
  selectedTermId?: string;
  onClearSelectedTerm?: () => void;
}

export const GlossaryPage: React.FC<GlossaryPageProps> = ({
  onNavigate,
  selectedTermId,
  onClearSelectedTerm,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [statusFilter, setStatusFilter] = useState<string>('All');
  const [selectedLetter, setSelectedLetter] = useState<string>('All');

  // Categories list
  const categories: (string | TermCategory)[] = [
    'All',
    'Governance & Leadership',
    'Language & Expressions',
    'Kinship & Social',
    'Food & Gastronomy',
    'Material Tools & Crafts',
    'Music, Dance & Arts',
    'Clothing & Adornment',
    'Clans',
    'Geography & Environment',
  ];

  // Letters present in data
  const alphabet = useMemo(() => {
    const letters = new Set<string>();
    GLOSSARY_DATA.forEach((entry) => {
      const firstChar = entry.term.charAt(0).toUpperCase();
      if (/[A-Z]/.test(firstChar)) {
        letters.add(firstChar);
      }
    });
    return Array.from(letters).sort();
  }, []);

  // Filtered entries
  const filteredEntries = useMemo(() => {
    return GLOSSARY_DATA.filter((entry) => {
      // If a specific term was navigated to
      if (selectedTermId && entry.id === selectedTermId) {
        return true;
      }

      // Search match
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        entry.term.toLowerCase().includes(q) ||
        entry.englishMeaning.toLowerCase().includes(q) ||
        (entry.swahiliMeaning && entry.swahiliMeaning.toLowerCase().includes(q)) ||
        (entry.culturalContext && entry.culturalContext.toLowerCase().includes(q));

      // Category match
      const matchesCategory =
        selectedCategory === 'All' || entry.category === selectedCategory;

      // Status match
      const matchesStatus =
        statusFilter === 'All' || entry.status === statusFilter;

      // Letter match
      const firstChar = entry.term.charAt(0).toUpperCase();
      const matchesLetter =
        selectedLetter === 'All' || firstChar === selectedLetter;

      return matchesSearch && matchesCategory && matchesStatus && matchesLetter;
    }).sort((a, b) => a.term.localeCompare(b.term));
  }, [searchQuery, selectedCategory, statusFilter, selectedLetter, selectedTermId]);

  // Group by alphabetical letters
  const groupedEntries = useMemo(() => {
    const groups: { [key: string]: GlossaryEntry[] } = {};
    filteredEntries.forEach((entry) => {
      const letter = entry.term.charAt(0).toUpperCase();
      if (!groups[letter]) groups[letter] = [];
      groups[letter].push(entry);
    });
    return groups;
  }, [filteredEntries]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setStatusFilter('All');
    setSelectedLetter('All');
    if (onClearSelectedTerm) onClearSelectedTerm();
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="space-y-4 border-b border-stone-200 pb-8">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#0f4c5c]">
          <BookOpen className="w-4 h-4" />
          <span>Section 10 · Compulsory Heritage Reference</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-stone-900">
          Glossary of Kilwana Words & Cultural Terms
        </h1>
        <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-3xl">
          An authoritative reference containing the local-language terminology, clan titles, leadership offices, material implements, traditional foods, and cultural concepts documented from the Ilwana Community.
        </p>
      </div>

      {/* Accuracy & Curatorial Note */}
      <div className="bg-stone-50 border border-stone-200 rounded-xl p-5 text-xs text-stone-600 leading-relaxed space-y-2">
        <div className="flex items-center gap-2 font-semibold text-stone-900">
          <AlertCircle className="w-4 h-4 text-[#0f4c5c]" />
          <span>Linguistic Accuracy & Verification Standard</span>
        </div>
        <p>
          In accordance with community preservation standards, this glossary presents verified English meanings and cultural context where established by community knowledge. Where a term lacks a verified English translation, it is explicitly annotated with <em>"English meaning not yet confirmed"</em> to safeguard linguistic integrity and avoid speculative translations. This glossary also serves as the reference appendix following the documentation of Ilwana life and culture.
        </p>
      </div>

      {/* Search & Filter Controls */}
      <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs space-y-5">
        {/* Search Bar */}
        <div className="relative">
          <Search className="w-5 h-5 text-stone-400 absolute left-3.5 top-3.5" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              if (selectedTermId && onClearSelectedTerm) onClearSelectedTerm();
            }}
            placeholder="Search by Kilwana word, English meaning, or cultural concept..."
            className="w-full pl-11 pr-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-stone-900 placeholder-stone-400 focus:outline-hidden focus:bg-white focus:border-[#0f4c5c] text-sm sm:text-base"
          />
        </div>

        {/* Categories Bar */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs font-semibold text-stone-500 uppercase tracking-wider">
            <span>Filter by Category</span>
            <span className="text-stone-400 font-mono">{filteredEntries.length} entries shown</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  if (selectedTermId && onClearSelectedTerm) onClearSelectedTerm();
                }}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-[#0f4c5c] text-white shadow-2xs'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Verification Status & Letter Row */}
        <div className="pt-2 border-t border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          {/* Verification Status */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-stone-500 font-medium">Status:</span>
            <div className="flex items-center gap-1">
              <button
                onClick={() => setStatusFilter('All')}
                className={`px-2.5 py-1 text-xs rounded-md transition-colors ${
                  statusFilter === 'All'
                    ? 'bg-stone-900 text-white font-medium'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setStatusFilter('confirmed')}
                className={`px-2.5 py-1 text-xs rounded-md transition-colors flex items-center gap-1 ${
                  statusFilter === 'confirmed'
                    ? 'bg-emerald-800 text-white font-medium'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                <CheckCircle2 className="w-3 h-3 text-emerald-300" />
                <span>Verified</span>
              </button>
              <button
                onClick={() => setStatusFilter('pending_confirmation')}
                className={`px-2.5 py-1 text-xs rounded-md transition-colors flex items-center gap-1 ${
                  statusFilter === 'pending_confirmation'
                    ? 'bg-amber-800 text-white font-medium'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                <AlertCircle className="w-3 h-3 text-amber-300" />
                <span>Pending Elder Review</span>
              </button>
            </div>
          </div>

          {/* Reset button */}
          {(searchQuery || selectedCategory !== 'All' || statusFilter !== 'All' || selectedLetter !== 'All' || selectedTermId) && (
            <button
              onClick={handleResetFilters}
              className="text-xs text-[#9a3412] hover:underline flex items-center gap-1 font-medium self-start sm:self-auto"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Reset all filters
            </button>
          )}
        </div>

        {/* A-Z Alphabetical Jump Rail */}
        <div className="pt-3 border-t border-stone-100 flex flex-wrap items-center gap-1">
          <span className="text-xs font-mono text-stone-400 mr-2">A–Z:</span>
          <button
            onClick={() => setSelectedLetter('All')}
            className={`w-7 h-7 text-xs font-mono rounded flex items-center justify-center transition-colors ${
              selectedLetter === 'All'
                ? 'bg-[#0f4c5c] text-white font-bold'
                : 'text-stone-600 hover:bg-stone-100'
            }`}
          >
            All
          </button>
          {alphabet.map((letter) => (
            <button
              key={letter}
              onClick={() => setSelectedLetter(letter)}
              className={`w-7 h-7 text-xs font-mono rounded flex items-center justify-center transition-colors ${
                selectedLetter === letter
                  ? 'bg-[#0f4c5c] text-white font-bold'
                  : 'text-stone-700 hover:bg-stone-100'
              }`}
            >
              {letter}
            </button>
          ))}
        </div>
      </div>

      {/* Entries List */}
      <div className="space-y-12">
        {Object.keys(groupedEntries).length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-stone-200 p-8 space-y-3">
            <BookOpen className="w-8 h-8 text-stone-400 mx-auto" />
            <h3 className="font-serif text-lg font-bold text-stone-800">
              No matching glossary entries found
            </h3>
            <p className="text-sm text-stone-500 max-w-md mx-auto">
              Try adjusting your search query, selecting another category, or resetting active filters.
            </p>
            <button
              onClick={handleResetFilters}
              className="mt-3 px-4 py-2 bg-stone-900 text-white text-xs font-medium rounded-lg hover:bg-stone-800"
            >
              Clear All Filters
            </button>
          </div>
        ) : (
          Object.keys(groupedEntries)
            .sort()
            .map((letter) => (
              <section key={letter} className="space-y-4">
                {/* Alphabet Anchor */}
                <div className="flex items-center gap-4 border-b-2 border-stone-300 pb-2">
                  <span className="font-serif text-3xl font-bold text-[#0f4c5c] font-display">
                    {letter}
                  </span>
                  <span className="text-xs font-mono text-stone-400">
                    ({groupedEntries[letter].length} {groupedEntries[letter].length === 1 ? 'entry' : 'entries'})
                  </span>
                </div>

                {/* Entry Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {groupedEntries[letter].map((entry) => (
                    <article
                      key={entry.id}
                      id={`term-${entry.id}`}
                      className={`bg-white p-5 sm:p-6 rounded-2xl border-2 transition-all space-y-3.5 ${
                        selectedTermId === entry.id
                          ? 'border-[#0f4c5c] ring-3 ring-[#0f4c5c]/30 shadow-lg'
                          : 'border-stone-300 shadow-xs hover:border-[#0f4c5c]'
                      }`}
                    >
                      {/* Term Header */}
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 className="font-serif text-2xl font-extrabold text-stone-950 tracking-tight">
                            {entry.term}
                          </h3>
                          {entry.phoneticHint && (
                            <span className="text-xs font-mono font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 inline-block mt-0.5">
                              [{entry.phoneticHint}]
                            </span>
                          )}
                          {entry.singularPluralNote && (
                            <span className="block text-xs font-mono font-bold text-[#0f4c5c] mt-1">
                              {entry.singularPluralNote}
                            </span>
                          )}
                        </div>

                        <div className="flex flex-col items-end gap-1.5">
                          <span className="text-xs font-mono uppercase font-bold px-2.5 py-1 bg-stone-100 text-stone-900 rounded border border-stone-200">
                            {entry.category}
                          </span>
                          {entry.status === 'pending_confirmation' ? (
                            <span className="text-xs font-bold text-amber-900 bg-amber-100 px-2.5 py-1 border border-amber-300 rounded">
                              Pending Elder Review
                            </span>
                          ) : (
                            <span className="text-xs font-bold text-emerald-950 bg-emerald-100 px-2.5 py-1 border border-emerald-300 rounded flex items-center gap-1">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" /> Confirmed
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Meaning in format: Kilwana term — English meaning */}
                      <div className="text-base sm:text-lg text-stone-950 font-medium leading-relaxed border-t-2 border-stone-200 pt-3">
                        <span className="font-serif font-extrabold text-stone-950">{entry.term}</span> —{' '}
                        <span className="font-bold text-stone-950">{entry.englishMeaning}</span>
                      </div>

                      {/* Swahili Equivalent where applicable */}
                      {entry.swahiliMeaning && (
                        <div className="text-sm font-semibold text-stone-900">
                          Kiswahili: <strong className="text-stone-950 underline decoration-teal-500 font-extrabold">{entry.swahiliMeaning}</strong>
                        </div>
                      )}

                      {/* Cultural Context Note */}
                      {entry.culturalContext && (
                        <div className="text-sm sm:text-base text-stone-900 bg-[#fdfbf7] p-3.5 rounded-xl border-2 border-stone-200 leading-relaxed font-normal">
                          <span className="font-bold text-stone-950 block mb-1">Cultural Context:</span>
                          {entry.culturalContext}
                        </div>
                      )}

                      {/* Cross References */}
                      {entry.crossReferences && entry.crossReferences.length > 0 && (
                        <div className="pt-2 border-t border-stone-100 flex items-center gap-1.5 flex-wrap text-xs text-stone-500">
                          <span className="text-[11px] font-mono text-stone-400">Related:</span>
                          {entry.crossReferences.map((ref) => (
                            <button
                              key={ref}
                              onClick={() => {
                                setSearchQuery(ref);
                                window.scrollTo({ top: 300, behavior: 'smooth' });
                              }}
                              className="px-2 py-0.5 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded text-[11px] transition-colors"
                            >
                              {ref}
                            </button>
                          ))}
                        </div>
                      )}
                    </article>
                  ))}
                </div>
              </section>
            ))
        )}
      </div>

      {/* Future Expansion Note */}
      <section className="bg-stone-100 p-6 sm:p-8 rounded-2xl border border-stone-200 text-center space-y-3">
        <h3 className="font-serif text-lg font-bold text-stone-900">
          Continuing Language & Cultural Documentation
        </h3>
        <p className="text-xs sm:text-sm text-stone-600 max-w-2xl mx-auto leading-relaxed">
          This glossary represents a solid foundation documenting terms recorded in historical community accounts. As knowledgeable elders, Kilwana native speakers, and youth contribute further insights, this database will continue to be expanded and refined.
        </p>
        <button
          onClick={() => onNavigate('contribute')}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0f4c5c] hover:underline pt-1"
        >
          <span>Learn how to contribute community knowledge</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </section>
    </div>
  );
};
