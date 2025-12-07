'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  ArrowLeft, 
  Facebook,
  Twitter,
  Linkedin,
  Link2,
  Tag
} from 'lucide-react';

// Sample article data - In real app, fetch from API
const articlesData: { [key: string]: any } = {
  'future-of-ai-in-business': {
    id: 1,
    title: 'The Future of AI in Business: Trends to Watch in 2024',
    excerpt: 'Discover how artificial intelligence is reshaping industries and what trends will dominate the business landscape in the coming years.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200',
    category: 'Artificial Intelligence',
    author: 'Ali Mohammadi',
    authorRole: 'CEO & Co-Founder',
    authorImage: 'https://randomuser.me/api/portraits/men/32.jpg',
    authorBio: 'Former AI researcher at MIT with 15+ years in enterprise software. Passionate about democratizing AI technology.',
    date: '2024-12-01',
    readTime: '8 min',
    tags: ['AI', 'Business', 'Technology', 'Future Trends'],
    content: `
      <p class="lead">Artificial Intelligence is no longer a futuristic concept—it's reshaping how businesses operate today. As we look ahead to 2024, several key trends are emerging that will define the next phase of AI adoption in enterprise environments.</p>

      <h2>1. Generative AI Goes Mainstream</h2>
      <p>The explosion of generative AI tools like ChatGPT and Midjourney has opened new possibilities for content creation, code generation, and creative workflows. In 2024, we expect to see businesses integrating these tools into their core operations, from marketing to product development.</p>
      <p>Companies that successfully leverage generative AI will see significant improvements in productivity and innovation speed. However, this also brings new challenges around content authenticity and intellectual property.</p>

      <h2>2. AI-Powered Decision Making</h2>
      <p>Data-driven decision making is evolving into AI-augmented decision making. Rather than simply presenting data, AI systems are now capable of analyzing complex scenarios and recommending optimal courses of action.</p>
      <blockquote>
        "The companies that will thrive are those that learn to combine human intuition with AI-powered insights."
      </blockquote>
      <p>This shift requires new skills and mindsets. Leaders must learn to effectively collaborate with AI systems while maintaining human oversight and accountability.</p>

      <h2>3. Responsible AI and Governance</h2>
      <p>As AI becomes more pervasive, organizations are paying closer attention to ethical considerations. In 2024, we'll see increased focus on:</p>
      <ul>
        <li>Transparency in AI decision-making processes</li>
        <li>Bias detection and mitigation strategies</li>
        <li>Privacy-preserving AI techniques</li>
        <li>Regulatory compliance frameworks</li>
      </ul>

      <h2>4. Edge AI and Real-time Processing</h2>
      <p>The need for faster, more efficient AI processing is driving innovation in edge computing. By running AI models directly on devices rather than in the cloud, businesses can achieve real-time insights while reducing latency and bandwidth costs.</p>
      <p>This is particularly impactful for industries like manufacturing, healthcare, and autonomous vehicles where milliseconds matter.</p>

      <h2>5. AI Democratization</h2>
      <p>Low-code and no-code AI platforms are making it possible for non-technical users to build and deploy AI solutions. This democratization is accelerating AI adoption across departments and opening new possibilities for innovation.</p>

      <h2>Conclusion</h2>
      <p>The AI landscape in 2024 will be defined by practical applications that deliver real business value. Organizations that invest in understanding these trends and building the right capabilities will be well-positioned to compete in an increasingly AI-driven world.</p>
    `,
  },
  'machine-learning-healthcare': {
    id: 2,
    title: 'Machine Learning Revolution in Healthcare',
    excerpt: 'How ML algorithms are improving diagnosis accuracy and patient outcomes across medical institutions.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=1200',
    category: 'Machine Learning',
    author: 'Sara Ahmadi',
    authorRole: 'CTO & Co-Founder',
    authorImage: 'https://randomuser.me/api/portraits/women/44.jpg',
    authorBio: 'PhD in Machine Learning, previously led AI teams at Google. Expert in scalable ML systems.',
    date: '2024-11-28',
    readTime: '6 min',
    tags: ['Machine Learning', 'Healthcare', 'AI', 'Medical'],
    content: `
      <p class="lead">Machine learning is transforming healthcare in unprecedented ways, from early disease detection to personalized treatment plans. This revolution is saving lives and reducing costs across the medical industry.</p>

      <h2>Diagnostic Accuracy</h2>
      <p>ML algorithms can now detect certain conditions with accuracy matching or exceeding human experts. This is particularly evident in medical imaging, where deep learning models are helping radiologists identify tumors, fractures, and other abnormalities.</p>

      <h2>Personalized Medicine</h2>
      <p>By analyzing patient data including genetics, lifestyle, and medical history, ML systems can recommend personalized treatment plans that are more likely to be effective for individual patients.</p>

      <h2>The Future of Healthcare AI</h2>
      <p>As these technologies mature and gain regulatory approval, we expect to see even more widespread adoption across healthcare systems worldwide.</p>
    `,
  },
};

const relatedArticles = [
  {
    slug: 'machine-learning-healthcare',
    title: 'Machine Learning Revolution in Healthcare',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400',
    category: 'Machine Learning',
    date: '2024-11-28',
  },
  {
    slug: 'data-driven-decision-making',
    title: 'Data-Driven Decision Making: A Complete Guide',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400',
    category: 'Data Analytics',
    date: '2024-11-25',
  },
  {
    slug: 'nlp-customer-service',
    title: 'NLP in Customer Service: Transforming Support',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=400',
    category: 'Artificial Intelligence',
    date: '2024-11-15',
  },
];

