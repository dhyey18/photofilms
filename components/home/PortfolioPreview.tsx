import Image from 'next/image'
import Link from 'next/link'
import { MapPin, ArrowRight } from 'lucide-react'
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

        {/* Editorial mixed grid: first story featured (2-col span), rest equal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {featured.map((story, i) => {
            const isFeatured = i === 0
            return (
              <ScrollReveal
                key={story.slug}
                delay={i * 0.07}
                className={isFeatured ? 'md:col-span-2' : ''}
              >
                <Link
                  href={`/portfolio/${story.slug}`}
                  className="group block overflow-hidden relative"
                >
                  <div className={`relative overflow-hidden ${isFeatured ? 'h-80 md:h-[440px]' : 'h-64 md:h-72'}`}>
                    <Image
                      src={story.coverImage}
                      alt={`${story.couple} wedding at ${story.venue}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-all duration-700 grayscale-[30%] group-hover:grayscale-0"
                      sizes={
                        isFeatured
                          ? '(max-width: 768px) 100vw, 66vw'
                          : '(max-width: 768px) 100vw, 33vw'
                      }
                    />

                    {/* Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/85 via-dark/20 to-transparent" />

                    {/* Category chip */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-gold text-dark text-[10px] font-bold px-2.5 py-1 tracking-widest uppercase">
                        {story.category}
                      </span>
                    </div>

                    {/* Hover: "View Story" reveal */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="flex items-center gap-2 border border-warm-white/60 text-warm-white text-xs font-semibold uppercase tracking-widest px-5 py-2.5 backdrop-blur-sm bg-dark/20">
                        View Story <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>

                    {/* Bottom info */}
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <p className={`font-serif text-warm-white leading-tight ${isFeatured ? 'text-2xl' : 'text-xl'}`}>
                        {story.couple}
                      </p>
                      <p className="flex items-center gap-1.5 text-warm-white/65 text-sm mt-1.5">
                        <MapPin className="w-3.5 h-3.5 text-gold shrink-0" />
                        {story.venue}, {story.city}
                      </p>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-3 bg-dark text-warm-white font-semibold px-8 py-4 tracking-wide hover:bg-dark/80 transition-colors duration-200"
          >
            View All Stories
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
