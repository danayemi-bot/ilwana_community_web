/**
 * 100% Free, Client-Side AI Cultural Knowledge & Language Engine for Ilwana Heritage.
 * Runs completely in the browser with zero external APIs, zero costs, and zero external dependencies.
 * Never invents facts or distorts information; operates directly from verified community records.
 * Clean text without raw markdown asterisks so speech synthesis and display are smooth and natural.
 */

import { GLOSSARY_DATA, GlossaryEntry } from '../data/glossaryData';
import { CLANS_DATA, SONGS_DATA, SETTLEMENTS_DATA } from '../data/heritageData';
import { PageId } from '../components/Navbar';

export interface AIAnswer {
  summary: string;
  details: string[];
  relatedTerms: GlossaryEntry[];
  suggestedPage?: { id: PageId; title: string };
  suggestedQuestions: string[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  category: string;
}

export const CULTURAL_PRESET_QUESTIONS = [
  "Who is the Hayu and how does traditional governance work?",
  "What are the 8 clans of the Wailwana?",
  "Explain the traditional marriage process (A'lima).",
  "What traditional foods and crops are grown along River Tana?",
  "What traditional musical instruments are played by the Wailwana?",
  "How is the traditional beehive (Mwaato) constructed?",
  "What is the traditional dugout canoe (Waato)?",
  "What is the distinction between Ilwana and Wailwana?"
];

export const KILWANA_QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'q1',
    question: "What does the Kilwana term \"A'LIMA\" refer to in traditional culture?",
    options: [
      "Harvesting wild honey in the forest",
      "The formal first stage of traditional marriage talks between families",
      "The installation of a new clan elder",
      "A seasonal flood celebration on River Tana"
    ],
    correctIndex: 1,
    explanation: "A'lima is the formal talk and first recognized stage of marriage discussions between the suitor's family and the young woman's parents.",
    category: "Kinship & Social"
  },
  {
    id: 'q2',
    question: "What is the traditional dugout canoe crafted by Wailwana fishermen called?",
    options: [
      "Mwaato",
      "Waato",
      "Irraanga",
      "Locholo"
    ],
    correctIndex: 1,
    explanation: "Waato is the traditional dugout canoe carved from tree trunks, essential for fishing and navigating the River Tana.",
    category: "Material Tools & Crafts"
  },
  {
    id: 'q3',
    question: "Who is the 'Hayu' in traditional Ilwana community structure?",
    options: [
      "A young dancer leading the Kitoko dance",
      "The revered traditional leader and supreme moral authority of the community",
      "The village blacksmith who crafts fishing spears",
      "The seasonal river tide watcher"
    ],
    correctIndex: 1,
    explanation: "The Hayu is the supreme customary leader and moral authority among the Wailwana, chosen for integrity, wisdom, and clan consensus.",
    category: "Governance & Leadership"
  },
  {
    id: 'q4',
    question: "Which of the following is a traditional cylindrical beehive hung in trees?",
    options: [
      "Mwaato",
      "Chika",
      "Tasi",
      "Dokwena"
    ],
    correctIndex: 0,
    explanation: "Mwaato is the traditional cylindrical beehive hollowed from tree trunks and sealed at the ends with wooden closures (Begele and Begelimo).",
    category: "Material Tools & Crafts"
  },
  {
    id: 'q5',
    question: "What is the traditional name of the River Tana in Kilwana?",
    options: [
      "Koras",
      "Chaana",
      "Kitoko",
      "Bale"
    ],
    correctIndex: 1,
    explanation: "Chaana is the Kilwana name for the River Tana, reverently known as Chaana Do Kweeto (Our Homeland River).",
    category: "Geography & Environment"
  },
  {
    id: 'q6',
    question: "Which instrument is a traditional percussion acoustic instrument struck rhythmically alongside drums?",
    options: [
      "Bunki",
      "Tasi",
      "Firiimbi",
      "Mwaato"
    ],
    correctIndex: 1,
    explanation: "Tasi is the traditional percussion acoustic instrument struck alongside the drum (Ngoma) to anchor dance rhythms.",
    category: "Music, Dance & Arts"
  },
  {
    id: 'q7',
    question: "What is 'Chika' in Wailwana river heritage and culinary traditions?",
    options: [
      "Wild forest honey harvested with smoke",
      "Small freshwater fish normally caught in large numbers with nets from the River Tana",
      "A carved ceremonial wooden headrest",
      "A roasted pumpkin stew"
    ],
    correctIndex: 1,
    explanation: "Chika refers to the small freshwater river fish normally caught in large numbers using nets along the River Tana, prepared fresh or sun-dried.",
    category: "Food & Gastronomy"
  },
  {
    id: 'q8',
    question: "How many major historical clans constitute the Ilwana Community?",
    options: [
      "4 clans",
      "6 clans",
      "8 clans",
      "12 clans"
    ],
    correctIndex: 2,
    explanation: "The Wailwana are organized into 8 major foundational clans: Wayu, Karari, Mamboya, Hajeji, Abole, Karayu, Ilaani, and Galgedha.",
    category: "Clans"
  }
];

