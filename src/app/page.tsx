import { Hero } from '@/components/Hero'
import { Services } from '@/components/Services'
import { Portfolio } from '@/components/Portfolio'
import { LeadForm } from '@/components/LeadForm'
import { Team } from '@/components/Team'
import { Navigation } from '@/components/Navigation'
import { CTA } from '@/components/CTA'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Navigation />
      <div className="pt-16">
        <Hero 
          headline="Digital Transformation Made Simple"
          subheading="We build elegant software solutions that help your business grow"
          ctaText="Start Your Project"
        />
        <Services />
        <Portfolio />
        <CTA />
        <Team />
        <LeadForm />
      </div>
    </main>
  )
}
