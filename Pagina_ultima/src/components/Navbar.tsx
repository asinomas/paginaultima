import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onNavigate: (page: 'home' | 'services' | 'about' | 'contact') => void;
  onContactClick: () => void;
  currentPage: string;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, onContactClick, currentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', id: 'home' as const },
    { name: 'Nosotros', id: 'about' as const },
    { name: 'Servicios', id: 'services' as const },
  ];

  const handleNavClick = (page: 'home' | 'services' | 'about' | 'contact') => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled || currentPage !== 'home' 
        ? 'bg-white shadow-md py-2' 
        : 'bg-transparent py-4 text-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo - Al hacer clic vuelve al inicio */}
          <button 
            onClick={() => handleNavClick('home')} 
            className="flex-shrink-0 flex items-center transition-transform hover:scale-105"
          >
            <img 
              alt="BlackTI Logo" 
              className={`h-10 w-auto ${isScrolled || currentPage !== 'home' ? '' : 'brightness-0 invert'}`} 
              src="https://www.blackti.cl/wp-content/uploads/2021/10/logo-black-ti.png" 
            />
          </button>

          {/* Menú Escritorio */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`font-semibold transition-colors ${
                  currentPage === link.id 
                    ? 'text-blue-600' 
                    : isScrolled || currentPage !== 'home' ? 'text-slate-700 hover:text-blue-600' : 'text-white/90 hover:text-white'
                }`}
              >
                {link.name}
              </button>
            ))}
            
            <button 
              onClick={onContactClick}
              className="bg-blue-600 text-white px-6 py-2.5 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 active:scale-95"
            >
              Contacto
            </button>
          </div>

          {/* Botón Móvil */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={isScrolled || currentPage !== 'home' ? 'text-slate-900' : 'text-white'}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú desplegable Móvil */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 shadow-2xl animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`block w-full text-left px-4 py-3 rounded-xl font-bold ${
                  currentPage === link.id 
                    ? 'bg-blue-50 text-blue-600' 
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={onContactClick}
              className="block w-full text-center bg-blue-600 text-white px-4 py-4 rounded-xl font-bold mt-4"
            >
              Contacto
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
