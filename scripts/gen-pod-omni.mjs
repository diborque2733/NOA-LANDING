#!/usr/bin/env node
import fs from 'node:fs/promises'

const API_KEY = process.env.GEMINI_API_KEY
if (!API_KEY) throw new Error('GEMINI_API_KEY missing')

const MODEL = 'gemini-3-pro-image-preview'
const URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${API_KEY}`

const PROMPT = `Cinematic studio product photograph of a single modern reclining wellness pod chair — sophisticated industrial-luxury design suitable for premium mining wellness infrastructure. The chair is finished in soft warm champagne/sand color with cream upholstery accents and brushed brass details. Modern reclining contour, ergonomic shell, headrest with subtle integrated speaker grilles, articulated zero-gravity recline mechanism partially visible. Lit from above-left with soft diffused warm light creating dimensional shadows. Pure white background, no environment, no other objects, no text, no people. Floor reflection subtle. Ultra-sharp, photo-realistic, premium product photography, 1:1 square. Mood: serene, premium, industrial-poetic, recovery-grade. Reference: Tesla Model X seat × Eight Sleep × Hermès interior design.`

const res = await fetch(URL, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    contents: [{ parts: [{ text: PROMPT }] }],
  }),
})

const text = await res.text()
if (!res.ok) {
  console.error('HTTP', res.status, text.slice(0, 500))
  process.exit(1)
}

const data = JSON.parse(text)
if (data.error) {
  console.error('API ERROR:', data.error.message?.slice(0, 400))
  process.exit(1)
}

for (const cand of data.candidates ?? []) {
  for (const part of cand.content?.parts ?? []) {
    const d = part.inlineData ?? part.inline_data
    if (d?.data) {
      const buf = Buffer.from(d.data, 'base64')
      const out = '/tmp/gemini3-pod-test.png'
      await fs.writeFile(out, buf)
      console.log(`OK ${out} — ${(buf.length / 1024).toFixed(0)} KB · mime=${d.mimeType ?? d.mime_type}`)
      process.exit(0)
    }
    if (part.text) console.log('TEXT response:', part.text.slice(0, 200))
  }
}
console.error('No image in response. Keys:', Object.keys(data))
console.error(JSON.stringify(data, null, 2).slice(0, 800))
process.exit(1)
