import Image from 'next/image'
import Link from 'next/link'
import { MapPin } from 'lucide-react'
import { portfolioStories } from '@/data/portfolio'
import SectionHeader from '@/components/ui/SectionHeader'
import ScrollReveal from '@/components/ui/ScrollReveal'

export default function PortfolioPreview() {
  const featured = portfolioStories.slice(0, 6)

  return (
    <section className="py-24 px-6 bg-surface">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Wedding Stories"
            title="Love stories we've had the honour to tell"
            subtitle="Each wedding is a unique chapter. Here are a few we are especially proud of."
            centered
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((story, i) => (
            <ScrollReveal key={story.slug} delay={i * 0.08}>
              <Link href={`/portfolio/${story.slug}`} className="group block overflow-hidden bg-warm-white">
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={story.coverImage}
                    alt={`${story.couple} wedding at ${story.venue}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <span className="bg-gold text-dark text-xs font-semibold px-3 py-1 tracking-wide">
                      {story.category}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="font-serif text-xl text-warm-white">{story.couple}</p>
                    <p className="flex items-center gap-1 text-warm-white/70 text-sm mt-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {story.venue}, {story.city}
                    </p>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/portfolio"
            className="inline-block bg-dark text-warm-white font-semibold px-8 py-4 tracking-wide hover:bg-dark/80 transition-colors duration-200"
          >
            View All Stories
          </Link>
        </div>
      </div>
    </section>
  )
}
