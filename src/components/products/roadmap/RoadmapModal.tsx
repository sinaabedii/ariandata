'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, CheckCircle2, Clock, Target, Sparkles, Calendar, Users, Zap, ArrowRight, 
  Star, TrendingUp, Shield, Lightbulb, Rocket, Flag, Award, BookOpen, 
  Code, Layers, GitBranch, MessageSquare, Eye, Heart, ThumbsUp, Share2,
  ChevronRight, ExternalLink, Play, FileText, Settings, Database
} from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

interface RoadmapStep {
  id: number;
  title: string;
  description: string;
  details: string[];
  icon: string;
  image: string;
  status?: 'completed' | 'current' | 'upcoming';
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

interface RoadmapModalProps {
  isOpen: boolean;
  onClose: () => void;
  step: RoadmapStep | null;
  productName: string;
  accentColor?: string;
}

export default function RoadmapModal({ isOpen, onClose, step, productName, accentColor = 'from-primary-800 to-secondary-600' }: RoadmapModalProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'details' | 'resources'>('overview');
  
  if (!step) return null;

  const getStatusIcon = () => {
    switch (step.status) {
      case 'completed': return <CheckCircle2 className="w-4 h-4" />;
      case 'current': return <Clock className="w-4 h-4" />;
      default: return <Target className="w-4 h-4" />;
    }
  };

  const getStatusText = () => {
    switch (step.status) {
      case 'completed': return 'Completed';
      case 'current': return 'In Progress';
      default: return 'Upcoming';
    }
  };

  const getStatusBg = () => {
    switch (step.status) {
      case 'completed': return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30';
      case 'current': return 'bg-amber-500/20 text-amber-400 border-amber-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getPriorityColor = () => {
    switch (step.priority) {
      case 'high': return 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400';
      case 'medium': return 'bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400';
      default: return 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400';
    }
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Eye },
    { id: 'details', label: 'Details', icon: FileText },
    { id: 'resources', label: 'Resources', icon: BookOpen },
  ] as const;


  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4">
          {/* Backdrop */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="absolute inset-0 bg-black/85 backdrop-blur-xl" />
          
          {/* Particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(10)].map((_, i) => (
              <motion.div key={i} className={`absolute w-1.5 h-1.5 rounded-full bg-gradient-to-r ${accentColor} opacity-30`}
                initial={{ x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : 0, y: typeof window !== 'undefined' ? window.innerHeight : 0 }}
                animate={{ y: -50, x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : 0 }}
                transition={{ duration: 6 + Math.random() * 4, repeat: Infinity, delay: i * 0.4 }}
              />
            ))}
          </div>
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -30 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl max-h-[92vh] overflow-hidden"
          >
            <div className={`absolute -inset-1 bg-gradient-to-r ${accentColor} rounded-[24px] opacity-40 blur-2xl`} />
            
            <div className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col">
              {/* Header */}
              <div className={`relative bg-gradient-to-br ${accentColor} p-4 sm:p-6 pb-14 sm:pb-16 flex-shrink-0`}>
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white rounded-full -translate-y-1/2 translate-x-1/2" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-white rounded-full translate-y-1/2 -translate-x-1/2" />
                  <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 opacity-5" />
                </div>
                
                <motion.button onClick={onClose} className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 rounded-full bg-white/20 hover:bg-white/40 transition-all z-20" whileHover={{ rotate: 90, scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <X className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </motion.button>
                
                <div className="relative flex flex-col sm:flex-row sm:items-start gap-4">
                  {/* Image */}
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.1, type: 'spring' }} className="relative flex-shrink-0">
                    <div className={`absolute inset-0 bg-white rounded-xl blur-lg opacity-30`} />
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-white/20 p-0.5 shadow-xl">
                      <div className="w-full h-full rounded-lg overflow-hidden bg-white dark:bg-gray-800">
                        <Image src={step.image} alt={step.title} width={80} height={80} className="w-full h-full object-cover" />
                      </div>
                    </div>
                    <motion.div className="absolute -top-1 -right-1" animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }}>
                      <Sparkles className="w-4 h-4 text-yellow-300" />
                    </motion.div>
                  </motion.div>
                  
                  {/* Title & Meta */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="px-2 py-0.5 rounded-full bg-white/20 text-white text-[10px] sm:text-xs font-medium">{productName}</span>
                      <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-medium border ${getStatusBg()}`}>
                        {getStatusIcon()} {getStatusText()}
                      </span>
                      {step.priority && (
                        <span className={`px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-medium ${getPriorityColor()}`}>
                          {step.priority === 'high' ? '🔥' : step.priority === 'medium' ? '⚡' : '📌'} {step.priority}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3">
                      <span className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-white/20 text-white font-bold text-sm sm:text-lg">{step.id}</span>
                      <h3 className="text-lg sm:text-2xl font-bold text-white leading-tight truncate">{step.title}</h3>
                    </div>
                    {/* Tags */}
                    {step.tags && step.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1 mt-2">
                        {step.tags.slice(0, 4).map((tag, i) => (
                          <span key={i} className="px-1.5 py-0.5 rounded bg-white/10 text-white/80 text-[9px] sm:text-[10px]">#{tag}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>


              {/* Tabs */}
              <div className="flex-shrink-0 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
                <div className="flex">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex-1 flex items-center justify-center gap-1.5 px-3 py-2.5 sm:py-3 text-xs sm:text-sm font-medium transition-all
                        ${activeTab === tab.id 
                          ? `text-transparent bg-clip-text bg-gradient-to-r ${accentColor} border-b-2 border-current` 
                          : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'}`}
                    >
                      <tab.icon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${activeTab === tab.id ? 'text-orange-500' : ''}`} />
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-4 sm:p-6">
                <AnimatePresence mode="wait">
                  {activeTab === 'overview' && (
                    <motion.div key="overview" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} className="space-y-4">
                      {/* Description */}
                      <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-4">
                        <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">{step.description}</p>
                      </div>

                      {/* Stats Grid */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
                        {step.duration && (
                          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-3 text-center">
                            <Calendar className="w-5 h-5 mx-auto mb-1.5 text-blue-500" />
                            <p className="text-[10px] text-gray-500 dark:text-gray-400">Duration</p>
                            <p className="text-xs sm:text-sm font-bold text-gray-800 dark:text-white">{step.duration}</p>
                          </div>
                        )}
                        {step.team && (
                          <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-3 text-center">
                            <Users className="w-5 h-5 mx-auto mb-1.5 text-purple-500" />
                            <p className="text-[10px] text-gray-500 dark:text-gray-400">Team</p>
                            <p className="text-xs sm:text-sm font-bold text-gray-800 dark:text-white">{step.team}</p>
                          </div>
                        )}
                        {step.startDate && (
                          <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-3 text-center">
                            <Flag className="w-5 h-5 mx-auto mb-1.5 text-green-500" />
                            <p className="text-[10px] text-gray-500 dark:text-gray-400">Start</p>
                            <p className="text-xs sm:text-sm font-bold text-gray-800 dark:text-white">{step.startDate}</p>
                          </div>
                        )}
                        {step.endDate && (
                          <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-3 text-center">
                            <Target className="w-5 h-5 mx-auto mb-1.5 text-red-500" />
                            <p className="text-[10px] text-gray-500 dark:text-gray-400">End</p>
                            <p className="text-xs sm:text-sm font-bold text-gray-800 dark:text-white">{step.endDate}</p>
                          </div>
                        )}
                        <div className="bg-amber-50 dark:bg-amber-900/20 rounded-xl p-3 text-center">
                          <Star className="w-5 h-5 mx-auto mb-1.5 text-amber-500" />
                          <p className="text-[10px] text-gray-500 dark:text-gray-400">Phase</p>
                          <p className="text-xs sm:text-sm font-bold text-gray-800 dark:text-white">Step {step.id}</p>
                        </div>
                        {step.progress !== undefined && (
                          <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-xl p-3 text-center">
                            <TrendingUp className="w-5 h-5 mx-auto mb-1.5 text-emerald-500" />
                            <p className="text-[10px] text-gray-500 dark:text-gray-400">Progress</p>
                            <p className="text-xs sm:text-sm font-bold text-gray-800 dark:text-white">{step.progress}%</p>
                          </div>
                        )}
                      </div>

                      {/* Progress Bar */}
                      {step.progress !== undefined && (
                        <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-4">
                          <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-2">
                            <span className="font-medium">Overall Progress</span>
                            <span className="font-bold">{step.progress}%</span>
                          </div>
                          <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                            <motion.div className={`h-full bg-gradient-to-r ${accentColor} rounded-full`} initial={{ width: 0 }} animate={{ width: `${step.progress}%` }} transition={{ delay: 0.3, duration: 1 }} />
                          </div>
                        </div>
                      )}

                      {/* Metrics */}
                      {step.metrics && step.metrics.length > 0 && (
                        <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800/50 dark:to-gray-800/30 rounded-xl p-4">
                          <h4 className="flex items-center gap-2 text-xs font-bold text-gray-600 dark:text-gray-300 uppercase mb-3">
                            <TrendingUp className="w-4 h-4" /> Key Metrics
                          </h4>
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                            {step.metrics.map((metric, i) => (
                              <div key={i} className="bg-white dark:bg-gray-800 rounded-lg p-3 shadow-sm">
                                <p className="text-[10px] text-gray-500 dark:text-gray-400 mb-1">{metric.label}</p>
                                <div className="flex items-center gap-1">
                                  <span className="text-sm sm:text-base font-bold text-gray-800 dark:text-white">{metric.value}</span>
                                  {metric.trend && (
                                    <span className={`text-[10px] ${metric.trend === 'up' ? 'text-green-500' : metric.trend === 'down' ? 'text-red-500' : 'text-gray-400'}`}>
                                      {metric.trend === 'up' ? '↑' : metric.trend === 'down' ? '↓' : '→'}
                                    </span>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Milestones */}
                      {step.milestones && step.milestones.length > 0 && (
                        <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-xl p-4">
                          <h4 className="flex items-center gap-2 text-xs font-bold text-indigo-700 dark:text-indigo-400 uppercase mb-3">
                            <Flag className="w-4 h-4" /> Milestones
                          </h4>
                          <div className="space-y-2">
                            {step.milestones.map((milestone, i) => (
                              <div key={i} className="flex items-center gap-3 bg-white dark:bg-gray-800 rounded-lg p-2.5">
                                <div className={`w-5 h-5 rounded-full flex items-center justify-center ${milestone.completed ? 'bg-emerald-500' : 'bg-gray-300 dark:bg-gray-600'}`}>
                                  {milestone.completed ? <CheckCircle2 className="w-3 h-3 text-white" /> : <div className="w-2 h-2 rounded-full bg-white" />}
                                </div>
                                <span className={`text-xs sm:text-sm ${milestone.completed ? 'text-gray-600 dark:text-gray-300' : 'text-gray-500 dark:text-gray-400'}`}>{milestone.title}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </motion.div>
                  )}


                  {activeTab === 'details' && (
                    <motion.div key="details" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} className="space-y-4">
                      {/* Key Features */}
                      <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-xl p-4">
                        <h4 className="flex items-center gap-2 text-xs font-bold text-emerald-700 dark:text-emerald-400 uppercase mb-3">
                          <CheckCircle2 className="w-4 h-4" /> Key Features
                        </h4>
                        <ul className="space-y-2">
                          {step.details.map((detail, i) => (
                            <motion.li key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }} className="flex items-start gap-2.5">
                              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-200 dark:bg-emerald-800 flex items-center justify-center mt-0.5">
                                <CheckCircle2 className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                              </span>
                              <span className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm">{detail}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      {/* Benefits */}
                      {step.benefits && step.benefits.length > 0 && (
                        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4">
                          <h4 className="flex items-center gap-2 text-xs font-bold text-blue-700 dark:text-blue-400 uppercase mb-3">
                            <Lightbulb className="w-4 h-4" /> Benefits
                          </h4>
                          <ul className="space-y-2">
                            {step.benefits.map((benefit, i) => (
                              <li key={i} className="flex items-start gap-2.5">
                                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-200 dark:bg-blue-800 flex items-center justify-center mt-0.5">
                                  <Zap className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                                </span>
                                <span className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Deliverables */}
                      {step.deliverables && step.deliverables.length > 0 && (
                        <div className="bg-amber-50 dark:bg-amber-900/20 rounded-xl p-4">
                          <h4 className="flex items-center gap-2 text-xs font-bold text-amber-700 dark:text-amber-400 uppercase mb-3">
                            <Rocket className="w-4 h-4" /> Deliverables
                          </h4>
                          <ul className="space-y-2">
                            {step.deliverables.map((item, i) => (
                              <li key={i} className="flex items-start gap-2.5">
                                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-amber-200 dark:bg-amber-800 flex items-center justify-center mt-0.5">
                                  <ArrowRight className="w-3 h-3 text-amber-600 dark:text-amber-400" />
                                </span>
                                <span className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Dependencies */}
                      {step.dependencies && step.dependencies.length > 0 && (
                        <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-4">
                          <h4 className="flex items-center gap-2 text-xs font-bold text-purple-700 dark:text-purple-400 uppercase mb-3">
                            <GitBranch className="w-4 h-4" /> Dependencies
                          </h4>
                          <ul className="space-y-2">
                            {step.dependencies.map((dep, i) => (
                              <li key={i} className="flex items-start gap-2.5">
                                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-purple-200 dark:bg-purple-800 flex items-center justify-center mt-0.5">
                                  <Layers className="w-3 h-3 text-purple-600 dark:text-purple-400" />
                                </span>
                                <span className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm">{dep}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Risks */}
                      {step.risks && step.risks.length > 0 && (
                        <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-4">
                          <h4 className="flex items-center gap-2 text-xs font-bold text-red-700 dark:text-red-400 uppercase mb-3">
                            <Shield className="w-4 h-4" /> Potential Risks
                          </h4>
                          <ul className="space-y-2">
                            {step.risks.map((risk, i) => (
                              <li key={i} className="flex items-start gap-2.5">
                                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-red-200 dark:bg-red-800 flex items-center justify-center mt-0.5">
                                  <X className="w-3 h-3 text-red-600 dark:text-red-400" />
                                </span>
                                <span className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm">{risk}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Notes */}
                      {step.notes && (
                        <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4">
                          <h4 className="flex items-center gap-2 text-xs font-bold text-gray-600 dark:text-gray-400 uppercase mb-2">
                            <MessageSquare className="w-4 h-4" /> Notes
                          </h4>
                          <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm italic">{step.notes}</p>
                        </div>
                      )}
                    </motion.div>
                  )}


                  {activeTab === 'resources' && (
                    <motion.div key="resources" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} className="space-y-4">
                      {/* Technologies */}
                      {step.technologies && step.technologies.length > 0 && (
                        <div className="bg-violet-50 dark:bg-violet-900/20 rounded-xl p-4">
                          <h4 className="flex items-center gap-2 text-xs font-bold text-violet-700 dark:text-violet-400 uppercase mb-3">
                            <Code className="w-4 h-4" /> Technologies & Tools
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {step.technologies.map((tech, i) => (
                              <motion.span key={i} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.05 }}
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-violet-200 dark:bg-violet-800 text-violet-700 dark:text-violet-300 rounded-full text-xs font-medium">
                                <Database className="w-3 h-3" /> {tech}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Resources */}
                      {step.resources && step.resources.length > 0 && (
                        <div className="bg-cyan-50 dark:bg-cyan-900/20 rounded-xl p-4">
                          <h4 className="flex items-center gap-2 text-xs font-bold text-cyan-700 dark:text-cyan-400 uppercase mb-3">
                            <BookOpen className="w-4 h-4" /> Resources & Links
                          </h4>
                          <div className="space-y-2">
                            {step.resources.map((resource, i) => (
                              <div key={i} className="flex items-center justify-between bg-white dark:bg-gray-800 rounded-lg p-3">
                                <div className="flex items-center gap-3">
                                  <div className="w-8 h-8 rounded-lg bg-cyan-100 dark:bg-cyan-800 flex items-center justify-center">
                                    {resource.type === 'doc' ? <FileText className="w-4 h-4 text-cyan-600" /> :
                                     resource.type === 'video' ? <Play className="w-4 h-4 text-cyan-600" /> :
                                     resource.type === 'link' ? <ExternalLink className="w-4 h-4 text-cyan-600" /> :
                                     <Settings className="w-4 h-4 text-cyan-600" />}
                                  </div>
                                  <div>
                                    <p className="text-xs sm:text-sm font-medium text-gray-800 dark:text-white">{resource.name}</p>
                                    <p className="text-[10px] text-gray-500 dark:text-gray-400 capitalize">{resource.type}</p>
                                  </div>
                                </div>
                                {resource.link && (
                                  <a href={resource.link} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-cyan-100 dark:bg-cyan-800 hover:bg-cyan-200 dark:hover:bg-cyan-700 transition-colors">
                                    <ChevronRight className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                                  </a>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Team Info */}
                      {step.team && (
                        <div className="bg-pink-50 dark:bg-pink-900/20 rounded-xl p-4">
                          <h4 className="flex items-center gap-2 text-xs font-bold text-pink-700 dark:text-pink-400 uppercase mb-3">
                            <Users className="w-4 h-4" /> Team Information
                          </h4>
                          <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                            <div className="flex items-center gap-3">
                              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center">
                                <Users className="w-6 h-6 text-white" />
                              </div>
                              <div>
                                <p className="text-sm font-bold text-gray-800 dark:text-white">{step.team}</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">Assigned Team</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Empty State */}
                      {!step.technologies?.length && !step.resources?.length && !step.team && (
                        <div className="text-center py-12">
                          <BookOpen className="w-12 h-12 mx-auto text-gray-300 dark:text-gray-600 mb-3" />
                          <p className="text-gray-500 dark:text-gray-400 text-sm">No resources available for this step</p>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Footer */}
              <div className="flex-shrink-0 p-4 sm:p-6 pt-0 bg-white dark:bg-gray-900">
                <div className="flex flex-col sm:flex-row gap-3">
                  <motion.button
                    onClick={onClose}
                    className={`flex-1 py-3 rounded-xl bg-gradient-to-r ${accentColor} text-white font-semibold text-sm
                             shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98]
                             flex items-center justify-center gap-2`}
                    whileHover={{ y: -2 }}
                    whileTap={{ y: 0 }}
                  >
                    Got it! <Sparkles className="w-4 h-4" />
                  </motion.button>
                  <motion.button
                    onClick={onClose}
                    className="sm:w-auto px-6 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 font-medium text-sm
                             hover:bg-gray-200 dark:hover:bg-gray-700 transition-all flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Share2 className="w-4 h-4" /> Share
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
