#!/usr/bin/env node
// Generate NOA end-card image (1920x1080) for video closure
// Layout: logo + claim + compliance chips + CTA — all on cream bg
import sharp from 'sharp'
import fs from 'node:fs/promises'

const W = 1920
const H = 1080

// Compose SVG (will be rasterized via sharp)
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <!-- Cream background gradient -->
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F5F3EE" />
      <stop offset="100%" stop-color="#EDEAE3" />
    </linearGradient>
    <radialGradient id="copperBlob" cx="80%" cy="20%" r="50%">
      <stop offset="0%" stop-color="rgba(181,108,54,0.18)" />
      <stop offset="100%" stop-color="rgba(181,108,54,0)" />
    </radialGradient>
    <radialGradient id="tealBlob" cx="10%" cy="90%" r="50%">
      <stop offset="0%" stop-color="rgba(13,78,74,0.10)" />
      <stop offset="100%" stop-color="rgba(13,78,74,0)" />
    </radialGradient>
  </defs>

  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#copperBlob)"/>
  <rect width="${W}" height="${H}" fill="url(#tealBlob)"/>

  <!-- Copper hairline divider center -->
  <line x1="${W * 0.25}" y1="${H * 0.55}" x2="${W * 0.75}" y2="${H * 0.55}" stroke="#B56C36" stroke-width="1" stroke-opacity="0.4" />

  <!-- Brand wordmark NOA (top center) -->
  <g transform="translate(${W / 2 - 60}, 180)">
    <!-- Logo ring concentric (simplified) -->
    <circle cx="60" cy="60" r="48" fill="none" stroke="#003633" stroke-width="2" opacity="0.85"/>
    <circle cx="60" cy="60" r="34" fill="none" stroke="#003633" stroke-width="1.5" opacity="0.7"/>
    <circle cx="60" cy="60" r="20" fill="#003633"/>
    <circle cx="60" cy="60" r="12" fill="#0D4E4A"/>
  </g>

  <!-- Tagline (Cormorant style, large serif) -->
  <text x="${W / 2}" y="${H * 0.46}" text-anchor="middle"
        font-family="Cormorant Garamond, Georgia, serif"
        font-weight="300"
        font-size="76"
        fill="#12181B"
        letter-spacing="-1">
    Recuperación funcional
  </text>
  <text x="${W / 2}" y="${H * 0.52}" text-anchor="middle"
        font-family="Cormorant Garamond, Georgia, serif"
        font-weight="300"
        font-style="italic"
        font-size="76"
        fill="#B56C36"
        letter-spacing="-1">
    dentro del turno.
  </text>

  <!-- Compliance chips (mono uppercase, copper) -->
  <text x="${W / 2}" y="${H * 0.66}" text-anchor="middle"
        font-family="DM Mono, Consolas, monospace"
        font-size="22"
        fill="#B56C36"
        letter-spacing="3"
        font-weight="500">
    DS 594 · LEY 16.744 · TRL 5 · ISO 45001 EN PROCESO
  </text>

  <!-- CTA -->
  <text x="${W / 2}" y="${H * 0.78}" text-anchor="middle"
        font-family="Manrope, sans-serif"
        font-size="32"
        fill="#003633"
        font-weight="500">
    Coordinar piloto — rfuentes@noa-core.com
  </text>

  <!-- Mini disclosure footer -->
  <text x="${W / 2}" y="${H - 60}" text-anchor="middle"
        font-family="DM Mono, Consolas, monospace"
        font-size="14"
        fill="#7A7F82"
        letter-spacing="2"
        font-weight="400">
    NOACORE SPA · CHILE · NOA-CORE V1.0 · RENDER ILUSTRATIVO
  </text>
</svg>`

const out = '/tmp/noa-end-card.png'
await sharp(Buffer.from(svg))
  .resize(W, H)
  .png()
  .toFile(out)

const stat = await fs.stat(out)
console.log(`✓ ${out} — ${(stat.size / 1024).toFixed(0)} KB`)
