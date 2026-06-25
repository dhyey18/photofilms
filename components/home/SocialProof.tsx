'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

const stats = [
  { target: 500, suffix: '+', label: 'Happy Couples', desc: 'Across India & abroad' },
  { target: 10, suffix: '+', label: 'Years Together', desc: 'Crafting love stories since 2016' },
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
    <section className="bg-white border-y border-dark/[0.06] py-20 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-px bg-dark/[0.06]">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white text-center px-6 py-10 cursor-default hover:bg-[#faf8f5] transition-colors duration-300">
            <div className="w-8 h-px bg-gold/55 mx-auto mb-5" />
            <Counter target={stat.target} suffix={stat.suffix} />
            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-dark/65">{stat.label}</p>
            <p className="mt-1 text-xs text-dark/32">{stat.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
