import { Metadata } from 'next';
import ProductsHero from '@/components/products/ProductsHero';
import ProductShowcase from '@/components/products/ProductShowcase';
import ProductFeatures from '@/components/products/ProductFeatures';
import ProductWorkflow from '@/components/products/ProductWorkflow';
import ProductCTA from '@/components/products/ProductCTA';

export const metadata: Metadata = {
  title: 'Products | Arian Data',
  description: 'Explore our comprehensive suite of AI-powered software solutions designed to transform your business operations.',
};

export default function ProductsPage() {
  return (
    <>
      <ProductsHero />
      <ProductShowcase />
      <ProductFeatures />
      <ProductWorkflow />
      <ProductCTA />
    </>
  );
}
