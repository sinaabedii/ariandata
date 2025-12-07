'use client';

import { useState } from 'react';
import Image from 'next/image';
import { 
  Brain, 
  BarChart3, 
  Cog, 
  Database, 
  Shield, 
  Zap,
  Check,
  ArrowRight,
  ChevronDown
} from 'lucide-react';
import Card from '@/components/ui/Card';
import { cn } from '@/lib/utils';

const products = [
  {
    id: 'analytics',
    icon: BarChart3,
    name: 'AI Analytics Platform',
    tagline: 'Transform Data into Decisions',
    description: 'A comprehensive analytics platform powered by advanced AI that transforms raw data into actionable business insights. Features real-time dashboards, predictive analytics, and automated reporting.',
    features: [
      'Real-time data visualization',
      'Predictive analytics engine',
      'Custom dashboard builder',
      'Automated reporting',
      'Natural language queries',
      'Multi-source integration',
    ],
    specs: {
      'Processing Speed': 'Up to 1M records/sec',
      'Data Sources': '150+ integrations',
      'AI Models': '25+ pre-built models',
      'Export Formats': 'PDF, Excel, CSV, API',
    },
    color: 'from-blue-500 to-cyan-500',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
  },
  {
    id: 'automation',
    icon: Cog,
    name: 'Smart Automation Suite',
    tagline: 'Automate the Mundane, Focus on Innovation',
    description: 'End-to-end process automation powered by intelligent AI agents. Automate repetitive tasks, streamline workflows, and reduce operational costs while improving accuracy.',
    features: [
      'Visual workflow builder',
      'AI-powered task routing',
      'Document processing',
      'Integration hub',
      'Audit trail & compliance',
      'Custom triggers & actions',
    ],
    specs: {
      'Automation Speed': '10x faster than manual',
      'Accuracy Rate': '99.8%',
      'Templates': '100+ pre-built',
      'API Calls': 'Unlimited',
    },
    color: 'from-purple-500 to-pink-500',
    image: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=800',
  },
  {
    id: 'platform',
    icon: Database,
    name: 'Data Platform',
    tagline: 'Your Data, Unified & Intelligent',
    description: 'A modern data platform that unifies all your data sources, enables real-time processing, and provides enterprise-grade security. Built for scale and performance.',
    features: [
      'Data lake architecture',
      'Real-time ETL pipelines',
      'Data quality monitoring',
      'Schema evolution',
      'Multi-cloud support',
      'GDPR compliance tools',
    ],
    specs: {
      'Storage': 'Petabyte scale',
      'Latency': 'Sub-millisecond',
      'Connectors': '200+ sources',
      'Encryption': 'AES-256',
    },
    color: 'from-green-500 to-emerald-500',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800',
  },
  {
    id: 'ml',
    icon: Brain,
    name: 'ML Studio',
    tagline: 'Build, Train, Deploy AI Models',
    description: 'A complete machine learning platform for building, training, and deploying AI models at scale. From AutoML to custom deep learning, accelerate your AI initiatives.',
    features: [
      'AutoML capabilities',
      'Custom model training',
      'Model versioning',
      'A/B testing framework',
      'One-click deployment',
      'Performance monitoring',
    ],
    specs: {
      'GPU Support': 'NVIDIA A100, V100',
      'Frameworks': 'TensorFlow, PyTorch',
      'Model Types': '50+ algorithms',
      'Deployment': 'Cloud, Edge, Hybrid',
    },
    color: 'from-orange-500 to-red-500',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800',
  },
  {
    id: 'security',
    icon: Shield,
    name: 'Security Center',
    tagline: 'AI-Powered Threat Intelligence',
    description: 'Comprehensive security platform with AI-driven threat detection, real-time monitoring, and automated response. Protect your digital assets 24/7.',
    features: [
      'Threat intelligence',
      'Anomaly detection',
      'Incident response',
      'Compliance monitoring',
      'Access management',
      'Security analytics',
    ],
    specs: {
      'Detection Rate': '99.9%',
      'Response Time': '<1 second',
      'Compliance': 'SOC2, HIPAA, GDPR',
      'Monitoring': '24/7/365',
    },
    color: 'from-red-500 to-rose-500',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800',
  },
  {
    id: 'custom',
    icon: Zap,
    name: 'Custom Solutions',
    tagline: 'Tailored for Your Unique Needs',
    description: 'Bespoke software solutions designed and built specifically for your organization. Our team works closely with you to deliver exactly what you need.',
    features: [
      'Requirements analysis',
      'Custom architecture',
      'Agile development',
      'Quality assurance',
      'Training & support',
      'Ongoing maintenance',
    ],
    specs: {
      'Methodology': 'Agile/Scrum',
      'Tech Stack': 'Modern & Scalable',
      'Timeline': 'Flexible',
      'Support': 'Dedicated team',
    },
    color: 'from-indigo-500 to-violet-500',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
  },
];

export default function ProductShowcase() {
  const [activeProduct, setActiveProduct] = useState(products[0]);
  const [showSpecs, setShowSpecs] = useState(false);

  return (
    <section className="section-padding bg-white dark:bg-primary-950">
      <div className="container-custom">
        {/* Product Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {products.map((product) => (
            <button
              key={product.id}
              onClick={() => setActiveProduct(product)}
              className={cn(
                'flex items-center gap-2 px-5 py-3 rounded-full font-medium transition-all duration-300',
                activeProduct.id === product.id
                  ? 'bg-gradient-to-r from-primary-800 to-secondary-600 text-white shadow-lg shadow-primary-800/25'
                  : 'bg-gray-100 dark:bg-primary-900 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-primary-800'
              )}
            >
              <product.icon className="w-5 h-5" />
              <span className="hidden sm:inline">{product.name}</span>
            </button>
          ))}
        </div>

        {/* Product Detail */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${activeProduct.color} flex items-center justify-center mb-6 shadow-lg`}>
              <activeProduct.icon className="w-7 h-7 text-white" />
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-primary-950 dark:text-white mb-2">
              {activeProduct.name}
            </h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-400 font-medium mb-4">
              {activeProduct.tagline}
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              {activeProduct.description}
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {activeProduct.features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${activeProduct.color} flex items-center justify-center shrink-0`}>
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                </div>
              ))}
            </div>

            {/* Specs Toggle */}
            <button
              onClick={() => setShowSpecs(!showSpecs)}
              className="flex items-center gap-2 text-sm font-medium text-primary-800 dark:text-secondary-400 mb-4"
            >
              Technical Specifications
              <ChevronDown className={cn('w-4 h-4 transition-transform', showSpecs && 'rotate-180')} />
            </button>

            {/* Specs */}
            <div className={cn(
              'grid grid-cols-2 gap-4 overflow-hidden transition-all duration-300',
              showSpecs ? 'max-h-48 opacity-100 mb-8' : 'max-h-0 opacity-0'
            )}>
              {Object.entries(activeProduct.specs).map(([key, value]) => (
                <div key={key} className="bg-gray-50 dark:bg-primary-900 rounded-lg p-3">
                  <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">{key}</div>
                  <div className="text-sm font-semibold text-primary-950 dark:text-white">{value}</div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4">
              <button className="btn-primary">
                Request Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="btn-secondary">
                Learn More
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2">
            <Card className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={activeProduct.image}
                alt={activeProduct.name}
                fill
                className="object-cover"
              />
              <div className={`absolute inset-0 bg-gradient-to-tr ${activeProduct.color} opacity-20`} />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
