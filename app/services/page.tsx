import type { Metadata } from 'next'
import { services } from '@/data/services'
import ServiceCard from '@/components/services/ServiceCard'
import SectionHeader from '@/components/ui/SectionHeader'
import ScrollReveal from '@/components/ui/ScrollReveal'
import CTABanner from '@/components/home/CTABanner'

export const metadata: Metadata = {
  title: 'Services — Wedding Photography, Cinematography & Drone',
  description:
    'Explore Photofilms\'s full range of services including wedding photography, pre-wedding shoots, cinematic wedding films, drone aerial photography, corporate events, and portrait sessions in Vadodara, Gujarat.',
}

export default function ServicesPage() {
  return (
    <>
      {/* Page hero */}
      <div className="bg-dark pt-32 pb-20 px-6 text-center">
        <ScrollReveal>
          <SectionHeader
            eyebrow="What We Do"
            title="Services built for your story"
            subtitle="Every package is crafted with one goal: to give you images and films that move you for a lifetime."
            centered
            light
          />
        </ScrollReveal>
      </div>

      {/* Services grid */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <ScrollReveal key={service.id} delay={i * 0.08}>
                <ServiceCard service={service} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
