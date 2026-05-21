#!/usr/bin/env node
// Generate 3 caption PNGs (transparent bg) to overlay on video
import sharp from 'sharp'

const CAPTIONS = [
  {
    name: 'cap-problem',
    bigText: 'EL COSTO INVISIBLE DE LA FATIGA',
    subText: 'Operadora · Sala de control · 8+ hrs continuas',
  },
  {
    name: 'cap-solution',
    bigText: '8 MINUTOS DE RECUPERACIÓN',
    subText: '4 capas sensoriales calibradas · Sin sacarla del flujo del turno',
  },
  {
    name: 'cap-outcome',
    bigText: 'VUELVE CON FOCO Y CAPACIDAD',
    subText: 'Recuperación funcional medible · NOA',
  },
]

for (const cap of CAPTIONS) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1920" height="1080" viewBox="0 0 1920 1080">
    <!-- Dark gradient strip bottom for legibility -->
    <defs>
      <linearGradient id="grad" x1="0%" y1="100%" x2="0%" y2="0%">
        <stop offset="0%" stop-color="rgba(18,24,27,0.75)"/>
        <stop offset="100%" stop-color="rgba(18,24,27,0)"/>
      </linearGradient>
    </defs>
    <rect x="0" y="780" width="1920" height="300" fill="url(#grad)"/>

    <!-- Big caption (Manrope-equivalent sans bold) -->
    <text x="960" y="940" text-anchor="middle"
          font-family="Helvetica, Arial, sans-serif"
          font-weight="600"
          font-size="48"
          fill="#FFFFFF"
          letter-spacing="2">
      ${cap.bigText}
    </text>

    <!-- Sub caption (copper) -->
    <text x="960" y="980" text-anchor="middle"
          font-family="Helvetica, Arial, sans-serif"
          font-weight="400"
          font-size="22"
          fill="#C9A77B"
          letter-spacing="0.5">
      ${cap.subText}
    </text>
  </svg>`

  await sharp(Buffer.from(svg))
    .resize(1920, 1080)
    .png()
    .toFile(`/tmp/${cap.name}.png`)
  console.log(`✓ /tmp/${cap.name}.png`)
}
