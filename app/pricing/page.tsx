import type { Metadata } from 'next'
import Link from 'next/link'
import { Check, Star } from 'lucide-react'
import { pricingTiers } from '@/data/pricing'
import SectionHeader from '@/components/ui/SectionHeader'
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
      <div className="bg-dark pt-32 pb-20 px-6 text-center">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Investment"
            title="Transparent pricing, no surprises"
            subtitle="All packages can be customised to fit your wedding perfectly. Reach out for a bespoke quote."
            centered
            light
          />
        </ScrollReveal>
      </div>

      <section className="py-20 px-6 bg-cream">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {pricingTiers.map((tier, i) => (
              <ScrollReveal key={tier.id} delay={i * 0.1}>
                <div
                  className={`relative bg-warm-white border-2 p-8 ${
                    tier.popular
                      ? 'border-gold shadow-xl shadow-gold/10'
                      : 'border-border'
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-gold text-dark text-xs font-bold px-4 py-1.5 tracking-wider flex items-center gap-1.5">
                        <Star className="w-3.5 h-3.5 fill-dark" />
                        MOST POPULAR
                      </span>
                    </div>
                  )}

                  <div className="mb-6">
                    <h3 className="font-serif text-2xl text-dark">{tier.name}</h3>
                    <p className="text-warm-gray text-sm mt-1 leading-snug">{tier.tagline}</p>
                  </div>

                  <div className="mb-6 pb-6 border-b border-border">
                    <p className="text-xs uppercase tracking-widest text-warm-gray mb-1">Starting from</p>
                    <p className="font-serif text-4xl text-dark font-bold">{formatINR(tier.startingFrom)}</p>
                  </div>

                  <div className="space-y-2 mb-8">
                    <p className="text-xs font-semibold uppercase tracking-widest text-warm-gray mb-3">What&apos;s Included</p>
                    {tier.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-dark-muted list-none">
                        <Check className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </div>

                  <div className="space-y-2 mb-8 pt-6 border-t border-border">
                    <p className="text-xs font-semibold uppercase tracking-widest text-warm-gray mb-3">Deliverables</p>
                    {tier.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-dark-muted list-none">
                        <Check className="w-4 h-4 text-gold-dark shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className={`block w-full text-center font-semibold py-3.5 text-sm tracking-wide transition-colors duration-200 ${
                      tier.popular
                        ? 'bg-gold text-dark hover:bg-gold-dark'
                        : 'border-2 border-dark text-dark hover:bg-dark hover:text-warm-white'
                    }`}
                  >
                    {tier.cta}
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.3}>
            <div className="mt-16 bg-surface border border-border p-8 text-center max-w-2xl mx-auto">
              <h3 className="font-serif text-2xl text-dark mb-3">Need something custom?</h3>
              <p className="text-warm-gray text-sm leading-relaxed mb-6">
                Multi-day weddings, destination events, corporate packages — we create bespoke quotes for every unique celebration. No obligation.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-gold text-dark font-semibold px-8 py-3.5 text-sm tracking-wide hover:bg-gold-dark transition-colors"
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
