import React from 'react';

const services = [
  { title: 'Arquitectura Cloud', desc: 'Diseño de infraestructuras robustas y escalables en AWS, Azure y GCP.', icon: 'cloud_done' },
  { title: 'Desarrollo Estratégico', desc: 'Software a medida enfocado en la experiencia de usuario y rendimiento.', icon: 'code_blocks' },
  { title: 'Seguridad Digital', desc: 'Protección de activos críticos y cumplimiento de normativas globales.', icon: 'shield_lock' }
];

const Services: React.FC = () => {
  return (
    <section id="servicios" className="bg-[#f8fafc] py-32">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="text-center mb-24">
          <h2 className="text-blue-600 font-bold uppercase tracking-[0.4em] text-[10px] mb-4">
            Servicios Especializados
          </h2>
          <h3 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter italic">
            Capacidades de <span className="text-blue-600">Alto Nivel</span>
          </h3>
          <div className="mt-6 h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((s, i) => (
            <div 
              key={i} 
              className="group relative bg-white p-10 rounded-[2.5rem] border border-slate-200/60 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_60px_-15px_rgba(59,130,246,0.15)] hover:border-blue-400/30 transition-all duration-500 ease-out hover:-translate-y-3 overflow-hidden"
            >
              {/* Decoración sutil de fondo en hover */}
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-blue-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-blue-600 mb-10 group-hover:bg-blue-600 group-hover:text-white group-hover:rotate-[10deg] transition-all duration-500 shadow-sm group-hover:shadow-blue-500/50">
                  <span className="material-symbols-outlined !text-3xl">{s.icon}</span>
                </div>
                
                <h4 className="text-2xl font-bold text-slate-900 mb-5 tracking-tight group-hover:text-blue-600 transition-colors">
                  {s.title}
                </h4>
                
                <p className="text-slate-500 leading-relaxed mb-10 text-sm font-medium">
                  {s.desc}
                </p>
                
                <div className="flex items-center gap-2 text-blue-600 font-bold text-xs uppercase tracking-widest translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <span>Saber más</span>
                  <span className="material-symbols-outlined !text-sm animate-pulse">arrow_forward</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
