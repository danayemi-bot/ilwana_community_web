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
      <div className="space-y-4 border-b border-stone-200 pb-8">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#0f4c5c]">
          <FileText className="w-4 h-4" />
          <span>Section 11 · Methodology & Sources</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-stone-900">
          Sources & Documentation
        </h1>
        <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-3xl">
          The content presented across this platform is grounded in authentic community oral histories, linguistic records, and cultural accounts curated to safeguard the heritage of the Ilwana people.
        </p>
      </div>

      {/* Preservation Basis */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-xs space-y-4">
        <h2 className="font-serif text-2xl font-bold text-stone-900">
          Basis of the Digital Heritage Archive
        </h2>
        <div className="prose max-w-none text-stone-700 leading-relaxed space-y-3 text-base">
          <p>
            For generations, the history, language, and customs of the Ilwana Community were primarily transmitted through oral traditions—passed from grandparents to grandchildren, shared during evening family gatherings, articulated in the consultative councils of the <em>Gasa</em>, and sung during communal dances such as <em>Kitoko</em>, <em>Koras</em>, and <em>Mashingwe</em>.
          </p>
          <p>
            This website organizes this body of community knowledge into a permanent, accessible digital resource. It reflects the community's own perspective rather than external or second-hand misrepresentations.
          </p>
        </div>
      </section>

      {/* Documentation Standards */}
      <section className="space-y-6">
        <div className="border-b border-stone-200 pb-3">
          <h2 className="font-serif text-2xl font-bold text-stone-900">
            Guiding Documentation Principles
          </h2>
          <p className="text-sm text-stone-500">
            Rigorous standards applied to protect community integrity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-2xs space-y-2">
            <div className="w-8 h-8 rounded-md bg-teal-50 flex items-center justify-center text-[#0f4c5c]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-bold text-stone-900">Authentic Naming</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Consistently upholding the authentic name <strong>Ilwana</strong> and the people's designation <strong>Wailwana</strong>, while explaining the historical inaccuracy of external labels such as "Malakote."
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-2xs space-y-2">
            <div className="w-8 h-8 rounded-md bg-amber-50 flex items-center justify-center text-[#9a3412]">
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-bold text-stone-900">Transparent Verification</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Avoiding invented translations or speculative definitions. Terms whose full English equivalent is not yet established are explicitly marked as requiring elder confirmation.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-2xs space-y-2">
            <div className="w-8 h-8 rounded-md bg-emerald-50 flex items-center justify-center text-emerald-800">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-bold text-stone-900">Oral Preservation</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Documented song lyrics and traditional expressions are preserved verbatim in their original Kilwana form to maintain poetic and metric authenticity.
            </p>
          </div>
        </div>
      </section>

      {/* Ongoing Research Notice */}
      <section className="bg-stone-50 p-6 sm:p-8 rounded-2xl border border-stone-200 space-y-3">
        <h3 className="font-serif text-xl font-bold text-stone-900">
          An Ongoing Community Endeavor
        </h3>
        <p className="text-sm text-stone-700 leading-relaxed">
          Documenting a community's heritage is a continuing journey. As more elder interviews, photographic archives, and linguistic analyses are gathered, additional historical and ethnographic documentation will be integrated through community review.
        </p>
        <div className="pt-2">
          <button
            onClick={() => onNavigate('contribute')}
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#0f4c5c] hover:underline"
          >
            <span>Learn how community members can contribute knowledge</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
