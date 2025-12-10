'use client';

import { motion } from 'framer-motion';
import { RoadmapTimeline, RoadmapStep } from '@/components/products/roadmap';
import { Cpu, TrendingDown, Zap, Brain } from 'lucide-react';

const aspectSteps: RoadmapStep[] = [
  {
    id: 1,
    title: 'Supply - Smart Procurement',
    description: 'Intelligent raw material procurement system connected to commodity exchange with AI-powered price prediction.',
    details: [
      'Direct commodity exchange API integration',
      'Automatic supply and trade data retrieval',
      'AI-powered optimal purchase timing suggestions',
      'Contract management and real-time pricing',
      'Supplier comparison system',
      'ML-based price forecasting models'
    ],
    icon: 'supply',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=200&h=200&fit=crop'
  },
  {
    id: 2,
    title: 'Factory Entry - Gate Automation',
    description: 'Smart factory entry control with bill of lading OCR, license plate recognition, and automatic barrier.',
    details: [
      'Automatic bill of lading recognition with OCR',
      'Bill of lading vs purchase order matching',
      'Vehicle plate verification with bill of lading',
      'Automatic barrier operation',
      'Operator-free entry/exit logging',
      'Direct integration with incoming QC system'
    ],
    icon: 'gate',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&h=200&fit=crop'
  },
  {
    id: 3,
    title: 'Production - Smart Manufacturing',
    description: 'Intelligent production system with real-time monitoring, visual quality control, and OEE dashboard.',
    details: [
      'Real-time production line monitoring',
      'Remote equipment control',
      'Image analysis and sensor-based QC',
      'Automatic downtime and failure logging',
      'OEE and production KPI dashboard',
      'Professional MES-like architecture'
    ],
    icon: 'production',
    image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=200&h=200&fit=crop'
  },
  {
    id: 4,
    title: 'Warehouse - Smart Inventory',
    description: 'Intelligent warehouse system with automatic FIFO/FEFO execution and complete material tracking.',
    details: [
      'Automatic FIFO and FEFO execution',
      'Prevention of incorrect stacking',
      'Scale and forklift reader integration',
      'Barcode and RFID support',
      '100% material tracking from entry to production',
      'Real-time inventory reporting'
    ],
    icon: 'warehouse',
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=200&h=200&fit=crop'
  },
  {
    id: 5,
    title: 'Sales - Credit Engine',
    description: 'Sales system with credit capability, settlement planning, and comprehensive financial reporting.',
    details: [
      'Customer credit assessment',
      'Credit-based sales recording',
      'Settlement scheduling',
      'Raw material procurement integration',
      'Complete financial reporting',
      'Customer management'
    ],
    icon: 'sales',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=200&h=200&fit=crop'
  },
  {
    id: 6,
    title: 'Credit - Payment Management',
    description: 'Customer credit management system with risk analysis and payment planning.',
    details: [
      'Customer credit analysis',
      'Credit limit management',
      'Automatic receivables tracking',
      'Debt maturity reporting',
      'Sales system integration',
      'Payment delay alerts'
    ],
    icon: 'credit',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=200&h=200&fit=crop'
  },
  {
    id: 7,
    title: 'AI Assistants - Smart Chatbots',
    description: 'Intelligent chatbots connected to organizational data for support and after-sales services.',
    details: [
      'Smart after-sales service',
      '24/7 technical support',
      'Automatic order tracking',
      'Production inquiry responses',
      'Product issue analysis',
      'Custom chatbot based on local LLM'
    ],
    icon: 'ai',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=200&h=200&fit=crop'
  }
];


export default function AspectRoadmapPage() {
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
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r from-primary-800 to-secondary-600 mb-6 shadow-lg shadow-primary-800/25">
              <Cpu className="w-10 h-10 text-white" />
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
              <span className="gradient-text">ASPECT</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-2">
              <span className="font-semibold text-primary-800 dark:text-secondary-400">A</span>I Automation • 
              <span className="font-semibold text-primary-800 dark:text-secondary-400"> S</span>upply • 
              <span className="font-semibold text-primary-800 dark:text-secondary-400"> P</span>roduction • 
              <span className="font-semibold text-primary-800 dark:text-secondary-400"> E</span>valuation • 
              <span className="font-semibold text-primary-800 dark:text-secondary-400"> C</span>ommerce • 
              <span className="font-semibold text-primary-800 dark:text-secondary-400"> T</span>racking
            </p>
            
            <p className="text-base md:text-lg text-gray-500 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed mt-4">
              Manufacturing supply chain automation and intelligence platform - 
              Digitally, intelligently, and automatically manages all procurement, production, 
              quality control, warehouse, sales, and after-sales processes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Values */}
      <section className="py-8">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: TrendingDown, label: 'OPEX Reduction', value: '30%' },
              { icon: Zap, label: 'Decision Speed', value: '10x' },
              { icon: Brain, label: 'Human Error Elimination', value: '100%' },
              { icon: Cpu, label: 'Data-Driven Decisions', value: 'AI' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-4 md:p-6 rounded-2xl bg-white dark:bg-primary-900/50 shadow-lg border border-primary-100 dark:border-primary-800"
              >
                <item.icon className="w-8 h-8 mx-auto mb-3 text-primary-800 dark:text-secondary-400" />
                <div className="text-2xl md:text-3xl font-bold text-primary-800 dark:text-white mb-1">
                  {item.value}
                </div>
                <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
                  {item.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-8 md:py-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-primary-800 dark:text-white mb-4">
              ASPECT Platform Modules
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Supply → Factory Entry → Production → Warehouse → Sales → Credit → AI Assistants
            </p>
          </motion.div>

          <RoadmapTimeline 
            steps={aspectSteps} 
            productName="ASPECT" 
            productColor="blue"
          />
        </div>
      </section>

      {/* AI Core Section */}
      <section className="py-16 bg-gradient-to-r from-primary-800/5 to-secondary-500/5">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-primary-800 dark:text-white mb-4">
              Platform AI Core
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              'Document OCR Models',
              'Machine Vision QC',
              'Price Prediction',
              'Production Optimization',
              'Local LLM Chatbot'
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-4 rounded-xl bg-white dark:bg-primary-900/50 shadow-md text-center"
              >
                <Brain className="w-6 h-6 mx-auto mb-2 text-accent-cyan" />
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
