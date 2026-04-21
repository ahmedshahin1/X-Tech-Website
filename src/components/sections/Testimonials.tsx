import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi';

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "CEO, Luxury Estates",
    company: "Real Estate",
    image: "bg-gradient-to-br from-blue-500 to-blue-700",
    text: "X Tech Agency transformed our digital presence completely. We went from struggling to get leads online to having a consistent pipeline of high-quality prospects. Their strategic approach and attention to detail is unmatched.",
    rating: 5,
    result: "320% increase in qualified leads",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Founder, StyleHub",
    company: "Fashion E-commerce",
    image: "bg-gradient-to-br from-purple-500 to-pink-600",
    text: "The team's expertise in e-commerce optimization was evident from day one. Our conversion rate doubled, and our ad campaigns are now consistently profitable. Best investment we've made in our business.",
    rating: 5,
    result: "156% increase in conversions",
  },
  {
    id: 3,
    name: "Jessica Rodriguez",
    role: "Owner, FitLife Studios",
    company: "Fitness & Wellness",
    image: "bg-gradient-to-br from-green-500 to-teal-600",
    text: "X Tech Agency helped us build a community, not just a customer base. Their social media strategy and automation systems have been game-changing. Our studios are thriving like never before.",
    rating: 5,
    result: "245% increase in memberships",
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Director, AutoCare Pro",
    company: "Automotive Services",
    image: "bg-gradient-to-br from-red-500 to-orange-600",
    text: "We went from barely filling our schedule to being fully booked weeks in advance. The online booking system and ad campaigns they created have completely transformed our business operations.",
    rating: 5,
    result: "410% increase in online bookings",
  },
  {
    id: 5,
    name: "Emma Williams",
    role: "Founder, Artisan Gems",
    company: "Handmade Jewelry",
    image: "bg-gradient-to-br from-yellow-500 to-amber-600",
    text: "They helped us take our passion project and turn it into a thriving online business. The e-commerce platform they built is beautiful and the marketing strategy actually works. We've scaled beyond our wildest dreams.",
    rating: 5,
    result: "580% revenue growth",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 7000);
    return () => clearInterval(timer);
  }, []);

  const testimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-gradient-to-br from-dark-900 to-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-300">
            Real feedback from businesses we've helped grow
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl"
            >
              <div className="flex items-start space-x-6 mb-6">
                <div className={`w-20 h-20 rounded-full ${testimonial.image} flex items-center justify-center text-white text-2xl font-bold flex-shrink-0`}>
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FiStar key={i} className="text-accent-500 fill-current" />
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold text-dark-900">{testimonial.name}</h3>
                  <p className="text-dark-600">{testimonial.role}</p>
                  <p className="text-sm text-primary-600 font-semibold">{testimonial.company}</p>
                </div>
              </div>

              <p className="text-lg text-dark-700 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              <div className="bg-primary-50 p-4 rounded-lg border-l-4 border-primary-600">
                <p className="text-primary-700 font-bold">{testimonial.result}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition"
            aria-label="Previous testimonial"
          >
            <FiChevronLeft className="text-primary-600 text-2xl" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition"
            aria-label="Next testimonial"
          >
            <FiChevronRight className="text-primary-600 text-2xl" />
          </button>

          {/* Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'bg-primary-500 w-8' 
                    : 'bg-gray-400 hover:bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
