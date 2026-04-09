import type { Metadata } from 'next'
import Link from 'next/link'
import JsonLd from '@/components/seo/JsonLd'
import { SITE_URL } from '@/lib/constants'
import { getLocalRestaurantSchema, getBreadcrumbSchema } from '@/lib/schema'
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
      canonical: `${SITE_URL}/${locale}/butter-chicken-den-haag`,
      languages: {
        en: `${SITE_URL}/en/butter-chicken-den-haag`,
        nl: `${SITE_URL}/nl/butter-chicken-den-haag`,
        'x-default': `${SITE_URL}/en/butter-chicken-den-haag`,
      },
    },
  }
}

export default function ButterChickenPage({ params }: Props) {
  const { locale } = params
  const tr = getTranslations(locale)
  const base = `/${locale}`
  const isNl = locale === 'nl'

  return (
    <>
      <JsonLd data={getLocalRestaurantSchema(locale, ['Den Haag'], `${SITE_URL}/${locale}/butter-chicken-den-haag`)} />
      <JsonLd data={getBreadcrumbSchema([
        { name: tr.common.nav.home, item: `${SITE_URL}/${locale}` },
        { name: isNl ? 'Butter Chicken Den Haag' : 'Butter Chicken Den Haag', item: `${SITE_URL}/${locale}/butter-chicken-den-haag` },
      ])} />

      {/* HERO */}
      <section className="bg-[#1B2B5E] py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="h-px w-8 bg-[#D4AF37]" />
            <span
              className="text-[#D4AF37] text-xs uppercase tracking-widest font-medium"
              style={{ textShadow: '0 1px 3px rgba(0,0,0,0.8), 0 0 8px rgba(0,0,0,0.5)' }}
            >
              OUR DISHES
            </span>
            <div className="h-px w-8 bg-[#D4AF37]" />
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
                <p>That last point deserves more than a passing mention. The volatile aromatic oils in cumin, coriander, green cardamom, and the other spices that go into a proper garam masala begin evaporating within hours of grinding. A kitchen that grinds its spices fresh every morning is producing food that is categorically different from one using a pre-mixed spice blend.</p>
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
                <p>De kip wordt de avond van tevoren gemarineerd. Niet een uur voor de service  -  maar de avond ervoor. De marinade is op basis van yoghurt met verse gember, knoflook en een mengsel van kruiden die die ochtend in huis zijn gemalen. De yoghurt maakt het vlees malser en draagt de kruiden diep in het vlees, zodat de kip tegen de tijd dat het de tandoor bereikt, al van binnenuit smaak heeft opgenomen.</p>
                <p>In de tandoor  -  die opereert bij circa 400°C  -  verschroeit de marinade op het oppervlak. Die verschroeiting is het punt. Het creëert een laag van gekarameliseerde, rokerige smaak die overgaat in de saus wanneer de kip wordt toegevoegd.</p>
                <p>De saus begint met verse tomaten die langzaam worden gekookt gedurende ongeveer 45 minuten totdat het water is verdampt en de natuurlijke suikers zijn geconcentreerd. Volle room wordt vervolgens op de juiste temperatuur toegevoegd. De boter (makhan  -  de makhani in murgh makhani) wordt aan het einde geroerd, van het directe vuur af.</p>
                <p>De kruiden worden in huis gemalen van hele kruiden rechtstreeks uit India: groene kardemom, kruidnagel, kaneel, gedroogde rode peper, korianderzaad en komijn. Alle kip is afkomstig van halal-gecertificeerde leveranciers. Butter chicken staat op de kaart voor €18,50.</p>
              </>
            ) : (
              <>
                <p>The chicken is marinated overnight. Not for an hour before service  -  overnight. The marinade is yogurt-based with fresh ginger, garlic, and a blend of spices that have been ground in-house that morning. The yogurt tenderises the meat at a cellular level and carries the spices deep into the flesh.</p>
                <p>In the tandoor  -  which operates at around 400°C  -  the marinade chars on the surface. That char is the point. It creates a layer of caramelised, smoky flavour that will transfer into the sauce when the chicken is added.</p>
                <p>The sauce starts with fresh tomatoes cooked down slowly for around 45 minutes until the water has evaporated and the natural sugars have concentrated. Full-fat cream is then added at the correct temperature. The butter (makhan  -  the makhani in murgh makhani) is stirred in at the end, off the direct heat.</p>
                <p>The spices are ground in-house from whole spices sourced directly from India: green cardamom, cloves, cinnamon, dried red chilli, coriander seed, and cumin. All chicken is sourced from halal-certified suppliers. Butter chicken is priced at €18.50.</p>
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
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={`${base}/contact`}
              className="inline-block bg-[#D4AF37] text-[#1B2B5E] px-8 py-4 rounded-full font-bold hover:bg-[#c9a230] transition-colors text-center"
            >
              {tr.common.reserve}
            </a>
            <Link
              href={`${base}/menu`}
              className="inline-block border-2 border-[#1B2B5E] text-[#1B2B5E] px-8 py-4 rounded-full font-bold hover:bg-[#1B2B5E] hover:text-white transition-colors text-center"
            >
              {tr.common.viewMenu}
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
