import Image from 'next/image'
import { USE_CASES } from '@/lib/copy'
import { SectionShell } from '@/components/ui/SectionShell'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { RevealStagger, RevealItem, Reveal } from '@/components/ui/Reveal'

export function UseCases() {
  return (
    <SectionShell id="use-cases" tone="white">
      <SectionHeader
        eyebrow={USE_CASES.eyebrow}
        headline={
          <>
            Partimos por los <em>nodos críticos</em>.
          </>
        }
        subline={USE_CASES.description}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
        <Reveal className="lg:col-span-5">
          <div className="relative w-full h-full min-h-[420px] rounded-2xl overflow-hidden">
            <Image
              src="/images/render-01.webp"
              alt="Operadora de minería junto a cabina NOA en faena — contexto real de despliegue en nodo crítico."
              fill
              sizes="(max-width: 1024px) 100vw, 520px"
              className="object-cover"
              style={{ filter: 'contrast(1.04) saturate(1.06)' }}
            />
            <div
              aria-hidden
              className="absolute inset-x-0 bottom-0 p-6 md:p-7"
              style={{
                background:
                  'linear-gradient(to top, rgba(18,24,27,0.85) 0%, rgba(18,24,27,0.4) 60%, transparent 100%)',
              }}
            />
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-7 pointer-events-none">
              <p
                className="text-[10px] uppercase mb-2"
                style={{
                  color: 'var(--color-tertiary-light)',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 500,
                  letterSpacing: '0.15em',
                }}
              >
                Contexto · Faena
              </p>
              <p
                className="text-sm md:text-base leading-snug"
                style={{
                  color: '#FAFAF8',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 300,
                }}
              >
                Desplegada junto a la operadora — sin sacarla del flujo del turno.
              </p>
            </div>
          </div>
        </Reveal>

        <RevealStagger className="lg:col-span-7 flex flex-col gap-4">
          {USE_CASES.items.map((item) => (
            <RevealItem key={item.title}>
              <article
                className="card p-7 md:p-9"
                style={{ background: 'var(--color-surface-container-low)' }}
              >
                <div className="flex items-start gap-5">
                  <p
                    className="text-[10px] uppercase shrink-0 mt-1.5"
                    style={{
                      color: 'var(--color-tertiary)',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 500,
                      letterSpacing: '0.15em',
                    }}
                  >
                    {item.eyebrow}
                  </p>
                  <div className="flex-1 min-w-0">
                    <h3
                      className="display mb-2"
                      style={{ fontSize: '1.4rem', lineHeight: 1.3 }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="body-text"
                      style={{
                        fontSize: '0.95rem',
                        color: 'var(--color-on-surface-variant)',
                      }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              </article>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </SectionShell>
  )
}
