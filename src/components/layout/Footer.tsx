'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Github,
  Instagram,
  Send,
  CheckCircle
} from 'lucide-react';

const footerLinks = {
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Careers', href: '#' },
    { name: 'News', href: '#' },
  ],
  products: [
    { name: 'AI Analytics', href: '/products#analytics' },
    { name: 'Smart Automation', href: '/products#automation' },
    { name: 'Data Platform', href: '/products#platform' },
    { name: 'Custom Solutions', href: '/products#custom' },
  ],
  resources: [
    { name: 'Blog', href: '/blog' },
    { name: 'Documentation', href: '#' },
    { name: 'API Reference', href: '#' },
    { name: 'Case Studies', href: '#' },
  ],
};

const socialLinks = [
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'GitHub', icon: Github, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-primary-950 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary-500/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent-cyan/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container-custom relative z-10">
        {/* Newsletter Section */}
        <div className="py-10 sm:py-12 border-b border-white/10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">
            <div className="text-center lg:text-left">
              <h3 className="text-xl sm:text-2xl font-bold mb-2">Stay Updated</h3>
              <p className="text-sm sm:text-base text-gray-400">
                Subscribe for the latest AI insights and updates.
              </p>
            </div>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row w-full lg:w-auto gap-3">
              <div className="relative flex-1 lg:w-80">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-5 py-3 sm:py-3.5 rounded-2xl sm:rounded-full bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-secondary-500 transition-colors"
                />
              </div>
              <button
                type="submit"
                disabled={subscribed}
                className="px-6 py-3 sm:py-3.5 rounded-2xl sm:rounded-full bg-gradient-to-r from-secondary-500 to-accent-cyan text-white font-semibold hover:shadow-lg hover:shadow-secondary-500/25 transition-all flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {subscribed ? (
                  <>
                    <CheckCircle className="w-4 h-4" />
                    Subscribed!
                  </>
                ) : (
                  <>
                    Subscribe
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="relative w-10 h-10">
                <Image
                  src="/images/logo/logo-arian-dadeh-hooshmand-caspian.png"
                  alt="Arian Data"
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
              <span className="text-xl font-bold">Arian Data</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-sm">
              Pioneering the future of software and artificial intelligence. 
              We transform complex challenges into intelligent solutions.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 transition-colors group"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-secondary-400 transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">
              Products
            </h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">
              Resources
            </h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="py-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-sm text-gray-400">
            <a href="mailto:info@ariandata.com" className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail className="w-4 h-4" />
              info@ariandata.com
            </a>
            <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone className="w-4 h-4" />
              +1 (234) 567-890
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Tehran, Iran
            </span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Arian Data. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
