interface SectionHeaderProps {
  eyebrow?: string
  title: string
  subtitle?: string
  centered?: boolean
  light?: boolean
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  centered = false,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      {eyebrow && (
        <div className={`mb-5 ${centered ? 'flex flex-col items-center' : 'inline-flex flex-col'}`}>
          <p
            className={`text-[11px] font-semibold uppercase tracking-[0.28em] ${
              light ? 'text-gold-light' : 'text-gold'
            }`}
          >
            {eyebrow}
          </p>
          {/* Decorative rule — grows left-to-right for a reveal feel */}
          <span
            className={`mt-2 block h-px w-10 ${light ? 'bg-gold-light/50' : 'bg-gold/50'}`}
          />
        </div>
      )}
      <h2
        className={`font-serif text-4xl md:text-5xl leading-[1.12] ${
          light ? 'text-warm-white' : 'text-dark'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-lg leading-relaxed max-w-2xl ${
            centered ? 'mx-auto' : ''
          } ${light ? 'text-warm-white/65' : 'text-warm-gray'}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
