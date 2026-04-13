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
    en: 'Indian Restaurant Near Peace Palace Den Haag | Chopras Indian Restaurant',
    nl: 'Indiaas Restaurant Friedespaleis Den Haag | Chopras Indian Restaurant',
  }
  const descriptions = {
    en: 'Indian restaurant near Peace Palace Den Haag. Chopras Indian Restaurant is 10 minutes from Leyweg 986. Authentic food for diplomats and tourists. Book a table now.',
    nl: 'Authentiek Indiaas restaurant dicht bij Friedespaleis in Den Haag. Chopras serveert authentieke currys, biryani, tandoori.',
  }
  return {
    title: titles[locale],
    description: descriptions[locale],
    alternates: {
      canonical: getLocalizedUrl(locale, 'indian-restaurant-near-peace-palace-den-haag'),
      languages: { en: getLocalizedUrl('en', 'indian-restaurant-near-peace-palace-den-haag'), nl: getLocalizedUrl('nl', 'indian-restaurant-near-peace-palace-den-haag'), 'x-default': getLocalizedUrl('en', 'indian-restaurant-near-peace-palace-den-haag') },
    },
  }
}

export default function IndianRestaurantPeacePalacePage({ params }: Props) {
  const { locale } = params
  const tr = getTranslations(locale)
  const base = `/${locale}`
  const isNl = locale === 'nl'

  return (
    <>
      <JsonLd data={getLocalRestaurantSchema(locale, ['Den Haag'], getLocalizedUrl(locale, 'indian-restaurant-near-peace-palace-den-haag'))} />
      <JsonLd data={getBreadcrumbSchema([
        { name: tr.common.nav.home, item: getLocalizedUrl(locale) },
        { name: isNl ? 'Bij Friedespaleis' : 'Near Peace Palace', item: getLocalizedUrl(locale, 'indian-restaurant-near-peace-palace-den-haag') },
      ])} />

      <section className="bg-[#1B2B5E] py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full border border-[#C7A348]/40 bg-white/10 backdrop-blur-sm mb-4">
            <span className="text-[#C7A348] text-xs font-medium uppercase tracking-widest">
              • NEAR YOU · CHOPRAS INDIAN RESTAURANT · DEN HAAG •
            </span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}>
            {isNl ? 'Indiaas Restaurant dicht bij Friedespaleis' : 'Indian Restaurant Near Peace Palace'}
          </h1>
          <p className="text-white/75 text-lg md:text-xl" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.7)' }}>
            {isNl ? 'Chopras op Leyweg. Tien minuten van het Friedespaleis. Authentiek Indiaas. Reserveer nu.' : 'Chopras on Leyweg. Ten minutes from Peace Palace. Authentic Indian. Book now.'}
          </p>
        </div>
      </section>

      <section className="bg-[#FFFAF5] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-[#1B2B5E] mb-8">
            {isNl ? 'Chopras dicht bij Friedespaleis' : 'Chopras Near Peace Palace'}
          </h2>
          <div className="prose prose-lg max-w-none text-[#1A1A1A] space-y-5">
            {isNl ? (
              <>
                <p>Als je in de buurt van het Friedespaleis bent - voor werk, voor bezoek, voor toerisme - je bent dicht bij Chopras. Ons restaurant op Leyweg 986 is maar tien minuten rijden van het centrum waar het Friedespaleis staat. Je kunt voorbij gaan na je werk of je bezochten, en je krijgt echte Indiase eten in plaats van snelkost.</p>
                <p>Veel mensen van het Friedespaleis - diplomaten, bezoekers, werknemers - komen naar Chopras. Ze weten dat ze hier echt Indiaas eten kunnen krijgen. Niet voorgekookt. Niet uit een pakje. Echte geur, echte smaak, echte warmte. Dit is wat ze van India verwachten, en dit is wat we geven.</p>
                <p>We zijn makkelijk bereikbaar van het centrum. Parkeren is beschikbaar. Je kunt er om acht uur avonds heen voor diner. Of je kunt er om half twaalf &apos;s nachts heen na theater of een evenement. We zijn altijd open, altijd warm, altijd klaar voor jou.</p>
              </>
            ) : (
              <>
                <p>If you are near the Peace Palace - for work, for a visit, for tourism - you are close to Chopras. Our restaurant on Leyweg 986 is only ten minutes drive from the centre where the Peace Palace is located. You can pass by after work or your visit, and you get real Indian food instead of fast food.</p>
                <p>Many people from the Peace Palace - diplomats, visitors, employees - come to Chopras. They know that they can get real Indian food here. Not pre-cooked. Not from a packet. Real aroma, real taste, real warmth. This is what they expect from India, and this is what we give.</p>
                <p>We are easily accessible from the city centre. Parking is available. You can come at eight at night for dinner. Or you can come at midnight after theatre or an event. We are always open, always warm, always ready for you.</p>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-[#1B2B5E] mb-8">
            {isNl ? 'Wat te Doen Dicht bij Chopras' : 'What To Do Near Chopras'}
          </h2>
          <div className="prose prose-lg max-w-none text-[#1A1A1A] space-y-5">
            {isNl ? (
              <>
                <h3 className="font-heading text-2xl text-[#1B2B5E] mt-8 mb-4">Friedespaleis Bezoeken</h3>
                <p>Het Friedespaleis staat op tien minuten rijden. Je kunt het bezoeken, en daarna naar Chopras gaan voor eten. Dit is een klassieke route voor bezoekers en werknemers.</p>
                
                <h3 className="font-heading text-2xl text-[#1B2B5E] mt-8 mb-4">Centrum Strandwandeling</h3>
                <p>Het centrum van Den Haag is dichtbij. Scheveningen strand is twintig minuten rijden. Je kunt wandelen, winkelieren, en als je honger hebt, kom je naar Chopras.</p>
                
                <h3 className="font-heading text-2xl text-[#1B2B5E] mt-8 mb-4">Werk in de Buurt</h3>
                <p>Veel kantoren zijn op Leyweg. Als je in de buurt werkt, ben je dicht bij Chopras voor diner na het werk.</p>
              </>
            ) : (
              <>
                <h3 className="font-heading text-2xl text-[#1B2B5E] mt-8 mb-4">Visit Peace Palace</h3>
                <p>The Peace Palace is ten minutes drive away. You can visit it, and then come to Chopras for food. This is a classic route for visitors and employees.</p>
                
                <h3 className="font-heading text-2xl text-[#1B2B5E] mt-8 mb-4">City Beach Walk</h3>
                <p>The city centre of Den Haag is nearby. Scheveningen beach is twenty minutes drive. You can walk, shop, and when you are hungry, you come to Chopras.</p>
                
                <h3 className="font-heading text-2xl text-[#1B2B5E] mt-8 mb-4">Work Nearby</h3>
                <p>Many offices are on Leyweg. If you work nearby, you are close to Chopras for dinner after work.</p>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="bg-[#FFFAF5] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-[#1B2B5E] mb-8">
            {isNl ? 'Bezoeksinfo' : 'Visit Info'}
          </h2>
          <div className="space-y-4">
            {[
              {
                q: isNl ? 'Hoe kan ik er heen?' : 'How do I get there?',
                a: isNl ? 'Auto: Leyweg 986, Den Haag. Vervoer: tram of bus naar Leyweg. Parkeren is beschikbaar aan de voorkant van het restaurant.' : 'Car: Leyweg 986, Den Haag. Public transport: tram or bus to Leyweg. Parking is available in front of the restaurant.'
              },
              {
                q: isNl ? 'Moet ik reserveren?' : 'Do I need to book?',
                a: isNl ? 'Voor groepen raden we aan te reserveren. Voor diner op rustige avonden kunt u ook binnenlopen.' : 'For groups we recommend booking. For dinner on quieter evenings you can also walk in.'
              },
              {
                q: isNl ? 'Wat zijn de openingstijden?' : 'What are the opening hours?',
                a: isNl ? 'Dinsdag tot zondag, 16:30 tot 22:30. Maandag gesloten.' : 'Tuesday to Sunday, 16:30 to 22:30. Closed Monday.'
              },
            ].map((item, idx) => (
              <details key={idx} className="group border border-[#D4AF37] rounded-lg p-6 cursor-pointer hover:bg-white/50 transition-colors">
                <summary className="font-bold text-[#1B2B5E] flex justify-between items-center">
                  {item.q}
                  <span className="text-[#D4AF37] group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-[#1A1A1A] mt-4">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-[#1B2B5E] mb-8">
            {isNl ? 'Reserveer Nu' : 'Book Now'}
          </h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={`${base}/contact`} className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#C7A348] bg-[rgba(199,163,72,0.1)] px-6 py-3 text-[#C7A348] text-sm font-medium uppercase tracking-wide transition-all duration-200 ease-out hover:bg-[#C7A348] hover:text-white active:scale-[0.98] min-h-[48px]">
              {tr.common.reserve}
            </a>
            <Link href={`${base}/menu`} className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#C7A348] bg-[rgba(199,163,72,0.1)] px-6 py-3 text-[#C7A348] text-sm font-medium uppercase tracking-wide transition-all duration-200 ease-out hover:bg-[#C7A348] hover:text-white active:scale-[0.98] min-h-[48px]">
              {tr.common.viewMenu}
            </Link>
            <Link href={`${base}/indian-restaurant-near-den-haag-centraal`} className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#C7A348] bg-[rgba(199,163,72,0.1)] px-6 py-3 text-[#C7A348] text-sm font-medium uppercase tracking-wide transition-all duration-200 ease-out hover:bg-[#C7A348] hover:text-white active:scale-[0.98] min-h-[48px]">
              {isNl ? 'Bij Centraal' : 'Near Centraal'}
            </Link>
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS SECTION */}
      <section className="bg-[#FFFAF5] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-[#1B2B5E] mb-10">
            {isNl ? 'Ontdek Onze Specialiteiten' : 'Explore Our Specialities'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href={`${base}/butter-chicken-den-haag`} className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">{isNl ? 'Butter Chicken' : 'Butter Chicken'}</p>
              <p className="text-[#1B2B5E] font-semibold">{isNl ? 'De beroemde roomkip van Chopras' : 'Chopras famous butter chicken'}</p>
            </Link>
            <Link href={`${base}/dal-makhani-den-haag`} className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">{isNl ? 'Dal Makhani' : 'Dal Makhani'}</p>
              <p className="text-[#1B2B5E] font-semibold">{isNl ? 'Langzaam gemaakte linzenmix' : 'Slow-cooked lentil medley'}</p>
            </Link>
            <Link href={`${base}/biryani-den-haag`} className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">{isNl ? 'Biryani' : 'Biryani'}</p>
              <p className="text-[#1B2B5E] font-semibold">{isNl ? 'Geurige rijst specialiteit' : 'Fragrant rice speciality'}</p>
            </Link>
            <Link href={`${base}/catering`} className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">{isNl ? 'Catering' : 'Catering'}</p>
              <p className="text-[#1B2B5E] font-semibold">{isNl ? 'Indiaas buffet voor evenementen' : 'Indian catering for events'}</p>
            </Link>
          </div>
          <div className="mt-8 text-center space-y-4">
            <p className="text-[#1A1A1A] text-base">
              <Link href={`${base}/`} className="text-[#D4AF37] hover:underline">
                {isNl ? 'Chopras Indiaas Restaurant - Indiaas eten dicht bij Friedespaleis Den Haag' : 'Chopras Indian Restaurant - Indian food near Peace Palace Den Haag'}
              </Link>
            </p>
            <p className="text-[#1A1A1A] text-base">
              {isNl ? (
                <>
                  <Link href={`${base}/menu`} className="text-[#D4AF37] hover:underline">Bekijk het volledige menu</Link> of <Link href={`${base}/contact`} className="text-[#D4AF37] hover:underline">maak een reservering</Link> bij Chopras Indiaas Restaurant dicht bij Friedespaleis Den Haag. We serveren <Link href={`${base}/halal-food-den-haag`} className="text-[#D4AF37] hover:underline">halal</Link> opties en <Link href={`${base}/blog/vegetarian-indian-food-den-haag`} className="text-[#D4AF37] hover:underline">vegetarisch</Link> gerechten.
                </>
              ) : (
                <>
                  <Link href={`${base}/menu`} className="text-[#D4AF37] hover:underline">View the full menu</Link> or <Link href={`${base}/contact`} className="text-[#D4AF37] hover:underline">book a table</Link> at Chopras Indian Restaurant near Peace Palace Den Haag. We offer <Link href={`${base}/halal-food-den-haag`} className="text-[#D4AF37] hover:underline">halal</Link> options and <Link href={`${base}/blog/vegetarian-indian-food-den-haag`} className="text-[#D4AF37] hover:underline">vegetarian</Link> dishes.
                </>
              )}
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
