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
        
        {/* Encabezado con ajuste en el tamaño del título principal */}
        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#135bec] mb-4">
            Nuestras Capacidades
          </h2>
          
          {/* Título: Ajustado de 6xl a 5xl para un equilibrio más sutil */}
          <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Consultoría de <span className="text-[#135bec]">Alto Nivel</span>
          </h3>
          
          <div className="h-1 w-12 bg-[#135bec] mb-8"></div>
          
          <p className="text-slate-500 max-w-xl text-sm leading-relaxed font-normal">
            Combinamos décadas de experiencia con las últimas innovaciones tecnológicas para entregar resultados que transforman industrias.
          </p>
        </div>
        
        {/* Grid de Servicios con el escalado del 10% que aplicamos anteriormente */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {serviceItems.map((item, idx) => (
            <div key={idx} className="group relative rounded-[1.5rem] bg-white p-8 shadow-sm border border-slate-100 transition-all duration-500 hover:shadow-xl hover:-translate-y-1.5 overflow-hidden">
              
              <div className="absolute top-0 right-0 p-6 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity">
                <span className="material-symbols-outlined !text-8xl text-[#135bec]">{item.icon}</span>
              </div>

              <div className="relative z-10">
                <div className="mb-6 flex size-14 items-center justify-center rounded-2xl bg-[#135bec]/10 text-[#135bec] transition-all duration-500 group-hover:bg-[#135bec] group-hover:text-white group-hover:rotate-[6deg]">
                  <span className="material-symbols-outlined !text-2xl">{item.icon}</span>
                </div>
                
                <h4 className="mb-3 text-xl font-bold text-slate-900 group-hover:text-[#135bec] transition-colors leading-tight">
                  {item.title}
                </h4>
                
                <p className="text-slate-500 leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-50 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                 <button 
                  onClick={() => onNavigate?.('services')}
                  className="text-[11px] font-bold uppercase tracking-widest text-[#135bec] flex items-center gap-2"
                >
                   Saber más <span className="material-symbols-outlined !text-sm">arrow_forward</span>
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
