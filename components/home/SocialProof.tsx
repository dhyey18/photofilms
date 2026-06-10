'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

const stats = [
  { target: 500, suffix: '+', label: 'Happy Couples', desc: 'Across India & abroad' },
  { target: 12, suffix: '+', label: 'Years Together', desc: 'Crafting love stories since 2012' },
  { target: 50, suffix: '+', label: 'Cities Covered', desc: 'From Kashmir to Kerala' },
  { target: 2000, suffix: '+', label: 'Wedding Days', desc: 'Moments preserved forever' },
]

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref as React.RefObject<Element>, { once: true })
  const started = useRef(false)

  useEffect(() => {
    if (!isInView || started.current) return
    started.current = true
    const duration = 2000
    const startTime = performance.now()
    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [isInView, target])

  return (
    <span ref={ref} className="font-serif text-5xl md:text-6xl font-bold text-gold tabular-nums">
      {count}{suffix}
    </span>
  )
}

export default function SocialProof() {
  return (
    <section className="bg-dark py-20 px-6 relative overflow-hidden">
      {/* Subtle radial glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(201,168,76,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center px-6 py-8 transition-all duration-300 hover:bg-warm-white/[0.03] cursor-default ${
                i < 3 ? 'md:border-r md:border-warm-white/10' : ''
              } ${i >= 2 ? 'border-t md:border-t-0 border-warm-white/10' : ''}`}
            >
              {/* Gold overline */}
              <div className="w-8 h-px bg-gold mx-auto mb-5" />

              <Counter target={stat.target} suffix={stat.suffix} />

              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-warm-white/80">
                {stat.label}
              </p>
              <p className="mt-1 text-xs text-warm-white/35">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
