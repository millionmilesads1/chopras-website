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
    en: 'Diwali Dinner in Den Haag | Chopras Indian Restaurant',
    nl: 'Diwali Diner in Den Haag | Chopras Indian Restaurant',
  }
  const descriptions = {
    en: 'Diwali celebration dinner at Chopras in Den Haag. Authentic Indian feast for your family. Book your table or catering now.',
    nl: 'Diwali-diner bij Chopras in Den Haag. Authentiek Indiaas feest voor je familie. Reserveer je tafel of catering nu.',
  }
  return {
    title: titles[locale],
    description: descriptions[locale],
    alternates: {
      canonical: `${SITE_URL}/${locale}/diwali-dinner-den-haag`,
      languages: { en: `${SITE_URL}/en/diwali-dinner-den-haag`, nl: `${SITE_URL}/nl/diwali-dinner-den-haag`, 'x-default': `${SITE_URL}/en/diwali-dinner-den-haag` },
    },
  }
}

export default function DiwaliDinnerPage({ params }: Props) {
  const { locale } = params
  const tr = getTranslations(locale)
  const base = `/${locale}`
  const isNl = locale === 'nl'

  return (
    <>
      <JsonLd data={getLocalRestaurantSchema(locale, ['Den Haag'], `${SITE_URL}/${locale}/diwali-dinner-den-haag`)} />
      <JsonLd data={getBreadcrumbSchema([
        { name: tr.common.nav.home, item: `${SITE_URL}/${locale}` },
        { name: isNl ? 'Diwali Diner' : 'Diwali Dinner', item: `${SITE_URL}/${locale}/diwali-dinner-den-haag` },
      ])} />

      <section className="bg-[#1B2B5E] py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full border border-[#C7A348]/40 bg-white/10 backdrop-blur-sm mb-4">
            <span className="text-[#C7A348] text-xs font-medium uppercase tracking-widest">
              • CATERING · CHOPRAS INDIAN RESTAURANT · DEN HAAG •
            </span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}>
            {isNl ? 'Diwali-Diner in Den Haag' : 'Diwali Dinner in Den Haag'}
          </h1>
          <p className="text-white/75 text-lg md:text-xl" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.7)' }}>
            {isNl ? 'Vuur van India. Familie bij elkaar. Authentiek feest. Reserveer nu.' : 'Fire of India. Family together. Authentic celebration. Book now.'}
          </p>
        </div>
      </section>

      <section className="bg-[#FFFAF5] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-[#1B2B5E] mb-8">
            {isNl ? 'Diwali Vieren bij Chopras' : 'Celebrate Diwali at Chopras'}
          </h2>
          <div className="prose prose-lg max-w-none text-[#1A1A1A] space-y-5">
            {isNl ? (
              <>
                <p>Diwali is het festival van de lichten - een viering van goed over slecht, licht over duisternis, hoop over twijfel. Dit is niet zomaar een Indisch feestdag. Dit is het hart van wat het betekent om Indiaas te zijn. En in Den Haag, als je dit wilt vieren op de juiste manier, met echte Indiase eten en echte Indiase warmte, kom je naar Chopras.</p>
                <p>We openen onze deuren voor Diwali-dinners waar je familie kan samenkomen rond tafels vol geurig eten. Dit is niet snelkost uit containers. Dit is een feest. <Link href={`${base}/biryani-den-haag`} className="text-[#D4AF37] hover:underline">Biryani</Link>. Rogan josh. <Link href={`${base}/tandoori-den-haag`} className="text-[#D4AF37] hover:underline">Tandoori</Link>. Dal. Naan vers uit onze tandoor. Alles gemaakt met dezelfde zorg die je groot moeder zou gebruiken als je in India was.</p>
                <p>Je kunt bij ons eten, of we bezorgen het feest naar je huis. Je kunt een hele catering voor je familie boeken, of je kunt gewoon een tafel reserveren en ons doen wat we doen. Hoe je het ook wil, we maken Diwali speciaal voor je in Den Haag.</p>
              </>
            ) : (
              <>
                <p>Diwali is the festival of lights - a celebration of good over evil, light over darkness, hope over doubt. This is not just an Indian holiday. This is the heart of what it means to be Indian. And in Den Haag, if you want to celebrate this the right way, with real Indian food and real Indian warmth, you come to Chopras.</p>
                <p>We open our doors for Diwali dinners where your family can gather around tables full of fragrant food. This is not fast food from containers. This is a feast. <Link href={`${base}/biryani-den-haag`} className="text-[#D4AF37] hover:underline">Biryani</Link>. Rogan josh. <Link href={`${base}/tandoori-den-haag`} className="text-[#D4AF37] hover:underline">Tandoori</Link>. Dal. Naan fresh from our tandoor. Everything made with the same care your grandmother would use if you were in India.</p>
                <p>You can eat with us, or we can deliver the feast to your house. You can book a full catering for your family, or you can simply reserve a table and let us do what we do. However you want it, we make Diwali special for you in Den Haag.</p>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-[#1B2B5E] mb-8">
            {isNl ? 'Hoe Diwali bij Chopras Werkt' : 'How Diwali at Chopras Works'}
          </h2>
          <div className="prose prose-lg max-w-none text-[#1A1A1A] space-y-5">
            {isNl ? (
              <>
                <h3 className="font-heading text-2xl text-[#1B2B5E] mt-8 mb-4">In het Restaurant</h3>
                <p>Je reserveert een tafel voor je familie. We bereiden speciale menu&apos;s voor Diwali - er is klassieke biryani, tandoori, rogan josh, frisse salade, alles. Je zit in ons restaurant met je familie, omringd door de geur van India, met naan vers uit de tandoor terwijl je praat. Dit is hoe je het zou doen in India - zit samen, eet samen.</p>
                
                <h3 className="font-heading text-2xl text-[#1B2B5E] mt-8 mb-4">Catering voor Thuis</h3>
                <p>We bezorgen het hele Diwali-feest naar je huis. We bereiden alles, we bezorgen het, soms leveren we zelfs iemand om het uit te serveren. Je hoeft alleen maar je familie uit te nodigen. Alles is fris, heet, authentiek. Dit is voor families die willen vieren maar niet naar buiten willen gaan.</p>
                
                <h3 className="font-heading text-2xl text-[#1B2B5E] mt-8 mb-4">Groepsdiscount</h3>
                <p>Voor grote groepen - vijftien personen of meer - hebben we speciale Diwali-prijzen. Alles is inbegrepen. Geen verrassingen, geen extra kosten. Alleen goed eten, veel ervan, en de warmte van echte Indiase gastvrijheid.</p>
              </>
            ) : (
              <>
                <h3 className="font-heading text-2xl text-[#1B2B5E] mt-8 mb-4">In the Restaurant</h3>
                <p>You reserve a table for your family. We prepare special menus for Diwali - there is classic biryani, tandoori, rogan josh, fresh salad, everything. You sit in our restaurant with your family, surrounded by the aroma of India, with naan fresh from the tandoor while you talk. This is how you would do it in India - sit together, eat together.</p>
                
                <h3 className="font-heading text-2xl text-[#1B2B5E] mt-8 mb-4">Catering for Home</h3>
                <p>We deliver the whole Diwali feast to your house. We prepare everything, we deliver it, sometimes we even deliver someone to serve it. You only need to invite your family. Everything is fresh, hot, authentic. This is for families who want to celebrate but do not want to go out.</p>
                
                <h3 className="font-heading text-2xl text-[#1B2B5E] mt-8 mb-4">Group Discount</h3>
                <p>For large groups - fifteen people or more - we have special Diwali prices. Everything is included. No surprises, no extra costs. Just good food, lots of it, and the warmth of real Indian hospitality.</p>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="bg-[#FFFAF5] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-[#1B2B5E] mb-8">
            {isNl ? 'Diwali FAQ' : 'Diwali FAQ'}
          </h2>
          <div className="space-y-4">
            {[
              {
                q: isNl ? 'Hoe lang van tevoren moet ik reserveren?' : 'How long in advance should I book?',
                a: isNl ? 'Voor het restaurant, ik raad je aan minstens twee weken van tevoren te reserveren. Voor catering thuis, graag vier weken. Diwali is populair en we willen zeker zijn dat we tijd hebben voor je.' : 'For the restaurant, I recommend booking at least two weeks in advance. For home catering, please book four weeks. Diwali is popular and we want to be sure we have time for you.'
              },
              {
                q: isNl ? 'Kunt je mensen uit verschillende culturen accommoderen?' : 'Can you accommodate people from different cultures?',
                a: isNl ? 'Ja. Dit is Diwali - het gaat over licht en goed voor iedereen. Vegetarische opties, glutenvrije opties, alles. We willen dat iedereen feest.' : 'Yes. This is Diwali - it is about light and good for everyone. Vegetarian options, gluten-free options, everything. We want everyone to celebrate.'
              },
              {
                q: isNl ? 'Wat is het minimum aantal gasten?' : 'What is the minimum number of guests?',
                a: isNl ? 'Voor catering thuis, minimaal zes personen. Voor het restaurant, je kunt alleen komen eten, of met wie je wil. Geen minimum.' : 'For home catering, a minimum of six people. For the restaurant, you can come alone, or with whoever you want. No minimum.'
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
            {isNl ? 'Reserveer je Diwali-Feest' : 'Book Your Diwali Celebration'}
          </h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href={`${base}/contact`} className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#C7A348] bg-[rgba(199,163,72,0.1)] px-6 py-3 text-[#C7A348] text-sm font-medium uppercase tracking-wide transition-all duration-200 ease-out hover:bg-[#C7A348] hover:text-white active:scale-[0.98] min-h-[48px]">
              {isNl ? 'Reserveer Nu' : 'Book Now'}
            </Link>
            <Link href={`${base}/menu`} className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#C7A348] bg-[rgba(199,163,72,0.1)] px-6 py-3 text-[#C7A348] text-sm font-medium uppercase tracking-wide transition-all duration-200 ease-out hover:bg-[#C7A348] hover:text-white active:scale-[0.98] min-h-[48px]">
              {tr.common.viewMenu}
            </Link>
            <Link href={`${base}/indian-birthday-catering-den-haag`} className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#C7A348] bg-[rgba(199,163,72,0.1)] px-6 py-3 text-[#C7A348] text-sm font-medium uppercase tracking-wide transition-all duration-200 ease-out hover:bg-[#C7A348] hover:text-white active:scale-[0.98] min-h-[48px]">
              {isNl ? 'Verjaardag Catering' : 'Birthday Catering'}
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
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">{isNl ? 'Feestzaal' : 'Event Space'}</p>
              <p className="text-[#1B2B5E] font-semibold">{isNl ? 'Feestzaal huren voor Diwali Den Haag' : 'Event space for Diwali Den Haag'}</p>
            </Link>
            <Link href={`${base}/indian-birthday-catering-den-haag`} className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all">
              <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-2">{isNl ? 'Verjaardag' : 'Birthday'}</p>
              <p className="text-[#1B2B5E] font-semibold">{isNl ? 'Verjaardagsfeesten en jubileums' : 'Birthday parties and celebrations'}</p>
            </Link>
          </div>
          <div className="mt-8 text-center space-y-4">
            <p className="text-[#1A1A1A] text-base">
              <Link href={`${base}/`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">
                {isNl ? 'Chopras Indiaas Restaurant - beste Indiaas restaurant in Den Haag' : 'Chopras Indian Restaurant - best Indian restaurant in Den Haag'}
              </Link>
            </p>
            <p className="text-[#1A1A1A] text-base">
              {isNl ? 'Voor meer cateringmogelijkheden, zie ons' : 'For more catering options, see our'} <Link href={`${base}/menu`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">{tr.common.viewMenu}</Link> {isNl ? 'of' : 'or'} <Link href={`${base}/contact`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">{isNl ? 'maak een afspraak' : 'contact us'}</Link> {isNl ? 'om uw Diwali-viering te bespreken.' : 'to discuss your Diwali celebration.'}
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
