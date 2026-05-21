import { cn } from '@/lib/cn'

interface AtelierTrayProps {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'alt'
  surface?: 'highest' | 'lowest' | 'low' | 'primary'
}

const surfaceMap = {
  highest: 'bg-[var(--color-surface-container-highest)] text-[var(--color-on-surface)]',
  lowest:  'bg-[var(--color-surface-container-lowest)] text-[var(--color-on-surface)]',
  low:     'bg-[var(--color-surface-container-low)] text-[var(--color-on-surface)]',
  primary: 'machined-primary text-[var(--color-on-primary)]',
}

export function AtelierTray({
  children,
  className,
  variant = 'default',
  surface = 'highest',
}: AtelierTrayProps) {
  return (
    <div
      className={cn(
        variant === 'default' ? 'atelier-tray' : 'atelier-tray-alt',
        surfaceMap[surface],
        'p-8 md:p-12',
        className
      )}
    >
      {children}
    </div>
  )
}
