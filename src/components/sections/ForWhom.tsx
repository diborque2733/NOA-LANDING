import { ShieldCheck, Users, Cog, Leaf, type LucideIcon } from 'lucide-react'
import { FOR_WHOM } from '@/lib/copy'
import { SectionShell } from '@/components/ui/SectionShell'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { RevealStagger, RevealItem } from '@/components/ui/Reveal'

const ICONS: Record<string, LucideIcon> = { ShieldCheck, Users, Cog, Leaf }

export function ForWhom() {
  return (
    <SectionShell id="for-whom" tone="white">
      <SectionHeader
        eyebrow={FOR_WHOM.eyebrow}
        headline={
          <>
            Pensado para los responsables de la <em>decisión</em>.
          </>
        }
        subline={FOR_WHOM.subline}
      />

      <RevealStagger className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {FOR_WHOM.personas.map((p) => {
          const Icon = ICONS[p.icon] ?? ShieldCheck
          return (
            <RevealItem key={p.area}>
              <article
                className="card h-full p-8 md:p-10 flex flex-col gap-5"
                style={{ background: 'var(--color-surface-container-low)' }}
              >
                <div className="flex items-start gap-5">
                  <div
                    className="size-14 rounded-2xl flex items-center justify-center shrink-0"
                    style={{
                      background: 'var(--color-surface)',
                      color: 'var(--color-tertiary)',
                      boxShadow: '0 4px 12px rgba(181,108,54,0.12)',
                    }}
                  >
                    <Icon className="size-6" strokeWidth={1.2} aria-hidden />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p
                      className="text-[10px] uppercase mb-2"
                      style={{
                        color: 'var(--color-tertiary)',
                        fontFamily: 'var(--font-mono)',
                        fontWeight: 500,
                        letterSpacing: '0.15em',
                      }}
                    >
                      {p.area}
                    </p>
                    <h3
                      className="display"
                      style={{
                        fontSize: 'clamp(1.4rem, 2.2vw, 1.7rem)',
                        marginBottom: '0.5rem',
                      }}
                    >
                      {p.benefit}
                    </h3>
                  </div>
                </div>
                <p
                  className="body-text"
                  style={{ fontSize: '0.95rem', color: 'var(--color-on-surface-variant)' }}
                >
                  {p.detail}
                </p>
              </article>
            </RevealItem>
          )
        })}
      </RevealStagger>
    </SectionShell>
  )
}
