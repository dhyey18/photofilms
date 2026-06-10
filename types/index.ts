export interface Service {
  id: string
  slug: string
  title: string
  description: string
  longDescription: string
  icon: string
  category: 'photo' | 'video' | 'specialty'
  heroImage: string
  videoUrl?: string
  features: string[]
}

export interface Photo {
  src: string
  alt: string
  width: number
  height: number
}

export type StoryCategory = 'Wedding' | 'Pre-Wedding' | 'Drone' | 'Film'

export interface StorySection {
  image: string
  quote: string
  quoteAuthor: string
}

export interface WeddingStory {
  slug: string
  couple: string
  venue: string
  city: string
  location?: string
  date: string
  category: StoryCategory
  coverImage: string
  photos: Photo[]
  narrative: string
  services: string[]
  tags?: string[]
  storySections?: StorySection[]
  filmStripImage?: string
  videoUrl?: string
}

export interface Testimonial {
  id: string
  name: string
  rating: 1 | 2 | 3 | 4 | 5
  date: string
  venue: string
  city: string
  review: string
  avatar?: string
}

export type FAQCategory = 'general' | 'booking' | 'delivery' | 'pricing'

export interface FAQ {
  id: string
  question: string
  answer: string
  category: FAQCategory
}

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  coverImage: string
  publishedAt: string
  readingTime: number
  tags: string[]
  author: string
}

export interface PricingTier {
  id: string
  name: string
  tagline: string
  startingFrom: number
  currency: 'INR'
  popular: boolean
  includes: string[]
  deliverables: string[]
  cta: string
}
