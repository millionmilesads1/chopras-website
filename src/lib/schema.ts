/**
 * Centralised schema.org JSON-LD generators for Chopras Indian Restaurant.
 * All structured data in the project must be generated here and imported
 * into pages - never hardcoded inline.
 *
 * Entity anchor IDs (stable across all pages):
 *   #website       - WebSite entity
 *   #restaurant    - Restaurant / LocalBusiness entity
 *   #arun-chopra   - Person (founder) entity
 */

import { RESTAURANT, SITE_URL } from './constants'

export type Locale = 'en' | 'nl'

// ---------------------------------------------------------------------------
// Shared values
// ---------------------------------------------------------------------------

const OPENING_HOURS: Record<string, unknown>[] = [
  {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '16:30',
    closes: '22:30',
  },
]

const SAME_AS = [
  'https://www.tripadvisor.com/Restaurant_Review-g188633-d27464805-Reviews-Chopras_Indian_Restaurant-The_Hague_South_Holland_Province.html',
  `https://www.google.com/maps/place/?q=place_id:${RESTAURANT.googlePlaceId}`,
  'https://www.facebook.com/choprasrestaurant',
  'https://www.instagram.com/choprasrestaurant',
  'https://www.youtube.com/@choprasrestaurant',
]

const AGGREGATE_RATING = {
  '@type': 'AggregateRating',
  ratingValue: '4.7',
  reviewCount: '83',
  bestRating: '5',
  worstRating: '1',
}

const ADDRESS = {
  '@type': 'PostalAddress',
  streetAddress: RESTAURANT.address.street,
  addressLocality: RESTAURANT.address.city,
  postalCode: RESTAURANT.address.postcode,
  addressCountry: RESTAURANT.address.countryCode,
}

const GEO = {
  '@type': 'GeoCoordinates',
  latitude: RESTAURANT.address.coordinates.lat,
  longitude: RESTAURANT.address.coordinates.lng,
}

// ---------------------------------------------------------------------------
// WebSite schema
// ---------------------------------------------------------------------------

export function getWebSiteSchema(locale: Locale): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: RESTAURANT.name,
    url: SITE_URL,
    inLanguage: locale === 'nl' ? 'nl-NL' : 'en-GB',
  }
}

// ---------------------------------------------------------------------------
// Restaurant entity (main LocalBusiness/Restaurant schema)
// ---------------------------------------------------------------------------

export function getRestaurantSchema(locale: Locale): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    '@id': `${SITE_URL}/#restaurant`,
    name: RESTAURANT.name,
    image: [
      RESTAURANT.logo,
      `${SITE_URL}/og/home-og.jpg`,
    ],
    url: `${SITE_URL}/${locale}`,
    telephone: RESTAURANT.contact.phone,
    email: RESTAURANT.contact.email,
    address: ADDRESS,
    geo: GEO,
    servesCuisine: ['Indian', 'North Indian', 'Street Food', 'Indo-Chinese', 'Halal'],
    priceRange: RESTAURANT.priceRange,
    openingHoursSpecification: OPENING_HOURS,
    hasMenu: `${SITE_URL}/${locale}/menu`,
    hasMap: RESTAURANT.googleMapsUrl,
    acceptsReservations: `${SITE_URL}/${locale}/contact`,
    areaServed: RESTAURANT.serviceAreas,
    aggregateRating: AGGREGATE_RATING,
    suitableForDiet: { '@id': 'https://schema.org/HalalDiet' },
    logo: {
      '@type': 'ImageObject',
      url: RESTAURANT.logo,
      width: 512,
      height: 512,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: RESTAURANT.contact.phone,
      email: RESTAURANT.contact.email,
      contactType: 'reservations',
      availableLanguage: ['English', 'Dutch', 'Hindi'],
    },
    sameAs: SAME_AS,
    founder: {
      '@type': 'Person',
      '@id': `${SITE_URL}/#arun-chopra`,
      name: 'Arun Chopra',
      jobTitle: 'Founder',
      url: `${SITE_URL}/en`,
    },
  }
}

// ---------------------------------------------------------------------------
// Restaurant schema - area-served variant for location-specific pages
// ---------------------------------------------------------------------------

