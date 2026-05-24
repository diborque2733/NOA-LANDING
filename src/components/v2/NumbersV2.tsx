'use client'

import { useEffect, useRef, useState } from 'react'
import { AlertTriangle } from 'lucide-react'
import { NUMBERS_V2 } from './CopyV2'
import { SectionShell } from '@/components/ui/SectionShell'
import { Reveal, RevealStagger, RevealItem } from '@/components/ui/Reveal'

function parseSpanishNumber(raw: string) {
  const suffix = raw.match(/[^0-9.,]+$/)?.[0] ?? ''
  const numPart = raw.slice(0, raw.length - suffix.length).trim()
  const isFloat = numPart.includes(',')
  const numeric = parseFloat(numPart.replace(/\./g, '').replace(',', '.'))
  return { numeric, suffix, isFloat }
}

function StatCell({ stat }: { stat: { value: string; label: string; source: string } }) {
  const ref = useRef<HTMLDivElement>(null)
  const { numeric, suffix, isFloat } = parseSpanishNumber(stat.value)

  const finalDisplay = isFloat
    ? numeric.toFixed(1).replace('.', ',') + suffix
    : numeric.toLocaleString('es-CL') + suffix

  // requestAnimationFrame-based counter · resistente a React Strict Mode double-mount
  const [display, setDisplay] = useState(finalDisplay)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof window === 'undefined') return

    let rafId: number | null = null
    let startTs: number | null = null
    let observed = false
    let mounted = true
    const DURATION = 1400

    const tick = (now: number) => {
      if (!mounted) return
      if (startTs === null) startTs = now
      const elapsed = now - startTs
      const p = Math.min(1, elapsed / DURATION)
      const eased = 1 - Math.pow(1 - p, 3)
      if (p >= 1) {
        setDisplay(finalDisplay)
        rafId = null
        return
      }
      const v = eased * numeric
      setDisplay(
        isFloat
          ? v.toFixed(1).replace('.', ',') + suffix
          : Math.floor(v).toLocaleString('es-CL') + suffix
      )
      rafId = requestAnimationFrame(tick)
    }

    const obs = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting || observed) return
        observed = true
        obs.disconnect()
        setDisplay('0')
        startTs = null
        rafId = requestAnimationFrame(tick)
      },
      { threshold: 0.3 }
    )
    obs.observe(el)

    return () => {
      mounted = false
      obs.disconnect()
      if (rafId !== null) cancelAnimationFrame(rafId)
      // Garantizar que el valor final se muestra incluso si el cleanup interrumpe la animación
      setDisplay(finalDisplay)
    }
  }, [numeric, suffix, isFloat, finalDisplay])

  return (
    <div ref={ref} className="flex flex-col gap-3">
      {/* Stat number · serif italic teal · patrón Thiess */}
      <p
        className="tabular-nums"
        style={{
          fontFamily: 'var(--font-display)',
          fontStyle: 'italic',
          fontWeight: 400,
          fontSize: 'clamp(2.4rem, 4vw, 3.2rem)',
          lineHeight: 1,
          color: 'var(--color-primary)',
          letterSpacing: '-0.02em',
        }}
      >
        {display}
      </p>
      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontWeight: 300,
          fontSize: '0.92rem',
          lineHeight: 1.5,
          color: 'var(--color-on-surface-variant)',
        }}
      >
        {stat.label}
      </p>
      {stat.source && (
        <p
          className="text-[10px] uppercase mt-1"
          style={{
            color: 'var(--color-tertiary)',
            fontFamily: 'var(--font-mono)',
            fontWeight: 500,
            letterSpacing: '0.15em',
          }}
        >
          {stat.source}
        </p>
      )}
    </div>
  )
}

export function NumbersV2() {
  return (
    <SectionShell id="numbers" tone="cream">
      <div
        aria-hidden
        className="blob-decoration"
        style={{ top: '5%', left: '-10%' }}
      />
      <div
        aria-hidden
        className="blob-decoration"
        style={{ bottom: '5%', right: '-10%', width: '500px', height: '500px' }}
      />

      <div className="relative">
        <Reveal>
          <p
            className="eyebrow flex items-center gap-3 mb-5"
            style={{ color: 'var(--color-tertiary)', letterSpacing: '0.15em' }}
          >
            <span className="copper-pulse" aria-hidden />
            <span>{NUMBERS_V2.eyebrow}</span>
          </p>
          <h2
            className="display mb-10 max-w-3xl"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3.4rem)' }}
          >
            {NUMBERS_V2.headlinePre}
            <em>{NUMBERS_V2.headlineEm}</em>
            {NUMBERS_V2.headlinePost}
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 mb-16 items-start">
          <Reveal className="lg:col-span-7 space-y-5" delay={0.05}>
            {NUMBERS_V2.paragraphs.map((p, i) => (
              <p
                key={i}
                className="body-text"
                style={{ fontSize: '1.05rem', maxWidth: '560px' }}
              >
                {p}
              </p>
            ))}
          </Reveal>

          <Reveal className="lg:col-span-5" delay={0.15}>
            <div
              className="rounded-2xl p-7"
              style={{
                background: 'var(--color-surface)',
                boxShadow: 'var(--shadow-ambient)',
              }}
            >
              <div className="flex items-center gap-3 mb-5">
                <span
                  className="size-9 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: 'var(--color-tertiary)' }}
                >
                  <AlertTriangle
                    className="size-4"
                    strokeWidth={1.5}
                    style={{ color: 'var(--color-on-primary)' }}
                    aria-hidden
                  />
                </span>
                <p
                  className="eyebrow"
                  style={{ color: 'var(--color-tertiary)', letterSpacing: '0.15em' }}
                >
                  {NUMBERS_V2.stressors.eyebrow}
                </p>
              </div>
              <ul className="space-y-4">
                {NUMBERS_V2.stressors.items.map((item, i) => (
                  <li key={item} className="flex items-start gap-4">
                    <span
                      className="text-xs tabular-nums shrink-0 mt-1"
                      style={{
                        color: 'var(--color-tertiary)',
                        fontFamily: 'var(--font-mono)',
                        fontWeight: 500,
                        letterSpacing: '0.05em',
                      }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span
                      style={{
                        color: 'var(--color-on-surface)',
                        fontFamily: 'var(--font-body)',
                        fontWeight: 400,
                        fontSize: '0.95rem',
                        lineHeight: 1.55,
                      }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* Stats Card grande con border copper hairline · patrón Thiess */}
        <Reveal>
          <div
            className="relative rounded-3xl p-8 md:p-12"
            style={{
              background: 'var(--color-surface)',
              border: '1px solid rgba(181,108,54,0.35)',
            }}
          >
            <RevealStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-10">
              {NUMBERS_V2.stats.map((stat) => (
                <RevealItem key={stat.label}>
                  <StatCell stat={stat} />
                </RevealItem>
              ))}
            </RevealStagger>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  )
}
