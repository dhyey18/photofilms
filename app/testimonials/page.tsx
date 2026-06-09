import type { Metadata } from 'next'
import { Star } from 'lucide-react'
import { testimonials } from '@/data/testimonials'
import SectionHeader from '@/components/ui/SectionHeader'
import ScrollReveal from '@/components/ui/ScrollReveal'
import CTABanner from '@/components/home/CTABanner'

export const metadata: Metadata = {
  title: 'Testimonials — What Our Couples Say',
  description:
    'Read heartfelt reviews from over 500 couples who chose Photofilms for their wedding photography and cinematography across India.',
}

export default function TestimonialsPage() {
  const avg = (testimonials.reduce((s, t) => s + t.rating, 0) / testimonials.length).toFixed(1)

  return (
    <>
      <div className="bg-dark pt-32 pb-20 px-6 text-center">
        <ScrollReveal>
          <div className="flex justify-center gap-1 mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-gold text-gold" />
            ))}
          </div>
          <SectionHeader
            eyebrow={`Average rating: ${avg} / 5`}
            title="Stories from hearts we've touched"
            subtitle="Over 500 couples trust us to preserve the most important day of their lives."
            centered
            light
          />
        </ScrollReveal>
      </div>

      <section className="py-20 px-6 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.id} delay={i * 0.06}>
                <div className="bg-warm-white border border-border p-8 h-full flex flex-col">
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <blockquote className="text-dark-muted text-sm leading-relaxed flex-1 mb-6">
                    &ldquo;{t.review}&rdquo;
                  </blockquote>
                  <div className="border-t border-border pt-5">
                    <p className="font-semibold text-dark text-sm">{t.name}</p>
                    <p className="text-warm-gray text-xs mt-1">
                      {t.venue}, {t.city} &middot;{' '}
                      {new Date(t.date).toLocaleDateString('en-IN', { year: 'numeric', month: 'long' })}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
