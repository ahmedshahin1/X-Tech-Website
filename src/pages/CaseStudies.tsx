import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const caseStudies = [
  {
    id: 1,
    client: "Luxury Real Estate Agency",
    industry: "Real Estate",
    challenge: "Low online visibility and minimal lead generation from digital channels",
    solution: "Comprehensive digital strategy including SEO, paid ads, and social media management",
    results: [
      { metric: "320%", label: "Increase in qualified leads" },
      { metric: "4.8x", label: "Return on ad spend" },
      { metric: "180%", label: "Growth in organic traffic" },
      { metric: "90 days", label: "Time to results" },
    ],
    services: ["Social Media Management", "Paid Advertising", "Web Development"],
    testimonial: "X Tech Agency transformed our digital presence. We went from struggling to get leads online to having a consistent pipeline of high-quality prospects.",
    image: "bg-gradient-to-br from-blue-600 to-blue-800",
  },
  {
    id: 2,
    client: "Fashion E-commerce Brand",
    industry: "Clothing & Fashion",
    challenge: "High cart abandonment rate and low conversion on product pages",
    solution: "Website redesign, conversion optimization, and targeted ad campaigns",
    results: [
      { metric: "156%", label: "Increase in conversions" },
      { metric: "42%", label: "Reduction in cart abandonment" },
      { metric: "5.2x", label: "ROAS on Meta ads" },
      { metric: "60 days", label: "Time to results" },
    ],
    services: ["Web Development", "Paid Advertising", "Design & Motion"],
    testimonial: "The team's expertise in e-commerce optimization was evident from day one. Our sales have never been better.",
    image: "bg-gradient-to-br from-purple-600 to-pink-600",
  },
  {
    id: 3,
    client: "Fitness Studio Chain",
    industry: "Gyms & Fitness",
    challenge: "Difficulty attracting new members and retaining existing ones",
    solution: "Social media strategy, local SEO, and automated marketing campaigns",
    results: [
      { metric: "245%", label: "Increase in new memberships" },
      { metric: "68%", label: "Improvement in retention" },
      { metric: "3.9x", label: "ROI on marketing spend" },
      { metric: "120 days", label: "Time to results" },
    ],
    services: ["Social Media Management", "Marketing & Branding", "Automation"],
    testimonial: "X Tech Agency helped us build a community, not just a customer base. Our studios are thriving.",
    image: "bg-gradient-to-br from-green-600 to-teal-600",
  },
  {
    id: 4,
    client: "Automotive Detailing Service",
    industry: "Car Care",
    challenge: "Limited online bookings and heavy reliance on walk-ins",
    solution: "Online booking system, Google Ads, and reputation management",
    results: [
      { metric: "410%", label: "Increase in online bookings" },
      { metric: "89%", label: "Booking capacity utilization" },
      { metric: "4.1x", label: "Return on ad spend" },
      { metric: "45 days", label: "Time to results" },
    ],
    services: ["Web Development", "Paid Advertising", "Business Automation"],
    testimonial: "We went from barely filling our schedule to being fully booked weeks in advance. Game changer.",
    image: "bg-gradient-to-br from-red-600 to-orange-600",
  },
  {
    id: 5,
    client: "Handmade Jewelry Brand",
    industry: "Handmade Accessories",
    challenge: "Struggling to scale beyond local markets and craft fairs",
    solution: "E-commerce platform, influencer marketing, and brand storytelling",
    results: [
      { metric: "580%", label: "Revenue growth" },
      { metric: "12x", label: "Expansion in reach" },
      { metric: "6.3x", label: "ROAS on campaigns" },
      { metric: "90 days", label: "Time to results" },
    ],
    services: ["Web Development", "Social Media Management", "Photography"],
    testimonial: "They helped us take our passion project and turn it into a thriving online business.",
    image: "bg-gradient-to-br from-yellow-600 to-amber-600",
  },
  {
    id: 6,
    client: "Interior Design Studio",
    industry: "Interior Decor",
    challenge: "Difficulty showcasing portfolio and attracting high-end clients",
    solution: "Premium website, professional photography, and targeted LinkedIn campaigns",
    results: [
      { metric: "290%", label: "Increase in inquiries" },
      { metric: "175%", label: "Growth in project value" },
      { metric: "4.5x", label: "ROI on marketing" },
      { metric: "75 days", label: "Time to results" },
    ],
    services: ["Web Development", "Photography", "Marketing & Branding"],
    testimonial: "Our new digital presence perfectly reflects the quality of our work. We're attracting the clients we've always wanted.",
    image: "bg-gradient-to-br from-indigo-600 to-purple-600",
  },
];

export default function CaseStudies() {
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
            Case
            <span className="text-primary-600"> Studies</span>
          </h1>
          <p className="text-xl text-dark-600 max-w-3xl mx-auto">
            Real businesses, real results. See how we've helped companies across industries achieve measurable growth.
          </p>
        </motion.div>

        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
            >
              <div className="grid md:grid-cols-2 gap-0">
                {/* Visual Side */}
                <div className={`${study.image} p-12 flex items-center justify-center text-white`}>
                  <div className="text-center">
                    <div className="text-6xl font-bold mb-4">{study.client}</div>
                    <div className="text-2xl opacity-90">{study.industry}</div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="p-12">
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-primary-600 mb-2">THE CHALLENGE</h3>
                    <p className="text-dark-700 text-lg">{study.challenge}</p>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-primary-600 mb-2">OUR SOLUTION</h3>
                    <p className="text-dark-700 text-lg">{study.solution}</p>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-primary-600 mb-2">SERVICES PROVIDED</h3>
                    <div className="flex flex-wrap gap-2">
                      {study.services.map((service, idx) => (
                        <span
                          key={idx}
                          className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Results Section */}
              <div className="bg-dark-50 p-8">
                <h3 className="text-2xl font-bold text-dark-900 mb-6 text-center">Results Achieved</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
                  {study.results.map((result, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-4xl font-bold text-primary-600 mb-2">{result.metric}</div>
                      <div className="text-sm text-dark-600">{result.label}</div>
                    </div>
                  ))}
                </div>

                <div className="bg-white p-6 rounded-xl border-l-4 border-primary-600">
                  <p className="text-dark-700 italic text-lg">"{study.testimonial}"</p>
                  <p className="text-dark-600 mt-2 font-semibold">— {study.client}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center bg-gradient-to-r from-dark-900 to-dark-800 text-white rounded-2xl p-12"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Write Your Success Story?</h2>
          <p className="text-xl mb-8 text-gray-300">
            Let's discuss how we can achieve similar results for your business
          </p>
          <a
            href="/contact"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-600 to-primary-700 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition"
          >
            <span>Schedule Your Free Strategy Session</span>
            <FiArrowRight />
          </a>
        </motion.div>
      </div>
    </div>
  );
}
