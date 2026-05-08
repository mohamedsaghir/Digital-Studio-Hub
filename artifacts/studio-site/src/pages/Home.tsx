import { useCallback } from 'react';
import Navbar from '@/components/sections/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import TrustBar from '@/components/sections/TrustBar';
import ServicesSection from '@/components/sections/ServicesSection';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import PortfolioSection from '@/components/sections/PortfolioSection';
import SocialCarousel from '@/components/sections/SocialCarousel';
import ProcessSection from '@/components/sections/ProcessSection';
import PricingSection from '@/components/sections/PricingSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/sections/Footer';

export default function Home() {
  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-[#F5F5F5] dark:bg-[#0D1B2A] text-[#0D1B2A] dark:text-[#E0E1DD] font-sans transition-colors duration-300">
      <Navbar scrollTo={scrollTo} />
      <main>
        <HeroSection scrollTo={scrollTo} />
        <TrustBar />
        <ServicesSection />
        <WhyChooseUs />
        <PortfolioSection />
        <SocialCarousel onViewMore={() => scrollTo('work')} />
        <ProcessSection />
        <PricingSection />
        <ContactSection scrollTo={scrollTo} />
      </main>
      <Footer scrollTo={scrollTo} />
    </div>
  );
}
