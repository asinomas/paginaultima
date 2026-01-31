import React from 'react';
import { Linkedin, Phone, MessageCircle } from 'lucide-react';

interface FooterProps {
  onNavigate?: (
    page: 'home' | 'services' | 'about' | 'contact' | 'privacy' | 'terms'
  ) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer
      id="contacto"
      className="text-white py-12 md:py-16"
      style={{
        backgroundColor: '#060918',
        borderTop: '1px solid rgba(255,255,255,0.1)',
      }}
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Grid principal */}
        <div className="grid grid-cols-1 gap-10 md:gap-8 md:grid-cols-12 items-start">

          {/* Izquierda - Logo + texto + LinkedIn */}
          <div className="col-span-1 md:col-span-5 lg:col-span-4 flex flex-col items-start">
            <button
              onClick={() => onNavigate?.('home')}
              className="mb-4 md:mb-6 flex items-center transition-transform hover:scale-105"
            >
              <img
                alt="BlackTI Logo"
                className="h-6 sm:h-8 md:h-10 w-auto"
                style={{ filter: 'brightness(0) invert(1)' }}
                src="https://www.blackti.cl/wp-content/uploads/2021/10/logo-black-ti.png"
              />
            </button>

            <p className="text-[10px] sm:text-[11px] md:text-[12px] font-light text-slate-400 max-w-sm leading-relaxed tracking-tight mb-5">
              Servicio de Consultoría TI, donde nuestro valor principal se centra
              en unir la tecnología de vanguardia con el talento de las personas.
            </p>

            <a
              href="https://linkedin.com/company/blackti"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-[#135bec] transition-colors"
              aria-label="Visitar Linkedin de BlackTI"
            >
              <Linkedin size={20} />
            </a>
          </div>

          {/* Capacidades */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2 lg:col-start-6 mt-8 md:mt-0">
            <h5
              className="mb-4 md:mb-5 text-[9px] sm:text-[10px] md:text-[11px] font-light uppercase tracking-widest"
              style={{ color: '#135bec' }}
            >
              Capacidades
            </h5>
            <ul className="space-y-1.5 text-[10px] sm:text-[11px] md:text-[12px] font-light text-slate-300">
              <li><button onClick={() => onNavigate?.('services')} className="hover:text-white transition-colors">Desarrollo</button></li>
              <li><button onClick={() => onNavigate?.('services')} className="hover:text-white transition-colors">Liderazgo</button></li>
              <li><button onClick={() => onNavigate?.('services')} className="hover:text-white transition-colors">Especialidades</button></li>
            </ul>
          </div>

          {/* Grupo BlackTI / Servicios */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2 mt-8 md:mt-0">
            <h5
              className="mb-4 md:mb-5 text-[9px] sm:text-[10px] md:text-[11px] font-light uppercase tracking-widest"
              style={{ color: '#135bec' }}
            >
              Grupo BlackTI
            </h5>
            <ul className="space-y-1.5 text-[10px] sm:text-[11px] md:text-[12px] font-light text-slate-300">
              <li><button onClick={() => onNavigate?.('home')} className="hover:text-white transition-colors">Inicio</button></li>
              <li><button onClick={() => onNavigate?.('services')} className="hover:text-white transition-colors">Servicios</button></li>
              <li><button onClick={() => onNavigate?.('about')} className="hover:text-white transition-colors">Quiénes Somos</button></li>
              <li><button onClick={() => onNavigate?.('contact')} className="hover:text-white transition-colors">Contacto</button></li>
            </ul>
          </div>

          {/* Contacto – forzado a la derecha */}
          <div className="col-span-1 md:col-span-3 lg:col-span-3 lg:col-start-10 mt-8 md:mt-0">
            <h5
              className="mb-4 md:mb-5 text-[9px] sm:text-[10px] md:text-[11px] font-light uppercase tracking-widest"
              style={{ color: '#135bec' }}
            >
              Contacto
            </h5>
            <ul className="space-y-1.5 text-[10px] sm:text-[11px] md:text-[12px] font-light text-slate-300">
              <li>
                <a href="mailto:contacto@blackti.cl" className="hover:text-[#135bec] transition-colors">
                  contacto@blackti.cl
                </a>
              </li>
              <li>
                <a href="tel:+56944030716" className="hover:text-[#135bec] transition-colors">
                  +56 9 4403 0716
                </a>
              </li>
              <li>
                Av. Apoquindo 6410, Of 605<br />
                Las Condes, Santiago
              </li>
            </ul>

            <div className="flex flex-wrap items-center gap-4 mt-6">
              <span className="text-[10px] sm:text-[11px] md:text-[12px] font-light text-slate-300 whitespace-nowrap">
                o contáctanos directamente:
              </span>

              <a
                href="https://wa.me/56944030716"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-300 hover:text-[#25D366] transition-colors"
                aria-label="Contactar por WhatsApp"
              >
                <MessageCircle size={20} />
                WhatsApp
              </a>

              <a
                href="tel:+56944030716"
                className="flex items-center gap-2 text-slate-300 hover:text-[#135bec] transition-colors"
                aria-label="Llamar por teléfono"
              >
                <Phone size={20} />
                Llamar
              </a>
            </div>
          </div>
        </div>

        {/* Barra inferior */}
        <div className="mt-12 md:mt-16 border-t border-white/10 pt-6 md:pt-8 text-center md:flex md:justify-between md:text-left">
          <p className="text-[10px] sm:text-[11px] md:text-[12px] font-light text-slate-500">
            © {new Date().getFullYear()} BlackTI. Todos los derechos reservados.
          </p>

          <div className="mt-4 md:mt-0 flex justify-center gap-5 md:gap-6">
            <button
              onClick={() => onNavigate?.('privacy')}
              className="text-[10px] sm:text-[11px] md:text-[12px] font-light text-slate-500 hover:text-white transition-colors"
            >
              Privacidad
            </button>
            <button
              onClick={() => onNavigate?.('terms')}
              className="text-[10px] sm:text-[11px] md:text-[12px] font-light text-slate-500 hover:text-white transition-colors"
            >
              Términos
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
