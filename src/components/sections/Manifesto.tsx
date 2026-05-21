import { MANIFESTO } from '@/content/landing'
import { Section } from '@/components/ui/Section'
import { Eyebrow } from '@/components/ui/Eyebrow'

export function Manifesto() {
  return (
    <Section id="manifesto" surface="low">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        <Eyebrow className="lg:col-span-3 lg:sticky lg:top-32">{MANIFESTO.eyebrow}</Eyebrow>
        <div className="lg:col-span-9 max-w-3xl">
          <blockquote className="display text-3xl md:text-4xl lg:text-5xl leading-[1.15] text-[var(--color-on-surface)]">
            <em>{MANIFESTO.quote}</em>
          </blockquote>
          <p className="mt-10 eyebrow flex items-center gap-3">
            <span className="block h-px w-12 bg-[var(--color-secondary)]" aria-hidden />
            {MANIFESTO.attribution}
          </p>
          <p className="mt-16 text-lg md:text-xl text-[var(--color-on-surface-variant)] leading-relaxed font-light max-w-2xl">
            {MANIFESTO.closer}
          </p>
        </div>
      </div>
    </Section>
  )
}
