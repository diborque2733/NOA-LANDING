import { TRUST } from '@/content/landing'
import { Section } from '@/components/ui/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Eyebrow } from '@/components/ui/Eyebrow'

export function Trust() {
  return (
    <Section id="trust" surface="base">
      <SectionHeader eyebrow={TRUST.eyebrow} headline={TRUST.headline} />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-[var(--color-outline-variant)]">
        {TRUST.items.map((item) => (
          <div key={item.title} className="bg-[var(--color-surface)] p-6 md:p-8">
            <Eyebrow className="block mb-4">{item.eyebrow}</Eyebrow>
            <p className="font-[var(--font-display)] text-xl md:text-2xl leading-tight mb-2">{item.title}</p>
            <p className="text-xs text-[var(--color-on-surface-variant)] leading-snug">{item.sub}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
