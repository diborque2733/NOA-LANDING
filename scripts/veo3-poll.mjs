#!/usr/bin/env node
import fs from 'node:fs/promises'

const API_KEY = process.env.GEMINI_API_KEY
if (!API_KEY) throw new Error('GEMINI_API_KEY missing')

const opName = (await fs.readFile('/tmp/veo3-op.txt', 'utf8')).trim()
const URL = `https://generativelanguage.googleapis.com/v1beta/${opName}?key=${API_KEY}`

const res = await fetch(URL)
const text = await res.text()
if (!res.ok) {
  console.error('HTTP', res.status, text.slice(0, 600))
  process.exit(1)
}
const data = JSON.parse(text)
const done = data.done === true
console.log(`done=${done}`)

if (done) {
  if (data.error) {
    console.error('Error:', JSON.stringify(data.error, null, 2))
    process.exit(1)
  }
  // Extract video bytes
  const resp = data.response ?? {}
  // Try generateVideoResponse shape
  const videos = resp.generateVideoResponse?.generatedSamples ?? resp.generatedVideos ?? []
  for (let i = 0; i < videos.length; i++) {
    const v = videos[i]
    const videoData = v.video?.videoBytes ?? v.bytesBase64Encoded ?? v.video?.bytes
    if (videoData) {
      const buf = Buffer.from(videoData, 'base64')
      const out = `/Users/diborque/NOA-LANDING/public/media/veo3-clip-${i + 1}.mp4`
      await fs.writeFile(out, buf)
      console.log(`✓ Saved ${out} — ${(buf.length / 1024).toFixed(0)} KB`)
    } else if (v.video?.uri) {
      console.log(`Video URI (download manually): ${v.video.uri}`)
    } else {
      console.log('Sample structure:', JSON.stringify(v, null, 2).slice(0, 500))
    }
  }
  console.log('\nFull response keys:', Object.keys(resp))
} else {
  // Still running
  console.log('Still processing — wait and re-run.')
}
