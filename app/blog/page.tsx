import type { Metadata } from 'next'
import { blogPosts } from '@/data/blog'
import BlogCard from '@/components/blog/BlogCard'
import SectionHeader from '@/components/ui/SectionHeader'
import ScrollReveal from '@/components/ui/ScrollReveal'
import CTABanner from '@/components/home/CTABanner'

export const metadata: Metadata = {
  title: 'Blog — Wedding Photography Tips & Venue Guides',
  description:
    'Wedding photography tips, venue guides, and behind-the-scenes stories from Photofilms — Vadodara\'s leading wedding photography studio.',
}

export default function BlogPage() {
  return (
    <>
      <div className="bg-dark pt-32 pb-20 px-6 text-center">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Stories & Guides"
            title="From our lens to your heart"
            subtitle="Tips, inspiration, and venue guides to help you plan the perfect wedding photography experience."
            centered
            light
          />
        </ScrollReveal>
      </div>

      <section className="py-20 px-6 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <ScrollReveal key={post.slug} delay={i * 0.1}>
                <BlogCard post={post} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
