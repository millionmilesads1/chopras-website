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
    en: 'Soya Chaap Den Haag | Chopras Indian Restaurant',
    nl: 'Soya Chaap Den Haag | Chopras Indian Restaurant',
  }
  const descriptions = {
    en: 'Soya chaap at Chopras Den Haag. Vegan mock meat cooked in rich curry sauce. Plant-based Indian food, halal certified. Order online or visit Leyweg 986.',
    nl: 'Soya chaap bij Chopras Den Haag. Plantaardig vleesvervanger in rijke curryaus. Veganistisch Indiaas eten, halal gecertificeerd. Bestel online of bezoek Leyweg 986.',
  }
  return {
    title: titles[locale],
    description: descriptions[locale],
    alternates: {
      canonical: `${SITE_URL}/${locale}/soya-chaap-den-haag`,
      languages: {
        en: `${SITE_URL}/en/soya-chaap-den-haag`,
        nl: `${SITE_URL}/nl/soya-chaap-den-haag`,
        'x-default': `${SITE_URL}/en/soya-chaap-den-haag`,
      },
    },
  }
}

export default function SoyaChaapPage({ params }: Props) {
  const { locale } = params
  const tr = getTranslations(locale)
  const base = `/${locale}`
  const isNl = locale === 'nl'

  return (
    <>
      <JsonLd data={getLocalRestaurantSchema(locale, ['Den Haag'], `${SITE_URL}/${locale}/soya-chaap-den-haag`)} />
      <JsonLd data={getBreadcrumbSchema([
        { name: tr.common.nav.home, item: `${SITE_URL}/${locale}` },
        { name: isNl ? 'Soya Chaap Den Haag' : 'Soya Chaap Den Haag', item: `${SITE_URL}/${locale}/soya-chaap-den-haag` },
      ])} />

      <section className="bg-[#1B2B5E] py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="h-px w-8 bg-[#D4AF37]" />
            <span
              className="text-[#D4AF37] text-xs uppercase tracking-widest font-medium"
              style={{ textShadow: '0 1px 3px rgba(0,0,0,0.8), 0 0 8px rgba(0,0,0,0.5)' }}
            >
              VEGAN INDIAN FOOD
            </span>
            <div className="h-px w-8 bg-[#D4AF37]" />
          </div>
          <h1
            className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight"
            style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}
          >
            {isNl ? 'Soya Chaap in Den Haag - Plant-Based Mock Meat bij Chopras' : 'Soya Chaap in Den Haag - Vegan Mock Meat at Chopras'}
          </h1>
          <p
            className="text-white/75 text-lg md:text-xl"
            style={{ textShadow: '0 1px 4px rgba(0,0,0,0.7)' }}
          >
            {isNl ? 'Plantaardige soya chaap. Rijke kruidensaus. Halal gecertificeerd. Leyweg 986, Den Haag.' : 'Plant-based soya chaap. Rich spiced sauce. Halal certified. Leyweg 986, Den Haag.'}
          </p>
        </div>
      </section>

      <section className="bg-[#FFFAF5] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-[#1B2B5E] mb-8">
            {isNl ? 'Wat Is Soya Chaap en Waarom Smaakt Het Zo Goed' : 'What Is Soya Chaap and Why It Tastes Amazing'}
          </h2>
          <div className="prose prose-lg max-w-none text-[#1A1A1A] space-y-5">
            {isNl ? (
              <>
                <p>Soya chaap in Den Haag bij Chopras is geen compromis. Het is geen tofu die je verstopt in een saus zodat je niet merkt dat je tofu eet. Soya chaap is echt voedsel met echte textuur, structuur en mond gevoel. Het bestaat uit soya chunks - gecultiveerde plantaardige eiwitten die je net als vlees kunt koken. Als je <Link href={`${base}/blog/vegetarian-indian-food-den-haag`} className="text-[#D4AF37] hover:underline">vegetarisch</Link> bent of vegan leeft, weet je al hoe lastig het is om echte mock meat te vinden in Den Haag. Soya chaap voelt niet als een vervanger. Het voelt gewoon als eten.</p>
                <p>Veel restaurants serveren vegetarisch eten omdat ze moeten. Chopras serveert soya chaap omdat wij ervan houden. Als je vegetarisch bent, moet je niet met minder tevreden zijn. Je zou waarschijnlijk graag eten wat anderen eten - een echte curry met textuur, warmte, laaglagen van smaak. <Link href={`${base}/blog/vegetarian-indian-food-den-haag`} className="text-[#D4AF37] hover:underline">Plant based Indian food</Link> hoeft niet minder lekker te zijn dan de vlees variant. De soya chaap absorbeert de saus op dezelfde manier als lamsvlees dat zou doen. In een rijke tomaten en uien saus met gember, knoflook en kruiden die die ochtend zijn gemalen, wordt soya chaap voedzaam, bevredigend en ongeloflijk smakelijk.</p>
                <p>De soya chaap die wij gebruiken komt van leveranciers die dezelfde standaarden hanteren als wij. Geen GMO, geen onnodig additieven, geen chemische naamgeving die je niet kunt uitspreken. Gewoon gesteriliseerde soyabonen die in een voedzame vorm zijn verwerkt. Het is <Link href={`${base}/halal-food-den-haag`} className="text-[#D4AF37] hover:underline">halal</Link>. Het is veganistisch. Het is plantaardig. En het kost ongeveer zestien euro vijftig - betaalbaarder dan veel lamscurry&apos;s op onze kaart.</p>
                <p><Link href={`${base}/blog/vegetarian-indian-food-den-haag`} className="text-[#D4AF37] hover:underline">Vegan Indiase eetgebruiken</Link> hebben in Den Haag veel aandacht gekregen in de afgelopen jaren. Dat is niet toevallig. Authentiek voedsel dat voelt als voedsel, niet als vogelschietschot, trekt mensen aan. Soya chaap Den Haag laat zien dat je niet hoeft in te leveren op smaak, textuur of authenticiteit. Je hoeft alleen plantaardig te kiezen.</p>
              </>
            ) : (
              <>
                <p>Soya chaap in Den Haag at Chopras is not a compromise. It is not tofu hidden in sauce so you do not notice you are eating tofu. Soya chaap is real food with real texture, structure and mouthfeel. It consists of soya chunks - cultivated plant-based proteins that you can cook like meat. If you are <Link href={`${base}/blog/vegetarian-indian-food-den-haag`} className="text-[#D4AF37] hover:underline">vegetarian</Link> or vegan, you already know how hard it is to find true mock meat in Den Haag. Soya chaap does not feel like a replacement. It feels like food. It is food.</p>
                <p>Many restaurants serve vegetarian food because they have to. Chopras serves soya chaap because we love it. If you are vegetarian, you should not settle for less. You would probably like to eat what others eat - a real curry with texture, warmth, layers of flavour. <Link href={`${base}/blog/vegetarian-indian-food-den-haag`} className="text-[#D4AF37] hover:underline">Plant-based Indian food</Link> does not need to be less delicious than the meat version. Soya chaap absorbs sauce the way lamb would. In a rich tomato and onion sauce with ginger, garlic, and spices ground that morning, soya chaap becomes nourishing, satisfying and incredible.</p>
                <p>The soya chaap we use comes from suppliers who hold the same standards we do. No GMO, no unnecessary additives, no chemical names you cannot pronounce. Just sterilised soybeans processed into a nourishing form. It is <Link href={`${base}/halal-food-den-haag`} className="text-[#D4AF37] hover:underline">halal</Link>. It is vegan. It is plant-based. And it costs around sixteen euro fifty - cheaper than many lamb curries on our menu.</p>
                <p><Link href={`${base}/blog/vegetarian-indian-food-den-haag`} className="text-[#D4AF37] hover:underline">Vegan Indian food</Link> has received much attention in Den Haag in recent years. That is not chance. Authentic food that feels like food, not like a substitute, draws people in. Soya chaap Den Haag shows that you do not have to compromise on taste, texture or authenticity. You only have to choose plant-based.</p>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-[#1B2B5E] mb-8">
            {isNl ? 'Hoe Soya Chaap Wordt Gemaakt bij Chopras' : 'How Soya Chaap Is Made at Chopras'}
          </h2>
          <div className="prose prose-lg max-w-none text-[#1A1A1A] space-y-5">
            {isNl ? (
              <>
                <h3 className="font-heading text-2xl text-[#1B2B5E] mt-6 mb-4">{isNl ? 'Voorbereiding van de Soya' : 'Soya Preparation'}</h3>
                <p>Soya chunks worden eerst gerehydrateerd in warm water. Dit is geen snelle stap. Ze moeten langzaam water opnemen, niet uit elkaar vallen. Onze koks timing dit perfect - meestal tussen tien en vijftien minuten, tot de chunks voelbaar maar niet mushy zijn. Dat is het eerste kritieke moment. De tijd en temperatuur moeten precies goed zijn. Als je te lang wacht, raakt het pap. Als je niet lang genoeg wacht, blijft het te droog.</p>
                <p>Na rehydratatie worden de chunks zachtjes gesneden als dat nodig is. Sommige recepten vereisen grotere stukken, sommige kleinere. Dit hangt af van de saus en het gestoomde evenwicht dat we willen bereiken. Onze koks kennen de limieten van hun soya. Ze werken ermee elke dag en weten wanneer het klaar is door voeling en ervaring, niet door klok. Dit is het verschil tussen voedsel maken en voedsel bereiden.</p>

                <h3 className="font-heading text-2xl text-[#1B2B5E] mt-6 mb-4">{isNl ? 'De Saus: Het Hart van Soya Chaap' : 'The Sauce: The Heart of Soya Chaap'}</h3>
                <p>De saus begint niet met poeder. Het begint met uien. Veel uien. Ze worden in boter gesnipperd totdat ze aan het verschrompelen zijn, net totdat ze beginnen aan te kleuren. Dan voegen we verse gember en knoflook toe die die ochtend in een vijzel zijn gestampt. Geen gejarkte pasta. Geen ingevroren blokjes. Verse gember en knoflook hebben een andere geur, een ander karakter. Ze voelen verschillend in je mond.</p>
                <p>Verse tomaten - niet uit blik, niet uit een tetrapack, maar echte tomaten - worden langzaam gesneden en toegevoegd. Ze koken af in de hitte van de uien en gember totdat ze volledig zijn afgebroken. Geen klomp meer. Geen structuur meer. Alleen een dieprode saus vol tomaten essentie. Dit duurt normaal dertig minuten. Soms langer. Geen voortvarendheid.</p>
                <p>Dan voegen we de kruiden toe: tandoori masala, garam masala, rode chili, kurkuma - alles vers gemalen die ochtend. Geen voorgemaakte zakjes. Geen voorraden die twee maanden oud zijn en hun kleur en geur hebben verloren. Deze kruiden zijn krachtig, levendig, echt. Ze vermengen zich met de saus en veranderen de kleur, de geur, de smaak in één keer.</p>

                <h3 className="font-heading text-2xl text-[#1B2B5E] mt-6 mb-4">{isNl ? 'Het Combineren: Waar de Magie Gebeurt' : 'The Combination: Where the Magic Happens'}</h3>
                <p>De gerehydrateerde soya wordt in de saus gegeven. En dan gebeurt iets bijzonders. De soya begint alle aromaten op te zuigen. Langzaam. Voorzichtig. Minstens een half uur, meestal langer. De saus wordt voller, visceuzer, rijker. Elke minuut verandert het gerecht. Dit is waarom je soya chaap niet in tien minuten kunt maken. Dit is waarom veel restaurants het fout doen. Ze hebben geen geduld.</p>
                <p>Tegen het einde voegt onze chef vers gesmolten boter toe over het oppervlak. De boter vermengt zich met de saus. Het voegt glans toe. Het voegt mondgevoel toe. Het voegt warmte en luxe toe. Dit is soya chaap zoals het hoort te zijn. Dit is vegan Indiaans voedsel dat meer lijkt op echte culinaire kunst dan op voedselvervanging.</p>

                <h3 className="font-heading text-2xl text-[#1B2B5E] mt-6 mb-4">{isNl ? 'Waarom Dit Verschil Uitmaakt' : 'Why This Difference Matters'}</h3>
                <p>Het hele proces - van voorbereiding tot bord - is identiek aan wat we zouden doen met lamscurry. Het respecteert dezelfde principes. Respect voor verse ingrediënten. Voorzichtige techniek. Geduld. Voelen hoe het voedsel evolueert terwijl het kookt. Dit is waarschijnlijk waarom plant based Indian in Den Haag zo goed werkt. Het voelt niet gemaakt voor mensen-die-geen-vlees-eten. Het voelt gemaakt voor mensen die goed eten willen. Iedereen die goed eet wil dat zelfde niveau van zorg, authenticiteit en smaak. Soya chaap bij Chopras biedt dat.</p>
              </>
            ) : (
              <>
                <h3 className="font-heading text-2xl text-[#1B2B5E] mt-6 mb-4">Soya Preparation</h3>
                <p>Soya chunks are first rehydrated in warm water. This is not a quick step. They must absorb water slowly, not fall apart. Our cooks time this perfectly - usually between ten and fifteen minutes, until the chunks are tender but not mushy. That is the first critical moment. Time and temperature must be exactly right. If you wait too long, it becomes paste. If you do not wait long enough, it stays too dry.</p>
                <p>After rehydration, the chunks are gently cut if needed. Some recipes call for larger pieces, some for smaller. This depends on the sauce and the cooked balance we want to achieve. Our cooks know the limits of their soya. They work with it every day and know when it is ready through touch and experience, not clock. This is the difference between making food and cooking food.</p>

                <h3 className="font-heading text-2xl text-[#1B2B5E] mt-6 mb-4">The Sauce: The Heart of Soya Chaap</h3>
                <p>The sauce does not start with powder. It starts with onions. Many onions. They are softened in butter until they are shrinking, just until they begin to colour. Then we add fresh ginger and garlic that were pounded in a mortar that same morning. No jarred paste. No frozen cubes. Fresh ginger and garlic have a different smell, a different character. They feel different in your mouth.</p>
                <p>Fresh tomatoes - not tinned, not from a tetrapack, but real tomatoes - are slowly cut and added. They cook down in the heat of the onions and ginger until completely broken down. No lump left. No structure left. Only a deep red sauce full of tomato essence. This usually takes thirty minutes. Sometimes longer. No rushing.</p>
                <p>Then we add the spices: tandoori masala, garam masala, red chilli, turmeric - all ground fresh that morning. No pre-packaged mixes. No stock two months old that has lost colour and smell. These spices are powerful, vibrant, real. They mingle with the sauce and change the colour, the smell, the taste all at once.</p>

                <h3 className="font-heading text-2xl text-[#1B2B5E] mt-6 mb-4">The Combination: Where the Magic Happens</h3>
                <p>The rehydrated soya goes into the sauce. And then something special happens. The soya begins to absorb every aroma. Slowly. Carefully. At least half an hour, usually longer. The sauce becomes fuller, more viscous, richer. Every minute changes the dish. This is why you cannot make soya chaap in ten minutes. This is why many restaurants get it wrong. They do not have patience.</p>
                <p>Toward the end, our chef adds fresh melted butter across the surface. The butter mingles with the sauce. It adds gloss. It adds mouthfeel. It adds warmth and luxury. This is soya chaap as it should be. This is vegan Indian food that feels more like real culinary art than food substitution.</p>

                <h3 className="font-heading text-2xl text-[#1B2B5E] mt-6 mb-4">Why This Difference Matters</h3>
                <p>The entire process - from prep to plate - is identical to what we would do with lamb curry. It respects the same principles. Respect for fresh ingredients. Careful technique. Patience. Feeling how the food evolves as it cooks. This is probably why plant-based Indian in Den Haag works so well. It does not feel made for people-who-do-not-eat-meat. It feels made for people who want good food. Everyone who eats well wants that same level of care, authenticity and taste. Soya chaap at Chopras delivers that.</p>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="bg-[#1B2B5E] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-white mb-10">
            {isNl ? 'Vragen Over Soya Chaap en Plantaardig Indiaas Eten' : 'Questions About Soya Chaap and Vegan Indian Food'}
          </h2>
          <div className="space-y-4">
            {[
              {
                q: isNl ? "Is soya chaap echt veganistisch?" : "Is soya chaap actually vegan?",
                a: isNl
                  ? "Ja. Soya chaap bestaat uit soya chunks, water, zout en kruiden. Er is geen dierlijk product in het gerecht zelf. De saus bevat boter, wat vegetarisch maar niet veganistisch is. Als je volledig veganistisch bent, vraag dan om plantaardige boter in plaats daarvan. Wij kunnen dat aanpassen."
                  : "Yes. Soya chaap consists of soya chunks, water, salt and spices. There is no animal product in the dish itself. The sauce contains butter, which is vegetarian but not vegan. If you are fully vegan, ask for plant-based butter instead. We can adjust.",
              },
              {
                q: isNl ? "Hoe smaakt soya chaap vergeleken met echte vlees curry?" : "How does soya chaap taste compared to meat curry?",
                a: isNl
                  ? "Soya chaap absorbeert sauzen net als vlees zou doen. De textuur is vergelijkbaar - stevig maar mals. De smaak hangt af van de saus en kruiden, niet van de soya zelf. Veel gasten kunnen het verschil niet eens proeven als ze niet weten dat ze soya chaap eten."
                  : "Soya chaap absorbs sauces the way meat would. The texture is similar - firm but tender. The taste depends on the sauce and spices, not the soya itself. Many guests cannot tell the difference if they do not know they are eating soya chaap.",
              },
              {
                q: isNl ? "Waar is soya chaap gemaakt van?" : "What is soya chaap made from?",
                a: isNl
                  ? "Soya chaap is gemaakt van soyabonen die zijn verwerkt in chunks. Geen GMO, geen kunstmatige additieven. Gewoon plantaardig eiwit in een vorm die je kunt koken zoals je vlees zou koken. Het is halal, het is veganistisch, het is gezond."
                  : "Soya chaap is made from soybeans processed into chunks. No GMO, no artificial additives. Just plant-based protein in a form you can cook like you would cook meat. It is halal, it is vegan, it is healthy.",
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
            {isNl ? 'Meer Vegetarische Opties en Vegan Indiaans Voedsel' : 'More Vegetarian Options and Vegan Indian Food'}
          </h2>
          <p className="text-[#1A1A1A] text-lg leading-relaxed mb-6">
            {isNl
              ? <>Soya chaap is slechts een optie in ons scala van <Link href={`${base}/blog/vegetarian-indian-food-den-haag`} className="text-[#D4AF37] hover:underline">plantaardig Indiaas voedsel</Link>. Ons volledige menu bevat ook dal makhani, chana masala, palak paneer, aloo gobi, en groente biryani. Elk gerecht wordt volledig bereid met dezelfde zorg als onze vleesgerechten. Geen compromissen. Geen aparte voorbereiding. Hetzelfde niveau van authenticiteit. Dit is vegetarisch eten dat je niet voelt als minder dan de vlees variant. Dit is eten dat je kiest omdat het goed is, niet omdat je geen vlees eet.</>
              : <>Soya chaap is just one option in our range of <Link href={`${base}/blog/vegetarian-indian-food-den-haag`} className="text-[#D4AF37] hover:underline">plant-based Indian food</Link>. Our full menu also includes dal makhani, chana masala, palak paneer, aloo gobi, and vegetable biryani. Each dish is fully prepared with the same care as our meat dishes. No compromise. No separate preparation. The same level of authenticity. This is vegetarian food you do not feel as less than the meat version. This is food you choose because it is good, not because you do not eat meat.</>
            }
          </p>
          <p className="text-[#1A1A1A] text-lg leading-relaxed mb-8">
            {isNl
              ? 'Wil je soya chaap proeven? Kijk op onze menu pagina voor het volledige aanbod, of maak een reservering voor een diner ervaringing. Bestel online via onze website, of bel ons op Leyweg 986, Den Haag. Wij open dinsdag tot zondag. Laten we je voedingskeuzes eren met voedsel dat ervan houdt.'
              : 'Want to try soya chaap? Check our menu page for the full range, or make a reservation for a dining experience. Order online via our website, or call us at Leyweg 986, Den Haag. We are open Tuesday to Sunday. Let us honour your dietary choices with food that loves them.'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
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
            <Link
              href={`${base}/dal-makhani-den-haag`}
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#C7A348] bg-[rgba(199,163,72,0.1)] px-6 py-3 text-[#C7A348] text-sm font-medium uppercase tracking-wide transition-all duration-200 ease-out hover:bg-[#C7A348] hover:text-white active:scale-[0.98] min-h-[48px]"
            >
              {isNl ? 'Dal Makhani Ontdekken' : 'Explore Dal Makhani'}
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
            <Link href={`${base}/dal-makhani-den-haag`} className="block p-6 bg-[#FFFAF5] rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">{isNl ? 'Vegetarisch' : 'Vegetarian'}</p>
              <p className="text-[#1B2B5E] font-semibold">{isNl ? 'Dal Makhani Den Haag' : 'Dal Makhani Den Haag'}</p>
            </Link>
            <Link href={`${base}/pani-puri-den-haag`} className="block p-6 bg-[#FFFAF5] rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">{isNl ? 'Streetfood' : 'Street Food'}</p>
              <p className="text-[#1B2B5E] font-semibold">{isNl ? 'Pani Puri Den Haag' : 'Pani Puri Den Haag'}</p>
            </Link>
            <Link href={`${base}/chaat-den-haag`} className="block p-6 bg-[#FFFAF5] rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">{isNl ? 'Chaat' : 'Chaat'}</p>
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
