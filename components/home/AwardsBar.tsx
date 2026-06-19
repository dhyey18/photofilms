import ScrollReveal from '@/components/ui/ScrollReveal'

const awards = [
  {
    badge: (
      <div className="flex flex-col items-center gap-1">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-full border-2 border-dark/70 flex items-center justify-center">
            <span className="text-[9px] font-black text-dark/70">W</span>
          </div>
          <span className="text-sm font-black tracking-widest text-dark/70 uppercase">WeddingWire</span>
        </div>
        <span className="text-[9px] font-semibold tracking-[0.18em] uppercase text-dark/45 text-center leading-tight">
          Top 10 Wedding<br />Filmmakers in India
        </span>
      </div>
    ),
  },
  {
    badge: (
      <div className="flex flex-col items-center gap-1 text-center">
        {/* Laurel wreath */}
        <div className="relative flex items-center justify-center w-16 h-16">
          <svg viewBox="0 0 64 64" className="absolute inset-0 w-full h-full opacity-50" fill="none">
            <path d="M8 32 C8 18 18 8 32 8" stroke="currentColor" strokeWidth="1.2" className="text-dark/50" strokeLinecap="round"/>
            <path d="M56 32 C56 18 46 8 32 8" stroke="currentColor" strokeWidth="1.2" className="text-dark/50" strokeLinecap="round"/>
            <path d="M8 32 C8 46 18 56 32 56" stroke="currentColor" strokeWidth="1.2" className="text-dark/50" strokeLinecap="round"/>
            <path d="M56 32 C56 46 46 56 32 56" stroke="currentColor" strokeWidth="1.2" className="text-dark/50" strokeLinecap="round"/>
          </svg>
          <div className="text-center z-10 px-2">
            <span className="text-[7px] font-semibold uppercase tracking-[0.12em] text-dark/55 leading-tight block">Nominated</span>
            <span className="text-[6px] font-black uppercase tracking-[0.1em] text-dark/65 leading-tight block">Wedding</span>
            <span className="text-[6px] font-black uppercase tracking-[0.1em] text-dark/65 leading-tight block">Filmmakers</span>
            <span className="text-[6px] font-black uppercase tracking-[0.1em] text-dark/65 leading-tight block">of the Year</span>
            <span className="text-[7px] font-semibold text-dark/40 block">2021</span>
          </div>
        </div>
        <span className="text-[8px] font-semibold tracking-[0.15em] uppercase text-dark/38">Wedding Sutra</span>
      </div>
    ),
  },
  {
    badge: (
      <div className="border border-dark/45 px-5 py-3 flex flex-col items-center gap-0.5">
        <span className="font-black text-xl tracking-[0.04em] text-dark/70 leading-none">FEAR</span>
        <span className="font-black text-xl tracking-[0.04em] text-dark/70 leading-none">LESS.</span>
        <div className="w-full h-px bg-dark/30 my-1" />
        <span className="text-[8px] font-semibold tracking-[0.22em] uppercase text-dark/45">Photographers</span>
      </div>
    ),
  },
  {
    badge: (
      <div className="flex flex-col items-center gap-2">
        <svg viewBox="0 0 48 48" className="w-12 h-12 opacity-55" fill="none">
          <polygon points="24,2 44,13 44,35 24,46 4,35 4,13" stroke="currentColor" strokeWidth="1.5" className="text-dark/60"/>
          <polygon points="24,8 40,17 40,31 24,40 8,31 8,17" stroke="currentColor" strokeWidth="0.8" className="text-dark/40"/>
          <circle cx="24" cy="24" r="5" stroke="currentColor" strokeWidth="1" className="text-dark/50"/>
          <circle cx="24" cy="24" r="2" fill="currentColor" className="text-dark/40"/>
        </svg>
      </div>
    ),
  },
  {
    badge: (
      <div className="flex flex-col items-center gap-1">
        <span className="font-black text-base tracking-[0.22em] text-dark/70 uppercase leading-tight">India Film</span>
        <span className="font-black text-base tracking-[0.22em] text-dark/70 uppercase leading-tight">Project</span>
      </div>
    ),
  },
]

export default function AwardsBar() {
  return (
    <section className="bg-white border-y border-dark/[0.06] py-14 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Headline */}
        <ScrollReveal>
          <p className="text-center font-serif italic text-lg md:text-xl text-dark/45 mb-10 tracking-wide">
            ✦ Top 10 Wedding filmmakers in India ✦
          </p>
        </ScrollReveal>

        {/* Logos row */}
        <ScrollReveal delay={0.1}>
          <div className="flex items-center justify-center flex-wrap gap-10 md:gap-16">
            {awards.map((a, i) => (
              <div key={i} className="flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-300">
                {a.badge}
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
