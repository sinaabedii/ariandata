'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Moon, Sun, ChevronRight, Sparkles } from 'lucide-react';
import { useTheme } from 'next-themes';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Home', href: '/', icon: '🏠' },
  { name: 'Products', href: '/products', icon: '📦' },
  { name: 'Blog', href: '/blog', icon: '📰' },
  { name: 'About Us', href: '/about', icon: '💡' },
  { name: 'Team', href: '/team', icon: '👥' },
  { name: 'Contact', href: '/contact', icon: '📧' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled
            ? 'bg-white/90 dark:bg-primary-950/90 backdrop-blur-xl shadow-lg shadow-primary-800/5'
            : 'bg-transparent'
        )}
      >
        <nav className="container-custom">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 sm:gap-3 group z-10">
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 overflow-hidden">
                <Image
                  src="/images/logo/logo-arian-dadeh-hooshmand-caspian.png"
                  alt="Arian Data"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-bold text-primary-800 dark:text-white group-hover:text-secondary-600 dark:group-hover:text-secondary-400 transition-colors">
                  Arian Data
                </span>
                <span className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 hidden sm:block">
                  Smart Solutions
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'relative text-sm font-medium transition-colors py-2',
                    pathname === item.href
                      ? 'text-primary-800 dark:text-secondary-400'
                      : 'text-gray-600 dark:text-gray-300 hover:text-primary-800 dark:hover:text-secondary-400',
                    'after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-gradient-to-r after:from-primary-800 after:to-secondary-500 after:transition-all after:duration-300',
                    pathname === item.href ? 'after:w-full' : 'after:w-0 hover:after:w-full'
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2 sm:gap-4">
              {/* Theme Toggle */}
              {mounted && (
                <button
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="p-2 rounded-full bg-gray-100 dark:bg-primary-900 hover:bg-gray-200 dark:hover:bg-primary-800 transition-colors"
                  aria-label="Toggle theme"
                >
                  {theme === 'dark' ? (
                    <Sun className="w-5 h-5 text-yellow-500" />
                  ) : (
                    <Moon className="w-5 h-5 text-primary-800" />
                  )}
                </button>
              )}

              {/* CTA Button */}
              <Link
                href="/contact"
                className="hidden md:inline-flex btn-primary text-sm"
              >
                Get Started
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 rounded-xl bg-gray-100 dark:bg-primary-900 hover:bg-gray-200 dark:hover:bg-primary-800 transition-colors"
                aria-label="Toggle menu"
              >
                <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 lg:hidden"
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white dark:bg-primary-950 z-50 lg:hidden shadow-2xl"
            >
              {/* Sidebar Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-100 dark:border-primary-800">
                <div className="flex items-center gap-2">
                  <div className="relative w-10 h-10">
                    <Image
                      src="/images/logo/logo-arian-dadeh-hooshmand-caspian.png"
                      alt="Arian Data"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="font-bold text-primary-800 dark:text-white">
                    Arian Data
                  </span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-xl bg-gray-100 dark:bg-primary-900 hover:bg-gray-200 dark:hover:bg-primary-800 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="p-4 space-y-2 overflow-y-auto h-[calc(100vh-180px)]">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        'flex items-center justify-between p-4 rounded-2xl text-base font-medium transition-all active:scale-[0.98]',
                        pathname === item.href
                          ? 'bg-gradient-to-r from-primary-800/10 to-secondary-500/10 dark:from-primary-800/20 dark:to-secondary-500/20 text-primary-800 dark:text-secondary-400'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-primary-900'
                      )}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{item.icon}</span>
                        {item.name}
                      </div>
                      <ChevronRight className={cn(
                        'w-5 h-5 transition-transform',
                        pathname === item.href && 'text-secondary-500'
                      )} />
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Sidebar Footer */}
              <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-100 dark:border-primary-800 bg-gray-50 dark:bg-primary-900/50">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-gradient-to-r from-primary-800 to-secondary-600 text-white font-semibold shadow-lg shadow-primary-800/25 active:scale-[0.98] transition-transform"
                >
                  <Sparkles className="w-5 h-5" />
                  Get Started
                </Link>
                
                {/* Theme Toggle in Footer */}
                {mounted && (
                  <button
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className="flex items-center justify-center gap-2 w-full mt-3 py-3 rounded-xl bg-gray-100 dark:bg-primary-800 text-gray-700 dark:text-gray-300 font-medium"
                  >
                    {theme === 'dark' ? (
                      <>
                        <Sun className="w-5 h-5 text-yellow-500" />
                        Switch to Light Mode
                      </>
                    ) : (
                      <>
                        <Moon className="w-5 h-5 text-primary-800" />
                        Switch to Dark Mode
                      </>
                    )}
                  </button>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
