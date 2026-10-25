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
      <div className="space-y-4 border-b border-stone-200 pb-8">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#0f4c5c]">
          <Shield className="w-4 h-4" />
          <span>Section 07 · Political & Customary Institutions</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-stone-900">
          Traditional Governance, the Hayu & the Gasa
        </h1>
        <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-3xl">
          Long predating modern administrative systems, the Ilwana Community instituted an enduring governance model centered on consultative consensus, moral integrity, restorative justice, and clan representation.
        </p>
      </div>

      {/* The Institution of the Hayu */}
      <section className="bg-white p-6 sm:p-10 rounded-2xl border border-stone-200 shadow-xs space-y-6">
        <div className="flex items-center gap-3 text-[#9a3412]">
          <Crown className="w-7 h-7" />
          <div>
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-stone-400">
              TRADITIONAL MONARCH & CULTURAL LEADER
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
              The Hayu (Traditional King)
            </h2>
          </div>
        </div>

        <div className="prose max-w-none text-stone-700 leading-relaxed space-y-4 text-base">
          <p>
            The <strong>Hayu</strong> is the traditional king and supreme cultural leader of the Ilwana Community. The institution represents the continuity, unity, and dignity of the Wailwana.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 text-xs space-y-1.5">
              <span className="font-semibold text-stone-900">Leadership by Character</span>
              <p className="text-stone-600">
                Formal academic qualifications are not traditionally required. The office demands high moral integrity, sound judgment, patience, and the ability to listen impartially to all sides.
              </p>
            </div>
            <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 text-xs space-y-1.5">
              <span className="font-semibold text-stone-900">Diplomatic Representation</span>
              <p className="text-stone-600">
                The Hayu acts as the paramount representative of the Wailwana when engaging neighbouring communities, cultural delegations, and government authorities.
              </p>
            </div>
          </div>
          <p className="text-sm text-stone-600">
            Every year in <strong>December</strong>, the community organizes the annual <em>Hayu Celebrations</em>, featuring dedicated traditional praise songs honoring his stewardship and reaffirming communal identity.
          </p>
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
        <div className="border-b border-stone-200 pb-3">
          <h2 className="font-serif text-2xl font-bold text-stone-900">
            The Gasa: Supreme Consultative Council
          </h2>
          <p className="text-sm text-stone-500">
            The highest traditional forum for resolving major disputes and determining policy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-2xs space-y-2">
            <span className="text-xs font-mono font-semibold text-[#0f4c5c]">COMPOSITION</span>
            <h3 className="font-serif text-lg font-bold text-stone-900">Collaborative Assembly</h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              Chaired by the Hayu and supported by an elected chairperson, the Gasa convenes senior elders, Islamic scholars (Sheikhs), and clan representatives. Disputes are heard with procedural thoroughness, examining historical precedent preserved in collective memory.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-2xs space-y-2">
            <span className="text-xs font-mono font-semibold text-[#9a3412]">OBJECTIVE</span>
            <h3 className="font-serif text-lg font-bold text-stone-900">Restorative Justice</h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              The purpose of the Gasa is restorative rather than punitive. The goal is to repair relationships, establish fair compensation, remove bitterness, and restore social harmony among families and villages.
            </p>
          </div>
        </div>
      </section>

      {/* The 8 Traditional Clans */}
      <section className="space-y-6">
        <div className="border-b border-stone-200 pb-3">
          <h2 className="font-serif text-2xl font-bold text-stone-900">
            The Eight Traditional Clans of the Ilwana
          </h2>
          <p className="text-sm text-stone-500">
            Clans provide the social framework through which Wailwana identify lineage, regulate marriage, and mobilize mutual support.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CLANS_DATA.map((clan, idx) => (
            <div
              key={idx}
              className="bg-white p-5 rounded-xl border border-stone-200 shadow-2xs space-y-2"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-xl font-bold text-stone-900">
                  {clan.name}
                </h3>
                <span className="text-[11px] font-mono text-stone-400">Clan</span>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                {clan.roleDescription}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Land Ownership & Boundaries */}
      <section className="bg-stone-50 p-6 sm:p-8 rounded-2xl border border-stone-200 space-y-4">
        <div className="flex items-center gap-2 text-stone-900">
          <Scale className="w-6 h-6 text-[#0f4c5c]" />
          <h3 className="font-serif text-xl font-bold">
            Land Rights & Generational Boundary Memory
          </h3>
        </div>
        <p className="text-sm text-stone-700 leading-relaxed">
          Because the community has historically depended on floodplain farming along the River Tana, land has always represented both survival and ancestral heritage. Land was inherited from father to sons across generations, preserving family rights along specific agricultural riverbanks.
        </p>
        <p className="text-sm text-stone-700 leading-relaxed">
          In the absence of written title deeds, the <strong>memory of elders</strong> served as the community's living registry. Senior elders were expected to remember historical boundaries, natural markers (trees, gullies), previous owners, and inter-family agreements spanning several generations.
        </p>
      </section>
    </div>
  );
};
