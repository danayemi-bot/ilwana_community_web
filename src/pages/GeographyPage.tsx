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
      <div className="space-y-4 border-b border-stone-200 pb-8">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#9a3412]">
          <MapPin className="w-4 h-4" />
          <span>Section 03 · Territory & Ecology</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-stone-900">
          Geography, Homeland & Settlements
        </h1>
        <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-3xl">
          The geographical setting of the Ilwana Community has played a defining role in shaping its history, agricultural life, social organization, and cultural resilience along the lower reaches of the River Tana.
        </p>
      </div>

      {/* The River Tana Bond */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-xs space-y-4">
        <div className="flex items-center gap-3 text-[#0f4c5c]">
          <Waves className="w-6 h-6" />
          <h2 className="font-serif text-2xl font-bold text-stone-900">
            The Centrality of the River Tana (Chaana)
          </h2>
        </div>
        <div className="prose max-w-none text-stone-700 leading-relaxed space-y-3 text-base">
          <p>
            For the Ilwana Community, the River Tana has been more than a physical waterway; it has been the foundation of community survival for generations. Its fertile alluvial floodplains support recession agriculture, its waters supply fish and domestic needs, and its surface provides traditional transportation routes navigated by hand-carved canoes (<em>Waato</em>).
          </p>
          <p>
            The river also created unique cultural practices such as <em>River Calling</em>, where families living on opposite banks communicated loudly across the water without traveling long distances.
          </p>
        </div>
      </section>

      {/* Regional Distribution */}
      <section className="space-y-6">
        <h2 className="font-serif text-2xl font-bold text-stone-900">
          Distribution by County & Settlement Hubs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-2xs space-y-3">
            <span className="text-xs font-mono font-semibold text-[#0f4c5c]">PRIMARY HOMELAND</span>
            <h3 className="font-serif text-xl font-bold text-stone-900">Tana River County</h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              The historical and cultural heartland of the community. Key centers include <strong>Bura Constituency</strong> (the strongest cultural concentration), <strong>Gariseni</strong>, <strong>Minjila</strong>, <strong>Hola</strong>, and <strong>Witu</strong>.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-2xs space-y-3">
            <span className="text-xs font-mono font-semibold text-[#9a3412]">DIASPORA & URBAN SETTLEMENTS</span>
            <h3 className="font-serif text-xl font-bold text-stone-900">Garissa, Mombasa & Nairobi</h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              In recent decades, education, trade, public service, and environmental displacements led families to settle in neighboring Garissa County and major urban centers, maintaining active family and cultural ties with the homeland.
            </p>
          </div>
        </div>
      </section>

      {/* Neighboring Communities */}
      <section className="space-y-6">
        <div className="border-b border-stone-200 pb-3">
          <h2 className="font-serif text-2xl font-bold text-stone-900">
            Interactions with Neighboring Communities
          </h2>
          <p className="text-sm text-stone-500">
            Centuries of coexistence, cultural exchange, and economic adaptation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="bg-stone-50 p-5 rounded-xl border border-stone-200 space-y-2">
            <h3 className="font-serif text-lg font-bold text-stone-900 flex items-center justify-between">
              <span>The Pokomo</span>
              <span className="text-xs font-mono text-stone-400">Bantu Neighbors</span>
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              Both communities share life along the River Tana, agricultural traditions, and celebrated dances (Kitoko, Koras, Mashingwe). Although mistakenly grouped together by external writers, the Ilwana maintain their own distinct language (Kilwana), clans, and governance.
            </p>
          </div>

          <div className="bg-stone-50 p-5 rounded-xl border border-stone-200 space-y-2">
            <h3 className="font-serif text-lg font-bold text-stone-900 flex items-center justify-between">
              <span>The Orma</span>
              <span className="text-xs font-mono text-stone-400">Pastoral Neighbors</span>
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              Long-standing trade, friendship, and shared grazing lands enabled extensive interaction. Many elderly Wailwana historically became fluent in the Orma language alongside Kilwana.
            </p>
          </div>

          <div className="bg-stone-50 p-5 rounded-xl border border-stone-200 space-y-2">
            <h3 className="font-serif text-lg font-bold text-stone-900 flex items-center justify-between">
              <span>The Somali</span>
              <span className="text-xs font-mono text-stone-400">Regional Trade</span>
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              Interactions in northern Tana River and Garissa encouraged many Ilwana families to diversify their livelihoods by adopting livestock keeping alongside riverbank farming and fishing.
            </p>
          </div>

          <div className="bg-stone-50 p-5 rounded-xl border border-stone-200 space-y-2">
            <h3 className="font-serif text-lg font-bold text-stone-900 flex items-center justify-between">
              <span>The Munyoya</span>
              <span className="text-xs font-mono text-stone-400">Social Bonds</span>
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              Centered largely around the Madogo area, relations between the Ilwana and Munyoya developed deep social roots through generations of intermarriage and peaceful neighborly cooperation.
            </p>
          </div>
        </div>
      </section>

      {/* Environmental Challenges */}
      <section className="bg-amber-50/60 p-6 sm:p-8 rounded-2xl border border-amber-200 space-y-4">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-6 h-6 text-amber-800 shrink-0 mt-1" />
          <div className="space-y-2">
            <h3 className="font-serif text-xl font-bold text-amber-950">
              Environmental Challenges & Historical Insecurity
            </h3>
            <p className="text-sm sm:text-base text-amber-900 leading-relaxed">
              Life in the semi-arid Tana River ecosystem has required tremendous resilience against ecological crises and historical raids:
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          <div className="bg-white p-4 rounded-lg border border-amber-200 space-y-1">
            <h4 className="font-semibold text-stone-900 text-sm">Mathenge Tree (Prosopis juliflora)</h4>
            <p className="text-xs text-stone-600">
              Introduced for drought afforestation, it became aggressively invasive, forming thorny thickets that choke indigenous pastures and damage livestock hooves.
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg border border-amber-200 space-y-1">
            <h4 className="font-semibold text-stone-900 text-sm">Seasonal Floods</h4>
            <p className="text-xs text-stone-600">
              Periodic heavy inundations of the River Tana have damaged settlements and crop fields, forcing temporary or permanent relocations.
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg border border-amber-200 space-y-1">
            <h4 className="font-semibold text-stone-900 text-sm">Historical Shifta Insecurity</h4>
            <p className="text-xs text-stone-600">
              Raids during the 20th century in northern areas forced families to migrate southward to safer havens such as Minjila and Gariseni.
            </p>
          </div>
        </div>
      </section>

      {/* Directory of Settlements */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200 pb-4">
          <div>
            <h2 className="font-serif text-2xl font-bold text-stone-900">
              Documented Settlements & Villages
            </h2>
            <p className="text-sm text-stone-500">
              {SETTLEMENTS_DATA.length} ancestral settlements recorded from community knowledge.
            </p>
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
            <input
              type="text"
              value={villageSearch}
              onChange={(e) => setVillageSearch(e.target.value)}
              placeholder="Filter settlements..."
              className="w-full pl-9 pr-3 py-2 text-sm bg-white border border-stone-200 rounded-lg focus:outline-hidden focus:border-[#0f4c5c]"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredVillages.map((village, idx) => (
            <div
              key={idx}
              className="bg-white p-4 rounded-xl border border-stone-200 shadow-2xs space-y-1.5"
            >
              <div className="flex items-center justify-between">
                <span className="font-serif font-bold text-stone-900 text-base">
                  {village.name}
                </span>
                <span className="text-[11px] font-mono text-stone-400">
                  {village.constituencyOrArea}
                </span>
              </div>
              {village.description && (
                <p className="text-xs text-stone-600 line-clamp-2">
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
