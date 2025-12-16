import Hero from '@/components/home/Hero';
import Partners from '@/components/home/Partners';
import Features from '@/components/home/Features';
import Stats from '@/components/home/Stats';
import HowWeWork from '@/components/home/HowWeWork';
import NeuralNetwork from '@/components/home/NeuralNetwork';
import Technologies from '@/components/home/Technologies';
import TrustBadges from '@/components/home/TrustBadges';
import Testimonials from '@/components/home/Testimonials';
import LatestPosts from '@/components/home/LatestPosts';
import CTA from '@/components/home/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <Partners />
      <Features />
      <Stats />
      <HowWeWork />
      <NeuralNetwork />
      <Technologies />
      <TrustBadges />
      <Testimonials />
      <LatestPosts />
      <CTA />
    </>
  );
}
