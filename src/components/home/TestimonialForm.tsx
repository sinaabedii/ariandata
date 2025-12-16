'use client';

import { useState } from 'react';
import { Star, Send, User, Briefcase, MessageSquare, X, PenLine } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function TestimonialForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    message: '',
  });
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    setTimeout(() => {
      setFormData({ name: '', role: '', message: '' });
      setRating(0);
      setIsSubmitted(false);
      setIsOpen(false);
    }, 2500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const closeModal = () => {
    if (!isSubmitting) {
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Trigger Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary-800 to-secondary-700 text-white font-semibold shadow-lg shadow-primary-800/25 hover:shadow-xl hover:shadow-primary-800/30 transition-all duration-300"
      >
        <PenLine className="w-5 h-5" />
        <span>Share Your Experience</span>
      </motion.button>

      {/* Modal Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          >
            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-[calc(100%-2rem)] sm:w-full max-w-[320px] sm:max-w-md max-h-[85vh] overflow-y-auto bg-gradient-to-br from-gray-50 to-white dark:from-primary-900 dark:to-primary-950 rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-100/50 dark:border-primary-800/50"
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                disabled={isSubmitting}
                className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 dark:bg-primary-800 hover:bg-gray-200 dark:hover:bg-primary-700 transition-colors disabled:opacity-50"
              >
                <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              </button>

              <div className="p-4 sm:p-8">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-primary-950 dark:text-white mb-2">
                      Thank You!
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Your feedback has been submitted successfully.
                    </p>
                  </motion.div>
                ) : (
                  <>
                    {/* Header */}
                    <div className="text-center mb-4 sm:mb-6">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3 rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary-800/10 to-secondary-500/10 dark:from-primary-700/20 dark:to-secondary-500/20 flex items-center justify-center">
                        <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 text-primary-800 dark:text-secondary-400" />
                      </div>
                      <h3 className="text-lg sm:text-2xl font-bold text-primary-950 dark:text-white">
                        Share Your Feedback
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1">
                        We'd love to hear about your experience
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                      {/* Rating */}
                      <div className="flex flex-col items-center gap-1 sm:gap-2">
                        <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Your Rating</span>
                        <div className="flex gap-0.5 sm:gap-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <button
                              key={star}
                              type="button"
                              onClick={() => setRating(star)}
                              onMouseEnter={() => setHoveredRating(star)}
                              onMouseLeave={() => setHoveredRating(0)}
                              className="p-0.5 sm:p-1 transition-transform hover:scale-110"
                            >
                              <Star
                                className={`w-6 h-6 sm:w-8 sm:h-8 transition-colors ${
                                  star <= (hoveredRating || rating)
                                    ? 'fill-yellow-400 text-yellow-400'
                                    : 'text-gray-300 dark:text-gray-600'
                                }`}
                              />
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Name & Role */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            required
                            className="w-full pl-9 sm:pl-10 pr-3 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-white dark:bg-primary-950 border border-gray-200 dark:border-primary-800 focus:border-primary-800 dark:focus:border-secondary-500 focus:ring-2 focus:ring-primary-800/20 dark:focus:ring-secondary-500/20 outline-none transition-all text-gray-700 dark:text-gray-200 placeholder:text-gray-400 text-xs sm:text-base"
                          />
                        </div>
                        <div className="relative">
                          <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                          <input
                            type="text"
                            name="role"
                            value={formData.role}
                            onChange={handleChange}
                            placeholder="Your Role"
                            className="w-full pl-9 sm:pl-10 pr-3 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-white dark:bg-primary-950 border border-gray-200 dark:border-primary-800 focus:border-primary-800 dark:focus:border-secondary-500 focus:ring-2 focus:ring-primary-800/20 dark:focus:ring-secondary-500/20 outline-none transition-all text-gray-700 dark:text-gray-200 placeholder:text-gray-400 text-xs sm:text-base"
                          />
                        </div>
                      </div>

                      {/* Message */}
                      <div className="relative">
                        <MessageSquare className="absolute left-3 top-2.5 sm:top-3 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us about your experience..."
                          required
                          rows={3}
                          className="w-full pl-9 sm:pl-10 pr-3 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-white dark:bg-primary-950 border border-gray-200 dark:border-primary-800 focus:border-primary-800 dark:focus:border-secondary-500 focus:ring-2 focus:ring-primary-800/20 dark:focus:ring-secondary-500/20 outline-none transition-all text-gray-700 dark:text-gray-200 placeholder:text-gray-400 resize-none text-xs sm:text-base"
                        />
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        disabled={isSubmitting || rating === 0}
                        className="w-full py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg sm:rounded-xl bg-gradient-to-r from-primary-800 to-secondary-700 text-white font-semibold text-sm sm:text-base shadow-lg shadow-primary-800/25 hover:shadow-xl hover:shadow-primary-800/30 transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? (
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : (
                          <>
                            <span>Submit Feedback</span>
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
