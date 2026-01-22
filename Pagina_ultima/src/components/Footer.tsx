import React from 'react';

const Footer: React.FC = () => {
  // Función para scroll suave interna
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Si no encuentra el ID (por si estamos en otra ruta), redirige al inicio
      window.location.href = `/${id === 'inicio' ? '' : '#' + id}`;
    }
  };

  return (
    <footer id="footer" className="bg-white text-slate-900 border-t border-slate-100 py-16">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 items-start">
          
          {/* Columna Logo y Descripción */}
          <div className="col-span-1 md:col-span-6 lg:col-span-5 flex flex-col items-start">
            <button onClick={() => scrollToSection('inicio')} className="mb-6 focus:outline-none flex items-center transition-opacity hover:opacity-80">
              <img 
                alt="BlackTI Logo" 
                className="h-12 w-auto" 
                src="https://www.blackti.cl/wp-content/uploads/2021/10/logo-black-ti.png" 
              />
            </button>
            <p className="text-sm font-normal text-slate-500 max-w-sm leading-relaxed tracking-tight">
              Servicio de Consultoría TI global, donde nuestro valor principal se centra en unir la tecnología de vanguardia con el Talento Humano.
            </p>
          </div>

          {/* Columna Capacidades */}
          <div className="md:col-span-3 lg:col-span-3 lg:ml-auto">
            <h5 className="mb-6 text-xs font-bold uppercase tracking-widest text-slate-900">Capacidades</h5>
            <ul className="space-y-4 text-sm text-slate-600 font-medium">
              <li><button onClick={() => scrollToSection('servicios')} className="hover:text-blue-600 transition-colors">Arquitectura</button></li>
              <li><button onClick={() => scrollToSection('servicios')} className="hover:text-blue-600 transition-colors">Desarrollo</button></li>
              <li><button onClick={() => scrollToSection('servicios')} className="hover:text-blue-600 transition-colors">Infraestructura Cloud</button></li>
            </ul>
          </div>

          {/* Columna Navegación */}
          <div className="md:col-span-3 lg:col-span-3 lg:ml-auto">
            <h5 className="mb-6 text-xs font-bold uppercase tracking-widest text-slate-900">Grupo BlackTI</h5>
            <ul className="space-y-4 text-sm text-slate-600 font-medium">
              <li><button onClick={() => scrollToSection('inicio')} className="hover:text-blue-600 transition-colors">Inicio</button></li>
              <li><button onClick={() => scrollToSection('servicios')} className="hover:text-blue-600 transition-colors">Servicios</button></li>
              <li><button onClick={() => scrollToSection('nosotros')} className="hover:text-blue-600 transition-colors">Nosotros</button></li>
              <li><button onClick={() => scrollToSection('contacto')} className="hover:text-blue-600 transition-colors">Contacto</button></li>
            </ul>
          </div>
        </div>

        {/* Barra Inferior de Copyright */}
        <div className="mt-16 border-t border-slate-100 pt-8 text-center md:flex md:justify-between md:text-left">
          <p className="text-xs font-medium text-slate-500">
            © {new Date().getFullYear()} BlackTI Global Consulting Group. Todos los derechos reservados.
          </p>
          <div className="mt-4 flex justify-center gap-6 md:mt-0">
            <a className="text-xs font-medium text-slate-500 hover:text-blue-600 transition-colors" href="#">Privacidad</a>
            <a className="text-xs font-medium text-slate-500 hover:text-blue-600 transition-colors" href="#">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
