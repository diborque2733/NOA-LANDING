import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { Manifesto } from '@/components/sections/Manifesto'
import { Problem } from '@/components/sections/Problem'
import { Solution } from '@/components/sections/Solution'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { Differentiators } from '@/components/sections/Differentiators'
import { UseCases } from '@/components/sections/UseCases'
import { Pricing } from '@/components/sections/Pricing'
import { Team } from '@/components/sections/Team'
import { Trust } from '@/components/sections/Trust'
import { Faq } from '@/components/sections/Faq'
import { Contact } from '@/components/sections/Contact'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Manifesto />
        <Problem />
        <Solution />
        <HowItWorks />
        <Differentiators />
        <UseCases />
        <Pricing />
        <Team />
        <Trust />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
