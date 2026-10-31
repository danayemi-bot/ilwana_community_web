import React from 'react';
import { PageId } from '../components/Navbar';
import { Hammer, Utensils, Shirt, Flame, Waves, Sparkles, CheckCircle2 } from 'lucide-react';

interface MaterialCulturePageProps {
  onNavigate: (page: PageId) => void;
  onSelectGlossaryTerm?: (termId: string) => void;
}

export const MaterialCulturePage: React.FC<MaterialCulturePageProps> = ({
  onNavigate,
  onSelectGlossaryTerm,
}) => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Header */}
      <div className="space-y-4 border-b-2 border-stone-300 pb-8">
        <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-black uppercase tracking-widest text-[#9a3412] bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
          <Hammer className="w-4 h-4" />
          <span>Section 09 · Material Heritage & Indigenous Technology</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-black tracking-tight text-stone-950">
          Traditional Crafts, Cuisine, Canoe & Beekeeping
        </h1>
        <p className="text-base sm:text-xl text-stone-950 leading-relaxed max-w-3xl font-medium">
          Material culture embodies the practical ingenuity of the Wailwana. From woodworking the dugout canoe (Waato) and weaving palm fiber implements (Jolo, Kapu, Irraanga) to river gastronomy (Dokwena, Chika) and sophisticated forest beekeeping (Mwaato).
        </p>
      </div>

      {/* Craftsmanship & Palm Weaving Showcase */}
      <section className="bg-white p-6 sm:p-8 rounded-3xl border-2 border-stone-300 shadow-sm space-y-6">
        <div className="border-b border-stone-200 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <span className="text-xs font-mono font-black text-[#0f4c5c] uppercase tracking-wider block">
              INDIGENOUS FIBER ARTS
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-black text-stone-950 mt-1">
              Dum Palm Weaving: Irraanga, Locholo & Kapu
            </h2>
          </div>
          <span className="text-xs font-black px-3 py-1 bg-amber-100 text-amber-950 rounded-full border border-amber-300 shrink-0">
            Communal Craft Forum
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-5 rounded-2xl overflow-hidden border-2 border-amber-400 shadow-md">
            <img
              src="/assets/aistudio/beutiful_ilwana_items_af972299.png"
              alt="Wailwana Women Weaving Traditional Items"
              className="w-full h-auto object-cover"
            />
            <div className="bg-stone-950 text-stone-200 p-3 text-xs font-medium">
              <span className="font-black text-amber-400 block uppercase tracking-wide">Authentic Community Scene</span>
              Wailwana women seated together on woven floor mats plaiting dum palm fronds into domestic items.
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            <p className="text-base sm:text-lg text-stone-950 leading-relaxed font-normal">
              Along the alluvial floodplains of the River Tana, dum palm leaves are harvested, split into fine strips, naturally seasoned, and plaited with great patience. Weaving is both an economic livelihood and a vital communal circle where folklore, moral proverbs, and Kilwana idioms are transmitted from grandmothers to granddaughters.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-4 bg-[#fdfbf7] rounded-xl border-2 border-stone-300 text-sm space-y-1">
                <span className="font-black text-stone-950 text-base block">Irraanga (Floor Mat)</span>
                <p className="text-stone-950 font-normal leading-relaxed">
                  Used for household sitting, prayer mats, and elder consultative gatherings.
                </p>
              </div>
              <div className="p-4 bg-[#fdfbf7] rounded-xl border-2 border-stone-300 text-sm space-y-1">
                <span className="font-black text-stone-950 text-base block">Jolo (Winnowing Trays)</span>
                <p className="text-stone-950 font-normal leading-relaxed">
                  Plural of Locholo; trays used daily to clean grain against the river wind.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Photos Grid: Locholo, Jolo Collection, Kapu, Irraanga */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t border-stone-200">
          <div className="bg-[#fdfbf7] rounded-xl border-2 border-stone-300 overflow-hidden space-y-2 p-3">
            <img
              src="/assets/aistudio/locholo__739438a8.png"
              alt="Locholo winnowing tray"
              className="w-full h-36 object-cover rounded-lg border border-stone-200"
            />
            <h4 className="font-serif font-black text-stone-950 text-base">Locholo</h4>
            <p className="text-xs text-stone-950 leading-relaxed">
              Traditional winnowing tray with reinforced rim for separating grain from chaff.
            </p>
          </div>

          <div className="bg-[#fdfbf7] rounded-xl border-2 border-stone-300 overflow-hidden space-y-2 p-3">
            <img
              src="/assets/aistudio/jolo__many-locholo__c8bb4a21.png"
              alt="Jolo multiple trays"
              className="w-full h-36 object-cover rounded-lg border border-stone-200"
            />
            <h4 className="font-serif font-black text-stone-950 text-base">Jolo (Plural)</h4>
            <p className="text-xs text-stone-950 leading-relaxed">
              Assorted winnowing trays displaying intricate dyed weave motifs.
            </p>
          </div>

          <div className="bg-[#fdfbf7] rounded-xl border-2 border-stone-300 overflow-hidden space-y-2 p-3">
            <img
              src="/assets/aistudio/kapu__ifmany_kapwera__17b5e87c.png"
              alt="Kapu woven baskets"
              className="w-full h-36 object-cover rounded-lg border border-stone-200"
            />
            <h4 className="font-serif font-black text-stone-950 text-base">Kapu (pl. Kapwera)</h4>
            <p className="text-xs text-stone-950 leading-relaxed">
              Deep woven farm basket for carrying harvest of pumpkin and maize.
            </p>
          </div>

          <div className="bg-[#fdfbf7] rounded-xl border-2 border-stone-300 overflow-hidden space-y-2 p-3">
            <img
              src="/assets/aistudio/irraanga_c0a652ba.png"
              alt="Irraanga floor mat"
              className="w-full h-36 object-cover rounded-lg border border-stone-200"
            />
            <h4 className="font-serif font-black text-stone-950 text-base">Irraanga</h4>
            <p className="text-xs text-stone-950 leading-relaxed">
              Herringbone plaited dum palm floor mat spread on the ground.
            </p>
          </div>
        </div>
      </section>

      {/* Waato: Traditional Dugout Canoe */}
      <section className="bg-white p-6 sm:p-8 rounded-3xl border-2 border-stone-300 shadow-sm space-y-6">
        <div className="flex items-center gap-3 text-[#0f4c5c]">
          <Waves className="w-7 h-7" />
          <div>
            <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-[#0f4c5c] font-black">
              RIVER TANA NAVIGATION & TRANSPORT
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-black text-stone-950">
              The Waato (Dugout River Canoe)
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-5 rounded-2xl overflow-hidden border-2 border-teal-600 shadow-md">
            <img
              src="/assets/aistudio/waato_d034ef5b.png"
              alt="Waato traditional dugout canoe on River Tana"
              className="w-full h-auto object-cover"
            />
            <div className="bg-stone-950 text-stone-200 p-3 text-xs font-medium">
              <span className="font-black text-amber-400 block uppercase tracking-wide">River Watercraft</span>
              The hand-hewn Waato moored on the lush banks of the River Tana.
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            <p className="text-base sm:text-lg text-stone-950 leading-relaxed font-normal">
              The <strong className="text-stone-950 font-black">Waato</strong> is an indigenous watercraft sculpted from a single solid trunk of native riverine hardwood. It is the primary means of navigating the River Tana: transporting families across the river, ferrying agricultural harvests, setting fish traps, and providing vital emergency rescue during monsoon floods.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-4 bg-[#fdfbf7] rounded-xl border-2 border-stone-300 text-sm space-y-1">
                <span className="font-black text-stone-950 text-base block">Mokoobi (Hardwood Paddle)</span>
                <p className="text-stone-950 font-normal leading-relaxed">
                  Short, wide wooden paddle used to steer and drive the canoe through swift deep currents.
                </p>
              </div>
              <div className="p-4 bg-[#fdfbf7] rounded-xl border-2 border-stone-300 text-sm space-y-1">
                <span className="font-black text-stone-950 text-base block">Boodo (Riverbed Pole)</span>
                <p className="text-stone-950 font-normal leading-relaxed">
                  A 5–8 meter long pole pushed against the river bottom in shallow sandbanks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Indigenous Beekeeping: Mwaato & Myaato */}
      <section className="bg-amber-50/80 p-6 sm:p-8 rounded-3xl border-2 border-amber-300 space-y-6">
        <div className="flex items-center gap-3 text-amber-950">
          <Flame className="w-7 h-7 text-amber-800" />
          <div>
            <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-amber-900 font-black">
              INDIGENOUS ECOLOGICAL SCIENCE
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-black text-amber-950">
              Traditional Beekeeping: Mwaato & Honey Technology
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-5 grid grid-cols-2 gap-3">
            <div className="rounded-xl overflow-hidden border-2 border-amber-400 shadow-sm">
              <img
                src="/assets/aistudio/mwaato_f078a079.png"
                alt="Mwaato beehive in tree fork"
                className="w-full h-44 object-cover"
              />
              <div className="bg-stone-900 text-amber-300 p-2 text-[11px] font-black text-center">
                Mwaato (The Hive)
              </div>
            </div>
            <div className="rounded-xl overflow-hidden border-2 border-amber-400 shadow-sm">
              <img
                src="/assets/aistudio/myaato_f6fbd02d.png"
                alt="Myaato beehives in canopy"
                className="w-full h-44 object-cover"
              />
              <div className="bg-stone-900 text-amber-300 p-2 text-[11px] font-black text-center">
                Myaato (In Canopy)
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-3">
            <p className="text-base sm:text-lg text-stone-950 leading-relaxed font-normal">
              Beekeeping is one of the most sophisticated traditional economic sciences of the Wailwana. The cylindrical hive (<strong className="text-stone-950 font-black">Mwaato</strong>, plural <strong className="text-stone-950 font-black">Myaato</strong>) is hollowed from fallen logs, sealed at each end with carved discs (<strong className="text-stone-950 font-black">Begele</strong>), baited with fragrant resin (<strong className="text-stone-950 font-black">Nooma</strong>), and secured high in tree forks to protect colonies from predators.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="p-3.5 bg-white rounded-xl border border-amber-300 text-sm space-y-1">
                <span className="font-black text-amber-950 text-sm block">Kimmule (Smoking Bundle)</span>
                <p className="text-stone-950 font-normal leading-relaxed text-xs sm:text-sm">
                  Herbal cord bundle burned at one end to produce calm, cool smoke during nocturnal harvests.
                </p>
              </div>
              <div className="p-3.5 bg-white rounded-xl border border-amber-300 text-sm space-y-1">
                <span className="font-black text-amber-950 text-sm block">Oki (Indigenous Honey)</span>
                <p className="text-stone-950 font-normal leading-relaxed text-xs sm:text-sm">
                  Treasured for its rich herbal flavor, medicinal properties, and value in customary ceremonies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Traditional Gastronomy & River Fish Staple */}
      <section className="space-y-6">
        <div className="border-b-2 border-stone-300 pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-[#0f4c5c]">
            <Utensils className="w-6 h-6" />
            <h2 className="font-serif text-2xl sm:text-3xl font-black text-stone-950">
              River Tana Fish & Traditional Cuisine
            </h2>
          </div>
          <span className="text-xs font-mono font-black text-stone-700 bg-stone-100 px-3 py-1 rounded-full border border-stone-300">
            Dokwena & Chika Fish
          </span>
        </div>

        {/* Fish Feature Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-5 rounded-2xl border-2 border-stone-300 flex flex-col sm:flex-row items-center gap-4 hover:border-[#0f4c5c] transition-colors">
            <img
              src="/assets/aistudio/Dokwena_675413dd.png"
              alt="Dokwena fish from River Tana"
              className="w-full sm:w-44 h-36 object-cover rounded-xl border-2 border-teal-200 shrink-0"
            />
            <div className="space-y-2">
              <span className="text-xs font-mono font-black text-[#0f4c5c] uppercase bg-teal-50 px-2.5 py-0.5 rounded">Freshwater Staple</span>
              <h3 className="font-serif text-xl font-black text-stone-950">Dokwena</h3>
              <p className="text-sm text-stone-950 font-normal leading-relaxed">
                Large freshwater river fish caught with woven traps. Often prepared in <strong className="text-stone-950 font-bold">Matolya Sehe</strong> (fish cooked with green bananas).
              </p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border-2 border-stone-300 flex flex-col sm:flex-row items-center gap-4 hover:border-[#0f4c5c] transition-colors">
            <img
              src="/assets/aistudio/chika_cc6be5e5.png"
              alt="Chika fish fingerlings"
              className="w-full sm:w-44 h-36 object-cover rounded-xl border-2 border-teal-200 shrink-0"
            />
            <div className="space-y-2">
              <span className="text-xs font-mono font-black text-[#0f4c5c] uppercase bg-teal-50 px-2.5 py-0.5 rounded">Seasonal Harvest</span>
              <h3 className="font-serif text-xl font-black text-stone-950">Chika</h3>
              <p className="text-sm text-stone-950 font-normal leading-relaxed">
                Small river fish and fingerlings harvested during river recession periods, dried on mats or cooked fresh in rich savory broth.
              </p>
            </div>
          </div>
        </div>

        {/* Food Dishes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
          <div className="bg-white p-5 rounded-xl border-2 border-stone-300 space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="font-serif text-lg font-black text-stone-950">Buyuyu</h4>
              <span className="text-xs font-mono font-bold text-[#0f4c5c] bg-teal-50 px-2 py-0.5 rounded">Pumpkin</span>
            </div>
            <p className="text-sm text-stone-950 leading-relaxed font-normal">
              Slow-cooked with maize in <strong className="text-stone-950 font-bold">Haradya Buyuyu</strong>, blended with the Lupekecho implement.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border-2 border-stone-300 space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="font-serif text-lg font-black text-stone-950">Konole</h4>
              <span className="text-xs font-mono font-bold text-[#0f4c5c] bg-teal-50 px-2 py-0.5 rounded">Maize & Legumes</span>
            </div>
            <p className="text-sm text-stone-950 leading-relaxed font-normal">
              Maize boiled with cowpeas or beans and stirred into a dense nutritious dish with the wooden Mwiko paddle.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border-2 border-stone-300 space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="font-serif text-lg font-black text-stone-950">Makaaruka</h4>
              <span className="text-xs font-mono font-bold text-[#0f4c5c] bg-teal-50 px-2 py-0.5 rounded">Watermelon</span>
            </div>
            <p className="text-sm text-stone-950 leading-relaxed font-normal">
              Riverbank watermelon eaten fresh or stewed in the unique sweet dish <strong className="text-stone-950 font-bold">Haradya Makaaruka</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Traditional Clothing & Attire */}
      <section className="space-y-6">
        <div className="border-b-2 border-stone-300 pb-3">
          <div className="flex items-center gap-2 text-[#9a3412]">
            <Shirt className="w-6 h-6" />
            <h2 className="font-serif text-2xl sm:text-3xl font-black text-stone-950">
              Traditional Clothing & Dress
            </h2>
          </div>
          <p className="text-base text-stone-950 font-medium mt-0.5">
            Distinctive garments reflecting modesty, social identity, and regional coastal trade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-2xl border-2 border-stone-300 shadow-2xs space-y-3 hover:border-[#0f4c5c] transition-colors">
            <span className="text-xs sm:text-sm font-mono font-black text-[#0f4c5c] bg-teal-50 px-2 py-0.5 rounded uppercase">WOMEN'S TRADITIONAL ATTIRE</span>
            <h3 className="font-serif text-xl sm:text-2xl font-black text-stone-950">Haagoodo, Wiili & Gapsara</h3>
            <p className="text-base text-stone-950 leading-relaxed font-normal">
              <strong className="text-stone-950 font-black">Haagoodo:</strong> A traditional head-covering garment worn by Ilwana women signifying cultural dignity, modesty, and communal identity.
            </p>
            <p className="text-base text-stone-950 leading-relaxed font-normal">
              <strong className="text-stone-950 font-black">Wiili & Gapsara:</strong> Layered fabrics and dresses worn across generations and adapted through historical coastal trade relations.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border-2 border-stone-300 shadow-2xs space-y-3 hover:border-[#9a3412] transition-colors">
            <span className="text-xs sm:text-sm font-mono font-black text-[#9a3412] bg-amber-50 px-2 py-0.5 rounded uppercase">MEN'S TRADITIONAL ATTIRE</span>
            <h3 className="font-serif text-xl sm:text-2xl font-black text-stone-950">Banaadiri, Kikoi & Shati</h3>
            <p className="text-base text-stone-950 leading-relaxed font-normal">
              <strong className="text-stone-950 font-black">Banaadiri:</strong> Distinctive traditional attire historically worn by Wailwana men prior to contemporary fashion changes.
            </p>
            <p className="text-base text-stone-950 leading-relaxed font-normal">
              <strong className="text-stone-950 font-black">Kikoi & Shati:</strong> Woven waist-wraps and light shirts adapted through Indian Ocean trade routes while preserving Ilwana identity.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
