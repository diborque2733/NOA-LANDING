import Image from 'next/image'
import { SYSTEM } from '@/lib/copy'
import { SectionShell } from '@/components/ui/SectionShell'
import { Reveal } from '@/components/ui/Reveal'
import { PodLayers } from '@/components/ui/PodLayers'

export function System() {
  return (
    <SectionShell id="system" tone="white">
      <div className="relative">
        <Reveal>
          <p
            className="eyebrow flex items-center gap-3 mb-5"
            style={{ color: 'var(--color-tertiary)', letterSpacing: '0.15em' }}
          >
            <span className="copper-pulse" aria-hidden />
            <span>{SYSTEM.eyebrow}</span>
          </p>
          <h2
            className="display mb-6 max-w-3xl"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3.4rem)' }}
          >
            {SYSTEM.headlinePre}
            <em>{SYSTEM.headlineEm}</em>
            {SYSTEM.headlinePost}
          </h2>
          <p className="body-text mb-16 max-w-2xl" style={{ fontSize: '1.05rem' }}>
            {SYSTEM.description}
          </p>
        </Reveal>

        {/* Editorial photo: operator in pod */}
        <Reveal>
          <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden mb-20">
            <Image
              src="/images/ai-pod-with-operator.webp"
              alt="Operadora minera reclinada en pod de recuperación NOA durante su turno — recuperación neuro-sensorial sin sacarla del flujo operacional."
              fill
              sizes="(max-width: 1024px) 100vw, 1280px"
              className="object-cover"
              style={{ filter: 'contrast(1.04) saturate(1.05)' }}
            />
            <div
              aria-hidden
              className="absolute inset-x-0 bottom-0 p-6 md:p-8 pointer-events-none"
              style={{
                background:
                  'linear-gradient(to top, rgba(18,24,27,0.6) 0%, transparent 60%)',
              }}
            >
              <p
                className="text-[10px] uppercase mb-1.5"
                style={{
                  color: 'var(--color-tertiary-light)',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 500,
                  letterSpacing: '0.15em',
                }}
              >
                Operación real · Micro-pausa de turno
              </p>
              <p
                className="text-base md:text-lg leading-snug max-w-xl"
                style={{
                  color: '#FAFAF8',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 300,
                }}
              >
                8 minutos de recuperación funcional sin sacarla del flujo operacional.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Interactive pod with 4 sensory layers orbiting */}
        <div className="mb-16">
          <Reveal>
            <p
              className="eyebrow mb-3 flex items-center gap-3"
              style={{ color: 'var(--color-tertiary)', letterSpacing: '0.15em' }}
            >
              <span className="copper-pulse" aria-hidden />
              <span>{SYSTEM.layers.eyebrow}</span>
            </p>
            <h3
              className="display mb-2 max-w-2xl"
              style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2rem)' }}
            >
              Cuatro capas sensoriales calibradas en una sola <em>unidad</em>.
            </h3>
            <p className="body-text mb-10 max-w-xl" style={{ fontSize: '0.95rem' }}>
              Pasá el cursor sobre cada capa para entender qué hace dentro del pod.
            </p>
          </Reveal>
          <PodLayers />
        </div>

        {/* Closing statement */}
        <Reveal>
          <div className="copper-divider mb-10" aria-hidden />
          <p
            className="display max-w-4xl"
            style={{
              fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
              color: 'var(--color-on-surface)',
              lineHeight: 1.35,
            }}
          >
            {SYSTEM.closing.split('protocolo').map((chunk, i, arr) => (
              <span key={i}>
                {chunk}
                {i < arr.length - 1 && <em>protocolo</em>}
              </span>
            ))}
          </p>
        </Reveal>
      </div>
    </SectionShell>
  )
}
