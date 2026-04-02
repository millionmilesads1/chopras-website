import type { Metadata } from 'next'
import Link from 'next/link'
import { blogPosts } from '@/lib/blog-data'

export const metadata: Metadata = {
  title: 'Indian Food Blog Den Haag | Chopras — Recipes, Stories and Tips',
  description:
    'Discover Indian food stories, restaurant guides, catering tips and street food guides from Chopras Indian Restaurant in Den Haag.',
  alternates: {
    canonical: 'https://chopras.nl/blog',
  },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://chopras.nl' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://chopras.nl/blog' },
  ],
}

function formatDate(dateStr: string): string {
  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(dateStr))
}

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* HERO */}
      <section className="bg-[#1B2B5E] py-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="font-heading text-4xl md:text-5xl text-white mb-4 leading-tight">
            From Our Kitchen to Your Screen
          </h1>
          <p className="text-white/70 text-lg">
            Indian food stories, restaurant guides and catering tips from Chopras in Den Haag.
          </p>
        </div>
      </section>

      {/* ARTICLE GRID */}
      <section className="bg-[#FFFAF5] py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-heading text-3xl text-[#1B2B5E] text-center mb-12">
            Latest Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="relative bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                {/* Colored top bar */}
                <div
                  className={`h-2 ${post.language === 'nl' ? 'bg-[#D4AF37]' : 'bg-[#1B2B5E]'}`}
                />

                {/* Language badge */}
                <span className="absolute top-6 right-4 bg-[#D4AF37] text-[#1B2B5E] text-xs font-bold px-2 py-1 rounded">
                  {post.language === 'nl' ? 'NL' : 'EN'}
                </span>

                {/* Card body */}
                <div className="p-6">
                  <p className="text-gray-400 text-xs mb-2">{formatDate(post.publishedAt)}</p>
                  <h3 className="font-heading text-xl text-[#1A1A1A] leading-tight mb-3">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                  <span className="inline-block bg-[#1B2B5E]/10 text-[#1B2B5E] text-xs px-3 py-1 rounded-full">
                    {post.primaryKeyword}
                  </span>
                  <div className="mt-4">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-[#1B2B5E] font-semibold text-sm hover:text-[#D4AF37] transition-colors"
                    >
                      Read Article →
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
