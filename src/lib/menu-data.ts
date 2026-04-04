import type { MenuItem, MenuCategory } from '@/types'

export type MenuCategoryEntry = {
  id: MenuCategory
  label: string
  labelNl: string
  shortLabel: string
}

export const categoryLabels: Record<MenuCategory, { label: string; labelNl: string }> = {
  starters: {
    label: 'Indian Starters and Street Food in Den Haag',
    labelNl: 'Indiase Starters en Streetfood in Den Haag',
  },
  soups: {
    label: 'Indian Soups in Den Haag',
    labelNl: 'Indiase Soepen in Den Haag',
  },
  tandoori: {
    label: 'Tandoori in Den Haag  -  Clay Oven Grill Specialties',
    labelNl: 'Indiase Tandoori Gerechten in Den Haag  -  Specialiteiten uit de Kleistenen Oven',
  },
  'mains-veg': {
    label: 'Vegetarian Indian Curries in Den Haag',
    labelNl: 'Vegetarische Indiase Curries in Den Haag',
  },
  'mains-chicken': {
    label: 'Chicken Curries in Den Haag',
    labelNl: 'Kip Curries in Den Haag',
  },
  'mains-lamb': {
    label: 'Lamb and Mutton Curries in Den Haag',
    labelNl: 'Lam en Schapenvlees Curries in Den Haag',
  },
  'indo-chinese': {
    label: 'Indo-Chinese Dishes in Den Haag',
    labelNl: 'Indo-Chinese Gerechten in Den Haag',
  },
  biryani: {
    label: 'Biryani in Den Haag',
    labelNl: 'Biryani in Den Haag',
  },
  breads: {
    label: 'Indian Breads Baked Fresh in the Tandoor',
    labelNl: 'Indiaas Brood Vers Gebakken in de Tandoor',
  },
  'rice-sides': {
    label: 'Rice and Sides',
    labelNl: 'Rijst en Bijgerechten',
  },
  desserts: {
    label: 'Indian Desserts in Den Haag',
    labelNl: 'Indiase Desserts in Den Haag',
  },
  drinks: {
    label: 'Drinks and Lassi in Den Haag',
    labelNl: 'Dranken en Lassi in Den Haag',
  },
}

