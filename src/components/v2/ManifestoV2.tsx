import { MANIFESTO_V2 } from './CopyV2'
import { SectionShell } from '@/components/ui/SectionShell'
import { Reveal } from '@/components/ui/Reveal'

export function ManifestoV2() {
  return (
    <SectionShell id="manifesto" tone="white">
      <div
        aria-hidden
        className="absolute pointer-events-none"
        style={{
          top: '-15%',
          right: '-10%',
          width: '50vw',
          height: '50vw',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(181,108,54,0.05) 0%, transparent 70%)',
          filter: 'blur(40px)',
          zIndex: 0,
        }}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start relative">
        <div className="lg:col-span-3 lg:sticky lg:top-32 flex flex-col gap-5">
          <p
            className="eyebrow flex items-center gap-3"
            style={{ color: 'var(--color-tertiary)', letterSpacing: '0.15em' }}
          >
            <span className="copper-pulse" aria-hidden />
            <span>{MANIFESTO_V2.eyebrow}</span>
          </p>
          <div
            className="h-px w-12"
            style={{ background: 'var(--color-tertiary)', opacity: 0.5 }}
            aria-hidden
          />
        </div>

        <Reveal className="lg:col-span-9 max-w-3xl">
          <div
            aria-hidden
            className="select-none"
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 300,
              fontSize: 'clamp(4rem, 8vw, 6rem)',
              lineHeight: 0.8,
              color: 'var(--color-tertiary)',
              opacity: 0.6,
              marginBottom: '0.5rem',
            }}
          >
            “
          </div>

          <blockquote
            className="display"
            style={{
              fontSize: 'clamp(1.5rem, 3vw, 2.3rem)',
              lineHeight: 1.35,
              fontWeight: 300,
              color: 'var(--color-on-surface)',
              fontStyle: 'italic',
            }}
          >
            {MANIFESTO_V2.quote}
          </blockquote>

          <div className="mt-10 flex items-center gap-4">
            <div
              className="size-12 rounded-full flex items-center justify-center text-sm shrink-0"
              style={{
                background: 'var(--color-primary)',
                color: 'var(--color-on-primary)',
                fontFamily: 'var(--font-mono)',
                fontWeight: 500,
                letterSpacing: '0.02em',
              }}
              aria-hidden
            >
              RF
            </div>
            <div className="flex flex-col gap-0.5">
              <p
                className="text-sm"
                style={{
                  color: 'var(--color-on-surface)',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 600,
                }}
              >
                {MANIFESTO_V2.attribution}
              </p>
              <p
                className="text-[11px] uppercase"
                style={{
                  color: 'var(--color-tertiary)',
                  fontFamily: 'var(--font-mono)',
                  letterSpacing: '0.12em',
                }}
              >
                {MANIFESTO_V2.attributionRole}
              </p>
            </div>
          </div>

          <p
            className="mt-14 body-text"
            style={{ fontSize: '1.05rem', maxWidth: '640px' }}
          >
            {MANIFESTO_V2.closer}
          </p>
        </Reveal>
      </div>
    </SectionShell>
  )
}
