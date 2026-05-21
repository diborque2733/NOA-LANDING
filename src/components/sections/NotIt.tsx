import { NOT_IT } from '@/lib/copy'
import { SectionShell } from '@/components/ui/SectionShell'
import { Reveal, RevealStagger, RevealItem } from '@/components/ui/Reveal'

export function NotIt() {
  return (
    <SectionShell id="not-it" tone="teal" className="py-20 md:py-24 lg:py-28">
      {/* Decorative blob */}
      <div
        aria-hidden
        className="absolute pointer-events-none"
        style={{
          top: '-20%',
          right: '-10%',
          width: '40vw',
          height: '40vw',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(181,108,54,0.18) 0%, transparent 70%)',
        }}
      />

      <Reveal>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center relative">
          <div className="lg:col-span-4">
            <p
              className="eyebrow mb-4 flex items-center gap-3"
              style={{
                color: 'var(--color-tertiary-light)',
                letterSpacing: '0.15em',
              }}
            >
              <span className="copper-pulse" aria-hidden />
              <span>NOA NO es</span>
            </p>
            <h2
              className="display"
              style={{
                fontSize: 'clamp(1.6rem, 2.5vw, 2rem)',
                color: 'var(--color-on-primary)',
                lineHeight: 1.3,
              }}
            >
              Conviene aclarar lo que <em style={{ color: 'var(--color-tertiary-light)' }}>no es</em> para entender lo que sí.
            </h2>
          </div>

          <RevealStagger className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {NOT_IT.items.map((item) => (
              <RevealItem key={item}>
                <div
                  className="flex items-center gap-4 rounded-2xl p-5"
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.10)',
                  }}
                >
                  <span
                    className="size-8 rounded-full flex items-center justify-center text-sm shrink-0"
                    style={{
                      background: 'rgba(181,108,54,0.25)',
                      color: 'var(--color-tertiary-light)',
                      border: '1px solid rgba(181,108,54,0.4)',
                      fontWeight: 700,
                    }}
                    aria-hidden
                  >
                    ×
                  </span>
                  <span
                    className="text-base md:text-lg"
                    style={{
                      color: 'rgba(255,255,255,0.85)',
                      fontFamily: 'var(--font-display)',
                      fontWeight: 400,
                    }}
                  >
                    {item}
                  </span>
                </div>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </Reveal>
    </SectionShell>
  )
}
