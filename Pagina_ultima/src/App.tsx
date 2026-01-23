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

// NUEVAS PÁGINAS
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

const App: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<
    'home' | 'services' | 'about' | 'contact' | 'privacy' | 'terms'
  >('home');

  const navigateTo = (page: 'home' | 'services' | 'about' | 'contact' | 'privacy' | 'terms') => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar 
        onContactClick={() => navigateTo('contact')} 
        onNavigate={navigateTo}
        currentPage={currentPage}
      />
      
      <main className="flex-grow">
        {currentPage === 'home' && (
          <>
            <Hero onNavigate={navigateTo} />
            <ServicesOverview />
            <Stats />
            <AboutPreview />
            <Logos />
          </>
        )}
        
        {currentPage === 'services' && <ServicesDetail onContactClick={() => navigateTo('contact')} />}
        {currentPage === 'about' && <AboutDetail onContactClick={() => navigateTo('contact')} onNavigate={navigateTo} />}
        {currentPage === 'contact' && <ContactDetail />}
        {currentPage === 'privacy' && <Privacy />}
        {currentPage === 'terms' && <Terms />}
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
