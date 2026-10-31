import React from 'react';
import { CLANS_DATA } from '../data/heritageData';
import { PageId } from '../components/Navbar';
import { Shield, Crown, Users, Scale, ArrowRight, CheckCircle2 } from 'lucide-react';

interface GovernancePageProps {
  onNavigate: (page: PageId) => void;
}

export const GovernancePage: React.FC<GovernancePageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Header */}
      <div className="space-y-4 border-b-2 border-stone-300 pb-8">
        <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#0f4c5c]">
          <Shield className="w-4 h-4" />
          <span>Section 07 · Political & Customary Institutions</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-black tracking-tight text-stone-950">
          Traditional Governance, the Hayu & the Gasa
        </h1>
        <p className="text-base sm:text-xl text-stone-950 leading-relaxed max-w-3xl font-normal">
          Long predating modern administrative systems, the Ilwana Community instituted an enduring governance model centered on consultative consensus, moral integrity, restorative justice, and clan representation.
        </p>
      </div>

      {/* The Institution of the Hayu */}
      <section className="bg-white p-6 sm:p-10 rounded-2xl border-2 border-stone-300 shadow-xs space-y-6">
        <div className="flex items-center gap-3 text-[#9a3412]">
          <Crown className="w-8 h-8" />
          <div>
            <span className="text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-amber-800">
              TRADITIONAL MONARCH & CULTURAL LEADER
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-black text-stone-950">
              The Hayu (Traditional King)
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center pt-2">
          <div className="lg:col-span-5 rounded-2xl overflow-hidden border-2 border-amber-400 shadow-md">
            <img
              src="/assets/aistudio/hayu_adddressing_67ed9fc2.png"
              alt="The Hayu addressing community assembly"
              className="w-full h-auto object-cover"
            />
            <div className="bg-stone-900 text-stone-200 p-2.5 text-xs font-medium">
              <span className="font-black text-amber-400 block uppercase tracking-wide">Authentic Record</span>
              The Hayu (Traditional King) addressing the Ilwana gathering in traditional regalia.
            </div>
          </div>
          <div className="lg:col-span-7 space-y-4">
            <p className="text-base sm:text-lg text-stone-950 leading-relaxed font-normal">
              The <strong className="text-stone-950 font-black">Hayu</strong> is the traditional king and supreme cultural leader of the Ilwana Community. The institution represents the continuity, unity, and dignity of the Wailwana.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-4 bg-[#fdfbf7] rounded-xl border-2 border-stone-300 text-sm space-y-1">
                <span className="font-black text-stone-950 text-base block">Leadership by Character</span>
                <p className="text-stone-950 font-normal leading-relaxed">
                  Moral integrity, sound judgment, patience, and the ability to listen impartially to all sides.
                </p>
              </div>
              <div className="p-4 bg-[#fdfbf7] rounded-xl border-2 border-stone-300 text-sm space-y-1">
                <span className="font-black text-stone-950 text-base block">Paramount Representation</span>
                <p className="text-stone-950 font-normal leading-relaxed">
                  Represents the Wailwana when engaging neighbouring communities, cultural delegations, and county authorities.
                </p>
              </div>
            </div>
            <p className="text-base text-stone-950 font-medium pt-1">
              Every year in <strong className="text-stone-950 font-black">December</strong>, the community organizes the annual <em className="text-stone-950 font-bold">Hayu Celebrations</em>, featuring dedicated praise songs honoring his leadership and reaffirming communal identity.
            </p>
          </div>
        </div>
      </section>

      {/* Governance Architecture Diagram */}
      <section className="bg-stone-900 text-stone-100 p-6 sm:p-8 rounded-2xl space-y-6">
        <div className="border-b border-stone-800 pb-3">
          <span className="text-xs font-mono text-teal-400 uppercase tracking-widest">
            STRUCTURAL RELATIONSHIPS
          </span>
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mt-1">
            Ilwana Traditional Governance Architecture
          </h3>
        </div>

        <div className="font-mono text-xs sm:text-sm bg-stone-950 p-4 sm:p-6 rounded-xl border border-stone-800 overflow-x-auto text-stone-300 leading-relaxed">
          <pre>{`
┌────────────────────────────────────────────────────────┐
│                        THE HAYU                        │
│   Traditional King · Supreme Cultural Representative   │
│                Chairs the Gasa Assembly                │
└───────────────────────────┬────────────────────────────┘
                            │
┌───────────────────────────┴────────────────────────────┐
│                        THE GASA                        │
│     Supreme Decision-Making & Dispute Council          │
├────────────────────────────────────────────────────────┤
│ • Elected Chairperson      • Senior Elder Custodians   │
│ • Religious Scholars       • Representatives of Clans  │
└───────────────────────────┬────────────────────────────┘
                            │
        ┌───────────────────┴───────────────────┐
        │                                       │
┌───────┴───────────────────────┐   ┌───────────┴───────────────┐
│     8 TRADITIONAL CLANS       │   │   VILLAGE ELDER COUNCILS  │
│ Regulate Kinship & Ancestry   │   │ Family & Land Mediation   │
│ Wayu, Karari, Mamboya, Hajeji,│   │ Local Restorative Justice │
│ Abole, Karayu, Ilaani, Galgedha│  │ Communal Coordination     │
└───────────────────────────────┘   └───────────────────────────┘
          `}</pre>
        </div>
        <p className="text-xs text-stone-400">
          *Ilwana governance relies strictly on consultative assembly rather than the autocratic fiat of an individual ruler.
        </p>
      </section>

      {/* The Gasa Institution */}
      <section className="space-y-6">
        <div className="border-b-2 border-stone-300 pb-3">
          <h2 className="font-serif text-2xl sm:text-3xl font-black text-stone-950">
            The Gasa: Supreme Consultative Council
          </h2>
          <p className="text-base text-stone-950 font-medium">
            The highest traditional forum for resolving major disputes and determining policy.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-5 rounded-2xl overflow-hidden border-2 border-stone-300 shadow-md order-2 lg:order-1">
            <img
              src="/assets/aistudio/wailwana_elders_8d71f49e.png"
              alt="Wailwana Elders in Gasa Council Deliberation"
              className="w-full h-auto object-cover"
            />
            <div className="bg-stone-900 text-stone-200 p-2.5 text-xs font-medium">
              <span className="font-black text-amber-400 block uppercase tracking-wide">Historical Assembly</span>
              Wailwana Gasa elders seated in consultative deliberation under the shade of ancient riverine trees.
            </div>
          </div>
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 order-1 lg:order-2">
            <div className="bg-white p-6 rounded-xl border-2 border-stone-300 shadow-2xs space-y-3">
              <span className="text-xs sm:text-sm font-mono font-black text-[#0f4c5c] uppercase">COMPOSITION</span>
              <h3 className="font-serif text-xl font-black text-stone-950">Collaborative Assembly</h3>
              <p className="text-base text-stone-950 leading-relaxed font-normal">
                Chaired by the Hayu and supported by an elected chairperson, the Gasa convenes senior elders, Islamic scholars (Sheikhs), and clan representatives.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-stone-300 shadow-2xs space-y-3">
              <span className="text-xs sm:text-sm font-mono font-black text-[#9a3412] uppercase">OBJECTIVE</span>
              <h3 className="font-serif text-xl font-black text-stone-950">Restorative Justice</h3>
              <p className="text-base text-stone-950 leading-relaxed font-normal">
                The purpose of the Gasa is restorative rather than punitive: repairing relationships, establishing fair compensation, and restoring communal harmony.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The 8 Traditional Clans */}
      <section className="space-y-6">
        <div className="border-b-2 border-stone-300 pb-3">
          <h2 className="font-serif text-2xl sm:text-3xl font-black text-stone-950">
            The Eight Traditional Clans of the Ilwana
          </h2>
          <p className="text-base text-stone-950 font-medium">
            Clans provide the social framework through which Wailwana identify lineage, regulate marriage, and mobilize mutual support.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CLANS_DATA.map((clan, idx) => (
            <div
              key={idx}
              className="bg-white p-5 rounded-xl border-2 border-stone-300 shadow-2xs space-y-2 hover:border-[#0f4c5c] transition-colors"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-xl font-black text-stone-950">
                  {clan.name}
                </h3>
                <span className="text-xs font-mono font-bold text-[#0f4c5c] bg-teal-50 px-2 py-0.5 rounded">Clan</span>
              </div>
              <p className="text-sm text-stone-950 leading-relaxed font-normal">
                {clan.roleDescription}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Land Ownership & Boundaries */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border-2 border-stone-300 space-y-4">
        <div className="flex items-center gap-2 text-stone-950">
          <Scale className="w-7 h-7 text-[#0f4c5c]" />
          <h3 className="font-serif text-2xl font-black text-stone-950">
            Land Rights & Generational Boundary Memory
          </h3>
        </div>
        <p className="text-base text-stone-950 leading-relaxed font-normal">
          Because the community has historically depended on floodplain farming along the River Tana, land has always represented both survival and ancestral heritage. Land was inherited from father to sons across generations, preserving family rights along specific agricultural riverbanks.
        </p>
        <p className="text-base text-stone-950 leading-relaxed font-normal">
          In the absence of written title deeds, the <strong className="text-stone-950 font-bold">memory of elders</strong> served as the community's living registry. Senior elders were expected to remember historical boundaries, natural markers (trees, gullies), previous owners, and inter-family agreements spanning several generations.
        </p>
      </section>
    </div>
  );
};
