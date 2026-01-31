import React, { useState, useEffect, useCallback, useRef, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesOverview from './components/Services';
import Stats from './components/Stats';
import AboutPreview from './components/About';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Carga diferida para componentes pesados
const AIConsultant = React.lazy(() => import('./components/AIConsultant'));
const TestimonialsSection = React.lazy(() => import('./components/TestimonialsSection'));

import ServicesDetail from './components/ServicesDetail';
import AboutDetail from './components/AboutDetail';
import ContactDetail from './components/ContactDetail';
import Terms from './components/Terms';
import Privacy from './components/Privacy';

// Constante para IDs de secciones (mejora 4)
const SECTION_IDS = {
  home: 'inicio',
  services: 'servicios',
  about: 'quienes-somos',
  contact: 'contacto',
} as const;

const App: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<'home' | 'terms' | 'privacy'>('home');
  const [activeSection, setActiveSection] = useState<'home' | 'services' | 'about' | 'contact'>('home');
  
  // Ref para IntersectionObserver (mejora 5)
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Detección de sección activa con IntersectionObserver (mejora 5)
  useEffect(() => {
    // Solo en página home (mejora 2 - sin typeof window check)
    if (currentPage !== 'home') return;

    // Crear IntersectionObserver
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            // Mapear ID del DOM a activeSection
            const sectionMap: Record<string, 'home' | 'services' | 'about' | 'contact'> = {
              [SECTION_IDS.home]: 'home',
              [SECTION_IDS.services]: 'services',
              [SECTION_IDS.about]: 'about',
              [SECTION_IDS.contact]: 'contact',
            };
            
            if (sectionMap[sectionId]) {
              setActiveSection(sectionMap[sectionId]);
            }
          }
        });
      },
      {
        threshold: 0.3, // 30% de la sección visible
        rootMargin: '-100px 0px -100px 0px', // Offset para mejor detección
      }
    );

    // Observar todas las secciones
    const sections = [
      document.getElementById(SECTION_IDS.home),
      document.getElementById(SECTION_IDS.services),
      document.getElementById(SECTION_IDS.about),
      document.getElementById(SECTION_IDS.contact),
    ];

    sections.forEach((section) => {
      if (section && observerRef.current) {
        observerRef.current.observe(section);
      }
    });

    // Cleanup
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [currentPage]);

  // Navegación mejorada (mejora 3)
  const navigateTo = useCallback((page: 'home' | 'services' | 'about' | 'contact' | 'terms' | 'privacy') => {
    switch (page) {
      case 'terms':
      case 'privacy':
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        break;
      case 'home':
        setCurrentPage('home');
        setActiveSection('home');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        break;
      case 'services':
        setCurrentPage('home');
        setActiveSection('services'); // Mejora 3: actualizar activeSection
        document.getElementById(SECTION_IDS.services)?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'about':
        setCurrentPage('home');
        setActiveSection('about'); // Mejora 3: actualizar activeSection
        document.getElementById(SECTION_IDS.about)?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'contact':
        setCurrentPage('home');
        setActiveSection('contact'); // Mejora 3: actualizar activeSection
        document.getElementById(SECTION_IDS.contact)?.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        console.warn(`Página no reconocida: ${page}`);
    }
  }, []);

  const scrollToContact = useCallback(() => {
    document.getElementById(SECTION_IDS.contact)?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Encabezado semántico */}
      <header role="banner">
        <Navbar 
          onContactClick={scrollToContact} 
          onNavigate={navigateTo} 
          currentPage={currentPage === 'home' ? activeSection : currentPage} 
        />
      </header>

      {/* Contenido principal con secciones semánticas */}
      <main role="main" className="flex-grow">
        {currentPage === 'home' && (
          <>
            <section id={SECTION_IDS.home} aria-labelledby="hero-heading">
              <Hero onNavigate={navigateTo} />
              <ServicesOverview />
              <Stats />
              <AboutPreview />
            </section>

            <section id={SECTION_IDS.services} aria-labelledby="services-heading">
              <ServicesDetail onContactClick={scrollToContact} />
            </section>

            {/* Testimonios con carga diferida y fallback accesible */}
            <Suspense fallback={
              <div role="status" aria-live="polite" className="flex items-center justify-center p-8">
                <span className="text-gray-600">Cargando testimonios...</span>
              </div>
            }>
              <section id="testimonials" aria-labelledby="testimonials-heading">
                <TestimonialsSection />
              </section>
            </Suspense>

            <section id={SECTION_IDS.about} aria-labelledby="about-heading">
              <AboutDetail 
                onContactClick={scrollToContact} 
                onNavigate={navigateTo} 
              />
            </section>

            <section id={SECTION_IDS.contact} aria-labelledby="contact-heading">
              <ContactDetail />
            </section>
          </>
        )}

        {currentPage === 'terms' && <Terms onNavigate={navigateTo} />}
        {currentPage === 'privacy' && <Privacy onNavigate={navigateTo} />}
      </main>

      {/* Pie de página semántico */}
      <footer role="contentinfo">
        <Footer onNavigate={navigateTo} />
      </footer>
      
      <ScrollToTop />

      {/* Botón flotante accesible */}
      <button
        onClick={() => setIsChatOpen(true)}
        aria-label="Abrir chat de asistente IA"
        aria-expanded={isChatOpen}
        className="fixed bottom-8 right-8 z-40 bg-[#135bec] text-white w-16 h-16 rounded-full shadow-2xl shadow-[#135bec]/40 flex items-center justify-center hover:scale-110 active:scale-95 transition-all"
      >
        <span className="material-symbols-outlined !text-3xl" aria-hidden="true">smart_toy</span>
      </button>

      {/* Chat con carga diferida y fallback accesible */}
      <Suspense fallback={
        <div role="status" aria-live="polite" className="flex items-center justify-center p-8">
          <span className="text-gray-600">Cargando chat...</span>
        </div>
      }>
        <AIConsultant isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
      </Suspense>
    </div>
  );
};

export default App;
