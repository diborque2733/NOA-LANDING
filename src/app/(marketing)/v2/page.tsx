import type { Metadata } from 'next'
import { Attributes } from '@/components/sections/Attributes'
import { FinalCTA } from '@/components/sections/FinalCTA'
// v2-specific (slim, sin em-dashes)
import { NavbarV2 } from '@/components/v2/NavbarV2'
import { FooterV2 } from '@/components/v2/FooterV2'
import { HeroV2 } from '@/components/v2/HeroV2'
import { NumbersV2 } from '@/components/v2/NumbersV2'
import { SystemV2 } from '@/components/v2/SystemV2'
import { UseCasesV2 } from '@/components/v2/UseCasesV2'
import { TeamV2 } from '@/components/v2/TeamV2'
import { PilotDataV2 } from '@/components/v2/PilotDataV2'
import { VersionPicker } from '@/components/v2/VersionPicker'

export const metadata: Metadata = {
  title: 'NOA · v2 (slim) · Industrial Recovery Tech',
  description:
    'Versión slim del sitio NOA según feedback Lara + Rebeca. Industrial Recovery Tech, 15 minutos de recuperación, piloto entrega data biométrica gestionable.',
  robots: { index: false, follow: false }, // no indexar v2
}

export default function HomePageV2() {
  return (
    <>
      <NavbarV2 />
      <main>
        {/* A — Hero / Statement (Industrial Recovery Tech) */}
        <HeroV2 />
        {/* B — Numbers (stats grid · sin em-dashes · sin CredibilityStrip por feedback) */}
        <NumbersV2 />
        {/* C — System (logo NOA + foto + pill 15 min · sin capas, sin closing) */}
        <SystemV2 />
        {/* D — Attributes (3 feature cards) */}
        <Attributes />
        {/* C — UseCases (sin caption sobreimpreso) */}
        <UseCasesV2 />
        {/* NEW — Piloto entrega data biométrica gestionable */}
        <PilotDataV2 />
        {/* C — Team (sin "founder–market fit por diseño") */}
        <TeamV2 />
        {/* E — FinalCTA (teal gradient + form) */}
        <FinalCTA />
      </main>
      <FooterV2 />
      <VersionPicker current="v2" />
    </>
  )
}
