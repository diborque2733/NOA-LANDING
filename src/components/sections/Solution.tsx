import { Sun, Waves, Sparkles, Armchair, type LucideIcon } from 'lucide-react'
import { SOLUTION } from '@/content/landing'
import { Section } from '@/components/ui/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { AtelierTray } from '@/components/ui/AtelierTray'

const ICONS: Record<string, LucideIcon> = { Sun, Waves, Sparkles, Armchair }

export function Solution() {
  return (
    <Section id="solucion" surface="container">
      <SectionHeader
        eyebrow={SOLUTION.eyebrow}
        headlinePre={SOLUTION.headlinePre}
        headlineEm={SOLUTION.headlineEm}
        headlinePost={SOLUTION.headlinePost}
        subline={SOLUTION.description}
      />

      <div className="mb-20">
        <Eyebrow className="block mb-10">{SOLUTION.layers.eyebrow}</Eyebrow>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--color-outline-variant)]">
          {SOLUTION.layers.items.map((layer) => {
            const Icon = ICONS[layer.icon] ?? Sun
            return (
              <div key={layer.title} className="bg-[var(--color-surface-container-lowest)] p-8 md:p-10">
                <div className="size-12 rounded-full bg-[var(--color-primary)] text-[var(--color-on-primary)] flex items-center justify-center mb-8">
                  <Icon className="size-5" strokeWidth={1.5} aria-hidden />
                </div>
                <h3 className="font-[var(--font-display)] text-2xl md:text-3xl mb-3">{layer.title}</h3>
                <p className="text-sm leading-relaxed text-[var(--color-on-surface-variant)]">{layer.description}</p>
              </div>
            )
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5">
          <AtelierTray surface="primary" variant="alt">
            <Eyebrow className="!text-[rgba(255,255,255,0.6)] block mb-6">{SOLUTION.not.eyebrow}</Eyebrow>
            <ul className="space-y-3">
              {SOLUTION.not.items.map((item) => (
                <li
                  key={item}
                  className="font-[var(--font-display)] text-2xl md:text-3xl text-[var(--color-on-primary)] line-through decoration-[var(--color-secondary)] decoration-2 underline-offset-4"
                >
                  {item}
                </li>
              ))}
            </ul>
          </AtelierTray>
        </div>
        <div className="lg:col-span-7 lg:pt-8">
          <p className="display text-2xl md:text-3xl lg:text-4xl leading-[1.25] text-[var(--color-on-surface)]">
            {SOLUTION.closing.split('protocolo').map((chunk, i, arr) => (
              <span key={i}>
                {chunk}
                {i < arr.length - 1 && <em className="text-[var(--color-primary)]">protocolo</em>}
              </span>
            ))}
          </p>
        </div>
      </div>
    </Section>
  )
}
