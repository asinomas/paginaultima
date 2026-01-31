/**
 * Router futuro de la aplicación (ver App.tsx y modificar lo correspondiente) 
 *
 * Cuando se active el routing real:
 * - App.tsx dejará de manejar navegación por estado
 * - Se eliminará navigateTo / currentPage
 * - Cada ruta tendrá URL real (SEO + UX)
 *
 * Rutas definidas:
 * /                  → Home (scroll interno)
 * /servicios         → ServicesDetail
 * /quienes-somos     → AboutDetail
 * /contacto          → ContactDetail
 * /terminos          → Terms
 * /privacidad        → Privacy
 */

import React, { Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';


// Layout base (Navbar + Footer + ScrollToTop)
import Layout from './layouts/MainLayout';


// Páginas
import Home from './pages/Home';
import ServicesDetail from './components/ServicesDetail';
import AboutDetail from './components/AboutDetail';
import ContactDetail from './components/ContactDetail';
import Terms from './components/Terms';
import Privacy from './components/Privacy';


// Router centralizado
export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'servicios',
        element: <ServicesDetail />,
      },
      {
        path: 'quienes-somos',
        element: <AboutDetail />,
      },
      {
        path: 'contacto',
        element: <ContactDetail />,
      },
      {
        path: 'terminos',
        element: <Terms />,
      },
      {
        path: 'privacidad',
        element: <Privacy />,
      },
    ],
  },
]);
