import { motion } from 'framer-motion';
import { FiTarget, FiTrendingUp, FiUsers, FiBarChart2, FiZap, FiAward } from 'react-icons/fi';

export default function About() {
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
            About
            <span className="text-primary-600"> X Tech Agency</span>
          </h1>
          <p className="text-xl text-dark-600 max-w-3xl mx-auto">
            Your strategic partner in digital transformation and measurable business growth
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-dark-900">Our Mission</h2>
            <p className="text-dark-600 mb-4 leading-relaxed">
              We exist to help businesses achieve exponential growth through strategic digital solutions. Unlike traditional agencies that focus on vanity metrics, we're obsessed with driving real business outcomes: revenue, conversions, and ROI.
            </p>
            <p className="text-dark-600 leading-relaxed">
              Every campaign we launch, every platform we build, and every strategy we develop is engineered to deliver measurable results that impact your bottom line.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-dark-900">Our Approach</h2>
            <p className="text-dark-600 mb-4 leading-relaxed">
              We combine data-driven strategy with creative execution to build digital systems that scale. Our team brings together expertise in marketing, technology, design, and analytics to deliver comprehensive solutions.
            </p>
            <p className="text-dark-600 leading-relaxed">
              From startups to established enterprises across real estate, fashion, fitness, automotive, and more, we've helped businesses transform their digital presence and achieve sustainable growth.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-dark-50 to-primary-50/30 rounded-2xl p-12 mb-20"
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-dark-900">Why Partner With Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: FiTarget,
                title: 'Results-Focused',
                description: 'Every decision backed by data and focused on your business objectives',
              },
              {
                icon: FiTrendingUp,
                title: 'Proven Track Record',
                description: '4.2x average ROAS and 45% lead increase across client campaigns',
              },
              {
                icon: FiUsers,
                title: 'Strategic Partnership',
                description: 'We work as an extension of your team, invested in your success',
              },
              {
                icon: FiBarChart2,
                title: 'Data-Driven Decisions',
                description: 'Advanced analytics and continuous optimization for maximum performance',
              },
              {
                icon: FiZap,
                title: 'Rapid Execution',
                description: 'Fast implementation without compromising quality or strategy',
              },
              {
                icon: FiAward,
                title: 'Industry Expertise',
                description: 'Deep experience across multiple sectors and business models',
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-xl mb-4">
                  <item.icon className="text-primary-600 text-2xl" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-dark-900">{item.title}</h3>
                <p className="text-dark-600">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center bg-gradient-to-r from-dark-900 to-dark-800 text-white rounded-2xl p-12"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Drive Real Growth?</h2>
          <p className="text-xl mb-8 text-gray-300">
            Schedule a free strategy session and discover how we can scale your business
          </p>
          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-primary-600 to-primary-700 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition"
          >
            Book Your Free Consultation
          </a>
        </motion.div>
      </div>
    </div>
  );
}
