import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { SERVICES } from "@/lib/constants";
import { useLanguage } from "@/context/LanguageContext";

function GlobeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a15 15 0 0 1 0 18" />
      <path d="M12 3a15 15 0 0 0 0 18" />
    </svg>
  );
}

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { language, setLanguage } = useLanguage();
  const isArabic = language === "ar";
  const languageLabel = isArabic ? "عربي" : "EN";
  const navLabels = {
    home: isArabic ? "الرئيسية" : "Home",
    about: isArabic ? "من نحن" : "About",
    services: isArabic ? "خدماتنا" : "Services",
    contact: isArabic ? "تواصل معنا" : "Contact",
    bookCall: isArabic ? "احجز مكالمة" : "Book a Call",
    allServices: isArabic ? "كل الخدمات" : "All Services",
  };

  const isActive = (path: string) => location.pathname === path;

  const navLinkClass = (path: string) =>
    `relative px-3 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
      isActive(path)
        ? "text-primary-700 bg-primary-50 ring-1 ring-primary-100"
        : "text-dark-700 hover:text-primary-700 hover:bg-primary-50/60"
    }`;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`relative mt-3 mb-2 h-[72px] px-3 sm:px-4 rounded-2xl border border-white/70 bg-white/85 backdrop-blur-md shadow-[0_10px_30px_rgba(15,23,42,0.08)] flex items-center ${isArabic ? "flex-row-reverse xl:flex-row" : ""}`}
        >
          <Link
            to="/"
            className={`flex items-center shrink-0 xl:absolute xl:top-1/2 xl:-translate-y-1/2 ${isArabic ? "xl:right-4" : "xl:left-4"}`}
            aria-label="X Tech Agency Home"
          >
            <img
              src="/xtech_logo.jpg"
              alt="X Tech Agency"
              className="h-11 w-auto rounded-md object-contain"
            />
          </Link>

          <div
            className="absolute left-1/2 hidden -translate-x-1/2 xl:flex items-center justify-center gap-0.5 px-1"
            data-no-translate="true"
          >
            <Link to="/" className={navLinkClass("/")}>
              {navLabels.home}
            </Link>
            <Link to="/about-info" className={navLinkClass("/about-info")}>
              {navLabels.about}
            </Link>

            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className={`flex items-center space-x-1 px-3 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  servicesOpen
                    ? "text-primary-700 bg-primary-50 ring-1 ring-primary-100"
                    : "text-dark-700 hover:text-primary-700 hover:bg-primary-50/60"
                }`}
              >
                <span>{navLabels.services}</span>
                <FiChevronDown className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-2xl py-2 border border-gray-100">
                  <Link
                    to="/services"
                    onClick={() => setServicesOpen(false)}
                    className="block px-4 py-3 text-sm font-semibold text-dark-800 hover:bg-primary-50 hover:text-primary-600 border-b border-gray-100"
                  >
                    {navLabels.allServices}
                  </Link>
                  {SERVICES.map((service) => (
                    <Link
                      key={service.id}
                      to={`/services/${service.slug}`}
                      onClick={() => setServicesOpen(false)}
                      className="block px-4 py-2 text-sm text-dark-700 hover:bg-primary-50 hover:text-primary-600"
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link to="/contact" className={navLinkClass("/contact")}>
              {navLabels.contact}
            </Link>
          </div>

          <div
            className={`hidden xl:flex items-center space-x-2 shrink-0 xl:absolute xl:top-1/2 xl:-translate-y-1/2 ${isArabic ? "xl:left-4" : "xl:right-4"}`}
            data-no-translate="true"
          >
            <button
              onClick={() => setLanguage(isArabic ? "en" : "ar")}
              className="inline-flex items-center gap-2 rounded-full border border-dark-200/80 px-4 py-2 text-sm font-semibold text-dark-700 transition hover:border-primary-300 hover:text-primary-700"
              aria-label={language === "en" ? "Switch to Arabic" : "Switch to English"}
            >
              <GlobeIcon />
              <span>{languageLabel}</span>
            </button>

            <Link
              to="/contact"
              className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-4 py-2.5 rounded-xl hover:shadow-lg hover:-translate-y-0.5 transition-all font-semibold text-sm whitespace-nowrap"
            >
              {navLabels.bookCall}
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`xl:hidden text-dark-700 p-2 rounded-lg hover:bg-primary-50 transition ${isArabic ? "mr-auto" : "ml-auto"}`}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="xl:hidden px-4 sm:px-6">
          <div
            className="mb-3 bg-white/95 backdrop-blur-md border border-gray-100 rounded-2xl shadow-xl px-4 py-4 space-y-2"
            data-no-translate="true"
          >
            <Link
              to="/"
              className="block px-3 py-2 rounded-lg text-dark-700 hover:text-primary-700 hover:bg-primary-50 font-semibold transition"
              onClick={() => setIsOpen(false)}
            >
              {navLabels.home}
            </Link>
            <Link
              to="/about-info"
              className="block px-3 py-2 rounded-lg text-dark-700 hover:text-primary-700 hover:bg-primary-50 font-semibold transition"
              onClick={() => setIsOpen(false)}
            >
              {navLabels.about}
            </Link>
            <Link
              to="/services"
              className="block px-3 py-2 rounded-lg text-dark-700 hover:text-primary-700 hover:bg-primary-50 font-semibold transition"
              onClick={() => setIsOpen(false)}
            >
              {navLabels.services}
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 rounded-lg text-dark-700 hover:text-primary-700 hover:bg-primary-50 font-semibold transition"
              onClick={() => setIsOpen(false)}
            >
              {navLabels.contact}
            </Link>
            <button
              onClick={() => setLanguage(isArabic ? "en" : "ar")}
              className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full border border-dark-200/80 px-4 py-2 text-sm font-semibold text-dark-700 transition hover:border-primary-300 hover:text-primary-700"
              aria-label={language === "en" ? "Switch to Arabic" : "Switch to English"}
            >
              <GlobeIcon />
              <span>{languageLabel}</span>
            </button>
            <Link
              to="/contact"
              className="block w-full mt-1 bg-gradient-to-r from-primary-600 to-primary-700 text-white px-6 py-2.5 rounded-xl font-semibold text-center"
              onClick={() => setIsOpen(false)}
            >
              {navLabels.bookCall}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
