import { cn } from '@/lib/cn'
import { Eyebrow } from './Eyebrow'

interface SectionHeaderProps {
  eyebrow: string
  headline?: string
  headlinePre?: string
  headlineEm?: string
  headlinePost?: string
  subline?: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeader({
  eyebrow,
  headline,
  headlinePre,
  headlineEm,
  headlinePost,
  subline,
  align = 'left',
  className,
}: SectionHeaderProps) {
  return (
    <header className={cn('mb-16 md:mb-20 max-w-3xl', align === 'center' && 'mx-auto text-center', className)}>
      <Eyebrow className="mb-6 block">{eyebrow}</Eyebrow>
      {headline && (
        <h2 className="display text-4xl md:text-5xl lg:text-6xl">{headline}</h2>
      )}
      {headlinePre !== undefined && (
        <h2 className="display text-4xl md:text-5xl lg:text-6xl">
          {headlinePre}
          {headlineEm && <em className="text-[var(--color-primary)]">{headlineEm}</em>}
          {headlinePost}
        </h2>
      )}
      {subline && (
        <p className="mt-6 text-lg md:text-xl text-[var(--color-on-surface-variant)] leading-relaxed font-light">
          {subline}
        </p>
      )}
    </header>
  )
}
