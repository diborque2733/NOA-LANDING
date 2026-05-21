import { Navbar } from '@/components/layout/Navbar'
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

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* A — Hero / Statement */}
        <Hero />
        {/* Credibility strip */}
        <CredibilityStrip />
        {/* B — Manifesto (quote serif) */}
        <Manifesto />
        {/* B — Numbers (stats grid) */}
        <Numbers />
        {/* C — System (cabin reveal) */}
        <System />
        {/* NOA NO ES band (teal accent break) */}
        <NotIt />
        {/* D — Attributes (3 feature cards) */}
        <Attributes />
        {/* D — ForWhom (4 buyer personas) */}
        <ForWhom />
        {/* C — HowItWorks (timeline + pilot card) */}
        <HowItWorks />
        {/* C — UseCases (asymmetric image+cards) */}
        <UseCases />
        {/* D — CommercialModels (pricing + procurement) */}
        <CommercialModels />
        {/* C — Team (founders + ecosystem) */}
        <Team />
        {/* B — Compliance (6 trust badges) */}
        <Compliance />
        {/* FAQ — accordion */}
        <Faq />
        {/* E — FinalCTA (teal gradient + form) */}
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
