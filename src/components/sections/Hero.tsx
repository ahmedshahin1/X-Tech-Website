import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { Link } from 'react-router-dom';
import { FiTarget } from 'react-icons/fi';
import { HiOutlineLightBulb, HiOutlineRocketLaunch } from 'react-icons/hi2';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxMGI5ODEiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDEzNGg3djFoLTd6bTAtNWg3djFoLTd6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-4"
          >
            <span className="bg-primary-500/10 text-primary-600 px-4 py-2 rounded-full text-sm font-semibold border border-primary-500/30">
              Digital Growth Partner
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-6 text-white"
          >
            Drive Revenue Growth
            <br />
            <span className="bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">
              Not Just Engagement
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            We build digital systems that generate qualified leads, increase conversions, and scale your business profitably
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Link to="/contact">
              <Button size="lg" className="text-lg px-8 py-4">Get Your Free Strategy Session</Button>
            </Link>
            <Link to="/portfolio">
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-gray-600 text-gray-300 hover:bg-dark-700">View Case Studies</Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {[
              { icon: FiTarget, metric: 'Full-Service', label: 'Marketing & Tech Under One Roof' },
              { icon: HiOutlineLightBulb, metric: 'Smart Strategy', label: 'Data-Driven Decisions Only' },
              { icon: HiOutlineRocketLaunch, metric: 'Built to Scale', label: 'Solutions That Grow With You' },
            ].map((stat, index) => (
              <div
                key={index}
                className="rounded-xl border border-[#1D4ED8]/40 bg-[#0B1F3A]/70 p-6 backdrop-blur-sm shadow-[0_0_0_1px_rgba(29,78,216,0.12),0_12px_32px_rgba(11,31,58,0.28)] transition-all duration-300 hover:border-[#1D4ED8]/80 hover:shadow-[0_0_0_1px_rgba(29,78,216,0.3),0_0_24px_rgba(29,78,216,0.22)]"
              >
                <stat.icon className="mx-auto mb-3 text-3xl text-[#E63946]" />
                <div className="mb-1 text-4xl font-bold text-white">
                  {stat.metric}
                </div>
                <div className="text-sm text-white/60">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
