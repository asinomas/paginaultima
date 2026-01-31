/* Este archivo extrae exactamente lo que estaba en currentPage === 'home'. */

import React, { Suspense } from 'react';
import Hero from '../components/Hero';
import ServicesOverview from '../components/Services';
import Stats from '../components/Stats';
import AboutPreview from '../components/About';
import ServicesDetail from '../components/ServicesDetail';
import AboutDetail from '../components/AboutDetail';
import ContactDetail from '../components/ContactDetail';

const TestimonialsSection = React.lazy(
  () => import('../components/TestimonialsSection')
);

const Home: React.FC = () => {
  return (
    <>
      <section id="inicio">
        <Hero />
        <ServicesOverview />
        <Stats />
        <AboutPreview />
      </section>

      <section id="servicios">
        <ServicesDetail />
      </section>

      <Suspense fallback={<div className="p-8 text-center">Cargando testimonios…</div>}>
        <section id="testimonials">
          <TestimonialsSection />
        </section>
      </Suspense>

      <section id="quienes-somos">
        <AboutDetail />
      </section>

      <section id="contacto">
        <ContactDetail />
      </section>
    </>
  );
};

export default Home;
