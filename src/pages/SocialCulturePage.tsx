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
      <div className="space-y-4 border-b-2 border-stone-300 pb-8">
        <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#0f4c5c]">
          <Users className="w-4 h-4" />
          <span>Section 05 · Kinship & Communal Life</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-black tracking-tight text-stone-950">
          Social Structure, Family & Cultural Customs
        </h1>
        <p className="text-base sm:text-xl text-stone-950 leading-relaxed max-w-3xl font-normal">
          The strength of the Ilwana Community lies in its closely knit social fabric, extended family support systems, communal labor (Mkao), and enduring milestones celebrating life along the River Tana.
        </p>
      </div>

      {/* Extended Family & Clan Backbone */}
      <section className="space-y-6">
        <h2 className="font-serif text-2xl sm:text-3xl font-black text-stone-950">
          The Extended Family & Social Order
        </h2>
        <div className="prose max-w-none text-stone-950 leading-relaxed space-y-4 text-base sm:text-lg font-normal">
          <p>
            At the heart of Ilwana society is the <strong className="text-stone-950 font-extrabold">extended family</strong>. Grandparents, parents, children, aunts, uncles, and cousins form an interdependent collective network. Villages were historically built along the riverbanks in close proximity, fostering reciprocal cooperation during farming seasons, fishing, construction, and times of adversity.
          </p>
          <p>
            <strong className="text-stone-950 font-extrabold">Respect for elders</strong> remains one of the most sacred values among the Wailwana. Elders are revered not simply for their seniority, but as custodians of oral history, traditional law, clan lineages, and moral direction.
          </p>
        </div>
      </section>

      {/* Gender Roles & Apprenticeship */}
      <section className="space-y-6">
        <div className="border-b-2 border-stone-300 pb-3">
          <h2 className="font-serif text-2xl sm:text-3xl font-black text-stone-950">
            Complementary Responsibilities & Upbringing
          </h2>
          <p className="text-base text-stone-950 font-medium">
            Traditional labor was organized cooperatively according to age, experience, and capability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border-2 border-stone-300 shadow-2xs space-y-2 hover:border-[#0f4c5c] transition-colors">
            <span className="text-xs sm:text-sm font-mono font-bold text-[#0f4c5c] bg-teal-50 px-2 py-0.5 rounded">ROLE OF ELDERS</span>
            <h3 className="font-serif text-xl font-bold text-stone-950">Wisdom & Mediation</h3>
            <p className="text-base text-stone-950 leading-relaxed font-normal">
              Both male and female elders guide younger generations, resolve family disagreements through restorative dialogue, preserve customs, and foster social equilibrium.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border-2 border-stone-300 shadow-2xs space-y-2 hover:border-[#9a3412] transition-colors">
            <span className="text-xs sm:text-sm font-mono font-bold text-[#9a3412] bg-amber-50 px-2 py-0.5 rounded">ROLE OF MEN</span>
            <h3 className="font-serif text-xl font-bold text-stone-950">Craft, River & Defense</h3>
            <p className="text-base text-stone-950 leading-relaxed font-normal">
              Men held primary responsibility for constructing homes, carving wooden river canoes (<em className="text-stone-950 font-semibold">Waato</em>), crafting traditional beehives (<em className="text-stone-950 font-semibold">Mwaato</em>), clearing farm plots, fishing, and protecting villages.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border-2 border-stone-300 shadow-2xs space-y-2 hover:border-teal-700 transition-colors">
            <span className="text-xs sm:text-sm font-mono font-bold text-teal-800 bg-teal-50 px-2 py-0.5 rounded">ROLE OF WOMEN</span>
            <h3 className="font-serif text-xl font-bold text-stone-950">Foundation of Hearth & Culture</h3>
            <p className="text-base text-stone-950 leading-relaxed font-normal">
              Women formed the domestic foundation: preparing meals, caring for children, weaving fiber baskets (<em className="text-stone-950 font-semibold">Kapu</em>) and mats, and transmitting cultural songs, customs, and the Kilwana language to children.
            </p>
          </div>
        </div>
      </section>

      {/* Traditional Communication Methods */}
      <section className="space-y-6">
        <div className="border-b-2 border-stone-300 pb-3">
          <h2 className="font-serif text-2xl sm:text-3xl font-black text-stone-950">
            Traditional Methods of Communication
          </h2>
          <p className="text-base text-stone-950 font-medium">
            Long before modern telecommunications, the Wailwana utilized ingenious acoustic and environmental communication systems:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border-2 border-stone-300 space-y-3 hover:border-amber-700 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center text-amber-900">
              <Sparkles className="w-5 h-5 text-amber-800" />
            </div>
            <h3 className="font-serif text-xl font-bold text-stone-950">Ululations</h3>
            <p className="text-base text-stone-950 leading-relaxed font-normal">
              High-pitched, undulating vocal expressions produced primarily by women. Beyond expressing supreme happiness during weddings and childbirth, these distinct calls signaled neighbouring villages that a milestone celebration had begun.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border-2 border-stone-300 space-y-3 hover:border-[#0f4c5c] transition-colors">
            <div className="w-10 h-10 rounded-lg bg-teal-100 flex items-center justify-center text-[#0f4c5c]">
              <MessageSquare className="w-5 h-5 text-[#0f4c5c]" />
            </div>
            <h3 className="font-serif text-xl font-bold text-stone-950">The Town Crier</h3>
            <p className="text-base text-stone-950 leading-relaxed font-normal">
              A designated community messenger walked through villages loudly announcing vital public news, council assemblies, customary warnings, or collective decisions, ensuring all households remained informed.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border-2 border-stone-300 space-y-3 hover:border-[#9a3412] transition-colors">
            <div className="w-10 h-10 rounded-lg bg-rose-100 flex items-center justify-center text-[#9a3412]">
              <Heart className="w-5 h-5 text-[#9a3412]" />
            </div>
            <h3 className="font-serif text-xl font-bold text-stone-950">River Calling</h3>
            <p className="text-base text-stone-950 leading-relaxed font-normal">
              People standing on opposite banks of the River Tana called loudly across the water to exchange messages, check on kin, or coordinate crossings without having to make lengthy journeys across water.
            </p>
          </div>
        </div>
      </section>

      {/* Marriage Customs: A'LIMA */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border-2 border-stone-300 shadow-xs space-y-4">
        <h2 className="font-serif text-2xl sm:text-3xl font-black text-stone-950">
          Marriage Customs: The Institution of A'LIMA
        </h2>
        <div className="prose max-w-none text-stone-950 leading-relaxed space-y-4 text-base sm:text-lg font-normal">
          <p>
            Within Ilwana society, marriage is conceived not merely as a contract between two individuals, but as an enduring covenant uniting two extended families and their respective clans.
          </p>
          <div className="p-5 bg-[#fdfbf7] rounded-xl border-2 border-stone-300 border-l-4 border-l-[#0f4c5c] space-y-2">
            <h4 className="font-serif font-black text-stone-950 text-lg">A'LIMA ("The Talk")</h4>
            <p className="text-base text-stone-950 leading-relaxed font-normal">
              When a young man wishes to marry, his father (or in his absence, a paternal uncle) leads a formal delegation to the home of the young woman's parents. Even if the couple has already expressed mutual affection privately, customary protocol mandates that the bride's parents receive the proposal as though hearing it for the very first time.
            </p>
          </div>
          <p>
            This respectful etiquette provides both families the dignity and space to consult, discuss obligations, verify clan affinities, plan wedding logistics, and establish mutual trust.
          </p>
        </div>
      </section>

      {/* Sacred Birth Ceremonies & Ukaamwaale */}
      <section className="bg-teal-950 text-white p-6 sm:p-8 rounded-2xl border-2 border-teal-800 space-y-4 shadow-md">
        <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-amber-300 font-bold">
          SACRED WOMEN'S TRADITION
        </span>
        <h2 className="font-serif text-2xl sm:text-4xl font-black text-white">
          Childbirth Ceremonies & Ukaamwaale
        </h2>
        <div className="text-base sm:text-lg text-stone-100 leading-relaxed space-y-4 font-normal">
          <p>
            The birth of a child is celebrated as a communal blessing. In traditional Ilwana practice, childbirth and its immediate celebratory rites are considered sacred responsibilities of women.
          </p>
          <p>
            Under the customary rite of <strong className="text-amber-300 font-bold">Ukaamwaale</strong>, celebrations and gatherings surrounding childbirth take place inside the birth hut where only women participate. Men and young boys are strictly excluded from entering this sacred space, and food prepared especially for the occasion is reserved exclusively for the women in attendance.
          </p>
          <p className="text-sm sm:text-base text-teal-100 font-medium bg-teal-900/60 p-4 rounded-xl border border-teal-700/60">
            Young boys were excluded because they were regarded as future men who would one day bear adult family responsibilities. Ukaamwaale created an intimate space where mothers and elder women passed generational wisdom, maternal care practices, and traditional songs to younger women.
          </p>
        </div>
      </section>
    </div>
  );
};
