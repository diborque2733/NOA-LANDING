'use client'

import { useEffect, useRef, useState } from 'react'
import { AlertTriangle } from 'lucide-react'
import { NUMBERS } from '@/lib/copy'
import { SectionShell } from '@/components/ui/SectionShell'
import { Reveal, RevealStagger, RevealItem } from '@/components/ui/Reveal'

// Spanish-locale number parser (60.000+ → 60000, 11,1% → 11.1, 48% → 48)
function parseSpanishNumber(raw: string) {
  const suffix = raw.match(/[^0-9.,]+$/)?.[0] ?? ''
  const numPart = raw.slice(0, raw.length - suffix.length).trim()
  const isFloat = numPart.includes(',')
  const numeric = parseFloat(numPart.replace(/\./g, '').replace(',', '.'))
  return { numeric, suffix, isFloat }
}

function StatCard({ stat }: { stat: { value: string; label: string; source: string } }) {
  const ref = useRef<HTMLDivElement>(null)
  const [display, setDisplay] = useState('0')
  const { numeric, suffix, isFloat } = parseSpanishNumber(stat.value)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return
        obs.disconnect()
        const STEPS = 60
        const DURATION = 1600
        let step = 0
        const id = setInterval(() => {
          step++
          const p = step / STEPS
          const eased = 1 - Math.pow(1 - p, 3)
          const v = eased * numeric
          setDisplay(
            isFloat
              ? v.toFixed(1).replace('.', ',') + suffix
              : Math.floor(v).toLocaleString('es-CL') + suffix
          )
          if (step >= STEPS) {
            clearInterval(id)
            setDisplay(
              isFloat
                ? numeric.toFixed(1).replace('.', ',') + suffix
                : numeric.toLocaleString('es-CL') + suffix
            )
          }
        }, DURATION / STEPS)
      },
      { threshold: 0.4 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [numeric, suffix, isFloat])

  return (
    <div
      ref={ref}
      className="card relative p-7 md:p-8 h-full"
      style={{ background: 'var(--color-surface)', borderRadius: 'var(--radius-card)' }}
    >
      {/* Copper top accent line */}
      <div
        aria-hidden
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, var(--color-tertiary), transparent)' }}
      />
      <p className="stat-number tabular-nums">{display}</p>
      <p className="stat-label">{stat.label}</p>
      {stat.source && <p className="stat-source">Fuente · {stat.source}</p>}
    </div>
  )
}

export function Numbers() {
  return (
    <SectionShell id="numbers" tone="cream">
      {/* Blob decoration top-left */}
      <div
        aria-hidden
        className="blob-decoration"
        style={{ top: '5%', left: '-10%' }}
      />
      {/* Blob decoration bottom-right */}
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
            <span>{NUMBERS.eyebrow}</span>
          </p>
          <h2
            className="display mb-10 max-w-3xl"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3.4rem)' }}
          >
            {NUMBERS.headlinePre}
            <em>{NUMBERS.headlineEm}</em>
            {NUMBERS.headlinePost}
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 mb-16 items-start">
          <Reveal className="lg:col-span-7 space-y-5" delay={0.05}>
            {NUMBERS.paragraphs.map((p, i) => (
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
                  {NUMBERS.stressors.eyebrow}
                </p>
              </div>
              <ul className="space-y-4">
                {NUMBERS.stressors.items.map((item, i) => (
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

        <RevealStagger className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {NUMBERS.stats.map((stat) => (
            <RevealItem key={stat.label}>
              <StatCard stat={stat} />
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </SectionShell>
  )
}
