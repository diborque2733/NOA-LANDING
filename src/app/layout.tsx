import type { Metadata } from 'next'
import { fontDisplay, fontBody, fontMono } from '@/lib/fonts'
import { SITE } from '@/content/landing'
import { organizationSchema, websiteSchema } from '@/lib/structured-data'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s · ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    'NOA', 'NOACORE', 'wellness tech minería', 'recuperación neuro-sensorial',
    'mujeres en minería', 'fatiga cognitiva', 'salud ocupacional Chile',
    'CORFO', 'Start-Up Chile', 'cabina modular minera',
  ],
  authors: [{ name: 'NOACORE SPA' }],
  creator: 'NOACORE SPA',
  publisher: 'NOACORE SPA',
  alternates: { canonical: SITE.url },
  openGraph: {
    type: 'website',
    locale: SITE.locale,
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    images: [{ url: SITE.ogImage, width: 1200, height: 630, alt: SITE.name }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    images: [SITE.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es-CL"
      className={`${fontDisplay.variable} ${fontBody.variable} ${fontMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema()) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
