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
      {/* ── Header ──────────────────────────────────────────── */}
      <div className="bg-[#faf8f5] pt-36 pb-24 px-6 relative overflow-hidden border-b border-dark/[0.06]">
        <span
          aria-hidden
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none font-serif font-bold leading-none"
          style={{ fontSize: 'clamp(50px, 13vw, 200px)', color: 'rgba(26,22,20,0.026)' }}
        >
          SERVICES
        </span>

        <div className="max-w-4xl mx-auto relative text-center">
          <ScrollReveal>
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="w-10 h-px bg-gold/60" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold">What We Offer</p>
              <span className="w-10 h-px bg-gold/60" />
            </div>

            <h1 className="font-serif text-5xl md:text-6xl lg:text-[4.5rem] text-dark leading-[1.06]">
              Services built for{' '}
              <em className="not-italic text-gold">your story</em>
            </h1>

            <p className="mt-6 text-dark/45 text-lg max-w-lg mx-auto leading-relaxed">
              Every package is crafted with one goal — to give you images and films
              that move you for a lifetime.
            </p>

            <div className="flex items-center justify-center flex-wrap gap-x-8 gap-y-3 mt-10">
              {[`${services.length} Services`, 'Photography', 'Cinematography', 'Aerial Drone'].map((s, i) => (
                <span key={s} className="flex items-center gap-8">
                  {i > 0 && <span className="w-1 h-1 rounded-full bg-dark/20" />}
                  <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-dark/30">{s}</span>
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* ── Alternating service sections ────────────────────── */}
      <section className="bg-[#faf8f5]">
        {services.map((service, i) => {
          const Icon = iconMap[service.icon] ?? Camera
          const reversed = i % 2 === 1
          const mediaOrder = reversed ? 'md:order-first' : 'md:order-last'
          const textOrder  = reversed ? 'md:order-last'  : 'md:order-first'
          const rowBg = i % 2 === 0 ? 'bg-[#faf8f5]' : 'bg-white'

          return (
            <div
              key={service.id}
              id={service.id}
              className={`${rowBg} border-b border-dark/[0.06] last:border-b-0 scroll-mt-20`}
            >
              <ScrollReveal direction="none">
                <div className="grid md:grid-cols-2" style={{ minHeight: 540 }}>

                  {/* Media panel */}
                  <div className={`relative overflow-hidden ${mediaOrder}`} style={{ minHeight: 380 }}>
                    {service.videoUrl ? (
                      // eslint-disable-next-line jsx-a11y/media-has-caption
                      <video
                        src={service.videoUrl}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="none"
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
                    {/* Subtle bottom vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                    {/* Number watermark */}
                    <span
                      aria-hidden
                      className="absolute bottom-5 right-6 font-serif font-bold leading-none text-warm-white/[0.12] select-none pointer-events-none"
                      style={{ fontSize: 'clamp(56px, 9vw, 120px)' }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {/* Category chip */}
                    <div className="absolute top-5 left-5">
                      <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-warm-white border border-warm-white/40 px-2.5 py-1.5 bg-black/20 backdrop-blur-sm">
                        {service.category}
                      </span>
                    </div>
                  </div>

                  {/* Text panel */}
                  <div
                    className={`flex flex-col justify-center px-8 py-16 md:px-14 md:py-20 ${textOrder} ${
                      reversed ? 'md:border-r' : 'md:border-l'
                    } border-dark/[0.06]`}
                  >
                    {/* Icon + eyebrow */}
                    <div className="flex items-center gap-3 mb-7">
                      <div className="flex items-center justify-center w-10 h-10 border border-gold/40 shrink-0">
                        <Icon className="w-4 h-4 text-gold" />
                      </div>
                      <span className="text-[10px] font-semibold uppercase tracking-[0.26em] text-gold/65">
                        {String(i + 1).padStart(2, '0')} — {service.category}
                      </span>
                    </div>

                    <h2 className="font-serif text-3xl md:text-[2.5rem] text-dark leading-[1.15] mb-6">
                      {service.title}
                    </h2>

                    <div className="w-10 h-px bg-gold/45 mb-7" />

                    <p className="text-dark/55 text-[1.02rem] leading-[1.95] mb-9">
                      {service.longDescription}
                    </p>

                    <ul className="space-y-3.5 mb-10">
                      {service.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-3.5 text-sm text-dark/45">
                          <span className="w-4 h-px bg-gold/50 mt-[0.55rem] shrink-0" />
                          {feat}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={`/contact?service=${service.id}`}
                      className="group/btn inline-flex items-center gap-3 border border-dark/30 text-dark font-semibold px-7 py-3.5 text-sm tracking-[0.12em] uppercase hover:bg-dark hover:text-warm-white hover:border-dark transition-all duration-300 self-start"
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

      {/* ── Stats bar ───────────────────────────────────────── */}
      <div className="bg-white border-t border-b border-dark/[0.06] py-16 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-px bg-dark/[0.06]">
          {[
            { number: '500+', label: 'Weddings Shot' },
            { number: '10+',  label: 'Years of Craft' },
            { number: '4K',   label: 'Ultra HD Films' },
            { number: '100%', label: 'Client Satisfaction' },
          ].map((stat) => (
            <div key={stat.label} className="bg-white px-8 py-10 text-center">
              <p className="font-serif text-4xl text-gold">{stat.number}</p>
              <p className="text-dark/38 text-xs font-semibold uppercase tracking-[0.18em] mt-3">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <CTABanner />
    </>
  )
}
