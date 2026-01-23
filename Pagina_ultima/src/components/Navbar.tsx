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
    { name: 'Servicios', id: 'services' as const },
    { name: 'Nosotros', id: 'about' as const },
    { name: 'Contacto', id: 'contact' as const },
  ];

  const handleNavClick = (page: 'home' | 'services' | 'about' | 'contact') => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled || currentPage !== 'home' 
        ? 'bg-white shadow-md py-3' 
        : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo - Izquierda */}
          <div className="flex-1 flex justify-start">
            <button 
              onClick={() => handleNavClick('home')} 
              className="flex-shrink-0 flex items-center transition-transform hover:scale-105"
            >
              <img 
                alt="BlackTI Logo" 
                className={`h-11 w-auto transition-all ${isScrolled || currentPage !== 'home' ? '' : 'brightness-0 invert'}`} 
                src="https://www.blackti.cl/wp-content/uploads/2021/10/logo-black-ti.png" 
              />
            </button>
          </div>

          {/* Menú Escritorio - Centrado y con Estilo Referencia */}
          <div className="hidden lg:flex items-center justify-center space-x-12 flex-[2]">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`relative text-[11px] font-bold uppercase tracking-[0.25em] transition-all duration-300 ${
                  currentPage === link.id 
                    ? 'text-blue-600' 
                    : isScrolled || currentPage !== 'home' 
                      ? 'text-slate-600 hover:text-blue-600' 
                      : 'text-slate-300 hover:text-white' // Gris suave en lugar de blanco puro
                }`}
              >
                {link.name}
                {currentPage === link.id && (
                  <span className="absolute -bottom-2 left-0 h-0.5 w-full bg-blue-600 rounded-full"></span>
                )}
              </button>
            ))}
          </div>
          
          {/* Botón Derecha */}
          <div className="hidden lg:flex items-center justify-end flex-1">
            <button 
              onClick={onContactClick}
              className={`px-7 py-2.5 rounded-xl text-[11px] font-bold uppercase tracking-widest transition-all duration-300 border-2 active:scale-95 shadow-xl ${
                isScrolled || currentPage !== 'home'
                  ? 'bg-transparent border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white shadow-blue-600/10'
                  : 'bg-transparent border-white/40 text-white hover:bg-white hover:text-blue-600 shadow-black/20'
              }`}
            >
              Empezar Proyecto
            </button>
          </div>

          {/* Botón Móvil */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={isScrolled || currentPage !== 'home' ? 'text-slate-900' : 'text-white'}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú Móvil */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 shadow-2xl animate-in slide-in-from-top duration-300">
          <div className="px-6 pt-4 pb-8 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`block w-full text-left px-4 py-4 rounded-xl text-[11px] font-bold uppercase tracking-widest ${
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
              className="block w-full text-center border-2 border-blue-600 text-blue-600 px-4 py-4 rounded-xl text-[11px] font-bold uppercase tracking-widest mt-4"
            >
              Empezar Proyecto
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
