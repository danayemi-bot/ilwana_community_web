import React, { useState } from 'react';
import { SETTLEMENTS_DATA } from '../data/heritageData';
import { PageId } from '../components/Navbar';
import { MapPin, Waves, AlertTriangle, Users, Search, ArrowRight } from 'lucide-react';

interface GeographyPageProps {
  onNavigate: (page: PageId) => void;
}

export const GeographyPage: React.FC<GeographyPageProps> = ({ onNavigate }) => {
  const [villageSearch, setVillageSearch] = useState('');

  const filteredVillages = SETTLEMENTS_DATA.filter(
    (v) =>
      v.name.toLowerCase().includes(villageSearch.toLowerCase()) ||
      v.constituencyOrArea.toLowerCase().includes(villageSearch.toLowerCase()) ||
      (v.description && v.description.toLowerCase().includes(villageSearch.toLowerCase()))
  );

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Header */}
      <div className="space-y-4 border-b-2 border-stone-300 pb-8">
        <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#9a3412]">
          <MapPin className="w-4 h-4" />
          <span>Section 03 · Territory & Ecology</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-black tracking-tight text-stone-950">
          Geography, Homeland & Settlements
        </h1>
        <p className="text-base sm:text-xl text-stone-950 leading-relaxed max-w-3xl font-normal">
          The geographical setting of the Ilwana Community has played a defining role in shaping its history, agricultural life, social organization, and cultural resilience along the lower reaches of the River Tana.
        </p>
      </div>

      {/* The River Tana Bond */}
      <section className="bg-white p-6 sm:p-8 rounded-3xl border-2 border-stone-300 shadow-xs space-y-6">
        <div className="flex items-center gap-3 text-[#0f4c5c]">
          <Waves className="w-7 h-7" />
          <h2 className="font-serif text-2xl sm:text-3xl font-black text-stone-950">
            The Centrality of the River Tana (Chaana)
          </h2>
        </div>

        {/* 2 River Tana Photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-2xl overflow-hidden border-2 border-teal-600 shadow-md">
            <img
              src="/assets/aistudio/chaana_de7f7d77.png"
              alt="Aerial horseshoe bend of River Tana"
              className="w-full h-56 object-cover"
            />
            <div className="bg-stone-950 text-stone-200 p-2.5 text-xs font-medium">
              <span className="font-black text-amber-400 block uppercase">River Meanders</span>
              Aerial view of the dramatic horseshoe bend of River Tana flowing through Ilwana territory.
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border-2 border-teal-600 shadow-md">
            <img
              src="/assets/aistudio/rivertana_a0788a57.png"
              alt="River Tana alluvial waters"
              className="w-full h-56 object-cover"
            />
            <div className="bg-stone-950 text-stone-200 p-2.5 text-xs font-medium">
              <span className="font-black text-amber-400 block uppercase">Alluvial Flow</span>
              The flowing waters and dense riverine canopy nourishing traditional floodplain agriculture.
            </div>
          </div>
        </div>

        <div className="prose max-w-none text-stone-950 leading-relaxed space-y-3 text-base sm:text-lg font-normal pt-2">
          <p>
            For the Ilwana Community, the River Tana (<em className="text-stone-950 font-bold">Chaana</em>) has been more than a physical waterway; it is the foundation of community survival for generations. Its fertile alluvial floodplains support recession agriculture, its waters supply fish and domestic needs, and its surface provides traditional transportation routes navigated by hand-carved canoes (<em className="text-stone-950 font-semibold">Waato</em>).
          </p>
          <p>
            The river also created unique cultural practices such as <strong className="text-stone-950 font-black">River Calling</strong>, where families living on opposite banks communicated loudly across the water without traveling long distances.
          </p>
        </div>
      </section>

      {/* Regional Distribution */}
      <section className="space-y-6">
        <h2 className="font-serif text-2xl sm:text-3xl font-black text-stone-950">
          Distribution by County & Settlement Hubs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl border-2 border-stone-300 shadow-2xs space-y-3">
            <span className="text-xs sm:text-sm font-mono font-bold text-[#0f4c5c]">PRIMARY HOMELAND</span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-950">Tana River County</h3>
            <p className="text-base text-stone-950 leading-relaxed font-normal">
              The historical and cultural heartland of the community. Key centers include <strong className="text-stone-950 font-bold">Bura Constituency</strong> (the strongest cultural concentration), <strong className="text-stone-950 font-bold">Gariseni</strong>, <strong className="text-stone-950 font-bold">Minjila</strong>, <strong className="text-stone-950 font-bold">Hola</strong>, and <strong className="text-stone-950 font-bold">Witu</strong>.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border-2 border-stone-300 shadow-2xs space-y-3">
            <span className="text-xs sm:text-sm font-mono font-bold text-[#9a3412]">DIASPORA & URBAN SETTLEMENTS</span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-950">Garissa, Mombasa & Nairobi</h3>
            <p className="text-base text-stone-950 leading-relaxed font-normal">
              In recent decades, education, trade, public service, and environmental displacements led families to settle in neighboring Garissa County and major urban centers, maintaining active family and cultural ties with the homeland.
            </p>
          </div>
        </div>
      </section>

      {/* Neighboring Communities */}
      <section className="space-y-6">
        <div className="border-b-2 border-stone-300 pb-3">
          <h2 className="font-serif text-2xl sm:text-3xl font-black text-stone-950">
            Interactions with Neighboring Communities
          </h2>
          <p className="text-base text-stone-950 font-medium">
            Centuries of coexistence, cultural exchange, and economic adaptation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="bg-white p-5 rounded-xl border-2 border-stone-300 space-y-2">
            <h3 className="font-serif text-xl font-black text-stone-950 flex items-center justify-between">
              <span>The Pokomo</span>
              <span className="text-xs font-mono font-bold text-[#0f4c5c] bg-teal-50 px-2 py-0.5 rounded">Bantu Neighbors</span>
            </h3>
            <p className="text-base text-stone-950 leading-relaxed font-normal">
              Both communities share life along the River Tana, agricultural traditions, and celebrated dances (Kitoko, Koras, Mashingwe). Although mistakenly grouped together by external writers, the Ilwana maintain their own distinct language (Kilwana), clans, and governance.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border-2 border-stone-300 space-y-2">
            <h3 className="font-serif text-xl font-black text-stone-950 flex items-center justify-between">
              <span>The Orma</span>
              <span className="text-xs font-mono font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded">Pastoral Neighbors</span>
            </h3>
            <p className="text-base text-stone-950 leading-relaxed font-normal">
              Long-standing trade, friendship, and shared grazing lands enabled extensive interaction. Many elderly Wailwana historically became fluent in the Orma language alongside Kilwana.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border-2 border-stone-300 space-y-2">
            <h3 className="font-serif text-xl font-black text-stone-950 flex items-center justify-between">
              <span>The Somali</span>
              <span className="text-xs font-mono font-bold text-stone-700 bg-stone-100 px-2 py-0.5 rounded">Regional Trade</span>
            </h3>
            <p className="text-base text-stone-950 leading-relaxed font-normal">
              Interactions in northern Tana River and Garissa encouraged many Ilwana families to diversify their livelihoods by adopting livestock keeping alongside riverbank farming and fishing.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border-2 border-stone-300 space-y-2">
            <h3 className="font-serif text-xl font-black text-stone-950 flex items-center justify-between">
              <span>The Munyoya</span>
              <span className="text-xs font-mono font-bold text-rose-800 bg-rose-50 px-2 py-0.5 rounded">Social Bonds</span>
            </h3>
            <p className="text-base text-stone-950 leading-relaxed font-normal">
              Centered largely around the Madogo area, relations between the Ilwana and Munyoya developed deep social roots through generations of intermarriage and peaceful neighborly cooperation.
            </p>
          </div>
        </div>
      </section>

      {/* Environmental Challenges */}
      <section className="bg-amber-50/70 p-6 sm:p-8 rounded-2xl border-2 border-amber-300 space-y-4">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-7 h-7 text-amber-900 shrink-0 mt-1" />
          <div className="space-y-2">
            <h3 className="font-serif text-2xl font-black text-amber-950">
              Environmental Challenges & Historical Insecurity
            </h3>
            <p className="text-base text-amber-950 leading-relaxed font-medium">
              Life in the semi-arid Tana River ecosystem has required tremendous resilience against ecological crises and historical raids:
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          <div className="bg-white p-5 rounded-xl border-2 border-amber-300 space-y-2">
            <h4 className="font-black text-stone-950 text-base">Mathenge Tree (Prosopis juliflora)</h4>
            <p className="text-sm text-stone-950 leading-relaxed font-normal">
              Introduced for drought afforestation, it became aggressively invasive, forming thorny thickets that choke indigenous pastures and damage livestock hooves.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border-2 border-amber-300 space-y-2">
            <h4 className="font-black text-stone-950 text-base">Seasonal Floods</h4>
            <p className="text-sm text-stone-950 leading-relaxed font-normal">
              Periodic heavy inundations of the River Tana have damaged settlements and crop fields, forcing temporary or permanent relocations.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border-2 border-amber-300 space-y-2">
            <h4 className="font-black text-stone-950 text-base">Historical Insecurity</h4>
            <p className="text-sm text-stone-950 leading-relaxed font-normal">
              Raids during the 20th century in northern areas forced families to migrate southward to safer havens such as Minjila and Gariseni.
            </p>
          </div>
        </div>
      </section>

      {/* Directory of Settlements */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b-2 border-stone-300 pb-4">
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-black text-stone-950">
              Documented Settlements & Villages
            </h2>
            <p className="text-base text-stone-950 font-medium">
              {SETTLEMENTS_DATA.length} ancestral settlements recorded from community knowledge.
            </p>
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-5 h-5 text-stone-500 absolute left-3 top-3" />
            <input
              type="text"
              value={villageSearch}
              onChange={(e) => setVillageSearch(e.target.value)}
              placeholder="Filter settlements..."
              className="w-full pl-10 pr-3 py-2.5 text-base bg-white border-2 border-stone-300 rounded-xl font-medium text-stone-950 focus:outline-hidden focus:border-[#0f4c5c]"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredVillages.map((village, idx) => (
            <div
              key={idx}
              className="bg-white p-5 rounded-xl border-2 border-stone-300 shadow-2xs space-y-2 hover:border-[#0f4c5c] transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="font-serif font-black text-stone-950 text-lg">
                  {village.name}
                </span>
                <span className="text-xs font-mono font-bold text-[#0f4c5c] bg-teal-50 px-2 py-0.5 rounded">
                  {village.constituencyOrArea}
                </span>
              </div>
              {village.description && (
                <p className="text-sm text-stone-950 leading-relaxed font-normal">
                  {village.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
