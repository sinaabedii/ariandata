'use client';

import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';

const faqs = [
  {
    question: 'What industries do you serve?',
    answer: 'We serve a wide range of industries including healthcare, finance, retail, manufacturing, and technology. Our AI solutions are adaptable and can be customized to meet the specific needs of any industry.',
  },
  {
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary based on complexity and scope. A standard implementation typically takes 8-12 weeks, while more complex enterprise solutions may require 3-6 months. We provide detailed timelines during our initial consultation.',
  },
  {
    question: 'Do you offer ongoing support?',
    answer: 'Yes, we provide 24/7 support for all our clients. Our support packages include technical assistance, regular updates, performance monitoring, and dedicated account management for enterprise clients.',
  },
  {
    question: 'What makes your AI solutions different?',
    answer: 'Our solutions are built with a focus on practical business outcomes, not just technology. We combine cutting-edge AI with deep industry expertise to deliver solutions that are accurate, scalable, and designed for real-world use.',
  },
  {
    question: 'Can you integrate with our existing systems?',
    answer: 'Absolutely. Our solutions are designed with integration in mind. We work with all major enterprise systems and can build custom connectors for legacy applications. Our team ensures seamless data flow between systems.',
  },
  {
    question: 'What is your pricing model?',
    answer: 'We offer flexible pricing models including project-based, subscription, and usage-based options. During our consultation, we\'ll recommend the model that best fits your needs and budget.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-gray-50 dark:bg-primary-950/50">
      <div className="container-custom">
        <SectionHeading
          label="FAQ"
          title="Frequently Asked Questions"
          description="Find answers to common questions about our services and solutions."
        />

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className={`w-full flex items-center justify-between p-5 sm:p-6 rounded-2xl text-left transition-all duration-300 ${
                  openIndex === index
                    ? 'bg-gradient-to-r from-primary-800 to-secondary-600 text-white shadow-lg shadow-primary-800/25'
                    : 'bg-white dark:bg-primary-900 hover:bg-gray-50 dark:hover:bg-primary-800'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                    openIndex === index
                      ? 'bg-white/20'
                      : 'bg-primary-800/10 dark:bg-secondary-500/10'
                  }`}>
                    <HelpCircle className={`w-5 h-5 ${
                      openIndex === index
                        ? 'text-white'
                        : 'text-primary-800 dark:text-secondary-400'
                    }`} />
                  </div>
                  <span className={`font-semibold text-sm sm:text-base ${
                    openIndex === index
                      ? 'text-white'
                      : 'text-primary-950 dark:text-white'
                  }`}>
                    {faq.question}
                  </span>
                </div>
                <ChevronDown className={`w-5 h-5 shrink-0 transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180 text-white' : 'text-gray-400'
                }`} />
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-5 sm:p-6 bg-white dark:bg-primary-900 rounded-b-2xl -mt-2 pt-6 border-t-0">
                      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
