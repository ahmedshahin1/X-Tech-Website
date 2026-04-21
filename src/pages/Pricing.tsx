import { motion } from 'framer-motion';
import { FiCheck, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function Pricing() {
  return (
    <div className="py-20 relative overflow-hidden">
      {/* Background blur effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-50 to-primary-50/20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-dark-900">
            Transparent
            <span className="text-primary-600"> Pricing</span>
          </h1>
          <p className="text-xl text-dark-600 max-w-3xl mx-auto">
            Flexible packages designed to fit your business needs and budget
          </p>
        </motion.div>

        {/* Blurred pricing cards */}
        <div className="relative">
          <div className="grid md:grid-cols-3 gap-8 blur-sm pointer-events-none select-none">
            {[
              {
                name: "Starter",
                price: "$2,500",
                period: "/month",
                features: [
                  "Social Media Management",
                  "Content Creation (12 posts/month)",
                  "Community Management",
                  "Monthly Analytics Report",
                  "Email Support",
                ],
              },
              {
                name: "Growth",
                price: "$5,000",
                period: "/month",
                popular: true,
                features: [
                  "Everything in Starter",
                  "Paid Ad Campaigns (Meta & Google)",
                  "Content Creation (24 posts/month)",
                  "Landing Page Design",
                  "Weekly Performance Reviews",
                  "Priority Support",
                ],
              },
              {
                name: "Enterprise",
                price: "Custom",
                period: "",
                features: [
                  "Everything in Growth",
                  "Full-Service Digital Strategy",
                  "Custom Web/App Development",
                  "Dedicated Account Manager",
                  "24/7 Priority Support",
                  "Custom Integrations",
                ],
              },
            ].map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-xl p-8 ${
                  plan.popular ? 'ring-2 ring-primary-600 transform scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="bg-primary-600 text-white text-sm font-semibold px-4 py-1 rounded-full inline-block mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-dark-900 mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-dark-900">{plan.price}</span>
                  <span className="text-dark-600">{plan.period}</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <FiCheck className="text-primary-600 flex-shrink-0 mt-1" />
                      <span className="text-dark-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-gradient-to-r from-primary-600 to-primary-700 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition">
                  Get Started
                </button>
              </div>
            ))}
          </div>

          {/* Coming Soon Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-2xl shadow-2xl p-12 max-w-2xl text-center border-4 border-primary-600"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-100 rounded-full mb-6">
                <FiArrowRight className="text-primary-600 text-4xl" />
              </div>
              <h2 className="text-4xl font-bold mb-4 text-dark-900">
                Pricing Plans <span className="text-primary-600">Coming Soon</span>
              </h2>
              <p className="text-xl text-dark-600 mb-8">
                We're finalizing our transparent pricing structure. Every business is unique, so we prefer to create custom solutions tailored to your specific needs and goals.
              </p>
              <div className="space-y-4">
                <p className="text-lg text-dark-700 font-semibold">
                  In the meantime, let's discuss your project:
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-primary-600 to-primary-700 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition"
                  >
                    <span>Get a Custom Quote</span>
                    <FiArrowRight />
                  </Link>
                  <Link
                    to="/services"
                    className="inline-flex items-center justify-center space-x-2 border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition"
                  >
                    <span>View Our Services</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Why Custom Pricing Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 bg-white rounded-2xl p-12 shadow-lg"
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-dark-900">Why We Offer Custom Solutions</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-2 text-dark-900">Tailored Strategy</h3>
              <p className="text-dark-600">
                Every business has unique goals, challenges, and budgets. We create solutions that fit your specific needs.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-2 text-dark-900">Maximum ROI</h3>
              <p className="text-dark-600">
                Pay only for what you need. No unnecessary services or hidden fees. Just results-driven solutions.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-bold mb-2 text-dark-900">Scalable Growth</h3>
              <p className="text-dark-600">
                Start where you are and scale as you grow. Our flexible approach adapts to your business evolution.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
