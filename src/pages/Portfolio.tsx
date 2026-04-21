import { motion } from 'framer-motion';
import { INDUSTRIES } from '@/lib/constants';
import type { IconType } from 'react-icons';
import { 
  FiHome, FiTrendingUp, FiShoppingBag, FiPackage, 
  FiTruck, FiActivity, FiBarChart2, FiUsers, FiClock
} from 'react-icons/fi';

const industryIcons: Record<string, IconType> = {
  building: FiHome,
  home: FiHome,
  rocket: FiTrendingUp,
  gem: FiPackage,
  shirt: FiShoppingBag,
  car: FiTruck,
  dumbbell: FiActivity,
};

export default function Portfolio() {
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
            <span className="text-primary-600"> Portfolio</span>
          </h1>
          <p className="text-xl text-dark-600 max-w-3xl mx-auto">
            Real results for real businesses across diverse industries
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {INDUSTRIES.map((industry, index) => {
            const Icon = industryIcons[industry.icon] || FiShoppingBag;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer border border-gray-100"
              >
                <div className="bg-gradient-to-br from-dark-800 to-dark-900 p-12 text-center">
                  <Icon className="text-7xl text-primary-400 mx-auto" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-dark-900">{industry.name}</h3>
                  <p className="text-dark-600 mb-4">
                    Discover how we've helped {industry.name.toLowerCase()} businesses achieve measurable growth through strategic digital solutions.
                  </p>
                  <div className="flex items-center space-x-2 text-primary-600 font-semibold group-hover:translate-x-1 transition-transform">
                    <span>View Case Studies</span>
                    <span>→</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-dark-50 to-primary-50/30 rounded-2xl p-12"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-dark-900">Results That Matter</h2>
            <p className="text-dark-600">Measurable outcomes across all client engagements</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: FiTrendingUp, number: '150+', label: 'Projects Delivered' },
              { icon: FiUsers, number: '50+', label: 'Active Clients' },
              { icon: FiBarChart2, number: '4.2x', label: 'Average ROAS' },
              { icon: FiClock, number: '90 Days', label: 'To Measurable Results' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-xl mb-3">
                  <stat.icon className="text-primary-600 text-2xl" />
                </div>
                <div className="text-4xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-dark-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center bg-gradient-to-r from-dark-900 to-dark-800 text-white rounded-2xl p-12"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Be Our Next Success Story?</h2>
          <p className="text-xl mb-8 text-gray-300">
            Let's discuss how we can drive measurable growth for your business
          </p>
          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-primary-600 to-primary-700 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition"
          >
            Schedule Your Free Strategy Session
          </a>
        </motion.div>
      </div>
    </div>
  );
}
