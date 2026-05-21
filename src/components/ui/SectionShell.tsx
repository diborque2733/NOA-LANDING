import { cn } from '@/lib/cn'

export type SectionTone = 'white' | 'cream' | 'teal'

interface SectionShellProps {
  id?: string
  tone?: SectionTone
  as?: 'section' | 'div' | 'article' | 'aside'
  className?: string
  innerClassName?: string
  /** Render content that breaks out of the max-w container (e.g. full-bleed backgrounds). */
  bleed?: React.ReactNode
  children: React.ReactNode
}

const TONE_STYLES: Record<SectionTone, { bg: string; text: string }> = {
  white: { bg: 'var(--color-surface)', text: 'var(--color-on-surface)' },
  cream: { bg: 'var(--color-surface-container-low)', text: 'var(--color-on-surface)' },
  teal:  { bg: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-container) 100%)', text: 'var(--color-on-primary)' },
}

export function SectionShell({
  id,
  tone = 'white',
  as: Tag = 'section',
  className,
  innerClassName,
  bleed,
  children,
}: SectionShellProps) {
  const { bg, text } = TONE_STYLES[tone]
  return (
    <Tag
      id={id}
      data-tone={tone}
      className={cn('relative px-6 md:px-10 py-24 md:py-32 lg:py-36 overflow-hidden', className)}
      style={{ background: bg, color: text }}
    >
      {bleed}
      <div className={cn('relative mx-auto w-full max-w-[1280px]', innerClassName)}>
        {children}
      </div>
    </Tag>
  )
}
