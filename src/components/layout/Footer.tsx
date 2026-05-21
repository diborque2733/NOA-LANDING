import Link from 'next/link'
import Image from 'next/image'
import { FOOTER, SITE } from '@/lib/copy'

export function Footer() {
  return (
    <footer
      className="relative px-6 md:px-10 pt-20 pb-10 overflow-hidden"
      style={{ background: 'var(--color-primary)', color: 'var(--color-on-primary)' }}
    >
      {/* Decorative blob */}
      <div
        aria-hidden
        className="absolute pointer-events-none"
        style={{
          top: '-20%',
          right: '-10%',
          width: '40vw',
          height: '40vw',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(181,108,54,0.10) 0%, transparent 70%)',
        }}
      />

      <div className="relative mx-auto w-full max-w-[1280px]">
        {/* Top row — Logo + tagline at left, primary nav at right */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12 lg:gap-16 mb-14">
          <div>
            <Image
              src="/brand/logo.png"
              alt="NOA"
              width={140}
              height={48}
              className="h-12 w-auto brightness-0 invert mb-7"
              style={{ opacity: 0.92 }}
            />
            <p
              className="display max-w-md mb-6"
              style={{
                fontSize: 'clamp(1.4rem, 2.4vw, 2rem)',
                color: 'var(--color-on-primary)',
                lineHeight: 1.25,
              }}
            >
              Infraestructura de <em style={{ color: 'var(--color-tertiary-light)' }}>recuperación neuro-sensorial</em> para minería.
            </p>
            <p
              className="text-xs"
              style={{
                color: 'rgba(255,255,255,0.55)',
                fontFamily: 'var(--font-mono)',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
              }}
            >
              {FOOTER.protocolVersion}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {FOOTER.groups.map((group) => (
              <div key={group.title}>
                <p
                  className="text-[10px] uppercase mb-4"
                  style={{
                    color: 'var(--color-tertiary-light)',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 500,
                    letterSpacing: '0.15em',
                  }}
                >
                  {group.title}
                </p>
                <ul className="space-y-2.5">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm transition-colors hover:text-[var(--color-tertiary-light)]"
                        style={{
                          color: 'rgba(255,255,255,0.85)',
                          fontFamily: 'var(--font-body)',
                          fontWeight: 400,
                        }}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Docs + Compliance row */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-10 py-10"
          style={{ borderTop: '1px solid rgba(255,255,255,0.10)', borderBottom: '1px solid rgba(255,255,255,0.10)' }}
        >
          <div>
            <p
              className="text-[10px] uppercase mb-4"
              style={{
                color: 'var(--color-tertiary-light)',
                fontFamily: 'var(--font-mono)',
                fontWeight: 500,
                letterSpacing: '0.15em',
              }}
            >
              Documentación
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {FOOTER.docs.map((doc) => (
                <li key={doc.label} className="flex items-baseline gap-2">
                  <Link
                    href={doc.href}
                    className="text-sm transition-colors hover:text-[var(--color-tertiary-light)]"
                    style={{ color: 'rgba(255,255,255,0.88)', fontFamily: 'var(--font-body)' }}
                  >
                    {doc.label}
                  </Link>
                  {doc.meta && (
                    <span
                      className="text-[10px] uppercase shrink-0"
                      style={{
                        color: 'rgba(255,255,255,0.45)',
                        fontFamily: 'var(--font-mono)',
                        letterSpacing: '0.1em',
                      }}
                    >
                      · {doc.meta}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p
              className="text-[10px] uppercase mb-4"
              style={{
                color: 'var(--color-tertiary-light)',
                fontFamily: 'var(--font-mono)',
                fontWeight: 500,
                letterSpacing: '0.15em',
              }}
            >
              Cumplimiento
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {FOOTER.compliance.map((c) => (
                <li key={c.label} className="flex items-baseline gap-2">
                  <span
                    className="text-sm shrink-0"
                    style={{
                      color: 'rgba(255,255,255,0.88)',
                      fontFamily: 'var(--font-body)',
                      fontWeight: 500,
                    }}
                  >
                    {c.label}
                  </span>
                  <span
                    className="text-[10px] uppercase"
                    style={{
                      color: 'rgba(255,255,255,0.45)',
                      fontFamily: 'var(--font-mono)',
                      letterSpacing: '0.1em',
                    }}
                  >
                    · {c.status}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Company block + copyright */}
        <div className="pt-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>
            <p style={{ fontFamily: 'var(--font-body)', fontWeight: 500, color: 'rgba(255,255,255,0.92)' }}>
              {FOOTER.company.legalName}
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontWeight: 400 }}>
              {FOOTER.company.address}
            </p>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', letterSpacing: '0.05em', marginTop: '0.25rem' }}>
              RUT {FOOTER.company.rut} · {FOOTER.company.email}
            </p>
          </div>

          <div className="flex flex-col md:items-end gap-1">
            <p
              className="text-xs"
              style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'var(--font-body)' }}
            >
              {FOOTER.copyright}
            </p>
            <p
              className="text-[10px] uppercase"
              style={{
                color: 'rgba(255,255,255,0.5)',
                fontFamily: 'var(--font-mono)',
                letterSpacing: '0.15em',
              }}
            >
              {SITE.url.replace('https://', '')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
