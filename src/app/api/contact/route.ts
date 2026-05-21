import { NextResponse } from 'next/server'
import { Resend } from 'resend'

interface Payload {
  name?: string
  company?: string
  role?: string
  email?: string
  message?: string
}

export const runtime = 'nodejs'

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Payload
    const { name, company, role, email, message } = body

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Email inválido' }, { status: 400 })
    }

    const apiKey = process.env.RESEND_API_KEY
    const toRaw = process.env.CONTACT_EMAIL_TO || 'rfuentes@noa-core.com,lpualuan@noa-core.com'
    const from = process.env.CONTACT_EMAIL_FROM || 'NOA Landing <noreply@noa-core.com>'
    const to = toRaw.split(',').map((s) => s.trim()).filter(Boolean)

    if (!apiKey) {
      console.warn('[contact] RESEND_API_KEY no está configurado — log only')
      console.info('[contact] submission:', body)
      return NextResponse.json({ ok: true, mode: 'log' })
    }

    const resend = new Resend(apiKey)

    const html = `
      <div style="font-family: -apple-system, system-ui, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
        <h2 style="font-family: -apple-system, system-ui, sans-serif; font-weight: 600; color: #51765A; border-bottom: 1px solid #D4C9BC; padding-bottom: 12px;">
          Nuevo contacto · NOA Landing
        </h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
          ${[
            ['Nombre', name],
            ['Compañía', company],
            ['Rol', role],
            ['Email', email],
          ]
            .filter(([, v]) => v)
            .map(
              ([k, v]) =>
                `<tr><td style="padding: 8px 0; color: #6E6F66; font-size: 13px; text-transform: uppercase; letter-spacing: 0.1em; vertical-align: top; width: 120px;">${k}</td><td style="padding: 8px 0; color: #1B1C18;">${v}</td></tr>`
            )
            .join('')}
        </table>
        ${
          message
            ? `<div style="margin-top: 24px;"><p style="color: #6E6F66; font-size: 13px; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 8px;">Contexto</p><p style="color: #1B1C18; line-height: 1.6; white-space: pre-wrap;">${message}</p></div>`
            : ''
        }
        <p style="margin-top: 32px; padding-top: 16px; border-top: 1px solid #E8DDD0; color: #C4A882; font-size: 12px;">
          Generado desde noa-core.com
        </p>
      </div>
    `

    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `NOA · Nuevo contacto de ${name || email}`,
      html,
    })

    if (error) {
      console.error('[contact] resend error', error)
      return NextResponse.json({ error: 'No se pudo enviar' }, { status: 500 })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[contact] unexpected', err)
    return NextResponse.json({ error: 'Bad request' }, { status: 400 })
  }
}
