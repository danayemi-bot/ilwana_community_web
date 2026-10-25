export interface SongEntry {
  title: string;
  category: 'Kitoko' | 'Koras' | 'Mashingwe' | 'Mkao' | 'Hayu Celebrations';
  description: string;
  originalLyrics: string[];
  context: string;
}

export interface VillageSettlement {
  name: string;
  constituencyOrArea: string;
  description?: string;
}

export interface ClanInfo {
  name: string;
  roleDescription: string;
}

export interface TimelineEvent {
  era: string;
  title: string;
  description: string;
}

export const CLANS_DATA: ClanInfo[] = [
  { name: 'Wayu', roleDescription: 'One of the foundational clans, traditionally represented in the Gasa and respected for customary arbitration.' },
  { name: 'Karari', roleDescription: 'One of the eight major clans of the Wailwana, maintaining deep ancestral ties along the River Tana.' },
  { name: 'Mamboya', roleDescription: 'Recognized for preserving clan genealogies, family alliances, and collective agricultural mutual aid.' },
  { name: 'Hajeji', roleDescription: 'An integral clan contributing to village leadership councils and community dispute settlement.' },
  { name: 'Abole', roleDescription: 'Preserves traditional lineage knowledge and consultative responsibilities in the Ilwana social order.' },
  { name: 'Karayu', roleDescription: 'One of the historically recognized clans with vital roles in community cooperation and customary rites.' },
  { name: 'Ilaani', roleDescription: 'Maintains long-standing social networks and kinship responsibilities across Tana River settlements.' },
  { name: 'Galgedha', roleDescription: 'One of the primary clans forming the traditional governance and social framework of the Ilwana people.' }
];

export const SETTLEMENTS_DATA: VillageSettlement[] = [
  { name: 'Bura Constituency', constituencyOrArea: 'Tana River County', description: 'Long regarded as the primary cultural epicenter of the Ilwana Community with dozens of ancestral villages.' },
  { name: 'Minjila', constituencyOrArea: 'Tana River County', description: 'Key historical settlement area where families relocated during periods of river flooding and regional insecurity.' },
  { name: 'Gariseni', constituencyOrArea: 'Tana River County', description: 'Major southern cultural and administrative hub along the lower reaches of the River Tana.' },
  { name: 'Hola', constituencyOrArea: 'Tana River County', description: 'Central commercial and governmental township along the River Tana with historical Ilwana settlements.' },
  { name: 'Witu', constituencyOrArea: 'Coastal Region', description: 'Historical settlement area connected through ancient coastal migration and trade routes.' },
  { name: 'Shikaadabu', constituencyOrArea: 'Bura Constituency', description: 'Notable traditional village carrying historical Kilwana nomenclature.' },
  { name: 'Bale', constituencyOrArea: 'Bura Constituency', description: 'Ancestral agricultural and residential settlement along the river floodplain.' },
  { name: 'Hosingo', constituencyOrArea: 'Bura Constituency', description: 'Historic village renowned for community gatherings and elder assemblies.' },
  { name: 'Villages One to Ten', constituencyOrArea: 'Bura Constituency', description: 'Consecutive settlements organized along irrigation and agricultural canal areas of Bura.' },
  { name: 'Damkha', constituencyOrArea: 'Bura Constituency', description: 'Traditional settlement noted for fertile agricultural lands and flood recessional farming.' },
  { name: 'Khumbi', constituencyOrArea: 'Bura Constituency', description: 'Riverbank settlement deeply associated with fishing and beekeeping traditions.' },
  { name: 'Ghamano', constituencyOrArea: 'Bura Constituency', description: 'Historic settlement preserving Kilwana oral heritage and village council traditions.' },
  { name: 'Shabaha', constituencyOrArea: 'Bura Constituency', description: 'Ancestral village with active family lineages and traditional crafts.' },
  { name: 'Kazamoyo', constituencyOrArea: 'Bura Constituency', description: 'Communal settlement with historical resilience through environmental shifts.' },
  { name: 'Wadesa', constituencyOrArea: 'Bura Constituency', description: 'Traditional agricultural village cultivating maize, rice, and pumpkins.' },
  { name: 'Mambosasa', constituencyOrArea: 'Bura Constituency', description: 'Established settlement with deep roots in River Tana cultural traditions.' },
  { name: 'Mudere', constituencyOrArea: 'Bura Constituency', description: 'Historic village known for communal farming (Mkao) and elder arbitration.' },
  { name: 'Shakini', constituencyOrArea: 'Bura Constituency', description: 'Settlement along the riverbank rich in beekeeping and traditional canoe transport.' },
  { name: 'Ghamorori', constituencyOrArea: 'Bura Constituency', description: 'Village community actively maintaining cultural celebrations and dances.' },
  { name: 'Ifubo', constituencyOrArea: 'Bura Constituency', description: 'Traditional village named in Kilwana commemorating local natural landmarks.' },
  { name: 'Khabhacho', constituencyOrArea: 'Bura Constituency', description: 'Ancestral settlement preserving customary governance under local elders.' },
  { name: 'Kula', constituencyOrArea: 'Bura Constituency', description: 'Historic village home to traditional crafts and oral storytellers.' },
  { name: 'Mataagala', constituencyOrArea: 'Bura Constituency', description: 'Settlement with rich fishing and floodplain cultivation practices.' },
  { name: 'Naanighi', constituencyOrArea: 'Bura Constituency', description: 'Notable village in northern Bura maintaining close social cooperation.' },
  { name: 'Ghamudhuro', constituencyOrArea: 'Bura Constituency', description: 'Historic settlement situated on ancestral lands along the river course.' },
  { name: 'Kokora', constituencyOrArea: 'Bura Constituency', description: 'Traditional village with a long history of family and clan continuity.' },
  { name: 'Vango', constituencyOrArea: 'Bura Constituency', description: 'Riverbank village active in flood recessional farming and beekeeping.' },
  { name: 'Madogo', constituencyOrArea: 'Tana River / Garissa Border', description: 'Significant trading and multi-community hub, marked by close historic ties with the Munyoya.' },
  { name: 'Adele', constituencyOrArea: 'Bura Constituency', description: 'Agricultural settlement cultivating melon (Makaaruka) and staple grains.' },
  { name: 'Mororo', constituencyOrArea: 'Tana River County', description: 'Settlement bordering Garissa, noted for trade, pastoral interaction, and multilingualism.' },
  { name: 'Ziwani', constituencyOrArea: 'Tana River County', description: 'Settlement situated near natural oxbow lakes and wetlands providing fish.' },
  { name: 'Bakuyu', constituencyOrArea: 'Bura Constituency', description: 'Traditional village community preserving local Kilwana dialectal nuances.' },
  { name: 'Mathengeni', constituencyOrArea: 'Bura Constituency', description: 'Village named in connection with local vegetation and riverbank terrain.' },
  { name: 'Deeri', constituencyOrArea: 'Bura Constituency', description: 'Historic settlement preserving generational oral histories and lineage records.' }
];

