import { PILOT_DATA_V2 } from './CopyV2'
import { SectionShell } from '@/components/ui/SectionShell'
import { Reveal, RevealStagger, RevealItem } from '@/components/ui/Reveal'

export function PilotDataV2() {
  return (
    <SectionShell id="pilot-data" tone="white">
      <Reveal>
        <p
          className="eyebrow flex items-center gap-3 mb-5"
          style={{ color: 'var(--color-tertiary)', letterSpacing: '0.15em' }}
        >
          <span className="copper-pulse" aria-hidden />
          <span>{PILOT_DATA_V2.eyebrow}</span>
        </p>

        <h2
          className="display mb-6 max-w-4xl"
          style={{ fontSize: 'clamp(1.9rem, 4vw, 3rem)', lineHeight: 1.2 }}
        >
          {PILOT_DATA_V2.headlinePre}
          <em>{PILOT_DATA_V2.headlineEm}</em>
          {PILOT_DATA_V2.headlinePost}
        </h2>

        <p className="body-text mb-12 max-w-2xl" style={{ fontSize: '1.05rem' }}>
          {PILOT_DATA_V2.description}
        </p>
      </Reveal>

      {/* Grid con divider top copper · patrón Thiess "Foco · Salud · Operación" */}
      <RevealStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
        {PILOT_DATA_V2.metrics.map((m) => (
          <RevealItem key={m.label}>
            <article className="flex flex-col gap-3">
              {/* Hairline copper arriba de cada cell · estilo Thiess */}
              <div
                aria-hidden
                className="h-px w-full mb-2"
                style={{ background: 'var(--color-tertiary)', opacity: 0.7 }}
              />
              <p
                className="text-[10px] uppercase"
                style={{
                  color: 'var(--color-tertiary)',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 600,
                  letterSpacing: '0.18em',
                }}
              >
                {m.label}
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-display)',
                  fontStyle: 'italic',
                  fontWeight: 400,
                  fontSize: '1.1rem',
                  lineHeight: 1.45,
                  color: 'var(--color-on-surface)',
                }}
              >
                {m.detail}
              </p>
            </article>
          </RevealItem>
        ))}
      </RevealStagger>
    </SectionShell>
  )
}
