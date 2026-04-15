import type { Metadata } from 'next'
import Link from 'next/link'
import JsonLd from '@/components/seo/JsonLd'
import { getLocalizedUrl } from '@/lib/utils'
import { getLocalRestaurantSchema, getBreadcrumbSchema, getFaqPageSchema, getCateringServiceSchema } from '@/lib/schema'
import { getTranslations, type Locale } from '@/lib/useTranslations'
import FaqAccordion from '@/components/sections/FaqAccordion'

type Props = { params: { locale: Locale } }

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'nl' }]
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = params
  const titles = {
    en: 'Event Venue in Den Haag | Chopras Indian Restaurant',
    nl: 'Evenementenruimte in Den Haag | Chopras Indiaas Restaurant',
  }
  const descriptions = {
    en: 'Evenementenruimte Den Haag bij Chopras Indian Restaurant. Bedrijfsfeesten, vergaderingen en teambuilding. Indiaas catering beschikbaar. Offerte aanvragen vandaag.',
    nl: 'Evenementenruimte Den Haag bij Chopras Indian Restaurant. Bedrijfsfeesten, vergaderingen en teambuilding. Indiaas catering beschikbaar. Offerte aanvragen vandaag.',
  }
  return {
    title: titles[locale],
    description: descriptions[locale],
    alternates: {
      canonical: getLocalizedUrl(locale, 'evenementenruimte-den-haag'),
      languages: { en: getLocalizedUrl('en', 'evenementenruimte-den-haag'), nl: getLocalizedUrl('nl', 'evenementenruimte-den-haag'), 'x-default': getLocalizedUrl('en', 'evenementenruimte-den-haag') },
    },
    openGraph: {
      title: titles[locale],
      description: descriptions[locale],
      url: getLocalizedUrl(locale, 'evenementenruimte-den-haag'),
      images: [{ url: '/og/home-og.jpg', width: 1200, height: 630, alt: 'Chopras Indian Restaurant Den Haag' }],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: titles[locale],
      description: descriptions[locale],
      images: ['/og/home-og.jpg'],
    },
  }
}

const faqsEn = [
  { question: 'Can you accommodate dietary restrictions?', answer: 'Yes. Vegetarian, vegan, gluten-free, allergies - we accommodate everything. Tell us what you need.' },
  { question: 'What is the capacity of the space?', answer: '25 to 80 guests comfortably. Depending on setup and arrangement, more can happen.' },
  { question: 'Can we use audio-visual equipment?', answer: 'Yes. Projectors, screens, speaker systems - everything can be set up. Tell us what you need.' },
]

const faqsNl = [
  { question: 'Kunnen jullie dieetbeperkingen accommoderen?', answer: 'Ja. Vegetarisch, vegan, gluten-vrij, allergieën - we accommoderen alles. Zeg ons wat je nodig hebt.' },
  { question: 'Wat is de capaciteit van de ruimte?', answer: '25 tot 80 gasten comfortabel. Afhankelijk van setup en arrangement, kan meer gebeuren.' },
  { question: 'Kunnen we audio-visuele apparatuur gebruiken?', answer: 'Ja. Projectoren, schermen, speakersystemen - alles kan worden ingesteld. Zeg ons wat je nodig hebt.' },
]

