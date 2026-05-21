'use client'

import { motion } from 'framer-motion'
import { Check, ClipboardCheck, Truck, BarChart3, type LucideIcon } from 'lucide-react'
import { HOW_IT_WORKS } from '@/lib/copy'
import { SectionShell } from '@/components/ui/SectionShell'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Reveal, RevealStagger, RevealItem } from '@/components/ui/Reveal'

const STEP_ICONS: LucideIcon[] = [ClipboardCheck, Truck, BarChart3]

export function HowItWorks() {
  return (
    <SectionShell id="how-it-works" tone="cream">
      {/* Decorative blob */}
      <div aria-hidden className="blob-decoration" style={{ top: '20%', right: '-15%' }} />

      <div className="relative">
        <SectionHeader
          eyebrow={HOW_IT_WORKS.eyebrow}
          headline={
            <>
              Entramos por la vía de <em>menor fricción operativa</em> y escalamos.
            </>
          }
        />

        {/* Timeline horizontal con linea copper gradient */}
        <div className="relative mb-20">
          {/* Connector line — desktop */}
          <div
            aria-hidden
            className="hidden lg:block absolute top-12 left-0 right-0 h-px"
            style={{ background: 'rgba(228,226,220,0.6)' }}
          />
          <motion.div
            aria-hidden
            className="hidden lg:block absolute top-12 left-0 h-px origin-left"
            style={{
              background:
                'linear-gradient(90deg, var(--color-tertiary) 0%, var(--color-tertiary-light) 100%)',
            }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          />

          <RevealStagger className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12 relative">
            {HOW_IT_WORKS.steps.map((step, i) => {
              const Icon = STEP_ICONS[i] ?? ClipboardCheck
              return (
                <RevealItem key={step.number}>
                  <article className="relative">
                    {/* Node circle */}
                    <div className="flex items-center mb-7">
                      <div
                        className="size-24 rounded-full flex flex-col items-center justify-center shrink-0 relative z-10"
                        style={{
                          background: 'var(--color-surface)',
                          border: '2px solid var(--color-tertiary)',
                          boxShadow: 'var(--shadow-ambient)',
                        }}
                      >
                        <Icon
                          className="size-5 mb-1"
                          strokeWidth={1.5}
                          style={{ color: 'var(--color-primary)' }}
                          aria-hidden
                        />
                        <span
                          className="text-[10px] tabular-nums uppercase"
                          style={{
                            color: 'var(--color-tertiary)',
                            fontFamily: 'var(--font-mono)',
                            fontWeight: 600,
                            letterSpacing: '0.1em',
                          }}
                        >
                          {step.number}
                        </span>
                      </div>
                    </div>

                    <p
                      className="text-[10px] uppercase mb-3"
                      style={{
                        color: 'var(--color-tertiary)',
                        fontFamily: 'var(--font-mono)',
                        fontWeight: 500,
                        letterSpacing: '0.15em',
                      }}
                    >
                      {step.eyebrow}
                    </p>
                    <h3
                      className="display mb-3"
                      style={{ fontSize: '1.6rem' }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="body-text"
                      style={{ fontSize: '0.95rem', color: 'var(--color-on-surface-variant)' }}
                    >
                      {step.description}
                    </p>
                  </article>
                </RevealItem>
              )
            })}
          </RevealStagger>
        </div>

        {/* Pilot card teal */}
        <Reveal>
          <div
            className="relative rounded-2xl p-8 md:p-12 lg:p-14 overflow-hidden"
            style={{
              background:
                'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-container) 100%)',
              color: 'var(--color-on-primary)',
              boxShadow: '0 40px 80px -30px rgba(13,78,74,0.3)',
            }}
          >
            {/* Decorative blobs */}
            <div
              aria-hidden
              className="absolute pointer-events-none"
              style={{
                top: '-30%',
                right: '-15%',
                width: '500px',
                height: '500px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(181,108,54,0.25) 0%, transparent 65%)',
              }}
            />

            <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10">
              <div className="lg:col-span-8">
                <p
                  className="text-[10px] uppercase mb-5 flex items-center gap-3"
                  style={{
                    color: 'var(--color-tertiary-light)',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 500,
                    letterSpacing: '0.15em',
                  }}
                >
                  <span className="copper-pulse" aria-hidden />
                  <span>{HOW_IT_WORKS.pilot.eyebrow}</span>
                </p>
                <h3
                  className="display max-w-2xl"
                  style={{
                    fontSize: 'clamp(1.7rem, 3vw, 2.4rem)',
                    color: 'var(--color-on-primary)',
                    lineHeight: 1.2,
                  }}
                >
                  {HOW_IT_WORKS.pilot.title}
                </h3>
              </div>
              <div className="lg:col-span-4 flex lg:justify-end">
                <div
                  className="rounded-2xl px-5 py-4 backdrop-blur-sm"
                  style={{
                    background: 'rgba(255,255,255,0.08)',
                    border: '1px solid rgba(255,255,255,0.15)',
                  }}
                >
                  <p
                    className="text-[9px] uppercase mb-1"
                    style={{
                      color: 'var(--color-tertiary-light)',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 500,
                      letterSpacing: '0.15em',
                    }}
                  >
                    Resultado esperado
                  </p>
                  <p
                    className="text-sm leading-snug"
                    style={{ color: 'rgba(255,255,255,0.92)', fontWeight: 300 }}
                  >
                    Evidencia accionable para la decisión de escalamiento.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative mb-10">
              <p
                className="text-[10px] uppercase mb-5"
                style={{
                  color: 'var(--color-tertiary-light)',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 500,
                  letterSpacing: '0.15em',
                }}
              >
                Flujo del piloto
              </p>
              <div className="relative">
                <div
                  aria-hidden
                  className="absolute top-3 left-3 right-3 h-px hidden md:block"
                  style={{
                    background:
                      'linear-gradient(90deg, var(--color-tertiary-light) 0%, rgba(255,255,255,0.15) 100%)',
                  }}
                />
                <ol className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-2 relative">
                  {HOW_IT_WORKS.pilot.flow.split('→').map((step, i) => (
                    <li key={i} className="flex flex-col items-start gap-3">
                      <span
                        className="size-6 rounded-full flex items-center justify-center text-[10px] tabular-nums shrink-0 relative z-10"
                        style={{
                          background:
                            i === 0 ? 'var(--color-tertiary)' : 'rgba(255,255,255,0.12)',
                          color: i === 0 ? 'var(--color-on-primary)' : 'var(--color-tertiary-light)',
                          border: '1px solid rgba(255,255,255,0.2)',
                          fontFamily: 'var(--font-mono)',
                          fontWeight: 700,
                        }}
                      >
                        {i + 1}
                      </span>
                      <span
                        className="text-sm leading-snug"
                        style={{ color: 'rgba(255,255,255,0.92)', fontWeight: 500 }}
                      >
                        {step.trim()}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <div className="relative">
              <p
                className="text-[10px] uppercase mb-5"
                style={{
                  color: 'var(--color-tertiary-light)',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 500,
                  letterSpacing: '0.15em',
                }}
              >
                KPIs medidos
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {HOW_IT_WORKS.pilot.kpis.map((kpi) => (
                  <li
                    key={kpi}
                    className="flex items-start gap-3 rounded-xl p-4"
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.10)',
                    }}
                  >
                    <span
                      className="size-6 rounded-full flex items-center justify-center mt-0.5 shrink-0"
                      style={{ background: 'var(--color-tertiary)' }}
                    >
                      <Check
                        className="size-3.5"
                        strokeWidth={3}
                        style={{ color: 'var(--color-on-primary)' }}
                      />
                    </span>
                    <span
                      className="text-sm leading-snug"
                      style={{ color: 'rgba(255,255,255,0.92)' }}
                    >
                      {kpi}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  )
}
