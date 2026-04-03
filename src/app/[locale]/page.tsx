import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin, CalendarDays, Sparkles, Users, Star } from 'lucide-react'
import JsonLd from '@/components/seo/JsonLd'
import HeroSection from '@/components/sections/HeroSection'
import TrustBar from '@/components/sections/TrustBar'
import FeaturedDishes from '@/components/sections/FeaturedDishes'
import ReviewsSection from '@/components/sections/ReviewsSection'
import LocationSection from '@/components/sections/LocationSection'
import FaqAccordion from '@/components/sections/FaqAccordion'
import { homeFaqs } from '@/lib/faq-data'
import { getTranslations, type Locale } from '@/lib/useTranslations'
import { SITE_URL } from '@/lib/constants'

type Props = { params: { locale: Locale } }

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'nl' }]
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = params
  const slug = ''
  const titles = {
    en: 'Chopras Indian Restaurant Den Haag | Authentic Indian Food',
    nl: 'Chopras Indiaas Restaurant Den Haag | Authentiek Indiaas Eten',
  }
  const descriptions = {
    en: 'Authentic Indian restaurant in Den Haag serving fresh curries, tandoori, chaat and biryani. Halal certified. Vegetarian and vegan options. Open Tuesday to Sunday on Leyweg.',
    nl: 'Authentiek Indiaas restaurant in Den Haag met verse curry, tandoori, chaat en biryani. Halal gecertificeerd. Vegetarische en veganistische opties. Open dinsdag tot en met zondag op Leyweg.',
  }
  return {
    title: titles[locale],
    description: descriptions[locale],
    alternates: {
      canonical: `${SITE_URL}/${locale}${slug}`,
      languages: {
        en: `${SITE_URL}/en`,
        nl: `${SITE_URL}/nl`,
        'x-default': `${SITE_URL}/en`,
      },
    },
    openGraph: {
      title: titles[locale],
      description: descriptions[locale],
      url: `${SITE_URL}/${locale}`,
      images: [{ url: '/og/home-og.jpg', width: 1200, height: 630, alt: 'Chopras Indian Restaurant Den Haag' }],
      type: 'website',
    },
  }
}

const restaurantSchema = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: 'Chopras Indian Restaurant',
  image: 'https://chopras.nl/wp-content/uploads/2025/11/Chopras-logo-main-500-x-300-px7.png',
  url: 'https://chopras.nl',
  telephone: '+31630645930',
  email: 'info@chopras.nl',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Leyweg 986',
    addressLocality: 'Den Haag',
    postalCode: '2545 GW',
    addressCountry: 'NL',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 52.0583, longitude: 4.2932 },
  servesCuisine: ['Indian', 'North Indian', 'Street Food', 'Indo-Chinese', 'Halal'],
  priceRange: '€€',
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '15:00', closes: '22:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday', 'Sunday'], opens: '13:00', closes: '22:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday'], opens: '00:00', closes: '00:00' },
  ],
  hasMenu: 'https://chopras.nl/menu',
  acceptsReservations: true,
  areaServed: ['Den Haag', 'Rijswijk', 'Delft', 'Zoetermeer', 'Voorburg', 'Leidschendam'],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.7',
    reviewCount: '83',
    bestRating: '5',
    worstRating: '1',
  },
  sameAs: [
    'https://www.tripadvisor.com/Restaurant_Review-g188633-d27464805-Reviews-Chopras_Indian_Restaurant-The_Hague_South_Holland_Province.html',
  ],
  suitableForDiet: 'https://schema.org/HalalDiet',
  logo: 'https://chopras.nl/wp-content/uploads/2025/11/Chopras-logo-main-500-x-300-px7.png',
  '@id': 'https://chopras.nl/#restaurant',
}

