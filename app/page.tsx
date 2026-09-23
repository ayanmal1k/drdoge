import Navbar from '@/components/navbar'
import HeroSection from '@/components/hero-section'
import FeaturesSection from '@/components/features-section'
import AboutSection from '@/components/about-section'
import EarlyInvestmentSection from '@/components/early-investment-section'
import RoadmapSection from '@/components/roadmap-section'
import SocialSection from '@/components/social-section'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <AboutSection />
        <EarlyInvestmentSection />
        <RoadmapSection />
        <SocialSection />
      </main>
      <Footer />
    </>
  )
}
