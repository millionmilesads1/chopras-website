import type { Metadata } from 'next'
import JsonLd from '@/components/seo/JsonLd'
import HeroSection from '@/components/sections/HeroSection'
import TrustBar from '@/components/sections/TrustBar'
import FeaturedDishes from '@/components/sections/FeaturedDishes'
import StorySection from '@/components/sections/StorySection'
import MeetTheFounder from '@/components/home/MeetTheFounder'
import WhySection from '@/components/sections/WhySection'
import CateringBanner from '@/components/sections/CateringBanner'
import ReviewsSection from '@/components/sections/ReviewsSection'
import FaqAccordion from '@/components/sections/FaqAccordion'
import LocationSection from '@/components/sections/LocationSection'
import FinalCta from '@/components/sections/FinalCta'
import { getTranslations, type Locale } from '@/lib/useTranslations'
import { SITE_URL } from '@/lib/constants'
import { getRestaurantSchema, getFounderSchema, getFaqPageSchema } from '@/lib/schema'
import { homeFaqs } from '@/lib/faq-data'

type Props = { params: { locale: Locale } }

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'nl' }]
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = params
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
      canonical: `${SITE_URL}/${locale}`,
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

export default function LocaleHomePage({ params }: Props) {
  const { locale } = params

  // Suppress unused variable warning  -  translations available to child components via prop
  void getTranslations(locale)

  return (
    <>
      <JsonLd data={getRestaurantSchema(locale)} />
      <JsonLd data={getFounderSchema()} />
      <JsonLd data={getFaqPageSchema(homeFaqs)} />

      {/* 1  -  Hero */}
      <HeroSection locale={locale} />

      {/* 2  -  Trust Bar */}
      <TrustBar locale={locale} />

      {/* 3  -  Featured Dishes */}
      <FeaturedDishes locale={locale} />

      {/* 4  -  Story / About */}
      <StorySection locale={locale} />

      {/* 5  -  Meet the Founder */}
      <MeetTheFounder />

      {/* 6  -  Why Chopras */}
      <WhySection locale={locale} />

      {/* 7  -  Catering Banner */}
      <CateringBanner locale={locale} />

      {/* 8  -  Reviews */}
      <ReviewsSection locale={locale} />

      {/* 9  -  FAQ */}
      <section className="bg-white py-20 px-6 md:px-16">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-body text-[#D4AF37] text-xs uppercase tracking-widest mb-4">FAQ</p>
            <h2 className="font-heading font-semibold text-[#1B2B5E] text-4xl">
              {getTranslations(locale).home.faqH2}
            </h2>
          </div>
          <FaqAccordion />
        </div>
      </section>

      {/* 10  -  Location */}
      <LocationSection locale={locale} />

      {/* 11  -  Final CTA */}
      <FinalCta locale={locale} />
    </>
  )
}
