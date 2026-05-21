import { HOW_IT_WORKS } from '@/content/landing'
import { Section } from '@/components/ui/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Eyebrow } from '@/components/ui/Eyebrow'

export function HowItWorks() {
  return (
    <Section id="como-funciona" surface="base">
      <SectionHeader eyebrow={HOW_IT_WORKS.eyebrow} headline={HOW_IT_WORKS.headline} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 mb-24">
        {HOW_IT_WORKS.steps.map((step) => (
          <article key={step.number}>
            <p className="display text-7xl md:text-8xl text-[var(--color-primary)] mb-6 leading-none">
              {step.number}
            </p>
            <Eyebrow className="block mb-3">{step.eyebrow}</Eyebrow>
            <h3 className="font-[var(--font-display)] text-3xl md:text-4xl mb-4">{step.title}</h3>
            <p className="text-base leading-relaxed text-[var(--color-on-surface-variant)]">{step.description}</p>
          </article>
        ))}
      </div>

      <div className="bg-[var(--color-surface-container-highest)] p-10 md:p-16 atelier-tray">
        <Eyebrow className="block mb-6">{HOW_IT_WORKS.pilot.eyebrow}</Eyebrow>
        <h3 className="display text-3xl md:text-4xl mb-8">{HOW_IT_WORKS.pilot.title}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <Eyebrow className="block mb-3">FLUJO</Eyebrow>
            <p className="text-lg leading-relaxed text-[var(--color-on-surface)]">{HOW_IT_WORKS.pilot.flow}</p>
          </div>
          <div>
            <Eyebrow className="block mb-3">KPIS</Eyebrow>
            <ul className="copper-bullet space-y-2 text-base text-[var(--color-on-surface)]">
              {HOW_IT_WORKS.pilot.kpis.map((kpi) => (
                <li key={kpi}>{kpi}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  )
}
