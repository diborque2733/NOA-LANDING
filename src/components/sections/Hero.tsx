'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Play, X, FileText, Volume2 } from 'lucide-react'
import { HERO } from '@/lib/copy'

// Render headline with optional italic emphasis on specific tokens
function renderHeadline(text: string) {
  // Highlight emphatic phrases — "funcional", "turno", "Sin sacar a tu gente"
  const emphasis = /(funcional|dentro del turno|tu gente de faena|mujeres en minería)/i
  const parts = text.split(emphasis)
  return parts.map((part, i) => {
    if (emphasis.test(part)) {
      return <em key={i}>{part}</em>
    }
    return <span key={i}>{part}</span>
  })
}

export function Hero() {
  const [visible, setVisible] = useState(false)
  const [videoOpen, setVideoOpen] = useState(false)
  const [muted, setMuted] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    if (!videoOpen) {
      // Reset mute state when modal closes
      setMuted(true)
      return
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setVideoOpen(false)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [videoOpen])

  // When user clicks unmute, ensure video keeps playing with audio
  useEffect(() => {
    if (!muted && videoRef.current) {
      videoRef.current.play().catch(() => {})
    }
  }, [muted])

  return (
    <>
      <section
        className="relative overflow-hidden"
        style={{
          background: 'var(--color-surface-container-low)',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: '8rem 5vw 4rem',
        }}
      >
        {/* Background video loop — over cabin render (subtle, legibility-first) */}
        <video
          aria-hidden
          autoPlay
          loop
          muted
          playsInline
          poster={HERO.video.poster}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          style={{ opacity: 0.38 }}
        >
          <source src={HERO.video.loopSrc} type="video/mp4" />
        </video>

        {/* Cream overlay — preserva look brandbook + asegura contraste headline */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(105deg, var(--color-surface-container-low) 0%, rgba(245,243,238,0.78) 38%, rgba(245,243,238,0.4) 70%, rgba(245,243,238,0.65) 100%)',
          }}
        />

        {/* Decorative blob top-right (copper-tinted) */}
        <div
          aria-hidden
          className="absolute pointer-events-none"
          style={{
            top: '-20%',
            right: '-10%',
            width: '70vw',
            height: '70vw',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(181,108,54,0.08) 0%, transparent 70%)',
          }}
        />
        {/* Decorative blob bottom-left (teal-tinted) */}
        <div
          aria-hidden
          className="absolute pointer-events-none"
          style={{
            bottom: '-30%',
            left: '-15%',
            width: '60vw',
            height: '60vw',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(13,78,74,0.06) 0%, transparent 65%)',
          }}
        />
        {/* Tech grid subtle */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none tech-grid-bg"
          style={{ opacity: 0.5 }}
        />
        {/* Copper line at bottom of section */}
        <div
          aria-hidden
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(181,108,54,0.4), transparent)',
          }}
        />

        <div
          className="mx-auto w-full max-w-7xl relative"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(30px)',
            transition:
              'opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1), transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)',
          }}
        >
          <p className="eyebrow flex items-center gap-3 mb-10">
            <span className="copper-pulse" aria-hidden />
            <span>{HERO.eyebrow}</span>
          </p>

          <h1
            className="display-mega"
            style={{
              fontSize: 'clamp(2.8rem, 7vw, 6rem)',
              maxWidth: '1000px',
              marginBottom: '2.5rem',
            }}
          >
            {renderHeadline(HERO.headline)}
          </h1>

          <p
            className="body-text"
            style={{
              fontSize: '1.1rem',
              maxWidth: '560px',
              marginBottom: '3rem',
            }}
          >
            {HERO.subline}
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-3 mb-10">
            <a href={HERO.primaryCta.href} className="btn-primary group">
              <span>{HERO.primaryCta.label}</span>
              <ArrowRight
                className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                strokeWidth={2}
                aria-hidden
              />
            </a>
            <a
              href={HERO.secondaryCta.href}
              target="_blank"
              rel="noopener"
              className="btn-secondary group"
              aria-label={`${HERO.secondaryCta.label} — ${HERO.secondaryCta.meta}`}
            >
              <FileText className="size-4" strokeWidth={1.5} style={{ color: 'var(--color-tertiary)' }} aria-hidden />
              <span>{HERO.secondaryCta.label}</span>
              <span
                className="hidden sm:inline text-[10px] ml-1 px-1.5 py-0.5 rounded-full uppercase"
                style={{
                  color: 'var(--color-on-surface-muted)',
                  fontFamily: 'var(--font-mono)',
                  letterSpacing: '0.1em',
                  background: 'var(--color-surface-container-low)',
                }}
              >
                {HERO.secondaryCta.meta}
              </span>
            </a>
            <button
              type="button"
              onClick={() => setVideoOpen(true)}
              className="btn-tertiary group inline-flex items-center gap-2.5"
              aria-label={`${HERO.videoCta.label} — reproducir video`}
            >
              <span
                className="size-7 rounded-full flex items-center justify-center"
                style={{ background: 'var(--color-tertiary)', color: 'var(--color-on-primary)' }}
                aria-hidden
              >
                <Play className="size-3 ml-0.5" strokeWidth={3} fill="currentColor" />
              </span>
              <span>{HERO.videoCta.label}</span>
            </button>
          </div>

          {/* KPI stat band — visible above-the-fold */}
          <div
            className="mt-2 mb-8 grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-6 max-w-3xl"
            role="group"
            aria-label="Magnitud del problema en cifras"
          >
            {HERO.kpis.map((kpi) => (
              <div key={kpi.label} className="flex flex-col">
                <p
                  className="tabular-nums"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 300,
                    fontSize: 'clamp(2rem, 3.2vw, 2.6rem)',
                    color: 'var(--color-primary-container)',
                    lineHeight: 1,
                    letterSpacing: '-0.015em',
                  }}
                >
                  {kpi.value}
                </p>
                <p
                  className="mt-2 text-xs leading-snug"
                  style={{ color: 'var(--color-on-surface-variant)', maxWidth: '220px' }}
                >
                  {kpi.label}
                </p>
                <p
                  className="mt-1 text-[10px] uppercase"
                  style={{
                    color: 'var(--color-tertiary)',
                    fontFamily: 'var(--font-mono)',
                    letterSpacing: '0.12em',
                  }}
                >
                  {kpi.source}
                </p>
              </div>
            ))}
          </div>

          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.65rem',
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              color: 'var(--color-on-surface-variant)',
            }}
          >
            {HERO.microLine}
          </p>
        </div>
      </section>

      {/* Video modal */}
      {videoOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Render conceptual del módulo NOA · Producto en TRL 5"
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          style={{
            background: 'rgba(18, 24, 27, 0.85)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
          }}
          onClick={() => setVideoOpen(false)}
        >
          <button
            type="button"
            onClick={() => setVideoOpen(false)}
            aria-label="Cerrar video"
            className="absolute top-6 right-6 size-10 rounded-full flex items-center justify-center transition-colors z-20"
            style={{
              background: 'rgba(255,255,255,0.1)',
              color: 'var(--color-on-primary)',
              backdropFilter: 'blur(20px)',
            }}
          >
            <X strokeWidth={1.5} />
          </button>

          <div
            className="relative w-full max-w-5xl flex flex-col gap-3"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal title bar — addresses "video ilustrativo" prominently */}
            <div className="flex items-center justify-between gap-4 px-1">
              <div className="flex flex-col gap-0.5 min-w-0">
                <p
                  className="text-base sm:text-lg"
                  style={{
                    color: 'var(--color-on-primary)',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 400,
                  }}
                >
                  Render conceptual del módulo NOA
                </p>
                <p
                  className="text-[10px] uppercase"
                  style={{
                    color: 'var(--color-tertiary-light)',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 500,
                    letterSpacing: '0.15em',
                  }}
                >
                  Producto en TRL 5 · 22s · audio
                </p>
              </div>
            </div>

            <div
              className="relative w-full aspect-video rounded-2xl overflow-hidden"
              style={{ background: 'var(--color-primary)' }}
            >
              <video
                ref={videoRef}
                src={HERO.video.modalSrc}
                poster={HERO.video.poster}
                controls
                autoPlay
                muted={muted}
                playsInline
                className="w-full h-full object-cover"
              >
                Tu navegador no soporta video HTML5.
              </video>

              {/* Unmute overlay — first 3 seconds */}
              {muted && (
                <button
                  type="button"
                  onClick={() => setMuted(false)}
                  className="absolute top-4 left-4 flex items-center gap-2 px-3 py-2 rounded-full transition-all hover:scale-105"
                  style={{
                    background: 'rgba(181,108,54,0.95)',
                    color: 'var(--color-on-primary)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                  }}
                >
                  <Volume2 className="size-3.5" strokeWidth={2} />
                  <span>Activar sonido</span>
                </button>
              )}

              {/* Watermark — discrete, blinds against "engaño" claims */}
              <div
                aria-hidden
                className="absolute bottom-4 right-4 px-2.5 py-1 rounded text-[10px] uppercase pointer-events-none"
                style={{
                  background: 'rgba(18,24,27,0.55)',
                  color: 'rgba(255,255,255,0.78)',
                  fontFamily: 'var(--font-mono)',
                  letterSpacing: '0.1em',
                  backdropFilter: 'blur(4px)',
                }}
              >
                Render ilustrativo · NOA-CORE v1.0
              </div>
            </div>

            {/* Disclosure note below video */}
            <p
              className="text-[11px] px-1"
              style={{
                color: 'rgba(255,255,255,0.65)',
                fontFamily: 'var(--font-body)',
                fontWeight: 300,
                lineHeight: 1.5,
              }}
            >
              Las escenas combinan renders 3D y composición conceptual. El producto físico está en
              fase de validación industrial (TRL 5) — solicitá visita técnica al taller para verlo
              en persona.
            </p>
          </div>
        </div>
      )}
    </>
  )
}
