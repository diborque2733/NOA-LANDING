import { cn } from '@/lib/cn'

type Surface = 'base' | 'low' | 'container' | 'lowest' | 'highest' | 'primary'

const surfaceMap: Record<Surface, string> = {
  base:      'bg-[var(--color-surface)]',
  low:       'bg-[var(--color-surface-container-low)]',
  container: 'bg-[var(--color-surface-container)]',
  lowest:    'bg-[var(--color-surface-container-lowest)]',
  highest:   'bg-[var(--color-surface-container-highest)]',
  primary:   'bg-[var(--color-primary)] text-[var(--color-on-primary)]',
}

interface SectionProps {
  id?: string
  surface?: Surface
  className?: string
  innerClassName?: string
  children: React.ReactNode
}

export function Section({
  id,
  surface = 'base',
  className,
  innerClassName,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'py-24 md:py-[var(--spacing-section)] px-6 md:px-10',
        surfaceMap[surface],
        className
      )}
    >
      <div className={cn('mx-auto w-full max-w-7xl', innerClassName)}>{children}</div>
    </section>
  )
}
