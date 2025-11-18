import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Hero';
import About from './components/About';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Contact from './components/Contact';
import Testimonials from './components/Testimonial';
import Portfolio from './components/Portofolio';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfUse from './components/TermsOfUse';
import Sitemap from './components/Sitemap';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Handle hash-based navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || 'home';
      setCurrentPage(hash);
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Render different pages based on currentPage
  if (currentPage === 'privacy') {
    return (
      <>
        <Navbar />
        <PrivacyPolicy />
        <Footer />
        <ScrollToTop />
      </>
    );
  }

  if (currentPage === 'terms') {
    return (
      <>
        <Navbar />
        <TermsOfUse />
        <Footer />
        <ScrollToTop />
      </>
    );
  }

  if (currentPage === 'sitemap') {
    return (
      <>
        <Navbar />
        <Sitemap />
        <Footer />
        <ScrollToTop />
      </>
    );
  }

  // Default: render home page with all sections
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default App
