import { motion } from 'framer-motion';
import { FiClock, FiArrowRight } from 'react-icons/fi';

const blogPosts = [
  {
    id: 1,
    title: "10 Social Media Strategies That Actually Drive Sales in 2026",
    excerpt: "Discover the proven tactics that convert followers into paying customers, backed by real data from our client campaigns.",
    category: "Social Media",
    readTime: "8 min read",
    date: "March 15, 2026",
    image: "bg-gradient-to-br from-blue-500 to-blue-700",
  },
  {
    id: 2,
    title: "How to Achieve 5x ROAS on Meta Ads: A Complete Guide",
    excerpt: "Learn the exact framework we use to consistently deliver exceptional returns on Facebook and Instagram advertising.",
    category: "Paid Advertising",
    readTime: "12 min read",
    date: "March 10, 2026",
    image: "bg-gradient-to-br from-purple-500 to-pink-600",
  },
  {
    id: 3,
    title: "The Ultimate Website Conversion Optimization Checklist",
    excerpt: "Transform your website into a lead-generating machine with these 25 proven optimization techniques.",
    category: "Web Development",
    readTime: "10 min read",
    date: "March 5, 2026",
    image: "bg-gradient-to-br from-green-500 to-teal-600",
  },
  {
    id: 4,
    title: "AI in Marketing: Practical Applications for Small Businesses",
    excerpt: "Cut through the hype and discover how AI can actually help your business save time and increase revenue.",
    category: "AI & Automation",
    readTime: "15 min read",
    date: "February 28, 2026",
    image: "bg-gradient-to-br from-red-500 to-orange-600",
  },
  {
    id: 5,
    title: "Brand Strategy 101: Building a Brand That Sells",
    excerpt: "The essential elements of creating a brand identity that resonates with your target audience and drives loyalty.",
    category: "Branding",
    readTime: "9 min read",
    date: "February 20, 2026",
    image: "bg-gradient-to-br from-yellow-500 to-amber-600",
  },
  {
    id: 6,
    title: "E-commerce Growth Hacks: From $10K to $100K/Month",
    excerpt: "Real strategies from real businesses that scaled their online stores 10x in less than a year.",
    category: "E-commerce",
    readTime: "11 min read",
    date: "February 15, 2026",
    image: "bg-gradient-to-br from-indigo-500 to-purple-600",
  },
];

export default function Blog() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-dark-900">
            Our
            <span className="text-primary-600"> Blog</span>
          </h1>
          <p className="text-xl text-dark-600 max-w-3xl mx-auto">
            Insights, strategies, and tips to help you grow your business in the digital age
          </p>
        </motion.div>

        <div className="relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 blur-[3px] pointer-events-none select-none">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 group border border-gray-100"
              >
                <div className={`${post.image} h-48 flex items-end p-6`}>
                  <span className="bg-white text-primary-600 px-3 py-1 rounded-full text-sm font-semibold">
                    {post.category}
                  </span>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-dark-500 mb-3">
                    <span>{post.date}</span>
                    <span className="flex items-center space-x-1">
                      <FiClock size={14} />
                      <span>{post.readTime}</span>
                    </span>
                  </div>
                  
                  <h2 className="text-2xl font-bold mb-3 text-dark-900 transition">
                    {post.title}
                  </h2>
                  
                  <p className="text-dark-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <button className="inline-flex items-center space-x-2 text-primary-600 font-semibold transition">
                    <span>Read More</span>
                    <FiArrowRight />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="absolute inset-0 flex items-center justify-center px-4">
            <div className="max-w-lg w-full rounded-2xl border border-white/80 bg-white/85 backdrop-blur-md shadow-2xl p-8 text-center">
              <p className="inline-flex items-center rounded-full bg-primary-50 text-primary-700 px-4 py-1.5 text-sm font-semibold mb-4">
                Blog Access
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-dark-900 mb-3">Coming Soon</h2>
              <p className="text-dark-600 text-base sm:text-lg">
                Our full blog library is being finalized. Fresh articles and growth guides will be published here soon.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
