import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/home/HeroSection';
import ServicesGrid from './components/home/ServicesGrid';
import AudienceSegments from './components/home/AudienceSegments';
import BenefitsSection from './components/home/BenefitsSection';
import SocialProof from './components/home/SocialProof';
import CTASection from './components/home/CTASection';

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <ServicesGrid />
      <AudienceSegments />
      <BenefitsSection />
      <SocialProof />
      <CTASection />
      <Footer />
    </>
  );
}