export default function EvenementenruimtePage({ params }: Props) {
  const { locale } = params
  const tr = getTranslations(locale)
  const base = locale === 'nl' ? '/nl' : ''
  const isNl = locale === 'nl'

  return (
    <>
      <JsonLd data={getCateringServiceSchema(locale)} />
      <JsonLd data={getLocalRestaurantSchema(locale, ['Den Haag'], getLocalizedUrl(locale, 'evenementenruimte-den-haag'))} />
      <JsonLd data={getBreadcrumbSchema([
        { name: tr.common.nav.home, item: getLocalizedUrl(locale) },
        { name: isNl ? 'Evenementenruimte' : 'Event Space', item: getLocalizedUrl(locale, 'evenementenruimte-den-haag') },
      ])} />
      <JsonLd data={getFaqPageSchema(isNl ? faqsNl : faqsEn)} />

      <section className="bg-[#1B2B5E] py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full border border-[#C7A348]/40 bg-white/10 backdrop-blur-sm mb-4">
            <span className="text-[#C7A348] text-xs font-medium uppercase tracking-widest">
              • CATERING · CHOPRAS INDIAN RESTAURANT · DEN HAAG •
            </span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}>
            {isNl ? 'Evenementenruimte in Den Haag' : 'Event Venue in Den Haag'}
          </h1>
          <p className="text-white/75 text-lg md:text-xl" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.7)' }}>
            {isNl ? 'Private ruimte voor bedrijfsuitjes. Feesten. Lunches. Bij Chopras.' : 'Private space for corporate events. Celebrations. Lunches. At Chopras.'}
          </p>
        </div>
      </section>

      <section className="bg-[#FFFAF5] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-[#1B2B5E] mb-8">
            {isNl ? 'Evenementenruimte bij Chopras' : 'Event Space at Chopras'}
          </h2>
          <div className="prose prose-lg max-w-none text-[#1A1A1A] space-y-5">
            {isNl ? (
              <>
                <p>Bedrijfsuitjes. Personeelsfeesten. Teambijeenkomsten. Launches. Veel bedrijven kiezen voor dezelfde zalencentra, dezelfde catering, dezelfde ervaring. Dat is waarom sommige bedrijven naar Chopras komen - ze willen iets anders. Ze willen authentiek. Ze willen dat hun team zich waardeert voelt.</p>
                <p>Onze evenementenruimte in Den Haag is perfect voor groepen van alle grootten. Luncheons voor tien. Reünies voor honderd. Bedrijfsdinners. Teambuilding met eten als de focus. Alles is mogelijk, alles is custom, en alles smaakt geweldig.</p>
                <p>We begrijpen wat bedrijven nodig hebben. Flexibele menu&apos;s. Timing dat perfect klikt. Serveerders die professioneel zijn maar niet stijf. Voedsel dat gesprek aanzet, niet je mond sluit. Dit is waarom bedrijven ons uitkiezen voor evenementen.</p>
              </>
            ) : (
              <>
                <p>Corporate events. Staff parties. Team meetings. Launches. Many companies choose the same event centres, the same catering, the same experience. This is why some companies come to Chopras - they want something different. They want authentic. They want their team to feel valued.</p>
                <p>Our event space in Den Haag is perfect for groups of all sizes. Lunches for ten. Reunions for one hundred. Corporate dinners. Team building with food as the focus. Everything is possible, everything is custom, and everything tastes great.</p>
                <p>We understand what companies need. Flexible menus. Timing that clicks perfectly. Servers who are professional but not stiff. Food that starts conversation, not closes your mouth. This is why companies choose us for events.</p>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-[#1B2B5E] mb-8">
            {isNl ? 'Evenementen die We Hosten' : 'Events We Host'}
          </h2>
          <div className="prose prose-lg max-w-none text-[#1A1A1A] space-y-5">
            {isNl ? (
              <>
                <h3 className="font-heading text-2xl text-[#1B2B5E] mt-8 mb-4">Bedrijfsdinners</h3>
                <p>Je wilt je team of klanten in een relaxed omgeving samen laten zijn. Indiaas eten ontspant mensen. Ze praten meer. Ze lachen meer. Ze voelen zich minder stijf in het pak.</p>
                
                <h3 className="font-heading text-2xl text-[#1B2B5E] mt-8 mb-4">Personeelsfeesten</h3>
                <p>Je personeel werkt hard. Ze verdienen iets speciaals. Indiaas eten zegt &quot;we appreciate you&quot; beter dan veel andere dingen. Ze voelen dat.</p>
                
                <h3 className="font-heading text-2xl text-[#1B2B5E] mt-8 mb-4">Launches</h3>
                <p>Je wilt een product launch, bedrijf opening, of ander groot moment. Je wilt dat het voelt speciaal. Dat eten memorabel is. Dat gasten het over hebben. Chopras is hoe je dat doet.</p>
                
                <h3 className="font-heading text-2xl text-[#1B2B5E] mt-8 mb-4">Training en Workshops</h3>
                <p>Je hebt een dag training. Je wilt dat je deelnemers energiek en blij blijven. Goed eten helpt. Onze evenementenruimte heeft alles wat je nodig hebt voor een volledige dag.</p>
              </>
            ) : (
              <>
                <h3 className="font-heading text-2xl text-[#1B2B5E] mt-8 mb-4">Corporate Dinners</h3>
                <p>You want your team or clients to be together in a relaxed setting. Indian food relaxes people. They talk more. They laugh more. They feel less stiff in their suits.</p>
                
                <h3 className="font-heading text-2xl text-[#1B2B5E] mt-8 mb-4">Staff Celebrations</h3>
                <p>Your staff works hard. They deserve something special. Indian food says &quot;we appreciate you&quot; better than many other things. They feel that.</p>
                
                <h3 className="font-heading text-2xl text-[#1B2B5E] mt-8 mb-4">Launches</h3>
                <p>You have a product launch, business opening, or other big moment. You want it to feel special. For the food to be memorable. For guests to talk about it. Chopras is how you do that.</p>
                
                <h3 className="font-heading text-2xl text-[#1B2B5E] mt-8 mb-4">Training and Workshops</h3>
                <p>You have a day of training. You want your participants to stay energised and happy. Good food helps. Our event space has everything you need for a full day.</p>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 px-6 md:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl text-[#1B2B5E] mb-6 leading-[1.4]">
            {isNl ? 'Event FAQ' : 'Event FAQ'}
          </h2>
          <FaqAccordion faqs={isNl ? faqsNl : faqsEn} locale={locale} />
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-[#1B2B5E] mb-8">
            {isNl ? 'Plan je Event' : 'Plan Your Event'}
          </h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href={`${base}/contact`} className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#C7A348] bg-[rgba(199,163,72,0.1)] px-6 py-3 text-[#C7A348] text-sm font-medium uppercase tracking-wide transition-all duration-200 ease-out hover:bg-[#C7A348] hover:text-white active:scale-[0.98] min-h-[48px]">
              {isNl ? 'Offerte Aanvragen' : 'Request Quote'}
            </Link>
            <Link href={`${base}/menu`} className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#C7A348] bg-[rgba(199,163,72,0.1)] px-6 py-3 text-[#C7A348] text-sm font-medium uppercase tracking-wide transition-all duration-200 ease-out hover:bg-[#C7A348] hover:text-white active:scale-[0.98] min-h-[48px]">
              {tr.common.viewMenu}
            </Link>
            <Link href={`${base}/zaal-huren-den-haag`} className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#C7A348] bg-[rgba(199,163,72,0.1)] px-6 py-3 text-[#C7A348] text-sm font-medium uppercase tracking-wide transition-all duration-200 ease-out hover:bg-[#C7A348] hover:text-white active:scale-[0.98] min-h-[48px]">
              {isNl ? 'Zaal Huren' : 'Venue Hire'}
            </Link>
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS SECTION */}
      <section className="bg-[#FFFAF5] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-[#1B2B5E] mb-10 text-center">
            {isNl ? 'Andere Cateringmogelijkheden' : 'Other Catering Options'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Link href={`${base}/indian-wedding-catering-den-haag`} className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">{isNl ? 'Bruiloft' : 'Wedding'}</p>
              <p className="text-[#1B2B5E] font-semibold">{isNl ? 'Nikah-recepties en bruiloftsfestiviteiten' : 'Nikah receptions and wedding festivities'}</p>
            </Link>
            <Link href={`${base}/corporate-events-den-haag`} className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">{isNl ? 'Zakelijk' : 'Corporate'}</p>
              <p className="text-[#1B2B5E] font-semibold">{isNl ? 'Bedrijfsdiners en teamvieringen' : 'Corporate dinners and team celebrations'}</p>
            </Link>
            <Link href={`${base}/feestzaal-den-haag`} className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">{isNl ? 'Feestzaal' : 'Party Venue'}</p>
              <p className="text-[#1B2B5E] font-semibold">{isNl ? 'Feestlocatie Den Haag' : 'Private event hall hire'}</p>
            </Link>
            <Link href={`${base}/diwali-dinner-den-haag`} className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">{isNl ? 'Diwali' : 'Diwali'}</p>
              <p className="text-[#1B2B5E] font-semibold">{isNl ? 'Diwali-diners en festiviteiten' : 'Diwali dinners and festival celebrations'}</p>
            </Link>
          </div>
          <div className="mt-8 text-center space-y-4">
            <p className="text-[#1A1A1A] text-base">
              <Link href={`${base}/`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">
                {isNl ? 'Chopras Indiaas Restaurant - beste Indiaas restaurant in Den Haag' : 'Chopras Indian Restaurant - best Indian restaurant in Den Haag'}
              </Link>
            </p>
            <p className="text-[#1A1A1A] text-base">
              {isNl ? 'Voor meer cateringmogelijkheden, zie ons' : 'For more catering options, see our'} <Link href={`${base}/menu`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">{tr.common.viewMenu}</Link> {isNl ? 'of' : 'or'} <Link href={`${base}/contact`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">{isNl ? 'maak een afspraak' : 'contact us'}</Link> {isNl ? 'om uw event te bespreken.' : 'to discuss your event.'}
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
