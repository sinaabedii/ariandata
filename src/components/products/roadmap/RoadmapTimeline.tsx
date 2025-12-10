'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import RoadmapModal from './RoadmapModal';

export interface RoadmapStep {
  id: number;
  title: string;
  description: string;
  details: string[];
  icon: string;
  image: string;
}

interface RoadmapTimelineProps {
  steps: RoadmapStep[];
  productName: string;
  productColor?: 'blue' | 'orange';
}

export default function RoadmapTimeline({ steps, productName, productColor = 'orange' }: RoadmapTimelineProps) {
  const [selectedStep, setSelectedStep] = useState<RoadmapStep | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleStepClick = (step: RoadmapStep) => {
    setSelectedStep(step);
    setIsModalOpen(true);
  };

  const accentColor = productColor === 'orange' 
    ? 'from-orange-500 to-red-500' 
    : 'from-primary-800 to-secondary-600';

  const pinBg = productColor === 'orange' ? 'bg-orange-500' : 'bg-primary-800';
  const pinBorder = productColor === 'orange' ? 'border-t-orange-500' : 'border-t-primary-800';

  return (
    <>
      <div className="relative py-6 md:py-12">
        {/* START Label */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-4xl lg:text-5xl font-black text-primary-800 dark:text-white mb-4 md:mb-6"
        >
          START
        </motion.div>

        {/* Desktop Version */}
        <div className="hidden md:block relative w-full" style={{ minHeight: `${steps.length * 160}px` }}>
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox={`0 0 1000 ${steps.length * 160}`}
            preserveAspectRatio="xMidYMid meet"
            fill="none"
          >
            <path
              d={generateDesktopPath(steps.length)}
              stroke="#2d3748"
              strokeWidth="50"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="dark:stroke-gray-700"
            />
            <path
              d={generateDesktopPath(steps.length)}
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="20 15"
              className="opacity-50"
            />
          </svg>

          {steps.map((step, index) => {
            const isEven = index % 2 === 0;
            const yPos = index * 160 + 80;

            return (
              <div
                key={step.id}
                className="absolute w-full"
                style={{ top: `${index * 160}px`, height: '160px' }}
              >
                {/* Pin */}
                <motion.button
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, type: 'spring' }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  onClick={() => handleStepClick(step)}
                  className="absolute z-20 cursor-pointer"
                  style={{ 
                    left: isEven ? '72%' : '28%', 
                    top: '50%',
                    transform: 'translate(-50%, -65%)'
                  }}
                >
                  <div className="relative">
                    <div className={`absolute inset-0 rounded-full ${pinBg} blur-md opacity-40`} />
                    <div className={`relative w-14 h-14 rounded-full ${pinBg} shadow-xl overflow-hidden ring-4 ring-white dark:ring-gray-900`}>
                      <Image src={step.image} alt={step.title} width={56} height={56} className="w-full h-full object-cover" />
                    </div>
                    <div className={`absolute -bottom-2 left-1/2 -translate-x-1/2 border-l-[8px] border-r-[8px] border-t-[12px] border-l-transparent border-r-transparent ${pinBorder}`} />
                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-6 h-2 bg-black/20 rounded-full blur-sm" />
                  </div>
                </motion.button>

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`absolute top-1/2 -translate-y-1/2 w-[38%] ${isEven ? 'left-[5%] text-right' : 'left-[57%] text-left'}`}
                >
                  <h3 className="text-lg font-bold text-primary-800 dark:text-white mb-1">{step.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">{step.description}</p>
                  <button
                    onClick={() => handleStepClick(step)}
                    className={`mt-1 text-sm font-semibold ${productColor === 'orange' ? 'text-orange-500' : 'text-secondary-600 dark:text-secondary-400'}`}
                  >
                    View Details →
                  </button>
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* Mobile Version - Vertical Layout */}
        <div className="md:hidden relative">
          {steps.map((step, index) => {
            const isLast = index === steps.length - 1;
            
            return (
              <div key={step.id} className="relative">
                {/* Road segment */}
                <div className="flex items-start gap-4">
                  {/* Left side - Road with Pin */}
                  <div className="relative flex flex-col items-center">
                    {/* Pin */}
                    <motion.button
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, type: 'spring' }}
                      whileHover={{ scale: 1.1 }}
                      onClick={() => handleStepClick(step)}
                      className="relative z-10 cursor-pointer"
                    >
                      <div className={`absolute inset-0 rounded-full ${pinBg} blur-md opacity-40`} />
                      <div className={`relative w-12 h-12 rounded-full ${pinBg} shadow-xl overflow-hidden ring-3 ring-white dark:ring-gray-900`}>
                        <Image src={step.image} alt={step.title} width={48} height={48} className="w-full h-full object-cover" />
                      </div>
                      <div className={`absolute -bottom-1.5 left-1/2 -translate-x-1/2 border-l-[6px] border-r-[6px] border-t-[10px] border-l-transparent border-r-transparent ${pinBorder}`} />
                    </motion.button>
                    
                    {/* Vertical Road */}
                    {!isLast && (
                      <div className="relative w-8 flex-1 min-h-[80px]">
                        <div className="absolute left-1/2 -translate-x-1/2 w-8 h-full bg-gray-700 dark:bg-gray-600 rounded-full" />
                        <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full border-l-2 border-dashed border-white/50" />
                      </div>
                    )}
                  </div>

                  {/* Right side - Content */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex-1 pt-1 pb-6"
                  >
                    <h3 className="text-base font-bold text-primary-800 dark:text-white mb-1">{step.title}</h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-2 mb-2">{step.description}</p>
                    <button
                      onClick={() => handleStepClick(step)}
                      className={`text-xs font-semibold ${productColor === 'orange' ? 'text-orange-500' : 'text-secondary-600 dark:text-secondary-400'}`}
                    >
                      View Details →
                    </button>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>

        {/* GOAL Label */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-4xl lg:text-5xl font-black text-primary-800 dark:text-white mt-4 md:mt-6 text-right"
        >
          GOAL
        </motion.div>
      </div>

      <RoadmapModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        step={selectedStep}
        productName={productName}
        accentColor={accentColor}
      />
    </>
  );
}

function generateDesktopPath(stepCount: number): string {
  const segmentHeight = 160;
  const roadY = 80;
  const leftX = 280;
  const rightX = 720;
  const curve = 80;
  
  let path = `M 0 ${roadY}`;
  
  for (let i = 0; i < stepCount; i++) {
    const baseY = i * segmentHeight + roadY;
    const nextY = baseY + segmentHeight;
    const isEven = i % 2 === 0;
    
    if (isEven) {
      path += ` L ${rightX} ${baseY}`;
      if (i < stepCount - 1) {
        path += ` C ${rightX + curve} ${baseY}, ${rightX + curve} ${nextY}, ${rightX} ${nextY}`;
      }
    } else {
      path += ` L ${leftX} ${baseY}`;
      if (i < stepCount - 1) {
        path += ` C ${leftX - curve} ${baseY}, ${leftX - curve} ${nextY}, ${leftX} ${nextY}`;
      }
    }
  }
  
  const lastY = (stepCount - 1) * segmentHeight + roadY;
  const isLastEven = (stepCount - 1) % 2 === 0;
  path += isLastEven ? ` L 1000 ${lastY}` : ` L 0 ${lastY}`;
  
  return path;
}
