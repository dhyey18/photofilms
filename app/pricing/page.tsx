import type { Metadata } from 'next'
import Link from 'next/link'
import { Check, Star } from 'lucide-react'
import { pricingTiers } from '@/data/pricing'
import ScrollReveal from '@/components/ui/ScrollReveal'
import CTABanner from '@/components/home/CTABanner'

export const metadata: Metadata = {
  title: 'Pricing — Wedding Photography Packages',
  description:
    'Transparent wedding photography and cinematography pricing from Photofilms, Vadodara. Packages starting from ₹75,000. Custom quotes available.',
}

const formatINR = (n: number) =>
  new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n)

export default function PricingPage() {
  return (
    <>
      {/* ── Header ──────────────────────────────────────── */}
      <div className="bg-[#faf8f5] pt-36 pb-20 px-6 relative overflow-hidden border-b border-dark/[0.06]">
        <span
          aria-hidden
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none font-serif font-bold leading-none"
          style={{ fontSize: 'clamp(50px, 12vw, 180px)', color: 'rgba(26,22,20,0.026)' }}
        >
          PRICING
        </span>
        <div className="max-w-3xl mx-auto relative text-center">
          <ScrollReveal>
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="w-10 h-px bg-gold/60" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-gold">Investment</p>
              <span className="w-10 h-px bg-gold/60" />
            </div>
            <h1 className="font-serif text-5xl md:text-6xl text-dark leading-[1.06]">
              Transparent pricing,{' '}
              <em className="not-italic text-gold">no surprises</em>
            </h1>
            <p className="mt-6 text-dark/45 text-lg max-w-md mx-auto leading-relaxed">
              All packages can be customised to fit your wedding perfectly. Reach out for a bespoke quote.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* ── Pricing cards ───────────────────────────────── */}
      <section className="bg-[#faf8f5] py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-start">
            {pricingTiers.map((tier, i) => (
              <ScrollReveal key={tier.id} delay={i * 0.1}>
                <div
                  className={`relative bg-white border p-8 shadow-[0_4px_32px_rgba(0,0,0,0.06)] ${
                    tier.popular ? 'border-gold shadow-[0_8px_48px_rgba(201,168,76,0.12)]' : 'border-dark/[0.08]'
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-gold text-dark text-xs font-bold px-4 py-1.5 tracking-wider flex items-center gap-1.5">
                        <Star className="w-3.5 h-3.5 fill-dark" /> MOST POPULAR
                      </span>
                    </div>
                  )}

                  <div className="mb-6">
                    <h3 className="font-serif text-2xl text-dark">{tier.name}</h3>
                    <p className="text-dark/40 text-sm mt-1 leading-snug">{tier.tagline}</p>
                  </div>

                  <div className="mb-6 pb-6 border-b border-dark/[0.07]">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-dark/35 mb-1 font-semibold">Starting from</p>
                    <p className="font-serif text-4xl text-dark">{formatINR(tier.startingFrom)}</p>
                  </div>

                  <div className="space-y-2 mb-8">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-dark/35 mb-3">What&apos;s Included</p>
                    {tier.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-dark/55 list-none">
                        <Check className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </div>

                  <div className="space-y-2 mb-8 pt-6 border-t border-dark/[0.07]">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-dark/35 mb-3">Deliverables</p>
                    {tier.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-dark/55 list-none">
                        <Check className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className={`block w-full text-center font-semibold py-3.5 text-sm tracking-wide transition-all duration-200 ${
                      tier.popular
                        ? 'bg-gold text-dark hover:bg-gold/90'
                        : 'border border-dark/25 text-dark hover:bg-dark hover:text-warm-white'
                    }`}
                  >
                    {tier.cta}
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Custom quote */}
          <ScrollReveal delay={0.3}>
            <div className="mt-16 bg-white border border-dark/[0.07] p-10 text-center max-w-2xl mx-auto shadow-[0_4px_24px_rgba(0,0,0,0.05)]">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="w-8 h-px bg-gold/55" />
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-gold">Custom</p>
                <span className="w-8 h-px bg-gold/55" />
              </div>
              <h3 className="font-serif text-2xl text-dark mb-3">Need something custom?</h3>
              <p className="text-dark/45 text-sm leading-relaxed mb-7">
                Multi-day weddings, destination events, corporate packages — we create bespoke quotes for every unique celebration. No obligation.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-gold text-dark font-semibold px-8 py-3.5 text-sm tracking-wide hover:bg-gold/90 transition-colors"
              >
                Request a Custom Quote
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
