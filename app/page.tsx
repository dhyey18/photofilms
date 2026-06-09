import type { Metadata } from 'next'
import Hero from '@/components/home/Hero'
import SocialProof from '@/components/home/SocialProof'
import ServicesPreview from '@/components/home/ServicesPreview'
import PortfolioPreview from '@/components/home/PortfolioPreview'
import TestimonialsCarousel from '@/components/home/TestimonialsCarousel'
import InstagramFeed from '@/components/home/InstagramFeed'
import FAQAccordion from '@/components/home/FAQAccordion'
import CTABanner from '@/components/home/CTABanner'

export const metadata: Metadata = {
  title: 'Photofilms — Luxury Wedding Photography & Cinematography in Vadodara, Gujarat',
  description:
    "Photofilms is Vadodara's award-winning wedding photography and cinematography studio. Capturing timeless love stories across Gujarat and India with editorial artistry.",
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://photofilms.in',
  name: 'Photofilms',
  description: 'Luxury wedding photography and cinematography studio based in Vadodara, Gujarat.',
  url: 'https://photofilms.in',
  telephone: '+919876543210',
  email: 'hello@photofilms.in',
  image: 'https://photofilms.in/images/slider/01.webp',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Vadodara',
    addressRegion: 'Gujarat',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 22.3072,
    longitude: 73.1812,
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '10',
    bestRating: '5',
    worstRating: '1',
  },
  priceRange: '₹₹₹',
  sameAs: [
    'https://instagram.com/photofilms',
    'https://facebook.com/photofilms',
    'https://youtube.com/@photofilms',
  ],
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
      />
      <Hero />
      <SocialProof />
      <ServicesPreview />
      <PortfolioPreview />
      <TestimonialsCarousel />
      <InstagramFeed />
      <FAQAccordion />
      <CTABanner />
    </>
  )
}
