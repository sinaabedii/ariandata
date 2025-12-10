'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Sparkles, 
  MessageSquare, 
  Image as ImageIcon, 
  FileText, 
  BarChart3,
  Zap,
  Bot,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';

const aiCapabilities = [
  {
    id: 'chat',
    icon: MessageSquare,
    title: 'Conversational AI',
    description: 'Build intelligent chatbots that understand context and provide human-like responses.',
    demo: [
      { type: 'user', text: 'What is machine learning?' },
      { type: 'ai', text: 'Machine learning is a subset of AI that enables systems to learn and improve from experience without being explicitly programmed. It focuses on developing algorithms that can access data and use it to learn for themselves.' },
    ],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'vision',
    icon: ImageIcon,
    title: 'Computer Vision',
    description: 'Extract insights from images and videos with advanced recognition algorithms.',
    demo: [
      { type: 'image', text: '🖼️ Analyzing image...' },
      { type: 'ai', text: 'Detected: Office environment with 3 people, laptops, and presentation screen. Sentiment: Professional meeting. Confidence: 94%' },
    ],
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 'document',
    icon: FileText,
    title: 'Document Intelligence',
    description: 'Automatically extract and structure data from any document format.',
    demo: [
      { type: 'file', text: '📄 Processing invoice.pdf...' },
      { type: 'ai', text: 'Extracted: Invoice #12345 | Amount: $5,430.00 | Due: Jan 15, 2025 | Vendor: Tech Corp | Status: Pending approval' },
    ],
    color: 'from-orange-500 to-red-500',
  },
  {
    id: 'analytics',
    icon: BarChart3,
    title: 'Predictive Analytics',
    description: 'Forecast trends and make data-driven decisions with ML-powered insights.',
    demo: [
      { type: 'data', text: '📊 Analyzing Q4 sales data...' },
      { type: 'ai', text: 'Prediction: 23% growth expected in Q1. Key drivers: Holiday season (40%), New product launch (35%), Marketing campaigns (25%). Recommended action: Increase inventory by 15%.' },
    ],
    color: 'from-green-500 to-emerald-500',
  },
];

function TypeWriter({ text, onComplete }: { text: string; onComplete?: () => void }) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 15);
      return () => clearTimeout(timeout);
    } else if (onComplete) {
      onComplete();
    }
  }, [currentIndex, text, onComplete]);

  useEffect(() => {
    setDisplayText('');
    setCurrentIndex(0);
  }, [text]);

  return <span>{displayText}<span className="animate-pulse">|</span></span>;
}

export default function AIShowcase() {
  const [activeCapability, setActiveCapability] = useState(aiCapabilities[0]);
  const [isTyping, setIsTyping] = useState(true);
  const [showResponse, setShowResponse] = useState(false);

  useEffect(() => {
    setIsTyping(true);
    setShowResponse(false);
    const timer = setTimeout(() => {
      setShowResponse(true);
      setIsTyping(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, [activeCapability]);

  return (
    <section className="relative py-16 sm:py-20 lg:py-28 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-950 to-black" />
        
        {/* Animated grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-secondary-400/50 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Glowing orbs */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-secondary-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-cyan/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-4 sm:mb-6"
          >
            <Brain className="w-4 h-4 text-secondary-400" />
            <span className="text-sm font-medium text-white/90">AI Capabilities</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
          >
            Experience the Power of{' '}
            <span className="bg-gradient-to-r from-secondary-400 to-accent-cyan bg-clip-text text-transparent">
              Intelligent AI
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base"
          >
            See how our AI solutions can transform your business with real-time demonstrations of our core capabilities.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6 lg:gap-8">
          {/* Capability selector */}
          <div className="lg:col-span-2 space-y-3">
            {aiCapabilities.map((capability, index) => (
              <motion.button
                key={capability.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setActiveCapability(capability)}
                className={`w-full text-left p-4 sm:p-5 rounded-2xl transition-all duration-300 group ${
                  activeCapability.id === capability.id
                    ? 'bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg'
                    : 'bg-white/5 hover:bg-white/10 border border-transparent'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center transition-all ${
                    activeCapability.id === capability.id
                      ? `bg-gradient-to-br ${capability.color}`
                      : 'bg-white/10'
                  }`}>
                    <capability.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className={`font-semibold mb-1 transition-colors ${
                      activeCapability.id === capability.id ? 'text-white' : 'text-gray-300'
                    }`}>
                      {capability.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500 line-clamp-2">
                      {capability.description}
                    </p>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Demo area */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative p-5 sm:p-6 lg:p-8 rounded-[2rem] bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 min-h-[300px] sm:min-h-[350px]"
            >
              {/* Terminal header */}
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-white/10">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="flex-1 text-center">
                  <span className="text-xs text-gray-400 font-mono">ai-demo.ariandata.com</span>
                </div>
                <Bot className="w-5 h-5 text-secondary-400" />
              </div>

              {/* Demo content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCapability.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-4"
                >
                  {/* Input */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary-700 flex items-center justify-center flex-shrink-0">
                      <Zap className="w-4 h-4 text-secondary-400" />
                    </div>
                    <div className="flex-1 p-3 sm:p-4 rounded-2xl bg-primary-800/50 border border-primary-700">
                      <p className="text-sm text-gray-300 font-mono">
                        {activeCapability.demo[0].text}
                      </p>
                    </div>
                  </div>

                  {/* AI Response */}
                  <div className="flex items-start gap-3">
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${activeCapability.color} flex items-center justify-center flex-shrink-0`}>
                      <Sparkles className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1 p-3 sm:p-4 rounded-2xl bg-gradient-to-br from-primary-800/80 to-primary-900/80 border border-primary-700">
                      {isTyping ? (
                        <div className="flex items-center gap-2">
                          <div className="flex gap-1">
                            <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 0.6, repeat: Infinity }} className="w-2 h-2 bg-secondary-400 rounded-full" />
                            <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }} className="w-2 h-2 bg-secondary-400 rounded-full" />
                            <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }} className="w-2 h-2 bg-secondary-400 rounded-full" />
                          </div>
                          <span className="text-xs text-gray-400">AI is thinking...</span>
                        </div>
                      ) : (
                        <p className="text-sm text-gray-200 font-mono leading-relaxed">
                          <TypeWriter text={activeCapability.demo[1].text} />
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* CTA */}
              <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs sm:text-sm text-gray-400 text-center sm:text-left">
                  Ready to integrate AI into your business?
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-secondary-500 to-accent-cyan text-white text-sm font-semibold hover:shadow-lg hover:shadow-secondary-500/25 transition-all"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
