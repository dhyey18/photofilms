import Image from 'next/image'
import Link from 'next/link'
import { Dancing_Script } from 'next/font/google'
import { MapPin, ArrowRight } from 'lucide-react'
import { portfolioStories } from '@/data/portfolio'
import ScrollReveal from '@/components/ui/ScrollReveal'

const script = Dancing_Script({ subsets: ['latin'], weight: ['700'], display: 'swap' })

export default function PortfolioPreview() {
  const featured = portfolioStories.slice(0, 6)

  return (
    <section className="bg-[#faf8f5] border-y border-dark/[0.06] py-20 md:py-28 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-14">
            <h2 className={`${script.className} text-4xl md:text-5xl text-dark/60 mb-4`}>
              Signature Work
            </h2>
            <p className="font-serif text-3xl md:text-4xl text-dark leading-tight">
              Love stories we&apos;ve had the honour{' '}
              <em className="italic text-gold">to tell</em>
            </p>
            <p className="mt-4 text-dark/40 text-base max-w-md mx-auto leading-relaxed">
              Each wedding is a unique chapter. Here are a few we are especially proud of.
            </p>
          </div>
        </ScrollReveal>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {featured.map((story, i) => {
            const isFeatured = i === 0
            return (
              <ScrollReveal key={story.slug} delay={i * 0.07} className={isFeatured ? 'md:col-span-2' : ''}>
                <Link href={`/portfolio/${story.slug}`} className="group block overflow-hidden relative">
                  <div className={`relative overflow-hidden ${isFeatured ? 'h-80 md:h-[440px]' : 'h-64 md:h-72'}`}>
                    <Image
                      src={story.coverImage}
                      alt={`${story.couple} wedding at ${story.venue}`}
                      fill
                      className="object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-out"
                      sizes={isFeatured ? '(max-width: 768px) 100vw, 66vw' : '(max-width: 768px) 100vw, 33vw'}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />

                    {/* Category chip */}
                    <div className="absolute top-4 left-4">
                      <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-warm-white border border-warm-white/35 px-2.5 py-1.5 bg-black/20 backdrop-blur-sm">
                        {story.category}
                      </span>
                    </div>

                    {/* Hover overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="flex items-center gap-2 border border-warm-white/55 text-warm-white text-[10px] font-semibold uppercase tracking-[0.22em] px-5 py-2.5 backdrop-blur-sm bg-black/20">
                        View Story <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>

                    {/* Bottom info */}
                    <div className="absolute bottom-0 inset-x-0 p-5">
                      <p className={`font-serif text-warm-white leading-tight ${isFeatured ? 'text-2xl' : 'text-xl'}`}>
                        {story.couple}
                      </p>
                      <p className="flex items-center gap-1.5 text-warm-white/55 text-sm mt-1.5">
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

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-3 border border-dark/20 text-dark/55 hover:border-dark hover:text-dark font-semibold px-8 py-4 text-[11px] tracking-[0.22em] uppercase transition-all duration-300"
          >
            View All Stories
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
