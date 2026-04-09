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
import { getRestaurantSchema, getFounderSchema, getWebSiteSchema, getOrganizationSchema, getSpeakableSchema } from '@/lib/schema'

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
  const t = getTranslations(locale)

  return (
    <>
      <JsonLd data={getWebSiteSchema(locale)} />
      <JsonLd data={getRestaurantSchema(locale)} />
      <JsonLd data={getFounderSchema()} />
      <JsonLd data={getOrganizationSchema()} />
      <JsonLd data={getSpeakableSchema(locale)} />

      {/* 1  -  Hero */}
      <HeroSection locale={locale} />

      {/* 1b  -  Why Chopras is Den Haag Best */}
      <section className="py-20 px-6 md:px-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-bold text-4xl md:text-5xl mb-6 leading-[1.4] [letter-spacing:0.02em] mt-2">
            {t.home.whyBestH2}
          </h2>
          <div className="font-body text-[#1A1A1A] text-lg leading-relaxed space-y-6">
            <p>
              Den Haag has no shortage of Indian restaurants. But <Link href={`${base}/blog/best-indian-restaurant-den-haag`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">authentic Indian food</Link> - made with whole spices ground fresh in the kitchen, recipes straight from North India, and a team that genuinely cares about every plate - that is harder to find. That is exactly what <Link href={`${base}/contact`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">Chopras Indian Restaurant delivers every single day at Leyweg 986</Link>.
            </p>
            <p>
              Chopras Indian Restaurant is consistently rated the <Link href={`${base}`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">best Indian restaurant in Den Haag</Link> on <a href="https://share.google/HA9e9y2DYSLGiJGYS" rel="nofollow noopener" target="_blank" className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">Google</a>, <a href="https://www.tripadvisor.nl/Restaurant_Review-g188633-d27464805-Reviews-Chopras_Indian_Restaurant-The_Hague_South_Holland_Province.html" rel="nofollow noopener" target="_blank" className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">Tripadvisor</a>, and <a href="https://www.thefork.nl/restaurant/chopras-indian-restaurant-r825662" rel="nofollow noopener" target="_blank" className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">TheFork</a>. The highest rated Indian restaurant in The Hague according to diners who seek <Link href={`${base}/indian-food-netherlands`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">genuine Indian food in South Holland</Link>. Not because we say so. Because our guests do. Whether you are craving a <Link href={`${base}/butter-chicken-den-haag`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">butter chicken Den Haag</Link>, a smoky <Link href={`${base}/tandoori-den-haag`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">tandoori Den Haag</Link>, a crispy <Link href={`${base}/pani-puri-den-haag`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">pani puri</Link>, or the <Link href={`${base}/biryani-den-haag`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">best biryani in Den Haag</Link> - every dish at Chopras Indian Restaurant is cooked from scratch using premium spices sourced directly from India. Our top Indian restaurant status comes from one simple commitment: real Indian food, made the way it is meant to be made.
            </p>
            <p>
              Looking for a <Link href={`${base}`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">genuine Indian restaurant in Den Haag</Link>? You found it. Looking for the <Link href={`${base}`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">best curry in The Hague</Link>? Same answer. Looking for the <Link href={`${base}`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">most popular Indian restaurant in Den Haag</Link> for your next dinner out? Look no further. We are one of the most loved Indian restaurants in Den Haag across families, corporate groups, and couples seeking authentic dining. Whether you need <Link href={`${base}/halal-food-den-haag`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">halal Indian restaurant Den Haag</Link>, <Link href={`${base}/blog/vegetarian-indian-food-den-haag`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">vegetarian Indian food Den Haag</Link>, or <Link href={`${base}/vegan-menu`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">vegan Indian food</Link>, Chopras Indian Restaurant serves it all with equal care.
            </p>
            <p>
              We are not just a restaurant. Chopras Indian Restaurant is Den Haag most complete Indian dining destination - with dine-in, <Link href={`${base}/indian-takeaway-den-haag`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">takeaway</Link>, <Link href={`${base}/indian-food-delivery-den-haag`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">home delivery</Link>, and <Link href={`${base}/party-venue-den-haag`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">hire our private event hall in Den Haag</Link> for <Link href={`${base}/indian-birthday-catering-den-haag`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">birthdays</Link>, <Link href={`${base}/indian-wedding-catering-den-haag`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">weddings</Link>, <Link href={`${base}/corporate-events-den-haag`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">corporate dinners</Link>, and <Link href={`${base}/diwali-dinner-den-haag`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">Diwali celebrations</Link>. Whether you seek <Link href={`${base}`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">authentic North Indian cuisine</Link>, <Link href={`${base}/blog/indian-street-food-den-haag`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">Indian street food Den Haag</Link>, <Link href={`${base}/tandoori-den-haag`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">traditional tandoori dishes</Link>, <Link href={`${base}/blog/vegetarian-indian-food-den-haag`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">vegetarian Indian options</Link>, or <Link href={`${base}/indo-chinese-restaurant-den-haag`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">authentic Indo Chinese food in Den Haag</Link>, our menu delivers the full spectrum of flavours. For those exploring why Chopras Indian Restaurant is Den Haag best, our <Link href={`${base}/party-venue-den-haag`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">private event hall serves groups</Link> of all sizes, from intimate <Link href={`${base}/party-venue-den-haag`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">anniversary dinners</Link> to <Link href={`${base}/corporate-events-den-haag`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">large corporate events</Link>.
            </p>
            <p>
              For special occasions throughout South Holland, we offer <Link href={`${base}/indian-wedding-catering-den-haag`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">Indian wedding catering Den Haag</Link> and <Link href={`${base}/catering`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">catering services from Leyweg</Link>. Our private event hall accommodates <Link href={`${base}/indian-wedding-catering-den-haag`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">wedding receptions</Link>, <Link href={`${base}/corporate-events-den-haag`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">corporate dinners</Link>, <Link href={`${base}/indian-birthday-catering-den-haag`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">birthday parties</Link>, and <Link href={`${base}/diwali-dinner-den-haag`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">Diwali celebrations</Link>. We are the <Link href={`${base}/contact`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">Indian restaurant near the Leyweg area</Link> and accessible from <Link href={`${base}/indian-restaurant-near-den-haag-centraal`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">Den Haag Centrum</Link>, Scheveningen, and surrounding regions. Need to <Link href={`${base}/menu`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">explore the full Chopras Indian Restaurant menu in Den Haag</Link>? Or interested in <Link href={`${base}/catering`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">Indian catering Den Haag - events, weddings, birthdays</Link> services?
            </p>
            <p>
              Looking for the <Link href={`${base}`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">best Indian restaurant in Den Haag</Link> or the <Link href={`${base}/indian-food-netherlands`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">best Indian restaurant Netherlands</Link>? Many search for an <Link href={`${base}/indian-restaurant-near-den-haag-centraal`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">Indian restaurant near Binnenhof</Link> or <Link href={`${base}/indian-restaurant-near-peace-palace-den-haag`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">near Mauritshuis</Link>, but <Link href={`${base}/contact`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">Chopras Indian Restaurant on Leyweg</Link> has become the destination. Want to <Link href={`${base}/contact`} className="text-[#D4AF37] hover:text-[#e8c84a] font-semibold">reserve your table at Chopras Indian Restaurant</Link> today? Authentic Indian cuisine in Den Haag does not get better than Chopras Indian Restaurant. Come in and find out why our guests keep coming back.
            </p>
          </div>
        </div>
      </section>

      {/* 1c  -  Ratings and Social Proof */}
      <section className="py-20 px-6 md:px-16 bg-[#FFFAF5]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-bold text-4xl md:text-5xl mb-6 leading-[1.4] [letter-spacing:0.02em] mt-2">
            {t.home.ratingsH2}
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
            {t.home.ratingsSubline}
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

      {/* 8a  -  About Chopras (AI and voice search optimized) */}
      <section className="bg-[#FFFAF5] py-20 px-6 md:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="about-chopras-section">
            <h2 className="font-bold text-4xl md:text-5xl mb-8 leading-[1.4] [letter-spacing:0.02em] mt-2">
              About Chopras Indian Restaurant Den Haag
            </h2>
            <div className="font-body text-[#1A1A1A] text-lg leading-relaxed space-y-6">
              <p>
                Chopras Indian Restaurant is an authentic Indian restaurant located at Leyweg 986, 2545 GW Den Haag, Netherlands. Established in 2023 by founder Arun Chopra, Chopras Indian Restaurant serves authentic North Indian cuisine, Indian street food, Indo Chinese dishes, and a full halal and vegetarian menu.
              </p>
              <p>
                Chopras Indian Restaurant is rated 4.5 stars on Google with over 200 reviews and 8.6 on TheFork, making it one of the highest rated Indian restaurants in Den Haag and The Hague. The restaurant is fully halal certified and offers extensive vegetarian and vegan options.
              </p>
              <p>
                In addition to dine-in, takeaway, and delivery, Chopras Indian Restaurant offers a private event hall for hire in Den Haag, suitable for weddings, birthday parties, corporate events, Diwali dinners, and all private gatherings. Indian catering services are available across Den Haag and surrounding areas including Delft, Rijswijk, and Zoetermeer.
              </p>
              <p>
                Chopras Indian Restaurant opening hours: Tuesday to Sunday, 16:30 to 22:30. Closed on Mondays. Reservations can be made via the website or by calling +31 6 30645930.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9  -  FAQ */}
      <section className="bg-white py-20 px-6 md:px-16">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-body text-[#D4AF37] text-xs uppercase tracking-widest mb-4">FAQ</p>
            <h2 className="font-semibold text-4xl mb-6 leading-[1.4] [letter-spacing:0.02em] mt-2">
              {getTranslations(locale).home.faqH2}
            </h2>
          </div>
          <FaqAccordion locale={locale} />
        </div>
      </section>

      {/* 10  -  Location */}
      <LocationSection locale={locale} />

      {/* 11  -  Final CTA */}
      <FinalCta locale={locale} />
    </>
  )
}