export const SONGS_DATA: SongEntry[] = [
  {
    title: 'Kitoko Song One',
    category: 'Kitoko',
    description: 'A traditional wedding and celebratory song accompanying the Kitoko dance. Features rhythmic repetition that guides dancers and collective participation.',
    originalLyrics: [
      'Abu Fauzia, siya kunilolaa niteleza wato, × 2',
      'Siyaakunilolaa.',
      'Kikoo ni kikolo, siya kunilolaa niteleza wato, × 2',
      'Siyaakunilolaa.'
    ],
    context: 'The song uses melodic repetition allowing new dancers to step into the ring effortlessly. The exact phrasing has been preserved in its documented oral form.'
  },
  {
    title: 'Kitoko Song Two',
    category: 'Kitoko',
    description: 'A celebrated Kitoko performance song commemorating social figures and communal harmony.',
    originalLyrics: [
      'Siya lokoo Hasani daa mukewa, siyalokoo, × 2',
      'Siya lokoo haya Hasani ana wenye.',
      'Siya lokoo Hasani daa mukewa, siyalokoo.',
      'Siya lokoo haya Hasani ni mufai.',
      'Siya lokoo Hasani daa mukewa, siyalokoo.'
    ],
    context: 'Performs call-and-response dynamics where a lead soloist recites the opening phrase and the chorus of dancers harmonizes the repeated refrains.'
  },
  {
    title: 'Koras Song One',
    category: 'Koras',
    description: 'A rhythmic performance piece belonging to the Koras tradition, uniquely associated with women.',
    originalLyrics: [
      'Danimoo, ee, × 2',
      'Needa, ee.',
      'Namoona, ee.',
      'Namwabela.',
      'Baamba, cha, Kabambicha, × 6.'
    ],
    context: 'Accompanied by synchronized handclaps and rhythmic foot steps, creating a communal cadence for women during major life milestone festivities.'
  },
  {
    title: 'Koras Song Two',
    category: 'Koras',
    description: 'A memorable Koras song emphasizing communal recognition and shared identity.',
    originalLyrics: [
      'Hata ukafala buuti,',
      'Tukumanyi iziina.',
      'Hata ukamulaila,',
      'Tukumanyi iziina.',
      'Hata ukabicha nyubeni,',
      'Tukumanyi iziina.',
      'Hata ukafala kodon-kodoo,',
      'Tukumanyi iziinaa.'
    ],
    context: 'The repeated refrain "Tukumanyi iziina" ("We know your name") celebrates communal memory, dignity, and recognition of kin wherever they go or whatever they wear.'
  },
  {
    title: 'Mashingwe Song One',
    category: 'Mashingwe',
    description: 'A lively dance song sung during high-spirited community gatherings and festivals.',
    originalLyrics: [
      'Mashingwe dah, × 2',
      'Eee uwe suni dah.',
      'Dah dah dah, dah dah dah, dah dah dah, dah, × 3.'
    ],
    context: 'Rhythmic vocalizations mimic and synchronize with the percussion beat of the Ngoma drum, maintaining tempo for energetic dancers.'
  },
  {
    title: 'Mashingwe Song Two',
    category: 'Mashingwe',
    description: 'A traditional verse performed during Mashingwe communal dances.',
    originalLyrics: [
      'Ilache lache bagwe,',
      'Icheleele bagwe,',
      'Isiye siye bagwe,',
      'Jaweenye bagwe.'
    ],
    context: 'Maintains an infectious metric cadence passed down through generations through participatory listening rather than written transcription.'
  },
  {
    title: 'The Mkao Song (Collective Work)',
    category: 'Mkao',
    description: 'The traditional work song performed during communal labor (Mkao), such as clearing farm plots or raising home timbers.',
    originalLyrics: [
      'Kaa yoyo, oo.',
      'Unwele mazya, Mkao.',
      'Kaa yoyo, oo.',
      'Unwele mazya, Mkao.'
    ],
    context: 'Music in Ilwana culture was not isolated to leisure; this song transformed arduous physical work into an enjoyable collective enterprise of mutual assistance.'
  },
  {
    title: 'Song for Hayu Celebrations',
    category: 'Hayu Celebrations',
    description: 'The official traditional hymn performed during the annual December celebrations honouring the Hayu (King).',
    originalLyrics: [
      'Hayu yweto, manya.',
      'Omodo mokolo, manya.',
      'Hayu yweto, oo.',
      'Hayu yweto, manya.'
    ],
    context: 'Sung directly in the presence of the Hayu to honor his wisdom, moral leadership, and protection of community welfare, linking political institution with poetic art.'
  }
];

