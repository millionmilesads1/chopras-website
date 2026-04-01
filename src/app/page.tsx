import type { Metadata } from 'next'
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

export const metadata: Metadata = {
  title: 'Chopras Indian Restaurant Den Haag | Authentic Indian Food',
  description:
    'Authentic Indian restaurant in Den Haag serving fresh curries, tandoori, chaat and biryani. Halal certified. Vegetarian and vegan options. Open Tuesday to Sunday on Leyweg.',
  keywords: [
    'Indian restaurant Den Haag',
    'Indiaas restaurant Den Haag',
    'halal restaurant Den Haag',
    'Indian food The Hague',
    'authentic Indian food Den Haag',
    'best Indian restaurant Den Haag',
  ],
  alternates: { canonical: 'https://chopras.nl' },
  openGraph: {
    title: 'Chopras Indian Restaurant Den Haag | Authentic Indian Food',
    description:
      'Fresh curries, tandoori, biryani and Indian street food in Den Haag. Halal certified. Open Tue–Sun.',
    url: 'https://chopras.nl',
    images: [
      {
        url: '/og/home-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Chopras Indian Restaurant Den Haag',
      },
    ],
    type: 'website',
  },
}

const restaurantSchema = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: 'Chopras Indian Restaurant',
  image:
    'https://chopras.nl/wp-content/uploads/2025/11/Chopras-logo-main-500-x-300-px7.png',
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
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 52.0583,
    longitude: 4.2932,
  },
  servesCuisine: ['Indian', 'North Indian', 'Street Food', 'Indo-Chinese', 'Halal'],
  priceRange: '€€',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '15:00',
      closes: '22:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday', 'Sunday'],
      opens: '13:00',
      closes: '22:00',
    },
  ],
  hasMenu: 'https://chopras.nl/menu',
  acceptsReservations: 'True',
  currenciesAccepted: 'EUR',
  paymentAccepted: 'Cash, Credit Card',
  areaServed: [
    'Den Haag',
    'Rijswijk',
    'Delft',
    'Zoetermeer',
    'Voorburg',
    'Leidschendam',
  ],
  amenityFeature: [
    { '@type': 'LocationFeatureSpecification', name: 'Halal Certified', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Vegetarian Options', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Vegan Options', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Wheelchair Accessible', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Family Friendly', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Private Event Space', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Catering Available', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Free Parking', value: true },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: homeFaqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
}

export default function HomePage() {
  return (
    <>
      <JsonLd data={restaurantSchema as Record<string, unknown>} />
      <JsonLd data={faqSchema as Record<string, unknown>} />

      {/* Section 1 — Hero */}
      <HeroSection />

      {/* Section 2 — Trust Bar */}
      <TrustBar />

      {/* Section 3 — Story / Introduction */}
      <section className="bg-[#FFFAF5] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: copy */}
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#1B2B5E] mb-6">
                A Taste of India, Right Here in Den Haag
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  In 2023, Chopras Indian Restaurant opened its doors on Leyweg in Den Haag
                  with one clear purpose: to bring the real flavours of India to the Netherlands.
                  Not a watered-down version. Not adapted to be safe. The actual thing — the
                  spices ground fresh every morning, the tandoor fired up hours before service,
                  the recipes carried across from kitchens in India.
                </p>
                <p>
                  Every dish on our menu tells a story. The butter chicken that comes out of
                  our kitchen is the same butter chicken a family in Delhi sits down to on a
                  Sunday. The pani puri we serve arrived on your plate the same way it arrives
                  on a street corner in Mumbai — crispy, cold filling, one explosive bite.
                </p>
                <p>
                  We are an Indian restaurant in Den Haag that is proud of exactly what we are.
                  Come hungry.
                </p>
              </div>

              <div className="flex gap-6 mt-6">
                <div className="flex items-center gap-2 text-[#1B2B5E]">
                  <CalendarDays size={18} />
                  <span className="font-semibold text-sm">Opened 2023</span>
                </div>
                <div className="flex items-center gap-2 text-[#1B2B5E]">
                  <MapPin size={18} />
                  <span className="font-semibold text-sm">Leyweg, Den Haag</span>
                </div>
              </div>

              <Link
                href="/menu"
                className="inline-block mt-6 text-[#1B2B5E] font-semibold underline-offset-4 hover:underline"
              >
                Discover our full menu →
              </Link>
            </div>

            {/* Right: image placeholder */}
            <div className="bg-[#f5ede0] rounded-2xl aspect-[4/3] flex items-center justify-center">
              <span className="text-[#1B2B5E]/50 font-medium">Restaurant Photo</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 — Featured Dishes */}
      <FeaturedDishes />

      {/* Section 5 — Why Chopras */}
      <section className="bg-[#FFFAF5] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#1B2B5E] text-center mb-12">
            Why Den Haag Keeps Coming Back to Chopras
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Column 1 */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Sparkles size={40} className="text-[#D4AF37]" />
              </div>
              <h3 className="text-xl font-heading font-bold text-[#1A1A1A] mb-3">
                We Do Not Cut Corners on Spices
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our masalas are sourced directly from India and ground fresh in our kitchen
                every single day. Not from a pre-mixed bag. Not from a supplier down the road.
                The spice you taste in every dish is the reason people come back — and we will
                never take a shortcut on it.
              </p>
            </div>

            {/* Column 2 */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Users size={40} className="text-[#D4AF37]" />
              </div>
              <h3 className="text-xl font-heading font-bold text-[#1A1A1A] mb-3">
                A Table for Everyone in Den Haag
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Halal certified. Vegetarian and vegan menus clearly labelled. Wheelchair
                accessible. Baby friendly. Pet friendly. Whether you are bringing the whole
                family, celebrating with friends, or dining alone — there is a seat here for
                you and a dish you will love.
              </p>
            </div>

            {/* Column 3 */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Star size={40} className="text-[#D4AF37]" />
              </div>
              <h3 className="text-xl font-heading font-bold text-[#1A1A1A] mb-3">
                Your Event, Our Expertise
              </h3>
              <p className="text-gray-600 leading-relaxed mb-3">
                We run a full catering operation and a private event hall in Den Haag for 25
                to 80 guests. Weddings, corporate dinners, birthday parties, Diwali
                celebrations — we handle the food so you can actually enjoy your own event.
                Get in touch to discuss your occasion.
              </p>
              <Link
                href="/catering"
                className="text-[#1B2B5E] font-semibold underline-offset-4 hover:underline"
              >
                Explore catering →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 — Reviews */}
      <ReviewsSection />

      {/* Section 7 — Catering Teaser */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: copy */}
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#1B2B5E] mb-6">
                Indian Catering and Private Events in Den Haag
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Planning an event in Den Haag? Whether it is a wedding reception for 80
                  guests, a corporate dinner, a birthday party, or a Diwali celebration —
                  Chopras delivers the full Indian catering experience directly to your venue.
                </p>
                <p>
                  We serve Den Haag, Rijswijk, Delft, Zoetermeer, Voorburg and Leidschendam.
                  Every menu is customised. Every dish is made fresh. And because we are fully
                  halal-certified with vegetarian and vegan options built in, every single
                  guest is covered.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                {[
                  'Weddings',
                  'Corporate Events',
                  'Birthday Parties',
                  'Diwali Celebrations',
                  'Baby Showers',
                  'Community Events',
                ].map((type) => (
                  <span
                    key={type}
                    className="bg-[#f5ede0] text-[#1B2B5E] px-3 py-1 rounded-full text-sm"
                  >
                    {type}
                  </span>
                ))}
              </div>

              <Link
                href="/catering"
                className="inline-block mt-8 bg-[#1B2B5E] text-[#D4AF37] px-8 py-4 rounded-full font-semibold hover:bg-[#6d0000] transition-colors min-h-[48px]"
              >
                Get a Catering Quote
              </Link>
            </div>

            {/* Right: image placeholder */}
            <div className="bg-[#f5ede0] rounded-2xl aspect-[4/3] flex items-center justify-center">
              <span className="text-[#1B2B5E]/50 font-medium">Catering Photo</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8 — Location and Hours */}
      <LocationSection />

      {/* Section 9 — FAQ Accordion */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#1B2B5E] text-center mb-2">
            Frequently Asked Questions About Chopras Indian Restaurant
          </h2>
          <p className="text-center text-gray-500 mb-10">
            Everything you need to know before your visit to Den Haag
          </p>
          <FaqAccordion />
        </div>
      </section>

      {/* Section 10 — Final CTA Bar */}
      <section className="bg-[#1B2B5E] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-3">
            Ready for Real Indian Food?
          </h2>
          <p className="text-[#D4AF37]/80 text-lg mb-8">
            Your table is waiting at Leyweg 986, Den Haag. Open Tuesday to Sunday.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/reservations"
              className="bg-[#D4AF37] text-[#1B2B5E] px-8 py-4 rounded-full font-bold hover:bg-[#c9a230] transition-colors min-h-[48px] flex items-center justify-center"
            >
              Reserve a Table
            </Link>
            <Link
              href="/menu"
              className="border-2 border-[#D4AF37] text-[#D4AF37] px-8 py-4 rounded-full font-semibold hover:bg-[#D4AF37]/10 transition-colors min-h-[48px] flex items-center justify-center"
            >
              View Full Menu
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
