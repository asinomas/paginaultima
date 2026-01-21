import React from 'react';
import ReactDOM from 'react-dom/client';
import AIConsultant from './components/AIConsultant';
import SEO from './components/SEO';
import { HelmetProvider } from 'react-helmet-async';

const rootElement = document.getElementById('root-ai');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <HelmetProvider>
        <SEO 
          title="Mi Página - Consultor IA" 
          description="Resuelve tus dudas en tiempo real con nuestra inteligencia artificial." 
        />
        <AIConsultant />
      </HelmetProvider>
    </React.StrictMode>
  );
}
