'use client'

import { useState } from 'react'
import { Clock, Shield, Mail, ArrowRight } from 'lucide-react'
import { FINAL_CTA } from '@/lib/copy'

type State = 'idle' | 'loading' | 'success' | 'error'

const ICONS = { Clock, Shield }

export function FinalCTA() {
  const [state, setState] = useState<State>('idle')

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setState('loading')
    const form = new FormData(e.currentTarget)
    const data = Object.fromEntries(form.entries())
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error('Failed')
      setState('success')
      ;(e.target as HTMLFormElement).reset()
    } catch {
      setState('error')
    }
  }

  return (
    <section
      id="final-cta"
      className="relative px-6 md:px-10 py-24 md:py-32 overflow-hidden"
      style={{
        background:
          'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-container) 100%)',
        color: 'var(--color-on-primary)',
      }}
    >
      {/* Decorative blobs */}
      <div
        aria-hidden
        className="absolute pointer-events-none"
        style={{
          top: '-25%',
          right: '-15%',
          width: '60vw',
          height: '60vw',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(181,108,54,0.18) 0%, transparent 65%)',
        }}
      />
      <div
        aria-hidden
        className="absolute pointer-events-none"
        style={{
          bottom: '-30%',
          left: '-20%',
          width: '50vw',
          height: '50vw',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 65%)',
        }}
      />

      <div className="relative mx-auto w-full max-w-[1280px] grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
        {/* Left column */}
        <div>
          <p
            className="text-[10px] uppercase mb-6 flex items-center gap-3"
            style={{
              color: 'var(--color-tertiary-light)',
              fontFamily: 'var(--font-mono)',
              fontWeight: 500,
              letterSpacing: '0.15em',
            }}
          >
            <span className="copper-pulse" aria-hidden />
            <span>{FINAL_CTA.eyebrow}</span>
          </p>
          <h2
            className="display"
            style={{
              fontSize: 'clamp(2.2rem, 5vw, 4rem)',
              color: 'var(--color-on-primary)',
              lineHeight: 1.05,
            }}
          >
            {FINAL_CTA.headlinePre}
            <em style={{ color: 'var(--color-tertiary-light)' }}>{FINAL_CTA.headlineEm}</em>
            {FINAL_CTA.headlinePost}
          </h2>
          <p
            className="mt-8 max-w-md"
            style={{
              fontSize: '1.05rem',
              color: 'rgba(255,255,255,0.78)',
              fontFamily: 'var(--font-body)',
              fontWeight: 300,
              lineHeight: 1.7,
            }}
          >
            {FINAL_CTA.subline}
          </p>

          {/* Trust signals */}
          <div className="mt-10 flex flex-col gap-3">
            {FINAL_CTA.trustSignals.map((sig) => {
              const Icon = ICONS[sig.icon as keyof typeof ICONS] ?? Clock
              return (
                <div
                  key={sig.text}
                  className="flex items-center gap-3 text-sm"
                  style={{ color: 'rgba(255,255,255,0.82)', fontFamily: 'var(--font-body)' }}
                >
                  <Icon
                    className="size-4"
                    strokeWidth={1.5}
                    style={{ color: 'var(--color-tertiary-light)' }}
                    aria-hidden
                  />
                  <span>{sig.text}</span>
                </div>
              )
            })}
          </div>

          {/* Founders */}
          <div className="mt-12 flex flex-col gap-3">
            {FINAL_CTA.founders.map((f) => (
              <a
                key={f.email}
                href={`mailto:${f.email}`}
                className="group flex items-center justify-between gap-4 rounded-2xl p-4 transition-colors"
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.10)',
                }}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div
                    className="size-9 rounded-xl flex items-center justify-center text-sm shrink-0"
                    style={{
                      background: 'rgba(181,108,54,0.18)',
                      color: 'var(--color-tertiary-light)',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 500,
                    }}
                  >
                    {f.initials}
                  </div>
                  <div className="min-w-0">
                    <p
                      className="text-sm truncate"
                      style={{ color: 'var(--color-on-primary)', fontWeight: 500 }}
                    >
                      {f.email}
                    </p>
                    <p
                      className="text-[11px] truncate"
                      style={{ color: 'rgba(255,255,255,0.6)' }}
                    >
                      {f.role}
                    </p>
                  </div>
                </div>
                <Mail
                  className="size-4 shrink-0 transition-transform duration-300 group-hover:scale-110"
                  strokeWidth={1.5}
                  style={{ color: 'rgba(255,255,255,0.4)' }}
                  aria-hidden
                />
              </a>
            ))}
          </div>
        </div>

        {/* Glass form */}
        <div
          className="rounded-2xl p-8 md:p-10"
          style={{
            background: 'rgba(255,255,255,0.07)',
            border: '1px solid rgba(255,255,255,0.12)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            boxShadow: '0 30px 80px -20px rgba(0,0,0,0.25)',
          }}
        >
          <form onSubmit={onSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Field
                label={FINAL_CTA.form.name.label}
                name="name"
                placeholder={FINAL_CTA.form.name.placeholder}
                required
              />
              <Field
                label={FINAL_CTA.form.company.label}
                name="company"
                placeholder={FINAL_CTA.form.company.placeholder}
              />
            </div>
            <Field
              label={FINAL_CTA.form.role.label}
              name="role"
              placeholder={FINAL_CTA.form.role.placeholder}
            />
            <Field
              label={FINAL_CTA.form.email.label}
              name="email"
              type="email"
              placeholder={FINAL_CTA.form.email.placeholder}
              required
            />
            <Field
              label={FINAL_CTA.form.message.label}
              name="message"
              placeholder={FINAL_CTA.form.message.placeholder}
              textarea
            />
            <div className="pt-2">
              <button
                type="submit"
                disabled={state === 'loading'}
                className="group inline-flex items-center justify-center gap-2 w-full rounded-full px-7 py-4 text-sm transition-colors disabled:opacity-60"
                style={{
                  background: 'var(--color-tertiary)',
                  color: 'var(--color-on-primary)',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 700,
                }}
              >
                <span>{state === 'loading' ? 'Enviando…' : FINAL_CTA.form.submit}</span>
                <ArrowRight
                  className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                  strokeWidth={2}
                  aria-hidden
                />
              </button>
            </div>
            {state === 'success' && (
              <div
                role="status"
                className="rounded-xl p-4 text-sm"
                style={{
                  background: 'rgba(181,108,54,0.15)',
                  color: 'var(--color-tertiary-light)',
                }}
              >
                {FINAL_CTA.form.success}
              </div>
            )}
            {state === 'error' && (
              <div
                role="alert"
                className="rounded-xl p-4 text-sm"
                style={{
                  background: 'rgba(255,180,180,0.15)',
                  color: 'rgba(255,200,200,0.95)',
                }}
              >
                {FINAL_CTA.form.error}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  name,
  placeholder,
  type = 'text',
  textarea = false,
  required = false,
}: {
  label: string
  name: string
  placeholder: string
  type?: string
  textarea?: boolean
  required?: boolean
}) {
  const sharedStyle: React.CSSProperties = {
    background: 'rgba(255,255,255,0.06)',
    border: '1px solid rgba(255,255,255,0.12)',
    color: 'var(--color-on-primary)',
  }
  const sharedClasses =
    'w-full rounded-xl px-4 py-3 text-base outline-none transition-colors focus:border-[var(--color-tertiary-light)]'
  return (
    <label className="block">
      <span
        className="text-[10px] uppercase block mb-2"
        style={{
          color: 'rgba(255,255,255,0.6)',
          fontFamily: 'var(--font-mono)',
          fontWeight: 500,
          letterSpacing: '0.15em',
        }}
      >
        {label}
        {required && <span style={{ color: 'var(--color-tertiary-light)' }}> *</span>}
      </span>
      {textarea ? (
        <textarea
          name={name}
          placeholder={placeholder}
          rows={4}
          required={required}
          className={sharedClasses}
          style={sharedStyle}
        />
      ) : (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          required={required}
          className={sharedClasses}
          style={sharedStyle}
        />
      )}
    </label>
  )
}
