import Link from 'next/link'
import { Check, Sparkles, FileCheck2, ShieldCheck, FileText, Building2, ArrowRight, type LucideIcon } from 'lucide-react'
import { COMMERCIAL_MODELS } from '@/lib/copy'
import { SectionShell } from '@/components/ui/SectionShell'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Reveal, RevealStagger, RevealItem } from '@/components/ui/Reveal'

const PROC_ICONS: LucideIcon[] = [FileCheck2, ShieldCheck, FileText, Building2]

export function CommercialModels() {
  return (
    <SectionShell id="commercial-models" tone="cream">
      <div className="blob-decoration" aria-hidden style={{ bottom: '5%', left: '-10%' }} />

      <div className="relative">
        <SectionHeader
          eyebrow={COMMERCIAL_MODELS.eyebrow}
          headline={
            <>
              Tres caminos hacia el <em>despliegue</em>. Alcance económico a medida.
            </>
          }
          subline={COMMERCIAL_MODELS.subline}
        />

        <RevealStagger className="grid grid-cols-1 lg:grid-cols-3 gap-5 md:gap-6 items-stretch mb-16">
          {COMMERCIAL_MODELS.models.map((model) => {
            const isHighlight = model.highlight
            return (
              <RevealItem key={model.title} className={isHighlight ? 'lg:-mt-4 lg:-mb-4' : ''}>
                <article
                  className="relative h-full flex flex-col rounded-2xl p-8 md:p-10"
                  style={{
                    background: isHighlight
                      ? 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-container) 100%)'
                      : 'var(--color-surface)',
                    color: isHighlight ? 'var(--color-on-primary)' : 'var(--color-on-surface)',
                    boxShadow: isHighlight
                      ? '0 30px 80px -20px rgba(13,78,74,0.35)'
                      : 'var(--shadow-ambient)',
                    transform: isHighlight ? 'scale(1.02)' : undefined,
                  }}
                >
                  {isHighlight && (
                    <div
                      className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-[10px] uppercase flex items-center gap-1.5"
                      style={{
                        background: 'var(--color-tertiary)',
                        color: 'var(--color-on-primary)',
                        fontFamily: 'var(--font-mono)',
                        fontWeight: 600,
                        letterSpacing: '0.15em',
                      }}
                    >
                      <Sparkles className="size-3" strokeWidth={2} />
                      Más solicitado
                    </div>
                  )}

                  <p
                    className="text-[10px] uppercase mb-5"
                    style={{
                      color: isHighlight
                        ? 'var(--color-tertiary-light)'
                        : 'var(--color-tertiary)',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 500,
                      letterSpacing: '0.15em',
                    }}
                  >
                    {model.eyebrow}
                  </p>

                  <h3
                    className="display mb-4"
                    style={{
                      fontSize: 'clamp(1.6rem, 2.5vw, 2rem)',
                      color: isHighlight ? 'var(--color-on-primary)' : 'var(--color-on-surface)',
                    }}
                  >
                    {model.title}
                  </h3>

                  <p
                    className="mb-8"
                    style={{
                      fontSize: '0.95rem',
                      lineHeight: 1.65,
                      color: isHighlight
                        ? 'rgba(255,255,255,0.82)'
                        : 'var(--color-on-surface-variant)',
                      fontFamily: 'var(--font-body)',
                      fontWeight: 300,
                    }}
                  >
                    {model.description}
                  </p>

                  <ul className="space-y-3 mb-8 flex-1">
                    {model.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-sm">
                        <span
                          className="size-5 rounded-full flex items-center justify-center mt-0.5 shrink-0"
                          style={{
                            background: isHighlight
                              ? 'var(--color-tertiary)'
                              : 'rgba(13,78,74,0.1)',
                            color: isHighlight
                              ? 'var(--color-on-primary)'
                              : 'var(--color-primary)',
                          }}
                        >
                          <Check className="size-3" strokeWidth={3} />
                        </span>
                        <span
                          style={{
                            color: isHighlight
                              ? 'rgba(255,255,255,0.92)'
                              : 'var(--color-on-surface)',
                            fontFamily: 'var(--font-body)',
                            fontWeight: 400,
                          }}
                        >
                          {b}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* "Alcance económico A medida" removed — replaced by Pricing Drivers band below */}

                  <Link
                    href="#final-cta"
                    className={isHighlight ? 'btn-primary justify-center w-full' : 'btn-secondary justify-center w-full'}
                    style={
                      isHighlight
                        ? {
                            background: 'var(--color-tertiary)',
                            color: 'var(--color-on-primary)',
                          }
                        : undefined
                    }
                  >
                    <span>{model.cta}</span>
                    <ArrowRight className="size-4" strokeWidth={2} aria-hidden />
                  </Link>
                </article>
              </RevealItem>
            )
          })}
        </RevealStagger>

        {/* Pricing Drivers — sin números, comunica rigor procurement */}
        <Reveal>
          <div
            className="rounded-2xl p-8 md:p-12 mb-10"
            style={{
              background:
                'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-container) 100%)',
              color: 'var(--color-on-primary)',
              boxShadow: '0 30px 60px -30px rgba(13,78,74,0.4)',
            }}
          >
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
              <div>
                <p
                  className="text-[10px] uppercase mb-3 flex items-center gap-3"
                  style={{
                    color: 'var(--color-tertiary-light)',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 500,
                    letterSpacing: '0.15em',
                  }}
                >
                  <span className="copper-pulse" aria-hidden />
                  <span>{COMMERCIAL_MODELS.pricingDrivers.eyebrow}</span>
                </p>
                <h3
                  className="display max-w-2xl"
                  style={{
                    fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                    color: 'var(--color-on-primary)',
                  }}
                >
                  {COMMERCIAL_MODELS.pricingDrivers.title}
                </h3>
              </div>
            </div>

            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {COMMERCIAL_MODELS.pricingDrivers.items.map((d) => (
                <li
                  key={d.label}
                  className="rounded-xl p-5"
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.10)',
                  }}
                >
                  <p
                    className="text-[10px] tabular-nums uppercase mb-2"
                    style={{
                      color: 'var(--color-tertiary-light)',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 600,
                      letterSpacing: '0.15em',
                    }}
                  >
                    {d.n}
                  </p>
                  <p
                    className="display mb-2"
                    style={{
                      fontSize: '1.1rem',
                      color: 'var(--color-on-primary)',
                      lineHeight: 1.25,
                    }}
                  >
                    {d.label}
                  </p>
                  <p
                    className="text-xs"
                    style={{
                      color: 'rgba(255,255,255,0.72)',
                      fontFamily: 'var(--font-body)',
                      fontWeight: 300,
                      lineHeight: 1.5,
                    }}
                  >
                    {d.detail}
                  </p>
                </li>
              ))}
            </ul>

            <p
              className="mt-8 text-sm max-w-3xl"
              style={{
                color: 'rgba(255,255,255,0.72)',
                fontFamily: 'var(--font-body)',
                fontWeight: 300,
                lineHeight: 1.65,
              }}
            >
              {COMMERCIAL_MODELS.pricingDrivers.footer}
            </p>
          </div>
        </Reveal>

        {/* Procurement band */}
        <Reveal>
          <div
            className="rounded-2xl p-8 md:p-12"
            style={{
              background: 'var(--color-surface)',
              boxShadow: 'var(--shadow-ambient)',
            }}
          >
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
              <div>
                <p
                  className="text-[10px] uppercase mb-3"
                  style={{
                    color: 'var(--color-tertiary)',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 500,
                    letterSpacing: '0.15em',
                  }}
                >
                  {COMMERCIAL_MODELS.procurement.eyebrow}
                </p>
                <h3
                  className="display max-w-xl"
                  style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)' }}
                >
                  {COMMERCIAL_MODELS.procurement.title}
                </h3>
              </div>
              <p
                className="body-text max-w-sm"
                style={{ fontSize: '0.9rem' }}
              >
                Compatible con procesos de RFI, RFQ y onboarding de proveedores de gran minería.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {COMMERCIAL_MODELS.procurement.items.map((item, i) => {
                const Icon = PROC_ICONS[i] ?? FileCheck2
                return (
                  <div
                    key={item.label}
                    className="flex items-start gap-4 p-5 rounded-xl"
                    style={{ background: 'var(--color-surface-container-low)' }}
                  >
                    <div
                      className="size-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{
                        background: 'var(--color-primary)',
                      }}
                    >
                      <Icon
                        className="size-5"
                        strokeWidth={1.5}
                        style={{ color: 'var(--color-on-primary)' }}
                        aria-hidden
                      />
                    </div>
                    <div className="min-w-0">
                      <p
                        className="text-sm mb-1"
                        style={{
                          color: 'var(--color-on-surface)',
                          fontFamily: 'var(--font-body)',
                          fontWeight: 600,
                        }}
                      >
                        {item.label}
                      </p>
                      <p
                        className="text-xs leading-snug"
                        style={{
                          color: 'var(--color-on-surface-variant)',
                          fontFamily: 'var(--font-body)',
                          fontWeight: 400,
                        }}
                      >
                        {item.detail}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  )
}
