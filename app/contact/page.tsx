import type { Metadata } from 'next'
import { MessageCircle, Phone, Mail, MapPin, Clock } from 'lucide-react'
import ContactForm from '@/components/contact/ContactForm'
import SectionHeader from '@/components/ui/SectionHeader'
import ScrollReveal from '@/components/ui/ScrollReveal'

export const metadata: Metadata = {
  title: 'Contact — Book Your Date',
  description:
    'Get in touch with Photofilms to book your wedding photography date, check availability, or ask about packages. Based in Vadodara, Gujarat.',
}

interface Props {
  searchParams: Promise<{ service?: string }>
}

const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '918866008868'
const waMessage = encodeURIComponent("Hi! I'd like to inquire about booking Photofilms for my wedding.")
const waHref = `https://wa.me/${number}?text=${waMessage}`

export default async function ContactPage({ searchParams }: Props) {
  const { service } = await searchParams

  return (
    <>
      <div className="bg-dark pt-32 pb-20 px-6 text-center">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Let's Connect"
            title="Start your love story with us"
            subtitle="Fill in the form below or reach out directly — we respond to all enquiries within 24 hours."
            centered
            light
          />
        </ScrollReveal>
      </div>

      <section className="py-20 px-6 bg-cream">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Contact info sidebar */}
          <div className="space-y-10">
            <ScrollReveal delay={0.1}>
              <div>
                <h3 className="font-serif text-xl text-dark mb-6">Get in Touch</h3>
                <ul className="space-y-5">
                  <li className="flex items-start gap-3 text-sm">
                    <Phone className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium text-dark">Phone / WhatsApp</p>
                      <a href="tel:+918866008868" className="text-warm-gray hover:text-gold transition-colors">+91 88660 08868</a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-sm">
                    <Mail className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium text-dark">Email</p>
                      <a href="mailto:hello@photofilms.in" className="text-warm-gray hover:text-gold transition-colors">hello@photofilms.in</a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-sm">
                    <MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium text-dark">Studio</p>
                      <p className="text-warm-gray">Vadodara, Gujarat, India</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-sm">
                    <Clock className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium text-dark">Response Time</p>
                      <p className="text-warm-gray">Within 24 hours</p>
                    </div>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 font-semibold text-sm tracking-wide text-warm-white transition-colors duration-200"
                style={{ backgroundColor: '#25D366' }}
              >
                <MessageCircle className="w-5 h-5" />
                Quick WhatsApp Inquiry
              </a>
            </ScrollReveal>

            {/* Map */}
            <ScrollReveal delay={0.3}>
              <div className="overflow-hidden border border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118374.70272754395!2d73.08120365!3d22.3071588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc8ab91a3ddab%3A0xac39d3bfe1473fb8!2sVadodara%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1699000000000"
                  width="100%"
                  height="240"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Photofilms studio location in Vadodara, Gujarat"
                />
              </div>
            </ScrollReveal>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <ScrollReveal delay={0.1}>
              <div className="bg-warm-white border border-border p-8">
                <h3 className="font-serif text-2xl text-dark mb-2">Send an Enquiry</h3>
                <p className="text-warm-gray text-sm mb-8">
                  Tell us about your wedding vision and we&apos;ll get back to you with availability and package options.
                </p>
                <ContactForm defaultService={service} />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  )
}
