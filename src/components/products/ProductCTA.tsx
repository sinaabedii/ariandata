import Link from 'next/link';
import { ArrowRight, Calendar, MessageCircle } from 'lucide-react';

export default function ProductCTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-primary-800 via-primary-900 to-primary-950 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-cyan/20 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
            Schedule a personalized demo to see how our products can address your specific challenges and drive measurable results.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-primary-800 font-semibold shadow-2xl shadow-black/20 hover:bg-gray-100 hover:scale-105 transition-all duration-300"
            >
              <Calendar className="w-5 h-5" />
              Schedule Demo
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-white/30 text-white font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5" />
              Talk to Sales
            </Link>
          </div>

          {/* Trust badges */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <div className="flex flex-wrap items-center justify-center gap-8 text-gray-400 text-sm">
              <span>✓ No credit card required</span>
              <span>✓ Free 14-day trial</span>
              <span>✓ Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
