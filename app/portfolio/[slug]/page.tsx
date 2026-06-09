import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { MapPin, Calendar, ArrowLeft } from 'lucide-react'
import { portfolioStories } from '@/data/portfolio'
import StoryGallery from '@/components/portfolio/StoryGallery'
import CTABanner from '@/components/home/CTABanner'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return portfolioStories.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const story = portfolioStories.find((s) => s.slug === slug)
  if (!story) return {}
  return {
    title: `${story.couple} — ${story.venue}, ${story.city}`,
    description: story.narrative,
    openGraph: {
      images: [{ url: story.coverImage, width: 1200, height: 800 }],
    },
  }
}

export default async function StoryPage({ params }: Props) {
  const { slug } = await params
  const story = portfolioStories.find((s) => s.slug === slug)
  if (!story) notFound()

  return (
    <>
      {/* Hero */}
      <div className="relative h-[60vh] min-h-[400px]">
        <Image
          src={story.coverImage}
          alt={`${story.couple} wedding at ${story.venue}`}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/20 via-dark/30 to-dark/80" />
        <div className="absolute bottom-0 left-0 right-0 p-8 max-w-4xl mx-auto">
          <span className="bg-gold text-dark text-xs font-semibold px-3 py-1 tracking-wide mb-4 inline-block">
            {story.category}
          </span>
          <h1 className="font-serif text-4xl md:text-6xl text-warm-white">{story.couple}</h1>
          <div className="flex flex-wrap items-center gap-6 mt-3 text-warm-white/70 text-sm">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4" />
              {story.venue}, {story.city}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {new Date(story.date).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
            </span>
          </div>
        </div>
      </div>

      {/* Story */}
      <section className="py-16 px-6 bg-cream">
        <div className="max-w-4xl mx-auto">
          <Link href="/portfolio" className="inline-flex items-center gap-2 text-warm-gray hover:text-gold text-sm font-medium mb-10 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to all stories
          </Link>
          <p className="font-serif text-xl text-dark-muted leading-relaxed max-w-2xl">
            {story.narrative}
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="pb-20 px-6 bg-cream">
        <div className="max-w-7xl mx-auto">
          <StoryGallery photos={story.photos} />
        </div>
      </section>

      <CTABanner />
    </>
  )
}
