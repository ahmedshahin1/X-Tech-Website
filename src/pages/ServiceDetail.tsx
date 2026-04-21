import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiCheck } from 'react-icons/fi';
import { SERVICES } from '@/lib/constants';
import Button from '@/components/ui/Button';

type ProcessStep = {
  title: string;
  description: string;
};

type FAQItem = {
  q: string;
  a: string;
};

type ServiceDetails = {
  process: ProcessStep[];
  benefits: string[];
  faqs: FAQItem[];
};

const serviceDetails: Record<string, ServiceDetails> = {
  "social-media-management": {
    process: [
      { title: "Strategy Development", description: "We analyze your brand, audience, and competitors to create a tailored social media strategy" },
      { title: "Content Creation", description: "Our team produces engaging, on-brand content that resonates with your target audience" },
      { title: "Community Management", description: "We actively engage with your audience, respond to comments, and build relationships" },
      { title: "Performance Optimization", description: "Continuous monitoring and optimization based on analytics and performance data" },
    ],
    benefits: [
      "Build brand awareness and recognition",
      "Generate qualified leads consistently",
      "Establish thought leadership in your industry",
      "Create a loyal community around your brand",
      "Drive traffic to your website",
    ],
    faqs: [
      { q: "How often will you post?", a: "Posting frequency is tailored to your goals, audience, and platform mix." },
      { q: "Do you create the content?", a: "Yes, our team handles all content creation including graphics, copy, and video editing." },
      { q: "Which platforms do you manage?", a: "We manage all major platforms: Facebook, Instagram, LinkedIn, Twitter, and TikTok." },
    ],
  },
  "paid-advertising": {
    process: [
      { title: "Campaign Strategy", description: "Define objectives, target audience, and budget allocation across platforms" },
      { title: "Creative Development", description: "Design compelling ad creatives and copy that drive action" },
      { title: "Launch & Monitor", description: "Deploy campaigns and monitor performance in real-time" },
      { title: "Optimize & Scale", description: "Continuously test and optimize for maximum ROI, scaling what works" },
    ],
    benefits: [
      "Reach your ideal customers with precision targeting",
      "Scale your business profitably",
      "Track every dollar spent with detailed analytics",
      "Reduce customer acquisition costs",
      "Generate consistent, predictable revenue",
    ],
    faqs: [
      { q: "What's the minimum ad budget?", a: "Your ideal budget depends on your goals, market, and platform mix, and we guide you toward a realistic plan." },
      { q: "How quickly will I see results?", a: "Timelines depend on your goals and market, but we focus on building momentum early and improving performance continuously." },
      { q: "Do you guarantee results?", a: "We do not promise fixed numbers. We build each campaign around clear goals, careful optimization, and transparent reporting." },
    ],
  },
  "brand-strategy": {
    process: [
      { title: "Brand Discovery", description: "Deep dive into your business, values, and target market" },
      { title: "Strategy Development", description: "Create positioning, messaging, and visual identity guidelines" },
      { title: "Design & Creation", description: "Develop logo, color palette, typography, and brand assets" },
      { title: "Implementation", description: "Roll out your new brand across all touchpoints" },
    ],
    benefits: [
      "Stand out in a crowded marketplace",
      "Command premium pricing",
      "Build customer loyalty and trust",
      "Create consistent brand experience",
      "Attract your ideal customers",
    ],
    faqs: [
      { q: "How long does branding take?", a: "Branding timelines depend on the scope, feedback cycle, and deliverables, and we set clear milestones before work begins." },
      { q: "What's included in branding?", a: "Logo, color palette, typography, brand guidelines, and marketing collateral templates." },
      { q: "Can you rebrand an existing business?", a: "Absolutely! We specialize in both new brands and rebranding established businesses." },
    ],
  },
  "web-app-development": {
    process: [
      { title: "Discovery & Planning", description: "Understand your requirements, users, and business goals" },
      { title: "Design & Prototyping", description: "Create wireframes and high-fidelity designs for approval" },
      { title: "Development", description: "Build your platform using modern, scalable technologies" },
      { title: "Testing & Launch", description: "Rigorous testing followed by deployment and training" },
    ],
    benefits: [
      "Convert more visitors into customers",
      "Provide seamless user experience",
      "Scale without technical limitations",
      "Integrate with your existing tools",
      "Own your platform completely",
    ],
    faqs: [
      { q: "How long does development take?", a: "Development timelines vary based on complexity, integrations, and approval flow, and we define the roadmap upfront." },
      { q: "Do you provide hosting?", a: "We can recommend hosting solutions and handle setup, or work with your existing provider." },
      { q: "Will I be able to update content?", a: "Yes, we build user-friendly CMS systems so you can easily update content yourself." },
    ],
  },
};

