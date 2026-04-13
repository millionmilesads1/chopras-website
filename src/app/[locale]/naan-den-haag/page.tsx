import type { Metadata } from 'next'
import Link from 'next/link'
import JsonLd from '@/components/seo/JsonLd'
import { getLocalizedUrl } from '@/lib/utils'
import { getLocalRestaurantSchema, getBreadcrumbSchema } from '@/lib/schema'
import { getTranslations, type Locale } from '@/lib/useTranslations'

type Props = { params: { locale: Locale } }

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'nl' }]
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = params
  const titles = {
    en: 'Naan Den Haag | Chopras Indian Restaurant',
    nl: 'Naan Den Haag | Chopras Indian Restaurant',
  }
  const descriptions = {
    en: 'Fresh naan Den Haag at Chopras Indian Restaurant. Garlic, butter, cheese and Peshwari naan baked hot in our tandoor clay oven. Best Indian bread in The Hague.',
    nl: 'Naan bij Chopras Den Haag. Knoflook naan, tandoori naan, gewone naan. Vers gebakken in tandoor. Bestel nu via Leyweg 986.',
  }
  return {
    title: titles[locale],
    description: descriptions[locale],
    alternates: {
      canonical: getLocalizedUrl(locale, 'naan-den-haag'),
      languages: {
        en: getLocalizedUrl('en', 'naan-den-haag'),
        nl: getLocalizedUrl('nl', 'naan-den-haag'),
        'x-default': getLocalizedUrl('en', 'naan-den-haag'),
      },
    },
  }
}

