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
      <div className="space-y-4 border-b border-stone-200 pb-8">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#0f4c5c]">
          <Heart className="w-4 h-4 text-rose-600" />
          <span>Section 12 · Living Community Archive</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-stone-900">
          Community Knowledge & Future Contributions
        </h1>
        <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-3xl">
          Preserving the heritage of the Wailwana is a collaborative, intergenerational mission. We welcome members of the community, elders, students, and cultural practitioners to help expand and refine our collective repository.
        </p>
      </div>

      {/* Priority Contribution Areas */}
      <section className="space-y-6">
        <div className="border-b border-stone-200 pb-3">
          <h2 className="font-serif text-2xl font-bold text-stone-900">
            Priority Areas for Community Documentation
          </h2>
          <p className="text-sm text-stone-500">
            Contributions from all generations help keep Ilwana heritage vibrant and accessible.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-2xs space-y-2">
            <span className="text-xs font-mono font-semibold text-[#0f4c5c]">01 / VOCABULARY</span>
            <h3 className="font-serif text-lg font-bold text-stone-900">Unconfirmed Local Terms</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Assisting in verifying the exact function, construction, and English meanings of terms flagged in the glossary (such as <em>Bati</em>, <em>Bunki</em>, <em>Firiimbi</em>, <em>Luguba</em>, and <em>Begele/Begelimo</em>).
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-2xs space-y-2">
            <span className="text-xs font-mono font-semibold text-[#9a3412]">02 / ORAL TRADITION</span>
            <h3 className="font-serif text-lg font-bold text-stone-900">Songs & Elder Histories</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Recording traditional song lyrics, melody recollections, oral proverbs (<em>methali</em>), and ancestral village histories as remembered by elder knowledge bearers.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-2xs space-y-2">
            <span className="text-xs font-mono font-semibold text-emerald-800">03 / MATERIAL CULTURE</span>
            <h3 className="font-serif text-lg font-bold text-stone-900">Crafts & Photographs</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Documenting traditional canoe crafting (<em>Waato</em>), beehive construction (<em>Mwaato</em>), basketry, and authentic historical photographs of cultural ceremonies.
            </p>
          </div>
        </div>
      </section>

      {/* Editorial Safeguard & Review Workflow */}
      <section className="bg-stone-50 p-6 sm:p-8 rounded-2xl border border-stone-200 space-y-4">
        <h3 className="font-serif text-xl font-bold text-stone-900">
          The Elder Review & Verification Workflow
        </h3>
        <p className="text-sm text-stone-700 leading-relaxed">
          To maintain absolute authenticity and prevent the introduction of unverified or inaccurate data, <strong>all proposed community contributions undergo careful review by knowledgeable Ilwana elders and cultural custodians</strong> before being incorporated into the public digital archive.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 text-xs">
          <div className="p-3 bg-white rounded-lg border border-stone-200">
            <strong>Step 1: Submission & Drafting</strong>
            <p className="text-stone-500 mt-1">Information is recorded with contributor and elder attribution.</p>
          </div>
          <div className="p-3 bg-white rounded-lg border border-stone-200">
            <strong>Step 2: Elder Consultation</strong>
            <p className="text-stone-500 mt-1">Linguistic and cultural details are cross-referenced with native speakers.</p>
          </div>
          <div className="p-3 bg-white rounded-lg border border-stone-200">
            <strong>Step 3: Permanent Archival</strong>
            <p className="text-stone-500 mt-1">Verified entries are integrated into the public glossary and knowledge sections.</p>
          </div>
        </div>
      </section>

      {/* Interactive Contribution Drafter */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-xs space-y-6">
        <div>
          <h2 className="font-serif text-2xl font-bold text-stone-900">
            Prepare a Heritage Contribution Draft
          </h2>
          <p className="text-sm text-stone-500 mt-1">
            Use this structured form to compile your notes, which you can easily copy and share with community heritage coordinators.
          </p>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase text-stone-600 mb-1">
                Your Name / Family Name
              </label>
              <input
                type="text"
                value={formData.contributorName}
                onChange={(e) => setFormData({ ...formData, contributorName: e.target.value })}
                placeholder="e.g., Community member / Student"
                className="w-full px-3 py-2 text-sm bg-stone-50 border border-stone-200 rounded-lg focus:outline-hidden focus:border-[#0f4c5c]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase text-stone-600 mb-1">
                Settlement or Clan Affiliation
              </label>
              <input
                type="text"
                value={formData.roleOrAffiliation}
                onChange={(e) => setFormData({ ...formData, roleOrAffiliation: e.target.value })}
                placeholder="e.g., Bura / Gariseni / Clan name"
                className="w-full px-3 py-2 text-sm bg-stone-50 border border-stone-200 rounded-lg focus:outline-hidden focus:border-[#0f4c5c]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase text-stone-600 mb-1">
              Contribution Type
            </label>
            <select
              value={formData.contributionType}
              onChange={(e) => setFormData({ ...formData, contributionType: e.target.value })}
              className="w-full px-3 py-2 text-sm bg-stone-50 border border-stone-200 rounded-lg focus:outline-hidden focus:border-[#0f4c5c]"
            >
              <option>Kilwana Vocabulary & Meaning</option>
              <option>Oral History or Migration Account</option>
              <option>Traditional Song Lyrics or Performance Context</option>
              <option>Cultural Craft, Tool or Food Recipe</option>
              <option>Clan Genealogy & Governance Detail</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase text-stone-600 mb-1">
              Details, Term, or Song Lyrics
            </label>
            <textarea
              rows={4}
              value={formData.contentDetails}
              onChange={(e) => setFormData({ ...formData, contentDetails: e.target.value })}
              placeholder="Provide the Kilwana word or phrase, its meaning, how it is used in daily or cultural life..."
              className="w-full px-3 py-2 text-sm bg-stone-50 border border-stone-200 rounded-lg focus:outline-hidden focus:border-[#0f4c5c]"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase text-stone-600 mb-1">
              Source Elder / Knowledge Bearer Information (Optional)
            </label>
            <input
              type="text"
              value={formData.sourceElderNotes}
              onChange={(e) => setFormData({ ...formData, sourceElderNotes: e.target.value })}
              placeholder="e.g., Narrated by Elder in Bura, October 2026"
              className="w-full px-3 py-2 text-sm bg-stone-50 border border-stone-200 rounded-lg focus:outline-hidden focus:border-[#0f4c5c]"
            />
          </div>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <button
              onClick={handleCopyDraft}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0f4c5c] hover:bg-[#135d70] text-white text-sm font-semibold rounded-lg transition-colors shadow-xs"
            >
              {copied ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-teal-200" />
                  <span>Draft Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy Contribution Text</span>
                </>
              )}
            </button>

            <button
              onClick={() => onNavigate('glossary')}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-stone-600 hover:text-stone-900"
            >
              <BookOpen className="w-4 h-4" />
              <span>Review unconfirmed glossary terms needing help</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
