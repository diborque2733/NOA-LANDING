import { SITE } from '@/content/landing'

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'NOACORE SPA',
    alternateName: 'NOA by NoaCore',
    url: SITE.url,
    logo: `${SITE.url}/brand/logo.png`,
    description: SITE.description,
    foundingDate: '2025',
    foundingLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'CL',
        addressRegion: 'Región Metropolitana',
        addressLocality: 'Santiago',
      },
    },
    founders: [
      {
        '@type': 'Person',
        name: 'Rebeca Fuentes',
        jobTitle: 'Co-fundadora, Team Leader',
        email: 'rfuentes@noa-core.com',
      },
      {
        '@type': 'Person',
        name: 'Lara Pualuan',
        jobTitle: 'Co-fundadora, Diseño espacial',
        email: 'lpualuan@noa-core.com',
      },
    ],
    sameAs: [
      'https://www.linkedin.com/in/rebeca-fuentes-gonzalez-07a8935a/',
    ],
    industry: 'Industrial Wellness Technology / Mining',
  }
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'NOA — Recuperación Neuro-Sensorial Industrial',
    url: SITE.url,
    inLanguage: 'es-CL',
    description: SITE.description,
  }
}
