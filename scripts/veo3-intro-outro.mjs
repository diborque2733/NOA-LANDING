#!/usr/bin/env node
// Launch 2 Veo 3 clips: INTRO + OUTRO for full 24s narrative
import fs from 'node:fs/promises'

const API_KEY = process.env.GEMINI_API_KEY
if (!API_KEY) throw new Error('GEMINI_API_KEY missing')

const MODEL = 'veo-3.1-generate-preview'
const URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:predictLongRunning?key=${API_KEY}`

const PROMPTS = {
  intro: `Cinematic establishing shot: aerial slow drone reveal of a vast Chilean Atacama desert copper mine at golden hour, terraced earth tones. Camera drifts slowly toward a single modular industrial wellness cabin (cream/champagne color, container-format) installed near the operations area. Soft ambient sound: distant industrial hum, gentle wind, low atmospheric pad music building subtly. The frame composes with the cabin in the lower-right third. Premium documentary cinematography, slight film grain, color graded warm. 16:9. Mood: vast, serene, industrial-poetic, anticipation. NO dialogue, NO text on screen.`,

  outro: `Cinematic close-up tracking shot: a Latin American female mining operator (30s) opens her eyes, exhales calmly, smiles softly. She sits up gracefully from the champagne recovery pod chair, puts her white hardhat back on with steady hands. Background: warm-lit wellness cabin interior, calibrated overhead lighting. Camera pulls back slowly revealing more of the cabin. She walks confidently out of frame toward bright daylight. Ambient sound: soft breath, gentle wellness pad music resolving warmly, distant industrial hum returning. Premium documentary cinematography, shallow depth of field. 16:9. Mood: restored, capable, dignified, return-to-work. NO dialogue, NO text.`,
}

const NAMES = Object.keys(PROMPTS)
const operations = {}

for (const name of NAMES) {
  const res = await fetch(URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      instances: [{ prompt: PROMPTS[name] }],
      parameters: { aspectRatio: '16:9', durationSeconds: 8 },
    }),
  })
  const text = await res.text()
  if (!res.ok) {
    console.error(`[${name}] HTTP ${res.status}: ${text.slice(0, 300)}`)
    continue
  }
  const data = JSON.parse(text)
  console.log(`[${name}] op=${data.name}`)
  operations[name] = data.name
  await new Promise((r) => setTimeout(r, 1000))
}

await fs.writeFile('/tmp/veo3-ops.json', JSON.stringify(operations, null, 2))
console.log('\n✓ Operations saved to /tmp/veo3-ops.json')
console.log('Poll with: node scripts/veo3-poll-multi.mjs')