export default function NaanPage({ params }: Props) {
  const { locale } = params
  const tr = getTranslations(locale)
  const base = locale === 'nl' ? '/nl' : ''
  const isNl = locale === 'nl'

  return (
    <>
      <JsonLd data={getLocalRestaurantSchema(locale, ['Den Haag'], getLocalizedUrl(locale, 'naan-den-haag'))} />
      <JsonLd data={getBreadcrumbSchema([
        { name: tr.common.nav.home, item: getLocalizedUrl(locale) },
        { name: isNl ? 'Naan Den Haag' : 'Naan Den Haag', item: getLocalizedUrl(locale, 'naan-den-haag') },
      ])} />

      <section className="bg-[#1B2B5E] py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full border border-[#C7A348]/40 bg-white/10 backdrop-blur-sm mb-4">
            <span className="text-[#C7A348] text-xs font-medium uppercase tracking-widest">• OUR DISHES · CHOPRAS INDIAN RESTAURANT · DEN HAAG •</span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}>
            {isNl ? 'Naan in Den Haag - Authentiek Indiaas Brood bij Chopras' : 'Naan in Den Haag - Authentic Indian Bread at Chopras'}
          </h1>
          <p className="text-white/75 text-lg md:text-xl" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.7)' }}>
            {isNl ? 'Vers gebakken in tandoor. Zacht. Stevig. Echt. Indiaas brood zoals het hoort op Leyweg 986, Den Haag.' : 'Fresh baked in tandoor. Soft. Sturdy. Real. Indian bread as it should be at Leyweg 986, Den Haag.'}
          </p>
        </div>
      </section>

      <section className="bg-[#FFFAF5] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-[#1B2B5E] mb-8">
            {isNl ? 'Wat Maakt Naan Zo Speciaal' : 'What Makes Naan So Special'}
          </h2>
          <div className="prose prose-lg max-w-none text-[#1A1A1A] space-y-5">
            {isNl ? (
              <>
                <p>Naan in Den Haag is niet iets wat je thuis kunt bakken in je oven. Naan brood wordt gemaakt in een <Link href={`${base}/tandoori-den-haag`} className="text-[#D4AF37] hover:underline">tandoor</Link> - een verticale kleioven die echt heet wordt. Veel heter dan een normale oven. De hitte van een tandoor bereikt temperaturen boven de vijfhonderd graden Celsius. Die extreme hitte geeft naan zijn karakteristieke koolstof-spikkel, zijn zacht-gerookt binnenwerk, zijn licht-geblakerde oppervlak. Dit is waarom tandoori naan niet kan worden gedupliceerd in een gewone oven. Dit is waarom je echte naan moet eten in een restaurant dat een tandoor heeft.</p>
                <p>Chopras heeft een tandoor. Dit is niet iets dat veel restaurants in Den Haag hebben. Een tandoor vereist expertise om te onderhouden. Het vereist begrijp van temperatuur, timing, voling. Het vereist hoe je het deeg in de oven krijgt zonder het te verbranden. Dit zijn dingen die je alleen leert als je jaren aan tandoor naan werkt. Onze chef hier heeft die jaren. Daarom smaakt onze naan anders dan naan brood van restaurants die het in een normale oven bakken.</p>
                <p>Indiaas flatbread bestaat in vele vormen. Er is roti. Er is paratha. Er is kulcha. Maar naan is misschien het meest iconische. Het is het brood dat je ziet in Indiase restaurants overal ter wereld. Het is het brood dat je krijgt wanneer je om Indiaas brood vraagt. Dit is waarom het goed moet zijn. Dit is waarom Chopras naan den haag serveert met dezelfde zorg als de rest van onze voedsel.</p>
                <p>Naan Den Haag kost ongeveer vier tot zes euro per stuk, afhankelijk van wat je erop hebt. Knoflook naan. <Link href={`${base}/tandoori-den-haag`} className="text-[#D4AF37] hover:underline">Tandoori</Link> naan. Peshwari naan met noten en rozijn. Dit zijn alle variaties die mogelijk zijn omdat je de basis tandoor naan eerste moet hebben. En de basis tandoor naan moet perfect zijn.</p>
              </>
            ) : (
              <>
                <p>Naan in Den Haag is not something you can bake at home in your oven. Naan bread is made in a <Link href={`${base}/tandoori-den-haag`} className="text-[#D4AF37] hover:underline">tandoor</Link> - a vertical clay oven that gets very hot. Much hotter than a normal oven. The heat of a tandoor reaches temperatures above five hundred degrees Celsius. That extreme heat gives naan its characteristic carbon flecks, its soft-charred interior, its lightly-scorched surface. This is why tandoori naan cannot be duplicated in a regular oven. This is why you must eat real naan in a restaurant that has a tandoor.</p>
                <p>Chopras has a tandoor. This is not something many restaurants in Den Haag have. A tandoor requires expertise to maintain. It requires understanding of temperature, timing, touch. It requires knowing how you get the dough into the oven without burning it. These are things you only learn if you spend years working with tandoor naan. Our chef here has spent those years. That is why our naan tastes different from naan bread from restaurants that bake it in a normal oven.</p>
                <p>Indian flatbread exists in many forms. There is roti. There is paratha. There is kulcha. But naan is perhaps the most iconic. It is the bread you see in Indian restaurants everywhere in the world. It is the bread you get when you ask for Indian bread. This is why it must be good. This is why Chopras serves naan Den Haag with the same care as the rest of our food.</p>
                <p>Naan Den Haag costs about four to six euros per piece, depending on what you put on it. Garlic naan. <Link href={`${base}/tandoori-den-haag`} className="text-[#D4AF37] hover:underline">Tandoori</Link> naan. Peshwari naan with nuts and raisins. These are all variations that are possible because you must have the base tandoor naan first. And the base tandoor naan must be perfect.</p>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-[#1B2B5E] mb-8">
            {isNl ? 'Hoe Naan Wordt Gemaakt bij Chopras' : 'How Naan Is Made at Chopras'}
          </h2>
          <div className="prose prose-lg max-w-none text-[#1A1A1A] space-y-5">
            {isNl ? (
              <>
                <h3 className="font-heading text-2xl text-[#1B2B5E] mt-6 mb-4">Het Deeg</h3>
                <p>Naan deeg begint simpel: bloem, zout, yoghurt, water, en een klein beetje olie. Het wordt gemengd en gekt totdat het elastisch is. Dan wordt het lang gekt - dit is belangrijk. Het deeg moet ontspannen. Het moet voelen zacht. Dit gebeurt meestal drie tot vier uur, meestal in een warme plaats. Als je het deeg niet lang genoeg rust, wordt de naan taai.</p>

                <h3 className="font-heading text-2xl text-[#1B2B5E] mt-6 mb-4">De Tandoor-Voorbereiding</h3>
                <p>De tandoor wordt opgestookt totdat het roodheet is van binnenin. Dat kan een uur duren. Je voelt niet alleen de temperatuur, je voelt het zelfs op afstand. De hitte is intens. Als de tandoor klaar is, wordt koolstof binnenin binnenin uitgeveegd totdat het schoon is.</p>

                <h3 className="font-heading text-2xl text-[#1B2B5E] mt-6 mb-4">Het Bakken</h3>
                <p>Deegballen worden geplet in ongeveer driekwart duim dikke cirkels. Ze kunnen glad zijn of kunnen vertrekken en er grillig uitzien. Dit is OK. Dit is voelt. Ze worden in de tandoor gegoooid via een lange pook aan het einde van een lange staf. Ze kleven aan de binnenwand van de tandoor. Ze bakken van boven, van onder, van beide zijden. Dat duurt ongeveer twee minuten. Ze blazen op. Ze blazen op meer. Ze krijgen blaren. Ze krijgen kolenstukken. Ze ruiken ongeloflijk.</p>

                <h3 className="font-heading text-2xl text-[#1B2B5E] mt-6 mb-4">Afwerking</h3>
                <p>Ze worden uit de tandoor gehaald met dezelfde lange pook. Ze worden op een bord gelegd. Ze worden onmiddellijk met gesmolten boter geborsteld. Als je knoflook naan wilt, wordt fijngehakte knoflook gesprenkeld bovenop de boter. Dit is naan brood. Dit is wat echte Indiaas brood is.</p>
              </>
            ) : (
              <>
                <h3 className="font-heading text-2xl text-[#1B2B5E] mt-6 mb-4">The Dough</h3>
                <p>Naan dough starts simple: flour, salt, yoghurt, water, and a small amount of oil. It is mixed and kneaded until it is elastic. Then it is rested a long time - this is important. The dough must relax. It must feel soft. This usually happens three to four hours, usually in a warm place. If you do not rest the dough long enough, the naan will be tough.</p>

                <h3 className="font-heading text-2xl text-[#1B2B5E] mt-6 mb-4">The Tandoor Preparation</h3>
                <p>The tandoor is fired up until it is glowing red inside. That can take an hour. You do not just feel the temperature, you feel it from a distance. The heat is intense. When the tandoor is ready, the coal inside is swept out until it is clean.</p>

                <h3 className="font-heading text-2xl text-[#1B2B5E] mt-6 mb-4">The Baking</h3>
                <p>Dough balls are flattened into roughly three-quarter inch thick circles. They can be smooth or can be torn and look irregular. This is okay. This is feel. They are thrown into the tandoor via a long stick on the end of a long pole. They stick to the inner wall of the tandoor. They bake from above, from below, from both sides. That takes about two minutes. They puff. They puff more. They get blisters. They get coal spots. They smell incredible.</p>

                <h3 className="font-heading text-2xl text-[#1B2B5E] mt-6 mb-4">The Finish</h3>
                <p>They are removed from the tandoor with the same long pole. They are placed on a plate. They are immediately brushed with melted butter. If you want garlic naan, finely chopped garlic is sprinkled on top of the butter. This is naan bread. This is what real Indian bread is.</p>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="bg-[#1B2B5E] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-white mb-10">
            {isNl ? 'Veelgestelde Vragen Over Naan' : 'Frequently Asked Questions About Naan'}
          </h2>
          <div className="space-y-4">
            {[
              {
                q: isNl ? "Wat is het verschil tussen naan en roti?" : "What is the difference between naan and roti?",
                a: isNl
                  ? "Naan is gemaakt met gist en yoghurt. Roti is gemaakt met alleen bloem en water. Naan gaat in een tandoor. Roti gaat op een pan. Naan voelt zacht. Roti voelt dunner. Beide zijn goed. Ze zijn gewoon anders."
                  : "Naan is made with yeast and yoghurt. Roti is made with only flour and water. Naan goes in a tandoor. Roti goes on a griddle. Naan feels soft. Roti feels thinner. Both are good. They are just different.",
              },
              {
                q: isNl ? "Is naan vegetarisch?" : "Is naan vegetarian?",
                a: isNl
                  ? "Ja, naan is vegetarisch. Het bevat bloem, water, yoghurt, zout, en boter. Er is geen vlees of vis. Het is ook halal gezonde."
                  : "Yes, naan is vegetarian. It contains flour, water, yoghurt, salt, and butter. There is no meat or fish. It is also halal-friendly.",
              },
              {
                q: isNl ? "Kan ik naan thuis in mijn oven bakken?" : "Can I bake naan at home in my oven?",
                a: isNl
                  ? "Je kunt naan-achtig brood in je oven bakken, maar het wordt niet hetzelfde zijn. De tandoor hitte is anders. Probeer het zeker, maar kom ook naar Chopras om echte tandoori naan te voelen."
                  : "You can bake naan-like bread in your oven, but it will not be the same. Tandoor heat is different. Try it by all means, but also come to Chopras to taste real tandoori naan.",
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

      <section className="bg-[#FFFAF5] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-[#1B2B5E] mb-8">
            {isNl ? 'Naan Bestellen en Genieten' : 'Order and Enjoy Naan'}
          </h2>
          <p className="text-[#1A1A1A] text-lg leading-relaxed mb-8">
            {isNl
              ? 'Naan is het voedsel dat je deelt. Het is het voedsel dat je nast een curry eet. Het is het voedsel dat voelt als India. Bezoek Chopras op Leyweg 986, Den Haag. Bestel naan brood vers uit onze tandoor. Open dinsdag tot zondag.'
              : 'Naan is the food you share. It is the food you eat next to a curry. It is the food that feels like India. Visit Chopras at Leyweg 986, Den Haag. Order naan bread fresh from our tandoor. Open Tuesday to Sunday.'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href={`${base}/contact`} className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#C7A348] bg-[rgba(199,163,72,0.1)] px-6 py-3 text-[#C7A348] text-sm font-medium uppercase tracking-wide transition-all duration-200 ease-out hover:bg-[#C7A348] hover:text-white active:scale-[0.98] min-h-[48px]">
              {tr.common.reserve}
            </Link>
            <Link href={`${base}/menu`} className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#C7A348] bg-[rgba(199,163,72,0.1)] px-6 py-3 text-[#C7A348] text-sm font-medium uppercase tracking-wide transition-all duration-200 ease-out hover:bg-[#C7A348] hover:text-white active:scale-[0.98] min-h-[48px]">
              {tr.common.viewMenu}
            </Link>
            <Link href={`${base}/butter-chicken-den-haag`} className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#C7A348] bg-[rgba(199,163,72,0.1)] px-6 py-3 text-[#C7A348] text-sm font-medium uppercase tracking-wide transition-all duration-200 ease-out hover:bg-[#C7A348] hover:text-white active:scale-[0.98] min-h-[48px]">
              {isNl ? 'Butter Chicken Verkennen' : 'Explore Butter Chicken'}
            </Link>
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS SECTION */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-[#1B2B5E] mb-8">
            {isNl ? 'Meer Gerechten Ontdekken' : 'Explore More Dishes'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Link href={`${base}/tandoori-den-haag`} className="block p-6 bg-[#FFFAF5] rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">{isNl ? 'Tandoori' : 'Tandoori'}</p>
              <p className="text-[#1B2B5E] font-semibold">{isNl ? 'Ontdek onze tandoori-specialiteiten in Den Haag' : 'Discover our tandoori specialities in Den Haag'}</p>
            </Link>
            <Link href={`${base}/dal-makhani-den-haag`} className="block p-6 bg-[#FFFAF5] rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">{isNl ? 'Vegetarisch' : 'Vegetarian'}</p>
              <p className="text-[#1B2B5E] font-semibold">{isNl ? 'Dal Makhani Den Haag' : 'Dal Makhani Den Haag'}</p>
            </Link>
            <Link href={`${base}/chaat-den-haag`} className="block p-6 bg-[#FFFAF5] rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">{isNl ? 'Streetfood' : 'Street Food'}</p>
              <p className="text-[#1B2B5E] font-semibold">{isNl ? 'Indiaas straatvoedsel en chaat Den Haag' : 'Indian street food and chaat Den Haag'}</p>
            </Link>
            <Link href={`${base}/catering`} className="block p-6 bg-[#FFFAF5] rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">{isNl ? 'Catering' : 'Catering'}</p>
              <p className="text-[#1B2B5E] font-semibold">{isNl ? 'Wilt u dit gerecht voor uw evenement? Indiaas catering Den Haag' : 'Want this dish at your event? Indian catering Den Haag'}</p>
            </Link>
          </div>
          <div className="text-center space-y-4">
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
