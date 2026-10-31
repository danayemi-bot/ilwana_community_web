import React from 'react';
import { PageId } from '../components/Navbar';
import {
  BookOpen,
  Compass,
  Shield,
  Music,
  Users,
  Feather,
  Hammer,
  ArrowRight,
  Sparkles,
  ChevronRight,
  Camera,
  Waves,
  Crown,
  Heart,
  PlayCircle,
  MessageCircle,
  MapPin,
  Building2,
  CheckCircle2,
  Flame,
  Search
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onSelectGlossaryTerm?: (termId: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onSelectGlossaryTerm }) => {
  // Quick greeting samples
  const sampleGreetings = [
    { term: 'Bariyowe', meaning: 'How are you?', swahili: 'Habari yako?', hint: 'bah-ree-YOH-weh' },
    { term: 'Baryaa toloo', meaning: 'Good morning', swahili: 'Habari ya asubuhi', hint: 'bahr-YAH toh-LOH' },
    { term: 'Usidoo', meaning: 'Good afternoon', swahili: 'Umeshindaje?', hint: 'oo-SEE-doh' },
    { term: 'Serekoo', meaning: 'Greetings to you all', swahili: 'Habari zenu', hint: 'seh-reh-KOH' },
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-20 bg-[#fcfbf9]">
      {/* =========================================================================
          GRAND HERO SECTION: Replicating web_landing_pg.png Composition Exactly
          ========================================================================= */}
      <section className="relative overflow-hidden bg-stone-950 text-white min-h-[620px] lg:min-h-[740px] flex flex-col justify-between">
        
        {/* Full-bleed Scenic River Tana Aerial Panorama */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/aistudio/chaana_de7f7d77.png"
            alt="River Tana Meandering through Lush Tropical Forest"
            className="w-full h-full object-cover object-center transform scale-102"
          />
          {/* Subtle natural sunlight gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/90 via-emerald-950/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-black/20" />
        </div>

        {/* Hero Main Content Grid */}
        <div className="relative z-10 max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16 pb-12 sm:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
            
            {/* Left Column: Organic Deep Emerald Curved Panel */}
            <div className="lg:col-span-7 xl:col-span-6 relative">
              <div className="relative bg-gradient-to-br from-[#0c3f2d]/95 via-[#064e3b]/95 to-[#042017]/95 backdrop-blur-md p-6 sm:p-10 lg:p-12 rounded-3xl lg:rounded-[40px] border-2 border-emerald-500/40 shadow-2xl space-y-6">
                
                {/* Gold Diamond Geometric Badge: CHAANA DO KWEETO */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-[#d97706] text-stone-950 font-black text-xs sm:text-sm tracking-widest uppercase shadow-md border border-amber-300">
                  <span className="text-stone-950 font-black">❖</span>
                  <span>CHAANA DO KWEETO</span>
                  <span className="text-stone-950 font-black">❖</span>
                </div>

                {/* Massive Hero Heading: Ilwana Community Heritage */}
                <h1 className="font-serif font-black text-white text-4xl sm:text-6xl lg:text-7xl leading-[1.04] tracking-tight drop-shadow-md">
                  Ilwana<br />
                  Community<br />
                  <span className="text-[#facc15] drop-shadow-sm">Heritage</span>
                </h1>

                {/* Tagline Bar with Vertical Gold Accent */}
                <div className="border-l-4 border-amber-400 pl-4 py-1">
                  <p className="font-serif italic text-stone-100 text-base sm:text-lg lg:text-xl font-medium leading-relaxed drop-shadow-xs">
                    Preserving the History, Language, Culture, and Heritage of the Wailwana.
                  </p>
                </div>

                {/* Hero Action Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <button
                    onClick={() => onNavigate('history')}
                    className="flex items-center gap-2 px-7 py-4 bg-[#f59e0b] hover:bg-[#d97706] text-stone-950 font-black rounded-full text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all active:scale-95 border border-amber-300"
                  >
                    <BookOpen className="w-5 h-5" />
                    <span>Explore Our Heritage →</span>
                  </button>

                  <button
                    onClick={() => onNavigate('gallery')}
                    className="flex items-center gap-2 px-6 py-4 bg-black/40 hover:bg-black/60 text-white font-bold rounded-full text-base sm:text-lg border-2 border-white/70 backdrop-blur-md transition-all active:scale-95 shadow-lg"
                  >
                    <PlayCircle className="w-5 h-5 text-amber-300" />
                    <span>Watch Our Story</span>
                  </button>
                </div>

              </div>
            </div>

            {/* Right Column: Strategic Placement of the Mothers with Woven Baskets */}
            <div className="lg:col-span-5 xl:col-span-6 flex flex-col items-center lg:items-end justify-center">
              <div className="relative max-w-lg w-full group">
                
                {/* Outer decorative glow & border */}
                <div className="relative rounded-3xl overflow-hidden border-4 border-amber-400/80 shadow-2xl bg-stone-950">
                  <img
                    src="/assets/aistudio/beutiful_ilwana_items_af972299.png"
                    alt="Wailwana mothers weaving traditional mats, trays and baskets"
                    className="w-full h-[320px] sm:h-[400px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Subtle caption banner */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-stone-950/90 via-stone-950/60 to-transparent p-4 sm:p-5 text-white">
                    <span className="text-[11px] font-black uppercase tracking-wider bg-[#d97706] text-stone-950 px-2.5 py-0.5 rounded-full inline-block mb-1">
                      Living Tradition
                    </span>
                    <h3 className="font-serif font-black text-lg sm:text-xl text-white">
                      Wailwana Mothers & Craftswomen
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-200 font-medium">
                      Plaiting dum palm fronds into traditional floor mats (Irraanga), winnowing trays (Jolo), and utility baskets (Kapwera).
                    </p>
                  </div>
                </div>

                {/* Floating River Tana Badge */}
                <div className="absolute -top-4 -right-2 sm:-right-4 bg-white/95 backdrop-blur-md text-stone-950 border-2 border-[#14532d] px-4 py-2 rounded-2xl shadow-xl flex items-center gap-2">
                  <Waves className="w-4 h-4 text-[#14532d]" />
                  <span className="text-xs sm:text-sm font-black text-[#14532d]">
                    River Tana Basin
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* =========================================================================
            BOTTOM CURVED WAVE RIBBON (Matching 6-Column Navigation in web_landing_pg)
            ========================================================================= */}
        <div className="relative z-20 bg-[#fcf8ec] text-stone-900 shadow-xl border-t-4 border-[#f59e0b]">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-y md:divide-y-0 md:divide-x divide-stone-300 gap-y-3 md:gap-y-0">
              
              {/* Item 1: Our History */}
              <button
                onClick={() => onNavigate('history')}
                className="flex items-center gap-3 px-3 py-2 text-left hover:bg-amber-100/60 rounded-xl transition-colors group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-full bg-emerald-100 text-[#14532d] flex items-center justify-center shrink-0 group-hover:bg-[#14532d] group-hover:text-white transition-colors">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-serif font-black text-sm sm:text-base text-stone-950 block leading-tight">
                    Our History
                  </span>
                  <span className="text-xs italic text-stone-600 block">
                    Know Our Past
                  </span>
                </div>
              </button>

              {/* Item 2: Our People */}
              <button
                onClick={() => onNavigate('social')}
                className="flex items-center gap-3 px-3 py-2 text-left hover:bg-amber-100/60 rounded-xl transition-colors group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-full bg-emerald-100 text-[#14532d] flex items-center justify-center shrink-0 group-hover:bg-[#14532d] group-hover:text-white transition-colors">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-serif font-black text-sm sm:text-base text-stone-950 block leading-tight">
                    Our People
                  </span>
                  <span className="text-xs italic text-stone-600 block">
                    Our Strength
                  </span>
                </div>
              </button>

              {/* Item 3: Our Culture */}
              <button
                onClick={() => onNavigate('arts')}
                className="flex items-center gap-3 px-3 py-2 text-left hover:bg-amber-100/60 rounded-xl transition-colors group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-full bg-emerald-100 text-[#14532d] flex items-center justify-center shrink-0 group-hover:bg-[#14532d] group-hover:text-white transition-colors">
                  <Music className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-serif font-black text-sm sm:text-base text-stone-950 block leading-tight">
                    Our Culture
                  </span>
                  <span className="text-xs italic text-stone-600 block">
                    Our Pride
                  </span>
                </div>
              </button>

              {/* Item 4: Kilwana Language */}
              <button
                onClick={() => onNavigate('language')}
                className="flex items-center gap-3 px-3 py-2 text-left hover:bg-amber-100/60 rounded-xl transition-colors group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-full bg-emerald-100 text-[#14532d] flex items-center justify-center shrink-0 group-hover:bg-[#14532d] group-hover:text-white transition-colors">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-serif font-black text-sm sm:text-base text-stone-950 block leading-tight">
                    Kilwana Language
                  </span>
                  <span className="text-xs italic text-stone-600 block">
                    Our Voice
                  </span>
                </div>
              </button>

              {/* Item 5: Our Faith */}
              <button
                onClick={() => onNavigate('religion')}
                className="flex items-center gap-3 px-3 py-2 text-left hover:bg-amber-100/60 rounded-xl transition-colors group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-full bg-emerald-100 text-[#14532d] flex items-center justify-center shrink-0 group-hover:bg-[#14532d] group-hover:text-white transition-colors">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-serif font-black text-sm sm:text-base text-stone-950 block leading-tight">
                    Our Faith
                  </span>
                  <span className="text-xs italic text-stone-600 block">
                    Our Belief
                  </span>
                </div>
              </button>

              {/* Item 6: Our Land */}
              <button
                onClick={() => onNavigate('geography')}
                className="flex items-center gap-3 px-3 py-2 text-left hover:bg-amber-100/60 rounded-xl transition-colors group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-full bg-emerald-100 text-[#14532d] flex items-center justify-center shrink-0 group-hover:bg-[#14532d] group-hover:text-white transition-colors">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-serif font-black text-sm sm:text-base text-stone-950 block leading-tight">
                    Our Land
                  </span>
                  <span className="text-xs italic text-stone-600 block">
                    Our Home
                  </span>
                </div>
              </button>

            </div>
          </div>
        </div>

      </section>

      {/* =========================================================================
          AUTHENTIC CULTURAL ARTIFACTS & COMMUNITY PHOTO ARCHIVE
          ========================================================================= */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b-2 border-stone-300 pb-5">
          <div>
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-black uppercase tracking-wider text-[#14532d] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 mb-2">
              <Camera className="w-4 h-4 text-[#14532d]" />
              <span>Authentic Cultural Heritage</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-black text-stone-950">
              Photographic Heritage of the Wailwana
            </h2>
          </div>
          <button
            onClick={() => onNavigate('gallery')}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#14532d] hover:bg-[#1b4332] text-white font-black text-sm rounded-xl transition-all shadow-sm shrink-0"
          >
            <span>View Complete Photo Gallery</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 4 Primary Showcases with user images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: The Hayu & Leadership */}
          <div
            onClick={() => onNavigate('governance')}
            className="group cursor-pointer bg-white rounded-2xl border-2 border-stone-300 overflow-hidden hover:border-[#14532d] hover:shadow-xl transition-all flex flex-col justify-between"
          >
            <div>
              <div className="relative h-52 overflow-hidden bg-stone-100">
                <img
                  src="/assets/aistudio/hayu_adddressing_67ed9fc2.png"
                  alt="The Hayu Addressing the Assembly"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-stone-950/90 text-amber-300 text-xs font-black px-3 py-1 rounded-full border border-amber-400">
                  Hayu (Traditional King)
                </span>
              </div>
              <div className="p-5 space-y-2">
                <span className="text-xs font-mono font-black text-[#14532d] uppercase">Governance & Monarchy</span>
                <h3 className="font-serif text-xl font-black text-stone-950 group-hover:text-[#14532d] transition-colors">
                  The Hayu in Assembly
                </h3>
                <p className="text-sm text-stone-950 font-normal leading-relaxed">
                  The traditional monarch addressing community members, embodying communal unity, moral authority, and reconciliation.
                </p>
              </div>
            </div>
            <div className="px-5 pb-5 pt-1 text-xs font-black text-[#14532d] flex items-center gap-1">
              <span>Read Governance & Hayu</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          </div>

          {/* Card 2: Elders of Gasa */}
          <div
            onClick={() => onNavigate('governance')}
            className="group cursor-pointer bg-white rounded-2xl border-2 border-stone-300 overflow-hidden hover:border-[#14532d] hover:shadow-xl transition-all flex flex-col justify-between"
          >
            <div>
              <div className="relative h-52 overflow-hidden bg-stone-100">
                <img
                  src="/assets/aistudio/wailwana_elders_8d71f49e.png"
                  alt="Wailwana Elders in Council"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-stone-950/90 text-amber-300 text-xs font-black px-3 py-1 rounded-full border border-amber-400">
                  Gasa Council Elders
                </span>
              </div>
              <div className="p-5 space-y-2">
                <span className="text-xs font-mono font-black text-[#14532d] uppercase">Customary Justice</span>
                <h3 className="font-serif text-xl font-black text-stone-950 group-hover:text-[#14532d] transition-colors">
                  Elders Under Shade Trees
                </h3>
                <p className="text-sm text-stone-950 font-normal leading-relaxed">
                  The Gasa supreme council gathers under indigenous trees to deliberate on community welfare, land memory, and clan harmony.
                </p>
              </div>
            </div>
            <div className="px-5 pb-5 pt-1 text-xs font-black text-[#14532d] flex items-center gap-1">
              <span>Explore Gasa Council</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          </div>

          {/* Card 3: Waato Dugout Canoe */}
          <div
            onClick={() => onNavigate('material')}
            className="group cursor-pointer bg-white rounded-2xl border-2 border-stone-300 overflow-hidden hover:border-[#14532d] hover:shadow-xl transition-all flex flex-col justify-between"
          >
            <div>
              <div className="relative h-52 overflow-hidden bg-stone-100">
                <img
                  src="/assets/aistudio/waato_d034ef5b.png"
                  alt="Traditional Dugout Canoe Waato"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-stone-950/90 text-amber-300 text-xs font-black px-3 py-1 rounded-full border border-amber-400">
                  Waato (Dugout Canoe)
                </span>
              </div>
              <div className="p-5 space-y-2">
                <span className="text-xs font-mono font-black text-[#14532d] uppercase">River Navigation</span>
                <h3 className="font-serif text-xl font-black text-stone-950 group-hover:text-[#14532d] transition-colors">
                  River Tana Canoe Craft
                </h3>
                <p className="text-sm text-stone-950 font-normal leading-relaxed">
                  Hand-hewn from solid riverine hardwood, the Waato enables crossing, farm transport, and fishing along River Tana.
                </p>
              </div>
            </div>
            <div className="px-5 pb-5 pt-1 text-xs font-black text-[#14532d] flex items-center gap-1">
              <span>Explore River Crafts</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          </div>

          {/* Card 4: Indigenous Beekeeping Mwaato */}
          <div
            onClick={() => onNavigate('material')}
            className="group cursor-pointer bg-white rounded-2xl border-2 border-stone-300 overflow-hidden hover:border-[#14532d] hover:shadow-xl transition-all flex flex-col justify-between"
          >
            <div>
              <div className="relative h-52 overflow-hidden bg-stone-100">
                <img
                  src="/assets/aistudio/mwaato_f078a079.png"
                  alt="Mwaato Traditional Beehive"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-stone-950/90 text-amber-300 text-xs font-black px-3 py-1 rounded-full border border-amber-400">
                  Mwaato (Log Beehive)
                </span>
              </div>
              <div className="p-5 space-y-2">
                <span className="text-xs font-mono font-black text-[#14532d] uppercase">Indigenous Science</span>
                <h3 className="font-serif text-xl font-black text-stone-950 group-hover:text-[#14532d] transition-colors">
                  Hollow-Log Beekeeping
                </h3>
                <p className="text-sm text-stone-950 font-normal leading-relaxed">
                  Suspended in forest tree forks, baited with aromatic nooma resin, and harvested by night using gentle herbal smoke.
                </p>
              </div>
            </div>
            <div className="px-5 pb-5 pt-1 text-xs font-black text-[#14532d] flex items-center gap-1">
              <span>Learn Honey Technology</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          </div>

        </div>

        {/* Secondary Row of Authentic Crafts: Locholo, Kapu, Irraanga, Dokwena */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">
          
          <div
            onClick={() => onNavigate('material')}
            className="cursor-pointer bg-white p-4 rounded-xl border-2 border-stone-300 hover:border-[#14532d] transition-colors flex items-center gap-3 shadow-xs"
          >
            <img
              src="/assets/aistudio/locholo__739438a8.png"
              alt="Locholo winnowing tray"
              className="w-14 h-14 rounded-lg object-cover border border-stone-300 shrink-0"
            />
            <div>
              <span className="text-xs font-black text-[#14532d] uppercase block">Locholo / Jolo</span>
              <p className="text-xs sm:text-sm font-black text-stone-950">Winnowing Trays</p>
            </div>
          </div>

          <div
            onClick={() => onNavigate('material')}
            className="cursor-pointer bg-white p-4 rounded-xl border-2 border-stone-300 hover:border-[#14532d] transition-colors flex items-center gap-3 shadow-xs"
          >
            <img
              src="/assets/aistudio/kapu__ifmany_kapwera__17b5e87c.png"
              alt="Kapu woven basket"
              className="w-14 h-14 rounded-lg object-cover border border-stone-300 shrink-0"
            />
            <div>
              <span className="text-xs font-black text-[#14532d] uppercase block">Kapu / Kapwera</span>
              <p className="text-xs sm:text-sm font-black text-stone-950">Woven Baskets</p>
            </div>
          </div>

          <div
            onClick={() => onNavigate('material')}
            className="cursor-pointer bg-white p-4 rounded-xl border-2 border-stone-300 hover:border-[#14532d] transition-colors flex items-center gap-3 shadow-xs"
          >
            <img
              src="/assets/aistudio/irraanga_c0a652ba.png"
              alt="Irraanga mat"
              className="w-14 h-14 rounded-lg object-cover border border-stone-300 shrink-0"
            />
            <div>
              <span className="text-xs font-black text-[#14532d] uppercase block">Irraanga</span>
              <p className="text-xs sm:text-sm font-black text-stone-950">Dum Palm Mat</p>
            </div>
          </div>

          <div
            onClick={() => onNavigate('material')}
            className="cursor-pointer bg-white p-4 rounded-xl border-2 border-stone-300 hover:border-[#14532d] transition-colors flex items-center gap-3 shadow-xs"
          >
            <img
              src="/assets/aistudio/Dokwena_675413dd.png"
              alt="Dokwena fish"
              className="w-14 h-14 rounded-lg object-cover border border-stone-300 shrink-0"
            />
            <div>
              <span className="text-xs font-black text-[#14532d] uppercase block">Dokwena & Chika</span>
              <p className="text-xs sm:text-sm font-black text-stone-950">River Fish Staple</p>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          COMMUNITY IDENTITY & TERMINOLOGY
          ========================================================================= */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border-2 border-stone-300 shadow-sm space-y-6">
          <div className="max-w-3xl">
            <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-[#14532d]">
              Indigenous Foundation
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-black text-stone-950 mt-1">
              Community Identity & Historical Clarification
            </h2>
            <p className="text-base sm:text-lg text-stone-950 mt-2 font-medium leading-relaxed">
              The Ilwana are a distinct Bantu-speaking indigenous community whose cultural, economic, and spiritual identity has flourished along the River Tana for centuries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t-2 border-stone-200">
            <div className="space-y-2 bg-[#fdfbf7] p-5 rounded-2xl border-2 border-stone-200">
              <span className="text-xs font-mono text-[#14532d] font-black tracking-wider uppercase">01 / TERMINOLOGY</span>
              <h3 className="font-serif text-xl font-black text-stone-950">Ilwana & Wailwana</h3>
              <p className="text-base text-stone-950 leading-relaxed font-normal">
                <strong className="text-stone-950 font-black">Ilwana</strong> designates the community as an entity; <strong className="text-stone-950 font-black">Wailwana</strong> refers to the people who belong to it. The name embodies dignity and the concept of free people.
              </p>
            </div>

            <div className="space-y-2 bg-[#fdfbf7] p-5 rounded-2xl border-2 border-stone-200">
              <span className="text-xs font-mono text-[#14532d] font-black tracking-wider uppercase">02 / CORRECTION</span>
              <h3 className="font-serif text-xl font-black text-stone-950">Authentic Naming</h3>
              <p className="text-base text-stone-950 leading-relaxed font-normal">
                The community rejects external misnomers such as "Malakote," a label absent from Kilwana vocabulary that arose from second-hand historical accounts. The authentic name remains <strong className="text-stone-950 font-black">Ilwana</strong>.
              </p>
            </div>

            <div className="space-y-2 bg-[#fdfbf7] p-5 rounded-2xl border-2 border-stone-200">
              <span className="text-xs font-mono text-[#14532d] font-black tracking-wider uppercase">03 / TRADITION</span>
              <h3 className="font-serif text-xl font-black text-stone-950">Hayu & Gasa</h3>
              <p className="text-base text-stone-950 leading-relaxed font-normal">
                Led by the <strong className="text-stone-950 font-black">Hayu</strong> (the traditional king) and the <strong className="text-stone-950 font-black">Gasa</strong> supreme consultative council, communal life has long been guided by moral character and restorative justice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          THE 12 PRINCIPAL SECTIONS OF COMMUNITY KNOWLEDGE
          ========================================================================= */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b-2 border-stone-300 pb-5">
          <div>
            <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-[#14532d]">
              Heritage Knowledge Base
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-black text-stone-950 mt-1">
              Explore the 12 Principal Sections
            </h2>
          </div>
          <p className="text-base text-stone-950 font-medium max-w-md">
            Click any section below to access curated historical accounts, linguistic records, and indigenous traditions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* History */}
          <div
            onClick={() => onNavigate('history')}
            className="group cursor-pointer bg-white p-6 rounded-2xl border-2 border-stone-300 hover:border-[#14532d] hover:shadow-lg transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-[#14532d]">
                <Compass className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono text-[#14532d] font-black tracking-wider">02. HISTORY & IDENTITY</span>
              <h3 className="font-serif text-xl sm:text-2xl font-black text-stone-950 group-hover:text-[#14532d] transition-colors">
                Origins & Migration
              </h3>
              <p className="text-base text-stone-950 leading-relaxed font-normal">
                Trace the journey from the Congo Basin across the East African coast, the Comoros, and Shungwaya to the permanent settlements along the River Tana.
              </p>
            </div>
            <div className="pt-4 flex items-center gap-1.5 text-sm font-black text-[#14532d]">
              <span>Explore Migration Routes</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Geography */}
          <div
            onClick={() => onNavigate('geography')}
            className="group cursor-pointer bg-white p-6 rounded-2xl border-2 border-stone-300 hover:border-[#14532d] hover:shadow-lg transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-[#14532d]">
                <Waves className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono text-[#14532d] font-black tracking-wider">03. GEOGRAPHY</span>
              <h3 className="font-serif text-xl sm:text-2xl font-black text-stone-950 group-hover:text-[#14532d] transition-colors">
                River Tana Homeland
              </h3>
              <p className="text-base text-stone-950 leading-relaxed font-normal">
                Explore settlements across Tana River and Garissa counties, floodplain ecology, River Calling traditions, and historical interaction with neighbors.
              </p>
            </div>
            <div className="pt-4 flex items-center gap-1.5 text-sm font-black text-[#14532d]">
              <span>View Settlements Directory</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Language */}
          <div
            onClick={() => onNavigate('language')}
            className="group cursor-pointer bg-white p-6 rounded-2xl border-2 border-stone-300 hover:border-[#14532d] hover:shadow-lg transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-[#14532d]">
                <BookOpen className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono text-[#14532d] font-black tracking-wider">04. LANGUAGE</span>
              <h3 className="font-serif text-xl sm:text-2xl font-black text-stone-950 group-hover:text-[#14532d] transition-colors">
                The Kilwana Language
              </h3>
              <p className="text-base text-stone-950 leading-relaxed font-normal">
                Bantu linguistic classification, dialect variations, everyday greetings, counting systems, and the imperative to document and revitalize the mother tongue.
              </p>
            </div>
            <div className="pt-4 flex items-center gap-1.5 text-sm font-black text-[#14532d]">
              <span>Study Kilwana Structure</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Social Organization */}
          <div
            onClick={() => onNavigate('social')}
            className="group cursor-pointer bg-white p-6 rounded-2xl border-2 border-stone-300 hover:border-[#14532d] hover:shadow-lg transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-[#14532d]">
                <Users className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono text-[#14532d] font-black tracking-wider">05. SOCIAL CULTURE</span>
              <h3 className="font-serif text-xl sm:text-2xl font-black text-stone-950 group-hover:text-[#14532d] transition-colors">
                Clans & Rites of Passage
              </h3>
              <p className="text-base text-stone-950 leading-relaxed font-normal">
                Discover the traditional clans, rites of passage, customary marriage customs, dowry (Kupacha), and inter-clan solidarity.
              </p>
            </div>
            <div className="pt-4 flex items-center gap-1.5 text-sm font-black text-[#14532d]">
              <span>Explore Clans & Lineages</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Religion */}
          <div
            onClick={() => onNavigate('religion')}
            className="group cursor-pointer bg-white p-6 rounded-2xl border-2 border-stone-300 hover:border-[#14532d] hover:shadow-lg transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-[#14532d]">
                <Sparkles className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono text-[#14532d] font-black tracking-wider">06. FAITH & BELIEFS</span>
              <h3 className="font-serif text-xl sm:text-2xl font-black text-stone-950 group-hover:text-[#14532d] transition-colors">
                Religious Traditions
              </h3>
              <p className="text-base text-stone-950 leading-relaxed font-normal">
                The role of Islam in shaping communal moral codes, historical syncretic ancestral customs, prayer traditions, and holy celebrations.
              </p>
            </div>
            <div className="pt-4 flex items-center gap-1.5 text-sm font-black text-[#14532d]">
              <span>Examine Spiritual History</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Governance */}
          <div
            onClick={() => onNavigate('governance')}
            className="group cursor-pointer bg-white p-6 rounded-2xl border-2 border-stone-300 hover:border-[#14532d] hover:shadow-lg transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-[#14532d]">
                <Shield className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono text-[#14532d] font-black tracking-wider">07. GOVERNANCE</span>
              <h3 className="font-serif text-xl sm:text-2xl font-black text-stone-950 group-hover:text-[#14532d] transition-colors">
                The Hayu & Gasa Council
              </h3>
              <p className="text-base text-stone-950 leading-relaxed font-normal">
                Customary political institutions: the traditional monarch (The Hayu), supreme consultative elders (Gasa), consensus dispute resolution, and annual celebrations.
              </p>
            </div>
            <div className="pt-4 flex items-center gap-1.5 text-sm font-black text-[#14532d]">
              <span>Read Governance Systems</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Arts & Music */}
          <div
            onClick={() => onNavigate('arts')}
            className="group cursor-pointer bg-white p-6 rounded-2xl border-2 border-stone-300 hover:border-[#14532d] hover:shadow-lg transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-[#14532d]">
                <Music className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono text-[#14532d] font-black tracking-wider">08. ARTS & MUSIC</span>
              <h3 className="font-serif text-xl sm:text-2xl font-black text-stone-950 group-hover:text-[#14532d] transition-colors">
                Traditional Music & Dance
              </h3>
              <p className="text-base text-stone-950 leading-relaxed font-normal">
                Four major dance forms: the athletic Mbalwa, the celebratory Bumbuu, the women-led Kinaango, and the nocturnal spiritual dance Ngoma ya P’ep’o.
              </p>
            </div>
            <div className="pt-4 flex items-center gap-1.5 text-sm font-black text-[#14532d]">
              <span>Experience Traditional Dances</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Material Culture */}
          <div
            onClick={() => onNavigate('material')}
            className="group cursor-pointer bg-white p-6 rounded-2xl border-2 border-stone-300 hover:border-[#14532d] hover:shadow-lg transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-[#14532d]">
                <Hammer className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono text-[#14532d] font-black tracking-wider">09. MATERIAL HERITAGE</span>
              <h3 className="font-serif text-xl sm:text-2xl font-black text-stone-950 group-hover:text-[#14532d] transition-colors">
                Cuisine, Crafts & Beekeeping
              </h3>
              <p className="text-base text-stone-950 leading-relaxed font-normal">
                Traditional clothing (Haagoodo, Banaadiri), river dishes (Buyuyu, Konole, Dokwena), wood and fiber implements (Waato, Locholo), and log beekeeping (Mwaato).
              </p>
            </div>
            <div className="pt-4 flex items-center gap-1.5 text-sm font-black text-[#14532d]">
              <span>Explore Material Technology</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Glossary */}
          <div
            onClick={() => onNavigate('glossary')}
            className="group cursor-pointer bg-white p-6 rounded-2xl border-2 border-amber-300 hover:border-[#14532d] hover:shadow-lg transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-amber-900">
                <BookOpen className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono text-amber-800 font-black tracking-wider">10. VOCABULARY CENTRE</span>
              <h3 className="font-serif text-xl sm:text-2xl font-black text-stone-950 group-hover:text-[#14532d] transition-colors">
                Kilwana Glossary (A–Z)
              </h3>
              <p className="text-base text-stone-950 leading-relaxed font-normal">
                Comprehensive multilingual lexicon: Kilwana terms, English definitions, Swahili equivalents, phonetic pronunciation guides, and cultural context.
              </p>
            </div>
            <div className="pt-4 flex items-center gap-1.5 text-sm font-black text-[#14532d]">
              <span>Open Complete Dictionary</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          KILWANA LANGUAGE SPOTLIGHT: EVERYDAY GREETINGS
          ========================================================================= */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#14532d] to-[#052e16] text-white p-6 sm:p-10 rounded-3xl border-2 border-emerald-600 shadow-xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-emerald-700 pb-4">
            <div>
              <span className="text-xs sm:text-sm font-black tracking-widest uppercase text-amber-300">
                LIVING MOTHER TONGUE
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-black text-white mt-1">
                Kilwana Everyday Greetings
              </h2>
            </div>
            <button
              onClick={() => onNavigate('glossary')}
              className="px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-stone-950 font-black rounded-xl text-sm transition-all shadow-md shrink-0 flex items-center gap-1.5"
            >
              <BookOpen className="w-4 h-4" />
              <span>Explore Complete Glossary</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {sampleGreetings.map((g, idx) => (
              <div
                key={idx}
                className="bg-black/40 backdrop-blur-md p-5 rounded-2xl border border-emerald-500/40 space-y-2 hover:border-amber-400 transition-colors"
              >
                <span className="text-xs font-mono text-amber-300 font-bold block">{g.hint}</span>
                <h3 className="font-serif text-2xl font-black text-white">{g.term}</h3>
                <div className="pt-1 border-t border-emerald-800 space-y-0.5 text-sm">
                  <p className="text-stone-100 font-bold">{g.meaning}</p>
                  <p className="text-emerald-200 text-xs italic">Swahili: {g.swahili}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};
