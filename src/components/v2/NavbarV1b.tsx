'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ArrowRight } from 'lucide-react'
import { NAV } from '@/lib/copy'
import { cn } from '@/lib/cn'

/**
 * Navbar variante /v1b: idéntica a la oficial pero usando el logo
 * vertical símbolo + wordmark (transparente), con altura mayor para
 * que el wordmark "NOA" sea legible.
 */
export function NavbarV1b() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled && 'nav-glass'
      )}
      style={{
        borderBottom: scrolled
          ? '1px solid rgba(228, 226, 220, 0.3)'
          : '1px solid transparent',
      }}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 md:px-10 py-4">
        <Link href="/v1b" className="flex items-center" aria-label="NOA — Inicio">
          {/* Logo vertical 3D: esfera glossy + ondas + wordmark NOA · transparente */}
          <Image
            src="/brand/logo-wordmark-3d.png"
            alt="NOA"
            width={512}
            height={705}
            priority
            className="h-14 md:h-16 w-auto"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {NAV.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm transition-colors hover:text-[var(--color-tertiary)]"
              style={{
                color: 'var(--color-on-surface-variant)',
                fontFamily: 'var(--font-body)',
                fontWeight: 500,
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a href={NAV.cta.href} className="btn-primary group" style={{ padding: '0.65rem 1.25rem', fontSize: '0.85rem' }}>
            <span>{NAV.cta.label}</span>
            <ArrowRight
              className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
              strokeWidth={2}
              aria-hidden
            />
          </a>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden p-2 -mr-2"
          style={{ color: 'var(--color-on-surface)' }}
        >
          {menuOpen ? <X strokeWidth={1.5} /> : <Menu strokeWidth={1.5} />}
        </button>
      </div>

      {menuOpen && (
        <div
          className="lg:hidden nav-glass"
          style={{ borderTop: '1px solid rgba(228, 226, 220, 0.3)' }}
        >
          <nav className="mx-auto flex w-full max-w-7xl flex-col px-6 py-6 gap-1">
            {NAV.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="py-3 text-base transition-colors"
                style={{ color: 'var(--color-on-surface)', fontFamily: 'var(--font-body)' }}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4">
              <a
                href={NAV.cta.href}
                onClick={() => setMenuOpen(false)}
                className="btn-primary w-full justify-center"
              >
                {NAV.cta.label}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
