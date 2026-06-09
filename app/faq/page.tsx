import type { Metadata } from 'next'
import SectionHeader from '@/components/ui/SectionHeader'
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
      <div className="bg-dark pt-32 pb-20 px-6 text-center">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Got Questions?"
            title="We've got answers"
            subtitle="Everything you need to know before booking. Can't find what you're looking for? Just WhatsApp us."
            centered
            light
          />
        </ScrollReveal>
      </div>

      <FAQAccordion showAll />

      <CTABanner />
    </>
  )
}
