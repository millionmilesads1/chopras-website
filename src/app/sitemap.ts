import { MetadataRoute } from 'next'
import { blogPosts } from '@/lib/blog-data'
import { SITE_URL } from '@/lib/constants'

const locales = ['en', 'nl'] as const

const staticPages = [
  { slug: '', lastMod: '2026-04-05' },
  { slug: 'menu', lastMod: '2026-04-05' },
  { slug: 'catering', lastMod: '2026-04-05' },
  { slug: 'contact', lastMod: '2026-04-05' },
  { slug: 'vacancy', lastMod: '2026-04-03' },
  { slug: 'blog', lastMod: '2026-04-05' },
  { slug: 'butter-chicken-den-haag', lastMod: '2026-04-03' },
  { slug: 'biryani-den-haag', lastMod: '2026-04-03' },
  { slug: 'tandoori-den-haag', lastMod: '2026-04-03' },
  { slug: 'indian-takeaway-den-haag', lastMod: '2026-04-03' },
  { slug: 'indian-buffet-den-haag', lastMod: '2026-04-05' },
  { slug: 'party-venue-den-haag', lastMod: '2026-04-03' },
  { slug: 'corporate-events-den-haag', lastMod: '2026-04-03' },
  { slug: 'indian-wedding-catering-den-haag', lastMod: '2026-04-03' },
  { slug: 'indian-food-netherlands', lastMod: '2026-04-03' },
  { slug: 'halal-food-den-haag', lastMod: '2026-04-03' },
  { slug: 'indian-restaurant-rijswijk', lastMod: '2026-04-05' },
  { slug: 'indian-restaurant-delft', lastMod: '2026-04-05' },
  { slug: 'indian-restaurant-zoetermeer', lastMod: '2026-04-05' },
]

export default function sitemap(): MetadataRoute.Sitemap {
  // All static pages × both locales
  const sitemapStaticPages = locales.flatMap((locale) =>
    staticPages.map(({ slug, lastMod }) => ({
      url: slug ? `${SITE_URL}/${locale}/${slug}` : `${SITE_URL}/${locale}`,
      lastModified: new Date(lastMod),
    }))
  )

  // Blog posts  -  each post only at its own language URL
  const blogPages = blogPosts.map((post) => ({
    url: `${SITE_URL}/${post.language}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
  }))

  return [...sitemapStaticPages, ...blogPages]
}
