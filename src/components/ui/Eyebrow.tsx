import { cn } from '@/lib/cn'

interface EyebrowProps {
  children: React.ReactNode
  className?: string
  as?: 'span' | 'p' | 'div'
  /** Optional leading bullet — pass a CSS color or token (e.g. var(--color-noa-green)). */
  dot?: string
}

/**
 * Mono uppercase eyebrow.
 * Default: text-xs (12px), tracking-wider via inline letter-spacing 0.12em, opacity-70.
 * Override `as` for semantic elements; pass `dot` for a leading status bullet.
 */
export function Eyebrow({ children, className, as: Tag = 'span', dot }: EyebrowProps) {
  return (
    <Tag
      className={cn(
        'inline-flex items-center gap-2 uppercase text-xs tracking-wider opacity-70',
        className
      )}
      style={{ fontFamily: 'var(--font-mono)', letterSpacing: '0.12em' }}
    >
      {dot !== undefined && (
        <span
          className="size-1.5 rounded-full shrink-0 inline-block"
          style={{ background: dot }}
          aria-hidden
        />
      )}
      {children}
    </Tag>
  )
}
