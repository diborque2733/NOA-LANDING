'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { NAV } from '@/content/landing'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/cn'

export function Navbar() {
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
        'sticky top-0 z-50 transition-all duration-300',
        scrolled ? 'glass' : 'bg-transparent'
      )}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 md:px-10 py-5">
        <Link href="/" className="flex items-center gap-3" aria-label="NOA — Inicio">
          <Image
            src="/brand/logo.png"
            alt="NOA"
            width={120}
            height={40}
            priority
            className="h-9 md:h-10 w-auto"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {NAV.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-[var(--color-on-surface-variant)] hover:text-[var(--color-primary)] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href={NAV.cta.href} variant="primary" size="sm">
            {NAV.cta.label}
          </Button>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden p-2 -mr-2"
        >
          {menuOpen ? <X strokeWidth={1.5} /> : <Menu strokeWidth={1.5} />}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden glass border-t border-[rgba(191,200,198,0.4)]">
          <nav className="mx-auto flex w-full max-w-7xl flex-col px-6 py-6 gap-1">
            {NAV.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="py-3 text-base text-[var(--color-on-surface)] hover:text-[var(--color-primary)]"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4">
              <Button href={NAV.cta.href} variant="primary" className="w-full">
                {NAV.cta.label}
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
