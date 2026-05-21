import { Lock, RefreshCcw, LineChart, type LucideIcon } from 'lucide-react'
import { DIFFERENTIATORS } from '@/content/landing'
import { Section } from '@/components/ui/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Eyebrow } from '@/components/ui/Eyebrow'

const ICONS: Record<string, LucideIcon> = { Lock, RefreshCcw, LineChart }

export function Differentiators() {
  return (
    <Section id="diferenciadores" surface="lowest">
      <SectionHeader eyebrow={DIFFERENTIATORS.eyebrow} headline={DIFFERENTIATORS.headline} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-[var(--color-outline-variant)] mb-20">
        {DIFFERENTIATORS.items.map((item) => {
          const Icon = ICONS[item.icon] ?? Lock
          return (
            <div key={item.title} className="bg-[var(--color-surface-container-lowest)] p-10 md:p-12">
              <Icon className="size-6 text-[var(--color-secondary)] mb-8" strokeWidth={1.5} aria-hidden />
              <h3 className="font-[var(--font-display)] text-3xl md:text-4xl mb-4">{item.title}</h3>
              <p className="text-base leading-relaxed text-[var(--color-on-surface-variant)]">{item.description}</p>
            </div>
          )
        })}
      </div>

      <div>
        <Eyebrow className="block mb-8">{DIFFERENTIATORS.vs.eyebrow}</Eyebrow>
        <dl className="divide-y divide-[rgba(191,200,198,0.4)]">
          {DIFFERENTIATORS.vs.rows.map((row) => (
            <div
              key={row.other}
              className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-4 md:gap-12 py-6"
            >
              <dt className="text-sm md:text-base text-[var(--color-on-surface-muted)] line-through decoration-1">
                {row.other}
              </dt>
              <dd className="font-[var(--font-display)] text-xl md:text-2xl text-[var(--color-on-surface)]">
                <em>{row.noa}</em>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  )
}