export const TIMELINE_DATA: TimelineEvent[] = [
  {
    era: 'Distant Ancestral Origin',
    title: 'Bantu Expansion from Congo Basin',
    description: 'Ancestors of the Ilwana originate from the Congo Basin in Central Africa, migrating eastward alongside fellow Bantu-speaking communities in search of fertile soils, security, and peaceful settlement.'
  },
  {
    era: 'Maritime Coastal Passage',
    title: 'Comoros Islands & Jahazi Navigation',
    description: 'Continued regional conflicts along the eastern coastline led the community to navigate coastal waters using jahazi wooden sailing vessels, settling temporarily in the Comoros Islands.'
  },
  {
    era: '12th – 15th Century',
    title: 'The Era of Shungwaya',
    description: 'Oral traditions remember Shungwaya (located near the modern Lamu and southern Somalia boundary) as a flourishing civilizational settlement for coastal Bantu peoples prior to historical dispersal.'
  },
  {
    era: 'Riverine Settlement',
    title: 'Arrival along the River Tana',
    description: 'Moving southwards along the course of the River Tana (Chaana), the Wailwana established their permanent homeland on its fertile floodplains, developing farming, fishing, and beekeeping systems.'
  },
  {
    era: 'Institutions & Continuity',
    title: 'Establishment of the Hayu and Gasa',
    description: 'The community established its enduring governance structures: the supreme cultural office of the Hayu (King) and the consultative Gasa council for restorative justice and land boundary arbitration.'
  },
  {
    era: 'Late 20th Century to Present',
    title: 'Resilience, Dispersal & Cultural Preservation',
    description: 'Despite environmental challenges (seasonal floods, invasive Mathenge trees), historical Shifta raids, and urban dispersal to Garissa, Mombasa, and Nairobi, the community actively maintains its identity, language, and cultural institutions.'
  }
];
