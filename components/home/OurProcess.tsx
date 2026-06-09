import { MessageCircle, Clock, Camera, Heart } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import ScrollReveal from '@/components/ui/ScrollReveal'

const steps = [
  {
    number: '01',
    icon: MessageCircle,
    title: 'Share Your Story',
    description:
      'Reach out via the contact form or WhatsApp. We discuss your vision, date, and the feeling you want to preserve.',
  },
  {
    number: '02',
    icon: Clock,
    title: 'We Plan Together',
    description:
      'A detailed shot-list, timeline, and location scouting session ensures your big day unfolds without a hitch.',
  },
  {
    number: '03',
    icon: Camera,
    title: 'Your Big Day',
    description:
      'Our team arrives before the first ritual and stays until the last dance — discreet, warm, and always ready.',
  },
  {
    number: '04',
    icon: Heart,
    title: 'Relive Forever',
    description:
      'Beautifully retouched photos in 3 weeks and cinematic films in 8. Yours to treasure across generations.',
  },
]

export default function OurProcess() {
  return (
    <section className="py-24 px-6 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <SectionHeader
            eyebrow="The Journey"
            title="How we work together"
            subtitle="From your first message to your final gallery — a process designed around your peace of mind."
            centered
          />
        </ScrollReveal>

        <div className="relative mt-16">
          {/* Desktop connector line */}
          <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <ScrollReveal key={step.number} delay={i * 0.15}>
                  <div className="flex flex-col items-center text-center md:px-2">
                    {/* Icon + number */}
                    <div className="relative mb-5">
                      <div className="w-16 h-16 rounded-full border border-gold/50 bg-warm-white flex items-center justify-center shadow-sm">
                        <Icon className="w-6 h-6 text-gold" />
                      </div>
                      <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gold flex items-center justify-center text-dark text-[10px] font-bold">
                        {i + 1}
                      </span>
                    </div>

                    {/* Step number label */}
                    <p className="text-xs font-semibold text-gold/70 uppercase tracking-[0.2em] mb-2">
                      {step.number}
                    </p>

                    <h3 className="font-serif text-xl text-dark mb-3">{step.title}</h3>
                    <p className="text-warm-gray text-sm leading-relaxed">{step.description}</p>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
