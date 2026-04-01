import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Heart,
  Briefcase,
  Cake,
  Baby,
  Sparkles,
  Users,
  Rocket,
  GraduationCap,
  CheckCircle,
  Calendar,
  ShieldCheck,
  Star,
} from 'lucide-react'
import JsonLd from '@/components/seo/JsonLd'
import { RESTAURANT } from '@/lib/constants'
import { cateringFaqs, eventFaqs } from '@/lib/faq-data'
import CateringForm from '@/components/sections/CateringForm'
import CateringFaqAccordion from '@/components/sections/CateringFaqAccordion'

export const metadata: Metadata = {
  title: 'Indian Catering Den Haag | Chopras — Weddings, Events & Private Dining',
  description:
    'Authentic Indian catering in Den Haag for weddings, corporate events, birthdays and parties. Halal certified. Serving Den Haag, Rijswijk, Delft and more. Get a quote today.',
  keywords: [
    'Indian catering Den Haag',
    'Indiaas catering Den Haag',
    'Indian catering The Hague',
    'feestzaal huren Den Haag',
    'Indiaas catering bruiloft Den Haag',
    'catering bedrijfsfeest Den Haag',
  ],
  alternates: { canonical: 'https://chopras.nl/catering' },
  openGraph: {
    title: 'Indian Catering Den Haag | Chopras Events and Private Dining',
    description:
      'Authentic Indian catering for weddings, corporate events and parties in Den Haag. Halal certified. Get a quote.',
    url: 'https://chopras.nl/catering',
  },
}

const cateringBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'FoodEstablishment',
  name: 'Chopras Indian Restaurant',
  url: 'https://chopras.nl',
  telephone: '+31630645930',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Leyweg 986',
    addressLocality: 'Den Haag',
    postalCode: '2545 GW',
    addressCountry: 'NL',
  },
  areaServed: [
    { '@type': 'City', name: 'Den Haag' },
    { '@type': 'City', name: 'Rijswijk' },
    { '@type': 'City', name: 'Delft' },
    { '@type': 'City', name: 'Zoetermeer' },
    { '@type': 'City', name: 'Voorburg' },
    { '@type': 'City', name: 'Leidschendam' },
    { '@type': 'City', name: 'Westland' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Indian Catering Services Den Haag',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Wedding Catering Den Haag' },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Corporate Event Catering Den Haag' },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Birthday Party Catering Den Haag' },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Private Event Hall Den Haag' },
      },
    ],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [...cateringFaqs, ...eventFaqs].map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://chopras.nl' },
    { '@type': 'ListItem', position: 2, name: 'Catering', item: 'https://chopras.nl/catering' },
  ],
}

const eventTypes = [
  {
    icon: Heart,
    title: 'Weddings and Receptions',
    copy: 'Full wedding catering for 25 to 200 guests. Customised menus, live cooking stations, and a team that makes sure every plate is perfect.',
  },
  {
    icon: Briefcase,
    title: 'Corporate Dinners and Meetings',
    copy: 'Professional catering for business events, team dinners, product launches and networking evenings in Den Haag.',
  },
  {
    icon: Cake,
    title: 'Birthday Parties',
    copy: 'From intimate family celebrations to large birthday parties — we bring the food, you bring the people.',
  },
  {
    icon: Baby,
    title: 'Baby Showers and Proposals',
    copy: 'Intimate events deserve exceptional food. We cater baby showers, proposals, anniversaries and engagement parties across Den Haag.',
  },
  {
    icon: Sparkles,
    title: 'Diwali, Holi and Festival Celebrations',
    copy: 'Authentic Indian festival catering for Diwali, Holi, Eid, Karwa Chauth and other cultural celebrations in Den Haag.',
  },
  {
    icon: Users,
    title: 'Community and Charity Events',
    copy: 'We support community gatherings, charity dinners, expat meetups and neighbourhood events across Den Haag and South Holland.',
  },
  {
    icon: Rocket,
    title: 'Product Launches and Networking',
    copy: 'Make your product launch or networking event memorable with Indian street food stations, grazing platters and full dinner service.',
  },
  {
    icon: GraduationCap,
    title: 'Cooking Classes and Workshops',
    copy: 'Host an Indian cooking class or spice workshop in our private event hall. A unique and memorable experience in Den Haag.',
  },
]

const whyCards = [
  {
    icon: CheckCircle,
    title: 'Everything Cooked Fresh',
    copy: 'We do not use pre-packaged catering food. Every dish is prepared fresh by our chefs using the same spices and techniques as our restaurant kitchen. Your guests taste the difference.',
  },
  {
    icon: Calendar,
    title: 'End-to-End Service',
    copy: 'From initial enquiry to the last dish served, we manage everything. You do not coordinate with suppliers or chase confirmations. One point of contact, one team.',
  },
  {
    icon: ShieldCheck,
    title: 'Halal Certified as Standard',
    copy: 'Every meat dish we serve at events is sourced from halal-certified suppliers. We do not offer a \'halal option\' — halal is our standard.',
  },
  {
    icon: Star,
    title: 'Large Group Experience',
    copy: 'We have catered events for 200+ guests. Large numbers do not mean a drop in quality. Our team scales up without cutting corners.',
  },
]

