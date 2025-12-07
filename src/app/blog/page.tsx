'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  ArrowRight, 
  Search, 
  Tag,
  TrendingUp,
  Sparkles,
  ChevronRight
} from 'lucide-react';

// Sample blog data
const articles = [
  {
    id: 1,
    slug: 'future-of-ai-in-business',
    title: 'The Future of AI in Business: Trends to Watch in 2024',
    excerpt: 'Discover how artificial intelligence is reshaping industries and what trends will dominate the business landscape in the coming years.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800',
    category: 'Artificial Intelligence',
    author: 'Ali Mohammadi',
    authorImage: 'https://randomuser.me/api/portraits/men/32.jpg',
    date: '2024-12-01',
    readTime: '8 min',
    featured: true,
  },
  {
    id: 2,
    slug: 'machine-learning-healthcare',
    title: 'Machine Learning Revolution in Healthcare',
    excerpt: 'How ML algorithms are improving diagnosis accuracy and patient outcomes across medical institutions.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800',
    category: 'Machine Learning',
    author: 'Sara Ahmadi',
    authorImage: 'https://randomuser.me/api/portraits/women/44.jpg',
    date: '2024-11-28',
    readTime: '6 min',
    featured: true,
  },
  {
    id: 3,
    slug: 'data-driven-decision-making',
    title: 'Data-Driven Decision Making: A Complete Guide',
    excerpt: 'Learn how to leverage data analytics to make informed business decisions and gain competitive advantage.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
    category: 'Data Analytics',
    author: 'Reza Karimi',
    authorImage: 'https://randomuser.me/api/portraits/men/75.jpg',
    date: '2024-11-25',
    readTime: '10 min',
    featured: false,
  },
  {
    id: 4,
    slug: 'cloud-migration-strategies',
    title: 'Cloud Migration Strategies for Enterprise',
    excerpt: 'Best practices and strategies for seamlessly migrating your enterprise infrastructure to the cloud.',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800',
    category: 'Cloud Computing',
    author: 'Maryam Hosseini',
    authorImage: 'https://randomuser.me/api/portraits/women/68.jpg',
    date: '2024-11-20',
    readTime: '7 min',
    featured: false,
  },
  {
    id: 5,
    slug: 'nlp-customer-service',
    title: 'NLP in Customer Service: Transforming Support',
    excerpt: 'How Natural Language Processing is revolutionizing customer support with intelligent chatbots.',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800',
    category: 'Artificial Intelligence',
    author: 'Ali Mohammadi',
    authorImage: 'https://randomuser.me/api/portraits/men/32.jpg',
    date: '2024-11-15',
    readTime: '5 min',
    featured: false,
  },
  {
    id: 6,
    slug: 'cybersecurity-ai-era',
    title: 'Cybersecurity in the AI Era',
    excerpt: 'Understanding the new security challenges and solutions in an AI-powered world.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800',
    category: 'Security',
    author: 'Sara Ahmadi',
    authorImage: 'https://randomuser.me/api/portraits/women/44.jpg',
    date: '2024-11-10',
    readTime: '9 min',
    featured: false,
  },
];

