import React, { useState } from 'react';
import { PageId } from '../components/Navbar';
import { Users, Heart, Send, CheckCircle2, Copy, BookOpen } from 'lucide-react';

interface ContributionsPageProps {
  onNavigate: (page: PageId) => void;
}

export const ContributionsPage: React.FC<ContributionsPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    contributorName: '',
    roleOrAffiliation: '',
    contributionType: 'Kilwana Vocabulary',
    contentDetails: '',
    sourceElderNotes: '',
  });

  const [copied, setCopied] = useState(false);

  const handleCopyDraft = () => {
    const text = `
=== ILWANA COMMUNITY HERITAGE CONTRIBUTION DRAFT ===
Contributor: ${formData.contributorName || 'Not specified'}
Role / Affiliation: ${formData.roleOrAffiliation || 'Community member'}
Type: ${formData.contributionType}

Contribution Details / Term & Explanation:
${formData.contentDetails || 'None provided'}

Source Elder / Knowledge Bearer Notes:
${formData.sourceElderNotes || 'None provided'}
====================================================
    `.trim();

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Header */}
      <div className="space-y-4 border-b-2 border-stone-300 pb-8">
        <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#0f4c5c]">
          <Heart className="w-4 h-4 text-rose-600" />
          <span>Section 12 · Living Community Archive</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-black tracking-tight text-stone-950">
          Community Knowledge & Future Contributions
        </h1>
        <p className="text-base sm:text-xl text-stone-950 leading-relaxed max-w-3xl font-normal">
          Preserving the heritage of the Wailwana is a collaborative, intergenerational mission. We welcome members of the community, elders, students, and cultural practitioners to help expand and refine our collective repository.
        </p>
      </div>

      {/* Priority Contribution Areas */}
      <section className="space-y-6">
        <div className="border-b-2 border-stone-300 pb-3">
          <h2 className="font-serif text-2xl sm:text-3xl font-black text-stone-950">
            Priority Areas for Community Documentation
          </h2>
          <p className="text-base text-stone-950 font-medium">
            Contributions from all generations help keep Ilwana heritage vibrant and accessible.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border-2 border-stone-300 shadow-2xs space-y-2 hover:border-[#0f4c5c] transition-colors">
            <span className="text-xs sm:text-sm font-mono font-bold text-[#0f4c5c] bg-teal-50 px-2 py-0.5 rounded">01 / VOCABULARY</span>
            <h3 className="font-serif text-xl font-bold text-stone-950">Unconfirmed Local Terms</h3>
            <p className="text-sm sm:text-base text-stone-950 leading-relaxed font-normal">
              Assisting in verifying the exact function, construction, and English meanings of terms flagged in the glossary (such as <em className="text-stone-950 font-semibold">Bati</em>, <em className="text-stone-950 font-semibold">Bunki</em>, <em className="text-stone-950 font-semibold">Firiimbi</em>, <em className="text-stone-950 font-semibold">Luguba</em>, and <em className="text-stone-950 font-semibold">Begele/Begelimo</em>).
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border-2 border-stone-300 shadow-2xs space-y-2 hover:border-[#9a3412] transition-colors">
            <span className="text-xs sm:text-sm font-mono font-bold text-[#9a3412] bg-amber-50 px-2 py-0.5 rounded">02 / ORAL TRADITION</span>
            <h3 className="font-serif text-xl font-bold text-stone-950">Songs & Elder Histories</h3>
            <p className="text-sm sm:text-base text-stone-950 leading-relaxed font-normal">
              Recording traditional song lyrics, melody recollections, oral proverbs (<em className="text-stone-950 font-semibold">methali</em>), and ancestral village histories as remembered by elder knowledge bearers.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border-2 border-stone-300 shadow-2xs space-y-2 hover:border-emerald-800 transition-colors">
            <span className="text-xs sm:text-sm font-mono font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">03 / MATERIAL CULTURE</span>
            <h3 className="font-serif text-xl font-bold text-stone-950">Crafts & Photographs</h3>
            <p className="text-sm sm:text-base text-stone-950 leading-relaxed font-normal">
              Documenting traditional canoe crafting (<em className="text-stone-950 font-semibold">Waato</em>), beehive construction (<em className="text-stone-950 font-semibold">Mwaato</em>), basketry, and authentic historical photographs of cultural ceremonies.
            </p>
          </div>
        </div>
      </section>

      {/* Editorial Safeguard & Review Workflow */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border-2 border-stone-300 space-y-4">
        <h3 className="font-serif text-2xl font-black text-stone-950">
          The Elder Review & Verification Workflow
        </h3>
        <p className="text-base text-stone-950 leading-relaxed font-normal">
          To maintain absolute authenticity and prevent the introduction of unverified or inaccurate data, <strong className="text-stone-950 font-extrabold">all proposed community contributions undergo careful review by knowledgeable Ilwana elders and cultural custodians</strong> before being incorporated into the public digital archive.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 text-sm">
          <div className="p-4 bg-[#fdfbf7] rounded-xl border-2 border-stone-300 space-y-1">
            <strong className="font-black text-stone-950 text-base">Step 1: Submission & Drafting</strong>
            <p className="text-stone-950 font-normal">Information is recorded with contributor and elder attribution.</p>
          </div>
          <div className="p-4 bg-[#fdfbf7] rounded-xl border-2 border-stone-300 space-y-1">
            <strong className="font-black text-stone-950 text-base">Step 2: Elder Consultation</strong>
            <p className="text-stone-950 font-normal">Linguistic and cultural details are cross-referenced with native speakers.</p>
          </div>
          <div className="p-4 bg-[#fdfbf7] rounded-xl border-2 border-stone-300 space-y-1">
            <strong className="font-black text-stone-950 text-base">Step 3: Permanent Archival</strong>
            <p className="text-stone-950 font-normal">Verified entries are integrated into the public glossary and knowledge sections.</p>
          </div>
        </div>
      </section>

      {/* Interactive Contribution Drafter */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border-2 border-stone-300 shadow-xs space-y-6">
        <div>
          <h2 className="font-serif text-2xl sm:text-3xl font-black text-stone-950">
            Prepare a Heritage Contribution Draft
          </h2>
          <p className="text-base text-stone-950 font-medium mt-1">
            Use this structured form to compile your notes, which you can easily copy and share with community heritage coordinators.
          </p>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs sm:text-sm font-bold uppercase text-stone-950 mb-1.5">
                Your Name / Family Name
              </label>
              <input
                type="text"
                value={formData.contributorName}
                onChange={(e) => setFormData({ ...formData, contributorName: e.target.value })}
                placeholder="e.g., Community member / Student"
                className="w-full px-4 py-2.5 text-base bg-white border-2 border-stone-300 rounded-xl text-stone-950 font-medium focus:outline-hidden focus:border-[#0f4c5c]"
              />
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-bold uppercase text-stone-950 mb-1.5">
                Settlement or Clan Affiliation
              </label>
              <input
                type="text"
                value={formData.roleOrAffiliation}
                onChange={(e) => setFormData({ ...formData, roleOrAffiliation: e.target.value })}
                placeholder="e.g., Bura / Gariseni / Clan name"
                className="w-full px-4 py-2.5 text-base bg-white border-2 border-stone-300 rounded-xl text-stone-950 font-medium focus:outline-hidden focus:border-[#0f4c5c]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs sm:text-sm font-bold uppercase text-stone-950 mb-1.5">
              Contribution Type
            </label>
            <select
              value={formData.contributionType}
              onChange={(e) => setFormData({ ...formData, contributionType: e.target.value })}
              className="w-full px-4 py-2.5 text-base bg-white border-2 border-stone-300 rounded-xl text-stone-950 font-medium focus:outline-hidden focus:border-[#0f4c5c]"
            >
              <option>Kilwana Vocabulary & Meaning</option>
              <option>Oral History or Migration Account</option>
              <option>Traditional Song Lyrics or Performance Context</option>
              <option>Cultural Craft, Tool or Food Recipe</option>
              <option>Clan Genealogy & Governance Detail</option>
            </select>
          </div>

          <div>
            <label className="block text-xs sm:text-sm font-bold uppercase text-stone-950 mb-1.5">
              Details, Term, or Song Lyrics
            </label>
            <textarea
              rows={4}
              value={formData.contentDetails}
              onChange={(e) => setFormData({ ...formData, contentDetails: e.target.value })}
              placeholder="Provide the Kilwana word or phrase, its meaning, how it is used in daily or cultural life..."
              className="w-full px-4 py-2.5 text-base bg-white border-2 border-stone-300 rounded-xl text-stone-950 font-medium focus:outline-hidden focus:border-[#0f4c5c]"
            />
          </div>

          <div>
            <label className="block text-xs sm:text-sm font-bold uppercase text-stone-950 mb-1.5">
              Source Elder / Knowledge Bearer Information (Optional)
            </label>
            <input
              type="text"
              value={formData.sourceElderNotes}
              onChange={(e) => setFormData({ ...formData, sourceElderNotes: e.target.value })}
              placeholder="e.g., Narrated by Elder in Bura, October 2026"
              className="w-full px-4 py-2.5 text-base bg-white border-2 border-stone-300 rounded-xl text-stone-950 font-medium focus:outline-hidden focus:border-[#0f4c5c]"
            />
          </div>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <button
              onClick={handleCopyDraft}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#0f4c5c] hover:bg-[#135d70] text-white text-base font-bold rounded-xl transition-colors shadow-xs"
            >
              {copied ? (
                <>
                  <CheckCircle2 className="w-5 h-5 text-teal-200" />
                  <span>Draft Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-5 h-5" />
                  <span>Copy Contribution Text</span>
                </>
              )}
            </button>

            <button
              onClick={() => onNavigate('glossary')}
              className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-[#0f4c5c] hover:underline"
            >
              <BookOpen className="w-4 h-4" />
              <span>Review unconfirmed glossary terms</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
