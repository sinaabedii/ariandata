'use client';

import { useEffect, useState } from 'react';
import { Boxes, Sparkles } from 'lucide-react';

export default function ProductsHero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-primary-950 dark:via-background-dark dark:to-primary-900" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-secondary-400/20 dark:bg-secondary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-accent-cyan/20 dark:bg-accent-cyan/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className={`max-w-4xl mx-auto text-center ${mounted ? 'animate-in' : 'opacity-0'}`}>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-primary-900/80 backdrop-blur-sm border border-gray-200 dark:border-primary-700 mb-8">
            <Boxes className="w-4 h-4 text-secondary-500" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Our Product Suite
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-primary-950 dark:text-white">Intelligent Solutions for</span>
            <br />
            <span className="gradient-text">Modern Enterprises</span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10">
            Discover our comprehensive suite of AI-powered products designed to streamline operations, 
            enhance decision-making, and drive unprecedented growth.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-800 dark:text-secondary-400">6+</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Products</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-800 dark:text-secondary-400">150+</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Integrations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-800 dark:text-secondary-400">99.9%</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-800 dark:text-secondary-400">24/7</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
