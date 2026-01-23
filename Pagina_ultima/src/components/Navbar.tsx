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
          
          {/* Logo */}
          <div className="flex-1">
            <button onClick={() => handleNavClick('home')} className="flex items-center transition-transform hover:scale-105">
              <img 
                alt="BlackTI Logo" 
                className={`h-11 w-auto ${isScrolled || currentPage !== 'home' ? '' : 'brightness-0 invert'}`} 
                src="https://www.blackti.cl/wp-content/uploads/2021/10/logo-black-ti.png" 
              />
            </button>
          </div>

          {/* Menú Escritorio - Centrado */}
          <div className="hidden lg:flex items-center justify-center space-x-12 flex-[2]">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`relative text-[11px] font-bold uppercase tracking-[0.25em] transition-all duration-300 ${
                  currentPage === link.id 
                    ? 'text-[#135bec]' 
                    : isScrolled || currentPage !== 'home' 
                      ? 'text-slate-600 hover:text-[#135bec]' 
                      : 'text-slate-300 hover:text-white'
                }`}
              >
                {link.name}
                {currentPage === link.id && (
                  <span className="absolute -bottom-2 left-0 h-0.5 w-full bg-[#135bec] rounded-full"></span>
                )}
              </button>
            ))}
          </div>
          
          {/* Botón Derecha - Lógica de Hover dual */}
          <div className="hidden lg:flex items-center justify-end flex-1">
            <button 
              onClick={onContactClick}
              className={`px-7 py-2.5 rounded-xl text-[11px] font-bold uppercase tracking-widest transition-all duration-300 border-2 active:scale-95 ${
                isScrolled || currentPage !== 'home'
                  /* CUANDO HAY SCROLL (FONDO BLANCO) -> HOVER AZUL */
                  ? 'bg-transparent border-[#135bec] text-[#135bec] hover:bg-[#135bec] hover:text-white'
                  /* EN EL INICIO (FONDO NEGRO/OSCURO) -> HOVER GRIS SLATE-50 */
                  : 'bg-transparent border-white/40 text-white hover:bg-slate-50 hover:text-slate-900 hover:border-slate-50'
              }`}
            >
              Empezar Proyecto
            </button>
          </div>

          {/* Botón Móvil */}
          <div className="lg:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className={isScrolled || currentPage !== 'home' ? 'text-slate-900' : 'text-white'}>
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú Móvil */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 shadow-2xl">
          <div className="px-6 pt-4 pb-8 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`block w-full text-left px-4 py-4 rounded-xl text-[11px] font-bold uppercase tracking-widest ${
                  currentPage === link.id ? 'bg-slate-50 text-[#135bec]' : 'text-slate-700'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
