import { Dancing_Script } from 'next/font/google'
import ScrollReveal from '@/components/ui/ScrollReveal'

const script = Dancing_Script({ subsets: ['latin'], weight: ['700'], display: 'swap' })

const awards = [
  {
    badge: (
      <div className="flex flex-col items-center gap-1 text-center">
        <span className="text-xs font-black tracking-widest text-dark/55 uppercase">WeddingWire</span>
        <span className="text-[9px] font-medium tracking-[0.16em] uppercase text-dark/35 leading-tight">
          Top 10 Wedding<br />Filmmakers
        </span>
      </div>
    ),
  },
  {
    badge: (
      <div className="flex flex-col items-center gap-1 text-center">
        <svg viewBox="0 0 64 52" className="w-10 h-8 mb-1" fill="none">
          <path d="M4 26 C4 14 14 4 32 4 C50 4 60 14 60 26" stroke="currentColor" strokeWidth="1.2" className="text-dark/35" strokeLinecap="round"/>
          <path d="M4 26 C4 38 14 48 32 48 C50 48 60 38 60 26" stroke="currentColor" strokeWidth="1.2" className="text-dark/35" strokeLinecap="round"/>
        </svg>
        <span className="text-[9px] font-semibold tracking-[0.14em] uppercase text-dark/50 leading-tight">
          Wedding Filmmakers<br />of the Year
        </span>
        <span className="text-[8px] text-dark/30 tracking-[0.1em]">Wedding Sutra 2021</span>
      </div>
    ),
  },
  {
    badge: (
      <div className="border border-dark/30 px-5 py-3 flex flex-col items-center gap-0.5">
        <span className="font-black text-xl tracking-[0.04em] text-dark/60 leading-none">FEAR</span>
        <span className="font-black text-xl tracking-[0.04em] text-dark/60 leading-none">LESS.</span>
        <div className="w-full h-px bg-dark/20 my-1" />
        <span className="text-[8px] font-semibold tracking-[0.22em] uppercase text-dark/35">Photographers</span>
      </div>
    ),
  },
  {
    badge: (
      <div className="flex flex-col items-center gap-1 text-center">
        <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none">
          <polygon points="24,2 44,13 44,35 24,46 4,35 4,13" stroke="currentColor" strokeWidth="1.2" className="text-dark/35"/>
          <circle cx="24" cy="24" r="5" stroke="currentColor" strokeWidth="1" className="text-dark/30"/>
        </svg>
        <span className="text-[8px] font-semibold tracking-[0.16em] uppercase text-dark/35">Featured</span>
      </div>
    ),
  },
  {
    badge: (
      <div className="flex flex-col items-center gap-1 text-center">
        <span className="font-black text-sm tracking-[0.2em] text-dark/55 uppercase leading-tight">India Film</span>
        <span className="font-black text-sm tracking-[0.2em] text-dark/55 uppercase leading-tight">Project</span>
      </div>
    ),
  },
]

export default function AwardsBar() {
  return (
    <section className="bg-white border-y border-dark/[0.06] py-14 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <p className={`${script.className} text-center text-3xl text-dark/50 mb-10`}>
            As seen in &amp; recognised by
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <div className="flex items-center justify-center flex-wrap gap-10 md:gap-16">
            {awards.map((a, i) => (
              <div key={i} className="flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300">
                {a.badge}
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
