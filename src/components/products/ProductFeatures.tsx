import { Layers, Zap, Shield, Globe, Clock, HeartHandshake } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';

const features = [
  {
    icon: Layers,
    title: 'Modular Architecture',
    description: 'Build exactly what you need with our modular product architecture. Mix and match components for your perfect solution.',
  },
  {
    icon: Zap,
    title: 'Lightning Performance',
    description: 'Optimized for speed and efficiency. Our products deliver results in milliseconds, not minutes.',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-grade security with SOC2, HIPAA, and GDPR compliance built into every product.',
  },
  {
    icon: Globe,
    title: 'Global Scalability',
    description: 'Deploy anywhere in the world with our multi-region cloud infrastructure.',
  },
  {
    icon: Clock,
    title: '99.9% Uptime',
    description: 'Industry-leading reliability with redundant systems and automatic failover.',
  },
  {
    icon: HeartHandshake,
    title: 'Dedicated Support',
    description: '24/7 expert support with dedicated account managers for enterprise clients.',
  },
];

export default function ProductFeatures() {
  return (
    <section className="section-padding bg-gray-50 dark:bg-primary-950/50">
      <div className="container-custom">
        <SectionHeading
          label="Platform Features"
          title="Built for Enterprise Excellence"
          description="Every product in our suite shares these core capabilities, ensuring consistency and reliability across your entire tech stack."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="relative p-8 rounded-2xl bg-white dark:bg-primary-900 border border-gray-100 dark:border-primary-800 group hover:border-primary-800/30 dark:hover:border-secondary-500/30 transition-all duration-300"
            >
              {/* Number */}
              <div className="absolute top-6 right-6 text-6xl font-bold text-gray-100 dark:text-primary-800/30 select-none">
                {String(index + 1).padStart(2, '0')}
              </div>

              {/* Icon */}
              <div className="relative z-10 w-12 h-12 rounded-xl bg-primary-800/10 dark:bg-secondary-500/10 flex items-center justify-center mb-6 group-hover:bg-primary-800 dark:group-hover:bg-secondary-500 transition-colors duration-300">
                <feature.icon className="w-6 h-6 text-primary-800 dark:text-secondary-400 group-hover:text-white transition-colors duration-300" />
              </div>

              {/* Content */}
              <h3 className="relative z-10 text-xl font-bold text-primary-950 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="relative z-10 text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
