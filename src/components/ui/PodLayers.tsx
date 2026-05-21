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
  { id: 'luz',       icon: Sun,      label: 'Luz',       description: 'Iluminación terapéutica con perfiles calibrados por rol y turno. Sincroniza el ritmo circadiano.', position: 'top' },
  { id: 'acustica',  icon: Waves,    label: 'Acústica',  description: 'Frecuencias de baja banda que descargan saturación sensorial. Aislamiento controlado.',           position: 'right' },
  { id: 'aroma',     icon: Sparkles, label: 'Aroma',     description: 'Estimulación olfativa funcional. Perfiles seguros y replicables, sin alérgenos.',                  position: 'bottom' },
  { id: 'ergonomia', icon: Armchair, label: 'Ergonomía', description: 'Diseño de descarga corporal contra sedentarismo en roles críticos. Zero-gravity recline.',         position: 'left' },
]

/**
 * Icon coordinates (orbital point) — icon centered EXACTLY here via -50%/-50% translate.
 * Label coordinates — anchored independently, offset away from the chair.
 */
const ORBIT = {
  top:    { iconX: '50%',  iconY: '8%',  labelX: '50%',  labelY: '0%',   labelTransform: 'translate(-50%, -100%)', textAlign: 'center' as const },
  right:  { iconX: '92%',  iconY: '50%', labelX: '100%', labelY: '50%',  labelTransform: 'translate(0%, -50%)',    textAlign: 'left' as const },
  bottom: { iconX: '50%',  iconY: '92%', labelX: '50%',  labelY: '100%', labelTransform: 'translate(-50%, 0%)',    textAlign: 'center' as const },
  left:   { iconX: '8%',   iconY: '50%', labelX: '0%',   labelY: '50%',  labelTransform: 'translate(-100%, -50%)', textAlign: 'right' as const },
}

interface PodLayersProps {
  className?: string
}

