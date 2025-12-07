'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Bot, Database, LineChart, Cog, Layers, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';

const services = [
  {
    icon: Bot,
    title: 'AI & Machine Learning',
    description: 'Custom AI models, NLP, and predictive analytics tailored to your needs.',
    features: ['Custom ML Models', 'NLP Solutions', 'Computer Vision'],
    color: 'from-blue-500 to-cyan-500',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400',
  },
  {
    icon: Database,
    title: 'Data Engineering',
    description: 'Robust data pipelines and warehouses that transform raw data into insights.',
    features: ['ETL Pipelines', 'Data Lakes', 'Real-time Processing'],
    color: 'from-purple-500 to-pink-500',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400',
  },
  {
    icon: LineChart,
    title: 'Business Intelligence',
    description: 'Transform complex data into actionable insights with dashboards.',
    features: ['Custom Dashboards', 'KPI Tracking', 'Data Viz'],
    color: 'from-orange-500 to-red-500',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400',
  },
  {
    icon: Cog,
    title: 'Process Automation',
    description: 'Intelligent automation solutions that reduce costs and increase efficiency.',
    features: ['Workflow Automation', 'RPA Solutions', 'Integration APIs'],
    color: 'from-green-500 to-emerald-500',
    image: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=400',
  },
  {
    icon: Layers,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure designed for performance and reliability.',
    features: ['Cloud Migration', 'Serverless', 'DevOps'],
    color: 'from-indigo-500 to-violet-500',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400',
  },
  {
    icon: Code2,
    title: 'Custom Development',
    description: 'Bespoke software solutions crafted with cutting-edge technologies.',
    features: ['Web Apps', 'Mobile Apps', 'APIs'],
    color: 'from-teal-500 to-cyan-500',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400',
  },
];

export default function Services() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-28 bg-gray-50 dark:bg-primary-950/50 overflow-hidden">
      {/* Curved decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent-cyan/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <SectionHeading
          label="Our Services"
          title="Comprehensive Solutions for Digital Transformation"
          description="From AI-powered analytics to custom software development, we provide end-to-end solutions that drive business growth."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-[1.5rem] sm:rounded-[2rem] bg-white dark:bg-primary-900 overflow-hidden shadow-lg shadow-gray-200/50 dark:shadow-none hover:shadow-2xl hover:shadow-primary-800/10 dark:hover:shadow-secondary-500/10 transition-all duration-500"
            >
              {/* Image header with curved overlay */}
              <div className="relative h-36 sm:h-44 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-60`} />
                
                {/* Curved bottom edge */}
                <svg
                  viewBox="0 0 400 50"
                  preserveAspectRatio="none"
                  className="absolute bottom-0 w-full h-8 sm:h-10"
                >
                  <path
                    d="M0,50 Q200,0 400,50 L400,50 L0,50 Z"
                    className="fill-white dark:fill-primary-900"
                  />
                </svg>

                {/* Icon floating */}
                <div className={`absolute bottom-2 left-6 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white dark:bg-primary-800 shadow-xl flex items-center justify-center`}>
                  <service.icon className={`w-6 h-6 sm:w-7 sm:h-7 bg-gradient-to-br ${service.color} bg-clip-text text-transparent`} style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }} />
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6 pt-6 sm:pt-8">
                <h3 className="text-lg sm:text-xl font-bold text-primary-950 dark:text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Features as pills */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-primary-800 text-gray-600 dark:text-gray-300"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary-800 dark:text-secondary-400 hover:gap-3 transition-all"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
