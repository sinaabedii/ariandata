'use client';

import { motion } from 'framer-motion';
import { RoadmapTimeline, RoadmapStep } from '@/components/products/roadmap';
import { Heart, Shield, Calendar, FileText, MessageCircle, Sparkles, Users, FlaskConical, Headphones, BookOpen } from 'lucide-react';

const healthicSteps: RoadmapStep[] = [
  {
    id: 1,
    title: 'OTP Authentication',
    description: 'Secure authentication system using one-time passwords for quick and safe user login to the health platform. This system ensures maximum security while providing a seamless user experience.',
    details: [
      'SMS-based OTP delivery with 99.9% delivery rate',
      'Mobile number verification with country code support',
      'Passwordless login experience for better UX',
      'Advanced AES-256 encryption security',
      'Simple and fast user experience under 30 seconds'
    ],
    icon: 'shield',
    image: 'https://images.unsplash.com/photo-1633265486064-086b219458ec?w=200&h=200&fit=crop',
    status: 'completed',
    duration: '3 weeks',
    team: '2 developers',
    priority: 'high',
    progress: 100,
    startDate: 'Jan 2024',
    endDate: 'Jan 2024',
    benefits: [
      'Eliminates password-related security risks',
      'Reduces login friction by 60%',
      'Increases user trust and platform credibility',
      'HIPAA compliant authentication'
    ],
    technologies: ['Twilio SMS', 'Redis Cache', 'JWT Tokens', 'Node.js', 'PostgreSQL'],
    deliverables: [
      'OTP generation and validation API',
      'SMS gateway integration',
      'Rate limiting system',
      'Session management module'
    ],
    milestones: [
      { title: 'SMS Gateway Setup', completed: true },
      { title: 'OTP Logic Implementation', completed: true },
      { title: 'Security Testing', completed: true },
      { title: 'Production Deployment', completed: true }
    ],
    metrics: [
      { label: 'Delivery Rate', value: '99.9%', trend: 'up' },
      { label: 'Avg Login Time', value: '12s', trend: 'down' },
      { label: 'Security Score', value: 'A+', trend: 'stable' }
    ],
    tags: ['security', 'authentication', 'SMS', 'OTP'],
    notes: 'Successfully launched with zero security incidents. User feedback has been overwhelmingly positive.'
  },
  {
    id: 2,
    title: 'Dual User Roles',
    description: 'Comprehensive role management system for patients and doctors with different access levels, dedicated features, and personalized dashboards tailored to each user type.',
    details: [
      'Dedicated patient dashboard with health overview',
      'Doctor management panel with appointment calendar',
      'Tiered access permissions with granular controls',
      'Professional doctor profiles with credentials',
      'Complete patient history with timeline view'
    ],
    icon: 'users',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=200&h=200&fit=crop',
    status: 'completed',
    duration: '4 weeks',
    team: '3 developers',
    priority: 'high',
    progress: 100,
    startDate: 'Feb 2024',
    endDate: 'Feb 2024',
    benefits: [
      'Personalized experience for each user type',
      'Improved workflow efficiency for doctors',
      'Better patient engagement and retention',
      'Scalable architecture for future roles'
    ],
    technologies: ['RBAC', 'Next.js', 'Prisma ORM', 'TypeScript', 'Tailwind CSS'],
    deliverables: [
      'Patient dashboard UI/UX',
      'Doctor portal with scheduling',
      'Role-based access control system',
      'Profile management modules'
    ],
    dependencies: ['OTP Authentication system must be completed'],
    milestones: [
      { title: 'Role Architecture Design', completed: true },
      { title: 'Patient Dashboard', completed: true },
      { title: 'Doctor Portal', completed: true },
      { title: 'Permission System', completed: true }
    ],
    metrics: [
      { label: 'Active Doctors', value: '150+', trend: 'up' },
      { label: 'Patient Signups', value: '2.5K', trend: 'up' },
      { label: 'Satisfaction', value: '94%', trend: 'up' }
    ],
    tags: ['roles', 'dashboard', 'permissions', 'UX']
  },
  {
    id: 3,
    title: 'Online Appointment',
    description: 'Smart online doctor appointment booking system with specialty selection, real-time availability, and automated scheduling features.',
    details: [
      'Search doctors by specialty and location',
      'View real-time available time slots',
      'Instant online booking confirmation',
      'Automatic SMS/Email appointment reminders',
      'Easy cancellation and rescheduling options'
    ],
    icon: 'calendar',
    image: 'https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=200&h=200&fit=crop',
    status: 'current',
    duration: '5 weeks',
    team: '4 developers',
    priority: 'high',
    progress: 75,
    startDate: 'Mar 2024',
    endDate: 'Apr 2024',
    benefits: [
      'Reduces no-show rates by 40%',
      'Saves administrative time for clinics',
      '24/7 booking availability',
      'Improved patient satisfaction'
    ],
    technologies: ['Calendar API', 'WebSocket', 'React Query', 'Cron Jobs', 'SendGrid'],
    deliverables: [
      'Doctor search and filter system',
      'Real-time availability calendar',
      'Booking confirmation flow',
      'Reminder notification system'
    ],
    dependencies: ['Dual User Roles must be implemented'],
    risks: [
      'Calendar sync conflicts with external systems',
      'High traffic during peak booking hours'
    ],
    milestones: [
      { title: 'Search & Filter UI', completed: true },
      { title: 'Calendar Integration', completed: true },
      { title: 'Booking Flow', completed: true },
      { title: 'Reminder System', completed: false }
    ],
    resources: [
      { type: 'doc', name: 'Booking API Documentation', link: '#' },
      { type: 'video', name: 'System Architecture Overview', link: '#' }
    ],
    metrics: [
      { label: 'Bookings/Day', value: '120+', trend: 'up' },
      { label: 'Avg Response', value: '0.8s', trend: 'down' },
      { label: 'Completion', value: '75%', trend: 'up' }
    ],
    tags: ['booking', 'calendar', 'scheduling', 'notifications']
  },
  {
    id: 4,
    title: 'Lab Reservation',
    description: 'Online laboratory booking system with digital result delivery directly to user profiles, enabling seamless healthcare coordination.',
    details: [
      'Comprehensive list of certified laboratories',
      'Online test appointment booking',
      'Secure digital result delivery',
      'One-click share results with doctors',
      'Complete test history archive'
    ],
    icon: 'flask',
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=200&h=200&fit=crop',
    status: 'upcoming',
    duration: '4 weeks',
    team: '3 developers',
    priority: 'medium',
    progress: 0,
    startDate: 'May 2024',
    endDate: 'Jun 2024',
    benefits: [
      'Eliminates paper-based result delivery',
      'Faster turnaround for test results',
      'Easy sharing with healthcare providers',
      'Centralized health data management'
    ],
    technologies: ['HL7 FHIR', 'PDF Generation', 'AWS S3', 'Encryption', 'QR Codes'],
    deliverables: [
      'Lab directory and search',
      'Test booking interface',
      'Result delivery system',
      'Sharing and export features'
    ],
    dependencies: ['Online Appointment system', 'Medical Records foundation'],
    tags: ['laboratory', 'tests', 'results', 'healthcare']
  },
  {
    id: 5,
    title: 'Medical Records',
    description: 'Complete storage and management of medical records including lab tests, imaging, prescriptions, and medical history with secure cloud storage.',
    details: [
      'Laboratory results archive with trends',
      'Radiology image storage (DICOM support)',
      'Prescription history with refill tracking',
      'Medical reports and summaries',
      'Permanent secure access to all records'
    ],
    icon: 'file-text',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=200&h=200&fit=crop',
    status: 'upcoming',
    duration: '6 weeks',
    team: '4 developers',
    priority: 'high',
    progress: 0,
    startDate: 'Jun 2024',
    endDate: 'Jul 2024',
    benefits: [
      'Single source of truth for health data',
      'Improved care coordination',
      'Patient empowerment through data access',
      'Reduced duplicate testing'
    ],
    technologies: ['DICOM Viewer', 'AWS S3', 'Encryption at Rest', 'GraphQL', 'ElasticSearch'],
    deliverables: [
      'Document upload and management',
      'DICOM image viewer',
      'Search and filter system',
      'Export and sharing features'
    ],
    tags: ['records', 'storage', 'DICOM', 'documents']
  },
  {
    id: 6,
    title: 'Support Tickets',
    description: 'Direct communication channel with support team for issue resolution, user inquiries, and feedback collection.',
    details: [
      'Online ticket submission with attachments',
      'Real-time ticket status tracking',
      'Fast response times (< 24 hours)',
      'Topic categorization and routing',
      'Complete communication history'
    ],
    icon: 'headphones',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=200&h=200&fit=crop',
    status: 'upcoming',
    duration: '3 weeks',
    team: '2 developers',
    priority: 'medium',
    progress: 0,
    startDate: 'Aug 2024',
    benefits: [
      'Improved customer satisfaction',
      'Organized issue tracking',
      'Data-driven support improvements',
      'Reduced response times'
    ],
    technologies: ['Zendesk API', 'WebSocket', 'Email Integration', 'Analytics'],
    tags: ['support', 'tickets', 'customer-service']
  },
  {
    id: 7,
    title: 'Health Articles',
    description: 'Access to specialized health and wellness articles written by medical professionals, with personalized recommendations.',
    details: [
      'Specialized medical articles by experts',
      'Daily health tips and wellness advice',
      'Latest health news updates',
      'Topic-based categorization',
      'Advanced search functionality'
    ],
    icon: 'book',
    image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=200&h=200&fit=crop',
    status: 'upcoming',
    duration: '3 weeks',
    team: '2 developers',
    priority: 'low',
    progress: 0,
    startDate: 'Sep 2024',
    benefits: [
      'Patient education and empowerment',
      'Increased platform engagement',
      'Trust building through expert content',
      'SEO benefits for platform visibility'
    ],
    technologies: ['CMS Integration', 'Markdown', 'Full-text Search', 'Recommendations AI'],
    tags: ['content', 'articles', 'education', 'wellness']
  },
  {
    id: 8,
    title: 'Live Chat Widget',
    description: 'Quick online communication with support and health consultants through real-time live chat with file sharing capabilities.',
    details: [
      'Real-time online support chat',
      'Quick health consultation requests',
      '24/7 availability with chatbot fallback',
      'Complete chat history storage',
      'File and image sharing support'
    ],
    icon: 'message',
    image: 'https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=200&h=200&fit=crop',
    status: 'upcoming',
    duration: '4 weeks',
    team: '3 developers',
    priority: 'medium',
    progress: 0,
    startDate: 'Oct 2024',
    benefits: [
      'Instant support for urgent queries',
      'Reduced support ticket volume',
      'Improved user experience',
      'Real-time problem resolution'
    ],
    technologies: ['WebSocket', 'Socket.io', 'Redis Pub/Sub', 'AI Chatbot', 'File Upload'],
    tags: ['chat', 'real-time', 'support', 'communication']
  }
];

