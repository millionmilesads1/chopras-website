'use client'

import { useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import { getTranslations, type Locale } from '@/lib/useTranslations'

const FRAME_COUNT = 240
const FRAMES = Array.from({ length: FRAME_COUNT }, (_, i) =>
  `/images/hero-frames/ezgif-frame-${String(i + 1).padStart(3, '0')}.jpg`
)

export default function HeroSection({ locale = 'en' }: { locale?: Locale }) {
  const tr = getTranslations(locale)
  const base = `/${locale}`

  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const imagesRef = useRef<(HTMLImageElement | null)[]>(Array(FRAME_COUNT).fill(null))
  const currentFrameRef = useRef(0)
  const rafIdRef = useRef(0)

  // Draw a single frame with object-fit: cover behaviour
  const drawFrame = useCallback((index: number) => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    const img = imagesRef.current[index]
    if (!img?.complete || !img.naturalWidth) return

    const cw = canvas.width
    const ch = canvas.height
    const iw = img.naturalWidth
    const ih = img.naturalHeight
    const canvasAspect = cw / ch
    const imgAspect = iw / ih

    let sx = 0, sy = 0, sw = iw, sh = ih
    if (imgAspect > canvasAspect) {
      // image is wider — crop sides
      sw = ih * canvasAspect
      sx = (iw - sw) / 2
    } else {
      // image is taller — crop top/bottom
      sh = iw / canvasAspect
      sy = (ih - sh) / 2
    }

    ctx.drawImage(img, sx, sy, sw, sh, 0, 0, cw, ch)
  }, [])

  // Preload all frames; draw frame 0 as soon as it lands
  useEffect(() => {
    FRAMES.forEach((src, i) => {
      const img = new window.Image()
      img.onload = () => {
        imagesRef.current[i] = img
        if (i === 0) drawFrame(0)
      }
      img.src = src
    })
  }, [drawFrame])

  // Keep canvas sized to the viewport
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      drawFrame(currentFrameRef.current)
    }
    resize()
    window.addEventListener('resize', resize)
    return () => window.removeEventListener('resize', resize)
  }, [drawFrame])

  // Map scroll position → frame index
  useEffect(() => {
    const onScroll = () => {
      const container = containerRef.current
      if (!container) return

      const rect = container.getBoundingClientRect()
      const scrollable = rect.height - window.innerHeight
      const scrolled = -rect.top
      const progress = Math.max(0, Math.min(1, scrolled / scrollable))
      const frameIndex = Math.min(FRAME_COUNT - 1, Math.floor(progress * FRAME_COUNT))

      if (frameIndex !== currentFrameRef.current) {
        currentFrameRef.current = frameIndex
        cancelAnimationFrame(rafIdRef.current)
        rafIdRef.current = requestAnimationFrame(() => drawFrame(frameIndex))
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(rafIdRef.current)
    }
  }, [drawFrame])

  return (
    <>
      {/*
        Outer div is tall (300vh) — this is the scroll budget.
        Inner div is sticky so it stays pinned while we scroll through it.
      */}
      <div ref={containerRef} style={{ height: '300vh' }}>
        <div className="sticky top-0 h-screen overflow-hidden">

          {/* Canvas — frames rendered here */}
          <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

          {/* Gradient overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.45) 100%)',
            }}
          />

          {/* Hero content */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="h-px w-8 bg-[#D4AF37]" />
              <span
                className="text-[#D4AF37] text-xs uppercase tracking-widest font-medium"
                style={{ textShadow: '0 1px 3px rgba(0,0,0,0.8), 0 0 8px rgba(0,0,0,0.5)' }}
              >
                {tr.home.heroLabel} &middot; EST. 2023
              </span>
              <div className="h-px w-8 bg-[#D4AF37]" />
            </div>

            <h1
              className="font-heading font-bold text-[#FFFAF5] leading-none"
              style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}
            >
              <span className="block text-5xl md:text-6xl lg:text-8xl">Chopras</span>
              <span className="block italic font-light text-4xl md:text-5xl lg:text-6xl mt-2">
                Indian Restaurant
              </span>
            </h1>

            <div className="w-16 h-px bg-[#D4AF37] mx-auto my-6" />

            <p
              className="font-body font-light text-lg text-white/80 max-w-md text-center leading-relaxed"
              style={{ textShadow: '0 1px 4px rgba(0,0,0,0.7)' }}
            >
              Authentic Indian food in Den Haag — fresh from the tandoor,
              <br />
              spices from India, made with love on Leyweg.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center">
              <Link
                href={`${base}/contact`}
                className="bg-[#D4AF37] text-[#1A1A1A] font-semibold px-8 py-4 text-sm uppercase tracking-widest hover:bg-[#C49B2A] transition-all duration-300 min-h-[48px] flex items-center justify-center"
              >
                Reserve a Table &rarr;
              </Link>
              <Link
                href={`${base}/menu`}
                className="border border-white/40 text-white px-8 py-4 text-sm uppercase tracking-widest hover:bg-white/10 hover:border-white transition-all backdrop-blur-sm min-h-[48px] flex items-center justify-center"
              >
                {tr.common.viewMenu}
              </Link>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">
            <span className="font-body text-xs text-white/40 uppercase tracking-widest">Scroll</span>
            <ChevronDown size={24} className="text-white/50 animate-bounce" />
          </div>
        </div>
      </div>

      {/* Mobile floating CTA */}
      <Link
        href={`${base}/contact`}
        className="fixed bottom-4 left-4 right-4 z-50 md:hidden block bg-[#D4AF37] text-[#1A1A1A] text-center font-semibold py-4 shadow-xl text-sm uppercase tracking-widest"
      >
        {tr.common.reserve}
      </Link>
    </>
  )
}
