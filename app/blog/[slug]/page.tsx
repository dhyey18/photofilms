import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Clock, ArrowLeft, ArrowRight, Calendar } from 'lucide-react'
import { blogPosts } from '@/data/blog'
import type { BlogPost } from '@/types'
import CTABanner from '@/components/home/CTABanner'
import ScrollReveal from '@/components/ui/ScrollReveal'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      type: 'article',
      publishedTime: post.publishedAt,
      images: [{ url: post.coverImage, width: 1200, height: 800 }],
    },
  }
}

/* ── Article body ────────────────────────────────────────── */
function ArticleBody({ content }: { content: string }) {
  const blocks = content.split('\n\n')
  return (
    <div className="space-y-0">
      {blocks.map((block, i) => {
        const trimmed = block.trim()
        if (!trimmed) return null
        const lines = trimmed.split('\n')
        const headingMatch = lines[0].match(/^\*\*(.+)\*\*$/)
        if (headingMatch) {
          const heading = headingMatch[1]
          const body = lines.slice(1).join(' ').trim()
          return (
            <div key={i} className="pt-12">
              <div className="flex items-center gap-4 mb-5">
                <span className="w-5 h-px bg-gold/45 shrink-0" />
                <h2 className="font-serif text-[1.55rem] md:text-[1.75rem] text-dark leading-snug">
                  {heading}
                </h2>
              </div>
              {body && <p className="text-dark/58 text-[1.05rem] leading-[1.95] pl-9">{body}</p>}
            </div>
          )
        }
        if (i === 0) {
          return (
            <p key={i} className="text-dark/75 text-[1.15rem] md:text-[1.2rem] leading-[1.9] font-medium">
              {trimmed}
            </p>
          )
        }
        const html = trimmed.replace(/\*\*(.*?)\*\*/g, '<strong class="text-dark font-semibold">$1</strong>')
        return (
          <p key={i} className="text-dark/55 text-[1.05rem] leading-[1.95] pt-5" dangerouslySetInnerHTML={{ __html: html }} />
        )
      })}
    </div>
  )
}

/* ── Related card — light theme ──────────────────────────── */
function RelatedCard({ post, index }: { post: BlogPost; index: number }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <div className="relative overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.07)]" style={{ aspectRatio: '16/9' }}>
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-out"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <span
          aria-hidden
          className="absolute top-3 left-4 font-serif font-bold leading-none text-warm-white/18 select-none"
          style={{ fontSize: 'clamp(36px, 5vw, 56px)' }}
        >
          {String(index + 1).padStart(2, '0')}
        </span>
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
      </div>

      <div className="pt-4">
        <div className="flex flex-wrap gap-1.5 mb-3">
          {post.tags.slice(0, 2).map((tag) => (
            <span key={tag} className="text-[9px] font-semibold uppercase tracking-[0.2em] text-gold">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="font-serif text-[1.15rem] text-dark leading-snug group-hover:text-gold transition-colors duration-300">
          {post.title}
        </h3>
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-dark/[0.07]">
          <span className="inline-flex items-center gap-1.5 text-gold text-[11px] font-semibold uppercase tracking-[0.2em] group-hover:gap-3 transition-all duration-300">
            Read <ArrowRight className="w-3 h-3" />
          </span>
          <span className="flex items-center gap-1.5 text-dark/28 text-xs">
            <Clock className="w-3 h-3" />{post.readingTime} min
          </span>
        </div>
      </div>
    </Link>
  )
}

/* ── Page ────────────────────────────────────────────────── */
export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) notFound()

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3)
  const postIndex = blogPosts.findIndex((p) => p.slug === post.slug)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: post.coverImage,
    datePublished: post.publishedAt,
    author: { '@type': 'Organization', name: post.author },
    publisher: { '@type': 'Organization', name: 'Photofilms', url: 'https://photofilms.in' },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />

      {/* ── Editorial header ─────────────────────────────── */}
      <div className="bg-[#faf8f5] pt-32 pb-0 px-6 border-b border-dark/[0.06]">
        <div className="max-w-4xl mx-auto">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-dark/35 hover:text-gold text-xs font-semibold uppercase tracking-[0.18em] transition-colors duration-200 mb-10"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> The Journal
          </Link>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-7">
            {post.tags.map((tag) => (
              <span key={tag} className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold border border-gold/35 px-3 py-1.5">
                {tag}
              </span>
            ))}
          </div>

          {/* Issue number + title */}
          <div className="flex items-start gap-6">
            <span
              aria-hidden
              className="font-serif font-bold leading-none text-dark/[0.05] shrink-0 hidden md:block"
              style={{ fontSize: 'clamp(56px, 8vw, 96px)' }}
            >
              {String(postIndex + 1).padStart(2, '0')}
            </span>
            <div>
              <h1 className="font-serif text-3xl md:text-5xl lg:text-[3.2rem] text-dark leading-[1.1]">
                {post.title}
              </h1>
              <div className="flex items-center gap-4 mt-6 mb-12">
                <span className="w-8 h-px bg-gold/50" />
                <div className="flex items-center flex-wrap gap-5 text-dark/35 text-xs font-semibold uppercase tracking-[0.15em]">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-gold/55" />
                    {new Date(post.publishedAt).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-gold/55" />{post.readingTime} min read
                  </span>
                  <span>{post.author}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cover image — full width, below header text */}
        <div className="max-w-5xl mx-auto">
          <div
            className="relative overflow-hidden shadow-[0_16px_60px_rgba(0,0,0,0.12)]"
            style={{ aspectRatio: '16/9' }}
          >
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            {/* Gold corner accents */}
            <div className="absolute top-5 right-5 w-9 h-9 pointer-events-none">
              <div className="absolute top-0 right-0 w-full h-px bg-gold/50" />
              <div className="absolute top-0 right-0 h-full w-px bg-gold/50" />
            </div>
          </div>
        </div>
      </div>

      {/* ── Article body ─────────────────────────────────── */}
      <section className="bg-[#faf8f5] py-20 px-6">
        <div className="max-w-[720px] mx-auto">
          {/* Pull-quote */}
          <ScrollReveal>
            <blockquote className="relative border-l-2 border-gold/50 pl-7 mb-16">
              <span aria-hidden className="absolute -top-2 -left-1 font-serif text-[5rem] leading-none text-gold/10 select-none">
                &ldquo;
              </span>
              <p className="font-serif text-xl md:text-2xl text-dark/65 leading-[1.65] italic">
                {post.excerpt}
              </p>
            </blockquote>
          </ScrollReveal>

          <ScrollReveal>
            <ArticleBody content={post.content} />
          </ScrollReveal>

          {/* Footer */}
          <div className="mt-16 pt-10 border-t border-dark/[0.08] flex items-center justify-between flex-wrap gap-4">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-dark/38 hover:text-gold text-xs font-semibold uppercase tracking-[0.18em] transition-colors duration-200"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Journal
            </Link>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="text-[9px] font-semibold uppercase tracking-[0.2em] text-dark/32 border border-dark/10 px-3 py-1">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Related articles ─────────────────────────────── */}
      {related.length > 0 && (
        <section className="bg-white border-t border-dark/[0.06] py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-14">
                <span className="w-6 h-px bg-gold/55" />
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-gold">Continue Reading</p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
              {related.map((p, i) => (
                <ScrollReveal key={p.slug} delay={i * 0.1}>
                  <RelatedCard post={p} index={i} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABanner />
    </>
  )
}
