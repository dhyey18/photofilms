const items = [
  '★ Best Wedding Photographer — Gujarat 2023',
  'Featured in Vogue India Wedding Edition',
  '500+ Happy Couples',
  'WeddingWire Certified 2024',
  'Destination Weddings · India · Thailand · Dubai',
  '★ Award-Winning Cinematography',
  '50+ Cities Across India',
  '10 Years of Excellence',
  'Trusted by 2000+ Families',
]

export default function MarqueeStrip() {
  const all = [...items, ...items]

  return (
    <div className="bg-[#f0ede7] border-y border-dark/[0.06] py-3.5 overflow-hidden select-none">
      <div
        className="flex whitespace-nowrap"
        style={{ animation: 'marquee 40s linear infinite' }}
      >
        {all.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-4 px-6 text-dark/40 text-xs font-medium tracking-[0.12em] uppercase"
          >
            {item}
            <span className="text-gold opacity-60">◆</span>
          </span>
        ))}
      </div>
    </div>
  )
}
