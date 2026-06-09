import Link from 'next/link'
import { Camera, Users, Play, MapPin, Phone, Mail } from 'lucide-react'

const quickLinks = [
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/about', label: 'About Us' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="bg-dark text-warm-white/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="font-serif text-2xl font-bold text-warm-white">
              photo<span className="text-gold">films</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-warm-white/60 max-w-xs">
              Luxury wedding photography and cinematography based in Vadodara, Gujarat. Capturing love stories across India.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="https://www.instagram.com/photofilms_/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-gold transition-colors">
                <Camera className="w-5 h-5" />
              </a>
              <a href="https://facebook.com/photofilms" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-gold transition-colors">
                <Users className="w-5 h-5" />
              </a>
              <a href="https://youtube.com/@photofilms" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-gold transition-colors">
                <Play className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-warm-white font-semibold text-sm uppercase tracking-widest mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-gold transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-warm-white font-semibold text-sm uppercase tracking-widest mb-6">Get in Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <span>Vadodara, Gujarat, India</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <a href="tel:+918849323139" className="hover:text-gold transition-colors">+91 88493 23139</a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <a href="mailto:hello@photofilms.in" className="hover:text-gold transition-colors">hello@photofilms.in</a>
              </li>
            </ul>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-block border border-gold text-gold text-sm font-semibold px-5 py-2.5 tracking-wide hover:bg-gold hover:text-dark transition-colors duration-200"
              >
                Book a Consultation
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-warm-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-warm-white/40">
          <p>© {new Date().getFullYear()} Photofilms. All rights reserved.</p>
          <p>Crafted with love in Vadodara, Gujarat</p>
        </div>
      </div>
    </footer>
  )
}
