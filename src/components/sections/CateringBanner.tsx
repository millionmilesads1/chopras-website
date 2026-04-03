'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useInView } from '@/hooks/useInView'
import { getTranslations, type Locale } from '@/lib/useTranslations'

export default function CateringBanner({ locale = 'en' }: { locale?: Locale }) {
  const tr = getTranslations(locale)
  const base = `/${locale}`
  const { ref, inView } = useInView()

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/catering/wedding-celebrations---2.png"
        alt="Indian event catering and private hall at Chopras Den Haag"
        fill
        className="object-cover object-center"
        sizes="100vw"
      />
      {/* Navy overlay */}
      <div className="absolute inset-0 bg-[#1B2B5E]/80" />

      {/* Content */}
      <div
        ref={ref}
        className={`relative z-10 max-w-3xl mx-auto text-center transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <p className="font-body text-[#D4AF37] text-xs uppercase tracking-widest mb-4">
          Events &amp; Catering
        </p>
        <h2 className="font-heading font-semibold italic text-white text-5xl md:text-6xl leading-tight">
          Planning an Event
          <br />
          in Den Haag?
        </h2>
        <p className="font-body text-white/80 text-xl mt-6 leading-relaxed">
          {tr.home.cateringP.split('.')[0]}.
        </p>
        <p className="font-body text-white/60 text-base mt-2">
          {tr.home.cateringP.split('.').slice(1, 2).join('.').trim()}.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <Link
            href={`${base}/catering`}
            className="bg-[#D4AF37] text-[#1A1A1A] font-semibold px-10 py-5 text-sm uppercase tracking-widest hover:bg-[#C49B2A] transition-all font-body"
          >
            {tr.home.cateringCta}
          </Link>
          <Link
            href={`${base}/catering`}
            className="border border-white/40 text-white px-10 py-5 text-sm uppercase tracking-widest hover:bg-white/10 transition-all font-body"
          >
            View Event Hall
          </Link>
        </div>

        {/* Quick facts */}
        <div className="flex flex-wrap gap-8 justify-center mt-10">
          <span className="font-body text-white/60 text-sm">25 to 80 guests</span>
          <span className="font-body text-white/60 text-sm">Halal Certified</span>
          <span className="font-body text-white/60 text-sm">Den Haag &amp; Surrounding Areas</span>
        </div>
      </div>
    </section>
  )
}
