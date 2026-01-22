import React from 'react';

const services = [
  { title: 'Arquitectura Cloud', desc: 'Diseño de infraestructuras robustas y escalables en AWS, Azure y GCP.', icon: 'cloud_done' },
  { title: 'Desarrollo Estratégico', desc: 'Software a medida enfocado en la experiencia de usuario y rendimiento.', icon: 'code_blocks' },
  { title: 'Seguridad Digital', desc: 'Protección de activos críticos y cumplimiento de normativas globales.', icon: 'shield_lock' }
];

const Services: React.FC = () => {
  return (
    <section className="bg-slate-50 py-32">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="text-center mb-20">
          <h2 className="text-blue-600 font-bold uppercase tracking-[0.3em] text-xs mb-4">Servicios Especializados</h2>
          <h3 className="text-4xl md:text-5xl font-black text-slate-900">Capacidades de Alto Nivel</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className="group bg-white p-10 rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/50 hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                <span className="material-symbols-outlined !text-3xl">{s.icon}</span>
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">{s.title}</h4>
              <p className="text-slate-500 leading-relaxed mb-8">{s.desc}</p>
              <div className="flex items-center gap-2 text-blue-600 font-bold text-sm uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                Saber más <span className="material-symbols-outlined">arrow_forward</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
