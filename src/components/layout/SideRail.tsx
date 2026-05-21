'use client'

import { useEffect, useState } from 'react'

const SECTIONS = [
  { id: 'manifesto', label: 'Manifiesto' },
  { id: 'problema', label: 'Problema' },
  { id: 'solucion', label: 'Sistema' },
  { id: 'como-funciona', label: 'Proceso' },
  { id: 'diferenciadores', label: 'Diferencial' },
  { id: 'casos', label: 'Casos' },
  { id: 'modelos', label: 'Modelos' },
  { id: 'equipo', label: 'Equipo' },
  { id: 'trust', label: 'Cumplimiento' },
  { id: 'faq', label: 'FAQ' },
  { id: 'contacto', label: 'Contacto' },
] as const

export function SideRail() {
  const [active, setActive] = useState<string>('')

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && entry.intersectionRatio > 0.2) {
            setActive(entry.target.id)
          }
        }
      },
      { threshold: [0.2, 0.5], rootMargin: '-30% 0px -55% 0px' }
    )
    for (const { id } of SECTIONS) {
      const el = document.getElementById(id)
      if (el) obs.observe(el)
    }
    return () => obs.disconnect()
  }, [])

  return (
    <nav
      aria-label="Navegación de sección"
      className="hidden lg:flex fixed top-1/2 right-6 -translate-y-1/2 z-40 flex-col gap-2 pointer-events-none"
    >
      {SECTIONS.map((s) => {
        const isActive = active === s.id
        return (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="group flex items-center justify-end gap-3 pointer-events-auto"
          >
            <span
              className={`text-[10px] uppercase tracking-widest transition-all duration-300 ${
                isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
              }`}
              style={{
                color: isActive ? 'var(--color-primary)' : 'var(--color-on-surface-variant)',
                fontFamily: 'var(--font-mono)',
                fontWeight: isActive ? 600 : 400,
              }}
            >
              {s.label}
            </span>
            <span
              className="h-px transition-all duration-500"
              style={{
                width: isActive ? '20px' : '10px',
                background: isActive ? 'var(--color-primary)' : 'var(--color-outline-variant)',
              }}
              aria-hidden
            />
          </a>
        )
      })}
    </nav>
  )
}