const categories = [
  'All',
  'Artificial Intelligence',
  'Machine Learning',
  'Data Analytics',
  'Cloud Computing',
  'Security',
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const featuredArticles = articles.filter(a => a.featured);
  const filteredArticles = articles.filter(article => {
    const matchesCategory = activeCategory === 'All' || article.category === activeCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-primary-950 dark:via-background-dark dark:to-primary-900" />
          <div className="absolute top-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-secondary-400/20 dark:bg-secondary-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-48 sm:w-72 h-48 sm:h-72 bg-accent-cyan/20 dark:bg-accent-cyan/10 rounded-full blur-3xl" />
        </div>

        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center px-4"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-800/10 dark:bg-secondary-500/10 mb-6">
              <Sparkles className="w-4 h-4 text-primary-800 dark:text-secondary-400" />
              <span className="text-sm font-medium text-primary-800 dark:text-secondary-400">
                Insights & Updates
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              <span className="text-primary-950 dark:text-white">News &</span>
              <span className="gradient-text"> Articles</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Stay updated with the latest trends in AI, technology, and digital transformation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-12 sm:py-16 bg-white dark:bg-primary-950">
        <div className="container-custom">
          <div className="flex items-center gap-3 mb-8">
            <TrendingUp className="w-6 h-6 text-primary-800 dark:text-secondary-400" />
            <h2 className="text-xl sm:text-2xl font-bold text-primary-950 dark:text-white">
              Featured Articles
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {featuredArticles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative rounded-2xl sm:rounded-3xl overflow-hidden bg-gray-50 dark:bg-primary-900"
              >
                <Link href={`/blog/${article.slug}`}>
                  {/* Image */}
                  <div className="relative h-48 sm:h-64 overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    
                    {/* Category badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-white/90 dark:bg-primary-800/90 text-primary-800 dark:text-white">
                        {article.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-primary-950 dark:text-white mb-2 group-hover:text-primary-800 dark:group-hover:text-secondary-400 transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                      {article.excerpt}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="relative w-8 h-8 rounded-full overflow-hidden">
                          <Image
                            src={article.authorImage}
                            alt={article.author}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-primary-950 dark:text-white">
                            {article.author}
                          </div>
                          <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                            <Calendar className="w-3 h-3" />
                            {new Date(article.date).toLocaleDateString('en-US', { 
                              month: 'short', 
                              day: 'numeric' 
                            })}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                        <Clock className="w-3 h-3" />
                        {article.readTime}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* All Articles */}
      <section className="py-12 sm:py-16 bg-gray-50 dark:bg-primary-950/50">
        <div className="container-custom">
          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between mb-8 sm:mb-10">
            {/* Search */}
            <div className="relative w-full sm:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-2xl bg-white dark:bg-primary-900 border border-gray-200 dark:border-primary-800 text-primary-950 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-800/20 dark:focus:ring-secondary-500/20 transition-all"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === category
                      ? 'bg-primary-800 dark:bg-secondary-500 text-white'
                      : 'bg-white dark:bg-primary-900 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-primary-800'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Articles Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredArticles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group bg-white dark:bg-primary-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <Link href={`/blog/${article.slug}`}>
                  {/* Image */}
                  <div className="relative h-40 sm:h-48 overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-white/90 dark:bg-primary-800/90 text-primary-800 dark:text-secondary-400">
                        {article.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4 sm:p-5">
                    <h3 className="text-base sm:text-lg font-bold text-primary-950 dark:text-white mb-2 group-hover:text-primary-800 dark:group-hover:text-secondary-400 transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                      {article.excerpt}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-primary-800">
                      <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                        <Calendar className="w-3.5 h-3.5" />
                        {new Date(article.date).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </div>
                      <div className="flex items-center gap-1 text-sm font-medium text-primary-800 dark:text-secondary-400 group-hover:gap-2 transition-all">
                        Read
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

          {/* Load More */}
          {filteredArticles.length > 0 && (
            <div className="text-center mt-10 sm:mt-12">
              <button className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary-800 dark:bg-secondary-600 text-white font-semibold hover:scale-105 transition-transform">
                Load More Articles
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}

          {/* No results */}
          {filteredArticles.length === 0 && (
            <div className="text-center py-16">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 dark:bg-primary-800 flex items-center justify-center">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-primary-950 dark:text-white mb-2">
                No articles found
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-primary-800 via-primary-900 to-primary-950">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-gray-300 mb-8">
              Get the latest articles and insights delivered directly to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-3.5 rounded-2xl sm:rounded-full bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:border-secondary-400"
              />
              <button
                type="submit"
                className="px-6 py-3.5 rounded-2xl sm:rounded-full bg-white text-primary-800 font-semibold hover:bg-gray-100 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
