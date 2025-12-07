'use client';

import AnimatedCounter from '@/components/ui/AnimatedCounter';
import { TrendingUp, Users, Award, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const stats = [
  {
    icon: TrendingUp,
    value: 150,
    suffix: '+',
    label: 'Projects Completed',
    description: 'Successfully delivered',
  },
  {
    icon: Users,
    value: 50,
    suffix: '+',
    label: 'Happy Clients',
    description: 'Trusted enterprises',
  },
  {
    icon: Award,
    value: 98,
    suffix: '%',
    label: 'Satisfaction Rate',
    description: 'Exceeding expectations',
  },
  {
    icon: Globe,
    value: 12,
    suffix: '+',
    label: 'Countries Served',
    description: 'Global reach',
  },
];

export default function Stats() {
  return (
    <section className="relative py-16 sm:py-24 overflow-hidden">
      {/* Curved Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-800 via-primary-900 to-primary-950" />
        
        {/* Animated organic shapes */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 45, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-40 -left-40 w-80 h-80 bg-secondary-500/20 rounded-[40%_60%_60%_40%/60%_30%_70%_40%] blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], rotate: [0, -30, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute -bottom-40 -right-40 w-96 h-96 bg-accent-cyan/20 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] blur-3xl"
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center group"
            >
              {/* Icon with organic shape */}
              <div className="relative inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 mb-4 sm:mb-6">
                <div className="absolute inset-0 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] bg-white/10 backdrop-blur-sm group-hover:bg-white/20 group-hover:scale-110 transition-all duration-500" />
                <stat.icon className="relative w-6 h-6 sm:w-8 sm:h-8 text-secondary-400" />
              </div>

              {/* Value */}
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-1 sm:mb-2">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>

              {/* Label */}
              <div className="text-sm sm:text-base lg:text-lg font-semibold text-secondary-300 mb-0.5 sm:mb-1">
                {stat.label}
              </div>

              {/* Description */}
              <div className="text-xs sm:text-sm text-gray-400">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
}