export default function ArticlePage() {
  const params = useParams();
  const slug = params.slug as string;
  const article = articlesData[slug] || articlesData['future-of-ai-in-business'];

  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 sm:pt-32 pb-8 sm:pb-12">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-primary-950 dark:via-background-dark dark:to-primary-900" />
        </div>

        <div className="container-custom">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-6 sm:mb-8"
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-primary-800 dark:hover:text-secondary-400 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Articles
            </Link>
          </motion.div>

          <div className="max-w-4xl">
            {/* Category */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4"
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium bg-primary-800/10 dark:bg-secondary-500/10 text-primary-800 dark:text-secondary-400">
                <Tag className="w-3.5 h-3.5" />
                {article.category}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary-950 dark:text-white mb-6 leading-tight"
            >
              {article.title}
            </motion.h1>

            {/* Meta */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap items-center gap-4 sm:gap-6"
            >
              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden ring-2 ring-primary-800/10 dark:ring-secondary-500/20">
                  <Image
                    src={article.authorImage}
                    alt={article.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-primary-950 dark:text-white">
                    {article.author}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {article.authorRole}
                  </div>
                </div>
              </div>

              <div className="hidden sm:block w-px h-8 bg-gray-200 dark:bg-primary-700" />

              {/* Date & Read time */}
              <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  {new Date(article.date).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  {article.readTime} read
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="pb-8 sm:pb-12">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="relative aspect-[21/9] sm:aspect-[2/1] lg:aspect-[21/9] rounded-2xl sm:rounded-3xl overflow-hidden"
          >
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-8 sm:py-12">
        <div className="container-custom">
          <div className="grid lg:grid-cols-[1fr_300px] gap-8 lg:gap-12">
            {/* Article Content */}
            <motion.article
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="prose prose-lg dark:prose-invert max-w-none
                prose-headings:text-primary-950 dark:prose-headings:text-white
                prose-headings:font-bold
                prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
                prose-p:text-gray-600 dark:prose-p:text-gray-400 prose-p:leading-relaxed
                prose-a:text-primary-800 dark:prose-a:text-secondary-400 prose-a:no-underline hover:prose-a:underline
                prose-blockquote:border-l-primary-800 dark:prose-blockquote:border-l-secondary-500
                prose-blockquote:bg-gray-50 dark:prose-blockquote:bg-primary-900
                prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-xl
                prose-blockquote:not-italic prose-blockquote:text-gray-700 dark:prose-blockquote:text-gray-300
                prose-ul:text-gray-600 dark:prose-ul:text-gray-400
                prose-li:marker:text-primary-800 dark:prose-li:marker:text-secondary-500
                [&_.lead]:text-xl [&_.lead]:text-gray-700 dark:[&_.lead]:text-gray-300 [&_.lead]:leading-relaxed [&_.lead]:mb-8"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* Share */}
              <div className="sticky top-24 space-y-6">
                <div className="p-5 sm:p-6 rounded-2xl bg-gray-50 dark:bg-primary-900">
                  <h3 className="font-bold text-primary-950 dark:text-white mb-4">
                    Share this article
                  </h3>
                  <div className="flex gap-3">
                    <button className="p-3 rounded-xl bg-white dark:bg-primary-800 hover:bg-primary-800 hover:text-white dark:hover:bg-secondary-500 transition-colors">
                      <Twitter className="w-5 h-5" />
                    </button>
                    <button className="p-3 rounded-xl bg-white dark:bg-primary-800 hover:bg-primary-800 hover:text-white dark:hover:bg-secondary-500 transition-colors">
                      <Facebook className="w-5 h-5" />
                    </button>
                    <button className="p-3 rounded-xl bg-white dark:bg-primary-800 hover:bg-primary-800 hover:text-white dark:hover:bg-secondary-500 transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </button>
                    <button className="p-3 rounded-xl bg-white dark:bg-primary-800 hover:bg-primary-800 hover:text-white dark:hover:bg-secondary-500 transition-colors">
                      <Link2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Tags */}
                <div className="p-5 sm:p-6 rounded-2xl bg-gray-50 dark:bg-primary-900">
                  <h3 className="font-bold text-primary-950 dark:text-white mb-4">
                    Tags
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag: string) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 rounded-full text-sm bg-white dark:bg-primary-800 text-gray-600 dark:text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Author */}
                <div className="p-5 sm:p-6 rounded-2xl bg-gray-50 dark:bg-primary-900">
                  <h3 className="font-bold text-primary-950 dark:text-white mb-4">
                    About the Author
                  </h3>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden">
                      <Image
                        src={article.authorImage}
                        alt={article.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-primary-950 dark:text-white">
                        {article.author}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {article.authorRole}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {article.authorBio}
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-12 sm:py-16 bg-gray-50 dark:bg-primary-950/50">
        <div className="container-custom">
          <h2 className="text-xl sm:text-2xl font-bold text-primary-950 dark:text-white mb-8">
            Related Articles
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedArticles.map((article, index) => (
              <motion.article
                key={article.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white dark:bg-primary-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all"
              >
                <Link href={`/blog/${article.slug}`}>
                  <div className="relative h-40 overflow-hidden">
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
                  <div className="p-4">
                    <h3 className="font-bold text-primary-950 dark:text-white group-hover:text-primary-800 dark:group-hover:text-secondary-400 transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-3 text-xs text-gray-500 dark:text-gray-400">
                      <Calendar className="w-3.5 h-3.5" />
                      {new Date(article.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
