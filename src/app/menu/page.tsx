import type { Metadata } from 'next'
import Link from 'next/link'
import JsonLd from '@/components/seo/JsonLd'
import MenuPageClient from '@/components/sections/MenuPageClient'
import { menuCategories, menuItems } from '@/lib/menu-data'

export const metadata: Metadata = {
  title: 'Indian Restaurant Menu Den Haag | Chopras — Curries, Tandoori & Street Food',
  description:
    'Browse the full Chopras Indian menu in Den Haag. Fresh curries, tandoori, biryani, chaat and street food. Halal certified. Vegetarian and vegan options clearly labelled.',
  keywords: [
    'Indian restaurant menu Den Haag',
    'Indiaas menu Den Haag',
    'curry Den Haag',
    'tandoori Den Haag',
    'biryani Den Haag',
    'Indian street food Den Haag',
    'halal menu Den Haag',
  ],
  alternates: { canonical: 'https://chopras.nl/menu' },
  openGraph: {
    title: 'Indian Restaurant Menu Den Haag | Chopras',
    description:
      'Full Indian menu in Den Haag — curries, tandoori, biryani, street food. Halal, vegetarian and vegan options.',
    url: 'https://chopras.nl/menu',
    images: [
      {
        url: '/og/menu-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Chopras Indian Restaurant menu Den Haag',
      },
    ],
  },
}

const menuSchema = {
  '@context': 'https://schema.org',
  '@type': 'Menu',
  name: 'Chopras Indian Restaurant Menu',
  url: 'https://chopras.nl/menu',
  hasMenuSection: menuCategories.map((category) => ({
    '@type': 'MenuSection',
    name: category.label,
    hasMenuItem: menuItems
      .filter((item) => item.category === category.id)
      .map((item) => ({
        '@type': 'MenuItem',
        name: item.name,
        description: item.description,
        offers: {
          '@type': 'Offer',
          price: item.price.toFixed(2),
          priceCurrency: 'EUR',
        },
      })),
  })),
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://chopras.nl' },
    { '@type': 'ListItem', position: 2, name: 'Menu', item: 'https://chopras.nl/menu' },
  ],
}

export default function MenuPage() {
  return (
    <>
      <JsonLd data={menuSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* Page header */}
      <section className="bg-[#1B2B5E] py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center justify-center gap-2 text-[#D4AF37]/70 text-sm">
              <li>
                <Link href="/" className="hover:text-[#D4AF37] transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-[#D4AF37]/50">Menu</li>
            </ol>
          </nav>

          <h1 className="text-4xl md:text-6xl font-heading text-white">
            Indian Restaurant Menu in Den Haag
          </h1>

          <p className="text-lg text-white/70 mt-4">
            Made fresh every day. Every spice sourced from India. Halal certified.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
            <span className="bg-white/10 text-white text-sm px-4 py-2 rounded-full">
              Open Tue–Fri 15:00–22:00
            </span>
            <span className="bg-white/10 text-white text-sm px-4 py-2 rounded-full">
              Sat–Sun 13:00–22:00 · Mon Closed
            </span>
          </div>
        </div>
      </section>

      {/* Interactive menu client */}
      <MenuPageClient />

      {/* Bottom CTA */}
      <section className="bg-[#1B2B5E] py-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-heading text-white text-3xl">Ready to Order?</h2>
          <p className="text-white/70 mt-3">
            Reserve your table at Chopras Indian Restaurant in Den Haag or order online for
            delivery.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Link
              href="/reservations"
              className="bg-[#D4AF37] text-[#1B2B5E] px-8 py-4 rounded-full font-bold hover:bg-[#D4AF37]/90 transition-colors min-h-[48px] inline-flex items-center"
            >
              Reserve a Table
            </Link>
            <a
              href="https://www.thuisbezorgd.nl/en/menu/redfort-indian-street-food"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-[#D4AF37] text-[#D4AF37] px-8 py-4 rounded-full hover:bg-[#D4AF37]/10 transition-colors min-h-[48px] inline-flex items-center"
            >
              Order on Thuisbezorgd
            </a>
            <a
              href="https://www.ubereats.com/nl-en/store/red-fort-indian-street-food/kFKhBtR-W3OkJyl2f6QmUg"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white/30 text-white px-8 py-4 rounded-full hover:bg-white/10 transition-colors min-h-[48px] inline-flex items-center"
            >
              Order on Uber Eats
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
