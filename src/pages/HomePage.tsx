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
      <section className="relative overflow-hidden bg-stone-900 text-stone-100 pt-16 sm:pt-24 pb-20 sm:pb-28 border-b border-stone-800">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#0f4c5c_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-teal-400">
              <Compass className="w-4 h-4" />
              <span>Digital Heritage & Knowledge Preservation</span>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 pt-1">
              <img
                src="/assets/aistudio/image_ae57196b.png"
                alt="Ilwana Community Heritage Emblem"
                className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full object-cover border-2 border-teal-500/40 shadow-xl shrink-0 bg-white"
              />
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15]">
                Preserving the History, Language & Heritage of the Wailwana
              </h1>
            </div>

            <p className="text-base sm:text-lg text-stone-300 leading-relaxed max-w-2xl">
              Welcome to the official community knowledge repository of the Ilwana Community of Kenya. Dedicated to documenting our ancestral origins along the River Tana, safeguarding the Kilwana language, and upholding our traditional governance, cultural arts, and indigenous wisdom for generations to come.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate('glossary')}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#0f4c5c] hover:bg-[#135d70] text-white font-medium rounded-lg text-sm sm:text-base transition-colors shadow-md"
              >
                <BookOpen className="w-5 h-5" />
                <span>Explore Kilwana Glossary</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>

              <button
                onClick={() => onNavigate('history')}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-stone-800 hover:bg-stone-700 text-stone-200 border border-stone-700 font-medium rounded-lg text-sm sm:text-base transition-colors"
              >
                <span>Origins & Migration</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Purpose & Distinction Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-6 sm:p-10 border border-stone-200/80 shadow-xs space-y-6">
          <div className="max-w-2xl">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
              Community Identity & Foundation
            </h2>
            <p className="text-sm sm:text-base text-stone-600 mt-2">
              The Ilwana are a distinct Bantu-speaking indigenous community whose cultural, economic, and spiritual identity has flourished along the River Tana for centuries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-stone-100">
            <div className="space-y-2">
              <span className="text-xs font-mono text-[#0f4c5c] font-semibold">01 / TERMINOLOGY</span>
              <h3 className="font-serif text-lg font-bold text-stone-900">Ilwana & Wailwana</h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                <strong>Ilwana</strong> designates the community as a whole; <strong>Wailwana</strong> refers to the people who belong to it. The name is traditionally associated with dignity and the concept of free people.
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono text-[#0f4c5c] font-semibold">02 / CORRECTION</span>
              <h3 className="font-serif text-lg font-bold text-stone-900">Authentic Naming</h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                The community rejects external misnomers such as "Malakote," a label absent from the Kilwana vocabulary that arose from second-hand historical accounts. The authentic name remains Ilwana.
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono text-[#0f4c5c] font-semibold">03 / TRADITION</span>
              <h3 className="font-serif text-lg font-bold text-stone-900">Hayu & Gasa</h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                Led by the <strong>Hayu</strong> (the traditional king) and the <strong>Gasa</strong> supreme consultative council, community affairs have long been guided by moral character, consensus, and restorative justice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Heritage Topics (The 12 Core Sections) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-stone-200 pb-5">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-stone-500">
              Heritage Archive
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mt-1">
              Explore the 12 Principal Sections
            </h2>
          </div>
          <p className="text-sm text-stone-500 max-w-md">
            Click any subject to access curated historical accounts, linguistic records, and indigenous traditions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* History */}
          <div
            onClick={() => onNavigate('history')}
            className="group cursor-pointer bg-white p-6 rounded-xl border border-stone-200 hover:border-[#0f4c5c] hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center text-[#0f4c5c]">
                <Compass className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono text-stone-400">02. HISTORY & IDENTITY</span>
              <h3 className="font-serif text-xl font-bold text-stone-900 group-hover:text-[#0f4c5c] transition-colors">
                Origins & Migration
              </h3>
              <p className="text-sm text-stone-600 line-clamp-3">
                Trace the journey from the Congo Basin across the East African coast, the Comoros, and Shungwaya to the permanent settlements along the River Tana.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-stone-100 flex items-center text-xs font-semibold text-[#0f4c5c]">
              <span>Read Historical Narrative</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Geography */}
          <div
            onClick={() => onNavigate('geography')}
            className="group cursor-pointer bg-white p-6 rounded-xl border border-stone-200 hover:border-[#0f4c5c] hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center text-[#9a3412]">
                <Layers className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono text-stone-400">03. GEOGRAPHY</span>
              <h3 className="font-serif text-xl font-bold text-stone-900 group-hover:text-[#9a3412] transition-colors">
                River Tana & Homeland
              </h3>
              <p className="text-sm text-stone-600 line-clamp-3">
                Explore the riverine homeland in Tana River County, Bura Constituency, Gariseni, and over thirty documented ancestral villages and settlements.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-stone-100 flex items-center text-xs font-semibold text-[#9a3412]">
              <span>View Settlements Directory</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Kilwana Language Centre */}
          <div
            onClick={() => onNavigate('language')}
            className="group cursor-pointer bg-white p-6 rounded-xl border border-stone-200 hover:border-[#0f4c5c] hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center text-[#0f4c5c]">
                <Feather className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono text-stone-400">04. LANGUAGE CENTRE</span>
              <h3 className="font-serif text-xl font-bold text-stone-900 group-hover:text-[#0f4c5c] transition-colors">
                The Kilwana Language
              </h3>
              <p className="text-sm text-stone-600 line-clamp-3">
                Examine linguistic classification, multilingualism with Kiswahili, Orma, and Somali, modern preservation needs, and interactive vocabulary lists.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-stone-100 flex items-center text-xs font-semibold text-[#0f4c5c]">
              <span>Access Language Centre</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Social Structure */}
          <div
            onClick={() => onNavigate('social')}
            className="group cursor-pointer bg-white p-6 rounded-xl border border-stone-200 hover:border-[#0f4c5c] hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-800">
                <Users className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono text-stone-400">05. SOCIAL STRUCTURE</span>
              <h3 className="font-serif text-xl font-bold text-stone-900 group-hover:text-emerald-800 transition-colors">
                Kinship, Marriage & Rites
              </h3>
              <p className="text-sm text-stone-600 line-clamp-3">
                Discover the role of extended family, gender roles, traditional A'LIMA marriage customs, the sacred Ukaamwaale childbirth celebration, and river calling.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-stone-100 flex items-center text-xs font-semibold text-emerald-800">
              <span>Explore Social Customs</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Governance */}
          <div
            onClick={() => onNavigate('governance')}
            className="group cursor-pointer bg-white p-6 rounded-xl border border-stone-200 hover:border-[#0f4c5c] hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center text-amber-800">
                <Shield className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono text-stone-400">07. GOVERNANCE & CLANS</span>
              <h3 className="font-serif text-xl font-bold text-stone-900 group-hover:text-amber-800 transition-colors">
                The Hayu & Gasa System
              </h3>
              <p className="text-sm text-stone-600 line-clamp-3">
                Learn how the traditional king (Hayu) and the Gasa supreme council resolve land disputes, uphold peace through consensus, and maintain the 8 major clans.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-stone-100 flex items-center text-xs font-semibold text-amber-800">
              <span>View Leadership System</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Arts & Music */}
          <div
            onClick={() => onNavigate('arts')}
            className="group cursor-pointer bg-white p-6 rounded-xl border border-stone-200 hover:border-[#0f4c5c] hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-rose-50 flex items-center justify-center text-rose-800">
                <Music className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono text-stone-400">08. ARTS & MUSIC</span>
              <h3 className="font-serif text-xl font-bold text-stone-900 group-hover:text-rose-800 transition-colors">
                Songs, Dances & Instruments
              </h3>
              <p className="text-sm text-stone-600 line-clamp-3">
                Verbatim documented song lyrics for Kitoko, Koras, Mashingwe, Mkao work songs, and Hayu celebration hymns, plus traditional percussion instruments.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-stone-100 flex items-center text-xs font-semibold text-rose-800">
              <span>Read Documented Songs</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Material Culture */}
          <div
            onClick={() => onNavigate('material')}
            className="group cursor-pointer bg-white p-6 rounded-xl border border-stone-200 hover:border-[#0f4c5c] hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center text-orange-800">
                <Hammer className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono text-stone-400">09. MATERIAL CULTURE</span>
              <h3 className="font-serif text-xl font-bold text-stone-900 group-hover:text-orange-800 transition-colors">
                Food, Tools & Beekeeping
              </h3>
              <p className="text-sm text-stone-600 line-clamp-3">
                Traditional garments (Haagoodo, Banaadiri), gastronomy (Buyuyu, Konole, Makaaruka), beekeeping (Mwaato, Nooma, Begele), and river implements (Waato, Boodo).
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-stone-100 flex items-center text-xs font-semibold text-orange-800">
              <span>Explore Material Heritage</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Dedicated Glossary Card */}
          <div
            onClick={() => onNavigate('glossary')}
            className="group cursor-pointer bg-[#0f4c5c] text-white p-6 rounded-xl shadow-md hover:bg-[#135d70] transition-all flex flex-col justify-between sm:col-span-2 lg:col-span-2"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white">
                <BookOpen className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono text-teal-200">10. MANDATORY COMPULSORY SECTION</span>
              <h3 className="font-serif text-2xl font-bold text-white">
                Complete Glossary of Kilwana Words & Cultural Terms
              </h3>
              <p className="text-sm text-teal-100 max-w-xl leading-relaxed">
                A dedicated, comprehensive, searchable reference database comprising every documented Kilwana term, kinship word, governance title, tool name, dish, and clan. Fully cross-referenced with cultural explanations and elder confirmation status.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/20 flex items-center justify-between text-sm font-semibold">
              <span className="flex items-center gap-2">
                <span>Browse Alphabetical Index (A–Z)</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </span>
              <span className="font-mono text-xs bg-white/20 px-2 py-0.5 rounded">
                {GLOSSARY_DATA.length} Terms Documented
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Language Spotlight / Quick Phrases */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-stone-100 rounded-2xl p-6 sm:p-10 border border-stone-200">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#0f4c5c] flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" /> Living Kilwana Vocabulary
              </span>
              <h2 className="font-serif text-2xl font-bold text-stone-900 mt-1">
                Common Kilwana Greetings & Expressions
              </h2>
            </div>
            <button
              onClick={() => onNavigate('language')}
              className="text-sm font-semibold text-[#0f4c5c] hover:underline flex items-center gap-1 self-start md:self-auto"
            >
              Visit Language Centre <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {sampleGreetings.map((greet, idx) => (
              <div
                key={idx}
                className="bg-white p-5 rounded-xl border border-stone-200/90 shadow-2xs space-y-2"
              >
                <div className="flex items-center justify-between">
                  <span className="font-serif text-lg font-bold text-stone-900">
                    {greet.term}
                  </span>
                  <span className="text-[11px] font-mono text-stone-400">Greeting</span>
                </div>
                <p className="text-sm font-medium text-stone-700">{greet.meaning}</p>
                <div className="pt-2 border-t border-stone-100 text-xs text-stone-500 flex flex-col gap-0.5">
                  <span>Kiswahili: <em className="text-stone-700">{greet.swahili}</em></span>
                  <span>Phonetic: <span className="font-mono text-stone-600">{greet.hint}</span></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Preservation & Community Safeguard Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border border-stone-300 rounded-xl p-8 bg-[#f5f1ea] space-y-4">
          <h3 className="font-serif text-xl font-bold text-stone-900">
            A Living Inheritance for Future Generations
          </h3>
          <p className="text-sm sm:text-base text-stone-700 leading-relaxed max-w-3xl">
            "The history of a community does not belong only to the past. It continues through the language spoken by its people, the stories told by its elders, the traditions practised by its families, and the knowledge passed to its children. For the Wailwana, the responsibility of preserving this inheritance rests with the present generation as much as with those who came before."
          </p>
          <div className="pt-2 flex flex-wrap gap-4 text-xs font-medium text-stone-600">
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
