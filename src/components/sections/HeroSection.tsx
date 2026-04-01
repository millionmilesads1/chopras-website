import Link from 'next/link'
import { ChevronDown } from 'lucide-react'

export default function HeroSection() {
  return (
    <>
      <section className="relative h-screen overflow-hidden bg-[#1a0a00]">
        {/* Video background — desktop only */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover hidden md:block"
          style={{ willChange: 'transform' }}
        >
          <source src="https://chopras.nl/wp-content/uploads/2025/09/09141.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 lg:px-8">
          <p className="uppercase tracking-widest text-[#D4AF37] text-sm mb-4">
            Authentic Indian Restaurant · Den Haag
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading text-white font-bold leading-tight">
            Chopras Indian Restaurant
          </h1>
          <p className="text-lg md:text-xl text-white/80 mt-4 max-w-2xl mx-auto">
            Fresh from the tandoor. Spices from India. Made with love in Leyweg.
          </p>
          <div className="flex flex-col md:flex-row gap-4 mt-8">
            <Link
              href="/reservations"
              className="bg-[#1B2B5E] text-[#D4AF37] px-8 py-4 rounded-full font-semibold hover:bg-[#6d0000] transition-colors min-h-[48px] flex items-center justify-center"
            >
              Reserve a Table
            </Link>
            <Link
              href="/menu"
              className="border-2 border-[#D4AF37] text-[#D4AF37] px-8 py-4 rounded-full font-semibold hover:bg-[#D4AF37]/10 transition-colors min-h-[48px] flex items-center justify-center"
            >
              View Our Menu
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown size={28} className="text-white/60" />
        </div>
      </section>

      {/* Mobile floating CTA — fixed, outside the section so it persists while scrolling */}
      <a
        href="/reservations"
        className="fixed bottom-4 left-4 right-4 z-50 md:hidden block w-auto bg-[#1B2B5E] text-[#D4AF37] text-center font-semibold py-4 rounded-full shadow-xl text-base"
      >
        Reserve a Table
      </a>
    </>
  )
}
