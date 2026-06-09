import AnimatedCounter from '@/components/ui/AnimatedCounter'

export default function SocialProof() {
  return (
    <section className="bg-dark py-16 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
        <AnimatedCounter target={500} suffix="+" label="Happy Couples" />
        <AnimatedCounter target={12} suffix="+" label="Years of Experience" />
        <AnimatedCounter target={50} suffix="+" label="Cities Covered" />
        <AnimatedCounter target={2000} suffix="+" label="Wedding Days" />
      </div>
    </section>
  )
}
