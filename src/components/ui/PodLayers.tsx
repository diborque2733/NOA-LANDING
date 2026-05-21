'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Sun, Waves, Sparkles, Armchair, type LucideIcon } from 'lucide-react'
import { motion } from 'framer-motion'

type Position = 'top' | 'right' | 'bottom' | 'left'

interface Layer {
  id: string
  icon: LucideIcon
  label: string
  description: string
  position: Position
}

const LAYERS: Layer[] = [
  {
    id: 'luz',
    icon: Sun,
    label: 'Luz',
    description: 'Iluminación terapéutica con perfiles calibrados por rol y turno. Sincroniza el ritmo circadiano.',
    position: 'top',
  },
  {
    id: 'acustica',
    icon: Waves,
    label: 'Acústica',
    description: 'Frecuencias de baja banda que descargan saturación sensorial. Aislamiento controlado.',
    position: 'right',
  },
  {
    id: 'aroma',
    icon: Sparkles,
    label: 'Aroma',
    description: 'Estimulación olfativa funcional. Perfiles seguros y replicables, sin alérgenos.',
    position: 'bottom',
  },
  {
    id: 'ergonomia',
    icon: Armchair,
    label: 'Ergonomía',
    description: 'Diseño de descarga corporal contra sedentarismo en roles críticos. Zero-gravity recline.',
    position: 'left',
  },
]

/**
 * Position config: places the ICON dead-center at the orbital point,
 * then radiates the LABEL outward via flex direction.
 */
const POSITIONS: Record<
  Position,
  {
    /** Container anchor on the orbit (button center sits here) */
    x: string
    y: string
    /** Translate to center the icon at (x,y) */
    tx: string
    ty: string
    /** Flex direction: label radiates AWAY from chair center */
    flexDir: 'flex-col-reverse' | 'flex-row' | 'flex-col' | 'flex-row-reverse'
    /** Text alignment of the label block */
    textAlign: string
    /** Gap between icon and label */
    gap: string
    /** Max width of the label block */
    labelMax: string
  }
> = {
  top:    { x: '50%',  y: '0%',   tx: '-50%', ty: '-50%', flexDir: 'flex-col-reverse', textAlign: 'text-center', gap: 'gap-3', labelMax: '180px' },
  right:  { x: '100%', y: '50%',  tx: '-50%', ty: '-50%', flexDir: 'flex-row',         textAlign: 'text-left',   gap: 'gap-4', labelMax: '200px' },
  bottom: { x: '50%',  y: '100%', tx: '-50%', ty: '-50%', flexDir: 'flex-col',         textAlign: 'text-center', gap: 'gap-3', labelMax: '180px' },
  left:   { x: '0%',   y: '50%',  tx: '-50%', ty: '-50%', flexDir: 'flex-row-reverse', textAlign: 'text-right',  gap: 'gap-4', labelMax: '200px' },
}

interface PodLayersProps {
  className?: string
}

export function PodLayers({ className }: PodLayersProps) {
  const [active, setActive] = useState<string | null>(null)

  return (
    <div className={`relative w-full max-w-3xl mx-auto aspect-square ${className ?? ''}`}>
      {/* Decorative orbital rings */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 400 400"
        aria-hidden
      >
        <defs>
          <linearGradient id="copperRing" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(181,108,54,0.15)" />
            <stop offset="50%" stopColor="rgba(181,108,54,0.45)" />
            <stop offset="100%" stopColor="rgba(181,108,54,0.15)" />
          </linearGradient>
        </defs>
        <motion.circle
          cx="200"
          cy="200"
          r="170"
          fill="none"
          stroke="url(#copperRing)"
          strokeWidth="0.5"
          strokeDasharray="2 4"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.circle
          cx="200"
          cy="200"
          r="140"
          fill="none"
          stroke="rgba(181,108,54,0.15)"
          strokeWidth="0.5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        />
      </svg>

      {/* Pod chair in center — uses real NOA chair from Drive */}
      <motion.div
        className="absolute"
        style={{ inset: '22%' }}
        initial={{ opacity: 0, scale: 0.94 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src="/images/silla-noa-refined.webp"
          alt="Silla NOA — pod de recuperación con cuatro capas sensoriales integradas."
          fill
          sizes="(max-width: 768px) 60vw, 400px"
          className="object-contain"
        />
      </motion.div>

      {/* 4 layer hotspots — icon dead-center at orbital point, label radiates outward */}
      {LAYERS.map((layer, i) => {
        const Icon = layer.icon
        const pos = POSITIONS[layer.position]
        const isActive = active === layer.id

        return (
          <motion.div
            key={layer.id}
            className="absolute"
            style={{
              left: pos.x,
              top: pos.y,
              transform: `translate(${pos.tx}, ${pos.ty})`,
            }}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{
              duration: 0.4,
              delay: 0.2 + i * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <button
              type="button"
              onMouseEnter={() => setActive(layer.id)}
              onMouseLeave={() => setActive(null)}
              onFocus={() => setActive(layer.id)}
              onBlur={() => setActive(null)}
              onClick={() => setActive(isActive ? null : layer.id)}
              aria-label={`${layer.label} — capa sensorial`}
              aria-expanded={isActive}
              className={`group flex ${pos.flexDir} ${pos.gap} items-center outline-none`}
            >
              {/* Hotspot icon (dead center on orbital point) */}
              <div className="relative shrink-0">
                <span
                  aria-hidden
                  className={`absolute inset-0 rounded-full transition-all duration-500 ${
                    isActive ? 'scale-150 opacity-100' : 'scale-100 opacity-50'
                  }`}
                  style={{
                    background:
                      'radial-gradient(circle, rgba(181,108,54,0.25) 0%, transparent 70%)',
                  }}
                />
                <span
                  className="relative size-14 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-focus:scale-105"
                  style={{
                    background: isActive
                      ? 'var(--color-tertiary)'
                      : 'var(--color-surface)',
                    color: isActive
                      ? 'var(--color-on-primary)'
                      : 'var(--color-tertiary)',
                    border: '1px solid rgba(181,108,54,0.4)',
                    boxShadow: isActive
                      ? '0 8px 24px rgba(181,108,54,0.3)'
                      : '0 4px 12px rgba(18,24,27,0.08)',
                  }}
                >
                  <Icon className="size-6" strokeWidth={1.3} aria-hidden />
                </span>
              </div>

              {/* Label + description block — radiates outward */}
              <div
                className={`flex flex-col gap-1.5 ${pos.textAlign}`}
                style={{ minWidth: 0, maxWidth: pos.labelMax }}
              >
                <span
                  className="text-[10px] uppercase block"
                  style={{
                    color: 'var(--color-tertiary)',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 600,
                    letterSpacing: '0.18em',
                  }}
                >
                  Capa
                </span>
                <span
                  className="display block"
                  style={{
                    fontSize: '1.4rem',
                    lineHeight: 1.1,
                    fontWeight: 400,
                    color: isActive ? 'var(--color-tertiary)' : 'var(--color-on-surface)',
                    transition: 'color 0.3s',
                  }}
                >
                  {layer.label}
                </span>
                <motion.span
                  className="text-xs block"
                  style={{
                    color: 'var(--color-on-surface-variant)',
                    fontFamily: 'var(--font-body)',
                    fontWeight: 300,
                    lineHeight: 1.5,
                  }}
                  initial={false}
                  animate={{
                    opacity: isActive ? 1 : 0,
                    height: isActive ? 'auto' : 0,
                  }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  {layer.description}
                </motion.span>
              </div>
            </button>
          </motion.div>
        )
      })}
    </div>
  )
}
