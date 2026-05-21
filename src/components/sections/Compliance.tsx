import { Shield, FileCheck2, ClipboardCheck, Layers, Rocket, Globe2, type LucideIcon } from 'lucide-react'
import { COMPLIANCE } from '@/lib/copy'
import { SectionShell } from '@/components/ui/SectionShell'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { RevealStagger, RevealItem } from '@/components/ui/Reveal'

const COMPLIANCE_ICONS: LucideIcon[] = [Shield, FileCheck2, ClipboardCheck, Layers, Globe2, Rocket]

export function Compliance() {
  return (
    <SectionShell id="compliance" tone="cream">
      <div className="blob-decoration" aria-hidden style={{ top: '15%', right: '-10%' }} />

      <div className="relative">
        <SectionHeader
          eyebrow={COMPLIANCE.eyebrow}
          headline={
            <>
              Diseñado para <em>entrar a faena</em>.
            </>
          }
        />

        <RevealStagger className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
          {COMPLIANCE.items.map((item, i) => {
            const Icon = COMPLIANCE_ICONS[i] ?? Shield
            return (
              <RevealItem key={item.title}>
                <div
                  className="card h-full p-5 md:p-6 flex flex-col gap-4"
                  style={{ background: 'var(--color-surface)' }}
                >
                  <div
                    className="size-10 rounded-xl flex items-center justify-center"
                    style={{
                      background: 'rgba(13,78,74,0.08)',
                      color: 'var(--color-primary)',
                    }}
                  >
                    <Icon className="size-5" strokeWidth={1.2} aria-hidden />
                  </div>
                  <div>
                    <p
                      className="text-[9px] uppercase mb-2"
                      style={{
                        color: 'var(--color-tertiary)',
                        fontFamily: 'var(--font-mono)',
                        fontWeight: 500,
                        letterSpacing: '0.15em',
                      }}
                    >
                      {item.eyebrow}
                    </p>
                    <p
                      className="display mb-1.5"
                      style={{ fontSize: '1.15rem', lineHeight: 1.2 }}
                    >
                      {item.title}
                    </p>
                    <p
                      className="text-xs leading-snug"
                      style={{
                        color: 'var(--color-on-surface-variant)',
                        fontFamily: 'var(--font-body)',
                        fontWeight: 400,
                      }}
                    >
                      {item.sub}
                    </p>
                  </div>
                </div>
              </RevealItem>
            )
          })}
        </RevealStagger>
      </div>
    </SectionShell>
  )
}