export default function CateringPage() {
  return (
    <>
      <JsonLd data={cateringBusinessSchema as Record<string, unknown>} />
      <JsonLd data={faqSchema as Record<string, unknown>} />
      <JsonLd data={breadcrumbSchema as Record<string, unknown>} />

      {/* Section 1 — Hero */}
      <section className="bg-[#1B2B5E] py-24 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl md:text-6xl text-white font-bold">
            Indian Catering in Den Haag
          </h1>
          <p className="text-xl text-white/70 mt-4 max-w-2xl mx-auto text-center">
            For events that people actually remember. Weddings, corporate dinners, birthday
            parties and cultural celebrations — we bring the full Indian experience to your
            venue.
          </p>
          <a
            href="#catering-form"
            className="inline-block mt-8 bg-[#D4AF37] text-[#1B2B5E] px-8 py-4 rounded-full font-bold hover:bg-[#c9a230] transition-colors"
          >
            Request a Catering Quote
          </a>
        </div>
      </section>

      {/* Section 2 — Service Intro */}
      <section className="bg-[#FFFAF5] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: copy */}
            <div>
              <h2 className="font-heading text-3xl md:text-4xl text-[#1B2B5E] font-bold mb-6">
                Authentic Indian Catering Across Den Haag and Surrounding Areas
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  When you hire Chopras to cater your event, you are not getting a catering
                  company that also does Indian food. You are getting an Indian restaurant —
                  with real chefs, real spices ground in-house, and real recipes — setting up
                  at your venue and serving your guests as if they walked into our kitchen on
                  Leyweg.
                </p>
                <p>
                  Every menu is built around your event. Halal as standard. Vegetarian and
                  vegan options included automatically. We handle the food from first enquiry
                  to final dish.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-6">
                {RESTAURANT.serviceAreas.map((city) => (
                  <span
                    key={city}
                    className="bg-[#1B2B5E]/10 text-[#1B2B5E] border border-[#1B2B5E]/20 px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: service area map placeholder */}
            <div className="bg-[#f5ede0] rounded-2xl aspect-square flex items-center justify-center text-[#1B2B5E]/40 font-heading text-xl">
              Service Area Map
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — Event Types Grid */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-heading text-3xl text-[#1B2B5E] font-bold mb-12">
            Indian Catering for Every Type of Event in Den Haag
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {eventTypes.map(({ icon: Icon, title, copy }) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center"
              >
                <div className="flex justify-center mb-3">
                  <Icon size={32} className="text-[#D4AF37]" />
                </div>
                <h3 className="font-heading font-bold text-[#1B2B5E] text-base mb-2">
                  {title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — Private Event Hall */}
      <section className="bg-[#1B2B5E] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: image placeholder */}
            <div className="bg-white/10 rounded-2xl aspect-[4/3] flex items-center justify-center text-white/30 font-heading text-xl">
              Event Hall Photo
            </div>

            {/* Right: copy */}
            <div>
              <h2 className="font-heading text-3xl md:text-4xl text-white font-bold mb-6">
                Our Private Event Hall in Den Haag
              </h2>
              <div className="space-y-4 text-white/80 leading-relaxed">
                <p>
                  Our private event hall at Leyweg 986 is available for hire for groups of
                  25 to 80 guests. The space is set up with vibrant Indian décor that works
                  beautifully as a backdrop for photography, corporate presentations, or pure
                  celebration.
                </p>
                <p>
                  We have hosted weddings, engagement parties, Diwali dinners, corporate team
                  events, yoga sessions, dance workshops, and charity evenings. The space is
                  flexible — we arrange the layout to suit your event.
                </p>
                <p>
                  One thing we should mention honestly: the event hall is upstairs and is not
                  wheelchair accessible. The main restaurant is fully accessible. If
                  accessibility is a requirement, please let us know and we will discuss how
                  to accommodate you.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-6">
                {[
                  '25–80 Guests',
                  'Vibrant Indian Décor',
                  'Photo and Video Shoots',
                  'AV Equipment Welcome',
                  'Full Catering Included',
                  'Professional Staff',
                ].map((pill) => (
                  <span
                    key={pill}
                    className="bg-white/10 text-white text-sm px-4 py-2 rounded-full"
                  >
                    {pill}
                  </span>
                ))}
              </div>

              <a
                href="#catering-form"
                className="inline-block mt-8 bg-[#D4AF37] text-[#1B2B5E] px-8 py-4 rounded-full font-bold hover:bg-[#c9a230] transition-colors"
              >
                Book the Hall
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 — Why Chopras for Catering */}
      <section className="bg-[#FFFAF5] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-heading text-3xl text-[#1B2B5E] font-bold mb-12">
            Why Businesses and Families in Den Haag Choose Chopras for Catering
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {whyCards.map(({ icon: Icon, title, copy }) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <Icon size={28} className="text-[#D4AF37] mt-0.5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-[#1B2B5E] text-lg mb-2">
                      {title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{copy}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6 — FAQ Accordion */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-heading text-3xl text-[#1B2B5E] font-bold mb-10">
            Frequently Asked Questions — Indian Catering in Den Haag
          </h2>
          <CateringFaqAccordion />
        </div>
      </section>

      {/* Section 7 — Quote Form */}
      <section id="catering-form" className="bg-[#1B2B5E] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl text-white text-center font-bold mb-3">
            Request Your Indian Catering Quote in Den Haag
          </h2>
          <p className="text-white/70 text-center mb-10">
            Tell us about your event and we will get back to you within 24 hours.
          </p>
          <CateringForm />
        </div>
      </section>

      {/* Breadcrumb nav (visually hidden, for SEO/accessibility) */}
      <nav aria-label="Breadcrumb" className="sr-only">
        <ol>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <span>Catering</span>
          </li>
        </ol>
      </nav>
    </>
  )
}
