import Hero from '@/components/sections/Hero';
import ServiceShowcase from '@/components/sections/ServiceShowcase';
import StatsSlider from '@/components/sections/StatsSlider';
import { motion } from 'framer-motion';
import { INDUSTRIES } from '@/lib/constants';
import { Link } from 'react-router-dom';
import type { IconType } from 'react-icons';
import { 
  FiHome, FiTrendingUp, FiShoppingBag, FiPackage, 
  FiTruck, FiActivity 
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

export default function Home() {
  console.log('Home component rendering...');
  
  return (
    <div>
      <Hero />
      
      <StatsSlider />
      
      <ServiceShowcase />
      
      {/* Industries Section */}
      <section className="py-20 bg-dark-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-dark-900">
              Trusted Across
              <span className="text-primary-600"> Multiple Industries</span>
            </h2>
            <p className="text-xl text-dark-600">
              We work with businesses across all industries — from startups to established brands
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {INDUSTRIES.map((industry, index) => {
              const Icon = industryIcons[industry.icon] || FiShoppingBag;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition text-center group cursor-pointer border border-gray-100"
                >
                  <Icon className="text-4xl mb-2 mx-auto text-primary-600 group-hover:scale-110 transition-transform" />
                  <div className="text-sm font-medium text-dark-700">{industry.name}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0B1F3A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-full h-px bg-white/80 mb-12" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Scale Your Business?
          </h2>
          <p className="text-xl mb-8 text-white/70">
            Book a free strategy session and discover how we can drive measurable growth for your business
          </p>
          <div className="flex justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition"
            >
              Schedule Your Free Consultation
            </Link>
          </div>
        </div>
      </section>

      <section className="h-20 bg-white" />
    </div>
  );
}
