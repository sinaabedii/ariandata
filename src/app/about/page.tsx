import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Target, Eye, Heart, ArrowRight, Award, Users, Globe, Zap } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Card from '@/components/ui/Card';
import FAQ from '@/components/about/FAQ';

export const metadata: Metadata = {
  title: 'About Us | Arian Data',
  description: 'Learn about Arian Data - our mission, vision, and the team behind our innovative AI and software solutions.',
};

const values = [
  {
    icon: Target,
    title: 'Innovation First',
    description: 'We constantly push boundaries, exploring new technologies and methodologies to deliver cutting-edge solutions.',
  },
  {
    icon: Heart,
    title: 'Client Success',
    description: 'Your success is our success. We go above and beyond to ensure our solutions drive real business value.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We believe in the power of teamwork, both internally and with our clients, to achieve extraordinary results.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We hold ourselves to the highest standards, delivering quality in everything we do.',
  },
];

const milestones = [
  { year: '2018', title: 'Founded', description: 'Arian Data was established with a vision to democratize AI.' },
  { year: '2019', title: 'First Product', description: 'Launched our flagship AI Analytics Platform.' },
  { year: '2020', title: 'Expansion', description: 'Expanded to 5 countries and 50+ enterprise clients.' },
  { year: '2021', title: 'Innovation Award', description: 'Recognized as Top AI Innovator in the region.' },
  { year: '2022', title: 'Series A', description: 'Secured significant funding to accelerate growth.' },
  { year: '2023', title: 'Global Reach', description: 'Now serving clients across 12+ countries worldwide.' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-primary-950 dark:via-background-dark dark:to-primary-900" />
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-secondary-400/20 dark:bg-secondary-500/10 rounded-full blur-3xl" />
        </div>

        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-primary-950 dark:text-white">Pioneering the Future of</span>
              <br />
              <span className="gradient-text">Intelligent Software</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              We are Arian Data - a passionate team of engineers, data scientists, and innovators 
              dedicated to transforming businesses through the power of artificial intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-white dark:bg-primary-950">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary-800/10 dark:bg-secondary-500/10 text-primary-800 dark:text-secondary-400 mb-4">
                Our Story
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary-950 dark:text-white mb-6">
                Born from a Vision to Democratize AI
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-400">
                <p>
                  Founded in 2018, Arian Data emerged from a simple yet powerful idea: that every business, 
                  regardless of size, should have access to world-class AI technology.
                </p>
                <p>
                  Our founders, a group of AI researchers and enterprise software veterans, recognized that 
                  while AI was revolutionizing industries, its benefits were largely limited to tech giants 
                  with vast resources.
                </p>
                <p>
                  Today, we've grown into a leading AI solutions provider, serving clients across 12+ countries 
                  and multiple industries. Our products have processed billions of data points, automated 
                  millions of workflows, and helped our clients achieve remarkable business outcomes.
                </p>
              </div>
            </div>
            <div className="relative">
              <Card className="aspect-[4/3] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800"
                  alt="Arian Data Team"
                  fill
                  className="object-cover"
                />
              </Card>
              <div className="absolute -bottom-6 -left-6 p-6 rounded-2xl bg-white dark:bg-primary-900 shadow-xl">
                <div className="text-3xl font-bold text-primary-800 dark:text-secondary-400">6+</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Years of Innovation</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-gray-50 dark:bg-primary-950/50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-10">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-800 to-secondary-600 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-primary-950 dark:text-white mb-4">Our Mission</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                To empower businesses worldwide with accessible, powerful, and ethical AI solutions 
                that drive innovation, efficiency, and sustainable growth. We believe technology should 
                amplify human potential, not replace it.
              </p>
            </Card>
            <Card className="p-10">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-secondary-500 to-accent-cyan flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-primary-950 dark:text-white mb-4">Our Vision</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                To become the global standard for enterprise AI solutions, known for our commitment 
                to innovation, customer success, and responsible AI development. We envision a world 
                where intelligent technology is a force for good.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-white dark:bg-primary-950">
        <div className="container-custom">
          <SectionHeading
            label="Our Values"
            title="What Drives Us Every Day"
            description="These core values guide our decisions, shape our culture, and define how we work with each other and our clients."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary-800/10 dark:bg-secondary-500/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-primary-800 dark:text-secondary-400" />
                </div>
                <h3 className="text-xl font-bold text-primary-950 dark:text-white mb-3">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-gray-50 dark:bg-primary-950/50">
        <div className="container-custom">
          <SectionHeading
            label="Our Journey"
            title="Milestones That Define Us"
            description="From a small startup to a global AI solutions provider - here's our journey so far."
          />

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-800 via-secondary-500 to-accent-cyan transform -translate-x-1/2 hidden md:block" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <Card className="p-6 inline-block">
                      <div className="text-sm font-bold text-secondary-600 dark:text-secondary-400 mb-1">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-bold text-primary-950 dark:text-white mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">{milestone.description}</p>
                    </Card>
                  </div>

                  {/* Dot */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary-800 border-4 border-white dark:border-primary-950" />

                  {/* Empty space for alignment */}
                  <div className="hidden md:block flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-primary-800 via-primary-900 to-primary-950 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-cyan/20 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Join Our Story?
            </h2>
            <p className="text-lg text-gray-300 mb-10">
              Whether you're looking for innovative solutions or want to be part of our team, 
              we'd love to hear from you.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-primary-800 font-semibold hover:bg-gray-100 hover:scale-105 transition-all duration-300"
              >
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/team"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-white/30 text-white font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Meet Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
