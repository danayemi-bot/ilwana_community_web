import React from 'react';
import { PageId } from '../components/Navbar';
import { Compass, BookOpen, Sun, HeartHandshake, CheckCircle2 } from 'lucide-react';

interface ReligionPageProps {
  onNavigate: (page: PageId) => void;
}

export const ReligionPage: React.FC<ReligionPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Header */}
      <div className="space-y-4 border-b-2 border-stone-300 pb-8">
        <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#0f4c5c]">
          <BookOpen className="w-4 h-4" />
          <span>Section 06 · Faith & Worldview</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-black tracking-tight text-stone-950">
          Religion & Belief Systems
        </h1>
        <p className="text-base sm:text-xl text-stone-950 leading-relaxed max-w-3xl font-normal">
          Religion occupies a central place in the life of the Ilwana Community. Islam, embraced by over ninety-nine percent of the Wailwana, shapes spiritual life, moral ethics, education, and social conduct.
        </p>
      </div>

      {/* The Centrality of Islam */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border-2 border-stone-300 shadow-xs space-y-4">
        <div className="flex items-center gap-2 text-[#0f4c5c]">
          <span className="text-xs sm:text-sm font-mono font-bold uppercase tracking-widest text-[#0f4c5c]">
            FAITH & COMMUNITY IDENTITY
          </span>
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl font-black text-stone-950">
          Islam as the Dominant Religion
        </h2>
        <div className="prose max-w-none text-stone-950 leading-relaxed space-y-4 text-base sm:text-lg font-normal">
          <p>
            Today, more than <strong className="text-stone-950 font-extrabold">ninety-nine percent</strong> of the Wailwana identify as Muslims, making Islam one of the defining characteristics of the community.
          </p>
          <p>
            Islam spread gradually along the lower River Tana through maritime trade, migration, intermarriage, and prolonged interaction with Muslim communities along the East African coastline. Over successive generations, Islamic teachings became woven into the fabric of everyday life, governing worship, marriage contracts, inheritance, charity, and ethical interaction.
          </p>
          <p>
            Mosques serve as communal hubs for daily prayers, Friday congregations, and major celebrations such as <strong className="text-stone-950 font-bold">Eid al-Fitr</strong> and <strong className="text-stone-950 font-bold">Eid al-Adha</strong>, reinforcing social cohesion and shared brotherhood.
          </p>
        </div>
      </section>

      {/* Religious Leadership & Islamic Scholarship */}
      <section className="space-y-6">
        <div className="border-b-2 border-stone-300 pb-3">
          <h2 className="font-serif text-2xl sm:text-3xl font-black text-stone-950">
            Religious Leadership & Centers of Islamic Scholarship
          </h2>
          <p className="text-base text-stone-950 font-medium">
            From local village Madrasas to renowned coastal institutions of higher learning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl border-2 border-stone-300 space-y-3 hover:border-[#0f4c5c] transition-colors">
            <span className="text-xs sm:text-sm font-mono font-bold text-[#0f4c5c] bg-teal-50 px-2 py-0.5 rounded">LOCAL EDUCATION</span>
            <h3 className="font-serif text-xl font-bold text-stone-950">Village Madrasas</h3>
            <p className="text-base text-stone-950 leading-relaxed font-normal">
              Children are introduced to Islamic principles from an early age in community Madrasas. Guided by qualified <em className="text-stone-950 font-semibold">Maalimu</em> (teachers), students memorize the Holy Qur'an, learn basic Arabic script, and study Islamic etiquette and moral values alongside formal schooling.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border-2 border-stone-300 space-y-3 hover:border-[#9a3412] transition-colors">
            <span className="text-xs sm:text-sm font-mono font-bold text-[#9a3412] bg-amber-50 px-2 py-0.5 rounded">ADVANCED SCHOLARSHIP</span>
            <h3 className="font-serif text-xl font-bold text-stone-950">Coastal Scholarly Centers</h3>
            <p className="text-base text-stone-950 leading-relaxed font-normal">
              Aspiring scholars traveled to prestigious coastal centers of Islamic scholarship—notably the celebrated <strong className="text-stone-950 font-bold">Riyadha Mosque & College in Lamu</strong>, as well as institutions in <strong className="text-stone-950 font-bold">Mambrui</strong> and <strong className="text-stone-950 font-bold">Malindi</strong>. Returning graduates serve the community as venerated <em className="text-stone-950 font-semibold">Sheikhs</em> and <em className="text-stone-950 font-semibold">Imams</em>.
            </p>
          </div>
        </div>
      </section>

      {/* Traditional Environmental Knowledge */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border-2 border-stone-300 shadow-xs space-y-4">
        <div className="flex items-center gap-2 text-amber-800">
          <Sun className="w-6 h-6" />
          <h2 className="font-serif text-2xl sm:text-3xl font-black text-stone-950">
            Traditional Ecological Knowledge
          </h2>
        </div>
        <div className="prose max-w-none text-stone-950 leading-relaxed space-y-4 text-base sm:text-lg font-normal">
          <p>
            Before and alongside the consolidation of formal Islamic theology, ancestors of the Wailwana developed deep empirical observations of the River Tana ecosystem. This indigenous wisdom guided agriculture, livestock management, and flood safety:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-5 bg-[#fdfbf7] rounded-xl border-2 border-stone-300 space-y-2">
              <span className="font-serif font-black text-stone-950 text-base">Animal Behaviour</span>
              <p className="text-sm sm:text-base text-stone-950 leading-relaxed font-normal">Unusual movements of wild birds, insects, or aquatic life signaled imminent river flooding or seasonal rains.</p>
            </div>
            <div className="p-5 bg-[#fdfbf7] rounded-xl border-2 border-stone-300 space-y-2">
              <span className="font-serif font-black text-stone-950 text-base">Botanical Phenology</span>
              <p className="text-sm sm:text-base text-stone-950 leading-relaxed font-normal">The blossoming of specific riverine trees indicated the optimal window for planting recession maize and pumpkins.</p>
            </div>
            <div className="p-5 bg-[#fdfbf7] rounded-xl border-2 border-stone-300 space-y-2">
              <span className="font-serif font-black text-stone-950 text-base">Wind & Sky Currents</span>
              <p className="text-sm sm:text-base text-stone-950 leading-relaxed font-normal">Shifting wind directions from the Indian Ocean indicated approaching monsoon fronts or prolonged dry intervals.</p>
            </div>
          </div>
          <p className="text-sm text-stone-800 pt-2 font-medium">
            With the embrace of Islam, indigenous spiritual rituals were replaced, while valuable practical ecological insights continued to be passed down as practical environmental science.
          </p>
        </div>
      </section>

      {/* Harmony of Faith and Culture */}
      <section className="bg-emerald-900 text-white p-8 rounded-2xl space-y-3">
        <div className="flex items-center gap-2 text-emerald-300">
          <HeartHandshake className="w-5 h-5" />
          <h3 className="font-serif text-xl font-bold text-white">
            Complementarity of Faith & Cultural Heritage
          </h3>
        </div>
        <p className="text-sm sm:text-base text-emerald-100 leading-relaxed">
          Within the Ilwana Community, religion and culture exist in mutual harmony. Customary practices that were inconsistent with Islamic principles were voluntarily set aside over time, while cultural expressions emphasizing hospitality, honesty, family loyalty, communal solidarity (Mkao), and peaceful dispute resolution flourished under Islamic ethical guidance.
        </p>
      </section>
    </div>
  );
};
