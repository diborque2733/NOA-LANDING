import Link from 'next/link'
import { cn } from '@/lib/cn'

interface ButtonProps {
  href?: string
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  className?: string
  type?: 'button' | 'submit'
  disabled?: boolean
  onClick?: () => void
}

const baseStyles =
  'inline-flex items-center justify-center font-[var(--font-body)] font-medium rounded-full transition-all duration-300 whitespace-nowrap'

const variantStyles = {
  primary:
    'bg-[var(--color-primary)] text-[var(--color-on-primary)] hover:bg-[var(--color-surface-tint)]',
  secondary:
    'bg-transparent text-[var(--color-primary)] ghost-border hover:bg-[var(--color-surface-container)]',
  ghost:
    'bg-transparent text-[var(--color-on-surface)] hover:bg-[var(--color-surface-container)]',
}

const sizeStyles = {
  sm: 'px-5 py-2 text-sm',
  md: 'px-7 py-3 text-base',
  lg: 'px-9 py-4 text-base',
}

export function Button({
  href,
  variant = 'primary',
  size = 'md',
  children,
  className,
  type = 'button',
  disabled,
  onClick,
}: ButtonProps) {
  const classes = cn(baseStyles, variantStyles[variant], sizeStyles[size], disabled && 'opacity-50 cursor-not-allowed', className)

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} disabled={disabled} onClick={onClick} className={classes}>
      {children}
    </button>
  )
}
