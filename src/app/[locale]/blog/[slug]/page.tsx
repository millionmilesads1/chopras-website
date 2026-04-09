import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { blogPosts } from '@/lib/blog-data'
import { getTranslations, type Locale } from '@/lib/useTranslations'
import { SITE_URL } from '@/lib/constants'
import JsonLd from '@/components/seo/JsonLd'
import { getBlogPostingSchema, getBreadcrumbSchema } from '@/lib/schema'

type Props = { params: { locale: Locale; slug: string } }

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    locale: post.language,
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug)
  if (!post) return {}
  const { locale } = params
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: {
      canonical: `${SITE_URL}/${locale}/blog/${post.slug}`,
      languages: {
        [post.language]: `${SITE_URL}/${post.language}/blog/${post.slug}`,
        'x-default': post.language === 'en'
          ? `${SITE_URL}/en/blog/${post.slug}`
          : `${SITE_URL}/en/blog`,
      },
    },
  }
}

function formatDate(dateStr: string, locale: Locale): string {
  return new Intl.DateTimeFormat(locale === 'nl' ? 'nl-NL' : 'en-GB', {
    day: 'numeric', month: 'long', year: 'numeric',
  }).format(new Date(dateStr))
}

export default function LocaleBlogPostPage({ params }: Props) {
  const { locale, slug } = params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) notFound()

  const tr = getTranslations(locale)
  const base = `/${locale}`
  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug && p.language === locale)
    .slice(0, 2)

  return (
    <>
      <JsonLd data={getBlogPostingSchema(post, locale)} />
      <JsonLd data={getBreadcrumbSchema([
        { name: tr.common.nav.home, item: `${SITE_URL}/${locale}` },
        { name: tr.common.nav.blog, item: `${SITE_URL}/${locale}/blog` },
        { name: post.title, item: `${SITE_URL}/${locale}/blog/${post.slug}` },
      ])} />

      {/* Hero */}
      <section className="bg-[#1B2B5E] py-20">
        <div className="max-w-4xl mx-auto px-4">
          <nav className="text-white/50 text-sm mb-6" aria-label="Breadcrumb">
            <Link href={base} className="hover:text-white/80 transition-colors">{tr.common.nav.home}</Link>
            <span className="mx-2">/</span>
            <Link href={`${base}/blog`} className="hover:text-white/80 transition-colors">{tr.common.nav.blog}</Link>
            <span className="mx-2">/</span>
            <span className="text-white/70 line-clamp-1">{post.title}</span>
          </nav>

          {post.language === 'nl' && (
            <span className="inline-block bg-[#D4AF37] text-[#1B2B5E] text-xs font-bold px-3 py-1 rounded-full mb-6">
              {tr.blog.nlBadge}
            </span>
          )}

          <h1 className="font-heading text-3xl md:text-5xl text-white max-w-4xl leading-tight mb-4">
            {post.h1}
          </h1>

          <p className="text-white/60 text-sm mb-6">By {post.author} · Founder, Chopras Indian Restaurant</p>

          <div className="flex flex-wrap items-center gap-4 text-white/60 text-sm">
            <span>{formatDate(post.publishedAt, locale)}</span>
            <span className="bg-[#D4AF37]/20 text-[#D4AF37] text-xs px-3 py-1 rounded-full">
              {post.primaryKeyword}
            </span>
            <span>{post.readingTime} {tr.blog.minRead}</span>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12">
            <article
              className="prose prose-lg max-w-none
                prose-headings:font-heading prose-headings:text-[#1B2B5E]
                prose-p:text-gray-700 prose-p:leading-relaxed
                prose-a:text-[#1B2B5E] prose-a:underline
                prose-strong:text-[#1A1A1A]
                prose-ul:text-gray-700"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <aside className="mt-8 lg:mt-0">
              <div className="lg:sticky lg:top-8 bg-[#1B2B5E] rounded-2xl p-6 text-white">
                <p className="font-heading text-xl mb-4 leading-snug">{tr.blog.enjoySidebar}</p>
                <p className="text-white/70 text-sm mb-1">Leyweg 986</p>
                <p className="text-white/70 text-sm mb-1">2545 GW Den Haag</p>
                <p className="text-white/70 text-sm mb-6">+31 6 30645930</p>
                <a
                  href={`${base}/contact`}
                  className="block w-full bg-[#D4AF37] text-[#1B2B5E] text-center font-bold py-3 rounded-xl mb-3 hover:bg-[#D4AF37]/90 transition-colors"
                >
                  {tr.common.reserve}
                </a>
                <Link
                  href={`${base}/menu`}
                  className="block text-center text-white/70 text-sm hover:text-white transition-colors"
                >
                  {tr.common.viewMenu} →
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="bg-[#FFFAF5] py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="font-heading text-2xl text-[#1B2B5E] mb-8">{tr.blog.relatedH2}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`${base}/blog/${related.slug}`}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow block"
                >
                  <p className="text-gray-400 text-xs mb-2">{formatDate(related.publishedAt, locale)}</p>
                  <h3 className="font-heading text-lg text-[#1A1A1A] leading-tight mb-2">{related.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">{related.excerpt}</p>
                  <span className="inline-block mt-3 text-[#1B2B5E] font-semibold text-sm">
                    {tr.blog.readArticle}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
