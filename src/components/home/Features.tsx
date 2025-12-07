'use client';

import { Brain, Cpu, Cloud, Shield, Zap, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';

const features = [
  {
    icon: Brain,
    title: 'Advanced AI',
    description: 'Cutting-edge machine learning models that adapt and learn from your data.',
    color: 'from-violet-500 to-purple-600',
  },
  {
    icon: Cpu,
    title: 'Smart Automation',
    description: 'Automate complex workflows with intelligent systems that reduce manual effort.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Cloud,
    title: 'Cloud Native',
    description: 'Scalable cloud infrastructure that grows with your business needs.',
    color: 'from-cyan-500 to-teal-500',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-grade security protocols protecting your data with encryption.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Zap,
    title: 'Real-time Processing',
    description: 'Lightning-fast data processing enabling instant insights.',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: BarChart3,
    title: 'Analytics Dashboard',
    description: 'Beautiful visualizations that turn complex data into insights.',
    color: 'from-pink-500 to-rose-500',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Features() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-28 bg-white dark:bg-primary-950 overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-secondary-500/10 rounded-full blur-3xl -translate-x-1/2" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-accent-cyan/10 rounded-full blur-3xl translate-x-1/2" />

      <div className="container-custom relative z-10">
        <SectionHeading
          label="Why Choose Us"
          title="Intelligent Features for Modern Business"
          description="Our platform combines cutting-edge AI technology with intuitive design to deliver solutions that truly transform how you work."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group relative p-6 sm:p-8 rounded-[2rem] bg-gradient-to-br from-gray-50 to-white dark:from-primary-900 dark:to-primary-950 border border-gray-100/50 dark:border-primary-800/50 hover:shadow-2xl hover:shadow-primary-800/10 dark:hover:shadow-secondary-500/10 transition-all duration-500 overflow-hidden"
            >
              {/* Curved accent */}
              <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${feature.color} rounded-full opacity-10 group-hover:opacity-20 group-hover:scale-150 transition-all duration-500`} />

              {/* Icon with organic shape */}
              <div className="relative mb-6">
                <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-[1.5rem] bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  <feature.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                {/* Decorative dot */}
                <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-gradient-to-br ${feature.color} opacity-50`} />
              </div>

              {/* Content */}
              <h3 className="text-lg sm:text-xl font-bold text-primary-950 dark:text-white mb-2 sm:mb-3">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                {feature.description}
              </p>

              {/* Bottom wave accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: `linear-gradient(to right, var(--tw-gradient-stops))` }}>
                <div className={`h-full bg-gradient-to-r ${feature.color}`} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

    </section>
  );
}
