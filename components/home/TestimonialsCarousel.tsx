'use client'

import { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { testimonials } from '@/data/testimonials'
import SectionHeader from '@/components/ui/SectionHeader'

export default function TestimonialsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start' },
    [Autoplay({ delay: 4500, stopOnInteraction: false })]
  )

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  return (
    <section className="py-24 px-6 bg-dark">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Client Love"
          title="Stories from the hearts we've touched"
          subtitle="Over 500 couples trust us to capture the most important day of their lives."
          centered
          light
        />

        <div className="relative mt-4">
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex gap-6">
              {testimonials.map((t) => (
                <div
                  key={t.id}
                  className="flex-none w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-dark-muted border border-warm-white/10 p-8"
                >
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <blockquote className="text-warm-white/80 text-sm leading-relaxed mb-6">
                    &ldquo;{t.review}&rdquo;
                  </blockquote>
                  <div>
                    <p className="font-semibold text-warm-white text-sm">{t.name}</p>
                    <p className="text-warm-white/50 text-xs mt-1">
                      {t.venue}, {t.city} &middot; {new Date(t.date).toLocaleDateString('en-IN', { year: 'numeric', month: 'long' })}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-3 mt-8">
            <button
              onClick={scrollPrev}
              className="p-2 border border-warm-white/20 text-warm-white/60 hover:border-gold hover:text-gold transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollNext}
              className="p-2 border border-warm-white/20 text-warm-white/60 hover:border-gold hover:text-gold transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
