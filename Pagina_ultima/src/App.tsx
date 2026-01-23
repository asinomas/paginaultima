import { useState } from 'react';
import Hero from './components/Hero';
import ServicesOverview from './components/ServicesOverview';
import Stats from './components/Stats';
import AboutPreview from './components/AboutPreview';
import Logos from './components/Logos';
import ServicesDetail from './components/ServicesDetail';
import AboutDetail from './components/AboutDetail';
import ContactDetail from './components/ContactDetail';
import Footer from './components/Footer';
import Privacy from './components/Privacy';
import Terms from './components/Terms';

function App() {
  // Estado de navegación
  const [currentPage, setCurrentPage] = useState<
    'home' | 'services' | 'about' | 'contact' | 'privacy' | 'terms'
  >('home');

  // Función para navegar entre páginas
  const navigateTo = (
    page: 'home' | 'services' | 'about' | 'contact' | 'privacy' | 'terms'
  ) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      {/* Contenido principal */}
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

        {currentPage === 'services' && (
          <ServicesDetail onContactClick={() => navigateTo('contact')} />
        )}

        {currentPage === 'about' && (
          <AboutDetail
            onContactClick={() => navigateTo('contact')}
            onNavigate={navigateTo}
          />
        )}

        {currentPage === 'contact' && <ContactDetail />}

        {currentPage === 'privacy' && <Privacy />}
        {currentPage === 'terms' && <Terms />}
      </main>

      {/* Footer */}
      <Footer onNavigate={navigateTo} />
    </div>
  );
}

export default App;
