import React from 'react';

interface ServicesDetailProps {
  onContactClick: () => void;
}

const ServicesDetail: React.FC<ServicesDetailProps> = ({ onContactClick }) => {
  const specialties = [
    {
      icon: 'terminal',
      title: 'Consultoría TI',
      description: 'Asesoramiento experto de BlackTI para optimizar su infraestructura y procesos tecnológicos mediante auditorías profundas.'
    },
    {
      icon: 'insights',
      title: 'Estrategia Digital',
      description: 'Transformamos su visión en resultados tangibles mediante planes de digitalización avanzados alineados con su negocio.'
    },
    {
      icon: 'account_tree',
      title: 'Gestión de Proyectos',
      description: 'Ejecución precisa y eficiente de iniciativas complejas con metodologías ágiles que garantizan tiempos de entrega.'
    },
    {
      icon: 'lock',
      title: 'Ciberseguridad',
      description: 'Protección integral de sus activos digitales mediante firewalls avanzados y protocolos de encriptación de grado militar.'
    },
    {
      icon: 'cloud',
      title: 'Soluciones Cloud',
      description: 'Migración y gestión de infraestructuras en la nube para mejorar la escalabilidad y reducir costes con BlackTI.'
    },
    {
      icon: 'analytics',
      title: 'Análisis de Datos',
      description: 'Convertimos sus datos en decisiones inteligentes mediante herramientas de Business Intelligence y Big Data.'
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pt-24 pb-32">
      <section className="container mx-auto max-w-7xl px-6 lg:px-8 mb-24">
        <div className="relative overflow-hidden rounded-[3rem] bg-brand-dark p-12 lg:p-24 text-center lg:text-left">
          <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-primary/20 rounded-full blur-[100px]"></div>
          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-2/3">
              <h1 className="text-4xl lg:text-7xl font-black text-white leading-tight mb-8">
                Arquitectura <span className="text-primary italic">Sin Compromisos</span>
              </h1>
              <p className="text-lg lg:text-xl text-slate-400 leading-relaxed max-w-2xl mb-10">
                Impulsando la excelencia digital a través de soluciones tecnológicas estratégicas. Ayudamos a su empresa a escalar en el entorno moderno con BlackTI.
              </p>
              <button onClick={onContactClick} className="rounded-2xl bg-primary px-10 py-5 text-base font-bold text-white shadow-2xl shadow-primary/30 hover:scale-105 active:scale-95 transition-all">
                Iniciar Transformación
              </button>
            </div>
            <div className="lg:w-1/3 hidden lg:block">
              <div className="grid grid-cols-2 gap-4">
                 <div className="h-40 bg-white/5 rounded-3xl border border-white/10 flex flex-col items-center justify-center text-white">
                    <span className="text-3xl font-black text-primary">10+</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Años Exp.</span>
                 </div>
                 <div className="h-40 bg-white/5 rounded-3xl border border-white/10 flex flex-col items-center justify-center text-white translate-y-8">
                    <span className="text-3xl font-black text-primary">500+</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Proyectos</span>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 flex flex-col md:flex-row items-center justify-between gap-6">
           <h2 className="text-3xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">Nuestra Especialización</h2>
           <div className="h-0.5 flex-1 bg-slate-200 hidden md:block mx-10"></div>
           <p className="text-slate-500 text-sm font-bold uppercase tracking-widest">Servicios End-to-End</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialties.map((item, idx) => (
            <div key={idx} className="group relative bg-white p-12 rounded-[2rem] border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
              <div className="mb-8 flex size-14 items-center justify-center rounded-2xl bg-slate-50 text-slate-400 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                <span className="material-symbols-outlined !text-3xl">{item.icon}</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
              <p className="text-slate-500 leading-relaxed text-sm mb-8">
                {item.description}
              </p>
              <div className="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                 Detalles técnicos <span className="material-symbols-outlined !text-sm">arrow_forward</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServicesDetail;