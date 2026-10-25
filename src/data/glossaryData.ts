export type TermCategory =
  | 'Governance & Leadership'
  | 'Kinship & Social'
  | 'Language & Expressions'
  | 'Material Tools & Crafts'
  | 'Food & Gastronomy'
  | 'Music, Dance & Arts'
  | 'Clothing & Adornment'
  | 'Clans'
  | 'Geography & Environment';

export type VerificationStatus = 'confirmed' | 'pending_confirmation';

export interface GlossaryEntry {
  id: string;
  term: string;
  englishMeaning: string;
  swahiliMeaning?: string;
  category: TermCategory;
  culturalContext?: string;
  status: VerificationStatus;
  crossReferences?: string[];
  singularPluralNote?: string;
  phoneticHint?: string;
}

export const GLOSSARY_DATA: GlossaryEntry[] = [
  {
    id: 'alima',
    term: "A'LIMA",
    englishMeaning: 'The talk; the first formal stage of traditional marriage discussions between two families.',
    category: 'Kinship & Social',
    culturalContext: "Although the prospective bride and groom may have privately agreed, tradition requires the father or paternal uncle of the young man to formally visit the young woman's family. The bride's family traditionally acts as though hearing the proposal for the first time, establishing mutual respect and open family agreement.",
    status: 'confirmed',
    crossReferences: ['Ilwana', 'Wailwana'],
    phoneticHint: "ah-LEE-mah"
  },
  {
    id: 'aaye',
    term: 'Aaye',
    englishMeaning: 'Mother.',
    swahiliMeaning: 'Mama',
    category: 'Kinship & Social',
    culturalContext: 'A foundational kinship term in the Kilwana language, central to family and household communication.',
    status: 'confirmed',
    crossReferences: ['Baaba', 'Daade'],
    phoneticHint: 'AH-yeh'
  },
  {
    id: 'abole',
    term: 'Abole',
    englishMeaning: 'One of the traditional clans of the Ilwana Community.',
    category: 'Clans',
    culturalContext: 'Part of the historic clan system of the Wailwana, through which family lineages, community obligations, and ancestral connections are maintained.',
    status: 'confirmed',
    crossReferences: ['Wayu', 'Karari', 'Mamboya', 'Hajeji', 'Karayu', 'Ilaani', 'Galgedha']
  },
  {
    id: 'baaba',
    term: 'Baaba',
    englishMeaning: 'Father.',
    swahiliMeaning: 'Baba',
    category: 'Kinship & Social',
    culturalContext: 'Kinship term for father; traditionally leads formal family representations during events such as A\'LIMA.',
    status: 'confirmed',
    crossReferences: ['Aaye', 'Daade'],
    phoneticHint: 'BAH-bah'
  },
  {
    id: 'bakooya',
    term: 'Bakooya',
    englishMeaning: 'English meaning not yet confirmed.',
    category: 'Material Tools & Crafts',
    culturalContext: 'An additional traditional implement documented in community oral accounts as associated with hunting, protection, and security. Detailed physical description requires further elder confirmation.',
    status: 'pending_confirmation',
    crossReferences: ['Goona', 'Luguba', 'Tiyya', 'Uta']
  },
  {
    id: 'banaadiri',
    term: 'Banaadiri',
    englishMeaning: 'A traditional garment historically worn by men in the Ilwana Community.',
    category: 'Clothing & Adornment',
    culturalContext: 'Formed part of the distinctive historical attire worn by Wailwana men prior to contemporary clothing changes.',
    status: 'confirmed',
    crossReferences: ['Haagoodo', 'Wiili', 'Gapsara', 'Kikoi']
  },
  {
    id: 'bariyowe',
    term: 'Bariyowe',
    englishMeaning: 'How are you?',
    swahiliMeaning: 'Habari yako?',
    category: 'Language & Expressions',
    culturalContext: 'A common everyday Kilwana greeting used when inquiring after a single person\'s well-being and peace.',
    status: 'confirmed',
    crossReferences: ['Serekoo', 'Baryaa toloo', 'Usidoo'],
    phoneticHint: 'bah-ree-YOH-weh'
  },
  {
    id: 'baryaa-toloo',
    term: 'Baryaa toloo',
    englishMeaning: 'Good morning.',
    swahiliMeaning: 'Habari ya asubuhi',
    category: 'Language & Expressions',
    culturalContext: 'Greeting used in the morning hours to inquire about the start of the day.',
    status: 'confirmed',
    crossReferences: ['Bariyowe', 'Usidoo'],
    phoneticHint: 'bahr-YAH toh-LOH'
  },
  {
    id: 'bati',
    term: 'Bati',
    englishMeaning: 'English meaning not yet confirmed.',
    category: 'Music, Dance & Arts',
    culturalContext: 'A traditional musical instrument identified in community accounts as part of the musical heritage of the Wailwana. Exact construction materials and playing methods require further documentation.',
    status: 'pending_confirmation',
    crossReferences: ['Ngoma', 'Bunki', 'Firiimbi']
  },
  {
    id: 'begele',
    term: 'Begele',
    englishMeaning: 'English meaning not yet confirmed.',
    category: 'Material Tools & Crafts',
    culturalContext: 'A specially shaped wooden piece used to close the end of the traditional cylindrical beehive (Mwaato). Singular form.',
    status: 'pending_confirmation',
    singularPluralNote: 'Begele (singular) / Begelimo (plural)',
    crossReferences: ['Begelimo', 'Mwaato', 'Nooma', 'Kimmule', 'Oki']
  },
  {
    id: 'begelimo',
    term: 'Begelimo',
    englishMeaning: 'English meaning not yet confirmed.',
    category: 'Material Tools & Crafts',
    culturalContext: 'Plural form of Begele. Refers to the specially carved wooden end pieces used to close both ends of the traditional beehive (Mwaato).',
    status: 'pending_confirmation',
    singularPluralNote: 'Begele (singular) / Begelimo (plural)',
    crossReferences: ['Begele', 'Mwaato', 'Oki']
  },
  {
    id: 'biriidha',
    term: 'Biriidha',
    englishMeaning: 'Rice.',
    category: 'Food & Gastronomy',
    culturalContext: 'One of the staple agricultural crops historically cultivated along the fertile floodplains of the River Tana; often cooked plain or prepared together with pumpkin (Buyuyu).',
    status: 'confirmed',
    crossReferences: ['Buyuyu', 'Machijabo']
  },
  {
    id: 'boodo',
    term: 'Boodo',
    englishMeaning: 'A long, strong canoe-propelling pole (approximately 5 to 8 metres in length).',
    category: 'Material Tools & Crafts',
    culturalContext: 'Used to push against the riverbed or submerged banks to propel a canoe forward in shallow river waters where ordinary paddling with a Mokoobi is ineffective.',
    status: 'confirmed',
    crossReferences: ['Waato', 'Mokoobi', 'Chaana']
  },
  {
    id: 'bozi',
    term: 'Bozi',
    englishMeaning: 'Goat.',
    swahiliMeaning: 'Mbuzi',
    category: 'Language & Expressions',
    culturalContext: 'Reflects both household livestock keeping and everyday Kilwana fauna vocabulary.',
    status: 'confirmed'
  },
  {
    id: 'bunki',
    term: 'Bunki',
    englishMeaning: 'English meaning not yet confirmed.',
    category: 'Music, Dance & Arts',
    culturalContext: 'A traditional musical instrument documented as part of Ilwana musical heritage. Detailed construction and musical role require further documentation from knowledge holders.',
    status: 'pending_confirmation',
    crossReferences: ['Ngoma', 'Bati', 'Firiimbi']
  },
  {
    id: 'buyuyu',
    term: 'Buyuyu',
    englishMeaning: 'Pumpkin.',
    category: 'Food & Gastronomy',
    culturalContext: 'A prized crop grown on the River Tana floodplains. Cooked slowly on its own with salt or sugar, mixed with cooked maize (Haradya Buyuyu), or prepared with rice.',
    status: 'confirmed',
    crossReferences: ['Haradya Buyuyu', 'Lupekecho', 'Makaaruka']
  },
  {
    id: 'chaana',
    term: 'Chaana',
    englishMeaning: 'River (specifically the River Tana).',
    swahiliMeaning: 'Mto',
    category: 'Geography & Environment',
    culturalContext: 'The lifeblood of the Wailwana. The River Tana has provided fertile agricultural silt, drinking water, fish, transportation routes, and cultural identity for centuries.',
    status: 'confirmed',
    crossReferences: ['Waato', 'Boodo', 'Mokoobi']
  },
  {
    id: 'daade',
    term: 'Daade',
    englishMeaning: 'Sister.',
    swahiliMeaning: 'Dada',
    category: 'Kinship & Social',
    culturalContext: 'Kilwana kinship term denoting sister.',
    status: 'confirmed',
    crossReferences: ['Baaba', 'Aaye']
  },
  {
    id: 'firiimbi',
    term: 'Firiimbi',
    englishMeaning: 'English meaning not yet confirmed.',
    category: 'Music, Dance & Arts',
    culturalContext: 'A traditional musical instrument identified in community accounts. Further research is required to verify its exact shape, material composition, and acoustic properties.',
    status: 'pending_confirmation',
    crossReferences: ['Ngoma', 'Bati', 'Bunki']
  },
  {
    id: 'galgedha',
    term: 'Galgedha',
    englishMeaning: 'One of the traditional clans of the Ilwana Community.',
    category: 'Clans',
    culturalContext: 'One of the eight historically recognized Ilwana clans that regulate kinship ties and communal responsibility.',
    status: 'confirmed',
    crossReferences: ['Wayu', 'Karari', 'Mamboya', 'Hajeji', 'Abole', 'Karayu', 'Ilaani']
  },
  {
    id: 'gapsara',
    term: 'Gapsara',
    englishMeaning: 'A traditional garment associated with women.',
    category: 'Clothing & Adornment',
    culturalContext: 'Adopted or incorporated into Ilwana women\'s attire through regional trade and cultural contact with neighbouring coastal communities.',
    status: 'confirmed',
    crossReferences: ['Haagoodo', 'Wiili']
  },
  {
    id: 'gasa',
    term: 'Gasa',
    englishMeaning: 'The highest traditional dispute-resolution and decision-making institution within the Ilwana governance system.',
    category: 'Governance & Leadership',
    culturalContext: 'Chaired by the Hayu and supported by an elected chairperson, senior elders, and religious scholars. It adjudicates major inter-clan disputes, land boundary claims, and matters affecting the entire community using consultative consensus and restorative justice.',
    status: 'confirmed',
    crossReferences: ['Hayu', 'Wayu']
  },
  {
    id: 'goona',
    term: 'Goona',
    englishMeaning: 'English meaning not yet confirmed.',
    category: 'Material Tools & Crafts',
    culturalContext: 'A traditional implement associated in oral history with hunting, security, and protection. Preserved for future elder verification.',
    status: 'pending_confirmation',
    crossReferences: ['Luguba', 'Bakooya', 'Tiyya', 'Uta']
  },
  {
    id: 'guo',
    term: 'Guo',
    englishMeaning: 'Clothes or clothing.',
    swahiliMeaning: 'Nguo',
    category: 'Language & Expressions',
    culturalContext: 'Everyday Kilwana word for clothing.',
    status: 'confirmed',
    crossReferences: ['Banaadiri', 'Haagoodo', 'Wiili']
  },
  {
    id: 'haagoodo',
    term: 'Haagoodo',
    englishMeaning: 'A traditional head covering garment worn by Ilwana women.',
    category: 'Clothing & Adornment',
    culturalContext: 'An important traditional garment worn by women to cover the head, symbolizing modesty, dignity, and cultural identity.',
    status: 'confirmed',
    crossReferences: ['Wiili', 'Banaadiri']
  },
  {
    id: 'hajeji',
    term: 'Hajeji',
    englishMeaning: 'One of the traditional clans of the Ilwana Community.',
    category: 'Clans',
    culturalContext: 'One of the major clans of the Wailwana, deeply involved in customary consultative leadership.',
    status: 'confirmed',
    crossReferences: ['Wayu', 'Karari', 'Mamboya', 'Abole', 'Karayu', 'Ilaani', 'Galgedha']
  },
  {
    id: 'haradya-buyuyu',
    term: 'Haradya Buyuyu',
    englishMeaning: 'A traditional dish of pumpkin mixed with cooked maize.',
    category: 'Food & Gastronomy',
    culturalContext: 'Prepared by simmering pumpkin until soft and blending it into boiled maize using the wooden Lupekecho stirring implement.',
    status: 'confirmed',
    crossReferences: ['Buyuyu', 'Lupekecho', 'Machijabo']
  },
  {
    id: 'haradya-makaaruka',
    term: 'Haradya Makaaruka',
    englishMeaning: 'A traditional dish of watermelon slow-cooked with maize.',
    category: 'Food & Gastronomy',
    culturalContext: 'A distinctive culinary tradition where ripe watermelon is cooked gradually with maize, yielding a flavorful meal with minimal added ingredients.',
    status: 'confirmed',
    crossReferences: ['Makaaruka', 'Machijabo']
  },
  {
    id: 'hayu',
    term: 'Hayu',
    englishMeaning: 'The traditional king and highest traditional leader of the Ilwana Community.',
    category: 'Governance & Leadership',
    culturalContext: 'The supreme cultural leader and unifying symbol of the Wailwana. Selected for wisdom, moral integrity, patience, and commitment to the welfare of the people. The Hayu chairs the Gasa council and represents the community in external diplomatic affairs.',
    status: 'confirmed',
    crossReferences: ['Gasa', 'Ilwana', 'Wailwana']
  },
  {
    id: 'ilaani',
    term: 'Ilaani',
    englishMeaning: 'One of the traditional clans of the Ilwana Community.',
    category: 'Clans',
    culturalContext: 'One of the 8 recognized traditional clans within Ilwana society.',
    status: 'confirmed',
    crossReferences: ['Wayu', 'Karari', 'Mamboya', 'Hajeji', 'Abole', 'Karayu', 'Galgedha']
  },
  {
    id: 'ilwana',
    term: 'Ilwana',
    englishMeaning: 'The name of the community as a whole.',
    category: 'Language & Expressions',
    culturalContext: 'The authentic, officially accepted name of the distinct Bantu community. Associated in community tradition with the meaning of free people or free men, denoting self-determination and dignity.',
    status: 'confirmed',
    crossReferences: ['Wailwana', 'Kilwana', 'Hayu']
  },
  {
    id: 'jahazi',
    term: 'Jahazi',
    englishMeaning: 'A traditional wooden sailing vessel used along the East African coast.',
    category: 'Geography & Environment',
    culturalContext: 'Historically used by the ancestors of the Ilwana during coastal migrations from the Comoros Islands across the Indian Ocean coastline toward Shungwaya and the River Tana.',
    status: 'confirmed',
    crossReferences: ['Waato', 'Chaana']
  },
  {
    id: 'kapu',
    term: 'Kapu',
    englishMeaning: 'A traditional woven basket made from locally harvested plant fibres.',
    category: 'Material Tools & Crafts',
    culturalContext: 'Woven by women using flexible bark fibres and plant strips; used for storing household goods, carrying farm harvests, and daily domestic chores.',
    status: 'confirmed',
    crossReferences: ['Locholo']
  },
  {
    id: 'karari',
    term: 'Karari',
    englishMeaning: 'One of the traditional clans of the Ilwana Community.',
    category: 'Clans',
    culturalContext: 'One of the foundational clans of the Wailwana.',
    status: 'confirmed',
    crossReferences: ['Wayu', 'Mamboya', 'Hajeji', 'Abole', 'Karayu', 'Ilaani', 'Galgedha']
  },
  {
    id: 'karayu',
    term: 'Karayu',
    englishMeaning: 'One of the traditional clans of the Ilwana Community.',
    category: 'Clans',
    culturalContext: 'One of the major clans of the Wailwana.',
    status: 'confirmed',
    crossReferences: ['Wayu', 'Karari', 'Mamboya', 'Hajeji', 'Abole', 'Ilaani', 'Galgedha']
  },
  {
    id: 'kikoi',
    term: 'Kikoi',
    englishMeaning: 'A traditional woven fabric worn wrapped around the waist by men.',
    category: 'Clothing & Adornment',
    culturalContext: 'Adopted and adapted through historical contact and trade along the East African coast.',
    status: 'confirmed',
    crossReferences: ['Banaadiri', 'Shati']
  },
  {
    id: 'kilwana',
    term: 'Kilwana',
    englishMeaning: 'The indigenous language spoken by the Ilwana Community.',
    category: 'Language & Expressions',
    culturalContext: 'A distinct Bantu language holding the oral literature, history, moral philosophies, ceremonies, and indigenous knowledge of the Wailwana.',
    status: 'confirmed',
    crossReferences: ['Ilwana', 'Wailwana']
  },
  {
    id: 'kimmule',
    term: 'Kimmule',
    englishMeaning: 'A traditional bundle of cords/strings lit at one end to produce smoke during honey harvesting.',
    category: 'Material Tools & Crafts',
    culturalContext: 'Beekeepers use the smoke produced by the Kimmule at night to calm bees before opening the Mwaato beehive.',
    status: 'confirmed',
    crossReferences: ['Mwaato', 'Nooma', 'Oki']
  },
  {
    id: 'kingika',
    term: 'Kingika',
    englishMeaning: 'A traditional dance performed during celebrations and ceremonies.',
    category: 'Music, Dance & Arts',
    culturalContext: 'A rhythmic community dance shared with neighbours along the River Tana basin.',
    status: 'confirmed',
    crossReferences: ['Kitoko', 'Koras', 'Mashingwe', 'Ukaamwaale']
  },
  {
    id: 'kitoko',
    term: 'Kitoko',
    englishMeaning: 'A joyous traditional dance performed particularly during weddings and celebratory assemblies.',
    category: 'Music, Dance & Arts',
    culturalContext: 'Performed with high energy by both men and women (with men as prominent dancers), accompanied by rhythmic call-and-response songs.',
    status: 'confirmed',
    crossReferences: ['Koras', 'Mashingwe', 'Ngoma']
  },
  {
    id: 'konole',
    term: 'Konole',
    englishMeaning: 'A substantial traditional dish prepared by cooking maize together with legumes.',
    category: 'Food & Gastronomy',
    culturalContext: 'Made from maize combined with beans, green grams, or cowpeas, vigorously stirred with the Mwiko. Broadly comparable to Kenyan mukimo or muthokoi.',
    status: 'confirmed',
    crossReferences: ['Mwiko', 'Machijabo']
  },
  {
    id: 'koras',
    term: 'Koras',
    englishMeaning: 'A traditional music and dance performance particularly associated with women.',
    category: 'Music, Dance & Arts',
    culturalContext: 'Women coordinate footwork and rhythmic hand clapping to repeated lyric phrases, celebrating communal milestones and weddings.',
    status: 'confirmed',
    crossReferences: ['Kitoko', 'Mashingwe', 'Ukaamwaale']
  },
  {
    id: 'kumbu',
    term: 'Kumbu',
    englishMeaning: 'A traditional dish made from peeled unripe bananas cooked whole without slicing.',
    category: 'Food & Gastronomy',
    culturalContext: 'Distinguished from Matole by leaving the peeled bananas whole during the boiling process.',
    status: 'confirmed',
    crossReferences: ['Matole', 'Matolya Sehe']
  },
  {
    id: 'locholo',
    term: 'Locholo',
    englishMeaning: 'A traditional implement used for winnowing and separating chaff from grain.',
    category: 'Material Tools & Crafts',
    culturalContext: 'Essential agricultural tool used by farmers after harvesting maize, millet, or rice to winnow harvested grain against the wind.',
    status: 'confirmed',
    crossReferences: ['Kapu', 'Machijabo']
  },
  {
    id: 'luguba',
    term: 'Luguba',
    englishMeaning: 'English meaning not yet confirmed.',
    category: 'Material Tools & Crafts',
    culturalContext: 'A traditional implement documented in community oral records as associated with hunting, security, and protection.',
    status: 'pending_confirmation',
    crossReferences: ['Goona', 'Bakooya', 'Tiyya', 'Uta']
  },
  {
    id: 'lupekecho',
    term: 'Lupekecho',
    englishMeaning: 'A traditional wooden implement used for manual stirring and mixing.',
    category: 'Material Tools & Crafts',
    culturalContext: 'Twirled or stirred rapidly between the palms to mix porridge, fruit juices, and dishes such as Haradya Buyuyu.',
    status: 'confirmed',
    crossReferences: ['Mwiko', 'Haradya Buyuyu']
  },
  {
    id: 'maalimu',
    term: 'Maalimu',
    englishMeaning: 'Teacher.',
    swahiliMeaning: 'Mwalimu',
    category: 'Language & Expressions',
    culturalContext: 'Term used respectfully for educators, including Islamic instructors in Madrasas.',
    status: 'confirmed'
  },
  {
    id: 'machijabo',
    term: 'Machijabo',
    englishMeaning: 'Maize.',
    category: 'Food & Gastronomy',
    culturalContext: 'The principal cereal grain crop farmed on the alluvial soils of the River Tana, used in dishes such as Konole, Haradya Buyuyu, and Haradya Makaaruka.',
    status: 'confirmed',
    crossReferences: ['Konole', 'Haradya Buyuyu', 'Haradya Makaaruka']
  },
  {
    id: 'makaaruka',
    term: 'Makaaruka',
    englishMeaning: 'Watermelon.',
    category: 'Food & Gastronomy',
    culturalContext: 'Thrives in riverbank soils; eaten fresh or slow-cooked with maize in Haradya Makaaruka.',
    status: 'confirmed',
    crossReferences: ['Haradya Makaaruka', 'Buyuyu']
  },
  {
    id: 'mamboya',
    term: 'Mamboya',
    englishMeaning: 'One of the traditional clans of the Ilwana Community.',
    category: 'Clans',
    culturalContext: 'One of the eight recognized clans of the Wailwana.',
    status: 'confirmed',
    crossReferences: ['Wayu', 'Karari', 'Hajeji', 'Abole', 'Karayu', 'Ilaani', 'Galgedha']
  },
  {
    id: 'mashingwe',
    term: 'Mashingwe',
    englishMeaning: 'A vibrant traditional dance associated with community celebrations.',
    category: 'Music, Dance & Arts',
    culturalContext: 'Performed during festivities by both men and women, featuring fast rhythms and call-and-response vocal refrains.',
    status: 'confirmed',
    crossReferences: ['Kitoko', 'Koras', 'Ngoma']
  },
  {
    id: 'masiku-aya',
    term: 'Masiku aya',
    englishMeaning: 'Nowadays or these days.',
    swahiliMeaning: 'Siku hizi',
    category: 'Language & Expressions',
    culturalContext: 'Temporal phrase used in everyday conversation and oral narratives contrasting past and present.',
    status: 'confirmed'
  },
  {
    id: 'matole',
    term: 'Matole',
    englishMeaning: 'A traditional dish made from unripe bananas peeled and chopped into small pieces before cooking.',
    category: 'Food & Gastronomy',
    culturalContext: 'Commonly prepared as a family meal, often enriched with fresh river fish.',
    status: 'confirmed',
    crossReferences: ['Kumbu', 'Matolya Sehe']
  },
  {
    id: 'matolya-sehe',
    term: 'Matolya Sehe',
    englishMeaning: 'Chopped unripe bananas cooked together with river fish.',
    category: 'Food & Gastronomy',
    culturalContext: 'Combines the produce of riverbank farming (bananas) with freshwater fishing from the River Tana.',
    status: 'confirmed',
    crossReferences: ['Matole', 'Chaana']
  },
  {
    id: 'mkao',
    term: 'Mkao',
    englishMeaning: 'Collective communal work where community members cooperate on large tasks.',
    category: 'Kinship & Social',
    culturalContext: 'Wailwana organize Mkao to clear farmlands, build houses, dig canals, or harvest crops, accompanied by rhythmic Mkao work songs to maintain communal momentum.',
    status: 'confirmed',
    crossReferences: ['Ilwana', 'Wailwana']
  },
  {
    id: 'mokoobi',
    term: 'Mokoobi',
    englishMeaning: 'A short, broad canoe paddle used to steer and propel a canoe in deep waters.',
    category: 'Material Tools & Crafts',
    culturalContext: 'Hand-carved from durable local timber; paired with the dugout canoe (Waato) for River Tana navigation.',
    status: 'confirmed',
    crossReferences: ['Waato', 'Boodo', 'Chaana']
  },
  {
    id: 'mwaato',
    term: 'Mwaato',
    englishMeaning: 'The traditional cylindrical wooden beehive used in beekeeping.',
    category: 'Material Tools & Crafts',
    culturalContext: 'Carved from hollowed logs or woven bark; treated with Nooma inside, sealed at the ends with Begele/Begelimo, and elevated high into trees to protect bees from predators.',
    status: 'confirmed',
    crossReferences: ['Nooma', 'Begele', 'Begelimo', 'Kimmule', 'Oki']
  },
  {
    id: 'mwiko',
    term: 'Mwiko',
    englishMeaning: 'A traditional wooden cooking implement used for stirring thick foods.',
    category: 'Material Tools & Crafts',
    culturalContext: 'Heavy wooden spatula used for stirring Konole and stiff porridges during long simmering.',
    status: 'confirmed',
    crossReferences: ['Lupekecho', 'Konole']
  },
  {
    id: 'ngoma',
    term: 'Ngoma',
    englishMeaning: 'A traditional percussion drum.',
    category: 'Music, Dance & Arts',
    culturalContext: 'Carved from hollow wood and stretched animal hide; provides the foundational rhythm for dances including Kitoko, Koras, and Mashingwe.',
    status: 'confirmed',
    crossReferences: ['Kitoko', 'Mashingwe', 'Bati', 'Bunki']
  },
  {
    id: 'nijhyami-mazwa-kweedwa',
    term: 'Nijhyami mazwa kweedwa',
    englishMeaning: 'I like ripe bananas.',
    swahiliMeaning: 'Napenda ndizi mbivu',
    category: 'Language & Expressions',
    culturalContext: 'Conversational sentence illustrating Kilwana verb inflection and dietary vocabulary.',
    status: 'confirmed',
    crossReferences: ['Matole', 'Kumbu']
  },
  {
    id: 'nooma',
    term: 'Nooma',
    englishMeaning: 'A natural aromatic substance obtained from a specific tree, applied inside beehives to attract bee swarms.',
    category: 'Material Tools & Crafts',
    culturalContext: 'Demonstrates deep indigenous botanical and entomological knowledge; the scent invites wild colonies to colonize the Mwaato hive.',
    status: 'confirmed',
    crossReferences: ['Mwaato', 'Oki']
  },
  {
    id: 'oki',
    term: 'Oki',
    englishMeaning: 'Honey.',
    swahiliMeaning: 'Asali',
    category: 'Food & Gastronomy',
    culturalContext: 'Regarded as both a nutritious food, a cultural gift, and a valuable trade commodity harvested from the Mwaato.',
    status: 'confirmed',
    crossReferences: ['Mwaato', 'Nooma']
  },
  {
    id: 'serekoo',
    term: 'Serekoo',
    englishMeaning: 'Greetings to everyone or greetings to you all.',
    swahiliMeaning: 'Habari zenu',
    category: 'Language & Expressions',
    culturalContext: 'Plural greeting spoken upon arriving at a gathering, meeting, or family home.',
    status: 'confirmed',
    crossReferences: ['Bariyowe', 'Baryaa toloo', 'Usidoo']
  },
  {
    id: 'shati',
    term: 'Shati',
    englishMeaning: 'Shirt.',
    category: 'Clothing & Adornment',
    culturalContext: 'Incorporated into everyday male dress alongside the traditional Kikoi.',
    status: 'confirmed',
    crossReferences: ['Banaadiri', 'Kikoi']
  },
  {
    id: 'tiyya',
    term: 'Tiyya',
    englishMeaning: 'A traditional arrow.',
    category: 'Material Tools & Crafts',
    culturalContext: 'Carefully fletched and tipped with metal or hardened point; used with the Uta (bow) for hunting and protection.',
    status: 'confirmed',
    crossReferences: ['Uta', 'Luguba', 'Goona', 'Bakooya']
  },
  {
    id: 'ukaamwaale',
    term: 'Ukaamwaale',
    englishMeaning: 'A sacred traditional celebration associated with childbirth and the welcoming of a new child.',
    category: 'Music, Dance & Arts',
    culturalContext: 'Exclusively celebrated by women. Men and young boys are strictly excluded from the sacred birth hut and the food prepared for the ceremony. Women perform dedicated songs and pass maternal wisdom across generations.',
    status: 'confirmed',
    crossReferences: ['Koras', 'Ilwana']
  },
  {
    id: 'umukwedee-nape',
    term: 'Umukwedee nape?',
    englishMeaning: 'Where are you going?',
    swahiliMeaning: 'Unaenda wapi?',
    category: 'Language & Expressions',
    culturalContext: 'Everyday Kilwana phrase used when encountering acquaintances traveling along paths or waterways.',
    status: 'confirmed'
  },
  {
    id: 'usidoo',
    term: 'Usidoo',
    englishMeaning: 'Good afternoon.',
    swahiliMeaning: 'Umeshindaje?',
    category: 'Language & Expressions',
    culturalContext: 'Midday and afternoon greeting inquiring how one has passed the heat of the day.',
    status: 'confirmed',
    crossReferences: ['Bariyowe', 'Baryaa toloo']
  },
  {
    id: 'uta',
    term: 'Uta',
    englishMeaning: 'The traditional bow used to propel an arrow.',
    category: 'Material Tools & Crafts',
    culturalContext: 'Crafted from flexible, durable riverine hardwood and sinew string; paired with the Tiyya (arrow).',
    status: 'confirmed',
    crossReferences: ['Tiyya', 'Luguba']
  },
  {
    id: 'waato',
    term: 'Waato',
    englishMeaning: 'The traditional dugout canoe used on the River Tana.',
    category: 'Material Tools & Crafts',
    culturalContext: 'Hollowed from selected large tree trunks; used for crossing the Tana, riverine transport, fishing, and evacuating families during seasonal floods.',
    status: 'confirmed',
    crossReferences: ['Chaana', 'Mokoobi', 'Boodo']
  },
  {
    id: 'wailwana',
    term: 'Wailwana',
    englishMeaning: 'The people who belong to the Ilwana Community.',
    category: 'Language & Expressions',
    culturalContext: 'Refers to individual members of the community (plural people designation), while Ilwana refers to the ethnic community and collective body.',
    status: 'confirmed',
    crossReferences: ['Ilwana', 'Kilwana']
  },
  {
    id: 'wayu',
    term: 'Wayu',
    englishMeaning: 'One of the traditional clans of the Ilwana Community.',
    category: 'Clans',
    culturalContext: 'One of the prominent traditional clans of the Wailwana with historical representation in the Gasa.',
    status: 'confirmed',
    crossReferences: ['Karari', 'Mamboya', 'Hajeji', 'Abole', 'Karayu', 'Ilaani', 'Galgedha']
  },
  {
    id: 'wiili',
    term: 'Wiili',
    englishMeaning: 'A traditional form of women\'s clothing historically worn by Wailwana women.',
    category: 'Clothing & Adornment',
    culturalContext: 'Traditional fabric and garment remembered in oral accounts as part of women\'s heritage.',
    status: 'confirmed',
    crossReferences: ['Haagoodo', 'Gapsara', 'Banaadiri']
  }
];
