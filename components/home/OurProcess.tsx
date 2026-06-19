import { Dancing_Script } from 'next/font/google'
import ScrollReveal from '@/components/ui/ScrollReveal'

const script = Dancing_Script({ subsets: ['latin'], weight: ['700'], display: 'swap' })

const steps = [
  {
    number: '01',
    title: 'Share Your Story',
    description:
      'Reach out via the contact form or WhatsApp. We discuss your vision, date, and the feeling you want to preserve.',
  },
  {
    number: '02',
    title: 'We Plan Together',
    description:
      'A detailed shot-list, timeline, and location scouting session ensures your big day unfolds without a hitch.',
  },
  {
    number: '03',
    title: 'Your Big Day',
    description:
      'Our team arrives before the first ritual and stays until the last dance — discreet, warm, and always ready.',
  },
  {
    number: '04',
    title: 'Relive Forever',
    description:
      'Beautifully retouched photos in 3 weeks and cinematic films in 8. Yours to treasure across generations.',
  },
]

export default function OurProcess() {
  return (
    <section className="bg-white border-y border-dark/[0.06] py-20 md:py-28 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16 md:mb-20">
            <h2 className={`${script.className} text-4xl md:text-5xl text-dark/60 mb-4`}>
              The Journey
            </h2>
            {/* <p className="font-serif text-3xl md:text-4xl text-dark leading-tight">
              How we work{' '}
              <em className="italic text-gold">together</em>
            </p> */}
            <p className="mt-5 text-dark/45 text-base max-w-md mx-auto leading-relaxed">
              From your first message to your final gallery — a process designed around your peace of mind.
            </p>
          </div>
        </ScrollReveal>

        {/* Steps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-dark/[0.06]">
          {steps.map((step, i) => (
            <ScrollReveal key={step.number} delay={i * 0.1}>
              <div className="bg-white p-8 md:p-10 relative overflow-hidden group hover:bg-[#faf8f5] transition-colors duration-300">
                {/* Large faint number */}
                <span
                  aria-hidden
                  className="absolute top-4 right-5 font-serif font-bold leading-none select-none pointer-events-none transition-opacity duration-300 group-hover:opacity-60"
                  style={{ fontSize: 'clamp(54px, 6vw, 80px)', color: 'rgba(26,22,20,0.05)' }}
                >
                  {step.number}
                </span>

                {/* Gold step number */}
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gold mb-5">
                  {step.number}
                </p>

                {/* Thin gold divider */}
                <div className="w-8 h-px bg-gold/40 mb-6" />

                <h3 className="font-serif text-xl text-dark mb-3 leading-snug">
                  {step.title}
                </h3>
                <p className="text-dark/45 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
