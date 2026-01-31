/* Este layout reemplaza lo que hace App.tsx. - Ver antes Apps.tsx y luego router.tsx */

import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const MainLayout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header role="banner">
        <Navbar />
      </header>

      <main role="main" className="flex-grow">
        <Outlet />
      </main>

      <footer role="contentinfo">
        <Footer />
      </footer>

      <ScrollToTop />
    </div>
  );
};

export default MainLayout;
