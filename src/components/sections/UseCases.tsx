import { USE_CASES } from '@/content/landing'
import { Section } from '@/components/ui/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Eyebrow } from '@/components/ui/Eyebrow'

export function UseCases() {
  return (
    <Section id="casos" surface="low">
      <SectionHeader
        eyebrow={USE_CASES.eyebrow}
        headline={USE_CASES.headline}
        subline={USE_CASES.description}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
        {USE_CASES.items.map((item, i) => (
          <article
            key={item.title}
            className={`p-10 md:p-12 bg-[var(--color-surface-container-lowest)] ${
              i % 2 === 0 ? 'atelier-tray' : 'atelier-tray-alt'
            } md:translate-y-${i % 2 === 0 ? '0' : '12'}`}
          >
            <Eyebrow className="block mb-6">{item.eyebrow}</Eyebrow>
            <h3 className="font-[var(--font-display)] text-2xl md:text-3xl mb-5 leading-tight">{item.title}</h3>
            <p className="text-base leading-relaxed text-[var(--color-on-surface-variant)]">{item.description}</p>
          </article>
        ))}
      </div>
    </Section>
  )
}
