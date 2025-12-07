'use client';

import { motion } from 'framer-motion';

const partners = [
  { name: 'TechCorp', logo: 'TC' },
  { name: 'DataFlow', logo: 'DF' },
  { name: 'CloudScale', logo: 'CS' },
  { name: 'AIVentures', logo: 'AV' },
  { name: 'SmartSys', logo: 'SS' },
  { name: 'NeuralNet', logo: 'NN' },
];

export default function Partners() {
  return (
    <section className="py-12 sm:py-16 bg-gray-50 dark:bg-primary-950/50 overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-8 sm:mb-10">
          <p className="text-sm sm:text-base font-medium text-gray-500 dark:text-gray-400">
            Trusted by innovative companies worldwide
          </p>
        </div>

        {/* Infinite scroll container */}
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 dark:from-primary-950/50 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 dark:from-primary-950/50 to-transparent z-10" />

          {/* Scrolling logos */}
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="flex gap-8 sm:gap-12"
          >
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white dark:bg-primary-900 border border-gray-100 dark:border-primary-800 shadow-sm shrink-0"
              >
                {/* Logo placeholder */}
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-primary-800/10 to-secondary-500/10 dark:from-primary-700/20 dark:to-secondary-600/20 flex items-center justify-center">
                  <span className="text-sm sm:text-base font-bold text-primary-800 dark:text-secondary-400">
                    {partner.logo}
                  </span>
                </div>
                <span className="text-sm sm:text-base font-semibold text-gray-700 dark:text-gray-300 whitespace-nowrap">
                  {partner.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
