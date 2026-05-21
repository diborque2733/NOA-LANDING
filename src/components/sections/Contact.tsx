'use client'

import { useState } from 'react'
import { CTA } from '@/content/landing'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Button } from '@/components/ui/Button'

type State = 'idle' | 'loading' | 'success' | 'error'

export function Contact() {
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
      id="contacto"
      className="machined-primary text-[var(--color-on-primary)] px-6 md:px-10 py-24 md:py-[var(--spacing-section)]"
    >
      <div className="mx-auto w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        <div>
          <Eyebrow className="!text-[rgba(255,255,255,0.6)] mb-6 block">{CTA.eyebrow}</Eyebrow>
          <h2 className="display text-4xl md:text-5xl lg:text-6xl text-[var(--color-on-primary)] leading-[1.1]">
            {CTA.headlinePre}
            <em className="text-[var(--color-secondary)]">{CTA.headlineEm}</em>
            {CTA.headlinePost}
          </h2>
          <p className="mt-8 text-lg text-[rgba(255,255,255,0.8)] leading-relaxed font-light max-w-md">
            {CTA.subline}
          </p>
          <div className="mt-12 space-y-3">
            <a
              href="mailto:rfuentes@noa-core.com"
              className="block font-[var(--font-mono)] text-sm hover:text-[var(--color-secondary)] transition-colors"
            >
              rfuentes@noa-core.com
            </a>
            <a
              href="mailto:lpualuan@noa-core.com"
              className="block font-[var(--font-mono)] text-sm hover:text-[var(--color-secondary)] transition-colors"
            >
              lpualuan@noa-core.com
            </a>
          </div>
        </div>

        <form onSubmit={onSubmit} className="space-y-6">
          <Field label={CTA.form.name.label} name="name" placeholder={CTA.form.name.placeholder} />
          <Field label={CTA.form.company.label} name="company" placeholder={CTA.form.company.placeholder} />
          <Field label={CTA.form.role.label} name="role" placeholder={CTA.form.role.placeholder} />
          <Field label={CTA.form.email.label} name="email" type="email" placeholder={CTA.form.email.placeholder} required />
          <Field
            label={CTA.form.message.label}
            name="message"
            placeholder={CTA.form.message.placeholder}
            textarea
          />
          <div className="pt-4">
            <Button
              type="submit"
              variant="secondary"
              size="lg"
              disabled={state === 'loading'}
              className="!bg-[var(--color-secondary)] !text-[var(--color-on-primary)] !border-transparent hover:!bg-[#A05A24] w-full sm:w-auto"
            >
              {state === 'loading' ? 'Enviando…' : CTA.form.submit}
            </Button>
          </div>
          {state === 'success' && (
            <p className="text-sm text-[var(--color-secondary)] mt-2">{CTA.form.success}</p>
          )}
          {state === 'error' && (
            <p className="text-sm text-[rgba(255,200,200,0.9)] mt-2">{CTA.form.error}</p>
          )}
        </form>
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
  const sharedClasses =
    'w-full bg-transparent border-0 border-b border-[rgba(255,255,255,0.25)] focus:border-[var(--color-secondary)] focus:border-b-2 outline-none py-3 text-base text-[var(--color-on-primary)] placeholder:text-[rgba(255,255,255,0.4)] transition-colors'
  return (
    <label className="block">
      <span className="eyebrow !text-[rgba(255,255,255,0.6)] block mb-2">{label}</span>
      {textarea ? (
        <textarea name={name} placeholder={placeholder} rows={3} required={required} className={sharedClasses} />
      ) : (
        <input type={type} name={name} placeholder={placeholder} required={required} className={sharedClasses} />
      )}
    </label>
  )
}
