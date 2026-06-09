import Image from 'next/image'
import { Camera, Heart, Film, Plane, Briefcase, User, Check } from 'lucide-react'
import type { Service } from '@/types'

const iconMap: Record<string, React.ElementType> = {
  Camera, Heart, Film, Plane, Briefcase, User,
}

export default function ServiceCard({ service }: { service: Service }) {
  const Icon = iconMap[service.icon] ?? Camera

  return (
    <div id={service.id} className="group bg-warm-white border border-border hover:border-gold/40 transition-all duration-300 overflow-hidden scroll-mt-24">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={service.heroImage}
          alt={service.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-dark/20" />
        <div className="absolute top-4 left-4">
          <span className="flex items-center justify-center w-10 h-10 bg-gold text-dark">
            <Icon className="w-5 h-5" />
          </span>
        </div>
      </div>
      <div className="p-7">
        <h3 className="font-serif text-2xl text-dark mb-3">{service.title}</h3>
        <p className="text-warm-gray text-sm leading-relaxed mb-5">{service.longDescription}</p>
        <ul className="space-y-2">
          {service.features.map((feat) => (
            <li key={feat} className="flex items-start gap-2.5 text-sm text-dark-muted">
              <Check className="w-4 h-4 text-gold shrink-0 mt-0.5" />
              {feat}
            </li>
          ))}
        </ul>
        <div className="mt-6 pt-6 border-t border-border">
          <a
            href={`/contact?service=${service.id}`}
            className="inline-block bg-gold text-dark font-semibold px-6 py-3 text-sm tracking-wide hover:bg-gold-dark transition-colors duration-200"
          >
            Enquire Now
          </a>
        </div>
      </div>
    </div>
  )
}
