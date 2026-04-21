import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const showcaseSlides = [
  {
    tag: 'Marketing',
    headline: 'Build a consistent social presence that keeps your audience engaged and your brand growing',
    quote: 'A strong social media presence is the foundation of every successful brand in the digital age',
    slug: 'social-media-management',
    features: [
      'Content calendar & strategy',
      'Post design & copywriting',
      'Community management',
      'Monthly performance reports',
    ],
  },
  {
    tag: 'Advertising',
    headline: 'Reach the right people at the right time with data-driven ad campaigns that convert',
    quote: 'Strategic advertising puts your brand in front of your ideal customer — every dirham spent with purpose',
    slug: 'paid-advertising',
    features: [
      'Facebook & Instagram ads',
      'Google Search & Display ads',
      'Audience targeting & retargeting',
      'Budget optimization & reporting',
    ],
  },
  {
    tag: 'Branding',
    headline: 'Make your business look credible, professional, and impossible to forget from day one',
    quote: 'Your brand identity is the first impression you make — we make sure it counts every single time',
    slug: 'brand-strategy',
    features: [
      'Logo design & variations',
      'Color palette & typography system',
      'Brand guidelines document',
      'Business card & stationery design',
    ],
  },
  {
    tag: 'Content',
    headline: 'Tell your brand story with professional content that builds trust and drives action',
    quote: 'Great content does not just look good — it connects, convinces, and converts your audience',
    slug: 'creative-design',
    features: [
      'Photography direction & scripts',
      'Video & reel production',
      'Graphic design & motion graphics',
      'Copywriting & captions',
    ],
  },
  {
    tag: 'Growth',
    headline: 'Get found on Google and bring in consistent organic traffic without paying for every click',
    quote: 'SEO is a long-term investment that compounds — the earlier you start, the further ahead you get',
    slug: 'web-app-development',
    features: [
      'On-page SEO optimization',
      'Keyword research & strategy',
      'Technical SEO audit',
      'Monthly ranking reports',
    ],
  },
  {
    tag: 'Technology',
    headline: 'Launch a high-performance mobile app for iOS and Android built around your users',
    quote: 'A well-built mobile app is not just a product — it is a direct channel between your brand and your customers',
    slug: 'web-app-development',
    features: [
      'UI/UX design & prototyping',
      'Native & cross-platform development',
      'App Store & Play Store publishing',
      'Post-launch support & updates',
    ],
  },
  {
    tag: 'Technology',
    headline: 'Get a fast, responsive, and conversion-focused website that represents your brand professionally',
    quote: 'Your website is your most powerful sales tool — we build it to perform, not just to look good',
    slug: 'web-app-development',
    features: [
      'Custom design & development',
      'Mobile responsive & fast loading',
      'SEO-ready structure',
      'E-commerce integration if needed',
    ],
  },
  {
    tag: 'Innovation',
    headline: 'Automate your workflows and customer interactions with intelligent AI-powered systems',
    quote: 'AI automation is not the future — it is the competitive advantage your business needs right now',
    slug: 'ai-systems',
    features: [
      'AI chatbot setup & integration',
      'Marketing workflow automation',
      'Lead qualification systems',
      'CRM & tool integrations',
    ],
  },
];

export default function ServiceShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % showcaseSlides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + showcaseSlides.length) % showcaseSlides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, []);

  const service = showcaseSlides[currentIndex];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-dark-900">
              Solutions That Drive
              <span className="text-primary-600"> Real Results</span>
            </h2>
            <p className="text-xl text-dark-600 max-w-2xl mx-auto">
              End-to-end digital services designed to maximize your ROI
            </p>
          </motion.div>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 gap-0 min-h-[600px] rounded-2xl overflow-hidden shadow-2xl"
            >
              {/* Content Side */}
              <div className={`flex items-center p-12 ${
                currentIndex % 2 === 0 ? 'bg-gradient-to-br from-dark-50 to-gray-100' : 'bg-gradient-to-br from-primary-50 to-primary-100/50 md:order-2'
              }`}>
                <div>
                  <div className="inline-block rounded-lg bg-[#E63946]/12 px-4 py-2 text-sm font-semibold text-[#E63946] mb-4">
                    {service.tag}
                  </div>
                  <h3 className="mb-6 text-4xl font-bold text-[#0B1F3A]">
                    {service.headline}
                  </h3>
                  <div className="mb-6 rounded-xl border-l-4 border-[#E63946] bg-white/80 p-6 shadow-sm backdrop-blur-sm">
                    <p className="text-lg font-semibold text-[#0A0A0A]">
                      {service.quote}
                    </p>
                  </div>
                  <Link
                    to={`/services/${service.slug}`}
                    className="group inline-flex items-center space-x-2 text-lg font-semibold text-[#E63946] transition hover:text-[#d62f3c]"
                  >
                    <span>Explore This Service</span>
                    <FiArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                  </Link>
                </div>
              </div>

              {/* Features Side */}
              <div className={`flex items-center justify-center p-12 ${
                currentIndex % 2 === 0 ? 'bg-[#0B1F3A]' : 'bg-[#0B1F3A] md:order-1'
              }`}>
                <div className="text-white w-full">
                  <h4 className="text-3xl font-bold mb-8">What You Get</h4>
                  <ul className="space-y-5">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                          <span className="font-bold text-[#E63946]">{idx + 1}</span>
                        </div>
                        <span className="text-lg leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 p-3 shadow-lg transition hover:bg-white"
            aria-label="Previous service"
          >
            <FiChevronLeft className="text-2xl text-dark-700 transition hover:text-[#E63946]" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 p-3 shadow-lg transition hover:bg-white"
            aria-label="Next service"
          >
            <FiChevronRight className="text-2xl text-dark-700 transition hover:text-[#E63946]" />
          </button>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {showcaseSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'bg-[#E63946] w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to service ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
