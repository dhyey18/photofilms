import type { Metadata } from 'next'
import ScrollReveal from '@/components/ui/ScrollReveal'
import FAQAccordion from '@/components/home/FAQAccordion'
import CTABanner from '@/components/home/CTABanner'

export const metadata: Metadata = {
  title: 'FAQ — Common Questions Answered',
  description:
    'Find answers to the most common questions about Photofilms — booking, pricing, delivery timelines, travel, payment plans, and more.',
}

export default function FAQPage() {
  return (
    <>
      {/* ── Header ──────────────────────────────────────── */}
      <div className="bg-[#faf8f5] pt-36 pb-20 px-6 relative overflow-hidden border-b border-dark/[0.06]">
        <span
          aria-hidden
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none font-serif font-bold leading-none"
          style={{ fontSize: 'clamp(60px, 14vw, 200px)', color: 'rgba(26,22,20,0.026)' }}
        >
          FAQ
        </span>
        <div className="max-w-3xl mx-auto relative text-center">
          <ScrollReveal>
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="w-10 h-px bg-gold/60" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-gold">Got Questions?</p>
              <span className="w-10 h-px bg-gold/60" />
            </div>
            <h1 className="font-serif text-5xl md:text-6xl text-dark leading-[1.06]">
              We&apos;ve got{' '}
              <em className="not-italic text-gold">answers</em>
            </h1>
            <p className="mt-6 text-dark/45 text-lg max-w-md mx-auto leading-relaxed">
              Everything you need to know before booking. Can&apos;t find what you&apos;re looking for? Just WhatsApp us.
            </p>
          </ScrollReveal>
        </div>
      </div>

      <FAQAccordion showAll />

      <CTABanner />
    </>
  )
}
