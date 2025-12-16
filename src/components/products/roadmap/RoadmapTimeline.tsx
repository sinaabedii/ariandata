'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, useMotionValue, animate } from 'framer-motion';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import RoadmapModal from './RoadmapModal';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

export interface RoadmapStep {
  id: number;
  title: string;
  description: string;
  details: string[];
  icon: string;
  image: string;
  status?: 'completed' | 'current' | 'upcoming';
  // Extended info for modal
  duration?: string;
  team?: string;
  priority?: 'high' | 'medium' | 'low';
  progress?: number;
  benefits?: string[];
  technologies?: string[];
  deliverables?: string[];
  // New extended fields
  startDate?: string;
  endDate?: string;
  dependencies?: string[];
  risks?: string[];
  milestones?: { title: string; completed: boolean }[];
  resources?: { type: string; name: string; link?: string }[];
  metrics?: { label: string; value: string; trend?: 'up' | 'down' | 'stable' }[];
  notes?: string;
  tags?: string[];
}

interface RoadmapTimelineProps {
  steps: RoadmapStep[];
  productName: string;
  productColor?: 'blue' | 'orange';
}

// Minimal walking animation
const walkingAnimation = {"v":"5.9.6","fr":60,"ip":0,"op":60,"w":120,"h":120,"nm":"Walker","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Shadow","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.4],"y":[1]},"o":{"x":[0.6],"y":[0]},"t":0,"s":[30]},{"i":{"x":[0.4],"y":[1]},"o":{"x":[0.6],"y":[0]},"t":15,"s":[20]},{"i":{"x":[0.4],"y":[1]},"o":{"x":[0.6],"y":[0]},"t":30,"s":[30]},{"i":{"x":[0.4],"y":[1]},"o":{"x":[0.6],"y":[0]},"t":45,"s":[20]},{"t":60,"s":[30]}]},"p":{"a":0,"k":[60,108,0]},"s":{"a":1,"k":[{"i":{"x":[0.4,0.4,0.4],"y":[1,1,1]},"o":{"x":[0.6,0.6,0.6],"y":[0,0,0]},"t":0,"s":[100,100,100]},{"i":{"x":[0.4,0.4,0.4],"y":[1,1,1]},"o":{"x":[0.6,0.6,0.6],"y":[0,0,0]},"t":15,"s":[130,60,100]},{"i":{"x":[0.4,0.4,0.4],"y":[1,1,1]},"o":{"x":[0.6,0.6,0.6],"y":[0,0,0]},"t":30,"s":[100,100,100]},{"i":{"x":[0.4,0.4,0.4],"y":[1,1,1]},"o":{"x":[0.6,0.6,0.6],"y":[0,0,0]},"t":45,"s":[130,60,100]},{"t":60,"s":[100,100,100]}]}},"ao":0,"shapes":[{"ty":"el","p":{"a":0,"k":[0,0]},"s":{"a":0,"k":[28,8]},"nm":"E"},{"ty":"fl","c":{"a":0,"k":[0,0,0,1]},"o":{"a":0,"k":25},"r":1,"bm":0,"nm":"F"}],"ip":0,"op":60,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"L-Leg","sr":1,"ks":{"r":{"a":1,"k":[{"i":{"x":[0.4],"y":[1]},"o":{"x":[0.6],"y":[0]},"t":0,"s":[-20]},{"i":{"x":[0.4],"y":[1]},"o":{"x":[0.6],"y":[0]},"t":15,"s":[20]},{"i":{"x":[0.4],"y":[1]},"o":{"x":[0.6],"y":[0]},"t":30,"s":[-20]},{"i":{"x":[0.4],"y":[1]},"o":{"x":[0.6],"y":[0]},"t":45,"s":[20]},{"t":60,"s":[-20]}]},"p":{"a":0,"k":[55,72,0]},"a":{"a":0,"k":[0,0,0]}},"ao":0,"shapes":[{"ty":"rc","d":1,"s":{"a":0,"k":[8,28]},"p":{"a":0,"k":[0,14]},"r":{"a":0,"k":4},"nm":"R"},{"ty":"fl","c":{"a":0,"k":[0.2,0.2,0.25,1]},"o":{"a":0,"k":100},"r":1,"bm":0,"nm":"F"}],"ip":0,"op":60,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"R-Leg","sr":1,"ks":{"r":{"a":1,"k":[{"i":{"x":[0.4],"y":[1]},"o":{"x":[0.6],"y":[0]},"t":0,"s":[20]},{"i":{"x":[0.4],"y":[1]},"o":{"x":[0.6],"y":[0]},"t":15,"s":[-20]},{"i":{"x":[0.4],"y":[1]},"o":{"x":[0.6],"y":[0]},"t":30,"s":[20]},{"i":{"x":[0.4],"y":[1]},"o":{"x":[0.6],"y":[0]},"t":45,"s":[-20]},{"t":60,"s":[20]}]},"p":{"a":0,"k":[65,72,0]},"a":{"a":0,"k":[0,0,0]}},"ao":0,"shapes":[{"ty":"rc","d":1,"s":{"a":0,"k":[8,28]},"p":{"a":0,"k":[0,14]},"r":{"a":0,"k":4},"nm":"R"},{"ty":"fl","c":{"a":0,"k":[0.2,0.2,0.25,1]},"o":{"a":0,"k":100},"r":1,"bm":0,"nm":"F"}],"ip":0,"op":60,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"Body","sr":1,"ks":{"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":0,"s":[60,58,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":15,"s":[60,54,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":30,"s":[60,58,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":45,"s":[60,54,0]},{"t":60,"s":[60,58,0]}]}},"ao":0,"shapes":[{"ty":"rc","d":1,"s":{"a":0,"k":[24,30]},"p":{"a":0,"k":[0,0]},"r":{"a":0,"k":12},"nm":"R"},{"ty":"gf","o":{"a":0,"k":100},"r":1,"bm":0,"g":{"p":2,"k":{"a":0,"k":[0,0.95,0.45,0.25,1,0.85,0.3,0.15]}},"s":{"a":0,"k":[0,-15]},"e":{"a":0,"k":[0,15]},"t":1,"nm":"G"}],"ip":0,"op":60,"st":0,"bm":0},{"ddd":0,"ind":5,"ty":4,"nm":"L-Arm","sr":1,"ks":{"r":{"a":1,"k":[{"i":{"x":[0.4],"y":[1]},"o":{"x":[0.6],"y":[0]},"t":0,"s":[25]},{"i":{"x":[0.4],"y":[1]},"o":{"x":[0.6],"y":[0]},"t":15,"s":[-25]},{"i":{"x":[0.4],"y":[1]},"o":{"x":[0.6],"y":[0]},"t":30,"s":[25]},{"i":{"x":[0.4],"y":[1]},"o":{"x":[0.6],"y":[0]},"t":45,"s":[-25]},{"t":60,"s":[25]}]},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":0,"s":[47,50,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":15,"s":[47,46,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":30,"s":[47,50,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":45,"s":[47,46,0]},{"t":60,"s":[47,50,0]}]},"a":{"a":0,"k":[0,0,0]}},"ao":0,"shapes":[{"ty":"rc","d":1,"s":{"a":0,"k":[6,20]},"p":{"a":0,"k":[0,10]},"r":{"a":0,"k":3},"nm":"R"},{"ty":"fl","c":{"a":0,"k":[0.96,0.8,0.68,1]},"o":{"a":0,"k":100},"r":1,"bm":0,"nm":"F"}],"ip":0,"op":60,"st":0,"bm":0},{"ddd":0,"ind":6,"ty":4,"nm":"R-Arm","sr":1,"ks":{"r":{"a":1,"k":[{"i":{"x":[0.4],"y":[1]},"o":{"x":[0.6],"y":[0]},"t":0,"s":[-25]},{"i":{"x":[0.4],"y":[1]},"o":{"x":[0.6],"y":[0]},"t":15,"s":[25]},{"i":{"x":[0.4],"y":[1]},"o":{"x":[0.6],"y":[0]},"t":30,"s":[-25]},{"i":{"x":[0.4],"y":[1]},"o":{"x":[0.6],"y":[0]},"t":45,"s":[25]},{"t":60,"s":[-25]}]},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":0,"s":[73,50,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":15,"s":[73,46,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":30,"s":[73,50,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":45,"s":[73,46,0]},{"t":60,"s":[73,50,0]}]},"a":{"a":0,"k":[0,0,0]}},"ao":0,"shapes":[{"ty":"rc","d":1,"s":{"a":0,"k":[6,20]},"p":{"a":0,"k":[0,10]},"r":{"a":0,"k":3},"nm":"R"},{"ty":"fl","c":{"a":0,"k":[0.96,0.8,0.68,1]},"o":{"a":0,"k":100},"r":1,"bm":0,"nm":"F"}],"ip":0,"op":60,"st":0,"bm":0},{"ddd":0,"ind":7,"ty":4,"nm":"Head","sr":1,"ks":{"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":0,"s":[60,28,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":15,"s":[60,24,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":30,"s":[60,28,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":45,"s":[60,24,0]},{"t":60,"s":[60,28,0]}]}},"ao":0,"shapes":[{"ty":"el","p":{"a":0,"k":[0,0]},"s":{"a":0,"k":[26,26]},"nm":"E"},{"ty":"gf","o":{"a":0,"k":100},"r":1,"bm":0,"g":{"p":2,"k":{"a":0,"k":[0,0.98,0.85,0.72,1,0.92,0.75,0.6]}},"s":{"a":0,"k":[0,-13]},"e":{"a":0,"k":[0,13]},"t":1,"nm":"G"},{"ty":"el","p":{"a":0,"k":[0,-16]},"s":{"a":0,"k":[28,12]},"nm":"Hair"},{"ty":"fl","c":{"a":0,"k":[0.25,0.18,0.12,1]},"o":{"a":0,"k":100},"r":1,"bm":0,"nm":"HF"}],"ip":0,"op":60,"st":0,"bm":0}],"markers":[]};

// Idle animation (standing still)
const idleAnimation = {"v":"5.9.6","fr":60,"ip":0,"op":60,"w":120,"h":120,"nm":"Idle","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Shadow","sr":1,"ks":{"o":{"a":0,"k":30},"p":{"a":0,"k":[60,108,0]},"s":{"a":0,"k":[100,100,100]}},"ao":0,"shapes":[{"ty":"el","p":{"a":0,"k":[0,0]},"s":{"a":0,"k":[28,8]},"nm":"E"},{"ty":"fl","c":{"a":0,"k":[0,0,0,1]},"o":{"a":0,"k":25},"r":1,"bm":0,"nm":"F"}],"ip":0,"op":60,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"L-Leg","sr":1,"ks":{"r":{"a":0,"k":0},"p":{"a":0,"k":[55,72,0]},"a":{"a":0,"k":[0,0,0]}},"ao":0,"shapes":[{"ty":"rc","d":1,"s":{"a":0,"k":[8,28]},"p":{"a":0,"k":[0,14]},"r":{"a":0,"k":4},"nm":"R"},{"ty":"fl","c":{"a":0,"k":[0.2,0.2,0.25,1]},"o":{"a":0,"k":100},"r":1,"bm":0,"nm":"F"}],"ip":0,"op":60,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"R-Leg","sr":1,"ks":{"r":{"a":0,"k":0},"p":{"a":0,"k":[65,72,0]},"a":{"a":0,"k":[0,0,0]}},"ao":0,"shapes":[{"ty":"rc","d":1,"s":{"a":0,"k":[8,28]},"p":{"a":0,"k":[0,14]},"r":{"a":0,"k":4},"nm":"R"},{"ty":"fl","c":{"a":0,"k":[0.2,0.2,0.25,1]},"o":{"a":0,"k":100},"r":1,"bm":0,"nm":"F"}],"ip":0,"op":60,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"Body","sr":1,"ks":{"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":0,"s":[60,58,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":30,"s":[60,56,0]},{"t":60,"s":[60,58,0]}]}},"ao":0,"shapes":[{"ty":"rc","d":1,"s":{"a":0,"k":[24,30]},"p":{"a":0,"k":[0,0]},"r":{"a":0,"k":12},"nm":"R"},{"ty":"gf","o":{"a":0,"k":100},"r":1,"bm":0,"g":{"p":2,"k":{"a":0,"k":[0,0.95,0.45,0.25,1,0.85,0.3,0.15]}},"s":{"a":0,"k":[0,-15]},"e":{"a":0,"k":[0,15]},"t":1,"nm":"G"}],"ip":0,"op":60,"st":0,"bm":0},{"ddd":0,"ind":5,"ty":4,"nm":"L-Arm","sr":1,"ks":{"r":{"a":0,"k":5},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":0,"s":[47,50,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":30,"s":[47,48,0]},{"t":60,"s":[47,50,0]}]},"a":{"a":0,"k":[0,0,0]}},"ao":0,"shapes":[{"ty":"rc","d":1,"s":{"a":0,"k":[6,20]},"p":{"a":0,"k":[0,10]},"r":{"a":0,"k":3},"nm":"R"},{"ty":"fl","c":{"a":0,"k":[0.96,0.8,0.68,1]},"o":{"a":0,"k":100},"r":1,"bm":0,"nm":"F"}],"ip":0,"op":60,"st":0,"bm":0},{"ddd":0,"ind":6,"ty":4,"nm":"R-Arm","sr":1,"ks":{"r":{"a":0,"k":-5},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":0,"s":[73,50,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":30,"s":[73,48,0]},{"t":60,"s":[73,50,0]}]},"a":{"a":0,"k":[0,0,0]}},"ao":0,"shapes":[{"ty":"rc","d":1,"s":{"a":0,"k":[6,20]},"p":{"a":0,"k":[0,10]},"r":{"a":0,"k":3},"nm":"R"},{"ty":"fl","c":{"a":0,"k":[0.96,0.8,0.68,1]},"o":{"a":0,"k":100},"r":1,"bm":0,"nm":"F"}],"ip":0,"op":60,"st":0,"bm":0},{"ddd":0,"ind":7,"ty":4,"nm":"Head","sr":1,"ks":{"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":0,"s":[60,28,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":30,"s":[60,26,0]},{"t":60,"s":[60,28,0]}]}},"ao":0,"shapes":[{"ty":"el","p":{"a":0,"k":[0,0]},"s":{"a":0,"k":[26,26]},"nm":"E"},{"ty":"gf","o":{"a":0,"k":100},"r":1,"bm":0,"g":{"p":2,"k":{"a":0,"k":[0,0.98,0.85,0.72,1,0.92,0.75,0.6]}},"s":{"a":0,"k":[0,-13]},"e":{"a":0,"k":[0,13]},"t":1,"nm":"G"},{"ty":"el","p":{"a":0,"k":[0,-16]},"s":{"a":0,"k":[28,12]},"nm":"Hair"},{"ty":"fl","c":{"a":0,"k":[0.25,0.18,0.12,1]},"o":{"a":0,"k":100},"r":1,"bm":0,"nm":"HF"}],"ip":0,"op":60,"st":0,"bm":0}],"markers":[]};

export default function RoadmapTimeline({ steps, productName, productColor = 'orange' }: RoadmapTimelineProps) {
  const [selectedStep, setSelectedStep] = useState<RoadmapStep | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPosition, setCurrentPosition] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isWalking, setIsWalking] = useState(false);
  const [walkDirection, setWalkDirection] = useState<'left' | 'right'>('right');
  
  const pathRef = useRef<SVGPathElement>(null);
  const mobilePathRef = useRef<SVGPathElement>(null);
  const progress = useMotionValue(0);
  const mobileProgress = useMotionValue(0);
  const [charPos, setCharPos] = useState({ x: 0, y: 0 });
  const [mobileCharPos, setMobileCharPos] = useState({ x: 0, y: 0 });

  const getStepProgress = useCallback((stepIndex: number) => stepIndex / Math.max(steps.length - 1, 1), [steps.length]);

  const getPointOnPath = useCallback((t: number, ref: React.RefObject<SVGPathElement | null>) => {
    if (!ref.current) return { x: 0, y: 0 };
    const pathLength = ref.current.getTotalLength();
    const point = ref.current.getPointAtLength(t * pathLength);
    return { x: point.x, y: point.y };
  }, []);

  useEffect(() => {
    const unsub1 = progress.on('change', (v) => setCharPos(getPointOnPath(v, pathRef)));
    const unsub2 = mobileProgress.on('change', (v) => setMobileCharPos(getPointOnPath(v, mobilePathRef)));
    return () => { unsub1(); unsub2(); };
  }, [progress, mobileProgress, getPointOnPath]);

  useEffect(() => {
    setCharPos(getPointOnPath(0, pathRef));
    setMobileCharPos(getPointOnPath(0, mobilePathRef));
  }, [getPointOnPath]);


  const moveToStep = useCallback((stepIndex: number) => {
    if (stepIndex === currentPosition || isAnimating) return;
    setIsAnimating(true);
    setIsWalking(true);
    setWalkDirection(stepIndex > currentPosition ? 'right' : 'left');
    
    const targetProgress = getStepProgress(stepIndex);
    const distance = Math.abs(targetProgress - progress.get());
    const duration = Math.max(distance * 20, 4);
    
    animate(progress, targetProgress, { duration, ease: [0.2, 0.1, 0.3, 1], onComplete: () => { setCurrentPosition(stepIndex); setIsAnimating(false); setIsWalking(false); } });
    animate(mobileProgress, targetProgress, { duration, ease: [0.2, 0.1, 0.3, 1] });
  }, [currentPosition, isAnimating, getStepProgress, progress, mobileProgress]);

  const handleStepClick = (step: RoadmapStep) => { setSelectedStep(step); setIsModalOpen(true); };

  const accentColor = productColor === 'orange' ? 'from-orange-500 to-red-500' : 'from-primary-800 to-secondary-600';
  const pinBg = productColor === 'orange' ? 'bg-orange-500' : 'bg-primary-800';
  const pinGlow = productColor === 'orange' ? 'shadow-orange-500/50' : 'shadow-primary-800/50';
  const svgHeight = steps.length * 180;
  const mobileSvgHeight = steps.length * 160;

  const getStatusColor = (status?: string) => status === 'completed' ? 'bg-emerald-500' : status === 'current' ? pinBg : 'bg-gray-400 dark:bg-gray-600';
  const getStatusRing = (status?: string) => status === 'completed' ? 'ring-emerald-500/30' : status === 'current' ? (productColor === 'orange' ? 'ring-orange-500/30' : 'ring-primary-800/30') : 'ring-gray-400/30';

  return (
    <>
      {/* Vertical Navigation - Both Mobile & Desktop */}
      <motion.div 
        initial={{ opacity: 0, x: -30 }} 
        animate={{ opacity: 1, x: 0 }} 
        className="fixed left-2 md:left-6 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-2 md:gap-3
                  bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-xl md:rounded-2xl 
                  p-1.5 md:p-3 shadow-xl md:shadow-2xl border border-gray-200/50 dark:border-gray-700/50"
      >
        {/* Up Button */}
        <motion.button 
          onClick={() => moveToStep(Math.max(0, currentPosition - 1))} 
          disabled={currentPosition === 0 || isAnimating} 
          className={`w-8 h-8 md:w-11 md:h-11 rounded-lg md:rounded-xl font-semibold text-sm md:text-lg flex items-center justify-center transition-all
                    ${currentPosition === 0 || isAnimating 
                      ? 'bg-gray-100 dark:bg-gray-800 text-gray-400 cursor-not-allowed' 
                      : `bg-gradient-to-b ${accentColor} text-white shadow-md md:shadow-lg hover:shadow-xl hover:scale-110`}`}
          whileTap={currentPosition > 0 && !isAnimating ? { scale: 0.9 } : {}}
        >
          ↑
        </motion.button>
        
        {/* Vertical Step Indicators */}
        <div className="flex flex-col items-center gap-1.5 md:gap-2 py-1">
          {steps.map((step, index) => (
            <motion.button 
              key={index} 
              onClick={() => moveToStep(index)} 
              disabled={isAnimating} 
              className={`relative rounded-full transition-all group ${
                index === currentPosition 
                  ? `w-2 h-4 md:w-3.5 md:h-8 bg-gradient-to-b ${accentColor} shadow-md md:shadow-lg` 
                  : 'w-1.5 h-1.5 md:w-3 md:h-3 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400'
              } ${isAnimating ? 'cursor-not-allowed' : 'cursor-pointer'}`}
              whileHover={!isAnimating ? { scale: 1.3 } : {}}
            >
              {/* Tooltip - Desktop only */}
              <div className="hidden md:block absolute left-full ml-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 
                            transition-opacity pointer-events-none whitespace-nowrap">
                <div className={`px-2 py-1 rounded-lg text-xs font-medium shadow-lg
                              ${index === currentPosition 
                                ? `bg-gradient-to-r ${accentColor} text-white` 
                                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300'}`}>
                  {step.title}
                </div>
              </div>
            </motion.button>
          ))}
        </div>
        
        {/* Down Button */}
        <motion.button 
          onClick={() => moveToStep(Math.min(steps.length - 1, currentPosition + 1))} 
          disabled={currentPosition === steps.length - 1 || isAnimating} 
          className={`w-8 h-8 md:w-11 md:h-11 rounded-lg md:rounded-xl font-semibold text-sm md:text-lg flex items-center justify-center transition-all
                    ${currentPosition === steps.length - 1 || isAnimating 
                      ? 'bg-gray-100 dark:bg-gray-800 text-gray-400 cursor-not-allowed' 
                      : `bg-gradient-to-b ${accentColor} text-white shadow-md md:shadow-lg hover:shadow-xl hover:scale-110`}`}
          whileTap={currentPosition < steps.length - 1 && !isAnimating ? { scale: 0.9 } : {}}
        >
          ↓
        </motion.button>
      </motion.div>
      <div className="relative py-6 md:py-12 pl-12 md:pl-20">
        {/* START */}
        <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative mb-4 md:mb-8">
          <span className={`text-2xl md:text-4xl lg:text-5xl font-black bg-gradient-to-r ${accentColor} bg-clip-text text-transparent`}>START</span>
          <motion.div className={`absolute -bottom-2 left-0 h-1 bg-gradient-to-r ${accentColor} rounded-full`} initial={{ width: 0 }} whileInView={{ width: '80px' }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.5 }} />
        </motion.div>


        {/* Desktop */}
        <div className="hidden md:block relative w-full" style={{ minHeight: `${svgHeight}px` }}>
          <svg className="absolute inset-0 w-full h-full" viewBox={`0 0 1000 ${svgHeight}`} preserveAspectRatio="xMidYMid meet" fill="none">
            <path d={generateDesktopPath(steps.length)} stroke="#1a1a2e" strokeWidth="60" strokeLinecap="round" strokeLinejoin="round" className="opacity-30" style={{ transform: 'translate(4px, 4px)' }} />
            <path d={generateDesktopPath(steps.length)} stroke="#2d3748" strokeWidth="56" strokeLinecap="round" strokeLinejoin="round" className="dark:stroke-gray-700" />
            <path d={generateDesktopPath(steps.length)} stroke="#4a5568" strokeWidth="52" strokeLinecap="round" strokeLinejoin="round" className="dark:stroke-gray-600" />
            <path ref={pathRef} d={generateDesktopPath(steps.length)} stroke="#2d3748" strokeWidth="46" strokeLinecap="round" strokeLinejoin="round" className="dark:stroke-gray-700" />
            <motion.path d={generateDesktopPath(steps.length)} stroke="white" strokeWidth="3" strokeLinecap="round" strokeDasharray="25 20" className="opacity-50" initial={{ strokeDashoffset: 0 }} animate={{ strokeDashoffset: -90 }} transition={{ duration: 20, ease: "linear", repeat: Infinity }} />
          </svg>

          {/* Character Desktop */}
          <div className="absolute z-30 pointer-events-none" style={{ left: `${(charPos.x / 1000) * 100}%`, top: `${(charPos.y / svgHeight) * 100}%`, transform: `translate(-50%, -90%) scaleX(${walkDirection === 'left' ? -1 : 1})` }}>
            <div className="w-20 h-20">
              {Lottie && <Lottie animationData={isWalking ? walkingAnimation : idleAnimation} loop autoplay style={{ width: '100%', height: '100%' }} />}
            </div>
          </div>

          {/* Pins Desktop */}
          {steps.map((step, index) => {
            const isEven = index % 2 === 0;
            const isActive = index === currentPosition;
            return (
              <div key={step.id} className="absolute w-full" style={{ top: `${index * 180}px`, height: '180px' }}>
                <motion.button initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.1, type: 'spring' }} whileHover={{ scale: 1.1, y: -5 }} onClick={() => handleStepClick(step)} className="absolute z-20 cursor-pointer group" style={{ left: isEven ? '72%' : '28%', top: '50%', transform: 'translate(-50%, -65%)' }}>
                  <div className="relative">
                    {isActive && <motion.div className={`absolute -inset-3 rounded-full border-2 border-dashed ${productColor === 'orange' ? 'border-orange-400' : 'border-primary-600'}`} animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }} />}
                    {(step.status === 'current' || isActive) && <motion.div className={`absolute inset-0 rounded-full ${pinBg}`} animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }} transition={{ duration: 2, repeat: Infinity }} />}
                    <div className={`absolute inset-0 rounded-full ${pinBg} blur-xl opacity-40 group-hover:opacity-70 transition-opacity`} />
                    <div className={`absolute -top-2 -right-2 w-7 h-7 rounded-full ${getStatusColor(step.status)} flex items-center justify-center text-white text-xs font-bold z-30 ring-4 ${getStatusRing(step.status)} shadow-lg`}>{step.status === 'completed' ? '✓' : step.id}</div>
                    <div className={`relative w-16 h-16 rounded-full ${pinBg} shadow-2xl ${pinGlow} overflow-hidden ring-4 ring-white dark:ring-gray-900 group-hover:ring-8 transition-all ${isActive ? 'ring-8' : ''}`}>
                      <Image src={step.image} alt={step.title} width={64} height={64} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center"><span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-xs">View</span></div>
                    </div>
                    <div className={`absolute -bottom-3 left-1/2 -translate-x-1/2 border-l-[10px] border-r-[10px] border-t-[16px] border-l-transparent border-r-transparent ${productColor === 'orange' ? 'border-t-orange-500' : 'border-t-primary-800'}`} />
                    <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-8 h-3 bg-black/30 rounded-full blur-sm" />
                  </div>
                </motion.button>
                <motion.div initial={{ opacity: 0, x: isEven ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className={`absolute top-1/2 -translate-y-1/2 w-[36%] ${isEven ? 'left-[5%] text-right' : 'left-[57%] text-left'}`}>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-2 ${step.status === 'completed' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' : step.status === 'current' ? (productColor === 'orange' ? 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400' : 'bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-400') : 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400'}`}>{step.status === 'completed' ? '✓ Completed' : step.status === 'current' ? '● In Progress' : '○ Upcoming'}</span>
                  <h3 className={`text-lg font-bold mb-1 ${isActive ? (productColor === 'orange' ? 'text-orange-500' : 'text-primary-600') : 'text-primary-800 dark:text-white'}`}>{step.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mb-2">{step.description}</p>
                  <motion.button onClick={() => handleStepClick(step)} className={`text-sm font-semibold ${productColor === 'orange' ? 'text-orange-500 hover:text-orange-600' : 'text-secondary-600 dark:text-secondary-400'}`} whileHover={{ x: isEven ? -3 : 3 }}>Details →</motion.button>
                </motion.div>
              </div>
            );
          })}
        </div>


        {/* Mobile */}
        <div className="md:hidden relative" style={{ minHeight: `${mobileSvgHeight}px` }}>
          <svg className="absolute left-4 top-0 w-16 h-full" viewBox={`0 0 60 ${mobileSvgHeight}`} preserveAspectRatio="xMidYMid meet" fill="none">
            <path d={generateMobilePath(steps.length)} stroke="#1a1a2e" strokeWidth="35" strokeLinecap="round" className="opacity-30" />
            <path d={generateMobilePath(steps.length)} stroke="#2d3748" strokeWidth="32" strokeLinecap="round" className="dark:stroke-gray-700" />
            <path d={generateMobilePath(steps.length)} stroke="#4a5568" strokeWidth="28" strokeLinecap="round" className="dark:stroke-gray-600" />
            <path ref={mobilePathRef} d={generateMobilePath(steps.length)} stroke="#2d3748" strokeWidth="24" strokeLinecap="round" className="dark:stroke-gray-700" />
            <motion.path d={generateMobilePath(steps.length)} stroke="white" strokeWidth="2" strokeLinecap="round" strokeDasharray="12 10" className="opacity-50" initial={{ strokeDashoffset: 0 }} animate={{ strokeDashoffset: -44 }} transition={{ duration: 12, ease: "linear", repeat: Infinity }} />
          </svg>

          {/* Character Mobile */}
          <div className="absolute z-30 pointer-events-none" style={{ left: `${16 + (mobileCharPos.x / 60) * 64}px`, top: `${(mobileCharPos.y / mobileSvgHeight) * 100}%`, transform: 'translate(-50%, -90%)' }}>
            <div className="w-14 h-14">
              {Lottie && <Lottie animationData={isWalking ? walkingAnimation : idleAnimation} loop autoplay style={{ width: '100%', height: '100%' }} />}
            </div>
          </div>

          {/* Pins Mobile */}
          {steps.map((step, index) => {
            const isActive = index === currentPosition;
            return (
              <div key={step.id} className="relative" style={{ height: '160px' }}>
                <div className="flex items-start">
                  <div className="relative w-20 flex flex-col items-center pt-8">
                    <motion.button initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.1, type: 'spring' }} whileHover={{ scale: 1.1 }} onClick={() => handleStepClick(step)} className="relative z-10 cursor-pointer group">
                      {isActive && <motion.div className={`absolute -inset-2 rounded-full border-2 border-dashed ${productColor === 'orange' ? 'border-orange-400' : 'border-primary-600'}`} animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }} />}
                      {(step.status === 'current' || isActive) && <motion.div className={`absolute inset-0 rounded-full ${pinBg}`} animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0, 0.4] }} transition={{ duration: 2, repeat: Infinity }} />}
                      <div className={`absolute inset-0 rounded-full ${pinBg} blur-md opacity-40`} />
                      <div className={`absolute -top-1 -right-1 w-5 h-5 rounded-full ${getStatusColor(step.status)} flex items-center justify-center text-white text-[10px] font-bold z-20 ring-2 ${getStatusRing(step.status)}`}>{step.status === 'completed' ? '✓' : step.id}</div>
                      <div className={`relative w-12 h-12 rounded-full ${pinBg} shadow-xl ${pinGlow} overflow-hidden ring-3 ring-white dark:ring-gray-900 ${isActive ? 'ring-4' : ''} transition-all group-hover:ring-4`}>
                        <Image src={step.image} alt={step.title} width={48} height={48} className="w-full h-full object-cover" />
                      </div>
                      <div className={`absolute -bottom-2 left-1/2 -translate-x-1/2 border-l-[6px] border-r-[6px] border-t-[10px] border-l-transparent border-r-transparent ${productColor === 'orange' ? 'border-t-orange-500' : 'border-t-primary-800'}`} />
                    </motion.button>
                  </div>
                  <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex-1 pt-6 pr-4">
                    <span className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold mb-1 ${step.status === 'completed' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' : step.status === 'current' ? (productColor === 'orange' ? 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400' : 'bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-400') : 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400'}`}>{step.status === 'completed' ? '✓ Done' : step.status === 'current' ? '● Now' : '○ Soon'}</span>
                    <h3 className={`text-sm font-bold mb-1 ${isActive ? (productColor === 'orange' ? 'text-orange-500' : 'text-primary-600') : 'text-primary-800 dark:text-white'}`}>{step.title}</h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-2 mb-2">{step.description}</p>
                    <button onClick={() => handleStepClick(step)} className={`text-xs font-semibold ${productColor === 'orange' ? 'text-orange-500' : 'text-secondary-600 dark:text-secondary-400'}`}>Details →</button>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>

        {/* GOAL */}
        <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative mt-4 md:mt-8 text-right">
          <span className={`text-2xl md:text-4xl lg:text-5xl font-black bg-gradient-to-r ${accentColor} bg-clip-text text-transparent`}>GOAL 🎯</span>
          <motion.div className={`absolute -bottom-2 right-0 h-1 bg-gradient-to-r ${accentColor} rounded-full`} initial={{ width: 0 }} whileInView={{ width: '80px' }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.5 }} />
        </motion.div>
      </div>

      <RoadmapModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} step={selectedStep} productName={productName} accentColor={accentColor} />
    </>
  );
}

