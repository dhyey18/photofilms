'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Camera, Heart, Film, Plane, Briefcase, User, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { services } from '@/data/services'
import ScrollReveal from '@/components/ui/ScrollReveal'

const iconMap: Record<string, React.ElementType> = {
  Camera, Heart, Film, Plane, Briefcase, User,
}

export default function ServicesPreview() {
  const [activeIndex, setActiveIndex] = useState(0)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])

  /* Only play the active video — all others stay paused */
  useEffect(() => {
    videoRefs.current.forEach((vid, i) => {
      if (!vid) return
      if (i === activeIndex) {
        vid.play().catch(() => {})
      } else {
        vid.pause()
      }
    })
  }, [activeIndex])

  return (
    <section className="bg-dark overflow-hidden">

      {/* ── Section header ─────────────────────────────── */}
      <div className="py-20 px-6 text-center border-b border-warm-white/8">
        <ScrollReveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-gold mb-2">
            What We Offer
          </p>
          <span className="block h-px w-10 bg-gold/50 mx-auto mb-7" />
          <h2 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] text-warm-white leading-[1.1]">
            Services crafted for{' '}
            <em className="not-italic text-gold-light">your love story</em>
          </h2>
          <p className="mt-5 text-warm-white/50 text-lg max-w-xl mx-auto leading-relaxed">
            From intimate portraits to grand cinematic productions, every service is
            tailored to your unique celebration.
          </p>
        </ScrollReveal>
      </div>

      {/* ── Desktop: interactive split ─────────────────── */}
      <div className="hidden lg:grid lg:grid-cols-[1fr_1.3fr]" style={{ minHeight: 580 }}>

        {/* Left — numbered service list */}
        <div className="border-r border-warm-white/8 flex flex-col">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] ?? Camera
            const isActive = i === activeIndex
            return (
              <div
                key={service.id}
                onMouseEnter={() => setActiveIndex(i)}
                className={`relative flex-1 border-b border-warm-white/8 last:border-b-0 cursor-default transition-colors duration-300 ${
                  isActive ? 'bg-warm-white/[0.04]' : 'hover:bg-warm-white/[0.025]'
                }`}
              >
                {/* Active accent bar */}
                <motion.div
                  className="absolute left-0 top-0 bottom-0 w-[3px] bg-gold"
                  initial={false}
                  animate={{ opacity: isActive ? 1 : 0 }}
                  transition={{ duration: 0.2 }}
                />

                <div className="flex items-start gap-5 px-8 py-5">
                  {/* Number */}
                  <span
                    className={`font-serif text-[2.6rem] font-bold leading-none shrink-0 select-none transition-colors duration-500 ${
                      isActive ? 'text-gold' : 'text-warm-white/10'
                    }`}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  <div className="flex-1 min-w-0 pt-1">
                    {/* Title row */}
                    <div className="flex items-center gap-2.5">
                      <Icon
                        className={`w-4 h-4 shrink-0 transition-colors duration-300 ${
                          isActive ? 'text-gold' : 'text-warm-white/20'
                        }`}
                      />
                      <h3
                        className={`font-serif text-[1.15rem] transition-colors duration-300 ${
                          isActive ? 'text-warm-white' : 'text-warm-white/45'
                        }`}
                      >
                        {service.title}
                      </h3>
                    </div>

                    {/* Expandable description + link */}
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="text-warm-white/42 text-sm leading-relaxed pt-2.5 pb-2 pr-6">
                            {service.description}
                          </p>
                          <Link
                            href={`/services#${service.id}`}
                            className="group/lnk inline-flex items-center gap-1.5 text-gold text-[11px] font-semibold uppercase tracking-[0.2em] hover:text-gold-light transition-colors"
                          >
                            Explore
                            <ArrowRight className="w-3 h-3 group-hover/lnk:translate-x-1 transition-transform duration-300" />
                          </Link>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Right — cinematic video reveal panel */}
        <div className="relative overflow-hidden">
          {services.map((service, i) => (
            <div
              key={service.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                i === activeIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              {service.videoUrl ? (
                // eslint-disable-next-line jsx-a11y/media-has-caption
                <video
                  ref={(el) => { videoRefs.current[i] = el }}
                  src={service.videoUrl}
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
                  sizes="55vw"
                />
              )}
              {/* Blend gradient from left */}
              <div className="absolute inset-0 bg-gradient-to-r from-dark/55 via-dark/10 to-transparent" />
              {/* Bottom gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent" />
              {/* Faint service name watermark */}
              <p
                aria-hidden="true"
                className="absolute bottom-7 right-7 font-serif text-2xl text-warm-white/10 select-none text-right"
              >
                {service.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Tablet / Mobile: cinematic card grid ───────── */}
      <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-px bg-warm-white/8">
        {services.map((service, i) => {
          const Icon = iconMap[service.icon] ?? Camera
          return (
            <ScrollReveal key={service.id} delay={i * 0.06}>
              <Link
                href={`/services#${service.id}`}
                className="group relative flex overflow-hidden"
                style={{ aspectRatio: '4 / 3' }}
              >
                <Image
                  src={service.heroImage}
                  alt={service.title}
                  fill
                  className="object-cover opacity-65 group-hover:opacity-85 group-hover:scale-105 transition-all duration-700"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/25 to-transparent" />

                {/* Number */}
                <span
                  aria-hidden="true"
                  className="absolute top-4 left-4 font-serif text-5xl font-bold leading-none text-warm-white/8 select-none"
                >
                  {String(i + 1).padStart(2, '0')}
                </span>

                {/* Bottom text */}
                <div className="absolute bottom-0 p-5">
                  <div className="flex items-center gap-2 mb-1.5">
                    <Icon className="w-4 h-4 text-gold shrink-0" />
                    <h3 className="font-serif text-xl text-warm-white">{service.title}</h3>
                  </div>
                  <p className="text-warm-white/45 text-xs leading-relaxed line-clamp-2">
                    {service.description}
                  </p>
                </div>

                {/* Hover: gold bottom bar */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </Link>
            </ScrollReveal>
          )
        })}
      </div>

      {/* ── Footer CTA ─────────────────────────────────── */}
      <div className="py-12 px-6 text-center border-t border-warm-white/8">
        <Link
          href="/services"
          className="inline-flex items-center gap-3 border border-gold/55 text-gold font-semibold px-9 py-3.5 text-sm tracking-[0.12em] uppercase hover:bg-gold hover:text-dark hover:border-gold transition-all duration-300"
        >
          View All Services
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  )
}
