'use client'

import { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { Dancing_Script } from 'next/font/google'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { testimonials } from '@/data/testimonials'

const script = Dancing_Script({ subsets: ['latin'], weight: ['700'], display: 'swap' })

export default function TestimonialsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start' },
    [Autoplay({ delay: 4500, stopOnInteraction: false })]
  )

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  return (
    <section className="bg-white border-y border-dark/[0.06] py-20 md:py-28 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <h2 className={`${script.className} text-4xl md:text-5xl text-dark/60 mb-3`}>
              Client Love
            </h2>
            <p className="font-serif text-2xl md:text-3xl text-dark leading-tight">
              Stories from the hearts{' '}
              <em className="italic text-gold">we&apos;ve touched</em>
            </p>
            <p className="mt-3 text-dark/40 text-sm max-w-xs leading-relaxed">
              Over 500 couples trust us to capture the most important day of their lives.
            </p>
          </div>
          {/* Carousel controls — right side of header */}
          <div className="flex gap-2 shrink-0">
            <button
              onClick={scrollPrev}
              className="w-10 h-10 flex items-center justify-center border border-dark/[0.12] text-dark/35 hover:border-gold hover:text-gold transition-all duration-200"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={scrollNext}
              className="w-10 h-10 flex items-center justify-center border border-dark/[0.12] text-dark/35 hover:border-gold hover:text-gold transition-all duration-200"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex gap-5">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="flex-none w-full md:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] bg-[#faf8f5] border border-dark/[0.06] hover:border-gold/30 transition-all duration-400 p-8 relative overflow-hidden group"
              >
                {/* Large open quote */}
                <span
                  aria-hidden
                  className="absolute -top-1 -left-1 font-serif text-[6.5rem] leading-none text-dark/[0.035] group-hover:text-gold/[0.07] transition-colors duration-400 select-none pointer-events-none"
                >
                  &ldquo;
                </span>

                {/* Stars */}
                <div className="flex gap-0.5 mb-5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
                  ))}
                </div>

                {/* Review */}
                <blockquote className="text-dark/60 text-sm leading-[1.85] mb-7 relative z-10">
                  &ldquo;{t.review}&rdquo;
                </blockquote>

                {/* Divider */}
                <div className="h-px bg-dark/[0.06] mb-5" />

                {/* Reviewer */}
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gold/10 border border-gold/25 flex items-center justify-center shrink-0">
                    <span className="text-gold text-xs font-semibold leading-none">
                      {t.name.split(' ').map((n: string) => n[0]).slice(0, 2).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="font-serif text-dark text-sm">{t.name}</p>
                    <p className="text-dark/35 text-xs mt-0.5">
                      {t.venue}, {t.city} &middot;{' '}
                      {new Date(t.date).toLocaleDateString('en-IN', { year: 'numeric', month: 'long' })}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