export default function LocaleHomePage({ params }: Props) {
  const { locale } = params
  const tr = getTranslations(locale)
  const base = `/${locale}`

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: homeFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  }

  return (
    <>
      <JsonLd data={restaurantSchema as Record<string, unknown>} />
      <JsonLd data={faqSchema as Record<string, unknown>} />

      {/* Section 1  -  Hero */}
      <HeroSection locale={locale} />

      {/* Section 2  -  Trust Bar */}
      <TrustBar locale={locale} />

      {/* Section 3  -  Story */}
      <section className="bg-[#FFFAF5] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#1B2B5E] mb-6">
                {tr.home.storyH2}
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>{tr.home.storyP1}</p>
                <p>{tr.home.storyP2}</p>
                <p>{tr.home.storyP3}</p>
                <p>{tr.home.storyP4}</p>
                <p>{tr.home.storyP5}</p>
              </div>
              <div className="flex gap-6 mt-6">
                <div className="flex items-center gap-2 text-[#1B2B5E]">
                  <CalendarDays size={18} />
                  <span className="font-semibold text-sm">{tr.home.storyOpened}</span>
                </div>
                <div className="flex items-center gap-2 text-[#1B2B5E]">
                  <MapPin size={18} />
                  <span className="font-semibold text-sm">{tr.home.storyLocation}</span>
                </div>
              </div>
              <Link
                href={`${base}/menu`}
                className="inline-block mt-6 text-[#1B2B5E] font-semibold underline-offset-4 hover:underline"
              >
                {tr.home.storyLink}
              </Link>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/restaurant/people-enjoying-food---best.png"
                alt="Guests enjoying dinner at Chopras Indian Restaurant Den Haag"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 4  -  Featured Dishes */}
      <FeaturedDishes locale={locale} />

      {/* Section 5  -  Why Chopras */}
      <section className="bg-[#FFFAF5] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#1B2B5E] text-center mb-12">
            {tr.home.whyH2}
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Sparkles size={40} className="text-[#D4AF37]" />
              </div>
              <h3 className="text-xl font-heading font-bold text-[#1A1A1A] mb-3">{tr.home.why1H3}</h3>
              <p className="text-gray-600 leading-relaxed">{tr.home.why1P}</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Users size={40} className="text-[#D4AF37]" />
              </div>
              <h3 className="text-xl font-heading font-bold text-[#1A1A1A] mb-3">{tr.home.why2H3}</h3>
              <p className="text-gray-600 leading-relaxed">{tr.home.why2P}</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Star size={40} className="text-[#D4AF37]" />
              </div>
              <h3 className="text-xl font-heading font-bold text-[#1A1A1A] mb-3">{tr.home.why3H3}</h3>
              <p className="text-gray-600 leading-relaxed mb-3">{tr.home.why3P}</p>
              <Link
                href={`${base}/catering`}
                className="text-[#1B2B5E] font-semibold underline-offset-4 hover:underline"
              >
                {tr.home.why3Link}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6  -  Reviews */}
      <ReviewsSection locale={locale} />

      {/* Section 7  -  Catering Teaser */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#1B2B5E] mb-6">
                {tr.home.cateringH2}
              </h2>
              <p className="text-gray-700 leading-relaxed">{tr.home.cateringP}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {tr.home.eventPills.map((type: string) => (
                  <span key={type} className="bg-[#f5ede0] text-[#1B2B5E] px-3 py-1 rounded-full text-sm">
                    {type}
                  </span>
                ))}
              </div>
              <Link
                href={`${base}/catering`}
                className="inline-block mt-8 bg-[#1B2B5E] text-[#D4AF37] px-8 py-4 rounded-full font-semibold hover:bg-[#6d0000] transition-colors min-h-[48px]"
              >
                {tr.home.cateringCta}
              </Link>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/catering/wedding-celebrations---2.png"
                alt="Wedding celebration catering at Chopras Indian Restaurant Den Haag"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 8  -  Location */}
      <LocationSection locale={locale} />

      {/* Section 9  -  FAQ */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#1B2B5E] text-center mb-2">
            {tr.home.faqH2}
          </h2>
          <p className="text-center text-gray-500 mb-10">
            {locale === 'nl'
              ? 'Alles wat u moet weten voor uw bezoek aan Den Haag'
              : 'Everything you need to know before your visit to Den Haag'}
          </p>
          <FaqAccordion />
        </div>
      </section>

      {/* Section 10  -  Final CTA */}
      <section className="bg-[#1B2B5E] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-3">
            {tr.home.ctaH2}
          </h2>
          <p className="text-[#D4AF37]/80 text-lg mb-8">{tr.home.ctaSub}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`${base}/contact`}
              className="bg-[#D4AF37] text-[#1B2B5E] px-8 py-4 rounded-full font-bold hover:bg-[#c9a230] transition-colors min-h-[48px] flex items-center justify-center"
            >
              {tr.common.reserve}
            </a>
            <Link
              href={`${base}/menu`}
              className="border-2 border-[#D4AF37] text-[#D4AF37] px-8 py-4 rounded-full font-semibold hover:bg-[#D4AF37]/10 transition-colors min-h-[48px] flex items-center justify-center"
            >
              {tr.home.ctaMenu}
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