export const menuItems: MenuItem[] = [
  // ─── STARTERS ────────────────────────────────────────────────────────────
  {
    id: 'onion-bhaji',
    name: 'Onion Bhaji',
    price: 8,
    category: 'starters',
    dietary: ['veg', 'halal'],
    image: '/images/dishes/onion-bhaji.webp',
    description:
      'Crispy onion fritters seasoned with authentic Indian spices, deep fried to golden perfection and served with fresh mint and tangy tamarind chutney. A popular Indian street food starter in Den Haag for lovers of crunchy, mildly spicy snacks.',
    descriptionNl:
      'Knapperige uienbeignets op smaak gebracht met authentieke Indiase specerijen, goudbruin gefrituurd en geserveerd met verse munt en pittige tamarindesaus. Een populair Indiaas streetfood voorgerecht in Den Haag voor liefhebbers van knapperige en licht pittige snacks.',
  },
  {
    id: 'samosa',
    name: 'Samosa (Veg, Lamb, Chicken)',
    price: 8,
    category: 'starters',
    dietary: ['halal'],
    image: '/images/dishes/veg-samosa.webp',
    description:
      'Crisp triangular samosas stuffed with a flavourful mix of spiced potatoes, chickpeas or minced meat, fried until perfectly crunchy. A classic Indian starter in Den Haag enjoyed for its bold flavours and mildly spicy filling.',
    descriptionNl:
      "Knapperige driehoekige samosa's gevuld met een smaakvolle mix van gekruide aardappel, kikkererwten of lams of kipgehakt. Perfect krokant gefrituurd en geliefd in Den Haag vanwege de volle smaken en licht pittige vulling.",
  },
  {
    id: 'veg-samosa-chaat',
    name: 'Veg Samosa Chaat',
    price: 10,
    category: 'starters',
    dietary: ['veg', 'halal'],
    featured: true,
    image: '/images/dishes/samosa-chaat.webp',
    description:
      'A crushed samosa topped with cool yogurt, chickpeas, fresh mint, coriander, tamarind chutney and mild spices. A sweet, tangy and mildly spicy Indian chaat dish that is highly popular in Den Haag.',
    descriptionNl:
      'Verpletterde samosa belegd met koele yoghurt, kikkererwten, verse munt, koriander, tamarindesaus en milde specerijen. Een zoet, zuur en licht pittig Indiaas chaat gerecht dat erg geliefd is in Den Haag.',
  },
  {
    id: 'pani-puri',
    name: 'Pani Puri',
    price: 8,
    category: 'starters',
    dietary: ['veg', 'halal'],
    featured: true,
    image: '/images/dishes/pani-puri.webp',
    description:
      'Crispy hollow puris filled with spicy potato and chickpea mix served with tangy mint and tamarind water. A famous Indian street food snack loved in Den Haag for its burst of spicy and refreshing flavours.',
    descriptionNl:
      "Knapperige holle puri's gevuld met een pittige aardappel en kikkererwtenmix en geserveerd met verfrissend munt en tamarindewater. Een beroemd Indiaas streetfood gerecht dat in Den Haag geliefd is vanwege de explosie van pittige en frisse smaken.",
  },
  {
    id: 'dahi-puri',
    name: 'Dahi Puri',
    price: 8,
    category: 'starters',
    dietary: ['veg', 'halal'],
    image: '/images/dishes/dahi-puri.webp',
    description:
      'Crispy puris filled with potatoes and chickpeas topped with cool yogurt, mint, tamarind chutney and mild Indian spices. A perfect balance of creamy, sweet, tangy and mild spice loved by chaat lovers in Den Haag.',
    descriptionNl:
      "Knapperige puri's gevuld met aardappel en kikkererwten en belegd met koele yoghurt, munt, tamarindesaus en milde Indiase specerijen. Een perfecte balans van romig, zoet, zuur en licht pittig en populair bij chaat liefhebbers in Den Haag.",
  },
  {
    id: 'aloo-tikki',
    name: 'Aloo Tikki',
    price: 8,
    category: 'starters',
    dietary: ['veg', 'vegan', 'halal'],
    image: '/images/dishes/aloo-tikki.webp',
    description:
      'Golden shallow fried potato patties seasoned with aromatic Indian spices, served with mint and tamarind chutney. A mildly spicy and flavour packed vegetarian favourite in Den Haag.',
    descriptionNl:
      'Goudbruine aardappelkoekjes gebakken met aromatische Indiase specerijen en geserveerd met munt en tamarindesaus. Een smaakvol en licht pittig vegetarisch gerecht dat geliefd is in Den Haag.',
  },
  {
    id: 'papdi-chaat',
    name: 'Papdi Chaat',
    price: 8,
    category: 'starters',
    dietary: ['veg', 'halal'],
    image: '/images/dishes/papdi-chaat.webp',
    description:
      'Crispy flour crackers topped with potatoes, chickpeas, yogurt, mint chutney, tamarind chutney and mild Indian spices. A sweet, spicy and tangy chaat experience loved across Den Haag.',
    descriptionNl:
      'Knapperige meelcrackers belegd met aardappelen, kikkererwten, yoghurt, muntchutney, tamarindesaus en milde Indiase specerijen. Een zoet, pittig en fris chaat gerecht dat populair is in heel Den Haag.',
  },
  {
    id: 'mixed-chaat',
    name: 'Mixed Chaat',
    price: 12,
    category: 'starters',
    dietary: ['veg', 'halal'],
    featured: true,
    image: '/images/dishes/mixed-chaat.webp',
    description:
      'A flavourful chaat platter featuring samosa, aloo tikki, crushed papdi, yogurt, mint and tamarind chutney with mild Indian spices. A sweet, spicy and crunchy street food favourite in Den Haag.',
    descriptionNl:
      'Een smaakvolle chaat schotel met samosa, aloo tikki, verpletterde papdi, yoghurt, munt en tamarindesaus met milde Indiase specerijen. Een zoet, pittig en knapperig streetfood gerecht dat geliefd is in Den Haag.',
  },
  {
    id: 'plain-papad',
    name: 'Plain Papad',
    price: 3.5,
    category: 'starters',
    dietary: ['veg', 'vegan', 'halal'],
    image: '/images/dishes/plain-papad.webp',
    description:
      'Thin and crispy roasted lentil cracker lightly seasoned for a mild and crunchy Indian snack experience. A popular light starter in Den Haag.',
    descriptionNl:
      'Dunne en knapperige geroosterde linzencracker, licht gekruid voor een milde en knapperige Indiase snack. Een populair licht voorgerecht in Den Haag.',
  },
  {
    id: 'masala-papad',
    name: 'Masala Papad',
    price: 5,
    category: 'starters',
    dietary: ['veg', 'halal'],
    image: '/images/dishes/masala-papad.webp',
    description:
      'Crispy lentil cracker topped with onions, tomatoes, coriander and mild Indian spices offering a fresh, slightly spicy and crunchy start to your Indian meal.',
    descriptionNl:
      'Knapperige linzencracker belegd met ui, tomaat, koriander en milde Indiase specerijen. Een frisse, licht pittige en knapperige start van uw Indiase maaltijd.',
  },

  // ─── SOUPS ───────────────────────────────────────────────────────────────
  {
    id: 'tomato-soup',
    name: 'Tomato Soup',
    price: 7.5,
    category: 'soups',
    dietary: ['veg', 'halal'],
    image: '/images/dishes/tomato-soup.webp',
    description:
      'A creamy tomato based Indian soup made with fresh tomatoes, mild spices, herbs and a smooth buttery texture. A warm, mildly spiced comfort starter popular among Indian food lovers in Den Haag and perfect for dine-in, takeaway and delivery.',
    descriptionNl:
      'Romige tomatensoep gemaakt met verse tomaten, milde specerijen, kruiden en een zachte romige textuur. Een warme, licht pittige comfort soep die populair is bij liefhebbers van Indiaas eten in Den Haag en ideaal is voor ter plekke eten, afhalen of bezorgen.',
  },
  {
    id: 'lentil-soup',
    name: 'Lentil Soup',
    price: 7.5,
    category: 'soups',
    dietary: ['veg', 'vegan', 'halal'],
    image: '/images/dishes/dal-soup.webp',
    description:
      'A classic Indian yellow lentil soup slow cooked with garlic, ginger, mild spices and herbs for a comforting and lightly spiced flavour. A healthy and nourishing vegetarian soup loved by guests in Den Haag.',
    descriptionNl:
      'Een klassieke Indiase gele linzensoep langzaam gekookt met knoflook, gember, milde specerijen en kruiden voor een verwarmende en licht pittige smaak. Een gezonde en voedzame vegetarische soep die geliefd is bij gasten in Den Haag.',
  },
  {
    id: 'veg-monchow-soup',
    name: 'Veg Monchow Soup',
    price: 7.5,
    category: 'soups',
    dietary: ['veg', 'vegan', 'halal'],
    image: '/images/dishes/manchow-soup.webp',
    description:
      'A Indo-Chinese vegetable soup made with mixed vegetables, crispy noodles, soy, garlic, ginger and medium Asian spices for a warm, slightly spicy flavour. A popular fusion soup in Den Haag known for its bold taste.',
    descriptionNl:
      'Een Indo-Chinese groentesoep gemaakt met gemengde groenten, knapperige noedels, sojasaus, knoflook, gember en medium Aziatische specerijen voor een warme, licht pittige smaak. Een populaire fusion soep in Den Haag die bekend staat om zijn uitgesproken smaak.',
  },
  {
    id: 'chicken-soup',
    name: 'Chicken Soup',
    price: 8.5,
    category: 'soups',
    dietary: ['halal'],
    image: '/images/dishes/chicken-soup.webp',
    description:
      'A flavourful Indian style chicken soup made with shredded chicken, garlic, ginger, herbs and mild spices for a warm comforting taste. A light and protein rich starter enjoyed by families in Den Haag.',
    descriptionNl:
      'Een smaakvolle Indiase kippensoep gemaakt met stukjes kip, knoflook, gember, kruiden en milde specerijen voor een warme en comfortabele smaak. Een lichte en eiwitrijke soep die geliefd is bij families in Den Haag.',
  },

  // ─── TANDOORI ────────────────────────────────────────────────────────────
  {
    id: 'paneer-tikka',
    name: 'Paneer Tikka',
    price: 18,
    category: 'tandoori',
    dietary: ['veg', 'halal'],
    image: '/images/dishes/paneer-tikka.webp',
    description:
      'Soft Indian paneer cubes marinated in yogurt, ginger, garlic, lemon and mild spices then grilled in the clay tandoor with onions and peppers. A mildly spicy vegetarian tandoori favourite in Den Haag with smoky and rich flavours.',
    descriptionNl:
      'Zachte Indiase paneerblokjes gemarineerd in yoghurt, gember, knoflook, citroen en milde specerijen en daarna gegrild in de klei tandoor met ui en paprika. Een mild pittige vegetarische tandoori favoriet in Den Haag met rokerige en volle smaken.',
  },
  {
    id: 'malai-soya-chaap',
    name: 'Malai Soya Chaap',
    price: 18,
    category: 'tandoori',
    dietary: ['veg', 'halal'],
    featured: true,
    image: '/images/dishes/malai-soya-chap.webp',
    description:
      'Tender soya chaap pieces marinated in creamy yogurt, cashew paste, mild spices and herbs then grilled in the tandoor for a soft, rich and lightly spiced finish. A popular vegetarian tandoori speciality in Den Haag.',
    descriptionNl:
      'Zachte sojabrokjes gemarineerd in romige yoghurt, cashewpasta, milde specerijen en kruiden en daarna gegrild in de tandoor voor een zachte, volle en licht pittige smaak. Een populaire vegetarische tandoori specialiteit in Den Haag.',
  },
  {
    id: 'achari-soya-chaap',
    name: 'Achari Soya Chaap',
    price: 18,
    category: 'tandoori',
    dietary: ['veg', 'halal', 'spicy'],
    image: '/images/dishes/soya-chaap-achari.webp',
    description:
      'Soya chaap marinated in Indian pickle spices, mustard, lemon, yogurt and medium hot flavours then grilled in the tandoor for a tangy and spicy finish. A bold vegetarian tandoori dish loved in Den Haag.',
    descriptionNl:
      'Soya chaap gemarineerd in Indiase augurk specerijen, mosterd, citroen, yoghurt en medium pittige smaken en daarna gegrild in de tandoor voor een frisse en pittige afwerking. Een uitgesproken vegetarisch tandoori gerecht dat geliefd is in Den Haag.',
  },
  {
    id: 'tandoori-prawn-fish',
    name: 'Tandoori Prawn / Fish',
    price: 24.5,
    category: 'tandoori',
    dietary: ['halal'],
    image: '/images/dishes/tandoori-prawns.webp',
    description:
      'Fresh prawns or fish fillets marinated in yogurt, lemon, garlic, ginger and medium Indian spices then roasted in the clay tandoor for a smoky and juicy seafood tandoori flavour. A premium choice for seafood lovers in Den Haag.',
    descriptionNl:
      'Verse garnalen of visfilets gemarineerd in yoghurt, citroen, knoflook, gember en medium Indiase specerijen en daarna geroosterd in de klei tandoor voor een rokerige en sappige tandoori zeevruchten smaak. Een premium keuze voor liefhebbers van zeevruchten in Den Haag.',
  },
  {
    id: 'tandoori-chicken',
    name: 'Tandoori Chicken',
    price: 22.5,
    category: 'tandoori',
    dietary: ['halal', 'spicy'],
    featured: true,
    image: '/images/dishes/tandoori-chicken.webp',
    description:
      'Chicken on the bone marinated overnight in yogurt, lemon, garlic, ginger and medium hot Indian spices then grilled in the tandoor for a smoky and slightly spicy flavour. A classic Indian tandoori dish enjoyed widely in Den Haag.',
    descriptionNl:
      'Kip met bot die een nacht is gemarineerd in yoghurt, citroen, knoflook, gember en medium pittige Indiase specerijen en daarna in de tandoor gegrild voor een rokerige en licht pittige smaak. Een klassiek Indiaas tandoori gerecht dat veel wordt genoten in Den Haag.',
  },
  {
    id: 'chicken-tikka',
    name: 'Chicken Tikka',
    price: 20.5,
    category: 'tandoori',
    dietary: ['halal'],
    image: '/images/dishes/chicken-tikka.webp',
    description:
      'Boneless chicken fillets marinated in yogurt, lemon, garlic, ginger and medium Indian spices then roasted in the tandoor for a juicy, smoky and slightly spicy tandoori flavour. A top choice for grilled chicken lovers in Den Haag.',
    descriptionNl:
      'Kipfilet zonder bot gemarineerd in yoghurt, citroen, knoflook, gember en medium Indiase specerijen en daarna in de tandoor geroosterd voor een sappige, rokerige en licht pittige tandoori smaak. Een topkeuze voor liefhebbers van gegrilde kip in Den Haag.',
  },
  {
    id: 'chicken-malai-tikka',
    name: 'Chicken Malai Tikka',
    price: 20.5,
    category: 'tandoori',
    dietary: ['halal', 'mild'],
    image: '/images/dishes/chicken-malai-tikka.webp',
    description:
      'Creamy boneless chicken pieces marinated with yogurt, cream, cheese, garlic, ginger and mild spices then grilled in the tandoor for a rich and tender finish. A mild, smooth and flavourful tandoori favourite in Den Haag.',
    descriptionNl:
      'Romige kipstukjes zonder bot, gemarineerd met yoghurt, room, kaas, knoflook, gember en milde specerijen en daarna gegrild in de tandoor voor een zachte en volle smaak. Een milde, romige en smaakvolle tandoori favoriet in Den Haag.',
  },
  {
    id: 'chicken-hariyali-tikka',
    name: 'Chicken Hariyali Tikka',
    price: 20.5,
    category: 'tandoori',
    dietary: ['halal'],
    image:
      '/images/dishes/chicken-hariyali-tikka.webp',
    description:
      'Green marinated boneless chicken blended with spinach, coriander, mint, yogurt, garlic, ginger and medium spices then tandoor grilled for a fresh and lightly spicy flavour. A popular herbal tandoori option in Den Haag.',
    descriptionNl:
      'Groen gemarineerde kip zonder bot, gemengd met spinazie, koriander, munt, yoghurt, knoflook, gember en medium specerijen en daarna gegrild in de tandoor voor een frisse en licht pittige smaak. Een populaire kruidige tandoori optie in Den Haag.',
  },
  {
    id: 'chicken-lasooni-tikka',
    name: 'Chicken Lasooni Tikka',
    price: 20.5,
    category: 'tandoori',
    dietary: ['halal'],
    image: '/images/dishes/chicken-lasooni-tikka.webp',
    description:
      'Garlic rich tandoori chicken marinated in yogurt, lemon, fresh garlic paste, ginger and mild to medium spices then roasted in the tandoor. A bold and aromatic tandoori speciality loved in Den Haag.',
    descriptionNl:
      'Kip zonder bot rijk aan knoflook, gemarineerd in yoghurt, citroen, verse knoflookpasta, gember en milde tot medium specerijen en daarna geroosterd in de tandoor. Een uitgesproken en aromatische tandoori specialiteit, geliefd in Den Haag.',
  },
  {
    id: 'lambs-seekh-kebab',
    name: 'Lambs Seekh Kebab',
    price: 22.5,
    category: 'tandoori',
    dietary: ['halal', 'spicy'],
    image: '/images/dishes/mutton-seekh-kebab.webp',
    description:
      'Minced lamb blended with onions, coriander, herbs, garlic, ginger and medium spices then grilled on skewers in the clay oven for a smoky, spicy and juicy finish. A signature kebab dish in Den Haag.',
    descriptionNl:
      'Lamsgehakt gemengd met ui, koriander, kruiden, knoflook, gember en medium specerijen en daarna op spiesen gegrild in de kleioven voor een rokerige, pittige en sappige afwerking. Een kenmerkend kebab gerecht in Den Haag.',
  },
  {
    id: 'chicken-seekh-kebab',
    name: 'Chicken Seekh Kebab',
    price: 20.5,
    category: 'tandoori',
    dietary: ['halal'],
    image:
      '/images/dishes/chicken-seekh-kebab.webp',
    description:
      'Minced chicken mixed with onions, coriander, herbs, garlic, ginger and mild to medium spices then grilled on skewers in the tandoor for a juicy and mildly spicy kebab flavour. A popular grilled chicken choice in Den Haag.',
    descriptionNl:
      'Kipgehakt gemengd met ui, koriander, kruiden, knoflook, gember en milde tot medium specerijen en daarna op spiesen gegrild in de tandoor voor een sappige en licht pittige kebabsmaak. Een populaire gegrilde kipkeuze in Den Haag.',
  },
  {
    id: 'chopras-non-veg-platter',
    name: "Chopra's Non Veg Platter",
    price: 30,
    category: 'tandoori',
    dietary: ['halal'],
    featured: true,
    image: '/images/dishes/chopras-non-veg-platter.webp',
    description:
      "A premium tandoori platter featuring chicken tikka, malai tikka, hariyali tikka, seekh kebab and tandoori chicken, marinated with a blend of mild to medium Indian spices then roasted in the tandoor. The perfect mixed grill to taste the best tandoori flavours in Den Haag.",
    descriptionNl:
      'Een premium tandoori schotel met chicken tikka, malai tikka, hariyali tikka, seekh kebab en tandoori kip, gemarineerd met een mix van milde tot medium Indiase specerijen en geroosterd in de tandoor. De perfecte mixed grill om de beste tandoori smaken van Den Haag te proeven.',
  },

  // ─── VEGETARIAN MAINS ────────────────────────────────────────────────────
  {
    id: 'dal-makhani',
    name: 'Dal Makhani',
    price: 18.5,
    category: 'mains-veg',
    dietary: ['veg', 'halal'],
    image: '/images/dishes/dal-makhani.webp',
    description:
      'A rich black lentil curry slow cooked with butter, cream, garlic, tomatoes and mild to medium Indian spices for a silky, creamy flavour. A signature vegetarian Indian curry in Den Haag, served with your choice of plain rice or plain naan.',
    descriptionNl:
      'Romige zwarte linzencurry langzaam gekookt met boter, room, knoflook, tomaat en milde tot medium Indiase specerijen voor een zachte volle smaak. Een geliefde vegetarische Indiase curry in Den Haag, vers geserveerd met keuze uit plain rijst of plain naan.',
  },
  {
    id: 'dal-tadka',
    name: 'Dal Tadka',
    price: 15,
    category: 'mains-veg',
    dietary: ['veg', 'halal'],
    image: '/images/dishes/dal-tadka.webp',
    description:
      'A yellow lentil curry tempered with cumin, garlic, onions, turmeric and mild Indian spices. A light, healthy and warming vegetarian curry enjoyed across Den Haag, served with your choice of plain rice or plain naan.',
    descriptionNl:
      'Een gele linzencurry op smaak gebracht met komijn, knoflook, ui, kurkuma en milde Indiase specerijen. Een lichte en verwarmende vegetarische curry die populair is in Den Haag, geserveerd met zachte naan.',
  },
  {
    id: 'rajma-raseela',
    name: 'Rajma Raseela',
    price: 15,
    category: 'mains-veg',
    dietary: ['veg', 'vegan', 'halal'],
    image: '/images/dishes/rajma-masala.webp',
    description:
      'Kidney beans cooked in a rich tomato-based curry with garlic, ginger and mild spices for a hearty and comforting vegetarian dish. A North Indian classic enjoyed in Den Haag, served with plain rice or naan.',
    descriptionNl:
      'Kidneybonen gekookt in een rijke tomatengebaseerde curry met knoflook, gember en milde specerijen voor een hartelijk en verwarmend vegetarisch gerecht. Een Noord-Indiaas klassiek geliefd in Den Haag, geserveerd met rijst of naan.',
  },
  {
    id: 'chana-masala',
    name: 'Chana Masala',
    price: 15,
    category: 'mains-veg',
    dietary: ['veg', 'vegan', 'halal'],
    image: '/images/dishes/channa-masala.webp',
    description:
      'Tender chickpeas slow cooked in a spiced tomato and onion gravy with garlic, ginger, cumin, coriander and medium Indian spices. A bold, protein-rich vegetarian curry loved in Den Haag, served with plain rice or naan.',
    descriptionNl:
      'Zachte kikkererwten langzaam gekookt in een gekruide tomaten- en uiensaus met knoflook, gember, komijn, koriander en medium Indiase specerijen. Een uitgesproken, eiwitrijke vegetarische curry, geliefd in Den Haag.',
  },
  {
    id: 'aloo-gobi',
    name: 'Aloo Gobi',
    price: 15,
    category: 'mains-veg',
    dietary: ['veg', 'vegan', 'halal'],
    image: '/images/dishes/aloo-gobhi.webp',
    description:
      'Potatoes and cauliflower dry cooked with turmeric, cumin, ginger, garlic and mild spices for a comforting and earthy vegetarian dish. A simple and authentic North Indian favourite in Den Haag.',
    descriptionNl:
      'Aardappelen en bloemkool droog gekookt met kurkuma, komijn, gember, knoflook en milde specerijen voor een verwarmend en aards vegetarisch gerecht. Een eenvoudige en authentieke Noord-Indiase favoriet in Den Haag.',
  },
  {
    id: 'aloo-jeera',
    name: 'Aloo Jeera',
    price: 15,
    category: 'mains-veg',
    dietary: ['veg', 'vegan', 'halal'],
    image: '/images/dishes/aloo-jeera.webp',
    description:
      'Potatoes sautéed with cumin seeds, mild spices and fresh herbs for a light and aromatic vegetarian side dish. A classic North Indian comfort dish enjoyed in Den Haag.',
    descriptionNl:
      'Aardappelen gebakken met komijnzaad, milde specerijen en verse kruiden voor een licht en aromatisch vegetarisch bijgerecht. Een klassiek Noord-Indiaas comfortgerecht, geliefd in Den Haag.',
  },
  {
    id: 'mixed-veg',
    name: 'Mixed Veg',
    price: 15,
    category: 'mains-veg',
    dietary: ['veg', 'vegan', 'halal'],
    image: '/images/dishes/mixed-veg.webp',
    description:
      'Seasonal vegetables cooked in a spiced tomato and onion gravy with garlic, ginger and mild Indian spices. A wholesome and flavourful vegetarian curry enjoyed in Den Haag.',
    descriptionNl:
      'Seizoensgroenten gekookt in een gekruide tomaten- en uiensaus met knoflook, gember en milde Indiase specerijen. Een voedzame en smaakvolle vegetarische curry in Den Haag.',
  },
  {
    id: 'bhindi-masala',
    name: 'Bhindi Masala',
    price: 16,
    category: 'mains-veg',
    dietary: ['veg', 'vegan', 'halal'],
    image: '/images/dishes/bhandi-masala.webp',
    description:
      'Tender okra cooked with onions, tomatoes, garlic, ginger and medium Indian spices for a flavourful and slightly spicy vegetarian dish. A popular choice among vegetarians in Den Haag.',
    descriptionNl:
      'Zachte okra gekookt met ui, tomaat, knoflook, gember en medium Indiase specerijen voor een smaakvol en licht pittig vegetarisch gerecht. Een populaire keuze onder vegetariërs in Den Haag.',
  },
  {
    id: 'baingan-bharta',
    name: 'Baingan Bharta',
    price: 16,
    category: 'mains-veg',
    dietary: ['veg', 'vegan', 'halal'],
    image: '/images/dishes/baingan-bharta.webp',
    description:
      'Smoky roasted aubergine mashed and cooked with onions, tomatoes, garlic, ginger and medium spices. A rustic and deeply flavoured vegetarian North Indian dish enjoyed in Den Haag.',
    descriptionNl:
      'Rokerige geroosterde aubergine gepureerd en gekookt met ui, tomaat, knoflook, gember en medium specerijen. Een rustiek en diep smaakvol vegetarisch Noord-Indiaas gerecht, geliefd in Den Haag.',
  },
  {
    id: 'aloo-palak',
    name: 'Aloo Palak',
    price: 15,
    category: 'mains-veg',
    dietary: ['veg', 'vegan', 'halal'],
    description:
      'Potatoes cooked in a smooth spiced spinach sauce with garlic, ginger and mild Indian spices. A healthy, earthy and flavourful vegetarian curry loved in Den Haag.',
    descriptionNl:
      'Aardappelen gekookt in een gladde gekruide spinaziesaus met knoflook, gember en milde Indiase specerijen. Een gezonde, aardse en smaakvolle vegetarische curry, geliefd in Den Haag.',
  },
  {
    id: 'palak-corn',
    name: 'Palak Corn',
    price: 15,
    category: 'mains-veg',
    dietary: ['veg', 'halal'],
    description:
      'Sweet corn kernels cooked in a creamy spiced spinach sauce with garlic, ginger and mild spices. A unique and nutritious vegetarian curry with a sweet and earthy flavour combination enjoyed in Den Haag.',
    descriptionNl:
      'Zoete maïskorrels gekookt in een romige gekruide spinaziesaus met knoflook, gember en milde specerijen. Een unieke en voedzame vegetarische curry met een zoete en aardse smaakcombinatie, geliefd in Den Haag.',
  },
  {
    id: 'shahi-paneer',
    name: 'Shahi Paneer',
    price: 18,
    category: 'mains-veg',
    dietary: ['veg', 'halal', 'mild'],
    image: '/images/dishes/shahi-paneer.webp',
    description:
      'Paneer cubes cooked in a rich, aromatic Mughal-style gravy of cream, cashews, onions and mild spices. A royal and indulgent vegetarian curry with a silky texture, loved across Den Haag.',
    descriptionNl:
      "Paneerblokjes gekookt in een rijke, aromatische Mughal-stijl saus van room, cashewnoten, ui en milde specerijen. Een koninklijke en verwennerij vegetarische curry met een zijdezachte textuur, geliefd in heel Den Haag.",
  },
  {
    id: 'paneer-butter-masala',
    name: 'Paneer Butter Masala',
    price: 18,
    category: 'mains-veg',
    dietary: ['veg', 'halal', 'mild'],
    featured: true,
    image: '/images/dishes/paneer-butter-masala.webp',
    description:
      'Soft paneer cubes simmered in a buttery, creamy tomato sauce with mild spices and fresh herbs. A classic and comforting vegetarian Indian curry that is one of the most popular dishes in Den Haag.',
    descriptionNl:
      'Zachte paneerblokjes gestoofde in een boterachtige, romige tomatensaus met milde specerijen en verse kruiden. Een klassieke en troostende vegetarische Indiase curry die een van de populairste gerechten in Den Haag is.',
  },
  {
    id: 'palak-paneer',
    name: 'Palak Paneer',
    price: 18,
    category: 'mains-veg',
    dietary: ['veg', 'halal'],
    image: '/images/dishes/palak-paneer.webp',
    description:
      'Fresh paneer cubes in a smooth, spiced spinach sauce with garlic, ginger and mild spices. A classic North Indian vegetarian curry with earthy and aromatic flavours enjoyed in Den Haag.',
    descriptionNl:
      'Verse paneerblokjes in een gladde, gekruide spinaziesaus met knoflook, gember en milde specerijen. Een klassieke Noord-Indiase vegetarische curry met aardse en aromatische smaken, geliefd in Den Haag.',
  },
  {
    id: 'matar-paneer',
    name: 'Matar Paneer',
    price: 18,
    category: 'mains-veg',
    dietary: ['veg', 'halal'],
    description:
      'Paneer and green peas cooked in a rich tomato and onion gravy with garlic, ginger and medium spices. A hearty and satisfying vegetarian North Indian curry popular in Den Haag.',
    descriptionNl:
      'Paneer en groene erwten gekookt in een rijke tomaten- en uiensaus met knoflook, gember en medium specerijen. Een hartelijke en bevredigende vegetarische Noord-Indiase curry, populair in Den Haag.',
  },
  {
    id: 'chopra-special-paneer',
    name: 'Chopra Special Paneer',
    price: 19,
    category: 'mains-veg',
    dietary: ['veg', 'halal'],
    featured: true,
    image: '/images/dishes/chopras-special-paneer.webp',
    description:
      "Fresh paneer cubes in a rich, special sauce infused with authentic North Indian spices and herbs. Chopras' signature paneer dish  -  one of the most popular and distinctive dishes on the menu in Den Haag.",
    descriptionNl:
      "Verse paneerblokjes in een rijke, speciale saus doordrenkt met authentieke Noord-Indiase specerijen en kruiden. Chopras' signature paneergerecht  -  een van de populairste en meest onderscheidende gerechten op het menu in Den Haag.",
  },

  // ─── CHICKEN MAINS ───────────────────────────────────────────────────────
  {
    id: 'butter-chicken',
    name: 'Butter Chicken',
    price: 18.5,
    category: 'mains-chicken',
    dietary: ['halal', 'mild'],
    featured: true,
    image: '/images/dishes/butter-chicken.webp',
    description:
      'Tender chicken slow cooked in a rich, creamy tomato sauce with butter, cream and mild Indian spices. A timeless classic and one of the most loved Indian dishes in Den Haag, perfect for all palates including children.',
    descriptionNl:
      'Zachte kip langzaam gekookt in een rijke, romige tomatensaus met boter, room en milde Indiase specerijen. Een tijdloze klassieker en een van de meest geliefde Indiase gerechten in Den Haag, perfect voor alle smaakpapillen inclusief kinderen.',
  },
  {
    id: 'chicken-tikka-masala',
    name: 'Chicken Tikka Masala',
    price: 18.5,
    category: 'mains-chicken',
    dietary: ['halal'],
    image: '/images/dishes/chicken-tikka-masala.webp',
    description:
      'Grilled chicken tikka pieces simmered in a smooth, mildly spiced tomato and cream masala sauce. A restaurant classic that balances smoky tandoor flavour with a rich and satisfying curry, enjoyed widely in Den Haag.',
    descriptionNl:
      'Gegrilde chicken tikka stukken gestoofde in een gladde, licht gekruide tomaten- en roommasalasaus. Een restaurantklassieker die de rokerige tandoorsmaak combineert met een rijke en bevredigende curry, breed genoten in Den Haag.',
  },
  {
    id: 'chicken-kadhai',
    name: 'Chicken Kadhai',
    price: 18.5,
    category: 'mains-chicken',
    dietary: ['halal', 'spicy'],
    image: '/images/dishes/kadai-chicken.webp',
    description:
      'Chicken cooked in a traditional kadhai (wok) with tomatoes, capsicum, onions and freshly ground kadhai spices. A bold and aromatic curry with robust flavours, popular among spice lovers in Den Haag.',
    descriptionNl:
      'Kip gekookt in een traditionele kadhai (wok) met tomaten, paprika, ui en vers gemalen kadhai specerijen. Een uitgesproken en aromatische curry met robuuste smaken, populair onder kruidenliefhebbers in Den Haag.',
  },
  {
    id: 'chicken-rogan-josh',
    name: 'Chicken Rogan Josh',
    price: 18.5,
    category: 'mains-chicken',
    dietary: ['halal', 'spicy'],
    description:
      'Chicken slow cooked in a deep, fragrant Kashmiri sauce with whole spices, dried chillies and aromatic herbs. A warming and intensely flavoured curry with rich colour loved in Den Haag.',
    descriptionNl:
      'Kip langzaam gekookt in een diepe, geurige Kasjmiri saus met hele specerijen, gedroogde pepers en aromatische kruiden. Een verwarmende en intens gearomatiseerde curry met rijke kleur, geliefd in Den Haag.',
  },
  {
    id: 'handi-chicken',
    name: 'Handi Chicken',
    price: 20,
    category: 'mains-chicken',
    dietary: ['halal'],
    image: '/images/dishes/chicken-handi.webp',
    description:
      'Chicken slow cooked in a sealed clay pot with yogurt, cream, aromatic spices and herbs. The pot cooking method locks in moisture and flavour for an exceptionally tender and aromatic result. A specialty at Chopras in Den Haag.',
    descriptionNl:
      'Kip langzaam gekookt in een afgesloten kleipot met yoghurt, room, aromatische specerijen en kruiden. De kleipot kookmethode sluit vocht en smaak op voor een uitzonderlijk mals en aromatisch resultaat. Een specialiteit bij Chopras in Den Haag.',
  },
  {
    id: 'chicken-korma',
    name: 'Chicken Korma',
    price: 18.5,
    category: 'mains-chicken',
    dietary: ['halal', 'mild'],
    description:
      'Tender chicken in a mild, creamy sauce of yogurt, cream, cashews and gentle spices. A smooth, rich and mildly spiced curry that is a favourite for those who prefer a milder taste, loved in Den Haag.',
    descriptionNl:
      'Zachte kip in een milde, romige saus van yoghurt, room, cashewnoten en zachte specerijen. Een gladde, rijke en licht gekruide curry die een favoriet is voor degenen die de voorkeur geven aan een mildere smaak, geliefd in Den Haag.',
  },
  {
    id: 'chicken-biryani',
    name: 'Chicken Biryani',
    price: 18.5,
    category: 'biryani',
    dietary: ['halal'],
    featured: true,
    image: '/images/dishes/chicken-biryani.webp',
    description:
      'Fragrant basmati rice slow cooked with tender spiced chicken, fried onions, saffron and whole aromatic spices. A complete one-pot meal served with raita, and one of the most popular dishes at Chopras in Den Haag.',
    descriptionNl:
      'Geurige basmatirijst langzaam gekookt met zachte gekruide kip, gebakken ui, saffraan en hele aromatische specerijen. Een compleet eenpansgerecht geserveerd met raita, en een van de populairste gerechten bij Chopras in Den Haag.',
  },

  // ─── LAMB MAINS ──────────────────────────────────────────────────────────
  {
    id: 'mutton-rogan-josh',
    name: 'Mutton Rogan Josh',
    price: 21.5,
    category: 'mains-lamb',
    dietary: ['halal', 'spicy'],
    featured: true,
    image: '/images/dishes/mutton-rogan-josh.webp',
    description:
      'Slow-braised mutton in a robust Kashmiri sauce with whole spices, dried chillies and aromatic herbs. A rich, deeply spiced and intensely flavoured curry that is a must-try for meat lovers in Den Haag.',
    descriptionNl:
      'Langzaam gestoofde schapenbout in een robuuste Kasjmiri saus met hele specerijen, gedroogde pepers en aromatische kruiden. Een rijke, diep gekruide en intens gearomatiseerde curry die een must-try is voor vleesliefhebbers in Den Haag.',
  },
  {
    id: 'mutton-curry',
    name: 'Mutton Curry',
    price: 21.5,
    category: 'mains-lamb',
    dietary: ['halal'],
    description:
      'Tender mutton pieces slow cooked in a rich, deeply spiced onion and tomato gravy. Prepared the traditional way with authentic spices for a hearty and satisfying curry enjoyed in Den Haag.',
    descriptionNl:
      'Zachte schapenblokjes langzaam gekookt in een rijke, diep gekruide ui- en tomatengravy. Op de traditionele manier bereid met authentieke specerijen voor een hartelijke en bevredigende curry, genoten in Den Haag.',
  },
  {
    id: 'lamb-biryani',
    name: 'Lamb Biryani',
    price: 21.5,
    category: 'biryani',
    dietary: ['halal'],
    image: '/images/dishes/muton-biryani.webp',
    description:
      'Aromatic basmati rice slow cooked with tender spiced lamb, fried onions, saffron and whole spices. A complete and indulgent biryani experience served with raita, loved by lamb biryani fans in Den Haag.',
    descriptionNl:
      'Aromatische basmatirijst langzaam gekookt met zachte gekruide lam, gebakken ui, saffraan en hele specerijen. Een complete en verwennerij biryani-ervaring geserveerd met raita, geliefd door lam biryani fans in Den Haag.',
  },

  // ─── INDO-CHINESE ────────────────────────────────────────────────────────
  {
    id: 'chilli-paneer',
    name: 'Chilli Paneer',
    price: 16,
    category: 'indo-chinese',
    dietary: ['veg', 'halal', 'spicy'],
    featured: true,
    image: '/images/dishes/chilli-paneer.webp',
    description:
      'Crispy paneer pieces tossed in a bold Indo-Chinese sauce with green chillies, peppers, onions and soy. One of the most ordered dishes at Chopras in Den Haag  -  addictively spicy and full of flavour.',
    descriptionNl:
      'Knapperige paneer stukjes gebakken in een uitgesproken Indo-Chinese saus met groene pepers, paprika, ui en sojasaus. Een van de meest bestelde gerechten bij Chopras in Den Haag  -  verslavend pittig en vol smaak.',
  },
  {
    id: 'chilli-chicken',
    name: 'Chilli Chicken',
    price: 17,
    category: 'indo-chinese',
    dietary: ['halal', 'spicy'],
    featured: true,
    image: '/images/dishes/chilli-chicken.webp',
    description:
      'Crispy chicken pieces tossed in a bold Indo-Chinese sauce with green chillies, peppers, onions and soy. A fiery and flavourful Indo-Chinese favourite served at Chopras in Den Haag.',
    descriptionNl:
      'Knapperige kipstukjes gebakken in een uitgesproken Indo-Chinese saus met groene pepers, paprika, ui en sojasaus. Een vurig en smaakvol Indo-Chinees gerecht, geserveerd bij Chopras in Den Haag.',
  },
  {
    id: 'veg-noodles',
    name: 'Veg Noodles',
    price: 14,
    category: 'indo-chinese',
    dietary: ['veg', 'vegan', 'halal'],
    image: '/images/dishes/veg-noodles.webp',
    description:
      'Stir-fried noodles with mixed vegetables, soy sauce, garlic, ginger and Indo-Chinese spices. A light and flavourful plant-based noodle dish enjoyed in Den Haag.',
    descriptionNl:
      'Roergebakken noedels met gemengde groenten, sojasaus, knoflook, gember en Indo-Chinese specerijen. Een licht en smaakvol plantaardig noedelgerecht, genoten in Den Haag.',
  },
  {
    id: 'chicken-noodles',
    name: 'Chicken Noodles',
    price: 16,
    category: 'indo-chinese',
    dietary: ['halal'],
    description:
      'Stir-fried noodles with tender chicken, mixed vegetables, soy sauce and Indo-Chinese spices. A satisfying and flavourful noodle dish popular among Indo-Chinese food lovers in Den Haag.',
    descriptionNl:
      'Roergebakken noedels met zachte kip, gemengde groenten, sojasaus en Indo-Chinese specerijen. Een bevredigend en smaakvol noedelgerecht populair bij Indo-Chinese voedselliefhebbers in Den Haag.',
  },
  {
    id: 'veg-fried-rice',
    name: 'Veg Fried Rice',
    price: 13,
    category: 'indo-chinese',
    dietary: ['veg', 'vegan', 'halal'],
    image: '/images/dishes/veg-fried-rice.webp',
    description:
      'Wok-fried basmati rice with mixed vegetables, soy sauce, garlic and spring onions. A light and satisfying Indo-Chinese rice dish enjoyed in Den Haag.',
    descriptionNl:
      'Wok-gebakken basmatirijst met gemengde groenten, sojasaus, knoflook en lente-ui. Een licht en bevredigend Indo-Chinees rijstgerecht, genoten in Den Haag.',
  },
  {
    id: 'chicken-fried-rice',
    name: 'Chicken Fried Rice',
    price: 15,
    category: 'indo-chinese',
    dietary: ['halal'],
    image: '/images/dishes/chicken-fried-rice.webp',
    description:
      'Wok-fried basmati rice with chicken pieces, soy sauce, garlic and spring onions. A classic and satisfying Indo-Chinese rice dish popular in Den Haag.',
    descriptionNl:
      'Wok-gebakken basmatirijst met kipstukjes, sojasaus, knoflook en lente-ui. Een klassiek en bevredigend Indo-Chinees rijstgerecht, populair in Den Haag.',
  },
  {
    id: 'manchurian-veg',
    name: 'Manchurian (Veg)',
    price: 15,
    category: 'indo-chinese',
    dietary: ['veg', 'halal', 'spicy'],
    description:
      'Crispy vegetable balls tossed in a tangy, spiced Manchurian sauce with soy, garlic, ginger and green chillies. A bold and popular Indo-Chinese dish loved in Den Haag.',
    descriptionNl:
      'Knapperige groenteballetjes gebakken in een frisse, gekruide Manchurian saus met sojasaus, knoflook, gember en groene pepers. Een uitgesproken en populair Indo-Chinees gerecht, geliefd in Den Haag.',
  },
  {
    id: 'manchurian-chicken',
    name: 'Manchurian (Chicken)',
    price: 17,
    category: 'indo-chinese',
    dietary: ['halal', 'spicy'],
    description:
      'Crispy chicken pieces tossed in a tangy, spiced Manchurian sauce with soy, garlic, ginger and green chillies. A fiery and popular Indo-Chinese speciality enjoyed in Den Haag.',
    descriptionNl:
      'Knapperige kipstukjes gebakken in een frisse, gekruide Manchurian saus met sojasaus, knoflook, gember en groene pepers. Een vurig en populair Indo-Chinees gerecht, genoten in Den Haag.',
  },

  // ─── BIRYANI ─────────────────────────────────────────────────────────────
  {
    id: 'veg-biryani',
    name: 'Veg Biryani',
    price: 16,
    category: 'biryani',
    dietary: ['veg', 'halal'],
    image: '/images/dishes/veg-biryani.webp',
    description:
      'Fragrant basmati rice slow cooked with seasonal vegetables, fried onions, saffron and whole aromatic spices. A complete and satisfying vegetarian biryani served with raita, loved in Den Haag.',
    descriptionNl:
      'Geurige basmatirijst langzaam gekookt met seizoensgroenten, gebakken ui, saffraan en hele aromatische specerijen. Een complete en bevredigende vegetarische biryani geserveerd met raita, geliefd in Den Haag.',
  },

  // ─── BREADS ──────────────────────────────────────────────────────────────
  {
    id: 'tandoori-roti',
    name: 'Tandoori Roti',
    price: 3,
    category: 'breads',
    dietary: ['veg', 'halal'],
    image: '/images/dishes/tandoori-roti.webp',
    description:
      'Thin whole wheat bread baked fresh in the tandoor. Light, healthy and perfect with any curry. A classic Indian bread staple in Den Haag.',
    descriptionNl:
      'Dun volkoren brood vers gebakken in de tandoor. Licht, gezond en perfect bij elke curry. Een klassiek Indiaas broodstapel in Den Haag.',
  },
  {
    id: 'onion-tandoori-roti',
    name: 'Onion Tandoori Roti',
    price: 3.5,
    category: 'breads',
    dietary: ['veg', 'halal'],
    image: '/images/dishes/onion-tandoori-roti.webp',
    description:
      "Thin whole wheat tandoor bread topped with chopped onions and fresh coriander. A flavourful twist on the classic roti, enjoyed with curries in Den Haag.",
    descriptionNl:
      "Dun volkoren tandoorbrood belegd met gehakte ui en verse koriander. Een smaakvolle variant op de klassieke roti, genoten bij curry's in Den Haag.",
  },
  {
    id: 'garlic-roti',
    name: 'Garlic Roti',
    price: 3.5,
    category: 'breads',
    dietary: ['veg', 'halal'],
    image: '/images/dishes/garlic-roti.webp',
    description:
      'Thin whole wheat bread baked in the tandoor with fresh garlic and herbs. Aromatic and flavourful, it pairs beautifully with any dish on the menu in Den Haag.',
    descriptionNl:
      'Dun volkoren brood gebakken in de tandoor met verse knoflook en kruiden. Aromatisch en smaakvol, past prachtig bij elk gerecht op het menu in Den Haag.',
  },
  {
    id: 'missi-roti',
    name: 'Missi Roti',
    price: 3.5,
    category: 'breads',
    dietary: ['veg', 'halal'],
    image: '/images/dishes/missi-roti.webp',
    description:
      'A spiced whole wheat and chickpea flour bread baked in the tandoor with cumin, onions and herbs. A North Indian bread with a distinctive flavour, popular in Den Haag.',
    descriptionNl:
      'Een gekruid volkoren en kikkererwtenmeel brood gebakken in de tandoor met komijn, ui en kruiden. Een Noord-Indiaas brood met een kenmerkende smaak, populair in Den Haag.',
  },
  {
    id: 'laccha-paratha',
    name: 'Laccha Paratha',
    price: 4,
    category: 'breads',
    dietary: ['veg', 'halal'],
    image: '/images/dishes/laccha-paratha.webp',
    description:
      'Multi-layered flaky whole wheat bread cooked on the tawa with butter. A rich, crispy and indulgent North Indian bread loved in Den Haag for its texture and buttery flavour.',
    descriptionNl:
      'Meerdere laagjes bladerig volkoren brood gebakken op de tawa met boter. Een rijk, krokant en verwennerij Noord-Indiaas brood, geliefd in Den Haag vanwege zijn textuur en boterige smaak.',
  },
  {
    id: 'pudina-paratha',
    name: 'Pudina Paratha',
    price: 4,
    category: 'breads',
    dietary: ['veg', 'halal'],
    image: '/images/dishes/mint-paratha.webp',
    description:
      'Flaky layered paratha infused with fresh mint leaves for a cool and aromatic flavour. A refreshing Indian bread option enjoyed in Den Haag.',
    descriptionNl:
      'Bladerig gelaagde paratha doordrenkt met verse muntblaadjes voor een frisse en aromatische smaak. Een verfrissende Indiase broodoptie, genoten in Den Haag.',
  },
  {
    id: 'aloo-paratha',
    name: 'Aloo Paratha',
    price: 5,
    category: 'breads',
    dietary: ['veg', 'halal'],
    image: '/images/dishes/aloo-paratha.webp',
    description:
      'Whole wheat bread stuffed with spiced potato filling, cooked on the tawa with butter. A hearty and satisfying North Indian breakfast bread also served as a side in Den Haag.',
    descriptionNl:
      'Volkoren brood gevuld met gekruide aardappelvulling, gebakken op de tawa met boter. Een hartelijk en bevredigend Noord-Indiaas ontbijtbrood ook geserveerd als bijgerecht in Den Haag.',
  },
  {
    id: 'plain-naan',
    name: 'Plain Naan',
    price: 3,
    category: 'breads',
    dietary: ['veg', 'halal'],
    image: '/images/dishes/plain-naan.webp',
    description:
      'Soft leavened white flour bread baked fresh in the tandoor. The classic Indian bread, perfectly suited to soak up any curry in Den Haag.',
    descriptionNl:
      'Zacht gerezen witmeelbrood vers gebakken in de tandoor. Het klassieke Indiase brood, perfect geschikt om elke curry op te slorpen in Den Haag.',
  },
  {
    id: 'garlic-naan',
    name: 'Garlic Naan',
    price: 4,
    category: 'breads',
    dietary: ['veg', 'halal'],
    image: '/images/dishes/garlic-naan.webp',
    description:
      'Soft tandoor naan topped with fresh garlic and coriander. Aromatic, flavourful and one of the most popular breads ordered in Den Haag.',
    descriptionNl:
      'Zachte tandoor naan belegd met verse knoflook en koriander. Aromatisch, smaakvol en een van de populairste broodsoorten besteld in Den Haag.',
  },
  {
    id: 'cheese-naan',
    name: 'Cheese Naan',
    price: 5,
    category: 'breads',
    dietary: ['veg', 'halal'],
    image: '/images/dishes/cheese-naan.webp',
    description:
      'Soft tandoor naan stuffed with melted cheese. Rich, indulgent and a favourite with both adults and children in Den Haag.',
    descriptionNl:
      'Zachte tandoor naan gevuld met gesmolten kaas. Reich, verwennerij en een favoriet bij zowel volwassenen als kinderen in Den Haag.',
  },
  {
    id: 'peshwari-naan',
    name: 'Peshwari Naan',
    price: 5,
    category: 'breads',
    dietary: ['veg', 'halal'],
    description:
      "Sweet naan stuffed with a blend of coconut, almonds, raisins and mild spices. A unique and indulgent bread that pairs surprisingly well with rich curries in Den Haag.",
    descriptionNl:
      "Zoete naan gevuld met een mix van kokosnoot, amandelen, rozijnen en milde specerijen. Een uniek en verwennend brood dat verrassend goed samengaat met rijke curry's in Den Haag.",
  },
  {
    id: 'butter-naan',
    name: 'Butter Naan',
    price: 3.5,
    category: 'breads',
    dietary: ['veg', 'halal'],
    image: '/images/dishes/butter-naan.webp',
    description:
      'Classic tandoor naan brushed with melted butter for a soft, rich and comforting finish. Simple and perfect with any curry in Den Haag.',
    descriptionNl:
      'Klassieke tandoor naan ingesmeerd met gesmolten boter voor een zachte, rijke en troostende afwerking. Eenvoudig en perfect bij elke curry in Den Haag.',
  },

  // ─── RICE & SIDES ────────────────────────────────────────────────────────
  {
    id: 'steamed-rice',
    name: 'Steamed Basmati Rice',
    price: 4,
    category: 'rice-sides',
    dietary: ['veg', 'vegan', 'halal', 'glutenFree'],
    image: '/images/dishes/steamed-rice.webp',
    description:
      'Plain steamed basmati rice. Light, fluffy and the perfect accompaniment to any curry on the menu in Den Haag.',
    descriptionNl:
      'Gewone gestoomde basmatirijst. Licht, luchtig en de perfecte begeleiding bij elke curry op het menu in Den Haag.',
  },
  {
    id: 'jeera-rice',
    name: 'Jeera Rice',
    price: 5,
    category: 'rice-sides',
    dietary: ['veg', 'halal', 'glutenFree'],
    image: '/images/dishes/jeera-rice.webp',
    description:
      'Basmati rice tempered with cumin seeds and ghee for a light, aromatic and flavourful rice dish. A classic North Indian rice loved in Den Haag.',
    descriptionNl:
      'Basmatirijst op smaak gebracht met komijnzaad en ghee voor een licht, aromatisch en smaakvol rijstgerecht. Een klassieke Noord-Indiase rijst, geliefd in Den Haag.',
  },
  {
    id: 'raita',
    name: 'Raita',
    price: 3.5,
    category: 'rice-sides',
    dietary: ['veg', 'halal', 'glutenFree'],
    image: '/images/dishes/mixed-raita.webp',
    description:
      'Cooling yogurt with grated cucumber, fresh mint, cumin and mild spices. A refreshing side dish that balances the heat of any spicy curry in Den Haag.',
    descriptionNl:
      'Koel yoghurt met geraspte komkommer, verse munt, komijn en milde specerijen. Een verfrissend bijgerecht dat de hitte van elke pittige curry in Den Haag in balans brengt.',
  },
  {
    id: 'fries',
    name: 'Fries',
    price: 5,
    category: 'rice-sides',
    dietary: ['veg', 'vegan', 'halal'],
    description:
      'Crispy golden fries. A simple and popular side dish for all ages, available at Chopras in Den Haag.',
    descriptionNl:
      'Knapperige gouden frietjes. Een eenvoudig en populair bijgerecht voor alle leeftijden, beschikbaar bij Chopras in Den Haag.',
  },
  {
    id: 'soya-roll',
    name: 'Soya Roll',
    price: 10,
    category: 'rice-sides',
    dietary: ['veg', 'halal'],
    description:
      'A soft wrap filled with spiced soya chaap, onions, peppers and chutney. A popular vegetarian street food option at Chopras in Den Haag, great for a quick and satisfying meal.',
    descriptionNl:
      'Een zachte wrap gevuld met gekruide soya chaap, ui, paprika en chutney. Een populaire vegetarische streetfood optie bij Chopras in Den Haag, geweldig voor een snelle en bevredigende maaltijd.',
  },

  // ─── DESSERTS ────────────────────────────────────────────────────────────
  {
    id: 'gulab-jamun',
    name: 'Gulab Jamun',
    price: 6,
    category: 'desserts',
    dietary: ['veg', 'halal'],
    image: '/images/dishes/gulab-jamun.webp',
    description:
      "Soft milk-solid dumplings soaked in rose-flavoured sugar syrup. Served warm, this is one of India's most beloved sweets and a favourite at Chopras in Den Haag.",
    descriptionNl:
      "Zachte melkdeegballetjes geweekt in rozengeurige suikersiroop. Warm geserveerd, dit is een van India's meest geliefde snoepjes en een favoriet bij Chopras in Den Haag.",
  },
  {
    id: 'moong-dal-halwa',
    name: 'Moong Dal Halwa',
    price: 7,
    category: 'desserts',
    dietary: ['veg', 'halal'],
    image: '/images/dishes/moong-dal-halwa.webp',
    description:
      'A rich, slow-cooked Indian sweet made from split yellow lentils, ghee, sugar and cardamom. Dense, fragrant and deeply satisfying  -  a traditional North Indian dessert served at Chopras in Den Haag.',
    descriptionNl:
      'Een rijk, langzaam gekookt Indiaas snoepje gemaakt van gespleten gele linzen, ghee, suiker en kardemom. Dicht, geurig en diep bevredigend  -  een traditioneel Noord-Indiaas dessert geserveerd bij Chopras in Den Haag.',
  },
  {
    id: 'kulfi',
    name: 'Kulfi',
    price: 6,
    category: 'desserts',
    dietary: ['veg', 'halal'],
    image: '/images/dishes/malai-kulfi.webp',
    description:
      'Traditional Indian ice cream made from condensed milk, cream and cardamom. Dense, creamy and intensely flavoured, available in various flavours at Chopras in Den Haag.',
    descriptionNl:
      'Traditioneel Indiaas ijs gemaakt van gecondenseerde melk, room en kardemom. Dicht, romig en intens gearomatiseerd, verkrijgbaar in verschillende smaken bij Chopras in Den Haag.',
  },

  // ─── DRINKS ──────────────────────────────────────────────────────────────
  {
    id: 'mango-lassi',
    name: 'Mango Lassi',
    price: 6,
    category: 'drinks',
    dietary: ['veg', 'halal'],
    featured: true,
    image: '/images/dishes/mango-lassi.webp',
    description:
      'Thick and creamy yogurt drink blended with sweet mango pulp. Refreshing, smooth and utterly satisfying  -  a crowd favourite at Chopras in Den Haag.',
    descriptionNl:
      'Dik en romig yoghurtdrankje gemengd met zoete mangopulp. Verfrissend, glad en absoluut bevredigend  -  een publieksfavoriet bij Chopras in Den Haag.',
  },
  {
    id: 'sweet-lassi',
    name: 'Sweet Lassi',
    price: 5,
    category: 'drinks',
    dietary: ['veg', 'halal'],
    image: '/images/dishes/sweet-lassi.webp',
    description:
      'Chilled yogurt drink blended with sugar and cardamom. Light, cooling and a perfect companion to any spicy dish in Den Haag.',
    descriptionNl:
      'Gekoeld yoghurtdrankje gemengd met suiker en kardemom. Licht, verkoelend en een perfecte metgezel bij elk pittig gerecht in Den Haag.',
  },
  {
    id: 'salted-lassi',
    name: 'Salted Lassi',
    price: 5,
    category: 'drinks',
    dietary: ['veg', 'halal'],
    image: '/images/dishes/salted-lassi.webp',
    description:
      "Savoury yogurt drink with cumin, salt and fresh herbs. A traditional and refreshing Indian drink that pairs perfectly with rich curries in Den Haag.",
    descriptionNl:
      "Hartig yoghurtdrankje met komijn, zout en verse kruiden. Een traditioneel en verfrissend Indiaas drankje dat perfect samengaat met rijke curry's in Den Haag.",
  },
  {
    id: 'rose-lassi',
    name: 'Rose Lassi',
    price: 5.5,
    category: 'drinks',
    dietary: ['veg', 'halal'],
    description:
      'Yogurt drink blended with rose syrup for a fragrant and refreshing flavour. A uniquely Indian drink loved by guests at Chopras in Den Haag.',
    descriptionNl:
      'Yoghurtdrankje gemengd met rozenstroop voor een geurende en verfrissende smaak. Een uniek Indiaas drankje geliefd door gasten bij Chopras in Den Haag.',
  },
  {
    id: 'masala-chai',
    name: 'Masala Chai',
    price: 4,
    category: 'drinks',
    dietary: ['veg', 'halal'],
    image: '/images/dishes/indian-masala-tea.webp',
    description:
      'Spiced Indian tea brewed with ginger, cardamom, cloves, cinnamon and milk. Warming, aromatic and a perfect way to start or end your meal at Chopras in Den Haag.',
    descriptionNl:
      'Gekruid Indiaas thee gebrouwen met gember, kardemom, kruidnagel, kaneel en melk. Verwarmend, aromatisch en een perfecte manier om uw maaltijd bij Chopras in Den Haag te beginnen of af te sluiten.',
  },
  {
    id: 'soft-drinks',
    name: 'Soft Drinks',
    price: 3,
    category: 'drinks',
    dietary: ['veg', 'vegan', 'halal'],
    description:
      'Selection of chilled soft drinks including cola, lemonade and orange juice. Available at Chopras in Den Haag.',
    descriptionNl:
      'Selectie van gekoelde frisdranken inclusief cola, limonade en sinaasappelsap. Beschikbaar bij Chopras in Den Haag.',
  },
  {
    id: 'still-water',
    name: 'Still Water',
    price: 2.5,
    category: 'drinks',
    dietary: ['veg', 'vegan', 'halal'],
    description: 'Chilled still mineral water.',
    descriptionNl: 'Gekoeld plat mineraalwater.',
  },
  {
    id: 'sparkling-water',
    name: 'Sparkling Water',
    price: 3,
    category: 'drinks',
    dietary: ['veg', 'vegan', 'halal'],
    description: 'Chilled sparkling mineral water.',
    descriptionNl: 'Gekoeld bruisend mineraalwater.',
  },
]

