import type { Metadata } from 'next'
import Image from 'next/image'
import { Star } from 'lucide-react'
import { testimonials } from '@/data/testimonials'
import CTABanner from '@/components/home/CTABanner'
import ScrollReveal from '@/components/ui/ScrollReveal'

export const metadata: Metadata = {
  title: 'Testimonials — What Our Couples Say',
  description:
    'Read heartfelt reviews from over 500 couples who chose Photofilms for their wedding photography and cinematography across India.',
}

const W = (n: string) => `https://photofilms.in/images/portfolio/wedding/${n}.webp`

/* Photo pair for each testimonial */
const PHOTOS = [
  { main: W('1'),  accent: W('2')  },
  { main: W('10'), accent: W('11') },
  { main: W('16'), accent: W('18') },
  { main: W('4'),  accent: W('5')  },
  { main: W('6'),  accent: W('7')  },
  { main: W('8'),  accent: W('9')  },
  { main: W('12'), accent: W('13') },
  { main: W('14'), accent: W('21') },
  { main: W('19'), accent: W('2')  },
  { main: W('21'), accent: W('1')  },
]

/* Unique tilt angles so no two photos feel the same */
const MAIN_TILTS   = [-2.5,  1.8, -1.2,  2.4, -2,   1.4, -2.8,  1.6, -1.6,  2.2]
const ACCENT_TILTS = [ 3.4, -2.8,  2.6, -1.8,  3.2, -2.4,  1.8, -3.2,  2.4, -2]

/* Orange masking-tape strip ————————————————————————————— */
function Tape({ className = '' }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`absolute z-20 w-[68px] h-[22px] ${className}`}
      style={{ background: 'rgba(206, 118, 52, 0.74)' }}
    />
  )
}

/* ─── Page ──────────────────────────────────────────────── */
export default function TestimonialsPage() {
  const avg = (testimonials.reduce((s, t) => s + t.rating, 0) / testimonials.length).toFixed(1)

  return (
    <>
      {/* ── Hero ───────────────────────────────────────── */}
      <div className="bg-dark pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <div className="flex justify-center gap-1 mb-5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-gold text-gold" />
              ))}
            </div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-gold mb-2">
              {avg} / 5 · Over 500 Couples
            </p>
            <span className="block h-px w-10 bg-gold/50 mx-auto mb-7" />
            <h1 className="font-serif text-5xl md:text-6xl text-warm-white leading-[1.08]">
              Stories from hearts{' '}
              <em className="not-italic text-gold-light">we&apos;ve touched</em>
            </h1>
            <p className="mt-5 text-warm-white/55 text-lg max-w-xl mx-auto leading-relaxed">
              Every review is a love story in itself. Here is what our couples say.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* ── Testimonials ───────────────────────────────── */}
      <section>
        {testimonials.map((t, i) => {
          const photos     = PHOTOS[i] ?? PHOTOS[0]
          const mainTilt   = MAIN_TILTS[i]   ?? -2
          const accentTilt = ACCENT_TILTS[i] ??  3
          const reversed   = i % 2 === 1
          /* Alternate bg so rows breathe without a hard border */
          const bg = i % 2 === 0 ? 'bg-cream' : 'bg-warm-white'

          return (
            <div key={t.id} className={`${bg} py-16 md:py-24 px-6 lg:px-20`}>
              <ScrollReveal>
                <div
                  className={`max-w-7xl mx-auto flex flex-col gap-12 items-center
                    md:flex-row md:gap-20 ${reversed ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* ── Photo column ─────────────────── */}
                  <div className="relative flex-1 flex items-center justify-center"
                    style={{ minHeight: 360 }}>

                    {/* Main portrait photo */}
                    <div
                      className="relative z-10"
                      style={{
                        width: 'clamp(240px, 30vw, 380px)',
                        transform: `rotate(${mainTilt}deg)`,
                      }}
                    >
                      {/* Tape — top, slightly off-center */}
                      <Tape className="-top-2.5 left-[40%] -translate-x-1/2 -rotate-6" />
                      <div
                        className="relative overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.18)]"
                        style={{ aspectRatio: '4 / 3' }}
                      >
                        <Image
                          src={photos.main}
                          alt={`${t.name} wedding`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 80vw, 35vw"
                        />
                        {/* Subtle print-border vignette */}
                        <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.08)]" />
                      </div>
                    </div>

                    {/* Accent / second photo — floats in the opposite lower corner */}
                    <div
                      className={`absolute bottom-0 z-20 overflow-hidden
                        shadow-[0_8px_28px_rgba(0,0,0,0.22)]
                        ${reversed ? 'right-2 md:right-0' : 'left-2 md:left-0'}`}
                      style={{
                        width: 'clamp(110px, 14vw, 165px)',
                        transform: `rotate(${accentTilt}deg)`,
                      }}
                    >
                      <Tape
                        className={`-top-2.5 rotate-[20deg]
                          ${reversed ? 'left-2' : 'right-2'}`}
                      />
                      <div className="relative" style={{ aspectRatio: '1' }}>
                        <Image
                          src={photos.accent}
                          alt={`${t.name} wedding moment`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 35vw, 15vw"
                        />
                      </div>
                    </div>
                  </div>

                  {/* ── Text column ──────────────────── */}
                  <div className="flex-1 max-w-lg">
                    {/* Stars */}
                    <div className="flex gap-0.5 mb-5">
                      {Array.from({ length: t.rating }).map((_, j) => (
                        <Star key={j} className="w-4 h-4 fill-gold text-gold" />
                      ))}
                    </div>

                    {/* Couple name */}
                    <h2 className="font-serif text-3xl md:text-[2.1rem] font-bold text-dark leading-tight mb-5">
                      {t.name}
                    </h2>

                    {/* Decorative open quote */}
                    <span
                      aria-hidden="true"
                      className="block font-serif text-[4.5rem] leading-none text-gold/15 -mt-3 -mb-2 select-none"
                    >
                      &ldquo;
                    </span>

                    {/* Review */}
                    <p className="text-dark/68 text-base md:text-[1.05rem] leading-[1.88]">
                      {t.review}
                    </p>

                    {/* Venue + date */}
                    <div className="flex items-center gap-3 mt-7">
                      <div className="w-8 h-px bg-gold/50 shrink-0" />
                      <p className="text-warm-gray text-sm">
                        {t.venue}, {t.city}
                        &ensp;·&ensp;
                        {new Date(t.date).toLocaleDateString('en-IN', {
                          year: 'numeric',
                          month: 'long',
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          )
        })}
      </section>

      {/* ── Stats bar ──────────────────────────────────── */}
      <div className="bg-dark py-16 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-3 text-center">
          {[
            { number: '5.0', label: 'Average Rating', sub: 'Out of 5 stars' },
            { number: '500+', label: 'Happy Couples', sub: 'Across India' },
            { number: '12+', label: 'Years of Trust', sub: 'Since 2012' },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className={`px-6 py-4 ${i < 2 ? 'border-r border-warm-white/10' : ''}`}
            >
              <div className="w-8 h-px bg-gold mx-auto mb-5" />
              <p className="font-serif text-5xl font-bold text-gold">{stat.number}</p>
              <p className="text-warm-white/70 text-xs font-semibold uppercase tracking-[0.18em] mt-3">
                {stat.label}
              </p>
              <p className="text-warm-white/30 text-xs mt-1">{stat.sub}</p>
            </div>
          ))}
        </div>
      </div>

      <CTABanner />
    </>
  )
}
