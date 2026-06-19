import Image from 'next/image'
import Link from 'next/link'
import { Camera, Heart, Film, Plane, Briefcase, User, Check, ArrowRight } from 'lucide-react'
import type { Service } from '@/types'

const iconMap: Record<string, React.ElementType> = {
  Camera, Heart, Film, Plane, Briefcase, User,
}

export default function ServiceCard({ service }: { service: Service }) {
  const Icon = iconMap[service.icon] ?? Camera

  return (
    <div id={service.id} className="group bg-white border border-dark/[0.07] hover:border-gold/30 transition-all duration-300 overflow-hidden scroll-mt-24">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={service.heroImage}
          alt={service.title}
          fill
          className="object-cover group-hover:scale-[1.04] transition-transform duration-600 ease-out"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
        {/* Category chip */}
        <div className="absolute top-4 left-4">
          <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-warm-white border border-warm-white/40 px-2.5 py-1.5 bg-black/20 backdrop-blur-sm">
            {service.category}
          </span>
        </div>
        {/* Gold icon square */}
        <div className="absolute bottom-4 right-4">
          <span className="flex items-center justify-center w-9 h-9 bg-gold/90 text-dark">
            <Icon className="w-4 h-4" />
          </span>
        </div>
      </div>
      <div className="p-7">
        <h3 className="font-serif text-2xl text-dark mb-3">{service.title}</h3>
        <p className="text-dark/45 text-sm leading-relaxed mb-5">{service.longDescription}</p>
        <ul className="space-y-2.5 mb-7">
          {service.features.map((feat) => (
            <li key={feat} className="flex items-start gap-3 text-sm text-dark/45">
              <span className="w-4 h-px bg-gold/50 mt-[0.55rem] shrink-0" />
              {feat}
            </li>
          ))}
        </ul>
        <div className="pt-5 border-t border-dark/[0.07]">
          <Link
            href={`/contact?service=${service.id}`}
            className="inline-flex items-center gap-2.5 border border-dark/20 text-dark/55 hover:border-gold hover:text-gold font-semibold px-6 py-3 text-[11px] tracking-[0.2em] uppercase transition-all duration-300 group/btn"
          >
            Enquire Now
            <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </div>
  )
}
