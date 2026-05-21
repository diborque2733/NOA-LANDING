import { cn } from '@/lib/cn'

interface SectionHeaderProps {
  eyebrow: string
  /** Full headline. Wrap emphatic tokens in <em>. */
  headline: string | React.ReactNode
  subline?: string
  align?: 'left' | 'center'
  className?: string
  /** Hide eyebrow dot pulse (defaults to true on cream sections). */
  noDot?: boolean
}

/**
 * Section header en el patrón Industrial Atelier:
 * - Eyebrow: DM Mono uppercase copper + tracking 0.15em
 * - Headline: Cormorant 300 con italic copper en emphasis tokens
 * - Subline: Manrope 300 gris secondary
 */
export function SectionHeader({
  eyebrow,
  headline,
  subline,
  align = 'left',
  className,
  noDot,
}: SectionHeaderProps) {
  return (
    <header
      className={cn(
        'mb-16 md:mb-20 max-w-4xl',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      <p
        className="eyebrow flex items-center gap-3 mb-5"
        style={{
          color: 'var(--color-tertiary)',
          letterSpacing: '0.15em',
        }}
      >
        {!noDot && <span className="copper-pulse" aria-hidden />}
        <span>{eyebrow}</span>
      </p>
      <h2
        className="display"
        style={{
          fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
          marginBottom: subline ? '1.5rem' : 0,
        }}
      >
        {headline}
      </h2>
      {subline && (
        <p
          className="body-text"
          style={{
            fontSize: '1.05rem',
            maxWidth: '640px',
            color: 'var(--color-on-surface-variant)',
            margin: align === 'center' ? '0 auto' : undefined,
          }}
        >
          {subline}
        </p>
      )}
    </header>
  )
}
