import type { Metadata } from 'next'
import Link from 'next/link'
import JsonLd from '@/components/seo/JsonLd'
import { blogPosts } from '@/lib/blog-data'
import { getTranslations, type Locale } from '@/lib/useTranslations'
import { SITE_URL } from '@/lib/constants'
import { getBreadcrumbSchema } from '@/lib/schema'

type Props = { params: { locale: Locale } }

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'nl' }]
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = params
  const titles = {
    en: 'Indian Food Blog Den Haag | Chopras  -  Recipes, Stories and Tips',
    nl: 'Indiaas Eten Blog Den Haag | Chopras  -  Recepten, Verhalen en Tips',
  }
  const descriptions = {
    en: 'Discover Indian food stories, restaurant guides, catering tips and street food guides from Chopras Indian Restaurant in Den Haag.',
    nl: 'Ontdek Indiase voedselsverhalen, restaurantgidsen, cateringstips en streetfoodgidsen van Chopras Indiaas Restaurant in Den Haag.',
  }
  return {
    title: titles[locale],
    description: descriptions[locale],
    alternates: {
      canonical: `${SITE_URL}/${locale}/blog`,
      languages: {
        en: `${SITE_URL}/en/blog`,
        nl: `${SITE_URL}/nl/blog`,
        'x-default': `${SITE_URL}/en/blog`,
      },
    },
  }
}

function formatDate(dateStr: string, locale: Locale): string {
  return new Intl.DateTimeFormat(locale === 'nl' ? 'nl-NL' : 'en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(dateStr))
}

export default function LocaleBlogPage({ params }: Props) {
  const { locale } = params
  const tr = getTranslations(locale)
  const base = `/${locale}`
  const localePosts = blogPosts.filter(post => post.language === locale)

  return (
    <>
      <JsonLd data={getBreadcrumbSchema([
        { name: tr.common.nav.home, item: `${SITE_URL}/${locale}` },
        { name: tr.common.nav.blog, item: `${SITE_URL}/${locale}/blog` },
      ])} />

      {/* Hero */}
      <section className="bg-[#1B2B5E] py-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="h-px w-8 bg-[#D4AF37]" />
            <span
              className="text-[#D4AF37] text-xs uppercase tracking-widest font-medium"
              style={{ textShadow: '0 1px 3px rgba(0,0,0,0.8), 0 0 8px rgba(0,0,0,0.5)' }}
            >
              FROM OUR KITCHEN
            </span>
            <div className="h-px w-8 bg-[#D4AF37]" />
          </div>
          <h1
            className="font-heading text-4xl md:text-5xl text-white mb-4 leading-tight"
            style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}
          >
            {tr.blog.heroH1}
          </h1>
          <p
            className="text-white/70 text-lg"
            style={{ textShadow: '0 1px 4px rgba(0,0,0,0.7)' }}
          >
            {tr.blog.heroSub}
          </p>
        </div>
      </section>

      {/* Article Grid */}
      <section className="bg-[#FFFAF5] py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-heading text-3xl text-[#1B2B5E] text-center mb-12">
            {tr.blog.latestH2}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {localePosts.map((post) => (
              <article
                key={post.slug}
                className="relative bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className={`h-2 ${post.language === 'nl' ? 'bg-[#D4AF37]' : 'bg-[#1B2B5E]'}`} />
                <span className="absolute top-6 right-4 bg-[#D4AF37] text-[#1B2B5E] text-xs font-bold px-2 py-1 rounded">
                  {post.language === 'nl' ? 'NL' : 'EN'}
                </span>
                <div className="p-6">
                  <p className="text-gray-400 text-xs mb-2">{formatDate(post.publishedAt, locale)}</p>
                  <h3 className="font-heading text-xl text-[#1A1A1A] leading-tight mb-3">{post.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                  <span className="inline-block bg-[#1B2B5E]/10 text-[#1B2B5E] text-xs px-3 py-1 rounded-full">
                    {post.primaryKeyword}
                  </span>
                  <div className="mt-4">
                    <Link
                      href={`${base}/blog/${post.slug}`}
                      className="text-[#1B2B5E] font-semibold text-sm hover:text-[#D4AF37] transition-colors"
                    >
                      {tr.blog.readArticle}
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
