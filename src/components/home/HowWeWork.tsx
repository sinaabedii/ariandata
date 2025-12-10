'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageSquare, 
  Search, 
  Code2, 
  Rocket,
  ArrowRight,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';

const steps = [
  {
    id: 1,
    icon: MessageSquare,
    title: 'Discovery & Consultation',
    subtitle: 'Understanding Your Vision',
    description: 'We start with in-depth discussions to understand your business goals, challenges, and requirements. Our team analyzes your current systems and identifies opportunities for improvement.',
    features: ['Business Analysis', 'Requirements Gathering', 'Feasibility Study'],
    color: 'from-blue-500 to-cyan-500',
    duration: '1-2 Weeks',
  },
  {
    id: 2,
    icon: Search,
    title: 'Research & Strategy',
    subtitle: 'Planning the Perfect Solution',
    description: 'Our experts research the best technologies and approaches for your project. We create a detailed roadmap with milestones, timelines, and deliverables.',
    features: ['Technology Selection', 'Architecture Design', 'Project Roadmap'],
    color: 'from-purple-500 to-pink-500',
    duration: '1-2 Weeks',
  },
  {
    id: 3,
    icon: Code2,
    title: 'Development & Testing',
    subtitle: 'Building with Excellence',
    description: 'Using agile methodology, we develop your solution in sprints with continuous testing and feedback. You stay involved throughout the process with regular demos.',
    features: ['Agile Development', 'Quality Assurance', 'Regular Updates'],
    color: 'from-orange-500 to-red-500',
    duration: '4-12 Weeks',
  },
  {
    id: 4,
    icon: Rocket,
    title: 'Launch & Support',
    subtitle: 'Going Live Successfully',
    description: 'We handle the deployment with zero downtime and provide comprehensive training. Our support team remains available for ongoing maintenance and enhancements.',
    features: ['Smooth Deployment', 'Team Training', '24/7 Support'],
    color: 'from-green-500 to-emerald-500',
    duration: 'Ongoing',
  },
];

export default function HowWeWork() {
  const [activeStep, setActiveStep] = useState(1);
  const currentStep = steps.find(s => s.id === activeStep)!;

  return (
    <section className="relative py-16 sm:py-20 lg:py-28 bg-gray-50 dark:bg-primary-950/50 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl translate-x-1/2" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-accent-cyan/10 rounded-full blur-3xl -translate-x-1/2" />

      <div className="container-custom relative z-10">
        <SectionHeading
          label="Our Process"
          title="How We Bring Ideas to Life"
          description="A proven methodology that ensures successful project delivery every time."
        />

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left side - Steps */}
          <div className="space-y-3 sm:space-y-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <button
                  onClick={() => setActiveStep(step.id)}
                  className={`w-full text-left p-4 sm:p-6 rounded-2xl transition-all duration-500 group ${
                    activeStep === step.id
                      ? 'bg-white dark:bg-primary-900 shadow-xl shadow-gray-200/50 dark:shadow-none'
                      : 'bg-transparent hover:bg-white/50 dark:hover:bg-primary-900/50'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    {/* Step number & icon */}
                    <div className="relative flex-shrink-0">
                      <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                        activeStep === step.id
                          ? `bg-gradient-to-br ${step.color} shadow-lg`
                          : 'bg-gray-100 dark:bg-primary-800'
                      }`}>
                        <step.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${
                          activeStep === step.id ? 'text-white' : 'text-gray-500 dark:text-gray-400'
                        }`} />
                      </div>
                      {/* Connector line */}
                      {index < steps.length - 1 && (
                        <div className={`absolute top-14 sm:top-16 left-1/2 -translate-x-1/2 w-0.5 h-6 sm:h-8 ${
                          activeStep > step.id 
                            ? 'bg-gradient-to-b from-green-500 to-green-500' 
                            : 'bg-gray-200 dark:bg-primary-700'
                        }`} />
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                          activeStep === step.id
                            ? `bg-gradient-to-r ${step.color} text-white`
                            : 'bg-gray-100 dark:bg-primary-800 text-gray-500 dark:text-gray-400'
                        }`}>
                          Step {step.id}
                        </span>
                        <span className="text-xs text-gray-400">{step.duration}</span>
                      </div>
                      <h3 className={`text-base sm:text-lg font-bold transition-colors ${
                        activeStep === step.id 
                          ? 'text-primary-950 dark:text-white' 
                          : 'text-gray-600 dark:text-gray-400'
                      }`}>
                        {step.title}
                      </h3>
                      <p className={`text-sm transition-colors ${
                        activeStep === step.id 
                          ? 'text-gray-600 dark:text-gray-400' 
                          : 'text-gray-400 dark:text-gray-500'
                      }`}>
                        {step.subtitle}
                      </p>
                    </div>

                    {/* Arrow */}
                    <ArrowRight className={`w-5 h-5 flex-shrink-0 transition-all ${
                      activeStep === step.id 
                        ? 'text-primary-800 dark:text-secondary-400 translate-x-1' 
                        : 'text-gray-300 dark:text-gray-600'
                    }`} />
                  </div>
                </button>
              </motion.div>
            ))}
          </div>

          {/* Right side - Active step detail */}
          <div className="lg:sticky lg:top-24">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="relative p-6 sm:p-8 lg:p-10 rounded-[2rem] bg-white dark:bg-primary-900 shadow-2xl shadow-gray-200/50 dark:shadow-none overflow-hidden"
              >
                {/* Background decoration */}
                <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${currentStep.color} rounded-full opacity-20 blur-3xl`} />
                
                {/* Step indicator */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${currentStep.color} flex items-center justify-center`}>
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 dark:text-gray-400">Step {currentStep.id} of 4</span>
                    <div className="flex gap-1.5 mt-1">
                      {steps.map(s => (
                        <div 
                          key={s.id}
                          className={`h-1.5 rounded-full transition-all duration-300 ${
                            s.id <= activeStep 
                              ? `w-6 bg-gradient-to-r ${currentStep.color}` 
                              : 'w-3 bg-gray-200 dark:bg-primary-700'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl sm:text-3xl font-bold text-primary-950 dark:text-white mb-3">
                  {currentStep.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                  {currentStep.description}
                </p>

                {/* Features */}
                <div className="space-y-3">
                  {currentStep.features.map((feature, idx) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${currentStep.color} flex items-center justify-center flex-shrink-0`}>
                        <CheckCircle2 className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm font-medium text-primary-950 dark:text-white">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Duration badge */}
                <div className="mt-8 pt-6 border-t border-gray-100 dark:border-primary-800">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 dark:text-gray-400">Estimated Duration</span>
                    <span className={`px-4 py-2 rounded-full bg-gradient-to-r ${currentStep.color} text-white text-sm font-semibold`}>
                      {currentStep.duration}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
