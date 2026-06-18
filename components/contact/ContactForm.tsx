'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z
    .string()
    .regex(/^[6-9]\d{9}$/, 'Please enter a valid 10-digit Indian mobile number'),
  eventDate: z.string().optional(),
  eventType: z.enum(['Wedding', 'Pre-Wedding', 'Cinematography', 'Drone', 'Corporate', 'Portrait']),
  message: z.string().min(20, 'Please tell us a bit more (at least 20 characters)'),
})

type FormData = z.infer<typeof schema>

export default function ContactForm({ defaultService }: { defaultService?: string }) {
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      eventType: (defaultService as FormData['eventType']) ?? 'Wedding',
    },
  })

  const onSubmit = async (data: FormData) => {
    setSubmitError(null)
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    if (!res.ok) {
      setSubmitError('Something went wrong. Please try WhatsApp or email us directly.')
      return
    }
    setSubmitted(true)
    reset()
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
        <CheckCircle className="w-12 h-12 text-gold" />
        <h3 className="font-serif text-2xl text-dark">Thank you! We&apos;ll be in touch soon.</h3>
        <p className="text-warm-gray text-sm">
          We typically respond within 24 hours. For urgent enquiries, please WhatsApp us directly.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-4 text-sm text-gold underline underline-offset-4 hover:text-gold-dark transition-colors"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-widest text-warm-gray mb-2">
            Full Name *
          </label>
          <input
            {...register('name')}
            type="text"
            placeholder="Priya Sharma"
            className="w-full border border-border bg-warm-white px-4 py-3 text-sm text-dark placeholder-warm-gray/50 focus:outline-none focus:border-gold transition-colors"
          />
          {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-widest text-warm-gray mb-2">
            Email *
          </label>
          <input
            {...register('email')}
            type="email"
            placeholder="priya@example.com"
            className="w-full border border-border bg-warm-white px-4 py-3 text-sm text-dark placeholder-warm-gray/50 focus:outline-none focus:border-gold transition-colors"
          />
          {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-widest text-warm-gray mb-2">
            Phone Number *
          </label>
          <input
            {...register('phone')}
            type="tel"
            placeholder="9876543210"
            className="w-full border border-border bg-warm-white px-4 py-3 text-sm text-dark placeholder-warm-gray/50 focus:outline-none focus:border-gold transition-colors"
          />
          {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>}
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-widest text-warm-gray mb-2">
            Event Date
          </label>
          <input
            {...register('eventDate')}
            type="date"
            className="w-full border border-border bg-warm-white px-4 py-3 text-sm text-dark focus:outline-none focus:border-gold transition-colors"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold uppercase tracking-widest text-warm-gray mb-2">
          Event Type *
        </label>
        <select
          {...register('eventType')}
          className="w-full border border-border bg-warm-white px-4 py-3 text-sm text-dark focus:outline-none focus:border-gold transition-colors"
        >
          <option value="Wedding">Wedding Photography</option>
          <option value="Pre-Wedding">Pre-Wedding Shoot</option>
          <option value="Cinematography">Cinematography</option>
          <option value="Drone">Drone Photography</option>
          <option value="Corporate">Corporate / Event</option>
          <option value="Portrait">Portrait / Headshots</option>
        </select>
        {errors.eventType && <p className="mt-1 text-xs text-red-500">{errors.eventType.message}</p>}
      </div>

      <div>
        <label className="block text-xs font-semibold uppercase tracking-widest text-warm-gray mb-2">
          Your Message *
        </label>
        <textarea
          {...register('message')}
          rows={5}
          placeholder="Tell us about your wedding vision, venue, number of guests, or anything else you'd like us to know..."
          className="w-full border border-border bg-warm-white px-4 py-3 text-sm text-dark placeholder-warm-gray/50 focus:outline-none focus:border-gold transition-colors resize-none"
        />
        {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>}
      </div>

      {submitError && (
        <div className="flex items-start gap-2 text-red-600 text-sm bg-red-50 border border-red-200 px-4 py-3">
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
          {submitError}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gold text-dark font-semibold px-8 py-4 tracking-wide hover:bg-gold-dark transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          'Sending...'
        ) : (
          <>
            <Send className="w-4 h-4" />
            Send Enquiry
          </>
        )}
      </button>
    </form>
  )
}
