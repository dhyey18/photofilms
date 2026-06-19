'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'
import { Dancing_Script } from 'next/font/google'

const script = Dancing_Script({ subsets: ['latin'], weight: ['700'], display: 'swap' })

const SERVICES = [
  'Wedding Photography',
  'Cinematography / Film',
  'Pre-Wedding Shoot',
  'Drone Coverage',
] as const

const FUNCTIONS = ['Mehendi', 'Sangeet', 'Wedding Ceremony', 'Reception'] as const

const GUEST_RANGES = ['Under 100', '100–300', '300–600', '600–1000', '1000+'] as const

const schema = z.object({
  brideName: z.string().min(2, "Please enter the bride's name"),
  groomName: z.string().min(2, "Please enter the groom's name"),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().regex(/^[6-9]\d{9}$/, 'Please enter a valid 10-digit Indian mobile number'),
  weddingDate: z.string().min(1, 'Please select your wedding date'),
  venueCity: z.string().min(2, 'Please enter the city or venue'),
  services: z.array(z.string()).min(1, 'Please select at least one service'),
  functions: z.array(z.string()).optional(),
  guestCount: z.string().optional(),
  message: z.string().optional(),
})

type FormData = z.infer<typeof schema>

const inputClass =
  'w-full border border-dark/[0.1] bg-[#faf8f5] px-4 py-3 text-sm text-dark placeholder-dark/25 focus:outline-none focus:border-gold transition-colors duration-200'

const labelClass = 'block text-[10px] font-semibold uppercase tracking-[0.22em] text-dark/40 mb-2'

export default function ContactForm({ defaultService }: { defaultService?: string }) {
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [selectedServices, setSelectedServices] = useState<string[]>(
    defaultService ? [defaultService] : [],
  )
  const [selectedFunctions, setSelectedFunctions] = useState<string[]>([])

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      services: defaultService ? [defaultService] : [],
      functions: [],
    },
  })

  const toggleService = (s: string) => {
    const next = selectedServices.includes(s)
      ? selectedServices.filter((x) => x !== s)
      : [...selectedServices, s]
    setSelectedServices(next)
    setValue('services', next, { shouldValidate: true })
  }

  const toggleFunction = (f: string) => {
    const next = selectedFunctions.includes(f)
      ? selectedFunctions.filter((x) => x !== f)
      : [...selectedFunctions, f]
    setSelectedFunctions(next)
    setValue('functions', next)
  }

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
    setSelectedServices([])
    setSelectedFunctions([])
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
        <div className="w-14 h-14 border border-gold/40 flex items-center justify-center">
          <CheckCircle className="w-7 h-7 text-gold" />
        </div>
        <p className={`${script.className} text-3xl text-dark/70`}>Thank you!</p>
        <h3 className="font-serif text-xl text-dark">We&apos;ll be in touch soon.</h3>
        <p className="text-dark/40 text-sm max-w-xs leading-relaxed">
          We typically respond within 24 hours. For urgent enquiries, please WhatsApp us directly.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-gold border-b border-gold/40 hover:border-gold transition-colors"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>

      {/* Couple names */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>Bride&apos;s Name *</label>
          <input
            {...register('brideName')}
            type="text"
            placeholder="Priya"
            className={inputClass}
          />
          {errors.brideName && <p className="mt-1 text-xs text-red-500">{errors.brideName.message}</p>}
        </div>
        <div>
          <label className={labelClass}>Groom&apos;s Name *</label>
          <input
            {...register('groomName')}
            type="text"
            placeholder="Arjun"
            className={inputClass}
          />
          {errors.groomName && <p className="mt-1 text-xs text-red-500">{errors.groomName.message}</p>}
        </div>
      </div>

      {/* Contact */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>Email *</label>
          <input
            {...register('email')}
            type="email"
            placeholder="priya@example.com"
            className={inputClass}
          />
          {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
        </div>
        <div>
          <label className={labelClass}>Phone *</label>
          <input
            {...register('phone')}
            type="tel"
            placeholder="9876543210"
            className={inputClass}
          />
          {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>}
        </div>
      </div>

      {/* Date + City */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>Wedding Date *</label>
          <input {...register('weddingDate')} type="date" className={inputClass} />
          {errors.weddingDate && <p className="mt-1 text-xs text-red-500">{errors.weddingDate.message}</p>}
        </div>
        <div>
          <label className={labelClass}>City / Venue *</label>
          <input
            {...register('venueCity')}
            type="text"
            placeholder="Vadodara, The Fern Hotel"
            className={inputClass}
          />
          {errors.venueCity && <p className="mt-1 text-xs text-red-500">{errors.venueCity.message}</p>}
        </div>
      </div>

      {/* Services */}
      <div>
        <label className={labelClass}>Services Needed *</label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {SERVICES.map((s) => {
            const active = selectedServices.includes(s)
            return (
              <button
                key={s}
                type="button"
                onClick={() => toggleService(s)}
                className={`flex items-center gap-3 px-4 py-3 text-sm border text-left transition-all duration-200 ${
                  active
                    ? 'border-gold bg-[#c9a84c]/[0.07] text-dark'
                    : 'border-dark/[0.1] bg-[#faf8f5] text-dark/45 hover:border-dark/25 hover:text-dark/70'
                }`}
              >
                <span
                  className={`shrink-0 w-3.5 h-3.5 border transition-colors ${
                    active ? 'border-gold bg-gold' : 'border-dark/25'
                  }`}
                />
                {s}
              </button>
            )
          })}
        </div>
        {errors.services && <p className="mt-1.5 text-xs text-red-500">{errors.services.message}</p>}
      </div>

      {/* Functions */}
      <div>
        <label className={labelClass}>Functions to Cover</label>
        <div className="grid grid-cols-2 gap-2">
          {FUNCTIONS.map((f) => {
            const active = selectedFunctions.includes(f)
            return (
              <button
                key={f}
                type="button"
                onClick={() => toggleFunction(f)}
                className={`flex items-center gap-3 px-4 py-3 text-sm border text-left transition-all duration-200 ${
                  active
                    ? 'border-gold bg-[#c9a84c]/[0.07] text-dark'
                    : 'border-dark/[0.1] bg-[#faf8f5] text-dark/45 hover:border-dark/25 hover:text-dark/70'
                }`}
              >
                <span
                  className={`shrink-0 w-3.5 h-3.5 border transition-colors ${
                    active ? 'border-gold bg-gold' : 'border-dark/25'
                  }`}
                />
                {f}
              </button>
            )
          })}
        </div>
      </div>


      {/* Message */}
      <div>
        <label className={labelClass}>Your Vision / Notes</label>
        <textarea
          {...register('message')}
          rows={4}
          placeholder="Tell us about your dream wedding, any special moments you want captured, or anything else we should know…"
          className={`${inputClass} resize-none`}
        />
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
        className="inline-flex items-center justify-center gap-2.5 bg-dark text-warm-white font-semibold px-9 py-4 text-[11px] tracking-[0.22em] uppercase hover:bg-gold hover:text-dark transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          'Sending…'
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
