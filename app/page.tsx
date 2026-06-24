import { Navbar } from "@/features/landing/components/Navbar"
import { Hero } from "@/features/landing/components/Hero"
import { Introduction } from "@/features/landing/components/Introduction"
import { Services } from "@/features/landing/components/Services"
import { WhatsAppAutomation } from "@/features/landing/components/WhatsAppAutomation"
import { AiAutomation } from "@/features/landing/components/AiAutomation"
import { Process } from "@/features/landing/components/Process"
import { CaseStudies } from "@/features/landing/components/CaseStudies"
import { Testimonials } from "@/features/landing/components/Testimonials"
import { Faq } from "@/features/landing/components/Faq"
import { ContactCTA } from "@/features/landing/components/ContactCTA"
import { Footer } from "@/features/landing/components/Footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-off-white text-off-black transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <Introduction />
        <Services />
        <WhatsAppAutomation />
        <AiAutomation />
        <Process />
        <CaseStudies />
        <Testimonials />
        <Faq />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  )
}
