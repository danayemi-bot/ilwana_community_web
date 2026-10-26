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
      <div className="space-y-4 border-b-2 border-stone-300 pb-8">
        <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#0f4c5c]">
          <Music className="w-4 h-4" />
          <span>Section 08 · Expressive Arts & Oral Performance</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-black tracking-tight text-stone-950">
          Traditional Dances, Songs & Instruments
        </h1>
        <p className="text-base sm:text-xl text-stone-950 leading-relaxed max-w-3xl font-normal">
          Music and dance in Ilwana society are living conduits of identity, collective solidarity, moral instruction, and generational transmission along the River Tana.
        </p>
      </div>

      {/* Traditional Dances Overview */}
      <section className="space-y-6">
        <div className="border-b-2 border-stone-300 pb-3">
          <h2 className="font-serif text-2xl sm:text-3xl font-black text-stone-950">
            Principal Traditional Dances
          </h2>
          <p className="text-base text-stone-950 font-medium">
            Performed during weddings, communal labor, childbirth, and annual monarchical celebrations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-xl border-2 border-stone-300 shadow-2xs space-y-2 hover:border-[#0f4c5c] transition-colors">
            <span className="text-xs font-mono font-bold text-[#0f4c5c] bg-teal-50 px-2 py-0.5 rounded">WEDDINGS & FESTIVITIES</span>
            <h3 className="font-serif text-xl font-black text-stone-950">Kitoko</h3>
            <p className="text-sm text-stone-950 leading-relaxed font-normal">
              Joyous celebratory dance performed with vigorous rhythm. Both men and women participate, with men often leading principal movements.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border-2 border-stone-300 shadow-2xs space-y-2 hover:border-rose-700 transition-colors">
            <span className="text-xs font-mono font-bold text-rose-800 bg-rose-50 px-2 py-0.5 rounded">WOMEN'S TRADITION</span>
            <h3 className="font-serif text-xl font-black text-stone-950">Koras</h3>
            <p className="text-sm text-stone-950 leading-relaxed font-normal">
              Particularly associated with women. Features synchronized handclapping, metric foot steps, and repeated choral refrains.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border-2 border-stone-300 shadow-2xs space-y-2 hover:border-[#9a3412] transition-colors">
            <span className="text-xs font-mono font-bold text-[#9a3412] bg-amber-50 px-2 py-0.5 rounded">COMMUNAL CELEBRATION</span>
            <h3 className="font-serif text-xl font-black text-stone-950">Mashingwe</h3>
            <p className="text-sm text-stone-950 leading-relaxed font-normal">
              High-spirited dance bringing the entire village together to celebrate good harvests, peace, and family milestones.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border-2 border-stone-300 shadow-2xs space-y-2 hover:border-teal-700 transition-colors">
            <span className="text-xs font-mono font-bold text-teal-800 bg-teal-50 px-2 py-0.5 rounded">CHILDBIRTH SACRED RITE</span>
            <h3 className="font-serif text-xl font-black text-stone-950">Ukaamwaale</h3>
            <p className="text-sm text-stone-950 leading-relaxed font-normal">
              Dedicated maternal dance performed exclusively by women in the birth hut to welcome a new infant and honor motherhood.
            </p>
          </div>
        </div>
      </section>

      {/* Musical Instruments */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border-2 border-stone-300 shadow-xs space-y-4">
        <h2 className="font-serif text-2xl sm:text-3xl font-black text-stone-950">
          Traditional Musical Instruments
        </h2>
        <div className="prose max-w-none text-stone-950 leading-relaxed space-y-3 text-base sm:text-lg font-normal">
          <p>
            Traditional musical instruments provide the acoustic pulse that guides dancers and anchors song tempos:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-2">
            <div className="p-4 bg-[#fdfbf7] rounded-xl border-2 border-stone-300 space-y-1">
              <span className="font-serif font-black text-lg text-stone-950">Ngoma</span>
              <p className="text-sm text-stone-950 leading-relaxed font-normal">
                Traditional percussion drum crafted from hollowed wood and stretched leather; establishes the core beat.
              </p>
            </div>
            <div className="p-4 bg-[#fdfbf7] rounded-xl border-2 border-stone-300 space-y-1">
              <span className="font-serif font-black text-lg text-stone-950">Bati</span>
              <p className="text-sm text-stone-950 leading-relaxed font-normal italic">
                Documented instrument name; exact construction and acoustic role pending elder documentation.
              </p>
            </div>
            <div className="p-4 bg-[#fdfbf7] rounded-xl border-2 border-stone-300 space-y-1">
              <span className="font-serif font-black text-lg text-stone-950">Bunki</span>
              <p className="text-sm text-stone-950 leading-relaxed font-normal italic">
                Preserved musical instrument term; physical details and playing techniques pending verification.
              </p>
            </div>
            <div className="p-4 bg-[#fdfbf7] rounded-xl border-2 border-stone-300 space-y-1">
              <span className="font-serif font-black text-lg text-stone-950">Firiimbi</span>
              <p className="text-sm text-stone-950 leading-relaxed font-normal italic">
                Traditional wind or rhythmic instrument preserved in cultural vocabulary awaiting full acoustic notes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Verbatim Documented Traditional Songs */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b-2 border-stone-300 pb-4">
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-black text-stone-950">
              Verbatim Documented Song Lyrics
            </h2>
            <p className="text-base text-stone-950 font-medium mt-0.5">
              Original Kilwana lyrics preserved exactly as documented, without unverified translations.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-stone-100 rounded-xl border border-stone-300">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-2 text-xs sm:text-sm font-bold rounded-lg transition-colors ${
                  selectedCategory === cat
                    ? 'bg-[#0f4c5c] text-white shadow-xs'
                    : 'text-stone-900 hover:text-stone-950 hover:bg-stone-200/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Note on Translation Preservation */}
        <div className="flex items-start gap-3 p-4 bg-[#fdfbf7] rounded-xl border-2 border-stone-300 text-sm text-stone-950">
          <AlertCircle className="w-5 h-5 text-[#0f4c5c] shrink-0 mt-0.5" />
          <p className="font-normal leading-relaxed">
            <strong className="text-stone-950 font-black">Preservation Policy:</strong> In strict fidelity to oral literature standards, the original words of documented songs are presented in their authentic Kilwana text without speculative English translations. Future linguistic fieldwork will assist in recording definitive line-by-line analyses.
          </p>
        </div>

        {/* Songs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredSongs.map((song, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl border-2 border-stone-300 shadow-2xs space-y-4 flex flex-col justify-between hover:border-[#0f4c5c] transition-colors"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold px-3 py-1 bg-teal-50 text-[#0f4c5c] rounded-md border border-teal-200">
                    {song.category}
                  </span>
                  <Disc className="w-5 h-5 text-stone-400" />
                </div>

                <h3 className="font-serif text-2xl font-black text-stone-950">
                  {song.title}
                </h3>

                <p className="text-sm sm:text-base text-stone-950 leading-relaxed font-normal">
                  {song.description}
                </p>

                {/* Lyrics Block */}
                <div className="p-5 bg-[#fdfbf7] rounded-xl border-2 border-stone-300 font-serif text-base sm:text-lg leading-relaxed text-stone-950 space-y-2 font-medium">
                  {song.originalLyrics.map((line, lIdx) => (
                    <p key={lIdx} className="tracking-wide">{line}</p>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t-2 border-stone-200 text-xs sm:text-sm text-stone-950">
                <strong className="font-bold text-stone-950">Cultural Context:</strong> <span className="font-normal">{song.context}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Oral Storytelling & Practical Apprenticeship */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border-2 border-stone-300 space-y-3">
        <h3 className="font-serif text-2xl font-black text-stone-950">
          Oral Storytelling & Practical Skill Apprenticeship
        </h3>
        <p className="text-base text-stone-950 leading-relaxed font-normal">
          Before formal schooling, the fireside of extended families provided moral instruction, historical education, and folklore. Respected elders gathered children to narrate animal allegories and community histories, while fathers and mothers taught technical crafts through demonstration—constructing beehives (<em className="text-stone-950 font-semibold">Mwaato</em>), carving dugout canoes (<em className="text-stone-950 font-semibold">Waato</em>), weaving baskets (<em className="text-stone-950 font-semibold">Kapu</em>), and preparing traditional foods.
        </p>
      </section>
    </div>
  );
};
