import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const stats = [
  {
    number: "One Team",
    label: "Marketing & Tech Combined",
    description: "No agencies juggling, no miscommunication — everything under one roof",
  },
  {
    number: "Your Brand",
    label: "Built to Stand Out",
    description: "We craft identities and digital products that make your business impossible to ignore",
  },
  {
    number: "Real Results",
    label: "Strategy Before Everything",
    description: "Every move we make is tied to your business goals — not vanity metrics",
  },
];

export default function StatsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative h-32 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center text-white"
            >
              <div className="text-6xl md:text-7xl font-bold mb-2">
                {stats[currentIndex].number}
              </div>
              <div className="text-2xl md:text-3xl font-semibold mb-2">
                {stats[currentIndex].label}
              </div>
              <div className="text-lg opacity-90">
                {stats[currentIndex].description}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {stats.map((_, index) => (
            <div
              key={index}
              className={`h-1 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'w-12 bg-white' : 'w-8 bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
