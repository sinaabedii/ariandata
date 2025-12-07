'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, MessageCircle, Building2 } from 'lucide-react';
import Card from '@/components/ui/Card';
import Map from '@/components/ui/Map';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email Us',
    content: 'info@ariandata.com',
    subContent: 'We reply within 24 hours',
  },
  {
    icon: Phone,
    title: 'Call Us',
    content: '+1 (234) 567-890',
    subContent: 'Mon-Fri 9am-6pm',
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    content: 'Tehran, Iran',
    subContent: 'Headquarters',
  },
  {
    icon: Clock,
    title: 'Working Hours',
    content: 'Mon - Fri: 9:00 - 18:00',
    subContent: 'Weekend: By appointment',
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', company: '', subject: '', message: '' });
  };

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
              <span className="text-primary-950 dark:text-white">Let's Build Something</span>
              <br />
              <span className="gradient-text">Amazing Together</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Have a project in mind? Questions about our products? We'd love to hear from you. 
              Get in touch and let's start a conversation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white dark:bg-primary-950">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-primary-950 dark:text-white mb-4">
                  Get in Touch
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  We're here to help and answer any questions you might have. We look forward to hearing from you.
                </p>
              </div>

              {contactInfo.map((info) => (
                <div key={info.title} className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 dark:bg-primary-900">
                  <div className="w-12 h-12 rounded-xl bg-primary-800/10 dark:bg-secondary-500/10 flex items-center justify-center shrink-0">
                    <info.icon className="w-6 h-6 text-primary-800 dark:text-secondary-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-950 dark:text-white">{info.title}</h3>
                    <p className="text-gray-700 dark:text-gray-300">{info.content}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{info.subContent}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="p-8 md:p-10">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-6">
                      <MessageCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary-950 dark:text-white mb-4">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      Thank you for reaching out. We'll get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="btn-primary"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-primary-700 bg-white dark:bg-primary-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-800 dark:focus:ring-secondary-500 focus:border-transparent transition-all"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-primary-700 bg-white dark:bg-primary-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-800 dark:focus:ring-secondary-500 focus:border-transparent transition-all"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Company
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-primary-700 bg-white dark:bg-primary-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-800 dark:focus:ring-secondary-500 focus:border-transparent transition-all"
                          placeholder="Your Company"
                        />
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Subject *
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-primary-700 bg-white dark:bg-primary-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-800 dark:focus:ring-secondary-500 focus:border-transparent transition-all"
                        >
                          <option value="">Select a subject</option>
                          <option value="general">General Inquiry</option>
                          <option value="sales">Sales & Pricing</option>
                          <option value="support">Technical Support</option>
                          <option value="partnership">Partnership</option>
                          <option value="careers">Careers</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-primary-700 bg-white dark:bg-primary-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-800 dark:focus:ring-secondary-500 focus:border-transparent transition-all resize-none"
                        placeholder="Tell us about your project or inquiry..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Send className="w-5 h-5" />
                          Send Message
                        </span>
                      )}
                    </button>
                  </form>
                )}
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 sm:py-20 bg-gray-50 dark:bg-primary-950/50">
        <div className="container-custom">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary-950 dark:text-white mb-3 sm:mb-4">Our Location</h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">Visit our headquarters in Tehran, Iran</p>
          </div>
          <Card className="overflow-hidden rounded-3xl">
            <Map
              lat={35.77857469321197}
              lng={51.423923904739006}
              zoom={15}
              className="h-[300px] sm:h-[400px] lg:h-[500px] w-full"
            />
          </Card>
          {/* Address info below map */}
          <div className="mt-6 sm:mt-8 grid sm:grid-cols-3 gap-4 sm:gap-6">
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-white dark:bg-primary-900 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-primary-800/10 dark:bg-secondary-500/10 flex items-center justify-center shrink-0">
                <Building2 className="w-5 h-5 text-primary-800 dark:text-secondary-400" />
              </div>
              <div>
                <div className="text-sm font-medium text-gray-900 dark:text-white">Headquarters</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Tehran, Iran</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-white dark:bg-primary-900 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-primary-800/10 dark:bg-secondary-500/10 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-primary-800 dark:text-secondary-400" />
              </div>
              <div>
                <div className="text-sm font-medium text-gray-900 dark:text-white">Working Hours</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Sat-Thu: 9AM - 6PM</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-white dark:bg-primary-900 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-primary-800/10 dark:bg-secondary-500/10 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-primary-800 dark:text-secondary-400" />
              </div>
              <div>
                <div className="text-sm font-medium text-gray-900 dark:text-white">Phone</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">+98 21 1234 5678</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
