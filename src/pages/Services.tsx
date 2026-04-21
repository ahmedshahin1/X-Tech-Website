import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiCheck } from 'react-icons/fi';
import { SERVICES } from '@/lib/constants';

const serviceHighlights: Record<string, string> = {
  'social-media': 'A consistent and strategic social presence that keeps your audience engaged and growing',
  'ad-campaigns': 'Data-driven ad campaigns built to reach the right audience and maximize every dollar you spend',
  'marketing-branding': 'A strong brand identity that makes your business look credible and impossible to forget',
  'web-app-development': 'Fast, responsive digital platforms built to convert visitors into customers',
  'design-vfx': 'Visual content that stops the scroll and tells your brand story professionally',
  'photo-shooting': 'Professional imagery that showcases your brand and builds instant trust with your audience',
  cybersecurity: 'Enterprise-grade security that protects your business and keeps your data safe',
  'ai-solutions': 'Intelligent automation that saves your team time and improves customer experience',
  automation: 'Custom automation that eliminates repetitive tasks and lets your team focus on what matters',
};

export default function Services() {
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
            <span className="text-primary-600"> Services</span>
          </h1>
          <p className="text-xl text-dark-600 max-w-3xl mx-auto">
            Comprehensive digital solutions engineered to drive measurable business growth
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-100"
            >
              <div className="bg-gradient-to-br from-dark-800 to-dark-900 p-8 text-white">
                <h3 className="text-2xl font-bold">{service.title}</h3>
              </div>
              
              <div className="p-6">
                <p className="text-dark-600 mb-4 leading-relaxed">{service.description}</p>
                
                <div className="bg-primary-50 p-4 rounded-lg mb-4 border-l-4 border-primary-600">
                  <p className="text-sm font-semibold text-dark-900">
                    {serviceHighlights[service.id] ?? service.result}
                  </p>
                </div>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-sm text-dark-600">
                      <FiCheck className="text-primary-600 mt-1 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to={`/services/${service.slug}`}
                  className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-semibold transition group-hover:translate-x-1"
                >
                  <span>Learn More</span>
                  <FiArrowRight />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
