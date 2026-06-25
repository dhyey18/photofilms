import type { Metadata } from 'next'
import CTABanner from '@/components/home/CTABanner'
import PreWeddingGallery from '@/components/portfolio/PreWeddingGallery'

export const metadata: Metadata = {
  title: 'Pre-Wedding Gallery — Photofilms',
  description:
    'Browse our pre-wedding photography portfolio — intimate, cinematic love stories captured across stunning locations across India.',
}

const BASE = '/prewedding-20260619T072911Z-3-001/prewedding'

const IMAGES = [
  '068A9775',
  'IshaKush-093',
  '068A4118-2',
  'NR-40',
  'IshaKush-097',
  '074A1436',
  '068A3416',
  '068A3431',
  '1W7A8565',
  '074A1408',
  '068A1000',
  '068A0347',
  '002',
  '1W7A8136',
  '068A0387',
  '068A0038',
  '068A9781',
  '068A4090',
  '068A0705',
  '1W7A5434',
  'NR-43',
  '3Y8A1210',
  '068A9997',
  '068A1162',
  '068A9640',
  '1W7A4943',
  '074A8702',
  '068A0044',
  '1W7A5362',
  '068A0388',
  '068A8680',
  '_H3A4305',
  '074A4284',
  '_H3A4500',
  '074A8311-',
  '1W7A5411',
  '1W7A6485',
  '074A9473',
  '074A3514',
  '074A4473',
  'f131d9154295517.633f367453ad4',
  '074A0773',
  '1W7A6487',
  '068A0112',
].map((f) => ({ src: `${BASE}/${f}.jpg`, alt: `Pre-wedding photograph ${f}` }))

export default function PreWeddingPage() {
  return (
    <>
      <PreWeddingGallery photos={IMAGES} />
      <CTABanner />
    </>
  )
}