const features = [
  { icon: Shield, label: 'High Security', value: '100%', color: 'from-red-500 to-rose-500' },
  { icon: Calendar, label: 'Appointments', value: '24/7', color: 'from-pink-500 to-red-500' },
  { icon: FileText, label: 'Digital Records', value: '∞', color: 'from-rose-500 to-pink-500' },
  { icon: MessageCircle, label: 'Live Support', value: 'Online', color: 'from-red-400 to-rose-500' },
];

export default function HealthicRoadmapPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-white to-pink-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-r from-rose-500/15 to-red-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-pink-500/10 to-rose-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
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
            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-500/10 to-pink-500/10 
                       border border-red-500/20 mb-6"
            >
              <Sparkles className="w-4 h-4 text-red-500" />
              <span className="text-sm font-medium text-red-600 dark:text-red-400">Healthcare Innovation</span>
            </motion.div>

            {/* Logo Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, type: 'spring' }}
              className="inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-3xl 
                       bg-gradient-to-br from-red-500 via-rose-500 to-pink-500 mb-6 
                       shadow-2xl shadow-red-500/30 relative"
            >
              <Heart className="w-10 h-10 md:w-12 md:h-12 text-white" />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/20 to-transparent" />
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl md:text-5xl lg:text-7xl font-black mb-4 md:mb-6"
            >
              <span className="bg-gradient-to-r from-red-600 via-rose-500 to-pink-600 bg-clip-text text-transparent">
                Healthic
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-700 dark:text-gray-200 mb-4"
            >
              Smart Healthcare Platform
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-sm md:text-base lg:text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed px-4"
            >
              Comprehensive health management with online appointments, medical records, 
              lab reservations, and direct communication with specialists.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-8 md:py-12">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
            {features.map((item, index) => (
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
                <div className="relative text-center p-4 md:p-6 rounded-2xl bg-white/80 dark:bg-gray-900/80 
                             backdrop-blur-sm shadow-xl border border-white/50 dark:border-gray-800">
                  <div className={`inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-xl 
                                bg-gradient-to-r ${item.color} mb-3 shadow-lg`}>
                    <item.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div className="text-2xl md:text-3xl font-black bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
                    {item.value}
                  </div>
                  <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400 font-medium">
                    {item.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="relative py-8 md:py-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white mb-3 md:mb-4">
              Development Roadmap
            </h2>
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 px-4">
              Click on each milestone to explore detailed features
            </p>
          </motion.div>

          <RoadmapTimeline 
            steps={healthicSteps} 
            productName="Healthic" 
            productColor="orange"
          />
        </div>
      </section>

      {/* Feature Icons Grid */}
      <section className="relative py-12 md:py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-3">
              Platform Capabilities
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
            {[
              { icon: Shield, label: 'Secure Auth', desc: 'OTP Based' },
              { icon: Users, label: 'Multi-Role', desc: 'Patient & Doctor' },
              { icon: Calendar, label: 'Booking', desc: 'Online 24/7' },
              { icon: FlaskConical, label: 'Lab Tests', desc: 'Digital Results' },
              { icon: FileText, label: 'Records', desc: 'Cloud Storage' },
              { icon: Headphones, label: 'Support', desc: 'Ticket System' },
              { icon: BookOpen, label: 'Articles', desc: 'Health Tips' },
              { icon: MessageCircle, label: 'Live Chat', desc: 'Instant Help' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="p-4 md:p-6 rounded-2xl bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm 
                         shadow-lg border border-red-100 dark:border-gray-800 text-center
                         hover:shadow-xl hover:border-red-200 dark:hover:border-red-900 transition-all"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-xl 
                              bg-gradient-to-r from-red-500 to-pink-500 mb-3 shadow-md">
                  <item.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-800 dark:text-white text-sm md:text-base">{item.label}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
