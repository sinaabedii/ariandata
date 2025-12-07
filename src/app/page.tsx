import Hero from '@/components/home/Hero';
import Partners from '@/components/home/Partners';
import Features from '@/components/home/Features';
import Stats from '@/components/home/Stats';
import Services from '@/components/home/Services';
import Technologies from '@/components/home/Technologies';
import Testimonials from '@/components/home/Testimonials';
import CTA from '@/components/home/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <Partners />
      <Features />
      <Stats />
      <Services />
      <Technologies />
      <Testimonials />
      <CTA />
    </>
  );
}
