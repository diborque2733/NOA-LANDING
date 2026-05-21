import Image from 'next/image'
import { SITE, NUMBERS, COMPLIANCE, COMMERCIAL_MODELS, FINAL_CTA, MANIFESTO } from '@/lib/copy'
import { PrintButton } from './PrintButton'

export const metadata = {
  title: 'NOA — One-pager ejecutivo',
  description:
    'Ficha técnica ejecutiva NOA. Para imprimir y compartir con equipos HSE, RRHH, Operaciones y ESG de gran minería.',
}

/**
 * One-pager ejecutivo — A4 portrait, 2 páginas.
 * Diseñado para imprimirse a PDF y compartirse internamente.
 * Acceso: /one-pager → Cmd+P → Save as PDF.
 */
export default function OnePagerPage() {
  return (
    <main
      style={{
        background: 'var(--color-surface)',
        color: 'var(--color-on-surface)',
        minHeight: '100vh',
        padding: '0',
      }}
    >
      <style>{`
        @page {
          size: A4 portrait;
          margin: 0;
        }
        @media print {
          .no-print { display: none !important; }
          .page-break { page-break-after: always; }
        }
        .a4-page {
          width: 210mm;
          min-height: 297mm;
          padding: 14mm 14mm 12mm;
          margin: 0 auto;
          background: white;
          position: relative;
        }
        @media screen {
          .a4-page {
            box-shadow: 0 20px 60px rgba(18, 24, 27, 0.08);
            margin: 24px auto;
          }
        }
      `}</style>

      {/* Print button — only visible on screen */}
      <div
        className="no-print"
        style={{
          position: 'fixed',
          top: 20,
          right: 20,
          zIndex: 10,
          display: 'flex',
          gap: 8,
        }}
      >
        <a
          href="/"
          style={{
            background: 'var(--color-surface-container-low)',
            color: 'var(--color-on-surface)',
            padding: '10px 18px',
            borderRadius: 999,
            fontFamily: 'var(--font-body)',
            fontWeight: 600,
            fontSize: '0.85rem',
            textDecoration: 'none',
            border: '1px solid var(--color-outline-variant)',
          }}
        >
          ← Volver
        </a>
        <PrintButton />
      </div>

      {/* PAGE 1 */}
      <section className="a4-page page-break">
        {/* Decorative copper hairline top */}
        <div
          style={{
            height: 2,
            background:
              'linear-gradient(90deg, transparent, var(--color-tertiary), transparent)',
            marginBottom: 18,
          }}
          aria-hidden
        />

        {/* Header — logo + title */}
        <header style={{ marginBottom: 22 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>
            <Image
              src="/brand/logo.png"
              alt="NOA"
              width={56}
              height={56}
              style={{ borderRadius: 8 }}
            />
            <div>
              <h1
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 300,
                  fontSize: '1.6rem',
                  lineHeight: 1.05,
                  color: 'var(--color-on-surface)',
                  margin: 0,
                  letterSpacing: '-0.01em',
                }}
              >
                NOA · Infraestructura de{' '}
                <em style={{ color: 'var(--color-tertiary)', fontStyle: 'italic' }}>
                  recuperación neuro-sensorial
                </em>{' '}
                para minería
              </h1>
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.6rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--color-tertiary)',
                  margin: '4px 0 0',
                }}
              >
                Ficha técnica ejecutiva · v1.0 · {new Date().toLocaleDateString('es-CL')}
              </p>
            </div>
          </div>

          {/* Hero claim */}
          <p
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 300,
              fontSize: '1.4rem',
              lineHeight: 1.25,
              color: 'var(--color-on-surface)',
              margin: '0 0 8px',
            }}
          >
            Recuperación funcional dentro del turno.{' '}
            <em style={{ color: 'var(--color-tertiary)', fontStyle: 'italic' }}>
              Sin sacar a tu gente de faena.
            </em>
          </p>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 300,
              fontSize: '0.78rem',
              color: 'var(--color-on-surface-variant)',
              lineHeight: 1.55,
              margin: 0,
            }}
          >
            Módulo industrial transportable + protocolo neuro-sensorial calibrado. Micro-pausas
            de 8 minutos operadas dentro del flujo del turno — sin pérdida de horas-hombre.
          </p>
        </header>

        {/* PROBLEM stats — 4 columns */}
        <section style={{ marginBottom: 18 }}>
          <SectionLabel>El problema · en cifras</SectionLabel>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: 10,
              marginTop: 10,
            }}
          >
            {NUMBERS.stats.map((s) => (
              <div
                key={s.label}
                style={{
                  background: 'var(--color-surface-container-low)',
                  borderRadius: 8,
                  padding: '10px 12px',
                  borderTop: '2px solid var(--color-tertiary)',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 300,
                    fontSize: '1.55rem',
                    color: 'var(--color-primary-container)',
                    lineHeight: 1,
                    letterSpacing: '-0.02em',
                  }}
                >
                  {s.value}
                </div>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.6rem',
                    color: 'var(--color-on-surface-variant)',
                    margin: '6px 0 4px',
                    lineHeight: 1.35,
                  }}
                >
                  {s.label}
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.5rem',
                    color: 'var(--color-tertiary)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    margin: 0,
                  }}
                >
                  {s.source}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* SYSTEM — 4 sensory layers + cabin image */}
        <section style={{ marginBottom: 18 }}>
          <SectionLabel>El sistema · 4 capas sensoriales</SectionLabel>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 14,
              marginTop: 10,
            }}
          >
            <div
              style={{
                position: 'relative',
                aspectRatio: '4 / 3',
                borderRadius: 8,
                overflow: 'hidden',
                background: 'var(--color-surface-container-low)',
              }}
            >
              <Image
                src="/images/silla-noa-refined.webp"
                alt="Pod de recuperación NOA"
                fill
                sizes="300px"
                style={{ objectFit: 'contain' }}
              />
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {[
                { num: '01', name: 'Luz', desc: 'Iluminación terapéutica calibrada por rol y turno.' },
                { num: '02', name: 'Acústica', desc: 'Frecuencias de baja banda · aislamiento controlado.' },
                { num: '03', name: 'Aroma', desc: 'Estimulación olfativa funcional · perfiles seguros.' },
                { num: '04', name: 'Ergonomía', desc: 'Descarga corporal · zero-gravity recline.' },
              ].map((l) => (
                <li
                  key={l.num}
                  style={{
                    display: 'flex',
                    gap: 10,
                    padding: '8px 0',
                    borderBottom: '1px solid var(--color-outline-variant)',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.7rem',
                      color: 'var(--color-tertiary)',
                      fontWeight: 600,
                      letterSpacing: '0.1em',
                      minWidth: 24,
                    }}
                  >
                    {l.num}
                  </span>
                  <div>
                    <p
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontWeight: 400,
                        fontSize: '0.85rem',
                        color: 'var(--color-on-surface)',
                        margin: 0,
                      }}
                    >
                      {l.name}
                    </p>
                    <p
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.65rem',
                        color: 'var(--color-on-surface-variant)',
                        margin: '2px 0 0',
                        lineHeight: 1.4,
                      }}
                    >
                      {l.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* PILOT timeline */}
        <section>
          <SectionLabel>Despliegue · piloto 6–8 semanas</SectionLabel>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(5, 1fr)',
              gap: 8,
              marginTop: 10,
              position: 'relative',
            }}
          >
            {/* Connector line */}
            <div
              style={{
                position: 'absolute',
                top: 11,
                left: '8%',
                right: '8%',
                height: 1,
                background:
                  'linear-gradient(90deg, var(--color-tertiary), rgba(181,108,54,0.2))',
              }}
              aria-hidden
            />
            {[
              { n: '1', label: 'Baseline' },
              { n: '2', label: 'Instalación' },
              { n: '3', label: 'Adopción guiada' },
              { n: '4', label: 'Medición' },
              { n: '5', label: 'Informe' },
            ].map((s) => (
              <div
                key={s.n}
                style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}
              >
                <div
                  style={{
                    width: 22,
                    height: 22,
                    borderRadius: '50%',
                    background: 'var(--color-tertiary)',
                    color: 'var(--color-on-primary)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.65rem',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 5px',
                    border: '2px solid white',
                  }}
                >
                  {s.n}
                </div>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.6rem',
                    color: 'var(--color-on-surface)',
                    fontWeight: 500,
                    margin: 0,
                  }}
                >
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer page 1 */}
        <footer
          style={{
            position: 'absolute',
            bottom: 12,
            left: 14,
            right: 14,
            display: 'flex',
            justifyContent: 'space-between',
            borderTop: '1px solid var(--color-outline-variant)',
            paddingTop: 8,
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.55rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--color-on-surface-muted)',
              margin: 0,
            }}
          >
            NOACORE SPA · Chile · NOA-CORE v1.0
          </p>
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.55rem',
              letterSpacing: '0.12em',
              color: 'var(--color-on-surface-muted)',
              margin: 0,
            }}
          >
            1 / 2
          </p>
        </footer>
      </section>

      {/* PAGE 2 */}
      <section className="a4-page">
        <div
          style={{
            height: 2,
            background:
              'linear-gradient(90deg, transparent, var(--color-tertiary), transparent)',
            marginBottom: 18,
          }}
          aria-hidden
        />

        {/* Compliance */}
        <section style={{ marginBottom: 18 }}>
          <SectionLabel>Cumplimiento</SectionLabel>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 8,
              marginTop: 10,
            }}
          >
            {COMPLIANCE.items.map((c) => (
              <div
                key={c.title}
                style={{
                  background: 'var(--color-surface-container-low)',
                  borderRadius: 6,
                  padding: '8px 10px',
                }}
              >
                <p
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.5rem',
                    color: 'var(--color-tertiary)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                    margin: '0 0 3px',
                  }}
                >
                  {c.eyebrow}
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.85rem',
                    color: 'var(--color-on-surface)',
                    fontWeight: 400,
                    margin: '0 0 2px',
                  }}
                >
                  {c.title}
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.55rem',
                    color: 'var(--color-on-surface-variant)',
                    margin: 0,
                    lineHeight: 1.4,
                  }}
                >
                  {c.sub}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Commercial models */}
        <section style={{ marginBottom: 18 }}>
          <SectionLabel>Modelos de colaboración</SectionLabel>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 10,
              marginTop: 10,
            }}
          >
            {COMMERCIAL_MODELS.models.map((m) => (
              <div
                key={m.title}
                style={{
                  background: m.highlight
                    ? 'linear-gradient(135deg, var(--color-primary), var(--color-primary-container))'
                    : 'var(--color-surface-container-low)',
                  color: m.highlight
                    ? 'var(--color-on-primary)'
                    : 'var(--color-on-surface)',
                  borderRadius: 8,
                  padding: '10px 12px',
                  position: 'relative',
                }}
              >
                <p
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.5rem',
                    color: m.highlight
                      ? 'var(--color-tertiary-light)'
                      : 'var(--color-tertiary)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                    margin: '0 0 4px',
                  }}
                >
                  {m.eyebrow}
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.95rem',
                    fontWeight: 400,
                    margin: '0 0 4px',
                    color: m.highlight
                      ? 'var(--color-on-primary)'
                      : 'var(--color-on-surface)',
                  }}
                >
                  {m.title}
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.6rem',
                    margin: '0 0 6px',
                    lineHeight: 1.45,
                    color: m.highlight
                      ? 'rgba(255,255,255,0.82)'
                      : 'var(--color-on-surface-variant)',
                  }}
                >
                  {m.description}
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {m.bullets.slice(0, 3).map((b) => (
                    <li
                      key={b}
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.55rem',
                        margin: '3px 0',
                        lineHeight: 1.4,
                        paddingLeft: 10,
                        position: 'relative',
                        color: m.highlight
                          ? 'rgba(255,255,255,0.9)'
                          : 'var(--color-on-surface)',
                      }}
                    >
                      <span
                        style={{
                          position: 'absolute',
                          left: 0,
                          top: '0.55em',
                          width: 4,
                          height: 4,
                          borderRadius: '50%',
                          background: 'var(--color-tertiary)',
                        }}
                      />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing drivers */}
        <section style={{ marginBottom: 18 }}>
          <SectionLabel>Estructura del alcance económico</SectionLabel>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.7rem',
              fontWeight: 300,
              color: 'var(--color-on-surface-variant)',
              margin: '8px 0',
              lineHeight: 1.5,
            }}
          >
            La inversión se estructura sobre 5 drivers acordados con tu equipo de procurement:
          </p>
          <ol
            style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'grid',
              gridTemplateColumns: 'repeat(5, 1fr)',
              gap: 6,
            }}
          >
            {COMMERCIAL_MODELS.pricingDrivers.items.map((d) => (
              <li
                key={d.n}
                style={{
                  padding: '6px 8px',
                  background: 'var(--color-surface-container-low)',
                  borderRadius: 4,
                  borderLeft: '2px solid var(--color-tertiary)',
                }}
              >
                <p
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.55rem',
                    color: 'var(--color-tertiary)',
                    margin: '0 0 2px',
                    fontWeight: 600,
                  }}
                >
                  {d.n}
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.6rem',
                    fontWeight: 500,
                    color: 'var(--color-on-surface)',
                    margin: 0,
                    lineHeight: 1.3,
                  }}
                >
                  {d.label}
                </p>
              </li>
            ))}
          </ol>
        </section>

        {/* Founders quote */}
        <section style={{ marginBottom: 16 }}>
          <SectionLabel>Manifiesto</SectionLabel>
          <blockquote
            style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontSize: '0.85rem',
              color: 'var(--color-on-surface)',
              fontWeight: 300,
              lineHeight: 1.5,
              margin: '8px 0 6px',
              padding: '0 12px',
              borderLeft: '2px solid var(--color-tertiary)',
            }}
          >
            “{MANIFESTO.quote.slice(0, 240)}…”
          </blockquote>
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.55rem',
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              color: 'var(--color-tertiary)',
              margin: '0 0 0 14px',
            }}
          >
            {MANIFESTO.attribution} · {MANIFESTO.attributionRole}
          </p>
        </section>

        {/* Contact CTA */}
        <section
          style={{
            background:
              'linear-gradient(135deg, var(--color-primary), var(--color-primary-container))',
            color: 'var(--color-on-primary)',
            borderRadius: 8,
            padding: '14px 16px',
            marginBottom: 16,
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.5rem',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              color: 'var(--color-tertiary-light)',
              margin: '0 0 4px',
              fontWeight: 600,
            }}
          >
            Coordinar piloto · Respuesta {'<'} 10 días hábiles · NDA disponible
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 300,
              fontSize: '1.2rem',
              color: 'var(--color-on-primary)',
              margin: '0 0 8px',
            }}
          >
            Conversemos sobre tu{' '}
            <em style={{ color: 'var(--color-tertiary-light)', fontStyle: 'italic' }}>
              faena crítica
            </em>
            .
          </h2>
          <div style={{ display: 'flex', gap: 18, fontSize: '0.7rem' }}>
            {FINAL_CTA.founders.map((f) => (
              <div key={f.email}>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontWeight: 500,
                    margin: 0,
                    color: 'var(--color-on-primary)',
                  }}
                >
                  {f.name}
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.65rem',
                    margin: '1px 0 0',
                    color: 'var(--color-tertiary-light)',
                  }}
                >
                  {f.email}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer page 2 */}
        <footer
          style={{
            position: 'absolute',
            bottom: 12,
            left: 14,
            right: 14,
            display: 'flex',
            justifyContent: 'space-between',
            borderTop: '1px solid var(--color-outline-variant)',
            paddingTop: 8,
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.55rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--color-on-surface-muted)',
              margin: 0,
            }}
          >
            {SITE.url.replace('https://', '')} · TRL 5 · DS 594 · Ley 16.744
          </p>
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.55rem',
              letterSpacing: '0.12em',
              color: 'var(--color-on-surface-muted)',
              margin: 0,
            }}
          >
            2 / 2
          </p>
        </footer>
      </section>
    </main>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <span
        style={{
          width: 4,
          height: 4,
          borderRadius: '50%',
          background: 'var(--color-tertiary)',
          flexShrink: 0,
        }}
      />
      <span
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.6rem',
          textTransform: 'uppercase',
          letterSpacing: '0.15em',
          color: 'var(--color-tertiary)',
          fontWeight: 600,
        }}
      >
        {children}
      </span>
    </div>
  )
}
