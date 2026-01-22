import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation(); // Esto nos ayuda a saber en qué página estamos

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Definimos las rutas reales basadas en App.tsx
  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Nosotros', path: '/nosotros' },
    { name: 'Servicios', path: '/servicios' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled || location.pathname !== '/' 
        ? 'bg-white shadow-md py-2' 
        : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo con Link a Inicio */}
          <Link to="/" className="flex-shrink-0 flex items-center transition-transform hover:scale-105">
            <img 
              alt="BlackTI Logo" 
              className="h-10 w-auto" 
              src="https://www.blackti.cl/wp-content/uploads/2021/10/logo-black-ti.png" 
            />
          </Link>

          {/* Menú Escritorio */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-semibold transition-colors ${
                  location.pathname === link.path 
                    ? 'text-blue-600' 
                    : 'text-slate-700 hover:text-blue-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Botón de Contacto (Podemos redirigir a una página o dejarlo como acción) */}
            <Link 
              to="/servicios"
              className="bg-blue-600 text-white px-6 py-2.5 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 active:scale-95"
            >
              Empezar ahora
            </Link>
          </div>

          {/* Botón Móvil */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-900 p-2"
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
              <Link
                key={link.name}
                to={link.path}
                className={`block px-4 py-3 rounded-xl font-bold ${
                  location.pathname === link.path 
                    ? 'bg-blue-50 text-blue-600' 
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/servicios"
              className="block w-full text-center bg-blue-600 text-white px-4 py-4 rounded-xl font-bold mt-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Empezar ahora
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
