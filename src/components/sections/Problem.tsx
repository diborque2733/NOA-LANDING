import { PROBLEM } from '@/content/landing'
import { Section } from '@/components/ui/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Eyebrow } from '@/components/ui/Eyebrow'

export function Problem() {
  return (
    <Section id="problema" surface="base">
      <SectionHeader
        eyebrow={PROBLEM.eyebrow}
        headlinePre={PROBLEM.headlinePre}
        headlineEm={PROBLEM.headlineEm}
        headlinePost={PROBLEM.headlinePost}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-20">
        <div className="lg:col-span-7 space-y-6">
          {PROBLEM.paragraphs.map((p, i) => (
            <p
              key={i}
              className="text-lg md:text-xl text-[var(--color-on-surface-variant)] leading-relaxed font-light"
            >
              {p}
            </p>
          ))}
        </div>
        <aside className="lg:col-span-5">
          <Eyebrow className="block mb-6">{PROBLEM.stressors.eyebrow}</Eyebrow>
          <ul className="copper-bullet space-y-3 text-base text-[var(--color-on-surface)]">
            {PROBLEM.stressors.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </aside>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--color-outline-variant)]">
        {PROBLEM.stats.map((stat) => (
          <div key={stat.label} className="bg-[var(--color-surface)] p-8 md:p-10">
            <p className="display text-5xl md:text-6xl text-[var(--color-primary)]">{stat.value}</p>
            <p className="mt-4 text-sm leading-snug text-[var(--color-on-surface-variant)]">{stat.label}</p>
            {stat.source && (
              <p className="mt-3 eyebrow !text-[var(--color-on-surface-muted)]">{stat.source}</p>
            )}
          </div>
        ))}
      </div>
    </Section>
  )
}
