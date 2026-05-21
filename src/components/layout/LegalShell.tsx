import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'

interface LegalShellProps {
  eyebrow: string
  title: string
  updated: string
  intro?: string
  children: React.ReactNode
}

/**
 * Shared shell for legal/document pages (privacidad, términos, safety dossier).
 * Brandbook compliant: cream surface, Cormorant headings, copper accents,
 * generous reading column, mono eyebrows.
 */
export function LegalShell({ eyebrow, title, updated, intro, children }: LegalShellProps) {
  return (
    <main
      style={{ background: 'var(--color-surface)', color: 'var(--color-on-surface)' }}
      className="min-h-screen"
    >
      {/* Top bar */}
      <div
        className="sticky top-0 z-10 nav-glass"
        style={{ borderBottom: '1px solid rgba(228,226,220,0.4)' }}
      >
        <div className="mx-auto w-full max-w-3xl px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3" aria-label="NOA — Inicio">
            <Image src="/brand/logo.png" alt="NOA" width={36} height={36} className="h-8 w-auto" />
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm"
            style={{ color: 'var(--color-on-surface-variant)', fontFamily: 'var(--font-body)', fontWeight: 500 }}
          >
            <ArrowLeft className="size-4" strokeWidth={1.5} aria-hidden />
            Volver al sitio
          </Link>
        </div>
      </div>

      <article className="mx-auto w-full max-w-3xl px-6 py-16 md:py-24">
        {/* Copper hairline */}
        <div
          className="h-px w-16 mb-8"
          style={{ background: 'var(--color-tertiary)' }}
          aria-hidden
        />

        <p
          className="text-[11px] uppercase mb-5"
          style={{
            color: 'var(--color-tertiary)',
            fontFamily: 'var(--font-mono)',
            fontWeight: 600,
            letterSpacing: '0.15em',
          }}
        >
          {eyebrow}
        </p>

        <h1
          className="display"
          style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', marginBottom: '1rem' }}
        >
          {title}
        </h1>

        <p
          className="text-[11px] uppercase mb-10"
          style={{
            color: 'var(--color-on-surface-muted)',
            fontFamily: 'var(--font-mono)',
            letterSpacing: '0.12em',
          }}
        >
          Última actualización · {updated}
        </p>

        {intro && (
          <p
            className="body-text mb-12"
            style={{ fontSize: '1.05rem', color: 'var(--color-on-surface-variant)' }}
          >
            {intro}
          </p>
        )}

        <div className="legal-body">{children}</div>

        {/* Footer note */}
        <div
          className="mt-16 pt-8 rounded-2xl p-6"
          style={{ background: 'var(--color-surface-container-low)' }}
        >
          <p
            className="text-sm"
            style={{ color: 'var(--color-on-surface-variant)', fontFamily: 'var(--font-body)', lineHeight: 1.6 }}
          >
            ¿Preguntas sobre este documento? Escribí a{' '}
            <a
              href="mailto:contacto@noa-core.com"
              style={{ color: 'var(--color-tertiary)', fontWeight: 600 }}
            >
              contacto@noa-core.com
            </a>
            . NOACORE SPA · Santiago, Chile.
          </p>
        </div>
      </article>
    </main>
  )
}

/** Section heading inside legal body */
export function LegalSection({ n, title, children }: { n: string; title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: '2.5rem' }}>
      <h2
        className="display"
        style={{ fontSize: '1.4rem', marginBottom: '0.75rem', display: 'flex', gap: '0.6rem', alignItems: 'baseline' }}
      >
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.8rem',
            color: 'var(--color-tertiary)',
            fontWeight: 600,
          }}
        >
          {n}
        </span>
        <span>{title}</span>
      </h2>
      <div
        style={{
          fontFamily: 'var(--font-body)',
          fontWeight: 300,
          fontSize: '0.95rem',
          lineHeight: 1.7,
          color: 'var(--color-on-surface-variant)',
        }}
      >
        {children}
      </div>
    </section>
  )
}
