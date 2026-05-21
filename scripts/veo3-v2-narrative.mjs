#!/usr/bin/env node
// Veo 3.1 — narrative-focused regeneration
// Story arc: problema (fatigue) → solución (entra al módulo) → resultado (vuelve a faena)
// CRITICAL: same operator throughout (continuity), NO text overlays (added in post)
// Aesthetic: industrial-luxury (NOT spa, NOT clinical, NOT hyperbaric)

import fs from 'node:fs/promises'

const API_KEY = process.env.GEMINI_API_KEY
if (!API_KEY) throw new Error('GEMINI_API_KEY missing')

const MODEL = 'veo-3.1-generate-preview'
const URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:predictLongRunning?key=${API_KEY}`

// Detailed character description for continuity across all 3 clips
const OPERATOR = 'Latin American female mining operator, early 30s, dark brown hair tied back in a low ponytail under her white industrial safety hardhat, wearing high-visibility orange industrial coverall with two horizontal silver reflective stripes across the chest, safety glasses pushed up onto the hardhat, slight visible fatigue in her eyes, dignified and professional posture'

const PROMPTS = {
  'v2-problem': `Cinematic documentary establishing shot, real-world industrial mining context. ${OPERATOR}. She is operating a control panel in a Chilean copper mine control room — multiple industrial monitors with abstract dashboards (NO readable text) flicker around her. The room is lit with cool fluorescent industrial overhead lighting (slightly blueish). She rubs her eyes briefly, takes a deep tired breath, glances at her watch on the wrist. Industrial ambient sound: monitor beeping, low HVAC hum, distant truck horns, faint radio chatter. Premium documentary cinematography, medium close-up, shallow depth of field, slight film grain. 16:9. Mood: realistic industrial fatigue at the end of a long shift. NO text overlays, NO captions, NO logos visible.`,

  'v2-solution': `Cinematic continuation — EXACT SAME operator (continuity-critical): ${OPERATOR}. She enters a modern industrial wellness pod cabin module. The interior is NOT spa, NOT yacht cabin, NOT medical/hyperbaric — it is INDUSTRIAL-LUXURY: clean cream walls, brushed metal panels, a single champagne-colored zero-gravity reclining wellness pod chair (similar to a premium massage chair, with visible brushed-brass base and integrated headrest speakers). Plants in small concrete planters near the wall. Subtle calibrated overhead lighting in warm amber tones. She removes her hardhat with steady hands and places it on a clean steel side shelf. She sits down on the pod chair, leans back into the recline position. Camera dollies slowly toward her face as she closes her eyes and exhales deeply. Hands relax on armrests. Ambient sound: very soft warm wellness pad music with subtle deep tones, gentle mechanical whirr of the recline motor, ambient breath. Premium documentary cinematography, shallow depth of field, warm interior lighting. 16:9. Mood: warm restorative recovery — premium industrial wellness (NOT clinical, NOT spa, NOT medical). NO text, NO captions.`,

  'v2-outcome': `Cinematic continuation — EXACT SAME operator (continuity-critical): ${OPERATOR}. She opens her eyes calmly, focused, refreshed. She sits up from the pod chair with composed energy. Picks up her white hardhat from the steel side shelf with steady purposeful hands. Puts it back on confidently. Stands and walks out of the wellness pod cabin with deliberate purposeful stride toward bright daylight. Camera tracks her from a medium-wide angle. As she steps outside, lens flare hits her face — golden afternoon sun. Final 3 seconds: wide cinematic exterior shot reveals her returning to the active mining operation (CAEX haul trucks in the distance, blowing dust, mining infrastructure, sun on her shoulders). She walks with renewed focus and capability. Sound design: ambient wellness pad music resolves warmly, footsteps on concrete, distant industrial mining hum returns, single deliberate confident breath. Premium documentary cinematography, slight film grain, golden hour. 16:9. Mood: restored, dignified, mission-driven, return-to-work with purpose. NO text overlays, NO captions, NO end card (added in post).`,
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
  await new Promise((r) => setTimeout(r, 1500))
}

await fs.writeFile('/tmp/veo3-v2-ops.json', JSON.stringify(operations, null, 2))
console.log('\n✓ Operations saved to /tmp/veo3-v2-ops.json')
