import React from 'react';

const Services: React.FC = () => {
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
    <section id="servicios" className="bg-slate-50 py-32">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">Nuestras Capacidades</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">Soluciones Profesionales de Alto Impacto</h3>
          </div>
          <p className="text-slate-500 max-w-md text-sm leading-relaxed">
            Combinamos décadas de experiencia con las últimas innovaciones tecnológicas para entregar resultados que transforman industrias.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {serviceItems.map((item, idx) => (
            <div key={idx} className="group relative rounded-3xl bg-white p-10 shadow-sm border border-slate-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                <span className="material-symbols-outlined !text-9xl">{item.icon}</span>
              </div>
              <div className="relative z-10">
                <div className="mb-8 flex size-16 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-white group-hover:rotate-[10deg] shadow-lg shadow-primary/5">
                  <span className="material-symbols-outlined !text-3xl">{item.icon}</span>
                </div>
                <h4 className="mb-4 text-2xl font-bold text-slate-900 group-hover:text-primary transition-colors">{item.title}</h4>
                <p className="text-slate-500 leading-relaxed text-sm">{item.description}</p>
              </div>
              <div className="mt-8 pt-8 border-t border-slate-50 opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0">
                 <button className="text-xs font-bold uppercase tracking-widest text-primary flex items-center gap-2">
                   Explorar servicio <span className="material-symbols-outlined !text-sm">arrow_forward</span>
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