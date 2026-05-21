import { FAQ } from '@/content/landing'
import { Section } from '@/components/ui/Section'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Accordion } from '@/components/ui/Accordion'

export function Faq() {
  return (
    <Section id="faq" surface="low">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        <header className="lg:col-span-4 lg:sticky lg:top-32">
          <Eyebrow className="block mb-6">11 / PREGUNTAS</Eyebrow>
          <h2 className="display text-4xl md:text-5xl lg:text-6xl">
            Lo que <em>preguntan</em> los comités.
          </h2>
          <p className="mt-6 text-base text-[var(--color-on-surface-variant)] leading-relaxed">
            Si tu pregunta no está acá, escribinos directamente — las fundadoras responden en menos de 48 horas.
          </p>
        </header>
        <div className="lg:col-span-8">
          <Accordion items={FAQ} />
        </div>
      </div>
    </Section>
  )
}