export function PodLayers({ className }: PodLayersProps) {
  const [active, setActive] = useState<string | null>(null)

  return (
    <div className={`relative w-full max-w-3xl mx-auto aspect-square ${className ?? ''}`}>
      {/* Decorative orbital rings (centered) */}
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
          r="168"
          fill="none"
          stroke="url(#copperRing)"
          strokeWidth="0.5"
          strokeDasharray="2 4"
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.circle
          cx="200"
          cy="200"
          r="138"
          fill="none"
          stroke="rgba(181,108,54,0.12)"
          strokeWidth="0.5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        />

        {/* SENSORIAL OVERLAYS — visualizan las 4 capas radiando desde la silla */}

        {/* LUZ — rayos de luz cálidos desde arriba */}
        <motion.g
          opacity={active === 'luz' ? 1 : 0.45}
          style={{ transition: 'opacity 0.4s' }}
        >
          <defs>
            <radialGradient id="lightGlow" cx="50%" cy="0%" r="60%">
              <stop offset="0%" stopColor="rgba(255,210,140,0.55)" />
              <stop offset="40%" stopColor="rgba(255,210,140,0.18)" />
              <stop offset="100%" stopColor="rgba(255,210,140,0)" />
            </radialGradient>
          </defs>
          <ellipse cx="200" cy="80" rx="55" ry="80" fill="url(#lightGlow)" />
          {[-18, -9, 0, 9, 18].map((dx, i) => (
            <motion.line
              key={i}
              x1={200 + dx}
              y1={70}
              x2={200 + dx * 1.6}
              y2={140}
              stroke="rgba(255,200,120,0.45)"
              strokeWidth="0.5"
              strokeDasharray="2 3"
              initial={{ opacity: 0, pathLength: 0 }}
              whileInView={{ opacity: 1, pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.6 + i * 0.05 }}
            />
          ))}
        </motion.g>

        {/* ACÚSTICA — ondas concéntricas desde el lado derecho del headrest */}
        <motion.g
          opacity={active === 'acustica' ? 1 : 0.45}
          style={{ transition: 'opacity 0.4s' }}
        >
          {[15, 25, 35].map((r, i) => (
            <motion.path
              key={i}
              d={`M ${280 + r/2} 200 A ${r} ${r} 0 0 1 ${280 + r/2} ${200 + 0.01}`}
              fill="none"
              stroke="rgba(91,156,153,0.55)"
              strokeWidth="0.8"
              strokeDasharray="3 3"
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.7 + i * 0.1 }}
              style={{ transformOrigin: '280px 200px' }}
            />
          ))}
          {/* Sound wave arcs */}
          {[20, 32, 44].map((r, i) => (
            <motion.path
              key={`arc-${i}`}
              d={`M ${275 + r * 0.6} ${200 - r * 0.5} A ${r} ${r} 0 0 1 ${275 + r * 0.6} ${200 + r * 0.5}`}
              fill="none"
              stroke="rgba(181,108,54,0.55)"
              strokeWidth="0.6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 + i * 0.08 }}
            />
          ))}
        </motion.g>

        {/* AROMA — curls/wisps que suben del lado izquierdo bajo */}
        <motion.g
          opacity={active === 'aroma' ? 1 : 0.45}
          style={{ transition: 'opacity 0.4s' }}
        >
          {[0, 1, 2].map((i) => (
            <motion.path
              key={i}
              d={`M ${175 + i * 12} 290 C ${170 + i * 12} 280, ${182 + i * 12} 268, ${175 + i * 12} 256 C ${168 + i * 12} 245, ${180 + i * 12} 232, ${175 + i * 12} 222`}
              fill="none"
              stroke="rgba(181,108,54,0.5)"
              strokeWidth="0.7"
              strokeLinecap="round"
              initial={{ opacity: 0, pathLength: 0 }}
              whileInView={{ opacity: 1, pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.8 + i * 0.15 }}
            />
          ))}
        </motion.g>

        {/* ERGONOMÍA — líneas de descarga corporal / ángulos del recline */}
        <motion.g
          opacity={active === 'ergonomia' ? 1 : 0.45}
          style={{ transition: 'opacity 0.4s' }}
        >
          {/* Recline angle arc */}
          <motion.path
            d="M 100 200 A 50 50 0 0 1 130 165"
            fill="none"
            stroke="rgba(13,78,74,0.45)"
            strokeWidth="0.7"
            strokeDasharray="3 4"
            initial={{ opacity: 0, pathLength: 0 }}
            whileInView={{ opacity: 1, pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.7 }}
          />
          {/* Spine/posture indicators */}
          {[0, 1, 2].map((i) => (
            <motion.line
              key={i}
              x1={115 - i * 4}
              y1={185 + i * 8}
              x2={125 - i * 4}
              y2={175 + i * 8}
              stroke="rgba(13,78,74,0.55)"
              strokeWidth="1"
              strokeLinecap="round"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.9 + i * 0.1 }}
            />
          ))}
        </motion.g>
      </svg>

      {/* Pod chair in center — official NOA chair refined */}
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

      {/* 4 layer hotspots — icon DEAD-CENTER at orbital coord + label positioned independently */}
      {LAYERS.map((layer, i) => {
        const Icon = layer.icon
        const o = ORBIT[layer.position]
        const isActive = active === layer.id

        return (
          <div key={layer.id}>
            {/* ICON — absolute centered at orbital coord */}
            <motion.button
              type="button"
              onMouseEnter={() => setActive(layer.id)}
              onMouseLeave={() => setActive(null)}
              onFocus={() => setActive(layer.id)}
              onBlur={() => setActive(null)}
              onClick={() => setActive(isActive ? null : layer.id)}
              aria-label={`${layer.label} — capa sensorial`}
              aria-expanded={isActive}
              className="absolute outline-none group"
              style={{
                left: o.iconX,
                top: o.iconY,
                transform: 'translate(-50%, -50%)',
                zIndex: 2,
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative">
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
            </motion.button>

            {/* LABEL — positioned independently, radiates outward away from chair */}
            <motion.div
              className="absolute pointer-events-none"
              style={{
                left: o.labelX,
                top: o.labelY,
                transform: o.labelTransform,
                textAlign: o.textAlign,
                maxWidth: o.textAlign === 'center' ? '200px' : '220px',
                padding: o.textAlign === 'center' ? '12px 0' : '0 14px',
                zIndex: 1,
              }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <p
                className="text-[10px] uppercase mb-1"
                style={{
                  color: 'var(--color-tertiary)',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 600,
                  letterSpacing: '0.18em',
                }}
              >
                Capa
              </p>
              <p
                className="display"
                style={{
                  fontSize: '1.4rem',
                  lineHeight: 1.1,
                  fontWeight: 400,
                  color: isActive ? 'var(--color-tertiary)' : 'var(--color-on-surface)',
                  transition: 'color 0.3s',
                }}
              >
                {layer.label}
              </p>
              <motion.p
                className="text-xs mt-2"
                style={{
                  color: 'var(--color-on-surface-variant)',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 300,
                  lineHeight: 1.5,
                  overflow: 'hidden',
                }}
                initial={false}
                animate={{
                  opacity: isActive ? 1 : 0,
                  height: isActive ? 'auto' : 0,
                }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                {layer.description}
              </motion.p>
            </motion.div>
          </div>
        )
      })}
    </div>
  )
}
