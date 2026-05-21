import { CREDIBILITY_STRIP } from '@/lib/copy'

interface CredibilityStripProps {
  className?: string
}

/**
 * Strip de credibilidad: 2 filas claramente separadas + stage note honesta.
 * Fila 1: Marco regulatorio (DS 594, Ley 16.744, ISO 45001, Ley 21.643)
 * Fila 2: Diálogo institucional (WIM, SUSESO, Consejo Minero, CORFO, Start-Up Chile)
 * Footer: nota explícita de etapa TRL 5 — transparencia que diferencia.
 */
export function CredibilityStrip({ className }: CredibilityStripProps) {
  const { regulatory, institutional, stageNote } = CREDIBILITY_STRIP

  return (
    <section
      aria-label="Marco regulatorio y diálogo institucional"
      className={className}
      style={{
        background: 'var(--color-surface)',
        borderTop: '1px solid rgba(228,226,220,0.5)',
        borderBottom: '1px solid rgba(228,226,220,0.5)',
      }}
    >
      <div className="mx-auto w-full max-w-[1280px] px-6 md:px-10 py-10 md:py-12 flex flex-col gap-6">
        {/* Row 1 — Regulatory framework */}
        <Row
          label={regulatory.label}
          items={regulatory.items.map((i) => i.name)}
          tooltips={regulatory.items.map((i) => i.detail)}
        />

        {/* Copper hairline divider */}
        <div className="copper-divider" aria-hidden />

        {/* Row 2 — Institutional dialogue */}
        <Row
          label={institutional.label}
          items={institutional.items.map((i) => i.name)}
        />

        {/* Stage note — radical transparency */}
        <p
          className="text-xs mt-2 max-w-3xl"
          style={{
            color: 'var(--color-on-surface-muted)',
            fontFamily: 'var(--font-body)',
            fontWeight: 400,
            lineHeight: 1.6,
          }}
        >
          <span
            style={{
              color: 'var(--color-tertiary)',
              fontFamily: 'var(--font-mono)',
              fontWeight: 600,
              letterSpacing: '0.1em',
              fontSize: '0.7rem',
              textTransform: 'uppercase',
              marginRight: '0.5em',
            }}
          >
            Etapa actual ·
          </span>
          {stageNote}
        </p>
      </div>
    </section>
  )
}

function Row({
  label,
  items,
  tooltips,
}: {
  label: string
  items: string[]
  tooltips?: string[]
}) {
  return (
    <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-10">
      <p
        className="shrink-0 uppercase text-[10px] md:w-[200px]"
        style={{
          color: 'var(--color-tertiary)',
          fontFamily: 'var(--font-mono)',
          fontWeight: 600,
          letterSpacing: '0.15em',
        }}
      >
        {label}
      </p>
      <ul className="flex flex-wrap items-center gap-x-6 md:gap-x-8 gap-y-2">
        {items.map((name, i) => (
          <li
            key={name}
            className="flex items-center gap-6 md:gap-8"
            title={tooltips?.[i]}
          >
            <span
              className="text-sm"
              style={{
                color: 'var(--color-on-surface)',
                fontFamily: 'var(--font-body)',
                fontWeight: 500,
                letterSpacing: '0.01em',
              }}
            >
              {name}
            </span>
            {i < items.length - 1 && (
              <span
                aria-hidden
                className="hidden md:inline-block size-1 rounded-full shrink-0"
                style={{ background: 'var(--color-tertiary)', opacity: 0.4 }}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
