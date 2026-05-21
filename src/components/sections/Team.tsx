import { Linkedin, MapPin, GraduationCap } from 'lucide-react'
import { TEAM } from '@/lib/copy'
import { SectionShell } from '@/components/ui/SectionShell'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Reveal, RevealStagger, RevealItem } from '@/components/ui/Reveal'

const INITIALS = ['RF', 'LP']

export function Team() {
  return (
    <SectionShell id="team" tone="white">
      <SectionHeader
        eyebrow={TEAM.eyebrow}
        headline={
          <>
            Founder–<em>market fit</em> por diseño.
          </>
        }
        subline={TEAM.description}
      />

      <RevealStagger className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16">
        {TEAM.members.map((member, i) => (
          <RevealItem key={member.name}>
            <article
              className="card relative h-full flex flex-col gap-6 p-8 md:p-10"
              style={{ background: 'var(--color-surface-container-low)' }}
            >
              <div className="flex items-start gap-5">
                <div
                  className="size-20 rounded-2xl flex items-center justify-center text-xl shrink-0 relative overflow-hidden"
                  style={{
                    background:
                      'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-container) 100%)',
                    color: 'var(--color-on-primary)',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 500,
                    letterSpacing: '0.05em',
                  }}
                >
                  <div
                    aria-hidden
                    className="absolute -top-2 -right-2 size-12 rounded-full"
                    style={{ background: 'rgba(181,108,54,0.25)' }}
                  />
                  <span className="relative">{INITIALS[i] ?? member.name.slice(0, 2)}</span>
                </div>
                <div className="flex-1 min-w-0 pt-1">
                  <h3
                    className="display mb-1"
                    style={{ fontSize: '1.5rem', lineHeight: 1.2 }}
                  >
                    {member.name}
                  </h3>
                  <p
                    className="text-[10px] uppercase mb-3"
                    style={{
                      color: 'var(--color-tertiary)',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 500,
                      letterSpacing: '0.15em',
                    }}
                  >
                    {member.role}
                  </p>
                  <div
                    className="flex items-center gap-1.5 text-xs"
                    style={{ color: 'var(--color-on-surface-muted)' }}
                  >
                    <MapPin className="size-3" strokeWidth={1.5} aria-hidden />
                    <span>Santiago · Chile</span>
                  </div>
                </div>
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="size-9 rounded-full flex items-center justify-center transition-colors shrink-0"
                    style={{
                      background: 'var(--color-surface)',
                      color: 'var(--color-on-surface-variant)',
                    }}
                    aria-label={`LinkedIn de ${member.name}`}
                  >
                    <Linkedin className="size-4" strokeWidth={1.5} />
                  </a>
                )}
              </div>

              <p
                className="body-text"
                style={{ fontSize: '0.95rem', color: 'var(--color-on-surface-variant)' }}
              >
                {member.bio}
              </p>

              {member.highlight && (
                <div
                  className="flex items-start gap-3 rounded-xl p-4 mt-auto"
                  style={{ background: 'var(--color-surface)' }}
                >
                  <GraduationCap
                    className="size-5 shrink-0 mt-0.5"
                    style={{ color: 'var(--color-tertiary)' }}
                    strokeWidth={1.5}
                    aria-hidden
                  />
                  <p
                    className="text-sm"
                    style={{
                      color: 'var(--color-on-surface)',
                      fontFamily: 'var(--font-body)',
                      fontWeight: 400,
                    }}
                  >
                    {member.highlight}
                  </p>
                </div>
              )}
            </article>
          </RevealItem>
        ))}
      </RevealStagger>

      <Reveal>
        <div
          className="rounded-2xl p-8 md:p-12"
          style={{
            background: 'var(--color-surface-container-low)',
            boxShadow: 'var(--shadow-ambient)',
          }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 max-w-12" style={{ background: 'var(--color-tertiary)' }} />
            <p
              className="text-[10px] uppercase"
              style={{
                color: 'var(--color-tertiary)',
                fontFamily: 'var(--font-mono)',
                fontWeight: 500,
                letterSpacing: '0.15em',
              }}
            >
              {TEAM.ecosystem.eyebrow}
            </p>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-3 text-sm">
            {TEAM.ecosystem.items.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3"
                style={{ color: 'var(--color-on-surface)' }}
              >
                <span
                  aria-hidden
                  className="size-1.5 rounded-full mt-2 shrink-0"
                  style={{ background: 'var(--color-tertiary)' }}
                />
                <span style={{ fontFamily: 'var(--font-body)', fontWeight: 400 }}>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </SectionShell>
  )
}
