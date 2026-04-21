import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

const featuredCases = [
  {
    id: 1,
    client: "Luxury Real Estate",
    industry: "Real Estate",
    metric: "320%",
    label: "Lead Increase",
    image: "bg-gradient-to-br from-blue-600 to-blue-800",
  },
  {
    id: 2,
    client: "Fashion E-commerce",
    industry: "Clothing & Fashion",
    metric: "156%",
    label: "Conversion Growth",
    image: "bg-gradient-to-br from-purple-600 to-pink-600",
  },
  {
    id: 3,
    client: "Fitness Studio Chain",
    industry: "Gyms & Fitness",
    metric: "245%",
    label: "New Memberships",
    image: "bg-gradient-to-br from-green-600 to-teal-600",
  },
];

export default function CaseStudiesPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-dark-900">
            Customer Success Stories
          </h2>
          <p className="text-xl text-dark-600 max-w-2xl mx-auto">
            See how we've helped businesses like yours achieve remarkable growth
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {featuredCases.map((caseStudy, index) => (
            <motion.div
              key={caseStudy.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <Link to="/case-studies">
                <div className={`${caseStudy.image} rounded-2xl p-8 text-white h-64 flex flex-col justify-between transform group-hover:scale-105 transition-all duration-300 shadow-lg group-hover:shadow-2xl`}>
                  <div>
                    <div className="text-sm font-semibold mb-2 opacity-90">{caseStudy.industry}</div>
                    <h3 className="text-2xl font-bold mb-4">{caseStudy.client}</h3>
                  </div>
                  <div>
                    <div className="text-5xl font-bold mb-2">{caseStudy.metric}</div>
                    <div className="text-lg opacity-90">{caseStudy.label}</div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Link
            to="/case-studies"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-600 to-primary-700 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition group"
          >
            <span>View All Case Studies</span>
            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
