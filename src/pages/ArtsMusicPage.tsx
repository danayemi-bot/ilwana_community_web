import React, { useState } from 'react';
import { SONGS_DATA } from '../data/heritageData';
import { PageId } from '../components/Navbar';
import { Music, Radio, Disc, Volume2, Sparkles, AlertCircle, ArrowRight } from 'lucide-react';

interface ArtsMusicPageProps {
  onNavigate: (page: PageId) => void;
}

export const ArtsMusicPage: React.FC<ArtsMusicPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Kitoko', 'Koras', 'Mashingwe', 'Mkao', 'Hayu Celebrations'];

  const filteredSongs = SONGS_DATA.filter(
    (s) => selectedCategory === 'All' || s.category === selectedCategory
  );

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Header */}
      <div className="space-y-4 border-b border-stone-200 pb-8">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#0f4c5c]">
          <Music className="w-4 h-4" />
          <span>Section 08 · Expressive Arts & Oral Performance</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-stone-900">
          Traditional Dances, Songs & Instruments
        </h1>
        <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-3xl">
          Music and dance in Ilwana society are living conduits of identity, collective solidarity, moral instruction, and generational transmission along the River Tana.
        </p>
      </div>

      {/* Traditional Dances Overview */}
      <section className="space-y-6">
        <div className="border-b border-stone-200 pb-3">
          <h2 className="font-serif text-2xl font-bold text-stone-900">
            Principal Traditional Dances
          </h2>
          <p className="text-sm text-stone-500">
            Performed during weddings, communal labor, childbirth, and annual monarchical celebrations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-2xs space-y-2">
            <span className="text-xs font-mono font-semibold text-[#0f4c5c]">WEDDINGS & FESTIVITIES</span>
            <h3 className="font-serif text-lg font-bold text-stone-900">Kitoko</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Joyous celebratory dance performed with vigorous rhythm. Both men and women participate, with men often leading principal movements.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-2xs space-y-2">
            <span className="text-xs font-mono font-semibold text-rose-700">WOMEN'S TRADITION</span>
            <h3 className="font-serif text-lg font-bold text-stone-900">Koras</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Particularly associated with women. Features synchronized handclapping, metric foot steps, and repeated choral refrains.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-2xs space-y-2">
            <span className="text-xs font-mono font-semibold text-[#9a3412]">COMMUNAL CELEBRATION</span>
            <h3 className="font-serif text-lg font-bold text-stone-900">Mashingwe</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              High-spirited dance bringing the entire village together to celebrate good harvests, peace, and family milestones.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-2xs space-y-2">
            <span className="text-xs font-mono font-semibold text-teal-700">CHILDBIRTH SACRED RITE</span>
            <h3 className="font-serif text-lg font-bold text-stone-900">Ukaamwaale</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Dedicated maternal dance performed exclusively by women in the birth hut to welcome a new infant and honor motherhood.
            </p>
          </div>
        </div>
      </section>

      {/* Musical Instruments */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-xs space-y-4">
        <h2 className="font-serif text-2xl font-bold text-stone-900">
          Traditional Musical Instruments
        </h2>
        <div className="prose max-w-none text-stone-700 leading-relaxed space-y-3 text-base">
          <p>
            Traditional musical instruments provide the acoustic pulse that guides dancers and anchors song tempos:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-2">
            <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-1">
              <span className="font-serif font-bold text-base text-stone-900">Ngoma</span>
              <p className="text-xs text-stone-600">
                Traditional percussion drum crafted from hollowed wood and stretched leather; establishes the core beat.
              </p>
            </div>
            <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-1">
              <span className="font-serif font-bold text-base text-stone-900">Bati</span>
              <p className="text-xs text-stone-500 italic">
                Documented instrument name; exact construction and acoustic role pending elder documentation.
              </p>
            </div>
            <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-1">
              <span className="font-serif font-bold text-base text-stone-900">Bunki</span>
              <p className="text-xs text-stone-500 italic">
                Preserved musical instrument term; physical details and playing techniques pending verification.
              </p>
            </div>
            <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-1">
              <span className="font-serif font-bold text-base text-stone-900">Firiimbi</span>
              <p className="text-xs text-stone-500 italic">
                Traditional wind or rhythmic instrument preserved in cultural vocabulary awaiting full acoustic notes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Verbatim Documented Traditional Songs */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200 pb-4">
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
              Verbatim Documented Song Lyrics
            </h2>
            <p className="text-sm text-stone-500 mt-0.5">
              Original Kilwana lyrics preserved exactly as documented, without unverified translations.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-stone-100 rounded-lg">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                  selectedCategory === cat
                    ? 'bg-white text-stone-900 shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Note on Translation Preservation */}
        <div className="flex items-start gap-2.5 p-4 bg-stone-100 rounded-xl border border-stone-200 text-xs text-stone-600">
          <AlertCircle className="w-4 h-4 text-stone-500 shrink-0 mt-0.5" />
          <p>
            <strong>Preservation Policy:</strong> In strict fidelity to oral literature standards, the original words of documented songs are presented in their authentic Kilwana text without speculative English translations. Future linguistic fieldwork will assist in recording definitive line-by-line analyses.
          </p>
        </div>

        {/* Songs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredSongs.map((song, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl border border-stone-200 shadow-2xs space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-semibold px-2.5 py-1 bg-stone-100 text-stone-700 rounded">
                    {song.category}
                  </span>
                  <Disc className="w-4 h-4 text-stone-400" />
                </div>

                <h3 className="font-serif text-xl font-bold text-stone-900">
                  {song.title}
                </h3>

                <p className="text-xs text-stone-600 leading-relaxed">
                  {song.description}
                </p>

                {/* Lyrics Block */}
                <div className="p-4 bg-stone-50 rounded-xl border border-stone-200/80 font-serif text-sm leading-relaxed text-stone-900 space-y-1.5 italic">
                  {song.originalLyrics.map((line, lIdx) => (
                    <p key={lIdx}>{line}</p>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-stone-100 text-[11px] text-stone-500">
                <strong>Cultural Context:</strong> {song.context}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Oral Storytelling & Practical Apprenticeship */}
      <section className="bg-stone-50 p-6 sm:p-8 rounded-2xl border border-stone-200 space-y-3">
        <h3 className="font-serif text-xl font-bold text-stone-900">
          Oral Storytelling & Practical Skill Apprenticeship
        </h3>
        <p className="text-sm text-stone-700 leading-relaxed">
          Before formal schooling, the fireside of extended families provided moral instruction, historical education, and folklore. Respected elders gathered children to narrate animal allegories and community histories, while fathers and mothers taught technical crafts through demonstration—constructing beehives (<em>Mwaato</em>), carving dugout canoes (<em>Waato</em>), weaving baskets (<em>Kapu</em>), and preparing traditional foods.
        </p>
      </section>
    </div>
  );
};
