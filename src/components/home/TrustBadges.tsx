'use client';

import { motion } from 'framer-motion';
import { 
  Shield, 
  Award, 
  CheckCircle2, 
  Lock, 
  Globe, 
  Zap,
  Star,
  BadgeCheck
} from 'lucide-react';

const certifications = [
  {
    icon: Shield,
    title: 'ISO 27001',
    description: 'Information Security',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Lock,
    title: 'SOC 2 Type II',
    description: 'Security Compliance',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: CheckCircle2,
    title: 'GDPR Compliant',
    description: 'Data Protection',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Award,
    title: 'AWS Partner',
    description: 'Cloud Excellence',
    color: 'from-orange-500 to-red-500',
  },
];

const achievements = [
  { value: '#1', label: 'AI Provider in Region' },
  { value: '99.9%', label: 'Uptime SLA' },
  { value: '4.9/5', label: 'Customer Rating' },
  { value: '24/7', label: 'Support Available' },
];

export default function TrustBadges() {
  return (
    <section className="relative py-12 sm:py-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-50 via-white to-gray-50 dark:from-primary-950 dark:via-primary-900 dark:to-primary-950" />
      
      <div className="container-custom relative z-10">
        {/* Certifications */}
        <div className="flex flex-col items-center mb-10 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary-800/10 dark:bg-secondary-500/10 mb-4"
          >
            <BadgeCheck className="w-4 h-4 text-primary-800 dark:text-secondary-400" />
            <span className="text-sm font-medium text-primary-800 dark:text-secondary-400">
              Trusted & Certified
            </span>
          </motion.div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl sm:text-2xl font-bold text-primary-950 dark:text-white text-center"
          >
            Enterprise-Grade Security & Compliance
          </motion.h3>
        </div>

        {/* Certification badges */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10 sm:mb-12">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-4 sm:p-6 rounded-2xl bg-white dark:bg-primary-900 border border-gray-100 dark:border-primary-800 hover:shadow-xl hover:shadow-primary-800/5 dark:hover:shadow-secondary-500/5 transition-all duration-300 text-center"
            >
              {/* Icon */}
              <div className={`w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-3 sm:mb-4 rounded-2xl bg-gradient-to-br ${cert.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <cert.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              
              {/* Title */}
              <h4 className="font-bold text-primary-950 dark:text-white text-sm sm:text-base mb-1">
                {cert.title}
              </h4>
              
              {/* Description */}
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                {cert.description}
              </p>
              
              {/* Verified badge */}
              <div className="absolute top-2 right-2 sm:top-3 sm:right-3">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievement stats */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 lg:gap-16 py-6 sm:py-8 px-4 sm:px-8 rounded-2xl bg-gradient-to-r from-primary-800/5 via-secondary-500/5 to-accent-cyan/5 dark:from-primary-800/20 dark:via-secondary-500/10 dark:to-accent-cyan/20 border border-gray-100 dark:border-primary-800">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="flex items-center justify-center gap-1 mb-1">
                {achievement.label === 'Customer Rating' && (
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 fill-yellow-500" />
                )}
                <span className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-primary-800 to-secondary-600 bg-clip-text text-transparent">
                  {achievement.value}
                </span>
              </div>
              <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                {achievement.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
