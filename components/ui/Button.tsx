import Link from 'next/link'
import type { ComponentPropsWithoutRef } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

interface BaseProps {
  variant?: Variant
  size?: Size
  className?: string
}

type ButtonProps = BaseProps &
  (
    | ({ href: string } & Omit<ComponentPropsWithoutRef<typeof Link>, 'href' | 'className'>)
    | ({ href?: undefined } & Omit<ComponentPropsWithoutRef<'button'>, 'className'>)
  )

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-gold text-dark font-semibold hover:bg-gold-dark transition-colors duration-200',
  secondary:
    'border-2 border-gold text-gold font-semibold hover:bg-gold hover:text-dark transition-colors duration-200',
  ghost:
    'text-warm-gray hover:text-dark underline underline-offset-4 font-medium transition-colors duration-200',
}

const sizeClasses: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

export default function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-none tracking-wide ${variantClasses[variant]} ${sizeClasses[size]} ${className}`

  if ('href' in props && props.href) {
    const { href, ...rest } = props
    return (
      <Link href={href} className={classes} {...rest} />
    )
  }

  const { ...rest } = props as Omit<ComponentPropsWithoutRef<'button'>, 'className'>
  return <button className={classes} {...rest} />
}
