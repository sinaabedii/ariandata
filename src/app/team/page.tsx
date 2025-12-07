import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Linkedin, Twitter, Mail, ArrowRight, Quote } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Card from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Our Team | Arian Data',
  description: 'Meet the talented team behind Arian Data - passionate experts in AI, software development, and business innovation.',
};

const leadership = [
  {
    name: 'Ali Mohammadi',
    role: 'CEO & Co-Founder',
    bio: 'Former AI researcher at MIT with 15+ years in enterprise software. Passionate about democratizing AI technology.',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'Sara Ahmadi',
    role: 'CTO & Co-Founder',
    bio: 'PhD in Machine Learning, previously led AI teams at Google. Expert in scalable ML systems.',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'Reza Karimi',
    role: 'COO',
    bio: '20+ years of operations experience. Former VP at McKinsey. Focused on scaling global operations.',
    image: 'https://randomuser.me/api/portraits/men/75.jpg',
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'Maryam Hosseini',
    role: 'VP of Engineering',
    bio: 'Systems architect with experience at Amazon and Microsoft. Leads our engineering excellence initiatives.',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
    linkedin: '#',
    twitter: '#',
  },
];

const team = [
  {
    name: 'Amir Rezaei',
    role: 'Lead Data Scientist',
    image: 'https://randomuser.me/api/portraits/men/22.jpg',
  },
  {
    name: 'Niloofar Tehrani',
    role: 'Senior ML Engineer',
    image: 'https://randomuser.me/api/portraits/women/28.jpg',
  },
  {
    name: 'Hamed Azimi',
    role: 'Product Manager',
    image: 'https://randomuser.me/api/portraits/men/45.jpg',
  },
  {
    name: 'Elnaz Moradi',
    role: 'UX Designer',
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
  {
    name: 'Mehdi Fallah',
    role: 'Backend Developer',
    image: 'https://randomuser.me/api/portraits/men/55.jpg',
  },
  {
    name: 'Parisa Naderi',
    role: 'Frontend Developer',
    image: 'https://randomuser.me/api/portraits/women/33.jpg',
  },
  {
    name: 'Kaveh Bahrami',
    role: 'DevOps Engineer',
    image: 'https://randomuser.me/api/portraits/men/67.jpg',
  },
  {
    name: 'Leila Safavi',
    role: 'Data Analyst',
    image: 'https://randomuser.me/api/portraits/women/47.jpg',
  },
];

const stats = [
  { value: '50+', label: 'Team Members' },
  { value: '12+', label: 'Countries' },
  { value: '8', label: 'Departments' },
  { value: '6+', label: 'Years Together' },
];

export default function TeamPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-primary-950 dark:via-background-dark dark:to-primary-900" />
          <div className="absolute top-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-secondary-400/20 dark:bg-secondary-500/10 rounded-[40%_60%_60%_40%/60%_30%_70%_40%] blur-3xl animate-morph" />
          <div className="absolute bottom-0 left-1/4 w-48 sm:w-72 h-48 sm:h-72 bg-accent-cyan/20 dark:bg-accent-cyan/10 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] blur-3xl" />
        </div>

        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              <span className="text-primary-950 dark:text-white">The Minds Behind</span>
              <br />
              <span className="gradient-text">Arian Data</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Meet our talented team of engineers, scientists, and innovators who are passionate 
              about building the future of intelligent software.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative py-12 sm:py-16 bg-gradient-to-r from-primary-800 via-primary-900 to-primary-800 dark:from-primary-900 dark:via-primary-950 dark:to-primary-900 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-40 h-40 bg-secondary-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-accent-cyan/20 rounded-full blur-3xl" />
        </div>
        
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-white mb-1 sm:mb-2">{stat.value}</div>
                <div className="text-sm sm:text-base text-secondary-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 sm:py-20 lg:py-28 bg-white dark:bg-primary-950">
        <div className="container-custom">
          <SectionHeading
            label="Leadership"
            title="Meet Our Leadership Team"
            description="Visionary leaders with decades of combined experience in AI, software, and business transformation."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {leadership.map((member) => (
              <Card key={member.name} className="group overflow-hidden rounded-[1.5rem] sm:rounded-[2rem]">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Social Links */}
                  <div className="absolute bottom-4 left-4 right-4 flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                    <a href={member.linkedin} className="p-2 rounded-xl bg-white/20 backdrop-blur-sm hover:bg-white/40 transition-colors">
                      <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </a>
                    <a href={member.twitter} className="p-2 rounded-xl bg-white/20 backdrop-blur-sm hover:bg-white/40 transition-colors">
                      <Twitter className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </a>
                    <a href="#" className="p-2 rounded-xl bg-white/20 backdrop-blur-sm hover:bg-white/40 transition-colors">
                      <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </a>
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-primary-950 dark:text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-secondary-600 dark:text-secondary-400 mb-2 sm:mb-3">
                    {member.role}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
                    {member.bio}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-gray-50 dark:bg-primary-950/50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <Quote className="w-12 h-12 text-primary-800/30 dark:text-secondary-500/30 mx-auto mb-6" />
            <blockquote className="text-2xl sm:text-3xl font-medium text-primary-950 dark:text-white mb-8 leading-relaxed">
              "Our strength lies in our diversity of thought and unity of purpose. 
              Every team member brings unique perspectives that make our solutions truly innovative."
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="relative w-14 h-14 rounded-full overflow-hidden">
                <Image
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Ali Mohammadi"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-left">
                <div className="font-bold text-primary-950 dark:text-white">Ali Mohammadi</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">CEO & Co-Founder</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="section-padding bg-white dark:bg-primary-950">
        <div className="container-custom">
          <SectionHeading
            label="Our Team"
            title="The People Who Make It Happen"
            description="A diverse group of talented individuals working together to deliver exceptional solutions."
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.name} className="text-center group">
                <div className="relative w-32 h-32 mx-auto rounded-2xl overflow-hidden mb-4 ring-4 ring-transparent group-hover:ring-primary-800/20 dark:group-hover:ring-secondary-500/20 transition-all duration-300">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h4 className="font-bold text-primary-950 dark:text-white">{member.name}</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-24 bg-gradient-to-br from-primary-800 via-primary-900 to-primary-950 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-cyan/20 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Join Our Growing Team
            </h2>
            <p className="text-lg text-gray-300 mb-10">
              We're always looking for talented individuals who share our passion for innovation. 
              Explore exciting career opportunities at Arian Data.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-primary-800 font-semibold hover:bg-gray-100 hover:scale-105 transition-all duration-300"
              >
                View Open Positions
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-white/30 text-white font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Learn About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
