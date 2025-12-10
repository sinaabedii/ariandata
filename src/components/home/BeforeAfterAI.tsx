'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeftRight, Clock, Zap, TrendingUp, CheckCircle2 } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';

interface ComparisonItem {
  id: string;
  title: string;
  before: {
    label: string;
    stats: { label: string; value: string; bad?: boolean }[];
    issues: string[];
  };
  after: {
    label: string;
    stats: { label: string; value: string; good?: boolean }[];
    benefits: string[];
  };
}

const comparisons: ComparisonItem[] = [
  {
    id: 'data-processing',
    title: 'Data Processing',
    before: {
      label: 'Manual Processing',
      stats: [
        { label: 'Processing Time', value: '8+ hours', bad: true },
        { label: 'Error Rate', value: '12%', bad: true },
        { label: 'Cost per Task', value: '$150', bad: true },
      ],
      issues: ['Human errors', 'Slow turnaround', 'Limited scalability', 'High labor costs'],
    },
    after: {
      label: 'AI-Powered Automation',
      stats: [
        { label: 'Processing Time', value: '15 mins', good: true },
        { label: 'Error Rate', value: '0.1%', good: true },
        { label: 'Cost per Task', value: '$5', good: true },
      ],
      benefits: ['99.9% accuracy', 'Real-time processing', 'Infinite scalability', '97% cost reduction'],
    },
  },
  {
    id: 'customer-support',
    title: 'Customer Support',
    before: {
      label: 'Traditional Support',
      stats: [
        { label: 'Response Time', value: '24 hours', bad: true },
        { label: 'Availability', value: '8 hrs/day', bad: true },
        { label: 'Resolution Rate', value: '65%', bad: true },
      ],
      issues: ['Limited hours', 'Queue waiting', 'Inconsistent quality', 'Language barriers'],
    },
    after: {
      label: 'AI Chatbot + Human',
      stats: [
        { label: 'Response Time', value: 'Instant', good: true },
        { label: 'Availability', value: '24/7', good: true },
        { label: 'Resolution Rate', value: '94%', good: true },
      ],
      benefits: ['Always available', 'Zero wait time', 'Multi-language', 'Smart escalation'],
    },
  },
  {
    id: 'analytics',
    title: 'Business Analytics',
    before: {
      label: 'Spreadsheet Analysis',
      stats: [
        { label: 'Report Generation', value: '3 days', bad: true },
        { label: 'Data Sources', value: '2-3', bad: true },
        { label: 'Insights Depth', value: 'Basic', bad: true },
      ],
      issues: ['Outdated data', 'Manual errors', 'Limited views', 'No predictions'],
    },
    after: {
      label: 'AI Analytics Platform',
      stats: [
        { label: 'Report Generation', value: 'Real-time', good: true },
        { label: 'Data Sources', value: 'Unlimited', good: true },
        { label: 'Insights Depth', value: 'Predictive', good: true },
      ],
      benefits: ['Live dashboards', 'Auto-insights', 'Trend prediction', 'Anomaly detection'],
    },
  },
];

function ComparisonSlider({ item }: { item: ComparisonItem }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current || !isDragging.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  return (
    <div
      ref={containerRef}
      className="relative rounded-2xl overflow-hidden select-none cursor-ew-resize"
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchMove={handleTouchMove}
      onTouchStart={handleMouseDown}
      onTouchEnd={handleMouseUp}
    >
      {/* Before side */}
      <div className="grid md:grid-cols-2">
        <div 
          className="p-6 sm:p-8 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/50 dark:to-orange-950/50 border-r border-red-200 dark:border-red-900/50"
          style={{ 
            clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
            position: 'absolute',
            inset: 0,
            zIndex: 2,
          }}
        >
          <div className="mb-4">
            <span className="px-3 py-1 rounded-full bg-red-100 dark:bg-red-900/50 text-red-600 dark:text-red-400 text-xs font-semibold">
              BEFORE
            </span>
          </div>
          <h4 className="text-xl font-bold text-red-900 dark:text-red-300 mb-4">
            {item.before.label}
          </h4>
          
          {/* Stats */}
          <div className="space-y-3 mb-6">
            {item.before.stats.map((stat) => (
              <div key={stat.label} className="flex items-center justify-between">
                <span className="text-sm text-red-700 dark:text-red-400">{stat.label}</span>
                <span className={`text-sm font-bold ${stat.bad ? 'text-red-600 dark:text-red-400' : ''}`}>
                  {stat.value}
                </span>
              </div>
            ))}
          </div>

          {/* Issues */}
          <div className="space-y-2">
            {item.before.issues.map((issue) => (
              <div key={issue} className="flex items-center gap-2 text-sm text-red-600 dark:text-red-400">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                {issue}
              </div>
            ))}
          </div>
        </div>

        {/* After side (full width, behind) */}
        <div className="col-span-2 grid md:grid-cols-2">
          <div className="p-6 sm:p-8 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/50 dark:to-orange-950/50 opacity-20">
            {/* Placeholder for layout */}
          </div>
          <div className="p-6 sm:p-8 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/50 dark:to-emerald-950/50">
            <div className="mb-4">
              <span className="px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400 text-xs font-semibold">
                AFTER AI
              </span>
            </div>
            <h4 className="text-xl font-bold text-green-900 dark:text-green-300 mb-4">
              {item.after.label}
            </h4>
            
            {/* Stats */}
            <div className="space-y-3 mb-6">
              {item.after.stats.map((stat) => (
                <div key={stat.label} className="flex items-center justify-between">
                  <span className="text-sm text-green-700 dark:text-green-400">{stat.label}</span>
                  <span className={`text-sm font-bold ${stat.good ? 'text-green-600 dark:text-green-400' : ''}`}>
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Benefits */}
            <div className="space-y-2">
              {item.after.benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-2 text-sm text-green-600 dark:text-green-400">
                  <CheckCircle2 className="w-4 h-4" />
                  {benefit}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Slider handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-10"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-xl flex items-center justify-center">
          <ArrowLeftRight className="w-5 h-5 text-primary-800" />
        </div>
      </div>
    </div>
  );
}

export default function BeforeAfterAI() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative py-16 sm:py-20 lg:py-28 bg-gray-50 dark:bg-primary-950/50 overflow-hidden">
      {/* Background */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-green-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <SectionHeading
          label="AI Impact"
          title="Before & After AI Implementation"
          description="Drag the slider to see the dramatic transformation AI brings to business operations."
        />

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-10">
          {comparisons.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setActiveIndex(index)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-xl text-sm font-medium transition-all ${
                activeIndex === index
                  ? 'bg-gradient-to-r from-primary-800 to-secondary-600 text-white shadow-lg'
                  : 'bg-white dark:bg-primary-900 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-primary-800'
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* Comparison slider */}
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <ComparisonSlider item={comparisons[activeIndex]} />
        </motion.div>

        {/* Bottom stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto"
        >
          {[
            { icon: Clock, value: '32x', label: 'Faster Processing' },
            { icon: TrendingUp, value: '97%', label: 'Cost Reduction' },
            { icon: Zap, value: '99.9%', label: 'Accuracy Rate' },
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-primary-800 to-secondary-600 mb-3">
                <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div className="text-xl sm:text-2xl font-bold text-primary-950 dark:text-white">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
