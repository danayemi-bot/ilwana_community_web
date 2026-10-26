import React from 'react';
import { PageId } from '../components/Navbar';
import { Hammer, Utensils, Shirt, Flame, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';

interface MaterialCulturePageProps {
  onNavigate: (page: PageId) => void;
  onSelectGlossaryTerm?: (termId: string) => void;
}

export const MaterialCulturePage: React.FC<MaterialCulturePageProps> = ({
  onNavigate,
  onSelectGlossaryTerm,
}) => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Header */}
      <div className="space-y-4 border-b-2 border-stone-300 pb-8">
        <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#9a3412]">
          <Hammer className="w-4 h-4" />
          <span>Section 09 · Material Heritage & Indigenous Technology</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-black tracking-tight text-stone-950">
          Traditional Clothing, Food, Tools & Beekeeping
        </h1>
        <p className="text-base sm:text-xl text-stone-950 leading-relaxed max-w-3xl font-normal">
          Material culture embodies the practical ingenuity of the Wailwana. From woodworking and fiber weaving to alluvial gastronomy and sophisticated beekeeping, traditional objects preserve both technology and Kilwana vocabulary.
        </p>
      </div>

      {/* Traditional Clothing & Attire */}
      <section className="space-y-6">
        <div className="border-b-2 border-stone-300 pb-3">
          <div className="flex items-center gap-2 text-[#9a3412]">
            <Shirt className="w-6 h-6" />
            <h2 className="font-serif text-2xl sm:text-3xl font-black text-stone-950">
              Traditional Clothing & Dress
            </h2>
          </div>
          <p className="text-base text-stone-950 font-medium mt-0.5">
            Distinctive garments reflecting modesty, social identity, and regional coastal trade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl border-2 border-stone-300 shadow-2xs space-y-3 hover:border-[#0f4c5c] transition-colors">
            <span className="text-xs sm:text-sm font-mono font-bold text-[#0f4c5c] bg-teal-50 px-2 py-0.5 rounded">WOMEN'S TRADITIONAL ATTIRE</span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-950">Haagoodo, Wiili & Gapsara</h3>
            <p className="text-base text-stone-950 leading-relaxed font-normal">
              <strong className="text-stone-950 font-extrabold">Haagoodo:</strong> A traditional garment worn by Ilwana women to cover the head, signifying modesty, cultural dignity, and identity.
            </p>
            <p className="text-base text-stone-950 leading-relaxed font-normal">
              <strong className="text-stone-950 font-extrabold">Wiili & Gapsara:</strong> Traditional fabrics and garments worn across generations, adopted and adapted through regional trade with neighbouring coastal peoples.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border-2 border-stone-300 shadow-2xs space-y-3 hover:border-[#9a3412] transition-colors">
            <span className="text-xs sm:text-sm font-mono font-bold text-[#9a3412] bg-amber-50 px-2 py-0.5 rounded">MEN'S TRADITIONAL ATTIRE</span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-950">Banaadiri, Kikoi & Shati</h3>
            <p className="text-base text-stone-950 leading-relaxed font-normal">
              <strong className="text-stone-950 font-extrabold">Banaadiri:</strong> The distinctive traditional garment historically worn by Wailwana men prior to contemporary fashion changes.
            </p>
            <p className="text-base text-stone-950 leading-relaxed font-normal">
              <strong className="text-stone-950 font-extrabold">Kikoi & Shati:</strong> Woven waist-wraps and shirts adopted through trade routes along the East African coast, reflecting cultural exchange without sacrificing Ilwana identity.
            </p>
          </div>
        </div>
      </section>

      {/* Traditional Gastronomy & Cuisine */}
      <section className="space-y-6">
        <div className="border-b-2 border-stone-300 pb-3">
          <div className="flex items-center gap-2 text-[#0f4c5c]">
            <Utensils className="w-6 h-6" />
            <h2 className="font-serif text-2xl sm:text-3xl font-black text-stone-950">
              Cuisine & Food Traditions
            </h2>
          </div>
          <p className="text-base text-stone-950 font-medium mt-0.5">
            Nutritious riverine dishes combining floodplain agriculture, banana orchards, and river fish.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="bg-white p-5 rounded-xl border-2 border-stone-300 shadow-2xs space-y-2 hover:border-[#0f4c5c] transition-colors">
            <div className="flex items-center justify-between">
              <h3 className="font-serif text-xl font-black text-stone-950">Buyuyu</h3>
              <span className="text-xs font-mono font-bold text-[#0f4c5c] bg-teal-50 px-2 py-0.5 rounded">Pumpkin</span>
            </div>
            <p className="text-sm sm:text-base text-stone-950 leading-relaxed font-normal">
              Cooked slowly on its own with salt or sugar, or combined with boiled maize to create <strong className="text-stone-950 font-bold">Haradya Buyuyu</strong> using the Lupekecho mixing implement.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border-2 border-stone-300 shadow-2xs space-y-2 hover:border-[#0f4c5c] transition-colors">
            <div className="flex items-center justify-between">
              <h3 className="font-serif text-xl font-black text-stone-950">Makaaruka</h3>
              <span className="text-xs font-mono font-bold text-[#0f4c5c] bg-teal-50 px-2 py-0.5 rounded">Watermelon</span>
            </div>
            <p className="text-sm sm:text-base text-stone-950 leading-relaxed font-normal">
              Eaten fresh or slow-cooked in the distinctive traditional dish <strong className="text-stone-950 font-bold">Haradya Makaaruka</strong>, blending natural sweetness into cooked maize.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border-2 border-stone-300 shadow-2xs space-y-2 hover:border-[#0f4c5c] transition-colors">
            <div className="flex items-center justify-between">
              <h3 className="font-serif text-xl font-black text-stone-950">Konole</h3>
              <span className="text-xs font-mono font-bold text-[#0f4c5c] bg-teal-50 px-2 py-0.5 rounded">Maize & Legumes</span>
            </div>
            <p className="text-sm sm:text-base text-stone-950 leading-relaxed font-normal">
              Hearty staple prepared by boiling maize together with beans, cowpeas, or green grams, thoroughly mashed and stirred with the traditional wooden <strong className="text-stone-950 font-bold">Mwiko</strong>.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border-2 border-stone-300 shadow-2xs space-y-2 hover:border-[#0f4c5c] transition-colors">
            <div className="flex items-center justify-between">
              <h3 className="font-serif text-xl font-black text-stone-950">Kumbu</h3>
              <span className="text-xs font-mono font-bold text-[#0f4c5c] bg-teal-50 px-2 py-0.5 rounded">Whole Bananas</span>
            </div>
            <p className="text-sm sm:text-base text-stone-950 leading-relaxed font-normal">
              Unripe bananas peeled and cooked whole in savory broth, preserving the natural firm texture of the fruit.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border-2 border-stone-300 shadow-2xs space-y-2 hover:border-[#0f4c5c] transition-colors">
            <div className="flex items-center justify-between">
              <h3 className="font-serif text-xl font-black text-stone-950">Matole</h3>
              <span className="text-xs font-mono font-bold text-[#0f4c5c] bg-teal-50 px-2 py-0.5 rounded">Sliced Bananas</span>
            </div>
            <p className="text-sm sm:text-base text-stone-950 leading-relaxed font-normal">
              Unripe bananas peeled and cut into small pieces before cooking; often prepared together with river fish in <strong className="text-stone-950 font-bold">Matolya Sehe</strong>.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border-2 border-stone-300 shadow-2xs space-y-2 hover:border-[#0f4c5c] transition-colors">
            <div className="flex items-center justify-between">
              <h3 className="font-serif text-xl font-black text-stone-950">Biriidha & Fruits</h3>
              <span className="text-xs font-mono font-bold text-[#0f4c5c] bg-teal-50 px-2 py-0.5 rounded">Rice & Juices</span>
            </div>
            <p className="text-sm sm:text-base text-stone-950 leading-relaxed font-normal">
              Floodplain rice (<em className="text-stone-950 font-semibold">Biriidha</em>) cooked with pumpkin, and fresh mango or wild fruit beverages crushed manually using the Lupekecho.
            </p>
          </div>
        </div>
      </section>

      {/* Indigenous Beekeeping & Honey Technology */}
      <section className="bg-amber-50/70 p-6 sm:p-8 rounded-2xl border-2 border-amber-300 space-y-6">
        <div className="flex items-center gap-3 text-amber-900">
          <Flame className="w-7 h-7" />
          <div>
            <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-amber-800 font-bold">
              INDIGENOUS ECOLOGICAL SCIENCE
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-black text-amber-950">
              Traditional Beekeeping & Honey Harvesting
            </h2>
          </div>
        </div>

        <p className="text-base text-stone-950 leading-relaxed font-normal">
          Beekeeping is one of the most sophisticated traditional economic activities of the Wailwana, integrating botanical knowledge, woodworking, and bee management:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-white p-5 rounded-xl border-2 border-amber-300 space-y-2">
            <span className="font-serif font-black text-stone-950 text-base sm:text-lg">Mwaato (The Hive)</span>
            <p className="text-sm text-stone-950 leading-relaxed font-normal">
              Cylindrical beehive constructed from hollowed logs or rolled bark, hung high in riverine branches to protect colonies.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border-2 border-amber-300 space-y-2">
            <span className="font-serif font-black text-stone-950 text-base sm:text-lg">Nooma (The Attractant)</span>
            <p className="text-sm text-stone-950 leading-relaxed font-normal">
              A natural aromatic tree substance applied inside the empty hive to draw passing wild bee swarms to establish a colony.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border-2 border-amber-300 space-y-2">
            <span className="font-serif font-black text-stone-950 text-base sm:text-lg">Kimmule (Smoking Bundle)</span>
            <p className="text-sm text-stone-950 leading-relaxed font-normal">
              A bundle of cords/strings lit at one end to produce cool smoke, calming bees during night harvesting.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border-2 border-amber-300 space-y-2">
            <span className="font-serif font-black text-stone-950 text-base sm:text-lg">Begele & Begelimo</span>
            <p className="text-sm text-stone-950 leading-relaxed font-normal">
              Specially carved wooden discs that securely seal the ends of the hive. <em className="font-semibold">Begele</em> is singular; <em className="font-semibold">Begelimo</em> is plural.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border-2 border-amber-300 space-y-2">
            <span className="font-serif font-black text-stone-950 text-base sm:text-lg">Night Harvesting</span>
            <p className="text-sm text-stone-950 leading-relaxed font-normal">
              Carried out at night when bees are calmer. Beekeepers deliberately leave portions of honey behind so the colony survives and regenerates.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border-2 border-amber-300 space-y-2">
            <span className="font-serif font-black text-stone-950 text-base sm:text-lg">Oki (Honey)</span>
            <p className="text-sm text-stone-950 leading-relaxed font-normal">
              Treasured for its rich herbal flavor, natural sweetness, nutritional richness, and value in customary gift-giving.
            </p>
          </div>
        </div>

        <div className="p-4 bg-amber-100/90 rounded-xl text-sm text-amber-950 border-2 border-amber-300 font-medium">
          <strong className="font-black">Cultural Heritage Note:</strong> Traditional honey harvesting is presented as valuable indigenous heritage. Honey harvesting in elevated forest trees requires expertise, smoke control, and modern safety gear.
        </div>
      </section>

      {/* Traditional Tools & River Implements */}
      <section className="space-y-6">
        <div className="border-b-2 border-stone-300 pb-3">
          <h2 className="font-serif text-2xl sm:text-3xl font-black text-stone-950">
            Traditional Implements & Household Technology
          </h2>
          <p className="text-base text-stone-950 font-medium mt-0.5">
            Documented implements used in agriculture, food preparation, navigation, and security.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white p-5 rounded-xl border-2 border-stone-300 space-y-2 hover:border-[#0f4c5c] transition-colors">
            <span className="font-serif font-black text-stone-950 text-lg">Locholo</span>
            <p className="text-sm text-stone-950 leading-relaxed font-normal">
              Woven winnowing tray used to toss harvested grain into the breeze, separating unwanted chaff and husks from edible grain.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border-2 border-stone-300 space-y-2 hover:border-[#0f4c5c] transition-colors">
            <span className="font-serif font-black text-stone-950 text-lg">Waato</span>
            <p className="text-sm text-stone-950 leading-relaxed font-normal">
              Hand-carved dugout river canoe indispensable for crossing the River Tana, setting fishing nets, and evacuating during floods.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border-2 border-stone-300 space-y-2 hover:border-[#0f4c5c] transition-colors">
            <span className="font-serif font-black text-stone-950 text-lg">Lupekecho</span>
            <p className="text-sm text-stone-950 leading-relaxed font-normal">
              Wooden twirled implement used for stirring porridge, mixing fruit beverages, and blending pumpkin into Haradya Buyuyu.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border-2 border-stone-300 space-y-2 hover:border-[#0f4c5c] transition-colors">
            <span className="font-serif font-black text-stone-950 text-lg">Mwiko</span>
            <p className="text-sm text-stone-950 leading-relaxed font-normal">
              Stout wooden cooking paddle used for stirring heavy foods such as Konole during prolonged boiling over firewood.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border-2 border-stone-300 space-y-2 hover:border-[#0f4c5c] transition-colors">
            <span className="font-serif font-black text-stone-950 text-lg">Kapu</span>
            <p className="text-sm text-stone-950 leading-relaxed font-normal">
              Woven utility basket crafted from durable riverine tree fibers for carrying farm produce and domestic storage.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border-2 border-stone-300 space-y-2 hover:border-[#0f4c5c] transition-colors">
            <span className="font-serif font-black text-stone-950 text-lg">Mokoobi</span>
            <p className="text-sm text-stone-950 leading-relaxed font-normal">
              Short, broad paddle carved from hardwood used to propel and steer the Waato in deep river currents.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border-2 border-stone-300 space-y-2 hover:border-[#0f4c5c] transition-colors">
            <span className="font-serif font-black text-stone-950 text-lg">Boodo</span>
            <p className="text-sm text-stone-950 leading-relaxed font-normal">
              A 5- to 8-meter long pole pushed against the riverbed to navigate the canoe through shallow sandbanks.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border-2 border-stone-300 space-y-2 hover:border-[#0f4c5c] transition-colors">
            <span className="font-serif font-black text-stone-950 text-lg">Uta & Tiyya</span>
            <p className="text-sm text-stone-950 leading-relaxed font-normal">
              Traditional bow (<em className="text-stone-950 font-semibold">Uta</em>) and arrow (<em className="text-stone-950 font-semibold">Tiyya</em>) system historically used in hunting and village protection.
            </p>
          </div>

          <div className="bg-[#fdfbf7] p-5 rounded-xl border-2 border-stone-300 space-y-2">
            <span className="font-serif font-black text-stone-950 text-lg">Luguba, Goona & Bakooya</span>
            <p className="text-sm text-stone-950 leading-relaxed font-normal italic">
              Implements documented in oral accounts for security/hunting; specific forms flagged for future elder verification.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
