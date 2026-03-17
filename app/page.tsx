import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import UrgencyBanner from '@/components/UrgencyBanner';
import FeaturedDevelopments from '@/components/FeaturedDevelopments';
import LifestyleExperience from '@/components/LifestyleExperience';
import InvestorValue from '@/components/InvestorValue';
import Testimonials from '@/components/Testimonials';
import LeadCapture from '@/components/LeadCapture';
import GlobalPresence from '@/components/GlobalPresence';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import StickyCTA from '@/components/StickyCTA';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF9F6]">
      <Navbar />
      <Hero />
      <UrgencyBanner />
      <FeaturedDevelopments />
      <LifestyleExperience />
      <InvestorValue />
      <Testimonials />
      <LeadCapture />
      <GlobalPresence />
      <FinalCTA />
      <Footer />
      <StickyCTA />
    </main>
  );
}
