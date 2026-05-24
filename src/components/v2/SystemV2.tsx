import Image from 'next/image'
import { SYSTEM_V2 } from './CopyV2'
import { SectionShell } from '@/components/ui/SectionShell'
import { Reveal } from '@/components/ui/Reveal'

export function SystemV2() {
  return (
    <SectionShell id="system" tone="white">
      <div className="relative">
        <Reveal>
          {/* Logo NOA 3D transparente en cabecera de la sección (pedido Lara+Rebeca) */}
          <div className="flex items-center gap-4 mb-8">
            <Image
              src="/brand/logo-wordmark-3d.png"
              alt="NOA"
              width={512}
              height={705}
              className="h-14 w-auto"
              priority={false}
            />
            <div
              className="h-px w-12"
              style={{ background: 'var(--color-tertiary)', opacity: 0.5 }}
              aria-hidden
            />
            <p
              className="eyebrow"
              style={{ color: 'var(--color-tertiary)', letterSpacing: '0.15em' }}
            >
              {SYSTEM_V2.eyebrow}
            </p>
          </div>

          <h2
            className="display mb-6 max-w-3xl"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3.4rem)' }}
          >
            {SYSTEM_V2.headlinePre}
            <em>{SYSTEM_V2.headlineEm}</em>
            {SYSTEM_V2.headlinePost}
          </h2>
          <p className="body-text mb-12 max-w-2xl" style={{ fontSize: '1.05rem' }}>
            {SYSTEM_V2.description}
          </p>
        </Reveal>

        {/* Editorial photo: operator in pod — sin texto sobreimpreso */}
        <Reveal>
          <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden mb-10">
            <Image
              src="/images/ai-pod-with-operator.webp"
              alt="Operadora minera reclinada en pod de recuperación NOA durante su turno."
              fill
              sizes="(max-width: 1024px) 100vw, 1280px"
              className="object-cover"
              style={{ filter: 'contrast(1.04) saturate(1.05)' }}
            />
          </div>
        </Reveal>

        {/* Pill statement — 15 minutos */}
        <Reveal>
          <div className="flex justify-center mb-16">
            <div
              className="inline-flex items-center gap-3 rounded-full px-6 py-3"
              style={{
                background: 'var(--color-surface-container-low)',
                border: '1px solid rgba(181,108,54,0.25)',
              }}
            >
              <span
                className="size-2 rounded-full"
                style={{ background: 'var(--color-tertiary)' }}
                aria-hidden
              />
              <p
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 400,
                  fontStyle: 'italic',
                  fontSize: '1.15rem',
                  color: 'var(--color-on-surface)',
                  lineHeight: 1.3,
                }}
              >
                {SYSTEM_V2.pillStatement}
              </p>
            </div>
          </div>
        </Reveal>

        {/* 3 pilares · Foco · Salud · Operación (frase Thiess: "La nueva frontera de la productividad") */}
        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {SYSTEM_V2.pillars.map((pillar) => (
              <div key={pillar.eyebrow} className="flex flex-col gap-3">
                <div
                  aria-hidden
                  className="h-px w-full"
                  style={{ background: 'var(--color-tertiary)', opacity: 0.7 }}
                />
                <p
                  className="text-[10px] uppercase mt-1"
                  style={{
                    color: 'var(--color-tertiary)',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 600,
                    letterSpacing: '0.18em',
                  }}
                >
                  {pillar.eyebrow}
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontStyle: 'italic',
                    fontWeight: 400,
                    fontSize: '1.05rem',
                    lineHeight: 1.45,
                    color: 'var(--color-on-surface)',
                  }}
                >
                  {pillar.detail}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </SectionShell>
  )
}
