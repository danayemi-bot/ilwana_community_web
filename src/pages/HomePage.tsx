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
  Layers
} from 'lucide-react';
import { GLOSSARY_DATA } from '../data/glossaryData';

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
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* Editorial Hero Section */}
      <section className="relative overflow-hidden bg-stone-950 text-stone-100 pt-12 sm:pt-20 pb-16 sm:pb-24 border-b border-stone-800">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#0f4c5c_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl space-y-6 sm:space-y-8">
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-widest text-teal-300 bg-teal-950/80 px-3 py-1 rounded-full border border-teal-700/60">
              <Compass className="w-4 h-4" />
              <span>Digital Heritage & Knowledge Preservation</span>
            </div>

            {/* Prominent Logo & Main Header for Mobile & Desktop */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8 pt-2 text-center sm:text-left">
              <img
                src="/assets/aistudio/image_ae57196b.png"
                alt="Ilwana Community Heritage Emblem"
                className="w-36 h-36 sm:w-44 sm:h-44 lg:w-52 lg:h-52 rounded-full object-cover border-4 border-amber-400 shadow-2xl shrink-0 bg-white ring-4 ring-[#0f4c5c]"
              />
              <div className="space-y-4">
                <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.14] drop-shadow-sm">
                  Preserving the History, Language & Heritage of the Wailwana
                </h1>
                <p className="text-amber-300 font-mono text-xs sm:text-sm font-extrabold tracking-wider uppercase">
                  Chaana Do Kweeto · River Tana Homeland
                </p>
                <p className="text-base sm:text-xl text-stone-100 leading-relaxed max-w-2xl font-normal">
                  Welcome to the official community knowledge repository of the Ilwana Community of Kenya. Dedicated to documenting our ancestral origins along the River Tana, safeguarding the Kilwana language, and upholding our traditional governance, cultural arts, and indigenous wisdom for generations to come.
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-4">
              <button
                onClick={() => onNavigate('glossary')}
                className="inline-flex items-center gap-2.5 px-7 py-4 bg-[#0f4c5c] hover:bg-[#135d70] text-white font-bold rounded-xl text-base sm:text-lg transition-all shadow-lg hover:shadow-xl active:scale-98"
              >
                <BookOpen className="w-5 h-5" />
                <span>Explore Kilwana Glossary</span>
                <ArrowRight className="w-5 h-5 ml-1" />
              </button>

              <button
                onClick={() => onNavigate('history')}
                className="inline-flex items-center gap-2 px-6 py-4 bg-stone-900 hover:bg-stone-800 text-stone-100 border-2 border-stone-600 font-bold rounded-xl text-base sm:text-lg transition-all shadow-sm"
              >
                <span>Origins & Migration</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Purpose & Distinction Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-6 sm:p-10 border-2 border-stone-300 shadow-sm space-y-6">
          <div className="max-w-3xl">
            <h2 className="font-serif text-2xl sm:text-4xl font-extrabold text-stone-950">
              Community Identity & Foundation
            </h2>
            <p className="text-base sm:text-lg text-stone-900 mt-2 font-medium leading-relaxed">
              The Ilwana are a distinct Bantu-speaking indigenous community whose cultural, economic, and spiritual identity has flourished along the River Tana for centuries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-stone-200">
            <div className="space-y-2 bg-[#fdfbf7] p-5 rounded-xl border border-stone-200">
              <span className="text-xs font-mono text-[#0f4c5c] font-bold tracking-wider">01 / TERMINOLOGY</span>
              <h3 className="font-serif text-xl font-bold text-stone-950">Ilwana & Wailwana</h3>
              <p className="text-sm sm:text-base text-stone-900 leading-relaxed font-normal">
                <strong className="text-stone-950 font-bold">Ilwana</strong> designates the community as a whole; <strong className="text-stone-950 font-bold">Wailwana</strong> refers to the people who belong to it. The name is traditionally associated with dignity and the concept of free people.
              </p>
            </div>

            <div className="space-y-2 bg-[#fdfbf7] p-5 rounded-xl border border-stone-200">
              <span className="text-xs font-mono text-[#0f4c5c] font-bold tracking-wider">02 / CORRECTION</span>
              <h3 className="font-serif text-xl font-bold text-stone-950">Authentic Naming</h3>
              <p className="text-sm sm:text-base text-stone-900 leading-relaxed font-normal">
                The community rejects external misnomers such as "Malakote," a label absent from the Kilwana vocabulary that arose from second-hand historical accounts. The authentic name remains Ilwana.
              </p>
            </div>

            <div className="space-y-2 bg-[#fdfbf7] p-5 rounded-xl border border-stone-200">
              <span className="text-xs font-mono text-[#0f4c5c] font-bold tracking-wider">03 / TRADITION</span>
              <h3 className="font-serif text-xl font-bold text-stone-950">Hayu & Gasa</h3>
              <p className="text-sm sm:text-base text-stone-900 leading-relaxed font-normal">
                Led by the <strong className="text-stone-950 font-bold">Hayu</strong> (the traditional king) and the <strong className="text-stone-950 font-bold">Gasa</strong> supreme consultative council, community affairs have long been guided by moral character, consensus, and restorative justice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Heritage Topics (The 12 Core Sections) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b-2 border-stone-300 pb-5">
          <div>
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#0f4c5c]">
              Heritage Archive
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-black text-stone-950 mt-1">
              Explore the 12 Principal Sections
            </h2>
          </div>
          <p className="text-base text-stone-950 font-medium max-w-md">
            Click any subject to access curated historical accounts, linguistic records, and indigenous traditions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* History */}
          <div
            onClick={() => onNavigate('history')}
            className="group cursor-pointer bg-white p-6 rounded-2xl border-2 border-stone-300 hover:border-[#0f4c5c] hover:shadow-lg transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center text-[#0f4c5c]">
                <Compass className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono text-[#0f4c5c] font-bold tracking-wider">02. HISTORY & IDENTITY</span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-950 group-hover:text-[#0f4c5c] transition-colors">
                Origins & Migration
              </h3>
              <p className="text-sm sm:text-base text-stone-900 leading-relaxed font-normal">
                Trace the journey from the Congo Basin across the East African coast, the Comoros, and Shungwaya to the permanent settlements along the River Tana.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-stone-200 flex items-center text-sm font-bold text-[#0f4c5c]">
              <span>Read Historical Narrative</span>
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1.5 transition-transform" />
            </div>
          </div>

          {/* Geography */}
          <div
            onClick={() => onNavigate('geography')}
            className="group cursor-pointer bg-white p-6 rounded-2xl border-2 border-stone-300 hover:border-[#9a3412] hover:shadow-lg transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-[#9a3412]">
                <Layers className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono text-[#9a3412] font-bold tracking-wider">03. GEOGRAPHY</span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-950 group-hover:text-[#9a3412] transition-colors">
                River Tana & Homeland
              </h3>
              <p className="text-sm sm:text-base text-stone-900 leading-relaxed font-normal">
                Explore the riverine homeland in Tana River County, Bura Constituency, Gariseni, and over thirty documented ancestral villages and settlements.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-stone-200 flex items-center text-sm font-bold text-[#9a3412]">
              <span>View Settlements Directory</span>
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1.5 transition-transform" />
            </div>
          </div>

          {/* Kilwana Language Centre */}
          <div
            onClick={() => onNavigate('language')}
            className="group cursor-pointer bg-white p-6 rounded-2xl border-2 border-stone-300 hover:border-[#0f4c5c] hover:shadow-lg transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center text-[#0f4c5c]">
                <Feather className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono text-[#0f4c5c] font-bold tracking-wider">04. LANGUAGE CENTRE</span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-950 group-hover:text-[#0f4c5c] transition-colors">
                The Kilwana Language
              </h3>
              <p className="text-sm sm:text-base text-stone-900 leading-relaxed font-normal">
                Examine linguistic classification, multilingualism with Kiswahili, Orma, and Somali, modern preservation needs, and interactive vocabulary lists.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-stone-200 flex items-center text-sm font-bold text-[#0f4c5c]">
              <span>Access Language Centre</span>
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1.5 transition-transform" />
            </div>
          </div>

          {/* Social Structure */}
          <div
            onClick={() => onNavigate('social')}
            className="group cursor-pointer bg-white p-6 rounded-2xl border-2 border-stone-300 hover:border-emerald-800 hover:shadow-lg transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-900">
                <Users className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono text-emerald-800 font-bold tracking-wider">05. SOCIAL STRUCTURE</span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-950 group-hover:text-emerald-800 transition-colors">
                Kinship, Marriage & Rites
              </h3>
              <p className="text-sm sm:text-base text-stone-900 leading-relaxed font-normal">
                Discover the role of extended family, gender roles, traditional A'LIMA marriage customs, the sacred Ukaamwaale childbirth celebration, and river calling.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-stone-200 flex items-center text-sm font-bold text-emerald-800">
              <span>Explore Social Customs</span>
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1.5 transition-transform" />
            </div>
          </div>

          {/* Governance */}
          <div
            onClick={() => onNavigate('governance')}
            className="group cursor-pointer bg-white p-6 rounded-2xl border-2 border-stone-300 hover:border-amber-800 hover:shadow-lg transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-amber-900">
                <Shield className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono text-amber-800 font-bold tracking-wider">07. GOVERNANCE & CLANS</span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-950 group-hover:text-amber-800 transition-colors">
                The Hayu & Gasa System
              </h3>
              <p className="text-sm sm:text-base text-stone-900 leading-relaxed font-normal">
                Learn how the traditional king (Hayu) and the Gasa supreme council resolve land disputes, uphold peace through consensus, and maintain the 8 major clans.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-stone-200 flex items-center text-sm font-bold text-amber-800">
              <span>View Leadership System</span>
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1.5 transition-transform" />
            </div>
          </div>

          {/* Arts & Music */}
          <div
            onClick={() => onNavigate('arts')}
            className="group cursor-pointer bg-white p-6 rounded-2xl border-2 border-stone-300 hover:border-rose-800 hover:shadow-lg transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-rose-100 flex items-center justify-center text-rose-900">
                <Music className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono text-rose-800 font-bold tracking-wider">08. ARTS & MUSIC</span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-950 group-hover:text-rose-800 transition-colors">
                Songs, Dances & Instruments
              </h3>
              <p className="text-sm sm:text-base text-stone-900 leading-relaxed font-normal">
                Verbatim documented song lyrics for Kitoko, Koras, Mashingwe, Mkao work songs, and Hayu celebration hymns, plus traditional percussion instruments.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-stone-200 flex items-center text-sm font-bold text-rose-800">
              <span>Read Documented Songs</span>
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1.5 transition-transform" />
            </div>
          </div>

          {/* Material Culture */}
          <div
            onClick={() => onNavigate('material')}
            className="group cursor-pointer bg-white p-6 rounded-2xl border-2 border-stone-300 hover:border-orange-800 hover:shadow-lg transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-orange-900">
                <Hammer className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono text-orange-800 font-bold tracking-wider">09. MATERIAL CULTURE</span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-950 group-hover:text-orange-800 transition-colors">
                Food, Tools & Beekeeping
              </h3>
              <p className="text-sm sm:text-base text-stone-900 leading-relaxed font-normal">
                Traditional garments (Haagoodo, Banaadiri), gastronomy (Buyuyu, Konole, Makaaruka), beekeeping (Mwaato, Nooma, Begele), and river implements (Waato, Boodo).
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-stone-200 flex items-center text-sm font-bold text-orange-800">
              <span>Explore Material Heritage</span>
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1.5 transition-transform" />
            </div>
          </div>

          {/* Dedicated Glossary Card */}
          <div
            onClick={() => onNavigate('glossary')}
            className="group cursor-pointer bg-[#0f4c5c] text-white p-6 sm:p-8 rounded-2xl shadow-xl hover:bg-[#135d70] transition-all flex flex-col justify-between sm:col-span-2 lg:col-span-2 border-2 border-teal-700 ring-2 ring-amber-400/30"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center text-white">
                <BookOpen className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono text-amber-300 font-bold tracking-wider">10. MANDATORY COMPULSORY SECTION</span>
              <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-white">
                Complete Glossary of Kilwana Words & Cultural Terms
              </h3>
              <p className="text-base sm:text-lg text-stone-100 max-w-2xl leading-relaxed font-normal">
                A dedicated, comprehensive, searchable reference database comprising every documented Kilwana term, kinship word, governance title, tool name, dish, and clan. Fully cross-referenced with cultural explanations and elder confirmation status.
              </p>
            </div>
            <div className="mt-6 pt-5 border-t border-white/25 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-base font-bold">
              <span className="flex items-center gap-2 text-white">
                <span>Browse Alphabetical Index (A–Z)</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </span>
              <span className="font-mono text-xs sm:text-sm bg-white/20 text-white px-3 py-1 rounded-md self-start sm:self-auto font-bold">
                {GLOSSARY_DATA.length} Terms Documented
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Language Spotlight / Quick Phrases */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#f5f1ea] rounded-2xl p-6 sm:p-10 border-2 border-stone-300 shadow-xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
            <div>
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0f4c5c] flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" /> Living Kilwana Vocabulary
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-stone-950 mt-1">
                Common Kilwana Greetings & Expressions
              </h2>
            </div>
            <button
              onClick={() => onNavigate('language')}
              className="text-base font-bold text-[#0f4c5c] hover:underline flex items-center gap-1 self-start md:self-auto"
            >
              Visit Language Centre <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {sampleGreetings.map((greet, idx) => (
              <div
                key={idx}
                className="bg-white p-5 rounded-xl border-2 border-stone-300 shadow-xs space-y-2.5"
              >
                <div className="flex items-center justify-between">
                  <span className="font-serif text-xl sm:text-2xl font-extrabold text-stone-950">
                    {greet.term}
                  </span>
                  <span className="text-xs font-mono font-bold text-[#0f4c5c] bg-teal-50 px-2 py-0.5 rounded">
                    Greeting
                  </span>
                </div>
                <p className="text-base font-bold text-stone-950">{greet.meaning}</p>
                <div className="pt-2 border-t border-stone-200 text-xs sm:text-sm text-stone-800 flex flex-col gap-1 font-medium">
                  <span>Kiswahili: <strong className="text-stone-950 font-bold">{greet.swahili}</strong></span>
                  <span>Phonetic: <span className="font-mono text-stone-900 bg-stone-100 px-1.5 py-0.5 rounded font-bold">{greet.hint}</span></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Preservation & Community Safeguard Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-2 border-stone-300 rounded-2xl p-6 sm:p-10 bg-white shadow-sm space-y-4">
          <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-stone-950">
            A Living Inheritance for Future Generations
          </h3>
          <p className="text-base sm:text-lg text-stone-950 leading-relaxed max-w-3xl font-normal">
            "The history of a community does not belong only to the past. It continues through the language spoken by its people, the stories told by its elders, the traditions practised by its families, and the knowledge passed to its children. For the Wailwana, the responsibility of preserving this inheritance rests with the present generation as much as with those who came before."
          </p>
          <div className="pt-2 flex flex-wrap gap-4 text-xs sm:text-sm font-bold text-[#0f4c5c]">
            <span>• Authentic Community Voice</span>
            <span>• Elder Verified Records</span>
            <span>• Indigenous Knowledge Safeguard</span>
            <span>• Open Educational Resource</span>
          </div>
        </div>
      </section>
    </div>
  );
};
