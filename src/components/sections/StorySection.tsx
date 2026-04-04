'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useInView } from '@/hooks/useInView'
import { getTranslations, type Locale } from '@/lib/useTranslations'

export default function StorySection({ locale = 'en' }: { locale?: Locale }) {
  const tr = getTranslations(locale)
  const base = `/${locale}`
  const { ref: imgRef, inView: imgInView } = useInView()
  const { ref: textRef, inView: textInView } = useInView()

  return (
    <section className="bg-[#FFFAF5] py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        {/* LEFT: Image stack */}
        <div
          ref={imgRef}
          className={`sticky top-24 self-start max-w-[480px] relative transition-all duration-700 ease-out ${imgInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/images/restaurant/people-enjoying-food---best.png"
              alt="Guests enjoying dinner at Chopras Indian Restaurant Den Haag"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          {/* Floating dish image — overlaps bottom-right corner */}
          <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-2xl overflow-hidden border-4 border-[#FFFAF5] shadow-xl">
            <Image
              src="/images/dishes/butter-chicken.webp"
              alt="Butter Chicken at Chopras Indian Restaurant"
              fill
              className="object-cover"
              sizes="192px"
            />
          </div>
        </div>

        {/* RIGHT: Story copy */}
        <div
          ref={textRef}
          className={`transition-all duration-700 ease-out delay-100 ${textInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p className="font-body text-[#D4AF37] text-xs uppercase tracking-widest mb-4">
            Our Story
          </p>
          <h2 className="font-heading font-semibold text-[#1B2B5E] text-4xl md:text-5xl leading-tight">
            {tr.home.storyH2}
          </h2>

          <div className="font-body text-[#1A1A1A]/80 text-lg leading-relaxed mt-6 space-y-4">
            <p>{tr.home.storyP1}</p>
            <p>{tr.home.storyP2}</p>
            <p>{tr.home.storyP3}</p>
            <p>{tr.home.storyP4}</p>
            <p>{tr.home.storyP5}</p>
          </div>

          {/* Stat pills */}
          <div className="flex flex-wrap gap-4 mt-8">
            <span className="bg-[#1B2B5E] text-white rounded-full px-6 py-3 font-body text-sm">
              Opened 2023 &middot; Leyweg, Den Haag
            </span>
            <span className="bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#1B2B5E] rounded-full px-6 py-3 font-body text-sm">
              89 Dishes &middot; 12 Categories
            </span>
            <span className="bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#1B2B5E] rounded-full px-6 py-3 font-body text-sm">
              Indian Street Food Den Haag
            </span>
          </div>

          <Link
            href={`${base}/menu`}
            className="font-body font-semibold text-sm uppercase tracking-wider text-[#1B2B5E] underline-offset-4 hover:underline mt-8 block"
          >
            Discover Our Full Menu &rarr;
          </Link>
        </div>
      </div>
    </section>
  )
}
