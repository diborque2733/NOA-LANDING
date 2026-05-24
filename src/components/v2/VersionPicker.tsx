'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Layers, X } from 'lucide-react'

interface VersionPickerProps {
  current: 'v1' | 'v1b' | 'v2'
}

/**
 * Picker colapsable de versiones. Por defecto solo se ve un botón discreto
 * arriba a la derecha del navbar. Al click expande las 3 versiones.
 * No interfiere con el contenido del sitio.
 */
export function VersionPicker({ current }: VersionPickerProps) {
  const [open, setOpen] = useState(false)

  const versions = [
    { id: 'v1' as const,  href: '/',    label: 'Oficial',          dot: '#9CCBA6' },
    { id: 'v1b' as const, href: '/v1b', label: 'Oficial + logo',   dot: '#B56C36' },
    { id: 'v2' as const,  href: '/v2',  label: 'Slim Thiess',      dot: 'var(--color-tertiary)' },
  ]

  return (
    <div className="fixed top-20 right-4 z-[60] flex flex-col items-end gap-2">
      {/* Trigger button */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? 'Cerrar selector de versión' : 'Abrir selector de versión'}
        className="flex items-center gap-2 rounded-full px-3 py-2 shadow-lg transition-all hover:scale-105"
        style={{
          background: 'rgba(18,24,27,0.88)',
          backdropFilter: 'blur(12px)',
          color: '#FAFAF8',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.65rem',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
        }}
      >
        {open ? (
          <X className="size-3.5" strokeWidth={2} aria-hidden />
        ) : (
          <Layers className="size-3.5" strokeWidth={2} aria-hidden />
        )}
        <span>v · {current}</span>
      </button>

      {/* Expanded panel */}
      {open && (
        <div
          className="flex flex-col gap-1 rounded-2xl p-2 shadow-xl min-w-[200px]"
          style={{
            background: 'rgba(18,24,27,0.95)',
            backdropFilter: 'blur(16px)',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.65rem',
            letterSpacing: '0.12em',
          }}
        >
          {versions.map((v) => {
            const isActive = v.id === current
            const inner = (
              <span
                className="flex items-center gap-2 rounded-full px-3 py-2 transition-colors"
                style={{
                  background: isActive ? 'rgba(255,255,255,0.10)' : 'transparent',
                  color: isActive ? '#FAFAF8' : 'rgba(255,255,255,0.7)',
                  textTransform: 'uppercase',
                  fontWeight: isActive ? 600 : 500,
                }}
              >
                <span
                  className="size-1.5 rounded-full shrink-0"
                  style={{ background: v.dot }}
                  aria-hidden
                />
                {v.label}
              </span>
            )
            return isActive ? (
              <span key={v.id} aria-current="page">{inner}</span>
            ) : (
              <Link key={v.id} href={v.href} onClick={() => setOpen(false)}>
                {inner}
              </Link>
            )
          })}
        </div>
      )}
    </div>
  )
}
