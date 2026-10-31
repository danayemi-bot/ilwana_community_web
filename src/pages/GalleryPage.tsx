import React, { useState } from 'react';
import { PageId } from '../components/Navbar';
import { Camera, Filter, ExternalLink, ArrowRight, Sparkles, Waves, Crown, Hammer, Flame } from 'lucide-react';

interface GalleryPageProps {
  onNavigate: (page: PageId) => void;
}

export interface GalleryItem {
  id: string;
  title: string;
  kilwanaName: string;
  category: 'leadership' | 'river' | 'crafts' | 'beekeeping' | 'fishing';
  categoryLabel: string;
  image: string;
  description: string;
  culturalNote: string;
  relatedSection: PageId;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'hayu-address',
    title: 'The Hayu Addressing the Community Assembly',
    kilwanaName: 'Hayu',
    category: 'leadership',
    categoryLabel: 'Governance & Leadership',
    image: '/assets/aistudio/hayu_adddressing_67ed9fc2.png',
    description: 'The traditional King (Hayu) of the Ilwana Community speaking during an official gathering, dressed in customary attire representing unity, moral authority, and communal continuity.',
    culturalNote: 'The office of the Hayu is central to Ilwana identity. Guided by wisdom, patience, and character, the Hayu mediates disputes, preserves customs, and represents the community externally.',
    relatedSection: 'governance',
  },
  {
    id: 'gasa-elders',
    title: 'The Gasa Council of Elders',
    kilwanaName: 'Gasa',
    category: 'leadership',
    categoryLabel: 'Governance & Leadership',
    image: '/assets/aistudio/wailwana_elders_8d71f49e.png',
    description: 'Respected Wailwana elders seated in consultative deliberation under the shade of traditional indigenous trees along the River Tana.',
    culturalNote: 'The Gasa is the supreme customary council of elders. Each major clan is represented. Decisions are reached through patient consensus, evidence evaluation, and restorative reconciliation.',
    relatedSection: 'governance',
  },
  {
    id: 'beutiful-items-women',
    title: 'Wailwana Artisans Weaving Traditional Mats & Trays',
    kilwanaName: 'Ushuka wa Irraanga na Jolo',
    category: 'crafts',
    categoryLabel: 'Material Heritage',
    image: '/assets/aistudio/beutiful_ilwana_items_af972299.png',
    description: 'Ilwana women gathered on traditional floor mats weaving dum palm fronds and riverine fibers into winnowing trays (jolo) and mats (irraanga).',
    culturalNote: 'Weaving is both an economic livelihood and a communal social forum where oral stories, folklore, and Kilwana idioms are transmitted across generations.',
    relatedSection: 'material',
  },
  {
    id: 'waato-canoe',
    title: 'Waato: Traditional Hand-Carved River Canoe',
    kilwanaName: 'Waato',
    category: 'river',
    categoryLabel: 'River Tana & Waterways',
    image: '/assets/aistudio/waato_d034ef5b.png',
    description: 'A hand-hewn dugout canoe carved from native riverine hardwood, resting by the green banks of the River Tana.',
    culturalNote: 'The Waato is essential to Ilwana life. It provides crossing between opposing riverbanks, transport for farm produce, flood rescue, and mobile fishing platforms.',
    relatedSection: 'material',
  },
  {
    id: 'chaana-river-aerial',
    title: 'Chaana: Aerial Horseshoe Bend of River Tana',
    kilwanaName: 'Chaana',
    category: 'river',
    categoryLabel: 'River Tana & Waterways',
    image: '/assets/aistudio/chaana_de7f7d77.png',
    description: 'Sweeping aerial view of the meandering River Tana snaking through the lush riverine forest canopy and alluvial floodplains of the Ilwana homeland.',
    culturalNote: 'River Tana (Chaana) is the lifeblood of the community. It provides alluvial silt for recession agriculture, fresh fish, and drinking water for villages.',
    relatedSection: 'geography',
  },
  {
    id: 'chaana-river-waters',
    title: 'River Tana Waters & Riverine Forest',
    kilwanaName: 'Chaana do Kweeto',
    category: 'river',
    categoryLabel: 'River Tana & Waterways',
    image: '/assets/aistudio/rivertana_a0788a57.png',
    description: 'High-elevation view of the flowing alluvial waters of the River Tana nourishing fertile riverbanks and traditional farms.',
    culturalNote: 'Traditional river calling allowed families across the water to exchange alerts, news, and greetings without needing immediate water crossings.',
    relatedSection: 'geography',
  },
  {
    id: 'mwaato-beehive',
    title: 'Mwaato: Indigenous Log Beehive in Tree Fork',
    kilwanaName: 'Mwaato (pl. Myaato)',
    category: 'beekeeping',
    categoryLabel: 'Indigenous Technology',
    image: '/assets/aistudio/mwaato_f078a079.png',
    description: 'A traditional cylindrical hollow-log beehive carefully hoisted and lashed to branches in the riverine woodland canopy.',
    culturalNote: 'Crafted with wooden end-seals (begele), baited with fragrant nooma resin, and harvested at night using herbal smoke bundles (kimmule) so bee colonies survive.',
    relatedSection: 'material',
  },
  {
    id: 'myaato-canopy',
    title: 'Myaato: Traditional Beehives in Forest Canopy',
    kilwanaName: 'Myaato',
    category: 'beekeeping',
    categoryLabel: 'Indigenous Technology',
    image: '/assets/aistudio/myaato_f6fbd02d.png',
    description: 'Multiple indigenous beehives suspended high in forest trees to safeguard colonies from honey badgers and predators.',
    culturalNote: 'Beekeeping is one of the highest expressions of Ilwana ecological science, combining tree preservation with sustainable honey extraction.',
    relatedSection: 'material',
  },
  {
    id: 'locholo-tray',
    title: 'Locholo: Traditional Woven Winnowing Tray',
    kilwanaName: 'Locholo',
    category: 'crafts',
    categoryLabel: 'Material Heritage',
    image: '/assets/aistudio/locholo__739438a8.png',
    description: 'A finely woven circular tray crafted from split palm fibers with reinforced rims used for winnowing maize, millet, and legumes.',
    culturalNote: 'Grains are tossed upward against the river breeze, separating chaff from edible grain with rhythmic manual precision.',
    relatedSection: 'material',
  },
  {
    id: 'jolo-collection',
    title: 'Jolo: Collection of Handcrafted Winnowing Trays',
    kilwanaName: 'Jolo (plural of Locholo)',
    category: 'crafts',
    categoryLabel: 'Material Heritage',
    image: '/assets/aistudio/jolo__many-locholo__c8bb4a21.png',
    description: 'A vibrant showcase of multiple finished winnowing trays featuring natural dyes and intricate geometric tribal weave patterns.',
    culturalNote: 'Plural form of locholo. Produced by skilled women weavers and used across all domestic cooking traditions.',
    relatedSection: 'material',
  },
  {
    id: 'kapu-baskets',
    title: 'Kapu: Handwoven Utility & Farm Baskets',
    kilwanaName: 'Kapu (pl. Kapwera)',
    category: 'crafts',
    categoryLabel: 'Material Heritage',
    image: '/assets/aistudio/kapu__ifmany_kapwera__17b5e87c.png',
    description: 'Durable baskets hand-plaited from river palm fibers, designed for harvesting and domestic storage.',
    culturalNote: 'Called Kapu in singular and Kapwera when referring to multiple baskets. Indispensable for carrying pumpkin, watermelon, and maize from floodplain farms.',
    relatedSection: 'material',
  },
  {
    id: 'irraanga-mat',
    title: 'Irraanga: Traditional Dum Palm Floor Mat',
    kilwanaName: 'Irraanga',
    category: 'crafts',
    categoryLabel: 'Material Heritage',
    image: '/assets/aistudio/irraanga_c0a652ba.png',
    description: 'A tightly woven palm-leaf floor mat spread over green grass, showing the herringbone plaited patterns typical of Ilwana craftswomen.',
    culturalNote: 'Irraanga mats serve as household seating, prayer mats, and community meeting carpets during elder council assemblies.',
    relatedSection: 'material',
  },
  {
    id: 'dokwena-fish',
    title: 'Dokwena: Fresh River Tana Fish Staple',
    kilwanaName: 'Dokwena',
    category: 'fishing',
    categoryLabel: 'River Gastronomy',
    image: '/assets/aistudio/Dokwena_675413dd.png',
    description: 'Freshly harvested freshwater fish caught by Ilwana fishermen from the River Tana using woven traps and nets.',
    culturalNote: 'Dokwena is a treasured culinary staple, frequently stewed with green bananas in the famous communal dish Matolya Sehe.',
    relatedSection: 'material',
  },
  {
    id: 'chika-fish',
    title: 'Chika: River Tana Small Fish & Fingerlings',
    kilwanaName: 'Chika',
    category: 'fishing',
    categoryLabel: 'River Gastronomy',
    image: '/assets/aistudio/chika_cc6be5e5.png',
    description: 'Small river fish and fingerlings harvested during seasonal river recessions, sundried or stewed fresh.',
    culturalNote: 'Chika fishing forms part of the alluvial flood-recession economy, providing protein security for families along the riverbanks.',
    relatedSection: 'material',
  },
];

