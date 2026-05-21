import { HERO } from '@/content/landing'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Button } from '@/components/ui/Button'

export function Hero() {
  return (
    <section className="relative px-6 md:px-10 pt-12 pb-32 md:pt-20 md:pb-44 overflow-hidden">
      <div className="mx-auto w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-7">
          <Eyebrow className="mb-8 block">{HERO.eyebrow}</Eyebrow>
          <h1 className="display text-5xl md:text-7xl lg:text-[5.5rem]">
            {HERO.headlinePre}
            <em className="text-[var(--color-primary)]">{HERO.headlineEm}</em>
            {HERO.headlinePost}
          </h1>
          <p className="mt-8 text-lg md:text-xl text-[var(--color-on-surface-variant)] leading-relaxed font-light max-w-2xl">
            {HERO.subline}
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <Button href={HERO.primaryCta.href} variant="primary" size="lg">
              {HERO.primaryCta.label}
            </Button>
            <Button href={HERO.secondaryCta.href} variant="secondary" size="lg">
              {HERO.secondaryCta.label}
            </Button>
          </div>
          <p className="mt-10 eyebrow flex items-center gap-2">
            <span className="size-1 rounded-full bg-[var(--color-secondary)]" aria-hidden />
            {HERO.trustLine}
          </p>
        </div>

        <div className="lg:col-span-5 relative">
          <div
            className="aspect-[4/5] w-full atelier-tray relative overflow-hidden"
            aria-hidden
          >
            <div className="absolute inset-0 flex items-center justify-center p-12">
              <svg
                viewBox="0 0 200 200"
                className="w-full h-full opacity-90"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="100" cy="100" r="80" stroke="var(--color-primary)" strokeWidth="0.5" />
                <circle cx="100" cy="100" r="60" stroke="var(--color-primary)" strokeWidth="0.5" />
                <circle cx="100" cy="100" r="40" stroke="var(--color-primary)" strokeWidth="0.5" />
                <circle cx="100" cy="100" r="20" stroke="var(--color-primary)" strokeWidth="0.5" />
                <circle cx="100" cy="100" r="4" fill="var(--color-secondary)" />
              </svg>
            </div>
            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
              <p className="eyebrow !text-[var(--color-on-surface-variant)]">SISTEMA · 4 CAPAS</p>
              <p className="eyebrow !text-[var(--color-secondary)]">TRL · 05</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
