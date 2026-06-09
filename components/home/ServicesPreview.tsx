import Image from 'next/image'
import Link from 'next/link'
import { Camera, Heart, Film, Plane, Briefcase, User } from 'lucide-react'
import { services } from '@/data/services'
import SectionHeader from '@/components/ui/SectionHeader'
import ScrollReveal from '@/components/ui/ScrollReveal'

const iconMap: Record<string, React.ElementType> = {
  Camera, Heart, Film, Plane, Briefcase, User,
}

export default function ServicesPreview() {
  return (
    <section className="py-24 px-6 bg-cream">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <SectionHeader
            eyebrow="What We Offer"
            title="Services crafted for your love story"
            subtitle="From intimate portraits to grand cinematic productions, every service is tailored to your unique celebration."
            centered
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] ?? Camera
            return (
              <ScrollReveal key={service.id} delay={i * 0.08}>
                <div className="group bg-warm-white border border-border hover:border-gold/40 transition-all duration-300 overflow-hidden">
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={service.heroImage}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-dark/20 group-hover:bg-dark/10 transition-colors duration-300" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="p-2 bg-surface text-gold">
                        <Icon className="w-5 h-5" />
                      </span>
                      <h3 className="font-serif text-xl text-dark">{service.title}</h3>
                    </div>
                    <p className="text-sm text-warm-gray leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <Link
                      href={`/services#${service.id}`}
                      className="text-sm font-semibold text-gold hover:text-gold-dark transition-colors tracking-wide underline underline-offset-4"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-block border-2 border-gold text-gold font-semibold px-8 py-3 tracking-wide hover:bg-gold hover:text-dark transition-colors duration-200"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}
