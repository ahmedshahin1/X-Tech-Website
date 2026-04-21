import { Link } from "react-router-dom";
import { FiMail, FiPhone, FiLinkedin, FiFacebook, FiInstagram } from "react-icons/fi";
import { FaTiktok, FaThreads } from "react-icons/fa6";
import { CONTACT_INFO } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-dark-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-xl font-bold mb-4">
              X Tech <span className="text-primary-500">Agency</span>
            </h3>
            <p className="text-sm mb-4">
              Your strategic partner in digital transformation. We deliver measurable results that drive business growth.
            </p>
            <div className="flex space-x-4">
              <a 
                href={CONTACT_INFO.social.facebook} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary-400 transition"
                aria-label="Facebook"
              >
                <FiFacebook size={20} />
              </a>
              <a 
                href={CONTACT_INFO.social.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary-400 transition"
                aria-label="Instagram"
              >
                <FiInstagram size={20} />
              </a>
              <a 
                href={CONTACT_INFO.social.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary-400 transition"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={20} />
              </a>
              <a 
                href={CONTACT_INFO.social.tiktok} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary-400 transition"
                aria-label="TikTok"
              >
                <FaTiktok size={20} />
              </a>
              <a 
                href={CONTACT_INFO.social.threads} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary-400 transition"
                aria-label="Threads"
              >
                <FaThreads size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-primary-400 transition">Home</Link></li>
              <li><Link to="/about-info" className="hover:text-primary-400 transition">About</Link></li>
              <li><Link to="/services" className="hover:text-primary-400 transition">Services</Link></li>
              <li><Link to="/contact" className="hover:text-primary-400 transition">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><span className="hover:text-primary-400 transition">Social Media Management</span></li>
              <li><span className="hover:text-primary-400 transition">Paid Ads (Meta & Google)</span></li>
              <li><span className="hover:text-primary-400 transition">Brand Identity & Logo</span></li>
              <li><span className="hover:text-primary-400 transition">Content Creation</span></li>
              <li><span className="hover:text-primary-400 transition">SEO</span></li>
              <li><span className="hover:text-primary-400 transition">Mobile App Development</span></li>
              <li><span className="hover:text-primary-400 transition">Website Development</span></li>
              <li><span className="hover:text-primary-400 transition">AI Automations</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2">
                <FiMail />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-primary-400 transition">
                  {CONTACT_INFO.email}
                </a>
              </li>
              {CONTACT_INFO.phones.map((phone) => (
                <li key={phone} className="flex items-center space-x-2">
                  <FiPhone />
                  <a href={`tel:${phone}`} className="hover:text-primary-400 transition">
                    {phone}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-dark-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} X Tech Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
