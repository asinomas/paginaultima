import React from 'react';

const Stats: React.FC = () => {
  const statsItems = [
    {
      icon: 'verified',
      value: '99%',
      label: 'Compromiso Serio',
      text: 'Nuestra tasa de éxito en proyectos está impulsada por un profundo sentido de responsabilidad y disciplina técnica.'
    },
    {
      icon: 'rocket_launch',
      value: '10+',
      label: 'Años de Experiencia',
      text: 'Aprovechamos más de una década de experiencia especializada en tecnologías emergentes para su arquitectura.'
    },
    {
      icon: 'schedule',
      value: '24/7',
      label: 'Soporte Continuo',
      text: 'Sistemas de monitoreo y soporte que garantizan que sus operaciones críticas permanezcan fluidas.'
    }
  ];

  return (
    <section className="bg-brand-dark py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      
      <div className="container mx-auto max-w-7xl px-6 lg:px-8 relative z-10 text-center">
        <div className="mb-20">
          <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-4">El Estándar BlackTI</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-white">¿Por qué los líderes nos eligen?</h3>
        </div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {statsItems.map((stat, idx) => (
            <div key={idx} className="group flex flex-col items-center">
              <div className="mb-8 flex size-20 items-center justify-center rounded-3xl bg-white/5 border border-white/10 text-primary transition-all duration-500 group-hover:scale-110 group-hover:bg-primary group-hover:text-white shadow-2xl">
                <span className="material-symbols-outlined !text-4xl">{stat.icon}</span>
              </div>
              <div className="text-6xl font-black text-white mb-3 tracking-tighter transition-transform group-hover:scale-110">{stat.value}</div>
              <h5 className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-primary">{stat.label}</h5>
              <p className="text-slate-400 leading-relaxed text-sm max-w-xs mx-auto">{stat.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;