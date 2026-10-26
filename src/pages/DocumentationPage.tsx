import React from 'react';
import { PageId } from '../components/Navbar';
import { BookOpen, ShieldCheck, FileText, Users, ArrowRight } from 'lucide-react';

interface DocumentationPageProps {
  onNavigate: (page: PageId) => void;
}

export const DocumentationPage: React.FC<DocumentationPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Header */}
      <div className="space-y-4 border-b-2 border-stone-300 pb-8">
        <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#0f4c5c]">
          <FileText className="w-4 h-4" />
          <span>Section 11 · Methodology & Sources</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-black tracking-tight text-stone-950">
          Sources & Documentation
        </h1>
        <p className="text-base sm:text-xl text-stone-950 leading-relaxed max-w-3xl font-normal">
          The content presented across this platform is grounded in authentic community oral histories, linguistic records, and cultural accounts curated to safeguard the heritage of the Ilwana people.
        </p>
      </div>

      {/* Preservation Basis */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border-2 border-stone-300 shadow-xs space-y-4">
        <h2 className="font-serif text-2xl sm:text-3xl font-black text-stone-950">
          Basis of the Digital Heritage Archive
        </h2>
        <div className="prose max-w-none text-stone-950 leading-relaxed space-y-4 text-base sm:text-lg font-normal">
          <p>
            For generations, the history, language, and customs of the Ilwana Community were primarily transmitted through oral traditions—passed from grandparents to grandchildren, shared during evening family gatherings, articulated in the consultative councils of the <em className="text-stone-950 font-semibold">Gasa</em>, and sung during communal dances such as <em className="text-stone-950 font-semibold">Kitoko</em>, <em className="text-stone-950 font-semibold">Koras</em>, and <em className="text-stone-950 font-semibold">Mashingwe</em>.
          </p>
          <p>
            This website organizes this body of community knowledge into a permanent, accessible digital resource. It reflects the community's own perspective rather than external or second-hand misrepresentations.
          </p>
        </div>
      </section>

      {/* Documentation Standards */}
      <section className="space-y-6">
        <div className="border-b-2 border-stone-300 pb-3">
          <h2 className="font-serif text-2xl sm:text-3xl font-black text-stone-950">
            Guiding Documentation Principles
          </h2>
          <p className="text-base text-stone-950 font-medium">
            Rigorous standards applied to protect community integrity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border-2 border-stone-300 shadow-2xs space-y-3 hover:border-[#0f4c5c] transition-colors">
            <div className="w-10 h-10 rounded-lg bg-teal-100 flex items-center justify-center text-[#0f4c5c]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-stone-950">Authentic Naming</h3>
            <p className="text-sm sm:text-base text-stone-950 leading-relaxed font-normal">
              Consistently upholding the authentic name <strong className="text-stone-950 font-extrabold">Ilwana</strong> and the people's designation <strong className="text-stone-950 font-extrabold">Wailwana</strong>, while explaining the historical inaccuracy of external labels such as "Malakote."
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border-2 border-stone-300 shadow-2xs space-y-3 hover:border-[#9a3412] transition-colors">
            <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center text-[#9a3412]">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-stone-950">Transparent Verification</h3>
            <p className="text-sm sm:text-base text-stone-950 leading-relaxed font-normal">
              Avoiding invented translations or speculative definitions. Terms whose full English equivalent is not yet established are explicitly marked as requiring elder confirmation.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border-2 border-stone-300 shadow-2xs space-y-3 hover:border-emerald-800 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-800">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-stone-950">Oral Preservation</h3>
            <p className="text-sm sm:text-base text-stone-950 leading-relaxed font-normal">
              Documented song lyrics and traditional expressions are preserved verbatim in their original Kilwana form to maintain poetic and metric authenticity.
            </p>
          </div>
        </div>
      </section>

      {/* Ongoing Research Notice */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border-2 border-stone-300 space-y-4">
        <h3 className="font-serif text-2xl font-black text-stone-950">
          An Ongoing Community Endeavor
        </h3>
        <p className="text-base text-stone-950 leading-relaxed font-normal">
          Documenting a community's heritage is a continuing journey. As more elder interviews, photographic archives, and linguistic analyses are gathered, additional historical and ethnographic documentation will be integrated through community review.
        </p>
        <div className="pt-2">
          <button
            onClick={() => onNavigate('contribute')}
            className="inline-flex items-center gap-2 text-base font-bold text-[#0f4c5c] hover:underline"
          >
            <span>Learn how community members can contribute knowledge</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
};
