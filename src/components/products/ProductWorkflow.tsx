import { Search, Lightbulb, Code2, Rocket, ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';

const steps = [
  {
    icon: Search,
    number: '01',
    title: 'Discovery',
    description: 'We analyze your needs, challenges, and goals to identify the perfect solution for your business.',
  },
  {
    icon: Lightbulb,
    number: '02',
    title: 'Strategy',
    description: 'Our experts design a tailored implementation plan aligned with your objectives and timeline.',
  },
  {
    icon: Code2,
    number: '03',
    title: 'Implementation',
    description: 'We deploy and configure your solution with minimal disruption to your operations.',
  },
  {
    icon: Rocket,
    number: '04',
    title: 'Launch & Scale',
    description: 'Go live with confidence and scale effortlessly as your business grows.',
  },
];

export default function ProductWorkflow() {
  return (
    <section className="section-padding bg-white dark:bg-primary-950">
      <div className="container-custom">
        <SectionHeading
          label="How It Works"
          title="From Vision to Reality"
          description="Our streamlined implementation process ensures you get maximum value from our products in the shortest time possible."
        />

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-800 via-secondary-500 to-accent-cyan transform -translate-y-1/2 z-0" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {/* Card */}
                <div className="relative z-10 bg-white dark:bg-primary-900 rounded-2xl p-8 border border-gray-100 dark:border-primary-800 shadow-lg shadow-gray-100/50 dark:shadow-none">
                  {/* Number Badge */}
                  <div className="absolute -top-4 left-8 px-4 py-1 rounded-full bg-gradient-to-r from-primary-800 to-secondary-600 text-white text-sm font-bold">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-gray-100 dark:bg-primary-800 flex items-center justify-center mb-6 mt-2">
                    <step.icon className="w-7 h-7 text-primary-800 dark:text-secondary-400" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-primary-950 dark:text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow for mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-4">
                    <ArrowRight className="w-6 h-6 text-gray-300 dark:text-gray-600 rotate-90" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
