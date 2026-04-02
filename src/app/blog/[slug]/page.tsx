import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { blogPosts } from '@/lib/blog-data'

type Props = {
  params: { slug: string }
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug)
  if (!post) return {}
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: {
      canonical: `https://chopras.nl/blog/${post.slug}`,
    },
  }
}

function formatDate(dateStr: string): string {
  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(dateStr))
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug)
  if (!post) notFound()

  const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2)

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.h1,
    description: post.metaDescription,
    datePublished: post.publishedAt,
    author: { '@type': 'Organization', name: 'Chopras Indian Restaurant' },
    publisher: {
      '@type': 'Organization',
      name: 'Chopras Indian Restaurant',
      url: 'https://chopras.nl',
    },
    url: `https://chopras.nl/blog/${post.slug}`,
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://chopras.nl' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://chopras.nl/blog' },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: `https://chopras.nl/blog/${post.slug}`,
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* HERO */}
      <section className="bg-[#1B2B5E] py-20">
        <div className="max-w-4xl mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="text-white/50 text-sm mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white/80 transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white/80 transition-colors">
              Blog
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white/70 line-clamp-1">{post.title}</span>
          </nav>

          {/* Language badge */}
          {post.language === 'nl' && (
            <span className="inline-block bg-[#D4AF37] text-[#1B2B5E] text-xs font-bold px-3 py-1 rounded-full mb-6">
              Dit artikel is in het Nederlands
            </span>
          )}

          {/* H1 */}
          <h1 className="font-heading text-3xl md:text-5xl text-white max-w-4xl leading-tight mb-8">
            {post.h1}
          </h1>

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-4 text-white/60 text-sm">
            <span>{formatDate(post.publishedAt)}</span>
            <span className="bg-[#D4AF37]/20 text-[#D4AF37] text-xs px-3 py-1 rounded-full">
              {post.primaryKeyword}
            </span>
            <span>{post.readingTime} min read</span>
          </div>
        </div>
      </section>

      {/* ARTICLE BODY */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12">
            {/* Article content */}
            <article
              className="prose prose-lg max-w-none
                prose-headings:font-heading prose-headings:text-[#1B2B5E]
                prose-p:text-gray-700 prose-p:leading-relaxed
                prose-a:text-[#1B2B5E] prose-a:underline
                prose-strong:text-[#1A1A1A]
                prose-ul:text-gray-700"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Sidebar CTA */}
            <aside className="mt-8 lg:mt-0">
              <div className="lg:sticky lg:top-8 bg-[#1B2B5E] rounded-2xl p-6 text-white">
                <p className="font-heading text-xl mb-4 leading-snug">
                  Enjoyed this article? Come visit us.
                </p>
                <p className="text-white/70 text-sm mb-1">Leyweg 986</p>
                <p className="text-white/70 text-sm mb-1">2545 GW Den Haag</p>
                <p className="text-white/70 text-sm mb-6">+31 6 30645930</p>
                <Link
                  href="/reservations"
                  className="block w-full bg-[#D4AF37] text-[#1B2B5E] text-center font-bold py-3 rounded-xl mb-3 hover:bg-[#D4AF37]/90 transition-colors"
                >
                  Reserve a Table
                </Link>
                <Link
                  href="/menu"
                  className="block text-center text-white/70 text-sm hover:text-white transition-colors"
                >
                  View Full Menu →
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* RELATED ARTICLES */}
      {relatedPosts.length > 0 && (
        <section className="bg-[#FFFAF5] py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="font-heading text-2xl text-[#1B2B5E] mb-8">More from Our Blog</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow block"
                >
                  <p className="text-gray-400 text-xs mb-2">{formatDate(related.publishedAt)}</p>
                  <h3 className="font-heading text-lg text-[#1A1A1A] leading-tight mb-2">
                    {related.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                    {related.excerpt}
                  </p>
                  <span className="inline-block mt-3 text-[#1B2B5E] font-semibold text-sm">
                    Read Article →
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
