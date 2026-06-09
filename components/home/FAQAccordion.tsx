'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { faqs } from '@/data/faq'
import SectionHeader from '@/components/ui/SectionHeader'
import ScrollReveal from '@/components/ui/ScrollReveal'
import Link from 'next/link'

export default function FAQAccordion({ showAll = false }: { showAll?: boolean }) {
  const [open, setOpen] = useState<string | null>(null)
  const displayed = showAll ? faqs : faqs.filter((f) => f.category === 'general' || f.category === 'booking').slice(0, 5)

  return (
    <section className="py-24 px-6 bg-surface">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <SectionHeader
            eyebrow="FAQ"
            title="Questions we hear most"
            subtitle="Everything you need to know about booking, pricing, and what to expect."
            centered
          />
        </ScrollReveal>

        <div className="space-y-2 mt-4">
          {displayed.map((faq, i) => (
            <ScrollReveal key={faq.id} delay={i * 0.05}>
              <div className="bg-warm-white border border-border">
                <button
                  onClick={() => setOpen(open === faq.id ? null : faq.id)}
                  className="w-full flex items-center justify-between p-6 text-left gap-4"
                  aria-expanded={open === faq.id}
                >
                  <span className="font-medium text-dark text-sm md:text-base leading-snug">
                    {faq.question}
                  </span>
                  <motion.span
                    animate={{ rotate: open === faq.id ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="shrink-0 text-gold"
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {open === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-sm text-warm-gray leading-relaxed border-t border-border pt-4">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {!showAll && (
          <div className="text-center mt-10">
            <Link
              href="/faq"
              className="inline-block border-2 border-dark text-dark font-semibold px-6 py-3 text-sm tracking-wide hover:bg-dark hover:text-warm-white transition-colors duration-200"
            >
              View All FAQs
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
