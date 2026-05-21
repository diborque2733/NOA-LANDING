import { Cormorant_Garamond, DM_Sans, DM_Mono } from 'next/font/google'

// Display / Headlines — editorial, alma artística
export const fontDisplay = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  display: 'swap',
})

// Body / Functional — geométrica, industrial (sustituto de Nexa)
export const fontBody = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['300', '400', '500', '700'],
  display: 'swap',
})

// Metadata / Labels / Eyebrows
export const fontMono = DM_Mono({
  subsets: ['latin'],
  variable: '--font-dm-mono',
  weight: ['400', '500'],
  display: 'swap',
})
