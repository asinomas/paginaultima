import React from 'react';

interface FooterProps {
  onNavigate: (page: 'home' | 'services' | 'about' | 'contact') => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-900 text-white py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Logo en el Footer */}
          <div className="flex flex-col items-center md:items-start">
            <img 
              src="https://www.blackti.cl/wp-content/uploads/2021/10/logo-black-ti.png" 
              alt="BlackTI Logo" 
              className="h-10 w-auto brightness-0 invert mb-4" // Esto hace que el logo se vea blanco
            />
            <p className="text-slate-400 text-sm max-w-xs text-center md:text-left">
              Consultoría tecnológica de alto nivel para empresas que buscan escala y seguridad.
            </p>
          </div>

          {/* Enlaces Rápidos */}
          <div className="flex gap-8 text-sm font-medium">
            <button onClick={() => onNavigate('home')} className="hover:text-blue-400 transition-colors">Inicio</button>
            <button onClick={() => onNavigate('about')} className="hover:text-blue-400 transition-colors">Nosotros</button>
            <button onClick={() => onNavigate('services')} className="hover:text-blue-400 transition-colors">Servicios</button>
            <button onClick={() => onNavigate('contact')} className="hover:text-blue-400 transition-colors">Contacto</button>
          </div>

          {/* Copyright */}
          <div className="text-slate-500 text-xs">
            © {new Date().getFullYear()} BlackTI Global. Todos los derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