export function getLocalRestaurantSchema(
  locale: Locale,
  areas: string[],
  pageUrl: string,
): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'Restaurant'],
    '@id': `${SITE_URL}/#restaurant`,
    name: RESTAURANT.name,
    url: pageUrl,
    telephone: RESTAURANT.contact.phone,
    email: RESTAURANT.contact.email,
    address: ADDRESS,
    geo: GEO,
    servesCuisine: ['North Indian', 'Indian Street Food'],
    priceRange: RESTAURANT.priceRange,
    openingHoursSpecification: OPENING_HOURS,
    areaServed: areas,
    aggregateRating: AGGREGATE_RATING,
    sameAs: SAME_AS,
  }
}

// ---------------------------------------------------------------------------
// Founder / Person schema
// ---------------------------------------------------------------------------

export function getFounderSchema(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SITE_URL}/#arun-chopra`,
    name: 'Arun Chopra',
    jobTitle: 'Founder and Head Chef',
    description:
      'Arun Chopra founded Chopras Indian Restaurant in Den Haag in 2023 with the mission to serve authentic North Indian cuisine exactly as it is eaten in India.',
    worksFor: {
      '@type': 'Restaurant',
      '@id': `${SITE_URL}/#restaurant`,
      name: RESTAURANT.name,
      url: SITE_URL,
    },
    url: `${SITE_URL}/en`,
    sameAs: [`${SITE_URL}/en`],
  }
}

// ---------------------------------------------------------------------------
// FAQPage schema
// NOTE: Google restricted FAQPage rich results to government and healthcare
// authority sites in August 2023. This function is retained for completeness
// but should NOT be added to restaurant pages — it produces no rich result.
// ---------------------------------------------------------------------------

export function getFaqPageSchema(
  faqs: Array<{ question: string; answer: string }>,
  datePublished = '2024-01-01',
  dateModified = '2026-04-07',
): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    datePublished,
    dateModified,
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      datePublished,
      dateModified,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
        datePublished,
        dateModified,
      },
    })),
  }
}

// ---------------------------------------------------------------------------
// BreadcrumbList schema
// ---------------------------------------------------------------------------

export function getBreadcrumbSchema(
  items: Array<{ name: string; item: string }>,
): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((entry, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: entry.name,
      item: entry.item,
    })),
  }
}

// ---------------------------------------------------------------------------
// Menu schema
// ---------------------------------------------------------------------------

export function getMenuSchema(
  locale: Locale,
  sections: Array<{
    name: string
    items: Array<{ name: string; description: string; price: number }>
  }>,
): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Menu',
    '@id': `${SITE_URL}/${locale}/menu#menu`,
    name: `${RESTAURANT.name} Menu`,
    url: `${SITE_URL}/${locale}/menu`,
    hasMenuSection: sections.map((section) => ({
      '@type': 'MenuSection',
      name: section.name,
      hasMenuItem: section.items.map((item) => ({
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
}

// ---------------------------------------------------------------------------
// BlogPosting schema
// ---------------------------------------------------------------------------

export function getBlogPostingSchema(
  post: {
    h1: string
    metaDescription: string
    publishedAt: string
    author: string
    slug: string
    image?: string
  },
  locale: Locale,
): Record<string, unknown> {
  const postUrl = `${SITE_URL}/${locale}/blog/${post.slug}`
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${postUrl}#article`,
    headline: post.h1,
    description: post.metaDescription,
    inLanguage: locale === 'nl' ? 'nl-NL' : 'en-GB',
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      '@type': 'Person',
      '@id': `${SITE_URL}/#arun-chopra`,
      name: post.author,
      jobTitle: 'Founder',
      url: `${SITE_URL}/en`,
    },
    publisher: {
      '@type': 'Organization',
      name: RESTAURANT.name,
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: RESTAURANT.logo,
        width: 512,
        height: 512,
      },
    },
    url: postUrl,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': postUrl,
    },
    image: post.image ?? `${SITE_URL}/og/home-og.jpg`,
  }
}

// ---------------------------------------------------------------------------
// CateringService schema
// ---------------------------------------------------------------------------

export function getCateringServiceSchema(locale: Locale): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'CateringService',
    name: locale === 'nl'
      ? 'Chopras Indiaas Restaurant - Buffet Catering'
      : 'Chopras Indian Restaurant - Buffet Catering',
    provider: {
      '@type': 'Restaurant',
      '@id': `${SITE_URL}/#restaurant`,
      name: RESTAURANT.name,
      telephone: RESTAURANT.contact.phone,
      address: ADDRESS,
    },
    areaServed: RESTAURANT.serviceAreas.map((area) => ({ '@type': 'City', name: area })),
  }
}
