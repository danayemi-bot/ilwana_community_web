import React from 'react';
import { PageId } from '../components/Navbar';
import { Users, Heart, MessageSquare, Shield, ArrowRight, Sparkles } from 'lucide-react';

interface SocialCulturePageProps {
  onNavigate: (page: PageId) => void;
}

export const SocialCulturePage: React.FC<SocialCulturePageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Header */}
      <div className="space-y-4 border-b border-stone-200 pb-8">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#0f4c5c]">
          <Users className="w-4 h-4" />
          <span>Section 05 · Kinship & Communal Life</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-stone-900">
          Social Structure, Family & Cultural Customs
        </h1>
        <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-3xl">
          The strength of the Ilwana Community lies in its closely knit social fabric, extended family support systems, communal labor (Mkao), and enduring milestones celebrating life along the River Tana.
        </p>
      </div>

      {/* Extended Family & Clan Backbone */}
      <section className="space-y-6">
        <h2 className="font-serif text-2xl font-bold text-stone-900">
          The Extended Family & Social Order
        </h2>
        <div className="prose max-w-none text-stone-700 leading-relaxed space-y-4 text-base">
          <p>
            At the heart of Ilwana society is the <strong>extended family</strong>. Grandparents, parents, children, aunts, uncles, and cousins form an interdependent collective network. Villages were historically built along the riverbanks in close proximity, fostering reciprocal cooperation during farming seasons, fishing, construction, and times of adversity.
          </p>
          <p>
            <strong>Respect for elders</strong> remains one of the most sacred values among the Wailwana. Elders are revered not simply for their seniority, but as custodians of oral history, traditional law, clan lineages, and moral direction.
          </p>
        </div>
      </section>

      {/* Gender Roles & Apprenticeship */}
      <section className="space-y-6">
        <div className="border-b border-stone-200 pb-3">
          <h2 className="font-serif text-2xl font-bold text-stone-900">
            Complementary Responsibilities & Upbringing
          </h2>
          <p className="text-sm text-stone-500">
            Traditional labor was organized cooperatively according to age, experience, and capability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-2xs space-y-2">
            <span className="text-xs font-mono font-semibold text-[#0f4c5c]">ROLE OF ELDERS</span>
            <h3 className="font-serif text-lg font-bold text-stone-900">Wisdom & Mediation</h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              Both male and female elders guide younger generations, resolve family disagreements through restorative dialogue, preserve customs, and foster social equilibrium.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-2xs space-y-2">
            <span className="text-xs font-mono font-semibold text-[#9a3412]">ROLE OF MEN</span>
            <h3 className="font-serif text-lg font-bold text-stone-900">Craft, River & Defense</h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              Men held primary responsibility for constructing homes, carving wooden river canoes (<em>Waato</em>), crafting traditional beehives (<em>Mwaato</em>), clearing farm plots, fishing, and protecting villages.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-2xs space-y-2">
            <span className="text-xs font-mono font-semibold text-teal-700">ROLE OF WOMEN</span>
            <h3 className="font-serif text-lg font-bold text-stone-900">Foundation of Hearth & Culture</h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              Women formed the domestic foundation: preparing meals, caring for children, weaving fiber baskets (<em>Kapu</em>) and mats, and transmitting cultural songs, customs, and the Kilwana language to children.
            </p>
          </div>
        </div>
      </section>

      {/* Traditional Communication Methods */}
      <section className="space-y-6">
        <div className="border-b border-stone-200 pb-3">
          <h2 className="font-serif text-2xl font-bold text-stone-900">
            Traditional Methods of Communication
          </h2>
          <p className="text-sm text-stone-500">
            Long before modern telecommunications, the Wailwana utilized ingenious acoustic and environmental communication systems:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-stone-50 p-6 rounded-xl border border-stone-200 space-y-3">
            <div className="w-9 h-9 rounded-md bg-stone-200 flex items-center justify-center text-stone-800">
              <Sparkles className="w-5 h-5 text-amber-700" />
            </div>
            <h3 className="font-serif text-lg font-bold text-stone-900">Ululations</h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              High-pitched, undulating vocal expressions produced primarily by women. Beyond expressing supreme happiness during weddings and childbirth, these distinct calls signaled neighbouring villages that a milestone celebration had begun.
            </p>
          </div>

          <div className="bg-stone-50 p-6 rounded-xl border border-stone-200 space-y-3">
            <div className="w-9 h-9 rounded-md bg-stone-200 flex items-center justify-center text-stone-800">
              <MessageSquare className="w-5 h-5 text-[#0f4c5c]" />
            </div>
            <h3 className="font-serif text-lg font-bold text-stone-900">The Town Crier</h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              A designated community messenger walked through villages loudly announcing vital public news, council assemblies, customary warnings, or collective decisions, ensuring all households remained informed.
            </p>
          </div>

          <div className="bg-stone-50 p-6 rounded-xl border border-stone-200 space-y-3">
            <div className="w-9 h-9 rounded-md bg-stone-200 flex items-center justify-center text-stone-800">
              <Heart className="w-5 h-5 text-[#9a3412]" />
            </div>
            <h3 className="font-serif text-lg font-bold text-stone-900">River Calling</h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              People standing on opposite banks of the River Tana called loudly across the water to exchange messages, check on kin, or coordinate crossings without having to make lengthy journeys across water.
            </p>
          </div>
        </div>
      </section>

      {/* Marriage Customs: A'LIMA */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-xs space-y-4">
        <h2 className="font-serif text-2xl font-bold text-stone-900">
          Marriage Customs: The Institution of A'LIMA
        </h2>
        <div className="prose max-w-none text-stone-700 leading-relaxed space-y-3 text-base">
          <p>
            Within Ilwana society, marriage is conceived not merely as a contract between two individuals, but as an enduring covenant uniting two extended families and their respective clans.
          </p>
          <div className="p-4 bg-stone-50 rounded-lg border-l-2 border-[#0f4c5c] space-y-1">
            <h4 className="font-semibold text-stone-900 text-sm">A'LIMA ("The Talk")</h4>
            <p className="text-xs text-stone-600">
              When a young man wishes to marry, his father (or in his absence, a paternal uncle) leads a formal delegation to the home of the young woman's parents. Even if the couple has already expressed mutual affection privately, customary protocol mandates that the bride's parents receive the proposal as though hearing it for the very first time.
            </p>
          </div>
          <p>
            This respectful etiquette provides both families the dignity and space to consult, discuss obligations, verify clan affinities, plan wedding logistics, and establish mutual trust.
          </p>
        </div>
      </section>

      {/* Sacred Birth Ceremonies & Ukaamwaale */}
      <section className="bg-teal-950 text-stone-200 p-6 sm:p-8 rounded-2xl border border-teal-900 space-y-4">
        <span className="text-xs font-mono uppercase tracking-widest text-teal-400">
          SACRED WOMEN'S TRADITION
        </span>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
          Childbirth Ceremonies & Ukaamwaale
        </h2>
        <div className="text-sm sm:text-base text-stone-300 leading-relaxed space-y-3">
          <p>
            The birth of a child is celebrated as a communal blessing. In traditional Ilwana practice, childbirth and its immediate celebratory rites are considered sacred responsibilities of women.
          </p>
          <p>
            Under the customary rite of <strong>Ukaamwaale</strong>, celebrations and gatherings surrounding childbirth take place inside the birth hut where only women participate. Men and young boys are strictly excluded from entering this sacred space, and food prepared especially for the occasion is reserved exclusively for the women in attendance.
          </p>
          <p className="text-xs text-stone-400 italic">
            Young boys were excluded because they were regarded as future men who would one day bear adult family responsibilities. Ukaamwaale created an intimate space where mothers and elder women passed generational wisdom, maternal care practices, and traditional songs to younger women.
          </p>
        </div>
      </section>
    </div>
  );
};