function getDefaultServiceDetails(service: { title: string; features: string[]; result: string }): ServiceDetails {
  const features = service.features.slice(0, 4);

  return {
    process: [
      {
        title: 'Discovery & Goal Alignment',
        description: `We assess your current position and define a clear strategy for ${service.title.toLowerCase()}.`,
      },
      {
        title: 'Implementation',
        description: 'Our team executes the roadmap with measurable milestones and transparent communication.',
      },
      {
        title: 'Optimization',
        description: 'We continuously refine performance using real-world data and testing.',
      },
      {
        title: 'Scale',
        description: 'Once the foundation is proven, we scale what works to maximize business impact.',
      },
    ],
    benefits: features.length > 0 ? features : [service.result],
    faqs: [
      {
        q: `How do you approach ${service.title.toLowerCase()} projects?`,
        a: 'We start with strategy, implement in focused phases, and optimize using measurable KPIs.',
      },
      {
        q: 'How long does it take to see results?',
        a: 'Timelines vary by scope, but we define milestones upfront and report progress regularly.',
      },
      {
        q: 'Can this be customized for my business?',
        a: 'Yes. Every engagement is tailored to your goals, budget, and operational needs.',
      },
    ],
  };
}

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = SERVICES.find(s => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const details = serviceDetails[slug || ''] || getDefaultServiceDetails(service);

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/services"
          className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 mb-8 transition font-medium"
        >
          <FiArrowLeft />
          <span>Back to Services</span>
        </Link>

        {/* Hero Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block bg-primary-100 text-primary-700 px-4 py-2 rounded-lg text-sm font-semibold mb-4">
              {service.title}
            </div>
            <h1 className="text-5xl font-bold mb-6 text-dark-900">
              {service.description}
            </h1>
            <div className="bg-gradient-to-br from-primary-50 to-primary-100/50 p-6 rounded-xl border-l-4 border-primary-600">
              <p className="font-semibold text-lg text-dark-900">
                {service.result}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-dark-800 to-dark-900 text-white p-8 rounded-2xl"
          >
            <h2 className="text-3xl font-bold mb-6">What's Included</h2>
            <ul className="space-y-4">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-start space-x-3">
                  <FiCheck className="text-2xl flex-shrink-0 mt-1 text-accent-500" />
                  <span className="text-lg">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Our Process */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold mb-8 text-center text-dark-900">Our Process</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {details.process.map((step: ProcessStep, idx: number) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-primary-600 font-bold text-xl">{idx + 1}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-dark-900">{step.title}</h3>
                <p className="text-dark-600">{step.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 bg-dark-50 rounded-2xl p-12"
        >
          <h2 className="text-4xl font-bold mb-8 text-center text-dark-900">Key Benefits</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {details.benefits.map((benefit: string, idx: number) => (
              <div key={idx} className="flex items-start space-x-3">
                <FiCheck className="text-primary-600 text-xl flex-shrink-0 mt-1" />
                <span className="text-lg text-dark-700">{benefit}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* FAQs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold mb-8 text-center text-dark-900">Frequently Asked Questions</h2>
          <div className="space-y-4 max-w-3xl mx-auto">
            {details.faqs.map((faq: FAQItem, idx: number) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <h3 className="text-lg font-bold mb-2 text-dark-900">{faq.q}</h3>
                <p className="text-dark-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-dark-50 rounded-2xl p-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-4 text-dark-900">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-dark-600 mb-8">
            Schedule a free consultation to discuss how {service.title.toLowerCase()} can drive growth for your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg">Book Your Free Strategy Session</Button>
            </Link>
            <Link to="/case-studies">
              <Button variant="outline" size="lg">View Case Studies</Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
