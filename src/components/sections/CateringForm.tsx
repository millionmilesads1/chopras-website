'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'

type CateringFormData = {
  name: string
  email: string
  phone?: string
  eventType: string
  eventDate: string
  guestCount: number
  dietary?: string
  message?: string
}

export default function CateringForm() {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CateringFormData>()

  const todayStr = new Date().toISOString().split('T')[0]

  async function onSubmit(data: CateringFormData) {
    try {
      const res = await fetch('/api/catering-enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  const field =
    'bg-white/10 border border-white/20 text-white placeholder:text-white/40 rounded-xl px-4 py-3 w-full focus:outline-none focus:border-[#D4AF37]'
  const lbl = 'text-white/80 text-sm font-medium mb-1 block'
  const errMsg = 'text-red-300 text-xs mt-1'

  if (status === 'success') {
    return (
      <div className="text-center py-12 max-w-2xl mx-auto">
        <p className="text-white text-xl font-heading font-semibold">
          Thank you! We will be in touch within 24 hours.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl mx-auto space-y-5">
      {status === 'error' && (
        <div className="bg-red-500/20 border border-red-400/30 rounded-xl px-4 py-3">
          <p className="text-red-300 text-sm text-center">
            Something went wrong. Please call us on +31 6 30645930.
          </p>
        </div>
      )}

      <div>
        <label className={lbl}>Full Name</label>
        <input
          type="text"
          {...register('name', { required: 'Name is required' })}
          className={field}
          placeholder="Your full name"
        />
        {errors.name && <p className={errMsg}>{errors.name.message}</p>}
      </div>

      <div>
        <label className={lbl}>Email Address</label>
        <input
          type="email"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Enter a valid email address',
            },
          })}
          className={field}
          placeholder="your@email.com"
        />
        {errors.email && <p className={errMsg}>{errors.email.message}</p>}
      </div>

      <div>
        <label className={lbl}>
          Phone Number{' '}
          <span className="text-white/40 font-normal">(optional)</span>
        </label>
        <input
          type="tel"
          {...register('phone')}
          className={field}
          placeholder="+31 6 12345678"
        />
      </div>

      <div>
        <label className={lbl}>Event Type</label>
        <select
          {...register('eventType', { required: 'Please select an event type' })}
          className={field}
        >
          <option value="" className="bg-[#1B2B5E] text-white">
            Select event type
          </option>
          <option value="Wedding" className="bg-[#1B2B5E] text-white">
            Wedding
          </option>
          <option value="Birthday Party" className="bg-[#1B2B5E] text-white">
            Birthday Party
          </option>
          <option value="Corporate Event" className="bg-[#1B2B5E] text-white">
            Corporate Event
          </option>
          <option value="Diwali / Festival" className="bg-[#1B2B5E] text-white">
            Diwali / Festival
          </option>
          <option value="Baby Shower" className="bg-[#1B2B5E] text-white">
            Baby Shower
          </option>
          <option value="Community Event" className="bg-[#1B2B5E] text-white">
            Community Event
          </option>
          <option value="Other" className="bg-[#1B2B5E] text-white">
            Other
          </option>
        </select>
        {errors.eventType && <p className={errMsg}>{errors.eventType.message}</p>}
      </div>

      <div>
        <label className={lbl}>Event Date</label>
        <input
          type="date"
          {...register('eventDate', { required: 'Event date is required' })}
          min={todayStr}
          className={field}
        />
        {errors.eventDate && <p className={errMsg}>{errors.eventDate.message}</p>}
      </div>

      <div>
        <label className={lbl}>Number of Guests</label>
        <input
          type="number"
          {...register('guestCount', {
            required: 'Guest count is required',
            min: { value: 10, message: 'Minimum 10 guests' },
            max: { value: 500, message: 'Maximum 500 guests' },
            valueAsNumber: true,
          })}
          min={10}
          max={500}
          className={field}
          placeholder="e.g. 50"
        />
        {errors.guestCount && <p className={errMsg}>{errors.guestCount.message}</p>}
      </div>

      <div>
        <label className={lbl}>
          Dietary Requirements{' '}
          <span className="text-white/40 font-normal">(optional)</span>
        </label>
        <textarea
          {...register('dietary')}
          className={`${field} resize-none`}
          rows={3}
          placeholder="e.g. 50 halal, 20 vegetarian, 5 vegan"
        />
      </div>

      <div>
        <label className={lbl}>
          Message{' '}
          <span className="text-white/40 font-normal">(optional)</span>
        </label>
        <textarea
          {...register('message')}
          className={`${field} resize-none`}
          rows={4}
          placeholder="Any other details about your event..."
        />
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-[#D4AF37] text-[#1B2B5E] px-8 py-4 rounded-full font-bold w-full md:w-auto disabled:opacity-60 hover:bg-[#c9a230] transition-colors"
        >
          {isSubmitting ? 'Sending...' : 'Send My Catering Enquiry'}
        </button>
      </div>
    </form>
  )
}
