import type { Metadata } from 'next'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { CredibilityStrip } from '@/components/ui/CredibilityStrip'
import { Manifesto } from '@/components/sections/Manifesto'
import { Numbers } from '@/components/sections/Numbers'
import { System } from '@/components/sections/System'
import { NotIt } from '@/components/sections/NotIt'
import { Attributes } from '@/components/sections/Attributes'
import { ForWhom } from '@/components/sections/ForWhom'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { UseCases } from '@/components/sections/UseCases'
import { CommercialModels } from '@/components/sections/CommercialModels'
import { Team } from '@/components/sections/Team'
import { Compliance } from '@/components/sections/Compliance'
import { Faq } from '@/components/sections/Faq'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { NavbarV1b } from '@/components/v2/NavbarV1b'
import { VersionPicker } from '@/components/v2/VersionPicker'

export const metadata: Metadata = {
  title: 'NOA · v1b — Oficial con logo navbar corregido',
  description:
    'Variante de la versión oficial NOA con un único cambio: el navbar usa el logo símbolo + wordmark transparente en lugar del logo blanco circular.',
  robots: { index: false, follow: false },
}

/**
 * /v1b — Idéntica a /  (versión oficial completa) EXCEPTO el navbar:
 * usa NavbarV1b que muestra el logo símbolo + wordmark NOA (transparente)
 * en lugar del logo.png con fondo blanco.
 *
 * Esta variante existe para comparar lado-a-lado el efecto del cambio
 * de logo sin tocar el resto del sitio.
 */
export default function HomePageV1b() {
  return (
    <>
      <NavbarV1b />
      <main>
        <Hero />
        <CredibilityStrip />
        <Manifesto />
        <Numbers />
        <System />
        <NotIt />
        <Attributes />
        <ForWhom />
        <HowItWorks />
        <UseCases />
        <CommercialModels />
        <Team />
        <Compliance />
        <Faq />
        <FinalCTA />
      </main>
      <Footer />
      <VersionPicker current="v1b" />
    </>
  )
}
