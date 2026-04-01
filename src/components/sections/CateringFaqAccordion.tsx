'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cateringFaqs, eventFaqs } from '@/lib/faq-data'

const allCateringFaqs = [...cateringFaqs, ...eventFaqs]

export default function CateringFaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="max-w-3xl mx-auto">
      {allCateringFaqs.map((faq, index) => (
        <div key={index} className="border-b border-gray-200">
          <button
            type="button"
            className="flex justify-between items-center w-full py-4 text-left cursor-pointer"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            aria-expanded={openIndex === index}
          >
            <span className="font-semibold text-[#1A1A1A] text-base pr-4">
              {faq.question}
            </span>
            <ChevronDown
              size={20}
              className={`text-[#1B2B5E] flex-shrink-0 transition-transform duration-200 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>
          {openIndex === index && (
            <div className="text-gray-600 text-sm leading-relaxed pb-4">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
