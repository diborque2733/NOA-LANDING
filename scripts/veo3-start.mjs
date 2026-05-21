#!/usr/bin/env node
// Veo 3 — long-running video gen with native audio
import fs from 'node:fs/promises'

const API_KEY = process.env.GEMINI_API_KEY
if (!API_KEY) throw new Error('GEMINI_API_KEY missing')

// veo-3.0-fast for speed (8s clips) - we'll generate one and inspect
const MODEL = 'veo-3.1-generate-preview'
const URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:predictLongRunning?key=${API_KEY}`

const PROMPT = `Cinematic close-up tracking shot, slow camera move: a Latin American female mining operator in industrial high-vis orange coverall and white hardhat enters frame in a softly-lit warm wellness pod cabin. She removes her hardhat, sets it on a side table, and reclines into a champagne-colored zero-gravity pod chair. Warm calibrated lighting gently shifts overhead from cool to warm tones. She closes her eyes, exhales. Ambient sound design: very soft ambient pad music, subtle deep breath, distant industrial mining hum fading out. Premium documentary cinematography, shallow depth of field, slight film grain. 16:9. Mood: respectful, premium, restorative, tier-1 mining wellness publication. NO dialogue, NO text on screen.`

const res = await fetch(URL, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    instances: [{ prompt: PROMPT }],
    parameters: {
      aspectRatio: '16:9',
      durationSeconds: 8,
    },
  }),
})
const text = await res.text()
if (!res.ok) {
  console.error('HTTP', res.status, text.slice(0, 600))
  process.exit(1)
}
const data = JSON.parse(text)
console.log('Operation started:')
console.log(JSON.stringify(data, null, 2))

// Save operation ID for polling
if (data.name) {
  await fs.writeFile('/tmp/veo3-op.txt', data.name)
  console.log(`\n✓ Operation ID saved: ${data.name}`)
  console.log(`Poll status with: node scripts/veo3-poll.mjs`)
}
