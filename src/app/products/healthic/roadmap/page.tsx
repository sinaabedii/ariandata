'use client';

import { motion } from 'framer-motion';
import { RoadmapTimeline, RoadmapStep } from '@/components/products/roadmap';
import { Heart, Shield, Calendar, FileText, MessageCircle } from 'lucide-react';

const healthicSteps: RoadmapStep[] = [
  {
    id: 1,
    title: 'OTP Authentication',
    description: 'Secure authentication system using one-time passwords for quick and safe user login to the health platform.',
    details: [
      'SMS-based OTP delivery',
      'Mobile number verification',
      'Passwordless login experience',
      'Advanced encryption security',
      'Simple and fast user experience'
    ],
    icon: 'shield',
    image: 'https://images.unsplash.com/photo-1633265486064-086b219458ec?w=200&h=200&fit=crop'
  },
  {
    id: 2,
    title: 'Dual User Roles',
    description: 'Role management system for patients and doctors with different access levels and dedicated features for each role.',
    details: [
      'Dedicated patient dashboard',
      'Doctor management panel',
      'Tiered access permissions',
      'Professional doctor profiles',
      'Complete patient history'
    ],
    icon: 'users',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=200&h=200&fit=crop'
  },
  {
    id: 3,
    title: 'Online Appointment System',
    description: 'Smart online doctor appointment booking with specialty selection, time slots, and location preferences.',
    details: [
      'Search doctors by specialty',
      'View available time slots',
      'Instant online booking',
      'Automatic appointment reminders',
      'Easy cancellation and rescheduling'
    ],
    icon: 'calendar',
    image: 'https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=200&h=200&fit=crop'
  },
  {
    id: 4,
    title: 'Lab Reservation',
    description: 'Online laboratory booking with digital result delivery directly to user profiles.',
    details: [
      'List of certified laboratories',
      'Online test appointment booking',
      'Digital result delivery',
      'Share results with doctors',
      'Complete test history archive'
    ],
    icon: 'flask',
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=200&h=200&fit=crop'
  },
  {
    id: 5,
    title: 'Medical Records Management',
    description: 'Complete storage and management of medical records including lab tests, imaging, and prescriptions.',
    details: [
      'Laboratory results archive',
      'Radiology image storage',
      'Prescription history',
      'Medical reports',
      'Permanent access to records'
    ],
    icon: 'file-text',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=200&h=200&fit=crop'
  },
  {
    id: 6,
    title: 'Support Ticket System',
    description: 'Direct communication with support team for issue resolution and user inquiries.',
    details: [
      'Online ticket submission',
      'Ticket status tracking',
      'Fast response times',
      'Topic categorization',
      'Communication history'
    ],
    icon: 'headphones',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=200&h=200&fit=crop'
  },
  {
    id: 7,
    title: 'Health Articles',
    description: 'Access to specialized health and wellness articles written by medical professionals.',
    details: [
      'Specialized medical articles',
      'Daily health tips',
      'Health news updates',
      'Topic-based categorization',
      'Advanced search functionality'
    ],
    icon: 'book',
    image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=200&h=200&fit=crop'
  },
  {
    id: 8,
    title: 'Chat Widget',
    description: 'Quick online communication with support and health consultants through live chat.',
    details: [
      'Online support chat',
      'Quick health consultation',
      '24/7 availability',
      'Chat history storage',
      'File and image sharing'
    ],
    icon: 'message',
    image: 'https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=200&h=200&fit=crop'
  }
];

export default function HealthicRoadmapPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background-light to-white dark:from-background-dark dark:to-primary-950">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-red-500/10 to-pink-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r from-red-500 to-pink-500 mb-6 shadow-lg shadow-red-500/25">
              <Heart className="w-10 h-10 text-white" />
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
              <span className="gradient-text">Healthic</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4">
              Smart Healthcare Platform
            </p>
            
            <p className="text-base md:text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Comprehensive health management system with online appointments, medical records management,
              lab reservations, and direct communication with specialist doctors.
            </p>
          </motion.div>
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
              Development Roadmap & Features
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Click on each step to view more details
            </p>
          </motion.div>

          <RoadmapTimeline 
            steps={healthicSteps} 
            productName="Healthic" 
            productColor="orange"
          />
        </div>
      </section>

      {/* Features Summary */}
      <section className="py-16 bg-gradient-to-r from-red-500/5 to-pink-500/5">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Shield, label: 'High Security', value: '100%' },
              { icon: Calendar, label: 'Appointments', value: '24/7' },
              { icon: FileText, label: 'Digital Records', value: '∞' },
              { icon: MessageCircle, label: 'Support', value: 'Online' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl bg-white dark:bg-primary-900/50 shadow-lg"
              >
                <item.icon className="w-8 h-8 mx-auto mb-3 text-red-500" />
                <div className="text-2xl font-bold text-primary-800 dark:text-white mb-1">
                  {item.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {item.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
