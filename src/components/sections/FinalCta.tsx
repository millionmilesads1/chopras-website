'use client'

import Link from 'next/link'
import { useInView } from '@/hooks/useInView'
import { getTranslations, type Locale } from '@/lib/useTranslations'

export default function FinalCta({ locale = 'en' }: { locale?: Locale }) {
  const tr = getTranslations(locale)
  const base = `/${locale}`
  const { ref, inView } = useInView()

  return (
    <section className="bg-gradient-to-b from-[#1B2B5E] to-[#0F1F3D] py-24 px-6 text-center">
      <div
        ref={ref}
        className={`transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        {/* Gold decorative line */}
        <div className="w-20 h-px bg-[#D4AF37] mx-auto mb-10" />

        <h2 className="font-heading font-semibold italic text-white text-6xl md:text-7xl leading-tight">
          {tr.home.ctaH2}
        </h2>

        <p className="font-body text-white/70 text-xl mt-6 max-w-xl mx-auto">
          {tr.home.ctaSub}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12 flex-wrap">
          <Link
            href={`${base}/contact`}
            className="bg-[#D4AF37] text-[#1A1A1A] px-12 py-5 font-semibold uppercase tracking-widest text-sm hover:bg-[#C49B2A] transition-all font-body"
          >
            Reserve a Table &rarr;
          </Link>
          <Link
            href={`${base}/menu`}
            className="border border-white/30 text-white px-12 py-5 uppercase tracking-widest text-sm hover:bg-white/10 transition-all font-body"
          >
            {tr.home.ctaMenu}
          </Link>
        </div>

        {/* Hours line */}
        <p className="font-body text-white/40 text-sm mt-8">
          Open Tuesday to Sunday &middot; 16:30 to 22:30 &middot; Leyweg 986, Den Haag
        </p>
      </div>
    </section>
  )
}
