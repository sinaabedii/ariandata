'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

interface RoadmapStep {
  id: number;
  title: string;
  description: string;
  details: string[];
  icon: string;
  image: string;
}

interface RoadmapModalProps {
  isOpen: boolean;
  onClose: () => void;
  step: RoadmapStep | null;
  productName: string;
  accentColor?: string;
}

export default function RoadmapModal({ isOpen, onClose, step, productName, accentColor = 'from-primary-800 to-secondary-600' }: RoadmapModalProps) {
  if (!step) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop with blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/70 backdrop-blur-md"
          />
          
          {/* Modal with 3D effect */}
          <motion.div
            initial={{ 
              opacity: 0, 
              scale: 0.7, 
              rotateX: -15,
              y: 100 
            }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              rotateX: 0,
              y: 0 
            }}
            exit={{ 
              opacity: 0, 
              scale: 0.7, 
              rotateX: 15,
              y: -100 
            }}
            transition={{ 
              type: 'spring', 
              damping: 20, 
              stiffness: 300 
            }}
            style={{ perspective: '1000px' }}
            className="relative w-full max-w-lg bg-white dark:bg-gray-900 rounded-3xl shadow-2xl overflow-hidden"
          >
            {/* Glowing border effect */}
            <div className={`absolute inset-0 bg-gradient-to-r ${accentColor} opacity-20 blur-xl`} />
            
            {/* Header with image */}
            <div className={`relative bg-gradient-to-r ${accentColor} p-6 pb-16`}>
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/20 hover:bg-white/40 
                         transition-all duration-300 hover:rotate-90 hover:scale-110"
              >
                <X className="w-5 h-5 text-white" />
              </button>
              
              <motion.p 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-white/80 text-sm font-medium mb-1"
              >
                {productName} • Step {step.id}
              </motion.p>
              
              <motion.h3 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="text-2xl md:text-3xl font-bold text-white"
              >
                {step.title}
              </motion.h3>
            </div>

            {/* Floating image */}
            <motion.div
              initial={{ scale: 0, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="absolute left-1/2 -translate-x-1/2 top-[100px] z-10"
            >
              <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${accentColor} p-1 shadow-2xl 
                            transform rotate-3 hover:rotate-0 transition-transform duration-300`}>
                <div className="w-full h-full rounded-xl overflow-hidden bg-white">
                  <Image
                    src={step.image}
                    alt={step.title}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
            
            {/* Content */}
            <div className="relative bg-white dark:bg-gray-900 pt-16 px-6 pb-6">
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.25 }}
                className="text-gray-600 dark:text-gray-300 text-center mb-6 leading-relaxed"
              >
                {step.description}
              </motion.p>
              
              <motion.h4 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4"
              >
                Key Features
              </motion.h4>
              
              <ul className="space-y-3 mb-6">
                {step.details.map((detail, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.35 + index * 0.05 }}
                    className="flex items-start gap-3 group"
                  >
                    <CheckCircle2 className={`w-5 h-5 flex-shrink-0 mt-0.5 text-emerald-500`} />
                    <span className="text-gray-700 dark:text-gray-300 text-sm">{detail}</span>
                  </motion.li>
                ))}
              </ul>
              
              {/* Close button */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                onClick={onClose}
                className={`w-full py-3 rounded-xl bg-gradient-to-r ${accentColor} text-white font-semibold 
                         shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]`}
              >
                Close
              </motion.button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
