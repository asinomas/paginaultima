import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onContactClick: () => void;
  onNavigate: (page: 'home' | 'services' | 'about' | 'contact') => void;
  currentPage: 'home' | 'services' | 'about' | 'contact';
}

const Navbar: React.FC<NavbarProps> = ({ onContactClick, onNavigate, currentPage }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 z-[80] w-full transition-all duration-300 ${scrolled ? 'bg-brand-dark/90 py-3 backdrop-blur-xl shadow-2xl border-b border-white/5' : 'bg-transparent py-6'}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
        <div className="flex items-center">
          <button onClick={() => onNavigate('home')} className="focus:outline-none flex items-center group">
            <img 
              alt="BlackTI Logo" 
              className="h-12 w-auto white-logo-filter transition-transform group-hover:scale-105" 
              src="https://www.blackti.cl/wp-content/uploads/2021/10/logo-black-ti.png" 
            />
          </button>
        </div>
        
        <nav className="hidden items-center gap-10 lg:flex">
          {[
            { id: 'home', label: 'Inicio' },
            { id: 'services', label: 'Servicios' },
            { id: 'about', label: 'Nosotros' },
            { id: 'contact', label: 'Contacto' }
          ].map((item) => (
            <button 
              key={item.id}
              onClick={() => onNavigate(item.id as any)}
              className={`relative text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                currentPage === item.id ? 'text-primary' : 'text-slate-400 hover:text-white'
              }`}
            >
              {item.label}
              {currentPage === item.id && (
                <span className="absolute -bottom-2 left-0 h-0.5 w-full bg-primary rounded-full"></span>
              )}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button 
            onClick={onContactClick}
            className="hidden sm:block rounded-xl bg-white/5 border border-white/10 px-6 py-2 text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-primary hover:border-primary hover:scale-105 active:scale-95 shadow-xl shadow-black/20"
          >
            Empezar Proyecto
          </button>
          <button className="lg:hidden text-white">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;