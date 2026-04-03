import { MetadataRoute } from 'next'
import { blogPosts } from '@/lib/blog-data'
import { SITE_URL } from '@/lib/constants'

const locales = ['en', 'nl'] as const

const staticPages = [
  { slug: '', priority: 1.0, changeFreq: 'weekly' as const, lastMod: '2026-04-03' },
  { slug: 'menu', priority: 0.9, changeFreq: 'monthly' as const, lastMod: '2026-04-03' },
  { slug: 'catering', priority: 0.9, changeFreq: 'monthly' as const, lastMod: '2026-04-03' },
  { slug: 'contact', priority: 0.8, changeFreq: 'monthly' as const, lastMod: '2026-04-03' },
  { slug: 'vacancy', priority: 0.6, changeFreq: 'weekly' as const, lastMod: '2026-04-03' },
  { slug: 'blog', priority: 0.7, changeFreq: 'weekly' as const, lastMod: '2026-04-03' },
  { slug: 'butter-chicken-den-haag', priority: 0.85, changeFreq: 'monthly' as const, lastMod: '2026-04-03' },
  { slug: 'biryani-den-haag', priority: 0.85, changeFreq: 'monthly' as const, lastMod: '2026-04-03' },
  { slug: 'tandoori-den-haag', priority: 0.8, changeFreq: 'monthly' as const, lastMod: '2026-04-03' },
  { slug: 'indian-takeaway-den-haag', priority: 0.8, changeFreq: 'monthly' as const, lastMod: '2026-04-03' },
  { slug: 'indian-buffet-den-haag', priority: 0.85, changeFreq: 'monthly' as const, lastMod: '2026-04-03' },
  { slug: 'party-venue-den-haag', priority: 0.85, changeFreq: 'monthly' as const, lastMod: '2026-04-03' },
  { slug: 'corporate-events-den-haag', priority: 0.8, changeFreq: 'monthly' as const, lastMod: '2026-04-03' },
  { slug: 'indian-wedding-catering-den-haag', priority: 0.9, changeFreq: 'monthly' as const, lastMod: '2026-04-03' },
  { slug: 'indian-food-netherlands', priority: 0.75, changeFreq: 'monthly' as const, lastMod: '2026-04-03' },
  { slug: 'halal-food-den-haag', priority: 0.85, changeFreq: 'monthly' as const, lastMod: '2026-04-03' },
  { slug: 'indian-restaurant-rijswijk', priority: 0.8, changeFreq: 'monthly' as const, lastMod: '2026-04-03' },
  { slug: 'indian-restaurant-delft', priority: 0.8, changeFreq: 'monthly' as const, lastMod: '2026-04-03' },
  { slug: 'indian-restaurant-zoetermeer', priority: 0.8, changeFreq: 'monthly' as const, lastMod: '2026-04-03' },
  { slug: 'sitemap-page', priority: 0.3, changeFreq: 'monthly' as const, lastMod: '2026-04-03' },
]

export default function sitemap(): MetadataRoute.Sitemap {
  // All static pages × both locales
  const sitemapStaticPages = locales.flatMap((locale) =>
    staticPages.map(({ slug, priority, changeFreq, lastMod }) => ({
      url: slug ? `${SITE_URL}/${locale}/${slug}` : `${SITE_URL}/${locale}`,
      lastModified: new Date(lastMod),
      changeFrequency: changeFreq,
      priority: locale === 'en' ? priority : priority * 0.9,
    }))
  )

  // Blog posts  -  each post only at its own language URL
  const blogPages = blogPosts.map((post) => ({
    url: `${SITE_URL}/${post.language}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: post.language === 'en' ? 0.7 : 0.63,
  }))

  return [...sitemapStaticPages, ...blogPages]
}
