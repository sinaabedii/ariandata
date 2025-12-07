'use client';

import Link from 'next/link';
import { ArrowRight, Sparkles, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      {/* Curved Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-800 via-primary-900 to-primary-950" />
        
        {/* Animated organic shapes */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-0 left-[10%] w-[400px] h-[400px] bg-gradient-to-br from-secondary-500/30 to-accent-cyan/20 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
          className="absolute bottom-0 right-[10%] w-[500px] h-[500px] bg-gradient-to-tr from-accent-cyan/30 to-secondary-600/20 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] blur-3xl"
        />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6 sm:mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary-400"></span>
            </span>
            <span className="text-sm font-medium text-white/90">
              Ready to Transform?
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            Start Your AI Journey
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-secondary-400 via-accent-cyan to-secondary-300 bg-clip-text text-transparent"> Today</span>
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg text-gray-300 mb-8 sm:mb-10 max-w-2xl mx-auto px-4">
            Join hundreds of forward-thinking companies that have already transformed 
            their operations with our intelligent solutions.
          </p>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-8 sm:mb-10">
            {['Free Consultation', 'Custom Solutions', '24/7 Support'].map((benefit) => (
              <div key={benefit} className="flex items-center gap-2 text-white/80">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-secondary-400" />
                <span className="text-sm sm:text-base">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-white text-primary-800 font-semibold shadow-2xl shadow-black/20 hover:bg-gray-100 hover:scale-105 active:scale-100 transition-all duration-300"
            >
              Get Started Free
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/products"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full border-2 border-white/30 text-white font-semibold hover:bg-white/10 hover:border-white/50 active:scale-100 transition-all duration-300"
            >
              View Products
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-white/10">
            <p className="text-xs sm:text-sm text-gray-400 mb-4">Trusted by leading companies worldwide</p>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 opacity-60">
              {['TechCorp', 'DataFlow', 'CloudScale', 'AIVentures'].map((company) => (
                <div key={company} className="text-white font-bold text-base sm:text-xl">{company}</div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
