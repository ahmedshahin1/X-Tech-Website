import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom'
import Navigation from './components/layout/Navigation'
import Footer from './components/layout/Footer'
import WhatsAppButton from './components/ui/WhatsAppButton'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'
import Portfolio from './pages/Portfolio'
import CaseStudies from './pages/CaseStudies'
import Contact from './pages/Contact'
import Pricing from './pages/Pricing'
import Blog from './pages/Blog'
import ComingSoon from './pages/ComingSoon'
import { LanguageProvider, useLanguage } from './context/LanguageContext'
import { translatePage } from './lib/translatePage'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function LanguageEffects() {
  const { pathname } = useLocation()
  const { language } = useLanguage()

  useEffect(() => {
    const isArabic = language === 'ar'

    document.documentElement.lang = language
    document.documentElement.dir = isArabic ? 'rtl' : 'ltr'
    document.body.classList.toggle('rtl-layout', isArabic)
    document.body.setAttribute('dir', isArabic ? 'rtl' : 'ltr')

    translatePage(document.body, language)
  }, [language, pathname])

  return null
}

function AppShell() {
  console.log('App component rendering...')

  return (
    <Router>
      <ScrollToTop />
      <LanguageEffects />
      <div className="flex flex-col min-h-screen bg-white">
        <Navigation />
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Navigate to="/about-info" replace />} />
            <Route path="/about-info" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/dashboard" element={<ComingSoon page="Next Phase Dashboard" />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  )
}

function App() {
  return (
    <LanguageProvider>
      <AppShell />
    </LanguageProvider>
  )
}

export default App
