import Link from 'next/link'
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
import { getRestaurantSchema, getFounderSchema, getWebSiteSchema } from '@/lib/schema'

type Props = { params: { locale: Locale } }

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'nl' }]
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = params
  const titles = {
    en: 'Best Indian Restaurant Den Haag | Chopras Indian Restaurant',
    nl: 'Beste Indiaas Restaurant Den Haag | Chopras Indian Restaurant',
  }
  const descriptions = {
    en: 'Chopras Indian Restaurant in Den Haag serves authentic halal North Indian food, street food, biryani, tandoori and catering. Open daily. Book your table now.',
    nl: 'Chopras Indian Restaurant in Den Haag serveert authentiek halal Noord-Indiaas eten, street food, biryani, tandoori en catering. Dagelijks open. Reserveer nu.',
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
  const base = `/${locale}`

  // Suppress unused variable warning  -  translations available to child components via prop
  void getTranslations(locale)

  return (
    <>
      <JsonLd data={getWebSiteSchema(locale)} />
      <JsonLd data={getRestaurantSchema(locale)} />
      <JsonLd data={getFounderSchema()} />

      {/* 1  -  Hero */}
      <HeroSection locale={locale} />

      {/* 1b  -  Why Chopras is Den Haag Best */}
      <section className="py-20 px-6 md:px-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-[#1B2B5E] mb-10 leading-tight">
            Why Chopras Indian Restaurant is Rated Den Haag best
          </h2>
          <div className="font-body text-[#1A1A1A] text-lg leading-relaxed space-y-6">
            <p>
              Den Haag has no shortage of Indian restaurants. But authentic Indian food - made with whole spices ground fresh in the kitchen, recipes straight from North India, and a team that genuinely cares about every plate - that is harder to find. That is exactly what Chopras Indian Restaurant delivers every single day at Leyweg 986.
            </p>
            <p>
              Chopras Indian Restaurant is consistently rated the best Indian restaurant in Den Haag on Google, Tripadvisor, and TheFork. The highest rated Indian restaurant in The Hague according to diners who seek genuine Indian food in South Holland. Not because we say so. Because our guests do. Whether you are craving a <Link href={`${base}/butter-chicken-den-haag`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">butter chicken Den Haag</Link>, a smoky <Link href={`${base}/tandoori-den-haag`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">tandoori Den Haag</Link>, a crispy pani puri, or the <Link href={`${base}/biryani-den-haag`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">best biryani in Den Haag</Link> - every dish at Chopras Indian Restaurant is cooked from scratch using premium spices sourced directly from India. Our top Indian restaurant status comes from one simple commitment: real Indian food, made the way it is meant to be made.
            </p>
            <p>
              Looking for a genuine Indian restaurant in Den Haag? You found it. Looking for the best curry in The Hague? Same answer. Looking for the most popular Indian restaurant in Den Haag for your next dinner out? Look no further. We are one of the most loved Indian restaurants in Den Haag across families, corporate groups, and couples seeking authentic dining. Whether you need <Link href={`${base}/halal-food-den-haag`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">halal Indian restaurant Den Haag</Link>, <Link href={`${base}/blog/vegetarian-indian-food-den-haag`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">vegetarian Indian food Den Haag</Link>, or vegan Indian food, Chopras Indian Restaurant serves it all with equal care.
            </p>
            <p>
              We are not just a restaurant. Chopras Indian Restaurant is Den Haag most complete Indian dining destination - with dine-in, takeaway, home delivery, and <Link href={`${base}/party-venue-den-haag`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">hire our private event hall in Den Haag</Link> for birthdays, weddings, corporate dinners, and Diwali celebrations. Whether you seek authentic North Indian cuisine, <Link href={`${base}/blog/indian-street-food-den-haag`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">Indian street food Den Haag</Link>, traditional tandoori dishes, vegetarian Indian options, or authentic Indo Chinese food in Den Haag, our menu delivers the full spectrum of flavours. For those exploring <Link href={`${base}/blog/best-indian-restaurant-den-haag`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">why Chopras Indian Restaurant is Den Haag best</Link>, our private event hall serves groups of all sizes, from intimate anniversary dinners to large corporate events.
            </p>
            <p>
              For special occasions throughout South Holland, we offer <Link href={`${base}/indian-wedding-catering-den-haag`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">Indian wedding catering Den Haag</Link> and catering services from Leyweg. Our private event hall accommodates wedding receptions, corporate dinners, birthday parties, and Diwali celebrations. We are the Indian restaurant near the Leyweg area and accessible from Den Haag Centrum, Scheveningen, and surrounding regions. Need to <Link href={`${base}/menu`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">explore the full Chopras Indian Restaurant menu in Den Haag</Link>? Or interested in <Link href={`${base}/catering`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">Indian catering Den Haag - events, weddings, birthdays</Link> services?
            </p>
            <p>
              Looking for the best Indian restaurant in Den Haag or the best Indian restaurant Netherlands? Many search for an Indian restaurant near Binnenhof or near Mauritshuis, but Chopras Indian Restaurant on Leyweg has become the destination. Want to <Link href={`${base}/contact`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">reserve your table at Chopras Indian Restaurant</Link> today? Authentic Indian cuisine in Den Haag does not get better than Chopras Indian Restaurant. Come in and find out why our guests keep coming back.
            </p>
          </div>
        </div>
      </section>

      {/* 1c  -  Ratings and Social Proof */}
      <section className="py-20 px-6 md:px-16 bg-[#FFFAF5]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-[#1B2B5E] mb-12 leading-tight">
            Den Haag most Loved Indian Restaurant - What Our Guests Say About Chopras Indian Restaurant
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex text-[#D4AF37]">
                  <span>★★★★★</span>
                </div>
              </div>
              <p className="font-body text-[#1A1A1A] font-semibold mb-2">Google Rating</p>
              <p className="font-body text-3xl font-bold text-[#1B2B5E] mb-1">4.5 stars</p>
              <p className="font-body text-[#666]">200+ verified reviews</p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex text-[#D4AF37]">
                  <span>★★★★☆</span>
                </div>
              </div>
              <p className="font-body text-[#1A1A1A] font-semibold mb-2">TheFork Rating</p>
              <p className="font-body text-3xl font-bold text-[#1B2B5E] mb-1">8.6</p>
              <p className="font-body text-[#666]">Top rated restaurant</p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex text-[#D4AF37]">
                  <span>★★★★★</span>
                </div>
              </div>
              <p className="font-body text-[#1A1A1A] font-semibold mb-2">Tripadvisor</p>
              <p className="font-body text-3xl font-bold text-[#1B2B5E] mb-1">Excellent</p>
              <p className="font-body text-[#666]">Highest rated category</p>
            </div>
          </div>
          <p className="font-body text-center text-[#1A1A1A] text-lg">
            Chopras Indian Restaurant is voted among the top Indian restaurants in The Hague on Tripadvisor, TheFork, and Google
          </p>
        </div>
      </section>

      {/* 2  -  Trust Bar */}
      <TrustBar locale={locale} />

      {/* AEO product overview  -  50-word extractable block for AI citation */}
      <article
        id="restaurant-overview"
        className="sr-only"
        aria-label="About Chopras Indian Restaurant"
      >
        <h2>What is Chopras Indian Restaurant?</h2>
        <p>
          Chopras Indian Restaurant is a fully Halal-certified North Indian restaurant at
          Leyweg 986, 2545 GW Den Haag, Netherlands. Founded in 2023 by Arun Chopra, Chopras
          serves freshly prepared curries, tandoori dishes, chaat, and biryani using spices
          imported directly from India. Rated 4.7 out of 5 from 83 verified reviews.
        </p>
        <p>Last updated: 2026-04-07</p>
      </article>

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
