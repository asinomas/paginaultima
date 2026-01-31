import React from 'react';
import { Linkedin } from 'lucide-react';

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
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 items-start">

          {/* Columna Logo */}
          <div className="col-span-1 md:col-span-6 lg:col-span-5 flex flex-col items-start">
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

            <p className="text-[10px] sm:text-[11px] md:text-[12px] font-light text-slate-400 max-w-sm leading-relaxed tracking-tight mb-4">
              Servicio de Consultoría TI, donde nuestro valor principal se centra
              en unir la tecnología de vanguardia con el talento de las personas.
            </p>

            <a
              href="https://linkedin.com/company/blackti"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="Visitar Linkedin de BlackTI"
            >
              <Linkedin size={20} />
            </a>
          </div>

          {/* Columna Capacidades */}
          <div className="md:col-span-2 lg:col-span-2 lg:ml-auto mt-6 md:mt-0">
            <h5
              className="mb-4 md:mb-6 text-[9px] sm:text-[10px] md:text-[11px] font-light uppercase tracking-widest"
              style={{ color: '#135bec' }}
            >
              Capacidades
            </h5>
            <ul className="space-y-1 md:space-y-2 text-[10px] sm:text-[11px] md:text-[12px] font-light text-slate-300">
              <li>
                <button onClick={() => onNavigate?.('services')} className="hover:text-white transition-colors">
                  Desarrollo
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate?.('services')} className="hover:text-white transition-colors">
                  Liderazgo
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate?.('services')} className="hover:text-white transition-colors">
                  Especialidades
                </button>
              </li>
            </ul>
          </div>

          {/* Columna Grupo BlackTI */}
          <div className="md:col-span-2 lg:col-span-2 mt-6 md:mt-0">
            <h5
              className="mb-4 md:mb-6 text-[9px] sm:text-[10px] md:text-[11px] font-light uppercase tracking-widest"
              style={{ color: '#135bec' }}
            >
              Grupo BlackTI
            </h5>
            <ul className="space-y-1 md:space-y-2 text-[10px] sm:text-[11px] md:text-[12px] font-light text-slate-300">
              <li>
                <button onClick={() => onNavigate?.('home')} className="hover:text-white transition-colors">
                  Inicio
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate?.('services')} className="hover:text-white transition-colors">
                  Servicios
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate?.('about')} className="hover:text-white transition-colors">
                  Quiénes Somos
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate?.('contact')} className="hover:text-white transition-colors">
                  Contacto
                </button>
              </li>
            </ul>
          </div>

          {/* Columna Contacto - ADAPTADA AL ESTILO DE "CAPACIDADES" Y "GRUPO BLACKTI" */}
          <div className="md:col-span-3 lg:col-span-3 mt-6 md:mt-0">
            <h5
              className="mb-4 md:mb-6 text-[9px] sm:text-[10px] md:text-[11px] font-light uppercase tracking-widest"
              style={{ color: '#135bec' }}
            >
              Contacto
            </h5>
            <ul className="space-y-1 md:space-y-2 text-[10px] sm:text-[11px] md:text-[12px] font-light text-slate-300">
              <li>
                <a
                  href="mailto:contacto@blackti.cl"
                  className="hover:text-[#135bec] transition-colors"
                >
                  contacto@blackti.cl
                </a>
              </li>
              <li>
                <a
                  href="tel:+56944030716"
                  className="hover:text-[#135bec] transition-colors"
                >
                  +56 9 4403 0716
                </a>
              </li>
              <li>
                Av. Apoquindo 6410, Of 605<br />
                Las Condes, Santiago
              </li>
            </ul>

            {/* Opciones de contacto alternativas - AJUSTADO AL ESTILO CONSISTENTE */}
            <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
              <span className="text-[10px] sm:text-[11px] md:text-[12px] font-light text-slate-300">o contacta directamente:</span>
              <a 
                href="https://wa.me/56944030716" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white text-[10px] sm:text-[11px] md:text-[12px] rounded-lg hover:bg-green-600 transition-all shadow-md hover:shadow-lg"
                aria-label="Contactar por WhatsApp"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                WhatsApp
              </a>
              <a 
                href="tel:+56944030716"
                className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white text-[10px] sm:text-[11px] md:text-[12px] rounded-lg hover:bg-blue-600 transition-all shadow-md hover:shadow-lg"
                aria-label="Llamar por teléfono"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
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

          <div className="mt-4 md:mt-0 flex justify-center gap-4 md:gap-6">
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
