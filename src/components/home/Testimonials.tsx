'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO, TechVision Inc.',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    quote: 'Arian Data transformed our entire data infrastructure. Their AI solutions increased our operational efficiency by 40%.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'CTO, DataFlow Systems',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    quote: 'The team\'s expertise in machine learning is unparalleled. They delivered a custom solution that exceeded our expectations.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Director of Innovation, FutureCorp',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
    quote: 'Working with Arian Data was a game-changer for our analytics capabilities. Their platform is intuitive and powerful.',
    rating: 5,
  },
  {
    id: 4,
    name: 'David Park',
    role: 'VP Engineering, CloudScale',
    image: 'https://randomuser.me/api/portraits/men/75.jpg',
    quote: 'The automation solutions they built have saved us hundreds of hours monthly. Truly exceptional work.',
    rating: 5,
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-play testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="relative py-16 sm:py-20 lg:py-28 bg-white dark:bg-primary-950 overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-secondary-500/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-cyan/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

      <div className="container-custom relative z-10">
        <SectionHeading
          label="Testimonials"
          title="What Our Clients Say"
          description="Don't just take our word for it. Here's what industry leaders say about working with us."
        />

        <div className="relative max-w-4xl mx-auto">
          {/* Main testimonial card */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="relative bg-gradient-to-br from-gray-50 to-white dark:from-primary-900 dark:to-primary-950 rounded-[2rem] p-6 sm:p-8 md:p-12 shadow-xl border border-gray-100/50 dark:border-primary-800/50"
              >
                {/* Quote icon */}
                <div className="absolute top-4 right-4 sm:top-8 sm:right-8 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-primary-800/10 to-secondary-500/10 dark:from-primary-700/20 dark:to-secondary-500/20 flex items-center justify-center">
                  <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-primary-800 dark:text-secondary-400" />
                </div>

                {/* Content */}
                <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-center sm:items-start">
                  {/* Avatar with organic shape */}
                  <div className="shrink-0">
                    <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] overflow-hidden ring-4 ring-primary-800/10 dark:ring-secondary-500/20">
                      <Image
                        src={testimonials[activeIndex].image}
                        alt={testimonials[activeIndex].name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* Quote and info */}
                  <div className="flex-1 text-center sm:text-left">
                    {/* Stars */}
                    <div className="flex gap-1 mb-4 justify-center sm:justify-start">
                      {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    <blockquote className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-200 leading-relaxed mb-6">
                      "{testimonials[activeIndex].quote}"
                    </blockquote>

                    <div>
                      <div className="font-bold text-primary-950 dark:text-white">
                        {testimonials[activeIndex].name}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {testimonials[activeIndex].role}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-100 dark:bg-primary-800 rounded-b-[2rem] overflow-hidden">
                  <motion.div
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 6, ease: 'linear' }}
                    className="h-full bg-gradient-to-r from-primary-800 to-secondary-500"
                    key={activeIndex}
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-6 sm:mt-8">
            <button
              onClick={prevTestimonial}
              className="p-2.5 sm:p-3 rounded-2xl bg-gray-100 dark:bg-primary-900 hover:bg-primary-800 hover:text-white dark:hover:bg-secondary-500 transition-all duration-300 hover:scale-110"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? 'w-8 bg-gradient-to-r from-primary-800 to-secondary-500'
                      : 'w-2.5 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-2.5 sm:p-3 rounded-2xl bg-gray-100 dark:bg-primary-900 hover:bg-primary-800 hover:text-white dark:hover:bg-secondary-500 transition-all duration-300 hover:scale-110"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Thumbnail preview */}
          <div className="hidden md:flex justify-center gap-4 mt-8">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.id}
                onClick={() => setActiveIndex(index)}
                className={`relative w-12 h-12 rounded-xl overflow-hidden transition-all duration-300 ${
                  index === activeIndex
                    ? 'ring-2 ring-primary-800 dark:ring-secondary-400 scale-110'
                    : 'opacity-50 hover:opacity-100'
                }`}
              >
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
