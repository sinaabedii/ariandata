'use client';

import { motion } from 'framer-motion';
import { RoadmapTimeline, RoadmapStep } from '@/components/products/roadmap';
import { Cpu, TrendingDown, Zap, Brain, Sparkles, Package, Factory, Warehouse, CreditCard, Bot, Truck, BarChart3 } from 'lucide-react';

const aspectSteps: RoadmapStep[] = [
  {
    id: 1,
    title: 'Supply - Smart Procurement',
    description: 'Intelligent raw material procurement system with AI-powered price prediction, commodity exchange integration, and automated supplier management for optimal purchasing decisions.',
    details: [
      'Direct commodity exchange API integration',
      'Automatic real-time supply data retrieval',
      'AI-powered optimal purchase timing recommendations',
      'Digital contract management system',
      'Multi-supplier comparison and scoring',
      'Machine learning price forecasting models'
    ],
    icon: 'supply',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=200&h=200&fit=crop',
    status: 'completed',
    duration: '8 weeks',
    team: '5 developers',
    priority: 'high',
    progress: 100,
    startDate: 'Q1 2024',
    endDate: 'Q1 2024',
    benefits: [
      'Reduce procurement costs by 15-25%',
      'Eliminate manual price tracking',
      'Optimize inventory levels automatically',
      'Improve supplier relationships'
    ],
    technologies: ['Python ML', 'TensorFlow', 'REST APIs', 'PostgreSQL', 'Redis', 'Kafka'],
    deliverables: [
      'Commodity exchange connector',
      'Price prediction engine',
      'Supplier management portal',
      'Contract digitization system'
    ],
    milestones: [
      { title: 'Exchange API Integration', completed: true },
      { title: 'ML Model Training', completed: true },
      { title: 'Supplier Portal', completed: true },
      { title: 'Production Deployment', completed: true }
    ],
    metrics: [
      { label: 'Cost Savings', value: '22%', trend: 'up' },
      { label: 'Prediction Accuracy', value: '94%', trend: 'up' },
      { label: 'Processing Time', value: '-80%', trend: 'down' }
    ],
    tags: ['procurement', 'AI', 'supply-chain', 'ML']
  },
  {
    id: 2,
    title: 'Factory Entry - Gate Automation',
    description: 'Smart factory entry system with OCR document recognition, license plate verification, and fully automated barrier control for seamless material receiving.',
    details: [
      'Bill of lading OCR recognition with 99% accuracy',
      'Automatic purchase order matching and validation',
      'Real-time vehicle plate verification system',
      'Automatic barrier operation without human intervention',
      'Operator-free logging and documentation',
      'Direct QC system integration for quality checks'
    ],
    icon: 'gate',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&h=200&fit=crop',
    status: 'completed',
    duration: '6 weeks',
    team: '4 developers',
    priority: 'high',
    progress: 100,
    startDate: 'Q1 2024',
    endDate: 'Q2 2024',
    benefits: [
      'Eliminate gate operator positions',
      'Reduce entry processing time by 90%',
      'Zero documentation errors',
      'Complete audit trail'
    ],
    technologies: ['OpenCV', 'Tesseract OCR', 'YOLO', 'PLC Integration', 'IoT Sensors'],
    deliverables: [
      'OCR document scanner',
      'License plate recognition system',
      'Barrier control interface',
      'Integration with ERP'
    ],
    dependencies: ['Supply module for PO data'],
    milestones: [
      { title: 'OCR Engine Development', completed: true },
      { title: 'Plate Recognition', completed: true },
      { title: 'Barrier Integration', completed: true },
      { title: 'QC System Link', completed: true }
    ],
    metrics: [
      { label: 'OCR Accuracy', value: '99.2%', trend: 'up' },
      { label: 'Entry Time', value: '45s', trend: 'down' },
      { label: 'Manual Ops', value: '0', trend: 'stable' }
    ],
    tags: ['automation', 'OCR', 'IoT', 'gate-control']
  },
  {
    id: 3,
    title: 'Production - Smart Manufacturing',
    description: 'Real-time production monitoring platform with visual quality control, comprehensive OEE dashboard, and predictive maintenance capabilities.',
    details: [
      'Real-time production line monitoring dashboard',
      'Remote equipment control and adjustment',
      'AI-powered image-based QC analysis',
      'Automatic downtime logging and categorization',
      'Comprehensive OEE & KPI dashboard',
      'Full MES (Manufacturing Execution System) architecture'
    ],
    icon: 'production',
    image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=200&h=200&fit=crop',
    status: 'current',
    duration: '10 weeks',
    team: '6 developers',
    priority: 'high',
    progress: 70,
    startDate: 'Q2 2024',
    endDate: 'Q3 2024',
    benefits: [
      'Increase OEE by 15-20%',
      'Reduce quality defects by 40%',
      'Predictive maintenance savings',
      'Real-time decision making'
    ],
    technologies: ['SCADA', 'OPC-UA', 'Computer Vision', 'InfluxDB', 'Grafana', 'Edge Computing'],
    deliverables: [
      'Production monitoring dashboard',
      'Visual QC system',
      'OEE calculation engine',
      'Predictive maintenance module'
    ],
    dependencies: ['Factory Entry for material tracking'],
    risks: [
      'Legacy equipment integration challenges',
      'Network latency in real-time monitoring'
    ],
    milestones: [
      { title: 'SCADA Integration', completed: true },
      { title: 'Visual QC System', completed: true },
      { title: 'OEE Dashboard', completed: true },
      { title: 'Predictive Maintenance', completed: false }
    ],
    resources: [
      { type: 'doc', name: 'MES Architecture Guide', link: '#' },
      { type: 'video', name: 'OEE Calculation Training', link: '#' }
    ],
    metrics: [
      { label: 'OEE Improvement', value: '+18%', trend: 'up' },
      { label: 'Defect Rate', value: '-35%', trend: 'down' },
      { label: 'Completion', value: '70%', trend: 'up' }
    ],
    tags: ['manufacturing', 'MES', 'OEE', 'quality-control']
  },
  {
    id: 4,
    title: 'Warehouse - Smart Inventory',
    description: 'Intelligent warehouse management with automatic FIFO/FEFO enforcement, complete material tracking, and seamless equipment integration.',
    details: [
      'Automatic FIFO/FEFO rule enforcement',
      'Stacking prevention and optimization',
      'Scale & forklift system integration',
      'Barcode & RFID tracking support',
      '100% material traceability',
      'Real-time inventory visibility'
    ],
    icon: 'warehouse',
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=200&h=200&fit=crop',
    status: 'upcoming',
    duration: '8 weeks',
    team: '5 developers',
    priority: 'high',
    progress: 0,
    startDate: 'Q3 2024',
    endDate: 'Q4 2024',
    benefits: [
      'Eliminate expired material usage',
      'Optimize warehouse space by 30%',
      'Real-time inventory accuracy',
      'Reduce picking errors to zero'
    ],
    technologies: ['WMS', 'RFID', 'Barcode Scanners', 'Forklift Terminals', 'Mobile Apps'],
    deliverables: [
      'WMS core system',
      'RFID tracking infrastructure',
      'Mobile picking application',
      'Inventory analytics dashboard'
    ],
    dependencies: ['Production module for finished goods'],
    tags: ['warehouse', 'WMS', 'RFID', 'inventory']
  },
  {
    id: 5,
    title: 'Sales - Credit Engine',
    description: 'Advanced sales management system with integrated credit assessment, automated settlement scheduling, and comprehensive financial reporting.',
    details: [
      'AI-powered customer credit assessment',
      'Credit-based sales order processing',
      'Automated settlement scheduling',
      'Procurement system integration',
      'Real-time financial reporting',
      'Customer relationship management'
    ],
    icon: 'sales',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=200&h=200&fit=crop',
    status: 'upcoming',
    duration: '7 weeks',
    team: '4 developers',
    priority: 'medium',
    progress: 0,
    startDate: 'Q4 2024',
    benefits: [
      'Reduce bad debt by 50%',
      'Accelerate order processing',
      'Improve cash flow visibility',
      'Better customer insights'
    ],
    technologies: ['Credit Scoring ML', 'Payment Gateways', 'ERP Integration', 'BI Tools'],
    tags: ['sales', 'credit', 'CRM', 'finance']
  },
  {
    id: 6,
    title: 'Credit - Payment Management',
    description: 'Comprehensive customer credit management system with risk analysis, automated receivables tracking, and intelligent payment monitoring.',
    details: [
      'Advanced credit risk analysis',
      'Dynamic credit limit management',
      'Automated receivables tracking',
      'Maturity and aging reporting',
      'Sales system integration',
      'Payment delay alerts and escalation'
    ],
    icon: 'credit',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=200&h=200&fit=crop',
    status: 'upcoming',
    duration: '5 weeks',
    team: '3 developers',
    priority: 'medium',
    progress: 0,
    startDate: 'Q1 2025',
    benefits: [
      'Reduce DSO by 20 days',
      'Automate collection process',
      'Early warning for defaults',
      'Optimize working capital'
    ],
    technologies: ['Risk Scoring', 'Automated Workflows', 'SMS/Email Alerts', 'Reporting Engine'],
    dependencies: ['Sales module must be completed'],
    tags: ['credit', 'finance', 'risk-management', 'collections']
  },
  {
    id: 7,
    title: 'AI Assistants - Smart Chatbots',
    description: 'Intelligent AI chatbots connected to organizational data for automated customer support, order tracking, and technical assistance.',
    details: [
      'Smart after-sales service automation',
      '24/7 technical support availability',
      'Automatic order status tracking',
      'Production inquiry handling',
      'Issue analysis and routing',
      'Custom LLM chatbot with company knowledge'
    ],
    icon: 'ai',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=200&h=200&fit=crop',
    status: 'upcoming',
    duration: '8 weeks',
    team: '4 developers',
    priority: 'medium',
    progress: 0,
    startDate: 'Q1 2025',
    benefits: [
      'Reduce support costs by 60%',
      '24/7 customer availability',
      'Instant response times',
      'Consistent service quality'
    ],
    technologies: ['LLM/GPT', 'RAG', 'Vector DB', 'NLP', 'Webhook Integration', 'Multi-channel'],
    deliverables: [
      'Custom trained LLM',
      'Knowledge base integration',
      'Multi-channel deployment',
      'Analytics dashboard'
    ],
    resources: [
      { type: 'doc', name: 'AI Training Guidelines', link: '#' },
      { type: 'link', name: 'LLM Best Practices', link: '#' }
    ],
    tags: ['AI', 'chatbot', 'LLM', 'customer-service', 'automation']
  }
];

