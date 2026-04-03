'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { type Locale } from '@/lib/useTranslations'

type Category = 'All' | 'Starters' | 'Tandoori' | 'Curries' | 'Biryani' | 'Street Food'

type Dish = {
  id: string
  name: string
  category: Exclude<Category, 'All'>
  image: string
  price: string
  isChefsFavourite?: boolean
  isHalal?: boolean
}

const DISHES: Dish[] = [
  // Starters
  {
    id: 'onion-bhaji',
    name: 'Onion Bhaji',
    category: 'Starters',
    image: '/images/dishes/onion-bhaji.webp',
    price: '€8.50',
  },
  {
    id: 'veg-samosa',
    name: 'Samosa',
    category: 'Starters',
    image: '/images/dishes/veg-samosa.webp',
    price: '€7.50',
  },
  {
    id: 'pani-puri',
    name: 'Pani Puri',
    category: 'Starters',
    image: '/images/dishes/pani-puri.webp',
    price: '€8.50',
  },
  {
    id: 'chicken-seekh-kebab',
    name: 'Chicken Seekh Kebab',
    category: 'Starters',
    image: '/images/dishes/chicken-seekh-kebab.webp',
    price: '€20.50',
  },
  // Tandoori
  {
    id: 'paneer-tikka',
    name: 'Paneer Tikka',
    category: 'Tandoori',
    image: '/images/dishes/paneer-tikka.webp',
    price: '€18.00',
    isChefsFavourite: true,
  },
  {
    id: 'chicken-tikka',
    name: 'Chicken Tikka',
    category: 'Tandoori',
    image: '/images/dishes/chicken-tikka.webp',
    price: '€20.50',
  },
  {
    id: 'tandoori-chicken',
    name: 'Tandoori Chicken',
    category: 'Tandoori',
    image: '/images/dishes/tandoori-chicken.webp',
    price: '€22.50',
  },
  {
    id: 'chicken-malai-tikka',
    name: 'Chicken Malai Tikka',
    category: 'Tandoori',
    image: '/images/dishes/chicken-malai-tikka.webp',
    price: '€20.50',
  },
  // Curries
  {
    id: 'butter-chicken',
    name: 'Butter Chicken',
    category: 'Curries',
    image: '/images/dishes/butter-chicken.webp',
    price: '€18.50',
    isChefsFavourite: true,
  },
  {
    id: 'mutton-rogan-josh',
    name: 'Mutton Rogan Josh',
    category: 'Curries',
    image: '/images/dishes/mutton-rogan-josh.webp',
    price: '€21.50',
  },
  {
    id: 'dal-makhani',
    name: 'Dal Makhani',
    category: 'Curries',
    image: '/images/dishes/dal-makhani.webp',
    price: '€16.00',
  },
  {
    id: 'chilli-paneer',
    name: 'Chilli Paneer',
    category: 'Curries',
    image: '/images/dishes/chilli-paneer.webp',
    price: '€16.00',
  },
  // Biryani
  {
    id: 'chicken-biryani',
    name: 'Chicken Biryani',
    category: 'Biryani',
    image: '/images/dishes/chicken-biryani.webp',
    price: '€18.50',
  },
  {
    id: 'lamb-biryani',
    name: 'Lamb Biryani',
    category: 'Biryani',
    image: '/images/dishes/muton-biryani.webp',
    price: '€21.50',
    isChefsFavourite: true,
  },
  // Street Food
  {
    id: 'pani-puri-street',
    name: 'Pani Puri',
    category: 'Street Food',
    image: '/images/dishes/pani-puri.webp',
    price: '€8.50',
  },
  {
    id: 'samosa-chaat',
    name: 'Samosa Chaat',
    category: 'Street Food',
    image: '/images/dishes/samosa-chaat.webp',
    price: '€9.50',
  },
  {
    id: 'papdi-chaat',
    name: 'Papdi Chaat',
    category: 'Street Food',
    image: '/images/dishes/papdi-chaat.webp',
    price: '€9.00',
  },
  {
    id: 'aloo-tikki',
    name: 'Aloo Tikki',
    category: 'Street Food',
    image: '/images/dishes/aloo-tikki.webp',
    price: '€8.50',
  },
]

const CATEGORIES: Category[] = ['All', 'Starters', 'Tandoori', 'Curries', 'Biryani', 'Street Food']

export default function FeaturedDishes({ locale = 'en' }: { locale?: Locale }) {
  const [activeCategory, setActiveCategory] = useState<Category>('All')
  const base = `/${locale}`

  const visibleDishes =
    activeCategory === 'All' ? DISHES : DISHES.filter((d) => d.category === activeCategory)

  return (
    <section
      style={{ background: 'linear-gradient(135deg, #0000C9 0%, #1B2B5E 60%, #0F1040 100%)' }}
      className="py-20 px-6 md:px-16 overflow-hidden"
    >
      {/* Header */}
      <div>
        <p className="text-xs uppercase tracking-widest text-[#D4AF37]">FROM OUR KITCHEN</p>
        <h2 className="font-heading text-4xl md:text-5xl text-white font-semibold mt-2">
          Our Most Loved Indian Dishes in Den Haag
        </h2>
        <p className="text-white/50 text-sm mt-3">
          Butter Chicken Den Haag · Biryani Den Haag · and 87 more dishes, all made fresh daily.
        </p>
      </div>

      {/* Category tabs */}
      <div className="flex gap-3 mt-8 overflow-x-auto scrollbar-hide pb-2">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={
              activeCategory === cat
                ? 'bg-[#D4AF37] text-[#1A1A1A] px-5 py-2 rounded-full text-sm font-semibold cursor-pointer whitespace-nowrap flex-none'
                : 'border border-white/20 text-white/60 px-5 py-2 rounded-full text-sm hover:border-white/40 hover:text-white transition-all cursor-pointer whitespace-nowrap flex-none'
            }
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Dish cards — horizontal scroll */}
      <div className="flex gap-4 mt-8 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
        {visibleDishes.map((dish) => (
          <div key={dish.id} className="flex-none w-48 snap-start group cursor-pointer">
            {/* Square image container */}
            <div className="relative w-48 h-48 rounded-2xl overflow-hidden">
              <Image
                src={dish.image}
                alt={`${dish.name} at Chopras Indian Restaurant Den Haag`}
                fill
                className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
                sizes="192px"
              />
              {/* Bottom vignette */}
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/60 to-transparent" />
              {/* Halal badge */}
              {dish.isHalal && (
                <div className="absolute top-2 right-2 bg-[#D4AF37] text-[#1A1A1A] text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
                  Halal
                </div>
              )}
            </div>
            {/* Text below image */}
            <div className="mt-3 px-1">
              <h3 className="text-white font-medium text-sm leading-tight">{dish.name}</h3>
              <p className="text-[#D4AF37] text-sm font-semibold mt-0.5">{dish.price}</p>
              {dish.isChefsFavourite && (
                <p className="text-white/40 text-xs mt-0.5">Chef&apos;s Favourite</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Explore Menu CTA */}
      <div className="mt-10 text-center">
        <Link
          href={`${base}/menu`}
          className="inline-block border-2 border-[#D4AF37] text-[#D4AF37] px-10 py-4 text-sm uppercase tracking-widest hover:bg-[#D4AF37] hover:text-[#1B2B5E] transition-all duration-300 font-semibold"
        >
          Explore Full Menu &rarr;
        </Link>
      </div>
    </section>
  )
}
