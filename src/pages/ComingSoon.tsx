import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '@/components/ui/Button';
import { FiClock } from 'react-icons/fi';

interface ComingSoonProps {
  page: string;
}

export default function ComingSoon({ page }: ComingSoonProps) {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-dark-50 to-primary-50/20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center w-24 h-24 bg-primary-100 rounded-full mb-8">
            <FiClock className="text-primary-600 text-5xl" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-dark-900">
            <span className="text-primary-600">
              {page}
            </span>
          </h1>
          <p className="text-2xl text-dark-700 mb-4 font-semibold">Coming Soon</p>
          <p className="text-lg text-dark-600 mb-8">
            We're working on something great. This feature will be available shortly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button size="lg">Back to Home</Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg">Get Notified</Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
