import type { Metadata } from 'next'
import Link from 'next/link'
import JsonLd from '@/components/seo/JsonLd'
import { getLocalizedUrl } from '@/lib/utils'
import { getLocalRestaurantSchema, getBreadcrumbSchema, getFaqPageSchema } from '@/lib/schema'
import { getTranslations, type Locale } from '@/lib/useTranslations'

type Props = { params: { locale: Locale } }

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'nl' }]
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = params
  const titles = {
    en: 'Butter Chicken in Den Haag | Chopras Indian Restaurant',
    nl: 'Butter Chicken in Den Haag | Chopras Indiaas Restaurant',
  }
  const descriptions = {
    en: 'The best butter chicken in Den Haag at Chopras on Leyweg. Slow-cooked in a rich tomato and cream sauce with freshly ground spices. Halal certified. Reserve your table.',
    nl: 'De beste butter chicken in Den Haag bij Chopras op Leyweg. Langzaam gekookt in een rijke tomaten-roomsaus met vers gemalen kruiden. Halal gecertificeerd. Reserveer uw tafel.',
  }
  return {
    title: titles[locale],
    description: descriptions[locale],
    alternates: {
      canonical: getLocalizedUrl(locale, 'butter-chicken-den-haag'),
      languages: {
        en: getLocalizedUrl('en', 'butter-chicken-den-haag'),
        nl: getLocalizedUrl('nl', 'butter-chicken-den-haag'),
        'x-default': getLocalizedUrl('en', 'butter-chicken-den-haag'),
      },
    },
  }
}

