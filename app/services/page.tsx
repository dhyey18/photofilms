import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Camera, Heart, Film, Plane, Briefcase, User, ArrowRight } from 'lucide-react'
import { services } from '@/data/services'
import ScrollReveal from '@/components/ui/ScrollReveal'
import CTABanner from '@/components/home/CTABanner'

const iconMap: Record<string, React.ElementType> = {
  Camera, Heart, Film, Plane, Briefcase, User,
}

export const metadata: Metadata = {
  title: 'Services — Wedding Photography, Cinematography & Drone',
  description:
    "Explore Photofilms's full range of services: wedding photography, pre-wedding shoots, cinematic films, drone aerial, corporate events, and portrait sessions in Vadodara, Gujarat.",
}

export default function ServicesPage() {
  return (
    <>
      {/* ── Cinematic dark header ──────────────────────────── */}
      <div className="bg-dark pt-36 pb-24 px-6 relative overflow-hidden">
        <span
          aria-hidden
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none font-serif font-bold text-warm-white/[0.025] leading-none"
          style={{ fontSize: 'clamp(50px, 13vw, 200px)' }}
        >
          SERVICES
        </span>

        <div className="max-w-4xl mx-auto relative text-center">
          <ScrollReveal>
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="w-10 h-px bg-gold/50" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold">
                What We Offer
              </p>
              <span className="w-10 h-px bg-gold/50" />
            </div>

            <h1 className="font-serif text-5xl md:text-6xl lg:text-[4.5rem] text-warm-white leading-[1.06]">
              Services built for{' '}
              <em className="not-italic text-gold-light">your story</em>
            </h1>

            <p className="mt-6 text-warm-white/45 text-lg max-w-lg mx-auto leading-relaxed">
              Every package is crafted with one goal — to give you images and films
              that move you for a lifetime.
            </p>

            <div className="flex items-center justify-center flex-wrap gap-x-8 gap-y-3 mt-10">
              {[
                `${services.length} Services`,
                'Photography',
                'Cinematography',
                'Aerial Drone',
              ].map((s, i) => (
                <span key={s} className="flex items-center gap-8">
                  {i > 0 && <span className="w-1 h-1 rounded-full bg-gold/30" />}
                  <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-warm-white/25">
                    {s}
                  </span>
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* ── Services — alternating split sections ─────────── */}
      <section className="bg-dark">
        {services.map((service, i) => {
          const Icon = iconMap[service.icon] ?? Camera
          const reversed = i % 2 === 1

          /* Media always first in DOM → always on top on mobile.
             Desktop: order classes flip left/right per `reversed`. */
          const mediaOrder = reversed ? 'md:order-first' : 'md:order-last'
          const textOrder  = reversed ? 'md:order-last'  : 'md:order-first'

          return (
            <div
              key={service.id}
              id={service.id}
              className="border-b border-warm-white/[0.07] last:border-b-0 scroll-mt-20"
            >
              <ScrollReveal direction="none">
                <div className="grid md:grid-cols-2" style={{ minHeight: 540 }}>

                  {/* ── Media panel ── */}
                  <div className={`relative overflow-hidden ${mediaOrder}`} style={{ minHeight: 380 }}>
                    {service.videoUrl ? (
                      // eslint-disable-next-line jsx-a11y/media-has-caption
                      <video
                        src={service.videoUrl}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    ) : (
                      <Image
                        src={service.heroImage}
                        alt={service.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    )}
                    {/* Subtle gradient polish */}
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/40 via-transparent to-transparent" />
                    {reversed ? (
                      <div className="absolute inset-0 bg-gradient-to-r from-dark/25 to-transparent" />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-l from-dark/25 to-transparent" />
                    )}
                    {/* Issue number watermark */}
                    <span
                      aria-hidden
                      className="absolute bottom-5 right-6 font-serif font-bold leading-none text-warm-white/[0.07] select-none pointer-events-none"
                      style={{ fontSize: 'clamp(56px, 9vw, 120px)' }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {/* Category chip */}
                    <div className="absolute top-5 left-5">
                      <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-gold border border-gold/35 px-2.5 py-1.5 bg-dark/30 backdrop-blur-sm">
                        {service.category}
                      </span>
                    </div>
                  </div>

                  {/* ── Text panel ── */}
                  <div
                    className={`flex flex-col justify-center px-8 py-16 md:px-14 md:py-20 ${textOrder} ${
                      reversed ? 'md:border-r' : 'md:border-l'
                    } border-warm-white/[0.07]`}
                  >
                    {/* Icon badge + eyebrow */}
                    <div className="flex items-center gap-3 mb-7">
                      <div className="flex items-center justify-center w-10 h-10 border border-gold/35 shrink-0">
                        <Icon className="w-4.5 h-4.5 text-gold" />
                      </div>
                      <span className="text-[10px] font-semibold uppercase tracking-[0.26em] text-gold/60">
                        {String(i + 1).padStart(2, '0')} — {service.category}
                      </span>
                    </div>

                    <h2 className="font-serif text-3xl md:text-[2.5rem] text-warm-white leading-[1.15] mb-6">
                      {service.title}
                    </h2>

                    {/* Gold rule */}
                    <div className="w-10 h-px bg-gold/40 mb-7" />

                    <p className="text-warm-white/45 text-[1.02rem] leading-[1.95] mb-9">
                      {service.longDescription}
                    </p>

                    {/* Features list */}
                    <ul className="space-y-3.5 mb-10">
                      {service.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-3.5 text-sm text-warm-white/50">
                          <span className="w-4 h-px bg-gold/50 mt-[0.55rem] shrink-0" />
                          {feat}
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <Link
                      href={`/contact?service=${service.id}`}
                      className="group/btn inline-flex items-center gap-3 border border-gold/45 text-gold font-semibold px-7 py-3.5 text-sm tracking-[0.12em] uppercase hover:bg-gold hover:text-dark hover:border-gold transition-all duration-300 self-start"
                    >
                      Enquire Now
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          )
        })}
      </section>

      {/* ── Why choose us bar ─────────────────────────────── */}
      <div className="bg-dark border-t border-warm-white/[0.07] py-16 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-px bg-warm-white/[0.07]">
          {[
            { number: '500+', label: 'Weddings Shot' },
            { number: '12+',  label: 'Years of Craft' },
            { number: '4K',   label: 'Ultra HD Films' },
            { number: '100%', label: 'Client Satisfaction' },
          ].map((stat) => (
            <div key={stat.label} className="bg-dark px-8 py-10 text-center">
              <p className="font-serif text-4xl font-bold text-gold">{stat.number}</p>
              <p className="text-warm-white/35 text-xs font-semibold uppercase tracking-[0.18em] mt-3">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <CTABanner />
    </>
  )
}
