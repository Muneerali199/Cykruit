import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import WhoIsItFor from '@/components/sections/WhoIsItFor';
import WhyCykruit from '@/components/sections/WhyCykruit';
import Stats from '@/components/sections/Stats';
import Testimonials from '@/components/sections/Testimonials';
import FAQ from '@/components/sections/FAQ';
import Newsletter from '@/components/sections/Newsletter';
import FinalCTA from '@/components/sections/FinalCTA';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
      <Navbar />
      <Hero />
      <WhoIsItFor />
      <WhyCykruit />
      <Stats />
      <Testimonials />
      <FAQ />
      <Newsletter />
      <FinalCTA />
      <Footer />
    </main>
  );
}
