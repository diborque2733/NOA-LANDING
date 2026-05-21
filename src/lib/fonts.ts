import { Cormorant_Garamond, Manrope, DM_Mono } from 'next/font/google'

// Display / Headlines — serif editorial brandbook NOA
export const fontDisplay = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  display: 'swap',
})

// Body / Narrativa — sans-serif limpia
export const fontBody = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  weight: ['300', '400', '500', '700'],
  display: 'swap',
})

// Mono — DM Mono para eyebrows, labels técnicos, micro-text
export const fontMono = DM_Mono({
  subsets: ['latin'],
  variable: '--font-dm-mono',
  weight: ['300', '400', '500'],
  display: 'swap',
})
