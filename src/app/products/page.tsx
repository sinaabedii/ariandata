'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Heart, Cpu, ArrowRight, Shield, Calendar, Brain, Zap } from 'lucide-react';

const products = [
  {
    id: 'healthic',
    name: 'Healthic',
    tagline: 'Smart Healthcare Platform',
    description: 'Comprehensive health management system with online appointments, medical records management, lab reservations, and direct communication with specialist doctors.',
    icon: Heart,
    color: 'from-red-500 to-pink-500',
    shadowColor: 'shadow-red-500/25',
    bgGlow: 'from-red-500/10 to-pink-500/10',
    href: '/products/healthic/roadmap',
    features: [
      { icon: Shield, label: 'OTP Authentication' },
      { icon: Calendar, label: 'Online Booking' },
      { label: 'Lab Reservation' },
      { label: 'Medical Records' },
      { label: 'Support Tickets' },
      { label: 'Health Articles' },
    ],
    stats: [
      { value: '100%', label: 'Secure' },
      { value: '24/7', label: 'Available' },
      { value: '8', label: 'Modules' },
    ]
  },
  {
    id: 'aspect',
    name: 'ASPECT',
    tagline: 'AI • Supply • Production • Evaluation • Commerce • Tracking',
    description: 'Manufacturing supply chain automation and intelligence platform. Digitally manages all procurement, production, quality control, warehouse, sales, and after-sales processes.',
    icon: Cpu,
    color: 'from-primary-800 to-secondary-600',
    shadowColor: 'shadow-primary-800/25',
    bgGlow: 'from-primary-800/10 to-secondary-500/10',
    href: '/products/aspect/roadmap',
    features: [
      { icon: Brain, label: 'AI-Powered' },
      { icon: Zap, label: 'Automation' },
      { label: 'Smart Supply' },
      { label: 'Production Control' },
      { label: 'Warehouse FIFO' },
      { label: 'Credit Engine' },
    ],
    stats: [
      { value: '30%', label: 'Cost Reduction' },
      { value: '10x', label: 'Faster Decisions' },
      { value: '7', label: 'Modules' },
    ]
  }
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background-light to-white dark:from-background-dark dark:to-primary-950">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-primary-800/10 to-secondary-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-accent-cyan/10 to-accent-teal/10 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
              <span className="gradient-text">Our Products</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
              Innovative AI-powered solutions designed to transform your business operations
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-8 md:py-16">
        <div className="container-custom">
          <div className="space-y-16 md:space-y-24">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-16 items-center`}
              >
                {/* Product Card */}
                <div className="flex-1 w-full">
                  <div className={`relative p-8 md:p-10 rounded-3xl bg-white dark:bg-primary-900/50 
                                shadow-xl border border-gray-100 dark:border-primary-800`}>
                    {/* Glow Effect */}
                    <div className={`absolute -inset-1 bg-gradient-to-r ${product.bgGlow} rounded-3xl blur-xl opacity-50`} />
                    
                    <div className="relative">
                      {/* Icon & Title */}
                      <div className="flex items-start gap-4 mb-6">
                        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl 
                                      bg-gradient-to-r ${product.color} ${product.shadowColor} shadow-lg flex-shrink-0`}>
                          <product.icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h2 className="text-2xl md:text-3xl font-bold text-primary-800 dark:text-white">
                            {product.name}
                          </h2>
                          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                            {product.tagline}
                          </p>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                        {product.description}
                      </p>

                      {/* Features */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {product.features.map((feature, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-full 
                                     bg-gray-100 dark:bg-primary-800 text-gray-700 dark:text-gray-300"
                          >
                            {feature.icon && <feature.icon className="w-3.5 h-3.5" />}
                            {feature.label}
                          </span>
                        ))}
                      </div>

                      {/* CTA */}
                      <Link href={product.href}>
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl 
                                    bg-gradient-to-r ${product.color} text-white font-semibold 
                                    shadow-lg ${product.shadowColor} hover:shadow-xl transition-shadow`}
                        >
                          View Roadmap
                          <ArrowRight className="w-5 h-5" />
                        </motion.button>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="flex-shrink-0 w-full lg:w-auto">
                  <div className="grid grid-cols-3 lg:grid-cols-1 gap-4">
                    {product.stats.map((stat, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                        className="text-center p-4 md:p-6 rounded-2xl bg-white dark:bg-primary-900/30 
                                 shadow-lg border border-gray-100 dark:border-primary-800"
                      >
                        <div className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${product.color} bg-clip-text text-transparent`}>
                          {stat.value}
                        </div>
                        <div className="text-xs md:text-sm text-gray-500 dark:text-gray-400 mt-1">
                          {stat.label}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-primary-800 dark:text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Contact us to learn more about how our products can help you achieve your goals.
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Get in Touch
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
