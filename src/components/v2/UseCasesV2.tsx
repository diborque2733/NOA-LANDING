import Image from 'next/image'
import { USE_CASES_V2 } from './CopyV2'
import { SectionShell } from '@/components/ui/SectionShell'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { RevealStagger, RevealItem, Reveal } from '@/components/ui/Reveal'

export function UseCasesV2() {
  return (
    <SectionShell id="use-cases" tone="white">
      <SectionHeader
        eyebrow={USE_CASES_V2.eyebrow}
        headline={
          <>
            Partimos por los <em>nodos críticos</em>.
          </>
        }
        subline={USE_CASES_V2.description}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
        <Reveal className="lg:col-span-5">
          {/* Foto sin caption sobreimpreso (pedido Lara+Rebeca) */}
          <div className="relative w-full h-full min-h-[420px] rounded-2xl overflow-hidden">
            <Image
              src="/images/render-01.webp"
              alt="Operadora de minería junto a cabina NOA en faena."
              fill
              sizes="(max-width: 1024px) 100vw, 520px"
              className="object-cover"
              style={{ filter: 'contrast(1.04) saturate(1.06)' }}
            />
          </div>
        </Reveal>

        <RevealStagger className="lg:col-span-7 flex flex-col gap-4">
          {USE_CASES_V2.items.map((item, i) => (
            <RevealItem key={item.title}>
              <article
                className="relative rounded-3xl p-7 md:p-9"
                style={{
                  background: 'var(--color-surface)',
                  border: '1px solid rgba(181,108,54,0.25)',
                }}
              >
                <div className="flex items-start gap-6">
                  {/* Numero serif italic estilo Thiess "01" */}
                  <p
                    className="shrink-0 tabular-nums"
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontStyle: 'italic',
                      fontWeight: 400,
                      fontSize: '2.2rem',
                      lineHeight: 1,
                      color: 'var(--color-tertiary)',
                      letterSpacing: '-0.02em',
                      marginTop: '0.1rem',
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </p>
                  <div className="flex-1 min-w-0">
                    <h3
                      className="display mb-2"
                      style={{ fontSize: '1.35rem', lineHeight: 1.3 }}
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
