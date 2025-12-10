'use client';

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function AboutHero() {
  return (
    <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-primary-950 dark:via-background-dark dark:to-primary-900" />
        
        {/* Animated blobs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-secondary-400/20 dark:bg-secondary-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -20, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-1/4 left-1/4 w-64 sm:w-80 h-64 sm:h-80 bg-accent-cyan/20 dark:bg-accent-cyan/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-800/10 dark:bg-secondary-500/10 mb-6"
          >
            <Sparkles className="w-4 h-4 text-primary-800 dark:text-secondary-400" />
            <span className="text-sm font-medium text-primary-800 dark:text-secondary-400">
              About Our Company
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            <span className="text-primary-950 dark:text-white">Pioneering the Future of</span>
            <br />
            <span className="bg-gradient-to-r from-primary-800 via-secondary-600 to-accent-cyan bg-clip-text text-transparent">
              Intelligent Software
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            We are Arian Data - a passionate team of engineers, data scientists, and innovators 
            dedicated to transforming businesses through the power of artificial intelligence.
          </motion.p>

          {/* Floating stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 mt-10 sm:mt-12"
          >
            {[
              { value: '6+', label: 'Years Experience' },
              { value: '150+', label: 'Projects Delivered' },
              { value: '50+', label: 'Happy Clients' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary-800 to-secondary-600 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
