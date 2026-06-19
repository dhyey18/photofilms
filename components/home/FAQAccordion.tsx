'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { Dancing_Script } from 'next/font/google'
import { faqs } from '@/data/faq'
import ScrollReveal from '@/components/ui/ScrollReveal'
import Link from 'next/link'

const script = Dancing_Script({ subsets: ['latin'], weight: ['700'], display: 'swap' })

export default function FAQAccordion({ showAll = false }: { showAll?: boolean }) {
  const [open, setOpen] = useState<string | null>(null)
  const displayed = showAll ? faqs : faqs.filter((f) => f.category === 'general' || f.category === 'booking').slice(0, 5)

  return (
    <section className="py-20 md:py-28 px-6 bg-[#faf8f5] border-t border-dark/[0.06]">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-14">
            <h2 className={`${script.className} text-4xl md:text-5xl text-dark/60 mb-4`}>
              Questions &amp; Answers
            </h2>
            <p className="font-serif text-2xl md:text-3xl text-dark">
              We&apos;ve got <em className="italic text-gold">answers</em>
            </p>
            <p className="mt-4 text-dark/40 text-base max-w-sm mx-auto leading-relaxed">
              Everything you need to know about booking, pricing, and what to expect.
            </p>
          </div>
        </ScrollReveal>

        {/* Accordion items */}
        <div className="divide-y divide-dark/[0.06]">
          {displayed.map((faq, i) => (
            <ScrollReveal key={faq.id} delay={i * 0.04}>
              <div>
                <button
                  onClick={() => setOpen(open === faq.id ? null : faq.id)}
                  className="w-full flex items-center justify-between py-5 text-left gap-5 group"
                  aria-expanded={open === faq.id}
                >
                  <span className="font-serif text-base md:text-lg text-dark/75 leading-snug group-hover:text-dark transition-colors duration-200">
                    {faq.question}
                  </span>
                  <motion.span
                    animate={{ rotate: open === faq.id ? 180 : 0 }}
                    transition={{ duration: 0.22 }}
                    className={`shrink-0 transition-colors duration-200 ${open === faq.id ? 'text-gold' : 'text-dark/25 group-hover:text-gold'}`}
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
                      transition={{ duration: 0.28, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="pb-6 flex gap-5">
                        <div className="w-px bg-gold/40 shrink-0 self-stretch" />
                        <p className="text-dark/50 text-sm leading-[1.85]">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {!showAll && (
          <div className="text-center mt-12">
            <Link
              href="/faq"
              className="inline-flex items-center gap-3 border border-dark/20 text-dark/55 hover:border-dark hover:text-dark font-semibold px-7 py-3 text-[11px] tracking-[0.22em] uppercase transition-all duration-300"
            >
              View All FAQs
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
