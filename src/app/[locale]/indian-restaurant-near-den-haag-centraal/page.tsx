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
    en: 'Indian Restaurant Near Den Haag Centraal | Chopras Indian Restaurant',
    nl: 'Indiaas Restaurant bij Den Haag Centraal | Chopras Indian Restaurant',
  }
  const descriptions = {
    en: 'Authentic Indian restaurant near Den Haag Central Station. Chopras is convenient for commuters and visitors.',
    nl: 'Authentiek Indiaas restaurant dicht bij Den Haag Centraal. Chopras is gemakkelijk bereikbaar voor forenzen.',
  }
  return {
    title: titles[locale],
    description: descriptions[locale],
    alternates: {
      canonical: `${SITE_URL}/${locale}/indian-restaurant-near-den-haag-centraal`,
      languages: { en: `${SITE_URL}/en/indian-restaurant-near-den-haag-centraal`, nl: `${SITE_URL}/nl/indian-restaurant-near-den-haag-centraal`, 'x-default': `${SITE_URL}/en/indian-restaurant-near-den-haag-centraal` },
    },
  }
}

export default function IndianRestaurantCentraalPage({ params }: Props) {
  const { locale } = params
  const tr = getTranslations(locale)
  const base = `/${locale}`
  const isNl = locale === 'nl'

  return (
    <>
      <JsonLd data={getLocalRestaurantSchema(locale, ['Den Haag'], `${SITE_URL}/${locale}/indian-restaurant-near-den-haag-centraal`)} />
      <JsonLd data={getBreadcrumbSchema([
        { name: tr.common.nav.home, item: `${SITE_URL}/${locale}` },
        { name: isNl ? 'Bij Centraal' : 'Near Centraal', item: `${SITE_URL}/${locale}/indian-restaurant-near-den-haag-centraal` },
      ])} />

      <section className="bg-[#1B2B5E] py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-[#C7A348] opacity-60" />
            <span className="text-[#C7A348] text-xs font-medium uppercase tracking-widest">
              LOCATION
            </span>
            <div className="h-px w-12 bg-[#C7A348] opacity-60" />
          </div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}>
            {isNl ? 'Indiaas Restaurant bij Den Haag Centraal' : 'Indian Restaurant Near Den Haag Centraal'}
          </h1>
          <p className="text-white/75 text-lg md:text-xl" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.7)' }}>
            {isNl ? 'Chopras op Leyweg. Tien minuten van Centraal Station. Makkelijk bereikbaar. Authentiek Indiaas.' : 'Chopras on Leyweg. Ten minutes from Central Station. Easy to reach. Authentic Indian.'}
          </p>
        </div>
      </section>

      <section className="bg-[#FFFAF5] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-[#1B2B5E] mb-8">
            {isNl ? 'Chopras dicht bij Centraal Station' : 'Chopras Near Central Station'}
          </h2>
          <div className="prose prose-lg max-w-none text-[#1A1A1A] space-y-5">
            {isNl ? (
              <>
                <p>Forenzen. Bezoekers. Toeristen. Iedereen die Den Haag Centraal Station verlaat en honger heeft, kan naar Chopras gaan. We zijn op Leyweg 986, op slechts tien minuten rijden van het station. Met tram of bus ben je er nog sneller. Dit is de beste plek voor eten na het station.</p>
                <p>Je komt uit de trein. Je bent moe. Je bent honger. Je wilt geen snelkost. Je wilt echte eten. Dit is wat Chopras is. We maken alles vers. <Link href={`${base}/biryani-den-haag`} className="text-[#D4AF37] hover:underline">Biryani</Link>. <Link href={`${base}/tandoori-den-haag`} className="text-[#D4AF37] hover:underline">Tandoori</Link>. Curries. Naan. Alles gemaakt op moment, niet uren geleden.</p>
                <p>Veel werknemers en bezoekers kennen ons al. Ze weten dat als ze naar Chopras gaan, ze echte Indiase keuken krijgen. Niet voorgekookt. Niet uit een pakje. Dit is waarom ze keren terug, keer op keer.</p>
              </>
            ) : (
              <>
                <p>Commuters. Visitors. Tourists. Everyone who leaves Den Haag Central Station and is hungry can go to Chopras. We are on Leyweg 986, only ten minutes drive from the station. By tram or bus you get there even faster. This is the best place to eat after the station.</p>
                <p>You get off the train. You are tired. You are hungry. You do not want fast food. You want real food. This is what Chopras is. We make everything fresh. <Link href={`${base}/biryani-den-haag`} className="text-[#D4AF37] hover:underline">Biryani</Link>. <Link href={`${base}/tandoori-den-haag`} className="text-[#D4AF37] hover:underline">Tandoori</Link>. Curries. Naan. Everything made at the moment, not hours ago.</p>
                <p>Many employees and visitors already know us. They know that when they go to Chopras, they get real Indian cooking. Not pre-cooked. Not from a packet. This is why they come back, again and again.</p>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-[#1B2B5E] mb-8">
            {isNl ? 'Gemakkelijk Bereikbaar' : 'Easy To Reach'}
          </h2>
          <div className="prose prose-lg max-w-none text-[#1A1A1A] space-y-5">
            {isNl ? (
              <>
                <h3 className="font-heading text-2xl text-[#1B2B5E] mt-8 mb-4">Met Tram</h3>
                <p>Van Centraal Station kun je tram nemen. Uitstappen bij Leyweg. Chopras is aan het einde van de straat. Vijftien minuten totaal.</p>
                
                <h3 className="font-heading text-2xl text-[#1B2B5E] mt-8 mb-4">Met Bus</h3>
                <p>Verschillende buslijnen gaan naar Leyweg. Je kunt erop stappen, je bent er in twintig minuten.</p>
                
                <h3 className="font-heading text-2xl text-[#1B2B5E] mt-8 mb-4">Met Auto</h3>
                <p>Driving van het station: tien minuten. Parkeren is beschikbaar. Gemakkelijk.</p>
                
                <h3 className="font-heading text-2xl text-[#1B2B5E] mt-8 mb-4">Delivery</h3>
                <p>Wil je niet naar buiten gaan? We bezorgen. Bestellen online, we bezorgen op Leyweg.</p>
              </>
            ) : (
              <>
                <h3 className="font-heading text-2xl text-[#1B2B5E] mt-8 mb-4">By Tram</h3>
                <p>From Central Station you can take the tram. Get off at Leyweg. Chopras is at the end of the street. Fifteen minutes total.</p>
                
                <h3 className="font-heading text-2xl text-[#1B2B5E] mt-8 mb-4">By Bus</h3>
                <p>Various bus lines go to Leyweg. You get on, you are there in twenty minutes.</p>
                
                <h3 className="font-heading text-2xl text-[#1B2B5E] mt-8 mb-4">By Car</h3>
                <p>Driving from the station: ten minutes. Parking is available. Easy.</p>
                
                <h3 className="font-heading text-2xl text-[#1B2B5E] mt-8 mb-4">Delivery</h3>
                <p>Do not want to go out? We deliver. Order online, we deliver to Leyweg.</p>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="bg-[#FFFAF5] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-[#1B2B5E] mb-8">
            {isNl ? 'Bezoekers FAQ' : 'Visitor FAQ'}
          </h2>
          <div className="space-y-4">
            {[
              {
                q: isNl ? 'Hoe lang duurt het van Centraal naar Chopras?' : 'How long does it take from Centraal to Chopras?',
                a: isNl ? 'Tram: vijftien minuten. Bus: twintig minuten. Auto: tien minuten. Je bent er snel.' : 'Tram: fifteen minutes. Bus: twenty minutes. Car: ten minutes. You get there quickly.'
              },
              {
                q: isNl ? 'Kun je zonder reservering binnenlopen?' : 'Can you just walk in?',
                a: isNl ? 'Voor lunch en diner buiten de piek uren ja. Voor avondeten in het weekeinde, raden we reservering aan.' : 'For lunch and dinner outside peak hours yes. For evening meals on weekends, we recommend booking.'
              },
              {
                q: isNl ? 'Kun je je bagage hier laten?' : 'Can you leave your luggage here?',
                a: isNl ? 'Ja. Je kunt je bagage veilig laten. Eet je diner, en je gaat naar het volgende.' : 'Yes. You can leave your luggage safely. Have your dinner, and you go to the next.'
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
            <Link href={`${base}/contact`} className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#C7A348] bg-[rgba(199,163,72,0.1)] px-6 py-3 text-[#C7A348] text-sm font-medium uppercase tracking-wide transition-all duration-200 ease-out hover:bg-[#C7A348] hover:text-white active:scale-[0.98] min-h-[48px]">
              {tr.common.reserve}
            </Link>
            <Link href={`${base}/menu`} className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#C7A348] bg-[rgba(199,163,72,0.1)] px-6 py-3 text-[#C7A348] text-sm font-medium uppercase tracking-wide transition-all duration-200 ease-out hover:bg-[#C7A348] hover:text-white active:scale-[0.98] min-h-[48px]">
              {tr.common.viewMenu}
            </Link>
            <Link href={`${base}/indian-food-delivery-den-haag`} className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#C7A348] bg-[rgba(199,163,72,0.1)] px-6 py-3 text-[#C7A348] text-sm font-medium uppercase tracking-wide transition-all duration-200 ease-out hover:bg-[#C7A348] hover:text-white active:scale-[0.98] min-h-[48px]">
              {isNl ? 'Bezorging' : 'Delivery'}
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
              <Link href={`${base}/`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">
                {isNl ? 'Chopras Indiaas Restaurant - Indiaas eten dicht bij Den Haag Centraal Station' : 'Chopras Indian Restaurant - Indian food near Den Haag Central Station'}
              </Link>
            </p>
            <p className="text-[#1A1A1A] text-base">
              {isNl ? 'Bekijk het volledige menu of' : 'View the full menu or'} <Link href={`${base}/contact`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">{isNl ? 'maak een reservering' : 'book a table at Chopras Indian Restaurant near Central Station'}</Link>.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
