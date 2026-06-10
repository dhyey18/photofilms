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
                  className="flex-none w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-dark-muted border border-warm-white/8 hover:border-gold/25 transition-all duration-400 p-8 relative overflow-hidden group"
                >
                  {/* Decorative large quotation mark */}
                  <span
                    aria-hidden="true"
                    className="absolute -top-1 -left-1 font-serif text-[7rem] leading-none text-warm-white/[0.04] group-hover:text-gold/[0.07] transition-colors duration-400 select-none pointer-events-none"
                  >
                    &ldquo;
                  </span>

                  {/* Star row */}
                  <div className="flex gap-0.5 mb-5">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
                    ))}
                  </div>

                  {/* Review text */}
                  <blockquote className="text-warm-white/78 text-sm leading-[1.8] mb-7 relative z-10">
                    &ldquo;{t.review}&rdquo;
                  </blockquote>

                  {/* Divider */}
                  <div className="h-px bg-warm-white/8 mb-5" />

                  {/* Reviewer */}
                  <div className="flex items-center gap-3">
                    {/* Initials avatar */}
                    <div className="w-9 h-9 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center shrink-0">
                      <span className="text-gold text-xs font-semibold leading-none">
                        {t.name.split(' ').map((n: string) => n[0]).slice(0, 2).join('')}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-warm-white text-sm">{t.name}</p>
                      <p className="text-warm-white/42 text-xs mt-0.5">
                        {t.venue}, {t.city} &middot;{' '}
                        {new Date(t.date).toLocaleDateString('en-IN', {
                          year: 'numeric',
                          month: 'long',
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="flex justify-center gap-3 mt-8">
            <button
              onClick={scrollPrev}
              className="p-2.5 border border-warm-white/15 text-warm-white/50 hover:border-gold hover:text-gold transition-all duration-200"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollNext}
              className="p-2.5 border border-warm-white/15 text-warm-white/50 hover:border-gold hover:text-gold transition-all duration-200"
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