function generateDesktopPath(stepCount: number): string {
  const segmentHeight = 180, roadY = 90, leftX = 280, rightX = 720, curve = 90;
  let path = `M 0 ${roadY}`;
  for (let i = 0; i < stepCount; i++) {
    const baseY = i * segmentHeight + roadY, nextY = baseY + segmentHeight, isEven = i % 2 === 0;
    if (isEven) { path += ` L ${rightX} ${baseY}`; if (i < stepCount - 1) path += ` C ${rightX + curve} ${baseY}, ${rightX + curve} ${nextY}, ${rightX} ${nextY}`; }
    else { path += ` L ${leftX} ${baseY}`; if (i < stepCount - 1) path += ` C ${leftX - curve} ${baseY}, ${leftX - curve} ${nextY}, ${leftX} ${nextY}`; }
  }
  path += (stepCount - 1) % 2 === 0 ? ` L 1000 ${(stepCount - 1) * segmentHeight + roadY}` : ` L 0 ${(stepCount - 1) * segmentHeight + roadY}`;
  return path;
}

function generateMobilePath(stepCount: number): string {
  const segmentHeight = 160, startY = 50, x = 30;
  let path = `M ${x} ${startY}`;
  for (let i = 1; i < stepCount; i++) path += ` L ${x} ${i * segmentHeight + startY}`;
  return path;
}
