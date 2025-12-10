'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  TrendingUp,
  Users,
  Zap,
  Globe,
  Activity,
  BarChart3,
  ArrowUpRight,
  ArrowDownRight,
  Cpu,
  Database,
  Clock,
  CheckCircle
} from 'lucide-react';

interface MetricData {
  value: number;
  change: number;
  data: number[];
}

function SparkLine({ data, color = '#0ea5e9' }: { data: number[], color?: string }) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  
  const points = data.map((value, index) => {
    const x = (index / (data.length - 1)) * 100;
    const y = 100 - ((value - min) / range) * 100;
    return `${x},${y}`;
  }).join(' ');

  return (
    <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
      <defs>
        <linearGradient id={`gradient-${color}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={color} stopOpacity="0.3" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polyline
        points={points}
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <polygon
        points={`0,100 ${points} 100,100`}
        fill={`url(#gradient-${color})`}
      />
    </svg>
  );
}

function AnimatedNumber({ value, suffix = '' }: { value: number; suffix?: string }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const duration = 1000;
    const startTime = Date.now();
    const startValue = displayValue;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      
      setDisplayValue(startValue + (value - startValue) * easeOut);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [value]);

  return (
    <span>
      {displayValue.toLocaleString('en-US', { maximumFractionDigits: 1 })}
      {suffix}
    </span>
  );
}

