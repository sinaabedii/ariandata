'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';

const technologies = [
  { name: 'Python', category: 'AI/ML', color: 'from-yellow-400 to-yellow-600' },
  { name: 'TensorFlow', category: 'AI/ML', color: 'from-orange-400 to-orange-600' },
  { name: 'PyTorch', category: 'AI/ML', color: 'from-red-400 to-red-600' },
  { name: 'React', category: 'Frontend', color: 'from-cyan-400 to-cyan-600' },
  { name: 'Next.js', category: 'Frontend', color: 'from-gray-600 to-gray-800' },
  { name: 'TypeScript', category: 'Language', color: 'from-blue-400 to-blue-600' },
  { name: 'Node.js', category: 'Backend', color: 'from-green-400 to-green-600' },
  { name: 'Django', category: 'Backend', color: 'from-emerald-400 to-emerald-600' },
  { name: 'PostgreSQL', category: 'Database', color: 'from-indigo-400 to-indigo-600' },
  { name: 'MongoDB', category: 'Database', color: 'from-green-500 to-green-700' },
  { name: 'Docker', category: 'DevOps', color: 'from-blue-500 to-blue-700' },
  { name: 'Kubernetes', category: 'DevOps', color: 'from-blue-400 to-purple-600' },
  { name: 'AWS', category: 'Cloud', color: 'from-orange-400 to-yellow-500' },
  { name: 'Azure', category: 'Cloud', color: 'from-blue-400 to-cyan-500' },
  { name: 'OpenAI', category: 'AI', color: 'from-teal-400 to-teal-600' },
  { name: 'LangChain', category: 'AI', color: 'from-purple-400 to-purple-600' },
];

export default function Technologies() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-white dark:bg-primary-950 overflow-hidden">
      <div className="container-custom">
        <SectionHeading
          label="Tech Stack"
          title="Technologies We Master"
          description="We leverage cutting-edge technologies to build scalable and innovative solutions."
        />

        {/* Tech grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4 sm:gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="group"
            >
              <div className="relative p-4 sm:p-6 rounded-2xl bg-gray-50 dark:bg-primary-900 border border-gray-100 dark:border-primary-800 hover:border-transparent hover:shadow-xl hover:shadow-primary-800/10 dark:hover:shadow-secondary-500/10 transition-all duration-300 text-center">
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                {/* Icon placeholder */}
                <div className={`w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br ${tech.color} flex items-center justify-center text-white font-bold text-sm sm:text-base`}>
                  {tech.name.slice(0, 2)}
                </div>
                
                {/* Name */}
                <div className="text-xs sm:text-sm font-semibold text-primary-950 dark:text-white truncate">
                  {tech.name}
                </div>
                
                {/* Category */}
                <div className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 mt-1">
                  {tech.category}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
