import React from 'react';
import { TIMELINE_DATA } from '../data/heritageData';
import { PageId } from '../components/Navbar';
import { Compass, AlertCircle, Shield, CheckCircle2, ArrowRight } from 'lucide-react';

interface HistoryPageProps {
  onNavigate: (page: PageId) => void;
}

export const HistoryPage: React.FC<HistoryPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Header */}
      <div className="space-y-4 border-b border-stone-200 pb-8">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#0f4c5c]">
          <Compass className="w-4 h-4" />
          <span>Section 02 · Historical Foundation</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-extrabold tracking-tight text-stone-950 leading-tight">
          Origins, Migration & Identity of the Ilwana
        </h1>
        <p className="text-base sm:text-xl text-stone-900 font-medium leading-relaxed max-w-3xl">
          The Ilwana Community possesses a rich history, a distinct language, and a unique cultural identity preserved and transmitted across centuries along the River Tana.
        </p>
      </div>

      {/* Etymology & Linguistic Distinction */}
      <section className="space-y-6">
        <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-stone-950">
          The Names: Ilwana and Wailwana
        </h2>
        <div className="prose max-w-none text-stone-900 leading-relaxed space-y-4 text-base sm:text-lg">
          <p>
            Understanding the identity of the community begins with understanding the terminology used by the people themselves. In the Kilwana language, a vital grammatical distinction is maintained:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
            <div className="bg-white p-6 rounded-2xl border-2 border-stone-300 shadow-xs space-y-2.5">
              <span className="text-xs font-mono text-[#0f4c5c] font-bold tracking-wider">COLLECTIVE ENTITY</span>
              <h3 className="font-serif text-2xl font-extrabold text-stone-950">Ilwana</h3>
              <p className="text-base text-stone-900 font-normal leading-relaxed">
                Refers to the <strong className="text-stone-950 font-bold">community as a whole</strong>, its culture, shared territory, and ethnic body. Comparable to how "Pokomo" or "Kamba" refers to the community.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border-2 border-stone-300 shadow-xs space-y-2.5">
              <span className="text-xs font-mono text-[#0f4c5c] font-bold tracking-wider">INDIVIDUAL MEMBERS</span>
              <h3 className="font-serif text-2xl font-extrabold text-stone-950">Wailwana</h3>
              <p className="text-base text-stone-900 font-normal leading-relaxed">
                Refers to the <strong className="text-stone-950 font-bold">individual people</strong> belonging to the community. Comparable to "Wapokomo" or "Wakamba" in Kenyan linguistic structures.
              </p>
            </div>
          </div>
          <p>
            Within the community, the name <strong className="text-stone-950 font-bold">Ilwana</strong> carries profound philosophical meaning. It is widely associated with the concept of <em className="text-stone-950 font-semibold">free people</em> or <em className="text-stone-950 font-semibold">free men</em>, embodying core values of independence, self-governance, dignity, and communal pride.
          </p>
        </div>
      </section>

      {/* Clarification on "Malakote" */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border-2 border-stone-300 shadow-xs space-y-4">
        <div className="flex items-start gap-3">
          <AlertCircle className="w-6 h-6 text-[#9a3412] shrink-0 mt-1" />
          <div className="space-y-2">
            <h3 className="font-serif text-xl font-bold text-stone-900">
              Clarifying the Name "Malakote"
            </h3>
            <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
              For many decades, historical reports, linguistic surveys, and colonial administrative files incorrectly classified the Ilwana under neighboring groups or popularized the term <strong>"Malakote."</strong>
            </p>
          </div>
        </div>

        <div className="pl-9 space-y-3 text-sm text-stone-600 border-l border-stone-200 ml-3">
          <p>
            <strong>According to the Ilwana people, the word "Malakote" does not exist in the Kilwana language or dictionary.</strong> It is not a traditional self-designation, nor does it originate from Ilwana cultural heritage.
          </p>
          <p>
            Historical accounts indicate that the name was largely introduced by members of neighboring communities. During colonial and early post-colonial periods, few Wailwana had access to formal schooling, and many families lived in isolated riverine interiors. Consequently, external researchers relied on second-hand information gathered from neighbouring Pokomo, Orma, or Somali informants who described the Ilwana through their own subjective lenses.
          </p>
          <p className="font-medium text-stone-800">
            Today, community elders, the traditional king (Hayu), and members of the community firmly reject the term "Malakote" as inaccurate, reaffirming <strong>Ilwana</strong> as the true, dignified, and authentic name.
          </p>
        </div>
      </section>

      {/* Historical Timeline */}
      <section className="space-y-8">
        <div className="border-b border-stone-200 pb-4">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
            Historical Migration Sequence
          </h2>
          <p className="text-sm text-stone-500 mt-1">
            Grounded in the documented oral traditions and historical memories of the Wailwana.
          </p>
        </div>

        <div className="space-y-6">
          {TIMELINE_DATA.map((event, idx) => (
            <div
              key={idx}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-6 bg-white rounded-xl border border-stone-200 shadow-2xs"
            >
              <div className="sm:w-48 shrink-0">
                <span className="text-xs font-mono font-semibold text-[#0f4c5c] bg-teal-50 px-2.5 py-1 rounded inline-block">
                  {event.era}
                </span>
              </div>
              <div className="space-y-2 flex-1">
                <h3 className="font-serif text-lg font-bold text-stone-900">
                  {event.title}
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Connection to River Tana */}
      <section className="bg-stone-100 p-8 rounded-2xl border border-stone-200 space-y-4">
        <h3 className="font-serif text-xl font-bold text-stone-900 flex items-center gap-2">
          <Shield className="w-5 h-5 text-[#0f4c5c]" />
          Settlement on the River Tana
        </h3>
        <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
          Following their migration from Shungwaya, the ancestors of the Ilwana moved south along the course of the River Tana until reaching the fertile lands along its banks. For centuries, the river (known locally as <em>Chaana</em>) has provided water for cultivation, rich fishing grounds, transportation routes, and an unshakeable anchor for community life.
        </p>
        <div className="pt-2">
          <button
            onClick={() => onNavigate('geography')}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#0f4c5c] hover:underline"
          >
            <span>Explore River Tana Settlements & Homeland</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
