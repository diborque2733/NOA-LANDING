import { Lock, RefreshCcw, LineChart, type LucideIcon } from 'lucide-react'
import { ATTRIBUTES } from '@/lib/copy'
import { SectionShell } from '@/components/ui/SectionShell'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { RevealStagger, RevealItem } from '@/components/ui/Reveal'

const ICONS: Record<string, LucideIcon> = { Lock, RefreshCcw, LineChart }

export function Attributes() {
  return (
    <SectionShell id="attributes" tone="cream">
      {/* Decorative blob */}
      <div
        aria-hidden
        className="blob-decoration"
        style={{ top: '10%', right: '-15%' }}
      />

      <div className="relative">
        <SectionHeader
          eyebrow={ATTRIBUTES.eyebrow}
          headline={
            <>
              Tres atributos que hacen a NOA aprobable,{' '}
              <em>operable</em> y escalable.
            </>
          }
        />

        <RevealStagger className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {ATTRIBUTES.items.map((item, i) => {
            const Icon = ICONS[item.icon] ?? Lock
            return (
              <RevealItem key={item.title}>
                <div className="feature-card h-full p-8 md:p-10 relative">
                  <div
                    aria-hidden
                    className="absolute top-6 right-6 text-[10px] uppercase tabular-nums"
                    style={{
                      color: 'var(--color-on-surface-muted)',
                      fontFamily: 'var(--font-mono)',
                      letterSpacing: '0.12em',
                    }}
                  >
                    0{i + 1}
                  </div>
                  <div
                    className="size-14 rounded-2xl flex items-center justify-center mb-7"
                    style={{
                      background: 'rgba(13,78,74,0.08)',
                      color: 'var(--color-primary)',
                    }}
                  >
                    <Icon className="size-6" strokeWidth={1.2} aria-hidden />
                  </div>
                  <h3
                    className="display mb-4"
                    style={{ fontSize: 'clamp(1.5rem, 2.5vw, 1.9rem)' }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="body-text"
                    style={{ fontSize: '0.95rem', color: 'var(--color-on-surface-variant)' }}
                  >
                    {item.description}
                  </p>
                </div>
              </RevealItem>
            )
          })}
        </RevealStagger>
      </div>
    </SectionShell>
  )
}