export function answerHeritageQuery(rawQuery: string): AIAnswer {
  const query = rawQuery.toLowerCase().trim();

  // 0. GREETINGS & CASUAL HELLO
  if (
    query === 'hi' ||
    query === 'hello' ||
    query === 'hey' ||
    query === 'jambo' ||
    query === 'habari' ||
    query.startsWith('good morning') ||
    query.startsWith('good afternoon') ||
    query.startsWith('good evening')
  ) {
    return {
      summary: "Aaye! (Greetings!) Welcome to the Ilwana Cultural Knowledge Guide.",
      details: [
        "I am ready to help you discover authentic records of the Wailwana people, who have thrived along the River Tana for generations.",
        "You can ask me about our revered leader (The Hayu), our 8 traditional clans, traditional marriage customs (A'lima), music and dances, crafts like the canoe (Waato) and beehive (Mwaato), or our native Kilwana language."
      ],
      relatedTerms: GLOSSARY_DATA.filter(e => e.id === 'ilwana' || e.id === 'wailwana' || e.id === 'aaye'),
      suggestedPage: { id: 'history', title: 'History & Identity' },
      suggestedQuestions: [
        "Who is the Hayu?",
        "What are the 8 clans of the Wailwana?",
        "What is the traditional canoe (Waato)?"
      ]
    };
  }

  // 1. HAYU & GOVERNANCE & ELDERS
  if (
    query.includes('hayu') ||
    query.includes('govern') ||
    query.includes('leader') ||
    query.includes('chief') ||
    query.includes('king') ||
    query.includes('gasa') ||
    query.includes('elder') ||
    query.includes('court') ||
    query.includes('law') ||
    query.includes('council') ||
    query.includes('rule')
  ) {
    const hayuTerm = GLOSSARY_DATA.find(e => e.id === 'hayu');
    return {
      summary: "In the Ilwana social order, the Hayu serves as the supreme traditional leader, spiritual father, and highest moral authority.",
      details: [
        "The Hayu is selected from eligible lineages through council deliberation based on exceptional character, moral standing, deep knowledge of customary law, and justice.",
        "Under the Hayu is the Gasa (traditional supreme court and elder council), which arbitrates boundary questions and family disputes.",
        "The governance philosophy emphasizes restorative justice, community harmony, and consensus rather than punitive force."
      ],
      relatedTerms: hayuTerm ? [hayuTerm] : [],
      suggestedPage: { id: 'governance', title: 'Governance & Hayu' },
      suggestedQuestions: [
        "What is the Gasa elder court?",
        "What are the 8 clans of the Wailwana?",
        "How does the Gasa arbitrate community disputes?"
      ]
    };
  }

  // 2. CLANS
  if (
    query.includes('clan') ||
    query.includes('wayu') ||
    query.includes('karari') ||
    query.includes('mamboya') ||
    query.includes('hajeji') ||
    query.includes('abole') ||
    query.includes('karayu') ||
    query.includes('ilaani') ||
    query.includes('galgedha') ||
    query.includes('family') ||
    query.includes('lineage')
  ) {
    const clanTerms = GLOSSARY_DATA.filter(e => e.category === 'Clans').slice(0, 4);
    return {
      summary: "The Ilwana Community is unified through 8 foundational clans that regulate social alliances, mutual assistance, and governance representation.",
      details: [
        `The 8 clans are: ${CLANS_DATA.map(c => c.name).join(', ')}.`,
        "Each clan maintains respected elder representatives who sit in council deliberations and customary ceremonies.",
        "Clan lineage determines kinship ties, community responsibilities, and mutual assistance in farming and marriage."
      ],
      relatedTerms: clanTerms,
      suggestedPage: { id: 'social', title: 'Social & Culture (Our People)' },
      suggestedQuestions: [
        "Who is the Hayu?",
        "Explain the marriage process (A'lima)",
        "What is communal farming (Mkao)?"
      ]
    };
  }

  // 3. MARRIAGE & A'LIMA & RITES OF PASSAGE
  if (
    query.includes("a'lima") ||
    query.includes('alima') ||
    query.includes('marriage') ||
    query.includes('wedding') ||
    query.includes('dowry') ||
    query.includes('bride') ||
    query.includes('rite') ||
    query.includes('circumcision') ||
    query.includes('childbirth') ||
    query.includes('ukaamwaale')
  ) {
    const alimaTerm = GLOSSARY_DATA.find(e => e.id === 'alima');
    return {
      summary: "Traditional Ilwana marriage is a revered multistage process that cements lasting alliances between two extended families.",
      details: [
        "Stage 1 — A'lima (The Talk): The father or paternal uncle of the suitor visits the woman's family to formally declare intentions.",
        "Customary Courtesy: Even if the couple has privately agreed, the bride's parents traditionally receive the news with dignity as if hearing it for the first time.",
        "Mutual Respect & Bridewealth: Negotiations are conducted with deep mutual respect, ensuring honor and community goodwill."
      ],
      relatedTerms: alimaTerm ? [alimaTerm] : [],
      suggestedPage: { id: 'social', title: 'Social & Culture (Our People)' },
      suggestedQuestions: [
        "What happens during childbirth celebrations (Ukaamwaale)?",
        "What are the 8 clans of the Wailwana?",
        "Who is the Hayu?"
      ]
    };
  }

  // 4. MUSIC, DANCE & INSTRUMENTS
  if (
    query.includes('music') ||
    query.includes('dance') ||
    query.includes('instrument') ||
    query.includes('song') ||
    query.includes('tasi') ||
    query.includes('ngoma') ||
    query.includes('bunki') ||
    query.includes('firiimbi') ||
    query.includes('kitoko') ||
    query.includes('ukaamwaale') ||
    query.includes('koras') ||
    query.includes('mashingwe') ||
    query.includes('drum') ||
    query.includes('flute') ||
    query.includes('horn')
  ) {
    const musicTerms = GLOSSARY_DATA.filter(e => e.category === 'Music, Dance & Arts').slice(0, 4);
    return {
      summary: "Traditional music and dance express the spiritual pulse, joy, and collective identity of the Wailwana along the River Tana.",
      details: [
        "Traditional Dances: Include Kitoko (celebratory and festive dance), Ukaamwaale (childbirth celebration dance), Koras, Mashingwe, and Mkao (work and harvest dance).",
        "Core Instruments: The Ngoma (carved percussion drum), the Tasi (percussion instrument anchoring rhythm), the Bunki (ceremonial sounding horn), and the Firiimbi (flute and whistle).",
        "Song Poetry: Preserved in authentic Kilwana lyrics celebrating courage, river journeys, and elder wisdom."
      ],
      relatedTerms: musicTerms,
      suggestedPage: { id: 'arts', title: 'Arts & Music' },
      suggestedQuestions: [
        "What is the difference between Kitoko and Koras?",
        "What is the Tasi instrument?",
        "What songs are sung during Hayu celebrations?"
      ]
    };
  }

  // 5. FOOD & GASTRONOMY & AGRICULTURE
  if (
    query.includes('food') ||
    query.includes('eat') ||
    query.includes('dish') ||
    query.includes('crop') ||
    query.includes('banana') ||
    query.includes('chika') ||
    query.includes('fish') ||
    query.includes('honey') ||
    query.includes('agriculture') ||
    query.includes('farming') ||
    query.includes('pumpkin') ||
    query.includes('maize') ||
    query.includes('cook')
  ) {
    const foodTerms = GLOSSARY_DATA.filter(e => e.category === 'Food & Gastronomy').slice(0, 4);
    return {
      summary: "Wailwana cuisine harmoniously reflects the fertile soils of the River Tana floodplain, blending river fish, bananas, maize, and wild honey.",
      details: [
        "Chika: Small freshwater river fish normally caught in large numbers with nets from the River Tana, prepared fresh in stews or sun-dried.",
        "River Harvest: Fresh fish (Samaki) from the Tana prepared with fragrant spices, coconut, and greens.",
        "Honey Traditions: Pure honey harvested from traditional tree beehives (Mwaato) used for celebrations and hospitality."
      ],
      relatedTerms: foodTerms,
      suggestedPage: { id: 'material', title: 'Material Culture & Gastronomy' },
      suggestedQuestions: [
        "How is the beehive (Mwaato) constructed?",
        "What crops grow along River Tana (Chaana)?",
        "What is the dugout canoe (Waato)?"
      ]
    };
  }

  // 6. MATERIAL CULTURE & CRAFTS
  if (
    query.includes('craft') ||
    query.includes('canoe') ||
    query.includes('boat') ||
    query.includes('waato') ||
    query.includes('mwaato') ||
    query.includes('beehive') ||
    query.includes('basket') ||
    query.includes('mat') ||
    query.includes('irraanga') ||
    query.includes('locholo') ||
    query.includes('kapu') ||
    query.includes('tool') ||
    query.includes('mortar') ||
    query.includes('dokwena') ||
    query.includes('arrow') ||
    query.includes('bow') ||
    query.includes('uta') ||
    query.includes('tiyya')
  ) {
    const craftTerms = GLOSSARY_DATA.filter(e => e.category === 'Material Tools & Crafts').slice(0, 4);
    return {
      summary: "Wailwana material culture is renowned for masterful woodcarving, river craft, and intricate doum palm basketry.",
      details: [
        "Waato (Dugout Canoe): Masterfully carved from dense logs, designed specifically for navigating the currents of the River Tana.",
        "Mwaato (Beehive): Cylindrical hives hollowed from logs and capped with carved wooden discs (Begele and Begelimo).",
        "Irraanga & Locholo: Traditional floor mats and food storage baskets woven by mothers from natural doum palm fronds."
      ],
      relatedTerms: craftTerms,
      suggestedPage: { id: 'material', title: 'Material Culture & Crafts' },
      suggestedQuestions: [
        "What is the difference between Waato and Mwaato?",
        "What are Begele and Begelimo?",
        "How are Irraanga mats woven?"
      ]
    };
  }

  // 7. RELIGION & FAITH & BELIEFS
  if (
    query.includes('relig') ||
    query.includes('faith') ||
    query.includes('islam') ||
    query.includes('muslim') ||
    query.includes('god') ||
    query.includes('allah') ||
    query.includes('pray') ||
    query.includes('belief') ||
    query.includes('mosque')
  ) {
    return {
      summary: "The religious life of the Ilwana Community is predominantly grounded in Islam, practiced alongside deep reverence for ancestral moral integrity.",
      details: [
        "Islamic faith has been woven into community life for centuries through coastal and riverine trade networks.",
        "Daily routines, family blessings, and funeral observances are guided by Islamic practices.",
        "Traditional ethics such as hospitality, honesty, and peaceful arbitration align seamlessly with religious principles."
      ],
      relatedTerms: GLOSSARY_DATA.filter(e => e.category === 'Governance & Leadership').slice(0, 2),
      suggestedPage: { id: 'religion', title: 'Belief Systems (Our Faith)' },
      suggestedQuestions: [
        "Who is the Hayu?",
        "Explain the marriage process (A'lima)",
        "What are the 8 clans of the Wailwana?"
      ]
    };
  }

  // 8. GEOGRAPHY & RIVER TANA (CHAANA) & SETTLEMENTS
  if (
    query.includes('tana') ||
    query.includes('chaana') ||
    query.includes('river') ||
    query.includes('bura') ||
    query.includes('hola') ||
    query.includes('homeland') ||
    query.includes('geography') ||
    query.includes('village') ||
    query.includes('settle') ||
    query.includes('where do they live') ||
    query.includes('location') ||
    query.includes('gariseni') ||
    query.includes('minjila')
  ) {
    const geoTerms = GLOSSARY_DATA.filter(e => e.category === 'Geography & Environment').slice(0, 4);
    return {
      summary: "The homeland of the Wailwana spans the lush riparian basin along the River Tana, known in Kilwana as Chaana.",
      details: [
        "The river is the lifeblood of the community: Chaana Do Kweeto (Our Homeland River).",
        "Major historical settlement epicenters include Bura Constituency, Minjila, Gariseni, Hola, and numerous ancestral riverbank villages.",
        "The river supports recession agriculture, traditional fishing, cattle watering, and navigation."
      ],
      relatedTerms: geoTerms,
      suggestedPage: { id: 'geography', title: 'Geography & Homeland' },
      suggestedQuestions: [
        "What ancestral villages exist in Bura?",
        "How did the River Tana shape farming?",
        "What is the dugout canoe (Waato)?"
      ]
    };
  }

  // 9. NAME & IDENTITY (ILWANA VS WAILWANA) & ORIGIN
  if (
    query.includes('name') ||
    query.includes('identity') ||
    query.includes('malakote') ||
    query.includes('wailwana') ||
    query.includes('ilwana') ||
    query.includes('kilwana') ||
    query.includes('who are') ||
    query.includes('origin') ||
    query.includes('history') ||
    query.includes('people')
  ) {
    const idTerms = GLOSSARY_DATA.filter(e => e.id === 'ilwana' || e.id === 'wailwana' || e.id === 'kilwana');
    return {
      summary: "The correct, authentic identity is Ilwana (the heritage & community) and Wailwana (the people).",
      details: [
        "Ilwana: Refers to the collective heritage, culture, and community.",
        "Wailwana: Refers to the people themselves (singular: Mwilwana).",
        "Kilwana: The indigenous Bantu language spoken by the community.",
        "Historical Note: The external colonial label 'Malakote' is historically inaccurate; the community proudly preserves its genuine ancestral name Wailwana."
      ],
      relatedTerms: idTerms,
      suggestedPage: { id: 'history', title: 'History & Identity' },
      suggestedQuestions: [
        "Why is the name 'Malakote' inaccurate?",
        "What are the 8 clans of the Wailwana?",
        "Who is the Hayu?"
      ]
    };
  }

  // 10. TOKEN / KEYWORD SMART SEARCH ACROSS ALL GLOSSARY ENTRIES
  const tokens = query
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter(w => w.length > 2 && !['the', 'and', 'what', 'who', 'how', 'tell', 'about', 'they', 'with', 'from', 'this', 'that', 'are', 'was', 'were'].includes(w));

  const matchingTerms: GlossaryEntry[] = [];
  for (const entry of GLOSSARY_DATA) {
    const entryText = `${entry.term} ${entry.englishMeaning} ${entry.swahiliMeaning || ''} ${entry.culturalContext || ''}`.toLowerCase();
    const matches = tokens.some(tok => entryText.includes(tok));
    if (matches) {
      matchingTerms.push(entry);
    }
  }

  if (matchingTerms.length > 0) {
    const primary = matchingTerms[0];
    return {
      summary: `Documented heritage record for ${primary.term}: ${primary.englishMeaning}`,
      details: [
        primary.culturalContext || "Documented in community oral accounts as part of the cultural legacy of the Wailwana.",
        primary.swahiliMeaning ? `Swahili equivalent: ${primary.swahiliMeaning}` : "",
        `Category: ${primary.category}`
      ].filter(Boolean),
      relatedTerms: matchingTerms.slice(0, 4),
      suggestedPage: { id: 'glossary', title: 'Kilwana Glossary' },
      suggestedQuestions: [
        "Who is the Hayu?",
        "What are the 8 clans of the Wailwana?",
        "Explain the marriage process (A'lima)"
      ]
    };
  }

  // 11. INFORMATIVE FALLBACK
  return {
    summary: `Regarding "${rawQuery}": Here is what our community records document.`,
    details: [
      "The Ilwana Community preserves rich cultural knowledge spanning the Hayu governance system, 8 traditional clans, River Tana navigation, and oral literature.",
      "Explore the quick suggested prompts below to learn more about specific aspects of our heritage."
    ],
    relatedTerms: GLOSSARY_DATA.slice(0, 3),
    suggestedPage: { id: 'home', title: 'Ilwana Community Heritage' },
    suggestedQuestions: [
      "Who is the Hayu?",
      "What are the 8 clans of the Wailwana?",
      "What is the traditional canoe (Waato)?",
      "What is Chika?"
    ]
  };
}
