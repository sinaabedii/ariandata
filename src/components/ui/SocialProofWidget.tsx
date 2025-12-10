'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Star, CheckCircle, X } from 'lucide-react';
import Image from 'next/image';

const notifications = [
  {
    id: 1,
    type: 'signup',
    name: 'Sarah M.',
    action: 'just signed up',
    location: 'London, UK',
    time: '2 minutes ago',
    avatar: 'https://randomuser.me/api/portraits/women/32.jpg',
  },
  {
    id: 2,
    type: 'purchase',
    name: 'Tech Corp',
    action: 'purchased Enterprise plan',
    location: 'New York, USA',
    time: '5 minutes ago',
    avatar: null,
  },
  {
    id: 3,
    type: 'review',
    name: 'James L.',
    action: 'left a 5-star review',
    location: 'Toronto, Canada',
    time: '8 minutes ago',
    avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
  },
  {
    id: 4,
    type: 'demo',
    name: 'DataFlow Inc.',
    action: 'booked a demo',
    location: 'Berlin, Germany',
    time: '12 minutes ago',
    avatar: null,
  },
];

export default function SocialProofWidget() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Don't show if already dismissed in this session
    if (dismissed) return;

    // Initial delay before showing
    const initialDelay = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    return () => clearTimeout(initialDelay);
  }, [dismissed]);

  useEffect(() => {
    if (!isVisible || dismissed) return;

    // Auto-hide after 5 seconds
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
    }, 5000);

    // Show next notification after 8 seconds
    const nextTimer = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % notifications.length);
      setIsVisible(true);
    }, 15000);

    return () => {
      clearTimeout(hideTimer);
      clearTimeout(nextTimer);
    };
  }, [isVisible, currentIndex, dismissed]);

  const handleDismiss = () => {
    setIsVisible(false);
    setDismissed(true);
  };

  const currentNotification = notifications[currentIndex];

  const getIcon = () => {
    switch (currentNotification.type) {
      case 'signup':
        return <Users className="w-4 h-4 text-blue-500" />;
      case 'purchase':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'review':
        return <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />;
      case 'demo':
        return <CheckCircle className="w-4 h-4 text-purple-500" />;
      default:
        return <Users className="w-4 h-4 text-blue-500" />;
    }
  };

  if (dismissed) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed bottom-20 left-4 z-40 max-w-xs hidden sm:block"
        >
          <div className="relative bg-white dark:bg-primary-900 rounded-2xl shadow-2xl shadow-black/10 dark:shadow-black/30 border border-gray-100 dark:border-primary-800 p-4">
            {/* Close button */}
            <button
              onClick={handleDismiss}
              className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gray-100 dark:bg-primary-800 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-primary-700 transition-colors"
            >
              <X className="w-3 h-3 text-gray-500" />
            </button>

            <div className="flex items-start gap-3">
              {/* Avatar or icon */}
              <div className="relative flex-shrink-0">
                {currentNotification.avatar ? (
                  <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-white dark:ring-primary-800">
                    <Image
                      src={currentNotification.avatar}
                      alt={currentNotification.name}
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-800 to-secondary-600 flex items-center justify-center text-white font-bold text-sm">
                    {currentNotification.name.slice(0, 2)}
                  </div>
                )}
                {/* Activity indicator */}
                <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-white dark:bg-primary-900 flex items-center justify-center">
                  {getIcon()}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <p className="text-sm">
                  <span className="font-semibold text-primary-950 dark:text-white">
                    {currentNotification.name}
                  </span>{' '}
                  <span className="text-gray-600 dark:text-gray-400">
                    {currentNotification.action}
                  </span>
                </p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs text-gray-500 dark:text-gray-500">
                    {currentNotification.location}
                  </span>
                  <span className="text-xs text-gray-400">•</span>
                  <span className="text-xs text-gray-500 dark:text-gray-500">
                    {currentNotification.time}
                  </span>
                </div>
              </div>
            </div>

            {/* Verified badge */}
            <div className="flex items-center gap-1 mt-2 pt-2 border-t border-gray-100 dark:border-primary-800">
              <CheckCircle className="w-3 h-3 text-green-500" />
              <span className="text-[10px] text-gray-500 dark:text-gray-500">
                Verified by Arian Data
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
