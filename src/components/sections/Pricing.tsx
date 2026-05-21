import { PRICING } from '@/content/landing'
import { Section } from '@/components/ui/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Button } from '@/components/ui/Button'

export function Pricing() {
  return (
    <Section id="modelos" surface="base">
      <SectionHeader eyebrow={PRICING.eyebrow} headline={PRICING.headline} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        {PRICING.models.map((model) => {
          const isHighlight = model.highlight
          return (
            <article
              key={model.title}
              className={`p-10 md:p-12 flex flex-col ${
                isHighlight
                  ? 'machined-primary text-[var(--color-on-primary)] atelier-tray'
                  : 'bg-[var(--color-surface-container-lowest)] atelier-tray-alt'
              }`}
            >
              <Eyebrow
                className={`block mb-6 ${isHighlight ? '!text-[rgba(255,255,255,0.65)]' : ''}`}
              >
                {model.eyebrow}
              </Eyebrow>
              <h3 className="font-[var(--font-display)] text-3xl md:text-4xl mb-4 leading-tight">
                {model.title}
              </h3>
              <p
                className={`text-base leading-relaxed mb-8 ${
                  isHighlight ? 'text-[rgba(255,255,255,0.85)]' : 'text-[var(--color-on-surface-variant)]'
                }`}
              >
                {model.description}
              </p>
              <ul
                className={`copper-bullet space-y-3 text-sm mb-10 flex-1 ${
                  isHighlight ? 'text-[rgba(255,255,255,0.9)]' : 'text-[var(--color-on-surface)]'
                }`}
              >
                {model.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <Button
                href="#contacto"
                variant={isHighlight ? 'secondary' : 'primary'}
                className={
                  isHighlight
                    ? '!bg-transparent !text-[var(--color-on-primary)] !border-[rgba(255,255,255,0.4)] hover:!bg-[rgba(255,255,255,0.1)]'
                    : ''
                }
              >
                Solicitar este modelo
              </Button>
            </article>
          )
        })}
      </div>
    </Section>
  )
}
