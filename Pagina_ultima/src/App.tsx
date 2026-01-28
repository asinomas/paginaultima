import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesOverview from './components/Services';
import Stats from './components/Stats';
import AboutPreview from './components/About';
import Logos from './components/Logos';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import AIConsultant from './components/AIConsultant';
import ServicesDetail from './components/ServicesDetail';
import AboutDetail from './components/AboutDetail';
import ContactDetail from './components/ContactDetail';
import Terms from './components/Terms';
import Privacy from './components/Privacy';




const App: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<'home' | 'terms' | 'privacy'>('home');

  const navigateTo = (page: 'home' | 'services' | 'about' | 'contact' | 'terms' | 'privacy') => {
    if (page === 'terms' || page === 'privacy') {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (page === 'home') {
      setCurrentPage('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (page === 'services') {
      // Scroll a la sección de servicios
      const servicesSection = document.getElementById('servicios');
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (page === 'about') {
      // Scroll a la sección quienes somos
      const aboutSection = document.getElementById('quienes-somos');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (page === 'contact') {
      // Scroll a la sección contacto
      const contactSection = document.getElementById('contacto');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contacto');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar 
        onContactClick={scrollToContact} 
        onNavigate={navigateTo} 
        currentPage="home" 
      />

      <main className="flex-grow">
        {currentPage === 'home' && (
          <>
            {/* INICIO */}
            <Hero onNavigate={navigateTo} />
            <ServicesOverview />
            <Stats />
            <AboutPreview />
            <Logos />
            
            {/* SERVICIOS */}
            <div id="servicios">
              <ServicesDetail onContactClick={scrollToContact} />
            </div>
            
            {/* QUIENES SOMOS */}
            <div id="quienes-somos">
              <AboutDetail 
                onContactClick={scrollToContact} 
                onNavigate={navigateTo} 
              />
            </div>
            
            {/* CONTACTO */}
            <div id="contacto">
              <ContactDetail />
            </div>
          </>
        )}

        {currentPage === 'terms' && <Terms onNavigate={navigateTo} />}
        {currentPage === 'privacy' && <Privacy onNavigate={navigateTo} />}     
      </main>

      <Footer onNavigate={navigateTo} />
      <ScrollToTop />

      {/* Botón Flotante del Asistente IA */}
      <button
        onClick={() => setIsChatOpen(true)}
        className="fixed bottom-8 right-8 z-40 bg-[#135bec] text-white size-16 rounded-full shadow-2xl shadow-[#135bec]/40 flex items-center justify-center hover:scale-110 active:scale-95 transition-all"
      >
        <span className="material-symbols-outlined !text-3xl">smart_toy</span>
      </button>

      <AIConsultant isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </div>
  );
};

export default App;
