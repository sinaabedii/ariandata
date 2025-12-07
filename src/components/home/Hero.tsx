'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { ArrowRight, Play, Sparkles, CheckCircle2, Zap, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import AIAnimation from '@/json/Artificial Intelligence.json';

// Dynamic import for Lottie to avoid SSR issues
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-16 sm:pt-20 overflow-hidden">
      {/* Fluid Background */}
      <div className="absolute inset-0 -z-10">
        {/* Base gradient with organic shape */}
        <div className="absolute inset-0 bg-gradient-to-br from-background-light via-secondary-50/50 to-primary-50 dark:from-background-dark dark:via-primary-950 dark:to-background-dark" />
        
        {/* Animated fluid blobs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-10 right-[10%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-gradient-to-br from-secondary-400/30 to-accent-cyan/20 dark:from-secondary-500/20 dark:to-accent-cyan/10 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            x: [0, -20, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute bottom-20 left-[5%] w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-gradient-to-tr from-accent-cyan/30 to-primary-500/20 dark:from-accent-cyan/15 dark:to-primary-700/10 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] blur-3xl"
        />
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] sm:w-[900px] h-[600px] sm:h-[900px] opacity-[0.03] dark:opacity-[0.05]"
        >
          <div className="absolute inset-0 border-[40px] border-primary-800 rounded-full" />
          <div className="absolute inset-20 border-[20px] border-secondary-500 rounded-full" />
        </motion.div>
      </div>

      <div className="container-custom relative z-10 py-8 sm:py-0">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6 sm:space-y-8 text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={mounted ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-primary-900/80 backdrop-blur-sm border border-gray-200/50 dark:border-primary-700/50 shadow-lg shadow-primary-800/5"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                AI-Powered Solutions
              </span>
            </motion.div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              <span className="text-primary-950 dark:text-white">Transform Your</span>
              <br />
              <span className="bg-gradient-to-r from-primary-800 via-secondary-600 to-accent-cyan bg-clip-text text-transparent">
                Business with AI
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-xl mx-auto lg:mx-0">
              We build intelligent software solutions that empower businesses to innovate, 
              automate, and excel in the digital age.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              {[
                { icon: CheckCircle2, text: 'Enterprise Ready' },
                { icon: Zap, text: 'Lightning Fast' },
                { icon: Shield, text: 'Secure & Reliable' },
              ].map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 dark:bg-primary-900/60 backdrop-blur-sm border border-gray-200/30 dark:border-primary-700/30"
                >
                  <item.icon className="w-4 h-4 text-secondary-600 dark:text-secondary-400" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{item.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-primary-800 to-secondary-600 text-white font-semibold shadow-xl shadow-primary-800/25 hover:shadow-primary-800/40 hover:scale-105 transition-all duration-300"
              >
                Explore Products
                <ArrowRight className="w-5 h-5" />
              </Link>
              <button className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full border-2 border-gray-200 dark:border-primary-700 text-gray-700 dark:text-gray-300 font-semibold hover:bg-gray-50 dark:hover:bg-primary-900 hover:scale-105 transition-all duration-300">
                <Play className="w-5 h-5" />
                Watch Demo
              </button>
            </div>

            {/* Social Proof - Responsive */}
            <div className="pt-6 sm:pt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-8">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary-800 dark:text-secondary-400">150+</div>
                <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Projects</div>
              </div>
              <div className="w-px h-10 sm:h-12 bg-gray-200 dark:bg-primary-700" />
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary-800 dark:text-secondary-400">98%</div>
                <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Satisfaction</div>
              </div>
              <div className="w-px h-10 sm:h-12 bg-gray-200 dark:bg-primary-700" />
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary-800 dark:text-secondary-400">24/7</div>
                <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Support</div>
              </div>
            </div>
          </motion.div>

          {/* Visual Element - Organic Shape - Now visible on all screens */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={mounted ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative aspect-square w-[280px] sm:w-[350px] md:w-[400px] lg:w-[450px] mx-auto">
              {/* Organic blob shape container */}
              <div className="absolute inset-0 rounded-[40%_60%_60%_40%/60%_30%_70%_40%] bg-gradient-to-br from-primary-100/80 via-secondary-100/60 to-accent-cyan/30 dark:from-primary-800/40 dark:via-secondary-800/30 dark:to-accent-cyan/20 animate-morph" />
              
              {/* Inner container with Lottie Animation */}
              <div className="absolute inset-3 sm:inset-4 md:inset-6 rounded-[60%_40%_40%_60%/40%_60%_40%_60%] bg-white/60 dark:bg-primary-900/60 backdrop-blur-md border border-white/50 dark:border-primary-700/50 shadow-2xl flex items-center justify-center overflow-hidden">
                <div className="w-full h-full p-2 sm:p-4">
                  <Lottie
                    animationData={AIAnimation}
                    loop={true}
                    className="w-full h-full"
                  />
                </div>
              </div>

              {/* Floating elements - hidden on very small screens */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-2 -left-2 sm:top-0 sm:left-0 p-2 sm:p-3 md:p-4 rounded-2xl sm:rounded-3xl bg-white dark:bg-primary-900 shadow-xl border border-gray-100/50 dark:border-primary-700/50 hidden sm:block"
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white">AI Ready</div>
                    <div className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">99.9% Accuracy</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-2 -right-2 sm:bottom-0 sm:right-0 p-2 sm:p-3 md:p-4 rounded-2xl sm:rounded-3xl bg-white dark:bg-primary-900 shadow-xl border border-gray-100/50 dark:border-primary-700/50 hidden sm:block"
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-gradient-to-br from-secondary-400 to-secondary-600 flex items-center justify-center">
                    <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white">Fast Deploy</div>
                    <div className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">Cloud Native</div>
                  </div>
                </div>
              </motion.div>

              {/* Decorative circles - hidden on mobile */}
              <div className="absolute -top-6 right-1/4 w-4 h-4 rounded-full bg-secondary-400 opacity-60 animate-ping hidden sm:block" />
              <div className="absolute bottom-1/4 -left-4 w-3 h-3 rounded-full bg-accent-cyan opacity-60 animate-pulse hidden sm:block" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator - Hidden on mobile */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2"
      >
        <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Scroll to explore</span>
        <div className="w-5 sm:w-6 h-8 sm:h-10 rounded-full border-2 border-gray-300 dark:border-gray-600 flex items-start justify-center p-1.5 sm:p-2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1 sm:w-1.5 h-2 sm:h-2.5 rounded-full bg-gray-400 dark:bg-gray-500"
          />
        </div>
      </motion.div>

    </section>
  );
}