export const menuCategories: MenuCategoryEntry[] = [
  { id: 'starters', shortLabel: 'Starters', ...categoryLabels.starters },
  { id: 'soups', shortLabel: 'Soups', ...categoryLabels.soups },
  { id: 'tandoori', shortLabel: 'Tandoori', ...categoryLabels.tandoori },
  { id: 'mains-veg', shortLabel: 'Veg Curries', ...categoryLabels['mains-veg'] },
  { id: 'mains-chicken', shortLabel: 'Chicken', ...categoryLabels['mains-chicken'] },
  { id: 'mains-lamb', shortLabel: 'Lamb & Mutton', ...categoryLabels['mains-lamb'] },
  { id: 'indo-chinese', shortLabel: 'Indo-Chinese', ...categoryLabels['indo-chinese'] },
  { id: 'biryani', shortLabel: 'Biryani', ...categoryLabels.biryani },
  { id: 'breads', shortLabel: 'Breads', ...categoryLabels.breads },
  { id: 'rice-sides', shortLabel: 'Rice & Sides', ...categoryLabels['rice-sides'] },
  { id: 'desserts', shortLabel: 'Desserts', ...categoryLabels.desserts },
  { id: 'drinks', shortLabel: 'Drinks', ...categoryLabels.drinks },
]
