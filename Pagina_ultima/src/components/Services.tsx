import React from 'react';

interface ServicesProps {
  onNavigate?: (page: 'home' | 'services' | 'about' | 'contact') => void;
}

const Services: React.FC<ServicesProps> = ({ onNavigate }) => {
  const serviceItems = [
    {
      icon: 'insights',
      title: 'Consultoría Estratégica',
      description: 'Alineamos sus objetivos de negocio con las posibilidades técnicas para maximizar el ROI y la eficiencia operativa.'
    },
    {
      icon: 'terminal',
      title: 'Tecnología y Arquitectura',
      description: 'Diseño de cimientos técnicos resilientes y de alta disponibilidad que escalan perfectamente con las demandas de su empresa.'
    },
    {
      icon: 'developer_board',
      title: 'Transformación Digital',
      description: 'Servicios de migración y gestión para ecosistemas digitales complejos, garantizando seguridad y un rendimiento óptimo.'
    }
  ];

  return (
    <section id="servicios" className="bg-slate-50 py-32 border-t border-slate-100">
      <div className="container mx-auto px-6 lg:px-8">
        
        {/* Encabezado: Título bicolor + Línea + Frase de Experiencia */}
        <div className="max-w-5xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-[#135bec] mb-4">
            Nuestras Capacidades
          </h2>
          
          <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
            Consultoría de <span className="text-[#135bec]">Alto Nivel</span>
          </h3>
          
          {/* Línea azul distintiva */}
          <div className="h-1 w-12 bg-[#135bec] mb-8"></div>
          
          {/* Frase de experiencia debajo de la línea */}
          <p className="text-slate-500 max-w-xl text-base leading-relaxed font-light">
            Combinamos décadas de experiencia con las últimas innovaciones tecnológicas para entregar resultados que transforman industrias.
          </p>
        </div>
        
        {/* Grid: Reducción final de escala (max-w-5xl y p-6) */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 max-w-5xl mx-auto">
          {serviceItems.map((item, idx) => (
            <div key={idx} className="group relative rounded-2xl bg-white p-6 shadow-sm border border-slate-100 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 overflow-hidden">
              
              {/* Icono decorativo de fondo más pequeño */}
              <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity">
                <span className="material-symbols-outlined !text-7xl text-[#135bec]">{item.icon}</span>
              </div>

              <div className="relative z-10">
                {/* Icono ajustado a size-12 */}
                <div className="mb-5 flex size-12 items-center justify-center rounded-xl bg-[#135bec]/10 text-[#135bec] transition-all duration-500 group-hover:bg-[#135bec] group-hover:text-white group-hover:rotate-[6deg]">
                  <span className="material-symbols-outlined !text-xl">{item.icon}</span>
                </div>
                
                {/* Título ajustado a text-lg */}
                <h4 className="mb-3 text-lg font-bold text-slate-900 group-hover:text-[#135bec] transition-colors leading-tight">
                  {item.title}
                </h4>
                
                {/* Texto ajustado a text-xs/sm */}
                <p className="text-slate-500 leading-relaxed text-[13px]">
                  {item.description}
                </p>
              </div>

              {/* Botón Saber más más discreto */}
              <div className="mt-6 pt-5 border-t border-slate-50 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                 <button 
                  onClick={() => onNavigate?.('services')}
                  className="text-[10px] font-bold uppercase tracking-widest text-[#135bec] flex items-center gap-2"
                >
                   Saber más <span className="material-symbols-outlined !text-[14px]">arrow_forward</span>
                 </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
