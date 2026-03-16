import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedDevelopments from '@/components/FeaturedDevelopments';
import LifestyleExperience from '@/components/LifestyleExperience';
import InvestorValue from '@/components/InvestorValue';
import Testimonials from '@/components/Testimonials';
import GlobalPresence from '@/components/GlobalPresence';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF9F6]">
      <Navbar />
      <Hero />
      <FeaturedDevelopments />
      <LifestyleExperience />
      <InvestorValue />
      <Testimonials />
      <GlobalPresence />
      <FinalCTA />
      <Footer />
    </main>
  );
}
