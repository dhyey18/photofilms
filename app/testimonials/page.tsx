import type { Metadata } from 'next'
import Image from 'next/image'
import { Star } from 'lucide-react'
import { Dancing_Script } from 'next/font/google'
import { testimonials } from '@/data/testimonials'
import CTABanner from '@/components/home/CTABanner'
import ScrollReveal from '@/components/ui/ScrollReveal'

const script = Dancing_Script({ subsets: ['latin'], weight: ['700'], display: 'swap' })

export const metadata: Metadata = {
  title: 'Testimonials — What Our Couples Say',
  description:
    'Read heartfelt reviews from over 500 couples who chose Photofilms for their wedding photography and cinematography across India.',
}

const IMAGES = Array.from({ length: 8 }, (_, i) =>
  `/Testimonial/Testimonial/${String(i + 1).padStart(2, '0')}.jpg`
)

export default function TestimonialsPage() {
  const avg = (testimonials.reduce((s, t) => s + t.rating, 0) / testimonials.length).toFixed(1)

  return (
    <>
      {/* ── Header ──────────────────────────────────────── */}
      <div className="bg-[#faf8f5] pt-36 pb-20 px-6 relative overflow-hidden border-b border-dark/[0.06]">
        <span
          aria-hidden
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none font-serif font-bold leading-none"
          style={{ fontSize: 'clamp(50px, 12vw, 180px)', color: 'rgba(26,22,20,0.026)' }}
        >
          REVIEWS
        </span>
        <div className="max-w-3xl mx-auto relative text-center">
          <ScrollReveal>
            <p className={`${script.className} text-3xl md:text-4xl text-dark/55 mb-4`}>Client Love</p>
            <h1 className="font-serif text-5xl md:text-6xl text-dark leading-[1.08]">
              Stories from hearts{' '}
              <em className="italic text-gold">we&apos;ve touched</em>
            </h1>
            <p className="mt-5 text-dark/45 text-lg max-w-xl mx-auto leading-relaxed">
              Every review is a love story in itself. Here is what our couples say.
            </p>
            <div className="flex items-center justify-center gap-2 mt-6">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-gold text-gold" />
              ))}
              <span className="ml-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-dark/35">
                {avg} / 5 &nbsp;·&nbsp; 500+ Couples
              </span>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* ── Image Gallery ───────────────────────────────── */}
      <section className="bg-[#faf8f5] py-16 md:py-24 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto flex flex-col gap-3">
          {IMAGES.map((src, i) => (
            <div key={i} className="overflow-hidden w-full">
              <Image
                src={src}
                alt={`Wedding memory ${i + 1}`}
                width={1600}
                height={900}
                style={{ width: '100%', height: 'auto' }}
                className="object-cover"
                sizes="100vw"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ── Stats bar ───────────────────────────────────── */}
      <div className="bg-white border-t border-b border-dark/[0.06] py-16 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-px bg-dark/[0.06]">
          {[
            { number: '5.0',  label: 'Average Rating', sub: 'Out of 5 stars' },
            { number: '500+', label: 'Happy Couples',  sub: 'Across India' },
            { number: '12+',  label: 'Years of Trust', sub: 'Since 2012' },
          ].map((stat) => (
            <div key={stat.label} className="bg-white px-8 py-10 text-center">
              <div className="w-8 h-px bg-gold/55 mx-auto mb-5" />
              <p className="font-serif text-5xl text-gold">{stat.number}</p>
              <p className="text-dark/55 text-xs font-semibold uppercase tracking-[0.18em] mt-3">{stat.label}</p>
              <p className="text-dark/28 text-xs mt-1">{stat.sub}</p>
            </div>
          ))}
        </div>
      </div>

      <CTABanner />
    </>
  )
}
