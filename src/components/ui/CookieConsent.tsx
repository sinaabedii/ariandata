'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X, Settings, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: true,
    marketing: false,
  });

  useEffect(() => {
    // Check if user has already consented
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Delay showing the banner for better UX
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    setPreferences({ necessary: true, analytics: true, marketing: true });
    saveConsent({ necessary: true, analytics: true, marketing: true });
  };

  const handleAcceptSelected = () => {
    saveConsent(preferences);
  };

  const handleRejectAll = () => {
    const minimal = { necessary: true, analytics: false, marketing: false };
    setPreferences(minimal);
    saveConsent(minimal);
  };

  const saveConsent = (prefs: typeof preferences) => {
    localStorage.setItem('cookie-consent', JSON.stringify(prefs));
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed bottom-4 left-4 right-4 md:left-6 md:right-6 lg:left-auto lg:right-6 lg:max-w-md z-50"
        >
          <div className="relative bg-white dark:bg-primary-900 rounded-2xl shadow-2xl shadow-black/10 dark:shadow-black/30 border border-gray-100 dark:border-primary-800 overflow-hidden">
            {/* Gradient accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-800 via-secondary-500 to-accent-cyan" />
            
            <div className="p-5 sm:p-6">
              {/* Header */}
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-800 to-secondary-600 flex items-center justify-center flex-shrink-0">
                  <Cookie className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-primary-950 dark:text-white mb-1">
                    We Value Your Privacy
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    We use cookies to enhance your experience and analyze our traffic.
                  </p>
                </div>
                <button
                  onClick={handleRejectAll}
                  className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-primary-800 transition-colors"
                >
                  <X className="w-5 h-5 text-gray-400" />
                </button>
              </div>

              {/* Settings Panel */}
              <AnimatePresence>
                {showSettings && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="space-y-3 py-4 border-t border-gray-100 dark:border-primary-800 mb-4">
                      {/* Necessary */}
                      <label className="flex items-center justify-between p-3 rounded-xl bg-gray-50 dark:bg-primary-800/50">
                        <div className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          <div>
                            <span className="text-sm font-medium text-primary-950 dark:text-white">Necessary</span>
                            <p className="text-xs text-gray-500 dark:text-gray-400">Required for the site to function</p>
                          </div>
                        </div>
                        <input type="checkbox" checked disabled className="w-4 h-4 accent-primary-800" />
                      </label>

                      {/* Analytics */}
                      <label className="flex items-center justify-between p-3 rounded-xl bg-gray-50 dark:bg-primary-800/50 cursor-pointer">
                        <div className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-blue-500" />
                          </div>
                          <div>
                            <span className="text-sm font-medium text-primary-950 dark:text-white">Analytics</span>
                            <p className="text-xs text-gray-500 dark:text-gray-400">Help us improve our website</p>
                          </div>
                        </div>
                        <input
                          type="checkbox"
                          checked={preferences.analytics}
                          onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                          className="w-4 h-4 accent-primary-800"
                        />
                      </label>

                      {/* Marketing */}
                      <label className="flex items-center justify-between p-3 rounded-xl bg-gray-50 dark:bg-primary-800/50 cursor-pointer">
                        <div className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-purple-500" />
                          </div>
                          <div>
                            <span className="text-sm font-medium text-primary-950 dark:text-white">Marketing</span>
                            <p className="text-xs text-gray-500 dark:text-gray-400">Personalized recommendations</p>
                          </div>
                        </div>
                        <input
                          type="checkbox"
                          checked={preferences.marketing}
                          onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                          className="w-4 h-4 accent-primary-800"
                        />
                      </label>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-2">
                <button
                  onClick={handleAcceptAll}
                  className="flex-1 px-4 py-2.5 rounded-xl bg-gradient-to-r from-primary-800 to-secondary-600 text-white text-sm font-semibold hover:shadow-lg hover:shadow-primary-800/25 transition-all"
                >
                  Accept All
                </button>
                <button
                  onClick={() => setShowSettings(!showSettings)}
                  className="flex-1 px-4 py-2.5 rounded-xl border border-gray-200 dark:border-primary-700 text-primary-950 dark:text-white text-sm font-semibold hover:bg-gray-50 dark:hover:bg-primary-800 transition-colors flex items-center justify-center gap-2"
                >
                  <Settings className="w-4 h-4" />
                  {showSettings ? 'Save Selection' : 'Customize'}
                </button>
              </div>

              {/* Privacy link */}
              <p className="mt-3 text-center text-xs text-gray-500 dark:text-gray-400">
                Read our{' '}
                <Link href="#" className="text-primary-800 dark:text-secondary-400 hover:underline">
                  Privacy Policy
                </Link>
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
