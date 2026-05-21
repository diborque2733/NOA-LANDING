import { FAQ } from '@/lib/copy'
import { SectionShell } from '@/components/ui/SectionShell'
import { Accordion } from '@/components/ui/Accordion'

export function Faq() {
  return (
    <SectionShell id="faq" tone="white">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        <header className="lg:col-span-4 lg:sticky lg:top-32">
          <p
            className="eyebrow flex items-center gap-3 mb-5"
            style={{ color: 'var(--color-tertiary)', letterSpacing: '0.15em' }}
          >
            <span className="copper-pulse" aria-hidden />
            <span>Preguntas frecuentes</span>
          </p>
          <h2
            className="display mb-5"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            Lo que <em>preguntan</em> los comités.
          </h2>
          <p className="body-text" style={{ fontSize: '0.95rem', maxWidth: '380px' }}>
            Si tu pregunta no está acá, escribinos directamente — las fundadoras responden en
            menos de 48 horas.
          </p>
        </header>
        <div className="lg:col-span-8">
          <Accordion items={FAQ} />
        </div>
      </div>
    </SectionShell>
  )
}
