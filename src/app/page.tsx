import { Hero } from '@/components/Hero'
import { Services } from '@/components/Services'
import { Portfolio } from '@/components/Portfolio'
import { LeadForm } from '@/components/LeadForm'
import { Team } from '@/components/Team'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero 
        headline="Transform Your Digital Presence"
        subheading="Innovative Solutions for Modern Businesses"
        ctaText="Get Started"
      />
      <Services />
      <Portfolio />
      <Team />
      <LeadForm />
    </main>
  )
}
