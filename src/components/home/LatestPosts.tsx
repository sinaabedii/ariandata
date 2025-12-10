'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, TrendingUp } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';

const posts = [
  {
    id: 1,
    title: 'The Future of AI in Enterprise: 2024 Trends',
    excerpt: 'Explore the latest AI trends reshaping how enterprises operate and compete in the digital age.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600',
    category: 'Artificial Intelligence',
    categoryColor: 'from-blue-500 to-cyan-500',
    date: 'Dec 5, 2024',
    readTime: '8 min read',
    slug: 'future-of-ai-enterprise-2024',
    featured: true,
  },
  {
    id: 2,
    title: 'Building Scalable Data Pipelines with Modern Tools',
    excerpt: 'A comprehensive guide to designing and implementing robust data pipelines for growing businesses.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600',
    category: 'Data Engineering',
    categoryColor: 'from-purple-500 to-pink-500',
    date: 'Dec 2, 2024',
    readTime: '6 min read',
    slug: 'scalable-data-pipelines',
    featured: false,
  },
  {
    id: 3,
    title: 'Machine Learning Best Practices for Production',
    excerpt: 'Learn the key strategies for deploying and maintaining ML models in production environments.',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600',
    category: 'Machine Learning',
    categoryColor: 'from-orange-500 to-red-500',
    date: 'Nov 28, 2024',
    readTime: '10 min read',
    slug: 'ml-best-practices-production',
    featured: false,
  },
];

export default function LatestPosts() {
  const featuredPost = posts.find(p => p.featured);
  const regularPosts = posts.filter(p => !p.featured);

  return (
    <section className="relative py-16 sm:py-20 lg:py-28 bg-white dark:bg-primary-950 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-40 left-0 w-72 h-72 bg-secondary-500/10 rounded-full blur-3xl -translate-x-1/2" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-accent-cyan/10 rounded-full blur-3xl translate-x-1/2" />

      <div className="container-custom relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 sm:mb-12">
          <SectionHeading
            label="From Our Blog"
            title="Latest Insights & News"
            description="Stay updated with the latest trends in AI, software development, and digital transformation."
            centered={false}
            className="mb-0"
          />
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gray-100 dark:bg-primary-800 text-primary-800 dark:text-secondary-400 text-sm font-semibold hover:bg-gray-200 dark:hover:bg-primary-700 transition-colors self-start sm:self-auto"
          >
            View All Posts
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Featured Post */}
          {featuredPost && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:row-span-2"
            >
              <Link href={`/blog/${featuredPost.slug}`} className="group block h-full">
                <article className="relative h-full rounded-[2rem] overflow-hidden bg-gradient-to-br from-gray-100 to-white dark:from-primary-900 dark:to-primary-950 shadow-lg shadow-gray-200/50 dark:shadow-none hover:shadow-2xl transition-all duration-500">
                  {/* Image */}
                  <div className="relative h-56 sm:h-64 lg:h-72 overflow-hidden">
                    <Image
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent`} />
                    
                    {/* Featured badge */}
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span className={`px-3 py-1.5 rounded-full bg-gradient-to-r ${featuredPost.categoryColor} text-white text-xs font-semibold flex items-center gap-1.5`}>
                        <TrendingUp className="w-3 h-3" />
                        Featured
                      </span>
                    </div>

                    {/* Category on image */}
                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-medium">
                        {featuredPost.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 sm:p-6 lg:p-8">
                    {/* Meta */}
                    <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400 mb-3">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {featuredPost.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        {featuredPost.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-primary-950 dark:text-white mb-3 group-hover:text-primary-800 dark:group-hover:text-secondary-400 transition-colors line-clamp-2">
                      {featuredPost.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4 line-clamp-2 lg:line-clamp-3">
                      {featuredPost.excerpt}
                    </p>

                    {/* Read more */}
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary-800 dark:text-secondary-400 group-hover:gap-3 transition-all">
                      Read Article
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </article>
              </Link>
            </motion.div>
          )}

          {/* Regular Posts */}
          <div className="space-y-4 sm:space-y-6">
            {regularPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={`/blog/${post.slug}`} className="group block">
                  <article className="flex gap-4 sm:gap-5 p-3 sm:p-4 rounded-2xl bg-gray-50 dark:bg-primary-900 hover:bg-white dark:hover:bg-primary-800 shadow-sm hover:shadow-xl transition-all duration-300">
                    {/* Thumbnail */}
                    <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-xl overflow-hidden flex-shrink-0">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br ${post.categoryColor} opacity-20`} />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0 py-1">
                      {/* Category */}
                      <span className={`inline-block px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-medium bg-gradient-to-r ${post.categoryColor} text-white mb-2`}>
                        {post.category}
                      </span>

                      {/* Title */}
                      <h3 className="text-sm sm:text-base font-bold text-primary-950 dark:text-white mb-1.5 line-clamp-2 group-hover:text-primary-800 dark:group-hover:text-secondary-400 transition-colors">
                        {post.title}
                      </h3>

                      {/* Meta */}
                      <div className="flex items-center gap-3 text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
