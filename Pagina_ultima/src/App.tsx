import React, { useState, useEffect } from 'react';
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
  const [activeSection, setActiveSection] = useState<'home' | 'services' | 'about' | 'contact'>('home');

  // Detectar qué sección está visible mientras haces scroll
  useEffect(() => {
    if (currentPage !== 'home') return; // Solo funciona en la página home

    const handleScroll = () => {
      const sections = [
        { id: 'home', element: document.getElementById('inicio') },
        { id: 'services', element: document.getElementById('servicios') },
        { id: 'about', element: document.getElementById('quienes-somos') },
        { id: 'contact', element: document.getElementById('contacto') },
      ];

      const scrollPosition = window.scrollY + 200; // Offset para activar antes

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element) {
          const top = section.element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(section.id as 'home' | 'services' | 'about' | 'contact');
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Ejecutar al cargar
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage]);

  const navigateTo = (page: 'home' | 'services' | 'about' | 'contact' | 'terms' | 'privacy') => {
    if (page === 'terms' || page === 'privacy') {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (page === 'home') {
      setCurrentPage('home');
      setActiveSection('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (page === 'services') {
      setCurrentPage('home');
      const servicesSection = document.getElementById('servicios');
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (page === 'about') {
      setCurrentPage('home');
      const aboutSection = document.getElementById('quienes-somos');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (page === 'contact') {
      setCurrentPage('home');
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
        currentPage={currentPage === 'home' ? activeSection : currentPage} 
      />
      
      <main className="flex-grow">
        {currentPage === 'home' && (
          <>
            {/* INICIO */}
            <div id="inicio">
              <Hero onNavigate={navigateTo} />
              <ServicesOverview />
              <Stats />
              <AboutPreview />
              <Logos />
            </div>
            
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
