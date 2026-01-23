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
    <section id="servicios" className="bg-white py-32 border-t border-slate-100">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Encabezado Clásico Recuperado */}
        <div className="mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Servicios Especializados
          </h3>
          {/* Línea corta azul distintiva */}
          <div className="h-1 w-12 bg-[#135bec] mb-6"></div>
          
          {/* Frase solicitada con la tipografía y tamaño actual */}
          <p className="text-slate-500 max-w-2xl text-sm leading-relaxed">
            Combinamos décadas de experiencia con las últimas innovaciones tecnológicas para entregar resultados que transforman industrias.
          </p>
        </div>
        
        {/* Grid de Servicios (Manteniendo los cambios de títulos y botón que estaban bien) */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {serviceItems.map((item, idx) => (
            <div key={idx} className="group relative rounded-3xl bg-white p-10 shadow-sm border border-slate-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 overflow-hidden">
              
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                <span className="material-symbols-outlined !text-9xl text-[#135bec]">{item.icon}</span>
              </div>

              <div className="relative z-10">
                <div className="mb-8 flex size-16 items-center justify-center rounded-2xl bg-[#135bec]/10 text-[#135bec] transition-all duration-500 group-hover:bg-[#135bec] group-hover:text-white group-hover:rotate-[10deg] shadow-lg shadow-blue-500/5">
                  <span className="material-symbols-outlined !text-3xl">{item.icon}</span>
                </div>
                
                <h4 className="mb-4 text-2xl font-bold text-slate-900 group-hover:text-[#135bec] transition-colors">
                  {item.title}
                </h4>
                <p className="text-slate-500 leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-slate-50 opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0">
                 <button 
                  onClick={() => onNavigate?.('services')}
                  className="text-xs font-bold uppercase tracking-widest text-[#135bec] flex items-center gap-2"
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
