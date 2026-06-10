import Image from 'next/image'
import Link from 'next/link'
import { Camera, Heart, Film, Plane, Briefcase, User, ArrowRight } from 'lucide-react'
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
            const num = String(i + 1).padStart(2, '0')
            return (
              <ScrollReveal key={service.id} delay={i * 0.08}>
                <div className="group bg-warm-white border border-border hover:border-gold/50 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(201,168,76,0.14)] transition-all duration-500 overflow-hidden flex flex-col h-full">
                  {/* Image */}
                  <div className="relative h-60 overflow-hidden">
                    <Image
                      src={service.heroImage}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-dark/20 group-hover:bg-dark/10 transition-colors duration-500" />

                    {/* Number badge */}
                    <span className="absolute top-4 left-4 font-serif text-4xl font-bold text-warm-white/20 leading-none select-none">
                      {num}
                    </span>

                    {/* Category chip */}
                    <span className="absolute bottom-4 right-4 bg-dark/70 backdrop-blur-sm text-warm-white/80 text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1">
                      {service.category ?? 'Photography'}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="p-2 bg-surface text-gold group-hover:bg-gold group-hover:text-dark transition-colors duration-300">
                        <Icon className="w-4 h-4" />
                      </span>
                      <h3 className="font-serif text-xl text-dark">{service.title}</h3>
                    </div>
                    <p className="text-sm text-warm-gray leading-relaxed flex-1">
                      {service.description}
                    </p>
                    <Link
                      href={`/services#${service.id}`}
                      className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-gold group-hover:text-gold-dark transition-colors"
                    >
                      Explore
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>

                  {/* Gold bottom border grows on hover */}
                  <div className="h-[2px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
              </ScrollReveal>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-3 border-2 border-gold text-gold font-semibold px-8 py-3.5 tracking-wide hover:bg-gold hover:text-dark transition-colors duration-200"
          >
            View All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