export default function ButterChickenPage({ params }: Props) {
  const { locale } = params
  const tr = getTranslations(locale)
  const base = `/${locale}`
  const isNl = locale === 'nl'

  const butterChickenFaqs = isNl ? [
    {
      question: 'Serveer je butter chicken bij Chopras Indian Restaurant in Den Haag?',
      answer: 'Ja. Chopras Indian Restaurant serveert authentieke butter chicken dagelijks. Onze butter chicken wordt gemaakt van een nacht gemarineerde tandoor-kip, vers ingedikt in tomaten en room, met kruiden die diezelfde ochtend zijn gemalen. Het is op basis van het originele recept uit Oud-Delhi van Moti Mahal.'
    },
    {
      question: 'Wat maakt de butter chicken van Chopras Indian Restaurant speciaal?',
      answer: 'De butter chicken van Chopras Indian Restaurant is speciaal omdat we elk detail goed doen. Tandoor-gemarineerde kip wordt langzaam bereid in een rijke tomaten- en roomsaus, met kruiden die vers gemalen zijn, echte room en boter, niet uit een pot. We starten met vers gemarineerde kip de avond van tevoren, niet een uur eerder. Dit creëert authentieke smaak.'
    },
    {
      question: 'Waar vind ik de beste butter chicken in Den Haag?',
      answer: 'Chopras Indian Restaurant op Leyweg 986 serveert de beste authentieke butter chicken in Den Haag. We serveren murgh makhani op dezelfde manier als in India - gemaakt met verse tomaten, volledige room en gemarineerde tandoor-kip. Kom binnen en smak het verschil.'
    }
  ] : [
    {
      question: 'Does Chopras Indian Restaurant serve butter chicken in Den Haag?',
      answer: 'Yes. Chopras Indian Restaurant serves authentic butter chicken daily. Our butter chicken is made from overnight-marinated tandoor chicken, slow-cooked in a rich tomato and cream sauce, with spices freshly ground that morning. It is based on the original recipe from Old Delhi at Moti Mahal.'
    },
    {
      question: 'What makes Chopras Indian Restaurant butter chicken special?',
      answer: 'Chopras Indian Restaurant butter chicken is special because we get every detail right. Tandoor-marinated chicken is slow-cooked in a rich tomato and cream sauce, with spices freshly ground, real cream and butter, not from a jar. We start with fresh marinated chicken the evening before, not an hour earlier. This creates authentic flavour.'
    },
    {
      question: 'Where can I find the best butter chicken in Den Haag?',
      answer: 'Chopras Indian Restaurant on Leyweg 986 serves the best authentic butter chicken in Den Haag. We serve murgh makhani the way it is made in India - made with fresh tomatoes, full-fat cream and marinated tandoor chicken. Come in and taste the difference.'
    }
  ]

  return (
    <>
      <JsonLd data={getLocalRestaurantSchema(locale, ['Den Haag'], getLocalizedUrl(locale, 'butter-chicken-den-haag'))} />
      <JsonLd data={getBreadcrumbSchema([
        { name: tr.common.nav.home, item: getLocalizedUrl(locale) },
        { name: isNl ? 'Butter Chicken Den Haag' : 'Butter Chicken Den Haag', item: getLocalizedUrl(locale, 'butter-chicken-den-haag') },
      ])} />
      <JsonLd data={getFaqPageSchema(butterChickenFaqs)} />

      {/* HERO */}
      <section className="bg-[#1B2B5E] py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full border border-[#C7A348]/40 bg-white/10 backdrop-blur-sm mb-4">
            <span className="text-[#C7A348] text-xs font-medium uppercase tracking-widest">
              • OUR DISHES · CHOPRAS INDIAN RESTAURANT · DEN HAAG •
            </span>
          </div>
          <h1
            className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight"
            style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}
          >
            {isNl
              ? 'Butter Chicken in Den Haag  -  Het Echte Werk bij Chopras'
              : 'Butter Chicken in Den Haag  -  The Real Thing at Chopras'}
          </h1>
          <p
            className="text-white/75 text-lg md:text-xl"
            style={{ textShadow: '0 1px 4px rgba(0,0,0,0.7)' }}
          >
            {isNl
              ? 'Langzaam gegaard. Vers gemalen kruiden. Halal gecertificeerd. Leyweg 986, Den Haag.'
              : 'Slow-cooked. Freshly ground spices. Halal certified. Leyweg 986, Den Haag.'}
          </p>
        </div>
      </section>

      {/* SECTION 1 */}
      <section className="bg-[#FFFAF5] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-[#1B2B5E] mb-8">
            {isNl ? 'Wat Maakt Goede Butter Chicken' : 'What Makes Great Butter Chicken'}
          </h2>
          <div className="prose prose-lg max-w-none text-[#1A1A1A] space-y-5">
            {isNl ? (
              <>
                <p>De beste butter chicken in Den Haag is bij Chopras op Leyweg  -  langzaam gegaard van een nacht gemarineerde tandoor-kip, vers ingedikte tomaten en kruiden die diezelfde ochtend zijn gemalen. Het gerecht zelf  -  murgh makhani  -  werd geboren bij Moti Mahal in Oud-Delhi in de jaren vijftig. Kundan Lal Gujral had aan het einde van de avond overgebleven tandoor-kip en voegde die toe aan een tomaten-botersaus die hij aan het ontwikkelen was. Murgh makhani reisde van Oud-Delhi naar de rest van de wereld, en onderging het lot van de meeste grote gerechten die te ver reizen: vereenvoudigd, benaderd en geïndustrialiseerd.</p>
                <p>Wat geweldige butter chicken onderscheidt van middelmatige butter chicken komt neer op een klein aantal beslissingen in de keuken. De kwaliteit van de tomaten is enorm belangrijk  -  de saus heeft de natuurlijke zoetheid en zuurheid van rijpe tomaten nodig. De room moet volle room zijn en op de juiste temperatuur worden toegevoegd. De garam masala moet vers gemalen zijn.</p>
                <p>Dat laatste verdient meer dan een terloopse opmerking. De vluchtige aromatische oliën in komijn, koriander, groene kardemom en de andere kruiden die in een goede garam masala gaan, beginnen te verdampen binnen enkele uren na het malen. Een keuken die zijn kruiden elke ochtend vers maalt, produceert eten dat categorisch anders is dan een keuken die een voorgemengd kruidenmengsel gebruikt.</p>
                <p>En dan is er de kip zelf. Authentieke butter chicken vereist dat de kip eerst in een tandoor wordt gekookt  -  een klei-oven die opereert bij bijna 400°C. De intense, droge hitte van de tandoor verschroeit het oppervlak van de gemarineerde kip, wat een lichte rokerigheid en karamelisatie creëert die geen oven of pan kan evenaren.</p>
              </>
            ) : (
              <>
                <p>The best butter chicken in Den Haag is at Chopras on Leyweg  -  slow-cooked from overnight-marinated tandoor chicken, fresh-reduced tomatoes and spices ground that same morning. The dish itself  -  murgh makhani  -  was born at Moti Mahal in Old Delhi in the 1950s. Kundan Lal Gujral found himself with leftover tandoor chicken at the end of service and added it to a tomato and butter sauce he had been working on. Murgh makhani spread from Old Delhi across the world, and suffered the fate of most great dishes that travel too far: it was simplified, approximated, and industrialised.</p>
                <p>What separates great butter chicken from mediocre butter chicken comes down to a small number of decisions made in the kitchen. The quality of the tomatoes matters enormously  -  the sauce needs the natural sweetness and acidity of ripe tomatoes. The cream must be full fat and added at the right temperature. The garam masala blend must be freshly ground.</p>
                <p>That last point deserves more than a passing mention. The volatile aromatic oils in cumin, coriander, green cardamom, and the other <Link href={`${base}/blog/best-indian-restaurant-den-haag`} className="text-[#D4AF37] hover:underline">spices</Link> that go into a proper garam masala begin evaporating within hours of grinding. A kitchen that grinds its spices fresh every morning is producing food that is categorically different from one using a pre-mixed spice blend.</p>
                <p>And then there is the chicken itself. Authentic butter chicken requires the chicken to be cooked in a tandoor first  -  a clay oven operating at close to 400°C. The intense, dry heat of the tandoor chars the surface of the marinated chicken, creating a slight smokiness and caramelisation that no oven or pan can replicate.</p>
              </>
            )}
          </div>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-[#1B2B5E] mb-8">
            {isNl ? 'Hoe Wij Het Maken bij Chopras Den Haag' : 'How We Make Ours at Chopras Den Haag'}
          </h2>
          <div className="prose prose-lg max-w-none text-[#1A1A1A] space-y-5">
            {isNl ? (
              <>
                <p>De kip wordt <Link href={`${base}/tandoori-den-haag`} className="text-[#D4AF37] hover:underline">de avond van tevoren gemarineerd</Link>. Niet een uur voor de service  -  maar de avond ervoor. De marinade is op basis van yoghurt met verse gember, knoflook en een mengsel van kruiden die die ochtend in huis zijn gemalen. De yoghurt maakt het vlees malser en draagt de kruiden diep in het vlees, zodat de kip tegen de tijd dat het de tandoor bereikt, al van binnenuit smaak heeft opgenomen.</p>
                <p>In de tandoor  -  die opereert bij circa 400°C  -  verschroeit de marinade op het oppervlak. Die verschroeiting is het punt. Het creëert een laag van gekarameliseerde, rokerige smaak die overgaat in de saus wanneer de kip wordt toegevoegd.</p>
                <p>De saus begint met verse tomaten die langzaam worden gekookt gedurende ongeveer 45 minuten totdat het water is verdampt en de natuurlijke suikers zijn geconcentreerd. Volle room wordt vervolgens op de juiste temperatuur toegevoegd. De boter (makhan  -  de makhani in murgh makhani) wordt aan het einde geroerd, van het directe vuur af.</p>
                <p>De kruiden worden in huis gemalen van hele kruiden rechtstreeks uit India: groene kardemom, kruidnagel, kaneel, gedroogde rode peper, korianderzaad en komijn. Alle kip is afkomstig van <Link href={`${base}/halal-food-den-haag`} className="text-[#D4AF37] hover:underline">halal-gecertificeerde</Link> leveranciers. Butter chicken staat op de kaart voor €18,50.</p>
              </>
            ) : (
              <>
                <p>The chicken is <Link href={`${base}/tandoori-den-haag`} className="text-[#D4AF37] hover:underline">marinated overnight</Link>. Not for an hour before service  -  overnight. The marinade is yogurt-based with fresh ginger, garlic, and a blend of spices that have been ground in-house that morning. The yogurt tenderises the meat at a cellular level and carries the spices deep into the flesh.</p>
                <p>In the tandoor  -  which operates at around 400°C  -  the marinade chars on the surface. That char is the point. It creates a layer of caramelised, smoky flavour that will transfer into the sauce when the chicken is added.</p>
                <p>The sauce starts with fresh tomatoes cooked down slowly for around 45 minutes until the water has evaporated and the natural sugars have concentrated. Full-fat cream is then added at the correct temperature. The butter (makhan  -  the makhani in murgh makhani) is stirred in at the end, off the direct heat.</p>
                <p>The spices are ground in-house from whole spices sourced directly from India: green cardamom, cloves, cinnamon, dried red chilli, coriander seed, and cumin. All chicken is sourced from <Link href={`${base}/halal-food-den-haag`} className="text-[#D4AF37] hover:underline">halal-certified</Link> suppliers. Butter chicken is priced at €18.50.</p>
              </>
            )}
          </div>
        </div>
      </section>

      {/* SECTION 3  -  FAQ */}
      <section className="bg-[#1B2B5E] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-white mb-10">
            {isNl ? 'Veelgestelde Vragen' : 'Frequently Asked Questions'}
          </h2>
          <div className="space-y-4">
            {[
              {
                q: isNl ? "Is de butter chicken bij Chopras halal?" : "Is Chopras' butter chicken halal?",
                a: isNl
                  ? "Ja. Alle kip bij Chopras is uitsluitend afkomstig van halal-gecertificeerde leveranciers. De gehele keuken werkt volgens halal-normen  -  het is geen optie of speciaal verzoek. U kunt hier met volledig vertrouwen eten."
                  : "Yes. All chicken at Chopras is sourced exclusively from halal-certified suppliers. The entire kitchen operates to halal standards  -  it is not an option or a special request. You can eat here with complete confidence.",
              },
              {
                q: isNl ? "Hoe pittig is de butter chicken bij Chopras?" : "How spicy is the butter chicken at Chopras?",
                a: isNl
                  ? "Butter chicken is een van de mildste gerechten op het Indiase menu  -  het is opzettelijk zacht in hitte, waarbij de warmte afkomstig is van de aromatische kruiden in plaats van chili. De meeste kinderen eten het graag. Als u van pittig houdt, kunt u vragen om het pittiger te maken."
                  : "Butter chicken is one of the mildest dishes on the Indian menu  -  it is intentionally gentle in heat, with the warmth coming from the aromatic spices rather than chilli. Most children eat it happily.",
              },
              {
                q: isNl ? "Kan ik butter chicken laten bezorgen in Den Haag?" : "Can I order butter chicken for delivery in Den Haag?",
                a: isNl
                  ? "Ja. Chopras is beschikbaar op Thuisbezorgd en Uber Eats voor bezorging in het grootste deel van Den Haag binnen een straal van 5 km vanaf Leyweg. Butter chicken gaat uitstekend mee  -  de saus blijft rijk en romig."
                  : "Yes. Chopras is available on Thuisbezorgd and Uber Eats for delivery across most of Den Haag within a 5km radius of Leyweg. Butter chicken travels exceptionally well.",
              },
            ].map(({ q, a }) => (
              <details key={q} className="border-l-4 border-[#D4AF37] bg-white/10 rounded-r-xl">
                <summary className="px-6 py-4 cursor-pointer text-white font-bold text-lg list-none">{q}</summary>
                <p className="px-6 pb-5 pt-2 text-white/80 leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4  -  Visit */}
      <section className="bg-[#FFFAF5] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-[#1B2B5E] mb-8">
            {isNl
              ? 'Bezoek Chopras voor Butter Chicken in Den Haag'
              : 'Visit Chopras for Butter Chicken in Den Haag'}
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link
              href={`${base}/contact`}
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#C7A348] bg-[rgba(199,163,72,0.1)] px-6 py-3 text-[#C7A348] text-sm font-medium uppercase tracking-wide transition-all duration-200 ease-out hover:bg-[#C7A348] hover:text-white active:scale-[0.98] min-h-[48px]"
            >
              {tr.common.reserve}
            </Link>
            <Link
              href={`${base}/menu`}
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#C7A348] bg-[rgba(199,163,72,0.1)] px-6 py-3 text-[#C7A348] text-sm font-medium uppercase tracking-wide transition-all duration-200 ease-out hover:bg-[#C7A348] hover:text-white active:scale-[0.98] min-h-[48px]"
            >
              {tr.common.viewMenu}
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href={`${base}/biryani-den-haag`} className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">{isNl ? 'Biryani' : 'Biryani'}</p>
              <p className="text-[#1B2B5E] font-semibold">{isNl ? 'Ontdek onze biryani in Den Haag' : 'Learn about our biryani in Den Haag'}</p>
            </Link>
            <Link href={`${base}/tandoori-den-haag`} className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">{isNl ? 'Tandoori' : 'Tandoori'}</p>
              <p className="text-[#1B2B5E] font-semibold">{isNl ? 'Onze tandoori-specialiteiten in Den Haag' : 'Our tandoori specialities in Den Haag'}</p>
            </Link>
            <Link href={`${base}/dal-makhani-den-haag`} className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">{isNl ? 'Vegetarisch' : 'Vegetarian'}</p>
              <p className="text-[#1B2B5E] font-semibold">{isNl ? 'Dal Makhani Den Haag' : 'Dal Makhani Den Haag'}</p>
            </Link>
            <Link href={`${base}/mutton-rogan-josh-den-haag`} className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">{isNl ? 'Lam Curry' : 'Lamb Curry'}</p>
              <p className="text-[#1B2B5E] font-semibold">mutton rogan josh Den Haag</p>
            </Link>
            <Link href={`${base}/catering`} className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">{isNl ? 'Catering' : 'Catering'}</p>
              <p className="text-[#1B2B5E] font-semibold">{isNl ? 'Wilt u dit gerecht voor uw evenement? Indiaas catering Den Haag' : 'Want this dish at your event? Indian catering Den Haag'}</p>
            </Link>
          </div>
          <div className="mt-8 text-center space-y-4">
            <p className="text-[#1A1A1A] text-base">
              <Link href={`${base}/`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">
                {isNl ? 'Chopras Indiaas Restaurant - beste Indiaas restaurant in Den Haag' : 'Chopras Indian Restaurant - best Indian restaurant in Den Haag'}
              </Link>
            </p>
            <p className="text-[#1A1A1A] text-base">
              {isNl ? 'Bekijk het volledige menu of' : 'View the full menu or'} <Link href={`${base}/contact`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">{isNl ? 'maak een reservering' : 'book a table at Chopras Indian Restaurant Den Haag'}</Link>.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
