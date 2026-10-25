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
      <div className="space-y-4 border-b border-stone-200 pb-8">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#9a3412]">
          <Hammer className="w-4 h-4" />
          <span>Section 09 · Material Heritage & Indigenous Technology</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-stone-900">
          Traditional Clothing, Food, Tools & Beekeeping
        </h1>
        <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-3xl">
          Material culture embodies the practical ingenuity of the Wailwana. From woodworking and fiber weaving to alluvial gastronomy and sophisticated beekeeping, traditional objects preserve both technology and Kilwana vocabulary.
        </p>
      </div>

      {/* Traditional Clothing & Attire */}
      <section className="space-y-6">
        <div className="border-b border-stone-200 pb-3">
          <div className="flex items-center gap-2 text-[#9a3412]">
            <Shirt className="w-5 h-5" />
            <h2 className="font-serif text-2xl font-bold text-stone-900">
              Traditional Clothing & Dress
            </h2>
          </div>
          <p className="text-sm text-stone-500 mt-0.5">
            Distinctive garments reflecting modesty, social identity, and regional coastal trade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-2xs space-y-3">
            <span className="text-xs font-mono font-semibold text-[#0f4c5c]">WOMEN'S TRADITIONAL ATTIRE</span>
            <h3 className="font-serif text-xl font-bold text-stone-900">Haagoodo, Wiili & Gapsara</h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              <strong>Haagoodo:</strong> A traditional garment worn by Ilwana women to cover the head, signifying modesty, cultural dignity, and identity.
            </p>
            <p className="text-sm text-stone-600 leading-relaxed">
              <strong>Wiili & Gapsara:</strong> Traditional fabrics and garments worn across generations, adopted and adapted through regional trade with neighbouring coastal peoples.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-2xs space-y-3">
            <span className="text-xs font-mono font-semibold text-[#9a3412]">MEN'S TRADITIONAL ATTIRE</span>
            <h3 className="font-serif text-xl font-bold text-stone-900">Banaadiri, Kikoi & Shati</h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              <strong>Banaadiri:</strong> The distinctive traditional garment historically worn by Wailwana men prior to contemporary fashion changes.
            </p>
            <p className="text-sm text-stone-600 leading-relaxed">
              <strong>Kikoi & Shati:</strong> Woven waist-wraps and shirts adopted through trade routes along the East African coast, reflecting cultural exchange without sacrificing Ilwana identity.
            </p>
          </div>
        </div>
      </section>

      {/* Traditional Gastronomy & Cuisine */}
      <section className="space-y-6">
        <div className="border-b border-stone-200 pb-3">
          <div className="flex items-center gap-2 text-[#0f4c5c]">
            <Utensils className="w-5 h-5" />
            <h2 className="font-serif text-2xl font-bold text-stone-900">
              Cuisine & Food Traditions
            </h2>
          </div>
          <p className="text-sm text-stone-500 mt-0.5">
            Nutritious riverine dishes combining floodplain agriculture, banana orchards, and river fish.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-2xs space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-serif text-lg font-bold text-stone-900">Buyuyu</h3>
              <span className="text-xs font-mono text-stone-400">Pumpkin</span>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              Cooked slowly on its own with salt or sugar, or combined with boiled maize to create <strong>Haradya Buyuyu</strong> using the Lupekecho mixing implement.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-2xs space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-serif text-lg font-bold text-stone-900">Makaaruka</h3>
              <span className="text-xs font-mono text-stone-400">Watermelon</span>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              Eaten fresh or slow-cooked in the distinctive traditional dish <strong>Haradya Makaaruka</strong>, blending natural sweetness into cooked maize.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-2xs space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-serif text-lg font-bold text-stone-900">Konole</h3>
              <span className="text-xs font-mono text-stone-400">Maize & Legumes</span>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              Hearty staple prepared by boiling maize together with beans, cowpeas, or green grams, thoroughly mashed and stirred with the traditional wooden <strong>Mwiko</strong>.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-2xs space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-serif text-lg font-bold text-stone-900">Kumbu</h3>
              <span className="text-xs font-mono text-stone-400">Whole Bananas</span>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              Unripe bananas peeled and cooked whole in savory broth, preserving the natural firm texture of the fruit.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-2xs space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-serif text-lg font-bold text-stone-900">Matole</h3>
              <span className="text-xs font-mono text-stone-400">Sliced Bananas</span>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              Unripe bananas peeled and cut into small pieces before cooking; often prepared together with river fish in <strong>Matolya Sehe</strong>.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-2xs space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-serif text-lg font-bold text-stone-900">Biriidha & Fruits</h3>
              <span className="text-xs font-mono text-stone-400">Rice & Juices</span>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              Floodplain rice (<em>Biriidha</em>) cooked with pumpkin, and fresh mango or wild fruit beverages crushed manually using the Lupekecho.
            </p>
          </div>
        </div>
      </section>

      {/* Indigenous Beekeeping & Honey Technology */}
      <section className="bg-amber-50/70 p-6 sm:p-8 rounded-2xl border border-amber-200 space-y-6">
        <div className="flex items-center gap-3 text-amber-900">
          <Flame className="w-6 h-6" />
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-amber-700">
              INDIGENOUS ECOLOGICAL SCIENCE
            </span>
            <h2 className="font-serif text-2xl font-bold text-amber-950">
              Traditional Beekeeping & Honey Harvesting
            </h2>
          </div>
        </div>

        <p className="text-sm text-stone-700 leading-relaxed">
          Beekeeping is one of the most sophisticated traditional economic activities of the Wailwana, integrating botanical knowledge, woodworking, and bee management:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-xl border border-amber-200 space-y-1">
            <span className="font-serif font-bold text-stone-900 text-sm">Mwaato (The Hive)</span>
            <p className="text-xs text-stone-600">
              Cylindrical beehive constructed from hollowed logs or rolled bark, hung high in riverine branches to protect colonies.
            </p>
          </div>

          <div className="bg-white p-4 rounded-xl border border-amber-200 space-y-1">
            <span className="font-serif font-bold text-stone-900 text-sm">Nooma (The Attractant)</span>
            <p className="text-xs text-stone-600">
              A natural aromatic tree substance applied inside the empty hive to draw passing wild bee swarms to establish a colony.
            </p>
          </div>

          <div className="bg-white p-4 rounded-xl border border-amber-200 space-y-1">
            <span className="font-serif font-bold text-stone-900 text-sm">Kimmule (Smoking Bundle)</span>
            <p className="text-xs text-stone-600">
              A bundle of cords/strings lit at one end to produce cool smoke, calming bees during night harvesting.
            </p>
          </div>

          <div className="bg-white p-4 rounded-xl border border-amber-200 space-y-1">
            <span className="font-serif font-bold text-stone-900 text-sm">Begele & Begelimo</span>
            <p className="text-xs text-stone-600">
              Specially carved wooden discs that securely seal the ends of the hive. <em>Begele</em> is singular; <em>Begelimo</em> is plural.
            </p>
          </div>

          <div className="bg-white p-4 rounded-xl border border-amber-200 space-y-1">
            <span className="font-serif font-bold text-stone-900 text-sm">Night Harvesting</span>
            <p className="text-xs text-stone-600">
              Carried out at night when bees are calmer. Beekeepers deliberately leave portions of honey behind so the colony survives and regenerates.
            </p>
          </div>

          <div className="bg-white p-4 rounded-xl border border-amber-200 space-y-1">
            <span className="font-serif font-bold text-stone-900 text-sm">Oki (Honey)</span>
            <p className="text-xs text-stone-600">
              Treasured for its rich herbal flavor, natural sweetness, nutritional richness, and value in customary gift-giving.
            </p>
          </div>
        </div>

        <div className="p-3 bg-amber-100/70 rounded-lg text-xs text-amber-900 border border-amber-300">
          <strong>Cultural Heritage Note:</strong> Traditional honey harvesting is presented as valuable indigenous heritage. Honey harvesting in elevated forest trees requires expertise, smoke control, and modern safety gear.
        </div>
      </section>

      {/* Traditional Tools & River Implements */}
      <section className="space-y-6">
        <div className="border-b border-stone-200 pb-3">
          <h2 className="font-serif text-2xl font-bold text-stone-900">
            Traditional Implements & Household Technology
          </h2>
          <p className="text-sm text-stone-500">
            Documented implements used in agriculture, food preparation, navigation, and security.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-xl border border-stone-200 space-y-1">
            <span className="font-serif font-bold text-stone-900 text-base">Locholo</span>
            <p className="text-xs text-stone-600">
              Woven winnowing tray used to toss harvested grain into the breeze, separating unwanted chaff and husks from edible grain.
            </p>
          </div>

          <div className="bg-white p-4 rounded-xl border border-stone-200 space-y-1">
            <span className="font-serif font-bold text-stone-900 text-base">Waato</span>
            <p className="text-xs text-stone-600">
              Hand-carved dugout river canoe indispensable for crossing the River Tana, setting fishing nets, and evacuating during floods.
            </p>
          </div>

          <div className="bg-white p-4 rounded-xl border border-stone-200 space-y-1">
            <span className="font-serif font-bold text-stone-900 text-base">Lupekecho</span>
            <p className="text-xs text-stone-600">
              Wooden twirled implement used for stirring porridge, mixing fruit beverages, and blending pumpkin into Haradya Buyuyu.
            </p>
          </div>

          <div className="bg-white p-4 rounded-xl border border-stone-200 space-y-1">
            <span className="font-serif font-bold text-stone-900 text-base">Mwiko</span>
            <p className="text-xs text-stone-600">
              Stout wooden cooking paddle used for stirring heavy foods such as Konole during prolonged boiling over firewood.
            </p>
          </div>

          <div className="bg-white p-4 rounded-xl border border-stone-200 space-y-1">
            <span className="font-serif font-bold text-stone-900 text-base">Kapu</span>
            <p className="text-xs text-stone-600">
              Woven utility basket crafted from durable riverine tree fibers for carrying farm produce and domestic storage.
            </p>
          </div>

          <div className="bg-white p-4 rounded-xl border border-stone-200 space-y-1">
            <span className="font-serif font-bold text-stone-900 text-base">Mokoobi</span>
            <p className="text-xs text-stone-600">
              Short, broad paddle carved from hardwood used to propel and steer the Waato in deep river currents.
            </p>
          </div>

          <div className="bg-white p-4 rounded-xl border border-stone-200 space-y-1">
            <span className="font-serif font-bold text-stone-900 text-base">Boodo</span>
            <p className="text-xs text-stone-600">
              A 5- to 8-meter long pole pushed against the riverbed to navigate the canoe through shallow sandbanks.
            </p>
          </div>

          <div className="bg-white p-4 rounded-xl border border-stone-200 space-y-1">
            <span className="font-serif font-bold text-stone-900 text-base">Uta & Tiyya</span>
            <p className="text-xs text-stone-600">
              Traditional bow (<em>Uta</em>) and arrow (<em>Tiyya</em>) system historically used in hunting and village protection.
            </p>
          </div>

          <div className="bg-stone-50 p-4 rounded-xl border border-stone-200 space-y-1">
            <span className="font-serif font-bold text-stone-700 text-base">Luguba, Goona & Bakooya</span>
            <p className="text-xs text-stone-500 italic">
              Implements documented in oral accounts for security/hunting; specific forms flagged for future elder verification.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
