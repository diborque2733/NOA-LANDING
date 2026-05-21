import { TEAM } from '@/content/landing'
import { Section } from '@/components/ui/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Eyebrow } from '@/components/ui/Eyebrow'

export function Team() {
  return (
    <Section id="equipo" surface="container">
      <SectionHeader
        eyebrow={TEAM.eyebrow}
        headline={TEAM.headline}
        subline={TEAM.description}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 mb-24">
        {TEAM.members.map((member) => (
          <article key={member.name}>
            <div className="aspect-square w-32 md:w-40 atelier-tray bg-[var(--color-surface-container-lowest)] mb-8 flex items-center justify-center">
              <span className="display text-4xl md:text-5xl text-[var(--color-primary)]">
                {member.name
                  .split(' ')
                  .map((n) => n[0])
                  .slice(0, 2)
                  .join('')}
              </span>
            </div>
            <h3 className="display text-3xl md:text-4xl leading-tight mb-2">
              <em>{member.name}</em>
            </h3>
            <p className="eyebrow mb-6 block">{member.role}</p>
            <p className="text-base leading-relaxed text-[var(--color-on-surface-variant)] mb-4">{member.bio}</p>
            {member.highlight && (
              <p className="text-sm text-[var(--color-secondary)] font-medium">{member.highlight}</p>
            )}
          </article>
        ))}
      </div>

      <div className="atelier-tray-alt bg-[var(--color-surface-container-lowest)] p-10 md:p-12">
        <Eyebrow className="block mb-8">{TEAM.ecosystem.eyebrow}</Eyebrow>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 copper-bullet gap-x-10 gap-y-3 text-sm text-[var(--color-on-surface)]">
          {TEAM.ecosystem.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