export default function LiveDashboard() {
  const [metrics, setMetrics] = useState({
    apiCalls: { value: 1247832, change: 12.5, data: Array(20).fill(0).map(() => Math.random() * 100) } as MetricData,
    activeUsers: { value: 3847, change: 8.2, data: Array(20).fill(0).map(() => Math.random() * 100) } as MetricData,
    responseTime: { value: 42, change: -15.3, data: Array(20).fill(0).map(() => Math.random() * 100) } as MetricData,
    accuracy: { value: 99.7, change: 0.3, data: Array(20).fill(0).map(() => Math.random() * 100) } as MetricData,
  });

  const [serverStatus, setServerStatus] = useState([
    { name: 'US-East', status: 'healthy', load: 65 },
    { name: 'EU-West', status: 'healthy', load: 42 },
    { name: 'Asia-Pacific', status: 'healthy', load: 78 },
    { name: 'Middle-East', status: 'healthy', load: 31 },
  ]);

  const [recentActivity, setRecentActivity] = useState([
    { action: 'Model trained', time: '2s ago', type: 'success' },
    { action: 'Data processed', time: '5s ago', type: 'success' },
    { action: 'API request', time: '8s ago', type: 'info' },
    { action: 'Prediction made', time: '12s ago', type: 'success' },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        apiCalls: {
          ...prev.apiCalls,
          value: prev.apiCalls.value + Math.floor(Math.random() * 100),
          data: [...prev.apiCalls.data.slice(1), Math.random() * 100],
        },
        activeUsers: {
          ...prev.activeUsers,
          value: prev.activeUsers.value + Math.floor(Math.random() * 10 - 5),
          data: [...prev.activeUsers.data.slice(1), Math.random() * 100],
        },
        responseTime: {
          ...prev.responseTime,
          value: 40 + Math.random() * 10,
          data: [...prev.responseTime.data.slice(1), Math.random() * 100],
        },
        accuracy: {
          ...prev.accuracy,
          value: 99.5 + Math.random() * 0.4,
          data: [...prev.accuracy.data.slice(1), Math.random() * 100],
        },
      }));

      setServerStatus(prev => prev.map(server => ({
        ...server,
        load: Math.max(20, Math.min(90, server.load + Math.floor(Math.random() * 10 - 5))),
      })));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const mainMetrics = [
    { id: 'apiCalls', label: 'API Calls Today', icon: Zap, color: '#0ea5e9', suffix: '', ...metrics.apiCalls },
    { id: 'activeUsers', label: 'Active Users', icon: Users, color: '#22c55e', suffix: '', ...metrics.activeUsers },
    { id: 'responseTime', label: 'Avg Response', icon: Clock, color: '#f59e0b', suffix: 'ms', ...metrics.responseTime },
    { id: 'accuracy', label: 'AI Accuracy', icon: Activity, color: '#8b5cf6', suffix: '%', ...metrics.accuracy },
  ];

  return (
    <section className="relative py-16 sm:py-20 lg:py-28 bg-white dark:bg-primary-950 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-50 dark:opacity-100">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-accent-cyan/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 mb-4"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-sm font-medium text-green-700 dark:text-green-400">
              Live Dashboard
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-950 dark:text-white mb-4"
          >
            Real-Time AI{' '}
            <span className="bg-gradient-to-r from-secondary-500 to-accent-cyan bg-clip-text text-transparent">
              Performance Metrics
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Watch our AI infrastructure in action with live metrics, server status, and real-time analytics.
          </motion.p>
        </div>

        {/* Main metrics grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
          {mainMetrics.map((metric, index) => (
            <motion.div
              key={metric.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative p-5 sm:p-6 rounded-2xl bg-gray-50 dark:bg-primary-900 border border-gray-100 dark:border-primary-800 overflow-hidden group hover:shadow-xl transition-shadow"
            >
              {/* Sparkline background */}
              <div className="absolute bottom-0 left-0 right-0 h-16 opacity-50">
                <SparkLine data={metric.data} color={metric.color} />
              </div>

              <div className="relative">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${metric.color}20` }}>
                    <metric.icon className="w-5 h-5" style={{ color: metric.color }} />
                  </div>
                  <div className={`flex items-center gap-1 text-sm font-medium ${
                    metric.change > 0 ? 'text-green-500' : 'text-red-500'
                  }`}>
                    {metric.change > 0 ? (
                      <ArrowUpRight className="w-4 h-4" />
                    ) : (
                      <ArrowDownRight className="w-4 h-4" />
                    )}
                    {Math.abs(metric.change)}%
                  </div>
                </div>

                <div className="text-2xl sm:text-3xl font-bold text-primary-950 dark:text-white mb-1">
                  <AnimatedNumber value={metric.value} suffix={metric.suffix} />
                </div>

                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {metric.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Server Status */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 p-5 sm:p-6 rounded-2xl bg-gray-50 dark:bg-primary-900 border border-gray-100 dark:border-primary-800"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-primary-950 dark:text-white flex items-center gap-2">
                <Globe className="w-5 h-5 text-secondary-500" />
                Global Server Status
              </h3>
              <span className="px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-medium flex items-center gap-1">
                <CheckCircle className="w-3 h-3" />
                All Systems Operational
              </span>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {serverStatus.map((server) => (
                <div key={server.name} className="p-4 rounded-xl bg-white dark:bg-primary-800/50 border border-gray-100 dark:border-primary-700">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-medium text-primary-950 dark:text-white">{server.name}</span>
                    <span className="flex items-center gap-1 text-xs text-green-500">
                      <span className="w-2 h-2 rounded-full bg-green-500" />
                      Healthy
                    </span>
                  </div>
                  <div className="relative h-2 bg-gray-200 dark:bg-primary-700 rounded-full overflow-hidden">
                    <motion.div
                      className="absolute left-0 top-0 h-full bg-gradient-to-r from-secondary-500 to-accent-cyan rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${server.load}%` }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                  <div className="flex justify-between mt-2 text-xs text-gray-500 dark:text-gray-400">
                    <span>CPU Load</span>
                    <span>{server.load}%</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-5 sm:p-6 rounded-2xl bg-gray-50 dark:bg-primary-900 border border-gray-100 dark:border-primary-800"
          >
            <h3 className="font-bold text-primary-950 dark:text-white mb-4 flex items-center gap-2">
              <Activity className="w-5 h-5 text-secondary-500" />
              Live Activity
            </h3>

            <div className="space-y-3">
              {recentActivity.map((activity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white dark:bg-primary-800/50"
                >
                  <div className={`w-2 h-2 rounded-full ${
                    activity.type === 'success' ? 'bg-green-500' : 'bg-blue-500'
                  }`} />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-primary-950 dark:text-white truncate">
                      {activity.action}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {activity.time}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