export const GalleryPage: React.FC<GalleryPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalItem, setActiveModalItem] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Artifacts & Photos' },
    { id: 'leadership', label: 'Leadership & Elders' },
    { id: 'crafts', label: 'Crafts & Weaving' },
    { id: 'river', label: 'River Tana & Waato' },
    { id: 'beekeeping', label: 'Indigenous Beekeeping' },
    { id: 'fishing', label: 'River Gastronomy' },
  ];

  const filteredItems = selectedCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="space-y-4 border-b-2 border-stone-300 pb-8">
        <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#0f4c5c] bg-teal-50 px-3.5 py-1 rounded-full border border-teal-200">
          <Camera className="w-4 h-4" />
          <span>Authentic Visual Heritage & Artifact Archive</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-black tracking-tight text-stone-950">
          Ilwana Community Visual Archive
        </h1>
        <p className="text-base sm:text-xl text-stone-950 leading-relaxed max-w-3xl font-medium">
          A dedicated photographic and material gallery documenting the authentic heritage of the Wailwana: traditional governance leaders, hand-carved river craft, palm-woven implements, indigenous beekeeping science, and the waters of the River Tana.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 pb-2 border-b border-stone-200">
        <div className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-stone-700 mr-2">
          <Filter className="w-4 h-4 text-[#0f4c5c]" />
          <span>Filter:</span>
        </div>
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 py-2 rounded-xl text-sm font-black transition-all ${
              selectedCategory === cat.id
                ? 'bg-[#0f4c5c] text-white shadow-md ring-2 ring-[#0f4c5c]/20'
                : 'bg-white text-stone-900 border-2 border-stone-300 hover:border-[#0f4c5c] hover:bg-stone-50'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item) => (
          <article
            key={item.id}
            className="group bg-white rounded-2xl border-2 border-stone-300 overflow-hidden shadow-sm hover:shadow-xl hover:border-[#0f4c5c] transition-all flex flex-col justify-between"
          >
            <div>
              {/* Photo Frame */}
              <div
                className="relative h-64 overflow-hidden bg-stone-100 cursor-pointer"
                onClick={() => setActiveModalItem(item)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-stone-950/85 backdrop-blur-md px-3 py-1 rounded-full text-xs font-black text-amber-300 border border-amber-500/40">
                  {item.kilwanaName}
                </div>
                <div className="absolute bottom-3 right-3 bg-[#0f4c5c]/90 text-white text-[11px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md">
                  {item.categoryLabel}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-3">
                <h3 className="font-serif text-xl sm:text-2xl font-black text-stone-950 group-hover:text-[#0f4c5c] transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-stone-950 font-normal leading-relaxed">
                  {item.description}
                </p>
                <div className="bg-[#fdfbf7] p-3.5 rounded-xl border border-stone-200 text-xs sm:text-sm text-stone-950 font-medium space-y-1">
                  <span className="font-black text-[#0f4c5c] block uppercase tracking-wider text-[11px]">
                    Cultural Significance:
                  </span>
                  <p className="leading-relaxed">{item.culturalNote}</p>
                </div>
              </div>
            </div>

            {/* Card Footer */}
            <div className="px-6 pb-6 pt-2 border-t border-stone-100 flex items-center justify-between">
              <button
                onClick={() => setActiveModalItem(item)}
                className="text-xs sm:text-sm font-black text-stone-800 hover:text-[#0f4c5c] flex items-center gap-1.5"
              >
                <span>View Full Size</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => onNavigate(item.relatedSection)}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-teal-50 text-[#0f4c5c] hover:bg-[#0f4c5c] hover:text-white font-black text-xs transition-colors"
              >
                <span>Read Section</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activeModalItem && (
        <div
          className="fixed inset-0 z-50 bg-stone-950/90 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setActiveModalItem(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border-2 border-amber-500 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative bg-stone-950 flex items-center justify-center max-h-[60vh] overflow-hidden">
              <img
                src={activeModalItem.image}
                alt={activeModalItem.title}
                className="max-h-[60vh] w-auto object-contain"
              />
              <button
                onClick={() => setActiveModalItem(null)}
                className="absolute top-4 right-4 bg-white/90 hover:bg-white text-stone-950 font-black px-3.5 py-1.5 rounded-full text-sm shadow-md"
              >
                ✕ Close
              </button>
            </div>
            <div className="p-6 sm:p-8 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-stone-200 pb-4">
                <div>
                  <span className="text-xs font-mono font-black text-[#0f4c5c] uppercase tracking-wider block">
                    Kilwana Name: {activeModalItem.kilwanaName}
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-black text-stone-950 mt-1">
                    {activeModalItem.title}
                  </h2>
                </div>
                <button
                  onClick={() => {
                    const sec = activeModalItem.relatedSection;
                    setActiveModalItem(null);
                    onNavigate(sec);
                  }}
                  className="px-4 py-2 bg-[#0f4c5c] hover:bg-[#135d70] text-white font-black rounded-xl text-sm transition-all shadow-sm"
                >
                  Explore Section →
                </button>
              </div>

              <p className="text-base sm:text-lg text-stone-950 leading-relaxed font-normal">
                {activeModalItem.description}
              </p>

              <div className="p-4 bg-amber-50 rounded-xl border border-amber-300 text-stone-950">
                <span className="text-xs font-black uppercase tracking-wider text-amber-900 block mb-1">
                  Community Heritage Record
                </span>
                <p className="text-sm sm:text-base leading-relaxed font-normal">
                  {activeModalItem.culturalNote}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
