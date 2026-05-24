import type { Metadata } from 'next'
import { Attributes } from '@/components/sections/Attributes'
import { FinalCTA } from '@/components/sections/FinalCTA'
// v2 components — versión final promovida a home
import { NavbarV2 } from '@/components/v2/NavbarV2'
import { FooterV2 } from '@/components/v2/FooterV2'
import { HeroV2 } from '@/components/v2/HeroV2'
import { NumbersV2 } from '@/components/v2/NumbersV2'
import { SystemV2 } from '@/components/v2/SystemV2'
import { UseCasesV2 } from '@/components/v2/UseCasesV2'
import { TeamV2 } from '@/components/v2/TeamV2'
import { PilotDataV2 } from '@/components/v2/PilotDataV2'

export const metadata: Metadata = {
  title: 'NOA — Industrial Recovery Tech para minería',
  description:
    'Estación autónoma de recuperación neurosensorial para faenas mineras. 15 minutos de recuperación medible, trazable y gestionable dentro del flujo del turno.',
  robots: { index: true, follow: true },
}

/**
 * Home final · /v2 promovida a / (decisión Diego · 24·MAY·2026)
 *
 * Las rutas /v1b y /v2 siguen accesibles para comparación histórica.
 * El sitio público noa-core.com sirve este componente.
 */
export default function HomePage() {
  return (
    <>
      <NavbarV2 />
      <main>
        <HeroV2 />
        <NumbersV2 />
        <SystemV2 />
        <Attributes />
        <UseCasesV2 />
        <PilotDataV2 />
        <TeamV2 />
        <FinalCTA />
      </main>
      <FooterV2 />
    </>
  )
}
