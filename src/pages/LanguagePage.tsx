import React, { useState } from 'react';
import { GLOSSARY_DATA, GlossaryEntry } from '../data/glossaryData';
import { PageId } from '../components/Navbar';
import { Feather, BookOpen, Volume2, ShieldAlert, ArrowRight, CheckCircle2 } from 'lucide-react';

interface LanguagePageProps {
  onNavigate: (page: PageId) => void;
  onSelectGlossaryTerm?: (termId: string) => void;
}

export const LanguagePage: React.FC<LanguagePageProps> = ({ onNavigate, onSelectGlossaryTerm }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState<string>('');

  // Curate language centre vocabulary (language expressions & kinship terms)
  const languageEntries = GLOSSARY_DATA.filter(
    (item) =>
      item.category === 'Language & Expressions' ||
      item.category === 'Kinship & Social'
  );

  const categories = ['All', 'Language & Expressions', 'Kinship & Social'];

  const filteredEntries = languageEntries.filter((item) => {
    const matchesCategory =
      selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch =
      item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.englishMeaning.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (item.swahiliMeaning && item.swahiliMeaning.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Header */}
      <div className="space-y-4 border-b border-stone-200 pb-8">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#0f4c5c]">
          <Feather className="w-4 h-4" />
          <span>Section 04 · Linguistic Preservation</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-stone-900">
          Kilwana Language Centre
        </h1>
        <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-3xl">
          Kilwana is the indigenous Bantu language spoken by the Ilwana Community. It carries the wisdom, oral histories, philosophies, songs, and communal memories of the Wailwana across generations.
        </p>
      </div>

      {/* Language Classification & Status */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-xs space-y-3">
          <span className="text-xs font-mono font-semibold text-[#0f4c5c]">CLASSIFICATION</span>
          <h2 className="font-serif text-xl font-bold text-stone-900">
            An Independent Bantu Language
          </h2>
          <p className="text-sm text-stone-600 leading-relaxed">
            Kilwana belongs to the Bantu language family of Eastern and Central Africa. While sharing ancient structural roots with neighboring coastal Bantu tongues, Kilwana has evolved its own distinct phonology, rich vocabulary, and expressions that reflect the unique environmental and historical journey of the Wailwana along the River Tana.
          </p>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-xs space-y-3">
          <span className="text-xs font-mono font-semibold text-[#9a3412]">REGIONAL MULTILINGUALISM</span>
          <h2 className="font-serif text-xl font-bold text-stone-900">
            A Multilingual Environment
          </h2>
          <p className="text-sm text-stone-600 leading-relaxed">
            Living at the cultural crossroads of the Coast and North Eastern regions, the Wailwana have long excelled in multilingualism:
          </p>
          <ul className="text-xs text-stone-600 space-y-1.5 pt-1">
            <li>• <strong>Kiswahili:</strong> Widely spoken for trade, regional communication, and national affairs.</li>
            <li>• <strong>Orma:</strong> Fluent among older generations due to historical proximity and livestock barter.</li>
            <li>• <strong>Somali:</strong> Conversational in northern border trading areas like Mororo and Garissa.</li>
            <li>• <strong>English:</strong> Used in formal education, government institutions, and professional life.</li>
          </ul>
        </div>
      </section>

      {/* Modern Challenges Facing the Language */}
      <section className="bg-amber-50/50 p-6 sm:p-8 rounded-2xl border border-amber-200 space-y-4">
        <div className="flex items-start gap-3">
          <ShieldAlert className="w-6 h-6 text-amber-800 shrink-0 mt-0.5" />
          <div className="space-y-2">
            <h3 className="font-serif text-xl font-bold text-stone-900">
              Challenges to Long-Term Language Survival
            </h3>
            <p className="text-sm text-stone-700 leading-relaxed">
              Like many indigenous African languages, Kilwana faces significant preservation pressures in the 21st century:
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
          <div className="bg-white p-4 rounded-xl border border-amber-200 space-y-1">
            <h4 className="font-semibold text-stone-900 text-sm">Limited Documentation</h4>
            <p className="text-xs text-stone-600">
              Extremely scarce published grammars, literature, and educational readers compared to dominant national tongues.
            </p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-amber-200 space-y-1">
            <h4 className="font-semibold text-stone-900 text-sm">Digital Underrepresentation</h4>
            <p className="text-xs text-stone-600">
              Very few online resources or digital tools available for young speakers in modern web spaces.
            </p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-amber-200 space-y-1">
            <h4 className="font-semibold text-stone-900 text-sm">Urban Language Shift</h4>
            <p className="text-xs text-stone-600">
              Youth in towns and cities increasingly speak Kiswahili and English at home, reducing daily immersion in Kilwana.
            </p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-amber-200 space-y-1">
            <h4 className="font-semibold text-stone-900 text-sm">Curricular Absence</h4>
            <p className="text-xs text-stone-600">
              Kilwana is currently not incorporated as an instructional language within Kenya's primary or secondary curriculum.
            </p>
          </div>
        </div>
      </section>

      {/* Selected Everyday Vocabulary Explorer */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200 pb-4">
          <div>
            <h2 className="font-serif text-2xl font-bold text-stone-900">
              Selected Kilwana Vocabulary & Expressions
            </h2>
            <p className="text-sm text-stone-500">
              Common terms of greeting, family relations, and everyday speech.
            </p>
          </div>

          <button
            onClick={() => onNavigate('glossary')}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#0f4c5c] text-white text-xs font-semibold rounded-lg hover:bg-[#135d70] transition-colors self-start sm:self-auto"
          >
            <BookOpen className="w-4 h-4" />
            <span>Open Complete Glossary (A–Z)</span>
          </button>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
          <div className="flex items-center gap-1.5 p-1 bg-stone-100 rounded-lg w-full sm:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-white text-stone-900 shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search word or English meaning..."
            className="w-full sm:w-64 px-3 py-1.5 text-sm bg-white border border-stone-200 rounded-lg focus:outline-hidden focus:border-[#0f4c5c]"
          />
        </div>

        {/* Vocabulary Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {filteredEntries.map((item) => (
            <div
              key={item.id}
              className="bg-white p-5 sm:p-6 rounded-2xl border-2 border-stone-300 shadow-xs hover:border-[#0f4c5c] transition-all space-y-3.5"
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="font-serif text-2xl font-extrabold text-stone-950">
                    {item.term}
                  </h3>
                  {item.phoneticHint && (
                    <span className="text-xs font-mono font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 inline-block mt-0.5">
                      [{item.phoneticHint}]
                    </span>
                  )}
                </div>
                <span className="text-xs font-mono font-bold uppercase px-2.5 py-1 bg-stone-100 text-stone-900 rounded border border-stone-200 shrink-0">
                  {item.category}
                </span>
              </div>

              <div className="space-y-1.5 border-t-2 border-stone-100 pt-3">
                <div className="text-base font-bold text-stone-950">
                  {item.englishMeaning}
                </div>
                {item.swahiliMeaning && (
                  <div className="text-sm font-semibold text-stone-900">
                    Kiswahili: <strong className="text-stone-950 underline decoration-teal-500 font-extrabold">{item.swahiliMeaning}</strong>
                  </div>
                )}
              </div>

              {item.culturalContext && (
                <p className="text-sm text-stone-900 leading-relaxed font-normal bg-[#fdfbf7] p-3 rounded-xl border border-stone-200">
                  "{item.culturalContext}"
                </p>
              )}

              <div className="pt-2 flex items-center justify-between text-xs text-stone-500 border-t border-stone-100">
                <span className="flex items-center gap-1 text-emerald-800 font-bold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Verified
                </span>
                <button
                  onClick={() => {
                    if (onSelectGlossaryTerm) onSelectGlossaryTerm(item.id);
                    onNavigate('glossary');
                  }}
                  className="text-[#0f4c5c] hover:underline font-bold text-xs"
                >
                  View full entry →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
