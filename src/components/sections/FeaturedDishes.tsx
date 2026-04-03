'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useInView } from '@/hooks/useInView'
import { getTranslations, type Locale } from '@/lib/useTranslations'

type FeaturedDish = {
  id: string
  name: string
  label?: string
  image: string
  price: string
}

const topRow: [FeaturedDish, FeaturedDish, FeaturedDish] = [
  {
    id: 'butter-chicken',
    name: 'Butter Chicken',
    label: "Chef's Favourite",
    image: '/images/dishes/butter-chicken.webp',
    price: '\u20ac18.50',
  },
  {
    id: 'lamb-biryani',
    name: 'Lamb Biryani',
    image: '/images/dishes/muton-biryani.webp',
    price: '\u20ac21.50',
  },
  {
    id: 'chopras-non-veg-platter',
    name: "Chopra's Non Veg Platter",
    image: '/images/dishes/chopras-non-veg-platter.webp',
    price: '\u20ac30.00',
  },
]

const bottomRow: [FeaturedDish, FeaturedDish, FeaturedDish] = [
  {
    id: 'paneer-tikka',
    name: 'Paneer Tikka',
    image: '/images/dishes/paneer-tikka.webp',
    price: '\u20ac18.00',
  },
  {
    id: 'chicken-tikka',
    name: 'Chicken Tikka',
    image: '/images/dishes/chicken-tikka.webp',
    price: '\u20ac20.50',
  },
  {
    id: 'mutton-rogan-josh',
    name: 'Mutton Rogan Josh',
    image: '/images/dishes/mutton-rogan-josh.webp',
    price: '\u20ac21.50',
  },
]

function DishCard({
  dish,
  className,
  aspectClass,
  delay,
}: {
  dish: FeaturedDish
  className?: string
  aspectClass: string
  delay: string
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl group cursor-pointer ${aspectClass} ${className ?? ''} ${delay}`}
    >
      <Image
        src={dish.image}
        alt={`${dish.name} at Chopras Indian Restaurant Den Haag`}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
      {/* Ring on hover */}
      <div className="absolute inset-0 ring-1 ring-[#D4AF37]/0 group-hover:ring-[#D4AF37]/50 rounded-2xl transition-all duration-300" />
      {/* Text */}
      <div className="absolute bottom-0 left-0 p-4 md:p-6">
        {dish.label && (
          <span className="font-body text-[#D4AF37] text-xs uppercase tracking-widest block mb-1">
            {dish.label}
          </span>
        )}
        <h3 className="font-heading font-semibold text-white text-xl md:text-2xl leading-tight">
          {dish.name}
        </h3>
        <p className="font-body text-white/70 text-sm mt-1">{dish.price}</p>
      </div>
    </div>
  )
}

export default function FeaturedDishes({ locale = 'en' }: { locale?: Locale }) {
  const tr = getTranslations(locale)
  const base = `/${locale}`
  const { ref: headerRef, inView: headerInView } = useInView()
  const { ref: topRef, inView: topInView } = useInView()
  const { ref: bottomRef, inView: bottomInView } = useInView()

  return (
    <section className="bg-[#1B2B5E] py-24 px-6 md:px-16">
      {/* Header */}
      <div
        ref={headerRef}
        className={`mb-12 transition-all duration-700 ease-out ${headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <p className="font-body text-[#D4AF37] text-xs uppercase tracking-widest mb-3">
          From Our Kitchen
        </p>
        <h2 className="font-heading font-semibold text-[#FFFAF5] text-5xl md:text-6xl">
          {tr.home.featuredH2}
        </h2>
        <p className="font-body text-white/60 text-lg mt-3">{tr.home.featuredSub}</p>
      </div>

      {/* Top row: large card (60%) + two stacked cards (40%) */}
      <div
        ref={topRef}
        className={`grid grid-cols-1 lg:grid-cols-5 gap-4 transition-all duration-700 ease-out ${topInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        {/* Large featured card */}
        <div className="lg:col-span-3">
          <DishCard
            dish={topRow[0]}
            aspectClass="aspect-video lg:aspect-[4/3]"
            delay=""
          />
        </div>
        {/* Two stacked smaller cards */}
        <div className="lg:col-span-2 grid grid-rows-2 gap-4">
          <DishCard
            dish={topRow[1]}
            aspectClass="aspect-square"
            delay="delay-100"
          />
          <DishCard
            dish={topRow[2]}
            aspectClass="aspect-square"
            delay="delay-200"
          />
        </div>
      </div>

      {/* Bottom row: three equal cards */}
      <div
        ref={bottomRef}
        className={`grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 transition-all duration-700 ease-out ${bottomInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        {bottomRow.map((dish, i) => (
          <DishCard
            key={dish.id}
            dish={dish}
            aspectClass="aspect-[3/4]"
            delay={i === 0 ? '' : i === 1 ? 'delay-100' : 'delay-200'}
          />
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-12">
        <Link
          href={`${base}/menu`}
          className="inline-block border-2 border-[#D4AF37] text-[#D4AF37] px-10 py-4 text-sm uppercase tracking-widest hover:bg-[#D4AF37] hover:text-[#1B2B5E] transition-all duration-300 font-body font-semibold"
        >
          Explore Full Menu &rarr;
        </Link>
      </div>
    </section>
  )
}
