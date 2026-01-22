import React, { useState } from 'react';
import Navbar from './components/Navbar';
import AboutDetail from './components/AboutDetail';

// Mock de componentes para que no falle si no existen los archivos
const Hero = ({ onConsultingClick }: any) => <section className="pt-32 pb-20 px-4 text-center bg-brand-dark text-white"><h1>Inicio</h1><button onClick={onConsultingClick}>Contacto</button></section>;
const ServicesOverview = () => <div className="p-20 text-center">Servicios Vista Previa</div>;
const ServicesDetail = ({ onContactClick }: any) => <div className="p-32 text-center">Detalle de Servicios</div>;
const ContactDetail = () => <div className="p-32 text-center">Formulario de Contacto</div>;

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'services' | 'about' | 'contact'>('home');

  const navigateTo = (page: 'home' | 'services' | 'about' | 'contact') => {
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
            <Hero onConsultingClick={() => navigateTo('contact')} />
            <ServicesOverview />
            {/* Aquí puedes añadir tus otros componentes como Stats, Logos, etc. */}
          </>
        )}
        
        {currentPage === 'services' && (
          <ServicesDetail onContactClick={() => navigateTo('contact')} />
        )}

        {currentPage === 'about' && (
          <AboutDetail 
            onContactClick={() => navigateTo('contact')} 
            onNavigate={navigateTo} 
          />
        )}

        {currentPage === 'contact' && (
          <ContactDetail />
        )}
      </main>
      
      <footer className="bg-slate-900 text-white p-10 text-center">
        BlackTI 2026
      </footer>
    </div>
  );
};

export default App;
