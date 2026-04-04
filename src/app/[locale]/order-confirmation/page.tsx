'use client'

import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { CheckCircle, MapPin, Clock, Banknote, Hash } from 'lucide-react'
import type { Locale } from '@/lib/useTranslations'

function OrderConfirmationContent({ locale }: { locale: Locale }) {
  const searchParams = useSearchParams()
  const orderNumber = searchParams.get('order') ?? ''
  const customerName = searchParams.get('name') ?? 'valued customer'
  const base = `/${locale}`

  return (
    <div
      className="min-h-screen flex items-center justify-center px-6 py-20"
      style={{
        background: 'linear-gradient(135deg, #0000C9 0%, #1B2B5E 60%, #0F1040 100%)',
      }}
    >
      <div className="bg-white rounded-3xl p-10 md:p-14 max-w-lg w-full mx-auto text-center shadow-2xl">
        {/* Success animation */}
        <div className="relative mx-auto w-20 h-20 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-green-500/20 animate-ping" />
          <div className="absolute inset-2 rounded-full bg-green-500/30 animate-ping animation-delay-150" />
          <div className="relative w-20 h-20 rounded-full bg-green-500 flex items-center justify-center">
            <CheckCircle className="text-white w-10 h-10" />
          </div>
        </div>

        <h1 className="font-heading text-4xl text-[#1B2B5E] mt-6 font-semibold">
          Order Confirmed!
        </h1>

        {/* Order number pill */}
        <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full px-6 py-3 mt-4">
          <Hash className="text-[#D4AF37] w-4 h-4" />
          <span className="font-semibold text-[#1A1A1A] text-lg font-heading">
            Order {orderNumber}
          </span>
        </div>

        {/* Confirmation message */}
        <p className="mt-6 text-[#1A1A1A]/60 text-base leading-relaxed">
          Thank you, {customerName}! Your order has been received by our kitchen. Please come to
          collect it at Leyweg 986, Den Haag. Estimated ready time is 30 to 45 minutes.
        </p>

        {/* Info pills */}
        <div className="mt-8 space-y-3">
          <div className="flex items-center gap-3 bg-[#FFFAF5] rounded-xl px-5 py-4 text-left">
            <MapPin className="text-[#D4AF37] w-5 h-5 flex-shrink-0" />
            <p className="text-sm text-[#1A1A1A]/70">Leyweg 986, 2545 GW Den Haag</p>
          </div>
          <div className="flex items-center gap-3 bg-[#FFFAF5] rounded-xl px-5 py-4 text-left">
            <Clock className="text-[#D4AF37] w-5 h-5 flex-shrink-0" />
            <p className="text-sm text-[#1A1A1A]/70">Ready in approximately 30-45 minutes</p>
          </div>
          <div className="flex items-center gap-3 bg-[#FFFAF5] rounded-xl px-5 py-4 text-left">
            <Banknote className="text-[#D4AF37] w-5 h-5 flex-shrink-0" />
            <p className="text-sm text-[#1A1A1A]/70">Payment: Cash on Pickup</p>
          </div>
        </div>

        <div className="border-t border-gray-100 my-8" />

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 mt-4">
          <Link
            href={`${base}/menu`}
            className="flex-1 bg-[#D4AF37] text-[#1A1A1A] py-4 font-semibold uppercase tracking-widest text-sm hover:bg-[#F5D36A] transition-all rounded-xl text-center"
          >
            Order Again
          </Link>
          <Link
            href={base}
            className="flex-1 border border-gray-200 text-[#1A1A1A]/70 py-4 font-semibold text-sm hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all rounded-xl text-center"
          >
            Back to Home
          </Link>
        </div>

        <p className="text-[#1A1A1A]/40 text-xs mt-6">
          Questions? Call us on +31 6 30645930
        </p>
      </div>
    </div>
  )
}

export default function OrderConfirmationPage({ params }: { params: { locale: Locale } }) {
  return (
    <Suspense
      fallback={
        <div
          className="min-h-screen flex items-center justify-center"
          style={{ background: 'linear-gradient(135deg, #0000C9 0%, #1B2B5E 60%, #0F1040 100%)' }}
        >
          <div className="text-white font-heading text-2xl">Loading...</div>
        </div>
      }
    >
      <OrderConfirmationContent locale={params.locale} />
    </Suspense>
  )
}