const stats = [
  { icon: TrendingDown, label: 'OPEX Reduction', value: '30%', color: 'from-blue-600 to-cyan-500' },
  { icon: Zap, label: 'Decision Speed', value: '10x', color: 'from-cyan-500 to-teal-500' },
  { icon: Brain, label: 'Error Elimination', value: '100%', color: 'from-teal-500 to-emerald-500' },
  { icon: Cpu, label: 'AI-Powered', value: 'Full', color: 'from-emerald-500 to-cyan-500' },
];

export default function AspectRoadmapPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-r from-blue-600/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-r from-teal-500/15 to-blue-600/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-12 md:pb-16">
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 
                       border border-blue-500/30 mb-6"
            >
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-medium text-cyan-300">Industrial AI Platform</span>
            </motion.div>

            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, type: 'spring' }}
              className="inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-3xl 
                       bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-500 mb-6 
                       shadow-2xl shadow-cyan-500/30 relative"
            >
              <Cpu className="w-10 h-10 md:w-12 md:h-12 text-white" />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/20 to-transparent" />
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl md:text-5xl lg:text-7xl font-black mb-4 md:mb-6"
            >
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                ASPECT
              </span>
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap justify-center gap-1 md:gap-2 text-sm md:text-lg lg:text-xl font-semibold text-gray-300 mb-4 px-4"
            >
              {['AI Automation', 'Supply', 'Production', 'Evaluation', 'Commerce', 'Tracking'].map((word, i) => (
                <span key={i} className="flex items-center">
                  <span className="text-cyan-400 font-bold">{word[0]}</span>
                  <span>{word.slice(1)}</span>
                  {i < 5 && <span className="mx-1 md:mx-2 text-gray-600">•</span>}
                </span>
              ))}
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-sm md:text-base lg:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed px-4"
            >
              Manufacturing supply chain automation platform. Digitally manages procurement, 
              production, quality control, warehouse, sales, and after-sales processes.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative py-8 md:py-12">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
            {stats.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-2xl blur-xl opacity-30 
                              group-hover:opacity-50 transition-opacity`} />
                <div className="relative text-center p-4 md:p-6 rounded-2xl bg-slate-800/80 backdrop-blur-sm 
                             shadow-xl border border-slate-700/50">
                  <div className={`inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-xl 
                                bg-gradient-to-r ${item.color} mb-3 shadow-lg`}>
                    <item.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div className="text-2xl md:text-3xl font-black bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                    {item.value}
                  </div>
                  <div className="text-xs md:text-sm text-gray-400 font-medium">
                    {item.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="relative py-8 md:py-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-4">
              Platform Modules
            </h2>
            <p className="text-sm md:text-base text-gray-400 px-4">
              Supply → Factory Entry → Production → Warehouse → Sales → Credit → AI
            </p>
          </motion.div>

          <RoadmapTimeline 
            steps={aspectSteps} 
            productName="ASPECT" 
            productColor="blue"
          />
        </div>
      </section>

      {/* Modules Grid */}
      <section className="relative py-12 md:py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              AI Core Capabilities
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
            {[
              { icon: Truck, label: 'Supply Chain' },
              { icon: Factory, label: 'Production' },
              { icon: Warehouse, label: 'Inventory' },
              { icon: CreditCard, label: 'Credit' },
              { icon: Bot, label: 'AI Bots' },
              { icon: BarChart3, label: 'Analytics' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="p-4 md:p-5 rounded-2xl bg-slate-800/60 backdrop-blur-sm 
                         border border-slate-700/50 text-center
                         hover:border-cyan-500/50 transition-all"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-xl 
                              bg-gradient-to-r from-blue-600 to-cyan-500 mb-3 shadow-md">
                  <item.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <h3 className="font-bold text-white text-sm md:text-base">{item.label}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
