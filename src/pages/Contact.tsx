import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { CONTACT_INFO } from '@/lib/constants';
import Button from '@/components/ui/Button';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const whatsappNumber = CONTACT_INFO.whatsapp.replace(/\D/g, '');
    const messageLines = [
      'New Contact Form Submission',
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      formData.phone ? `Phone: ${formData.phone}` : null,
      formData.service ? `Service: ${formData.service}` : null,
      `Message: ${formData.message}`,
    ].filter(Boolean);

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(messageLines.join('\n'))}`;

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
            Let's
            <span className="text-primary-600"> Talk Growth</span>
          </h1>
          <p className="text-xl text-dark-600 max-w-3xl mx-auto">
            Schedule your free strategy session and discover how we can drive measurable results for your business
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-dark-900">Get in Touch</h2>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="bg-primary-100 p-3 rounded-lg">
                  <FiMail className="text-primary-600 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-dark-900 mb-1">Email</h3>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="text-dark-600 hover:text-primary-600 transition">
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary-100 p-3 rounded-lg">
                  <FiPhone className="text-primary-600 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-dark-900 mb-1">Phone</h3>
                  {CONTACT_INFO.phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone}`}
                      className="block text-dark-600 hover:text-primary-600 transition"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <FaWhatsapp className="text-green-600 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-dark-900 mb-1">WhatsApp</h3>
                  <a
                    href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dark-600 hover:text-green-600 transition"
                  >
                    {CONTACT_INFO.whatsapp}
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-dark-50 to-primary-50/30 p-6 rounded-xl">
              <div className="flex items-center space-x-2 mb-3">
                <FiMapPin className="text-primary-600 text-lg" />
                <h3 className="font-bold text-dark-900">Our Location</h3>
              </div>
              <p className="text-dark-600">
                6 Roushdy Tower, Roushdy St.,
                <br />
                Roushdy, Alexandria, Egypt
              </p>
              <p className="text-sm text-dark-500 mt-3">Response time: Within 24 hours</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-2xl font-bold mb-6 text-dark-900">Request a Free Consultation</h2>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-dark-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-dark-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-dark-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                    placeholder="+20 123 456 7890"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-dark-700 mb-1">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                  >
                    <option value="">Select a service</option>
                    <option value="social-media">Social Media Management</option>
                    <option value="ad-campaigns">Paid Advertising</option>
                    <option value="branding">Brand Strategy & Marketing</option>
                    <option value="web-dev">Web & App Development</option>
                    <option value="design">Creative Design & Motion</option>
                    <option value="photography">Commercial Photography</option>
                    <option value="cybersecurity">Cybersecurity</option>
                    <option value="ai">AI & Intelligent Systems</option>
                    <option value="automation">Business Automation</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-dark-700 mb-1">
                    Tell Us About Your Project *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition resize-none"
                    placeholder="What are your business goals? What challenges are you facing?"
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Send Message
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
