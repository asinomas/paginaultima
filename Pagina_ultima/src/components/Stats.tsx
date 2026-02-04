import React from 'react';
import CountUp from './CountUp';

const Stats: React.FC = () => {
  const statsItems = [
    {
      icon: 'schedule',
      number: 48,
      prefix: '<',
      suffix: 'h',
      label: 'Tiempo de Respuesta',
      text: 'Contacto inicial, evaluación y presentación de candidatos en menos de 2 días.'
    },
    {
      icon: 'groups',
      number: 100,
      suffix: '+',
      label: 'Proyectos Completados',
      text: 'Soluciones entregadas con éxito desde startups a grandes empresas.'
    },
    {
      icon: 'tune',
      number: 100,
      suffix: '%',
      label: 'A Medida',
      text: 'Creamos un perfil según el contexto y objetivos, reduciendo tiempos de onboarding.'
    }
  ];

  return (
    <section className="bg-[#0a0a0a] py-32 relative overflow-hidden border-y border-white/5">
      {/* Fondo decorativo */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}
      />

      {/* Luz ambiental */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative mx-auto max-w-7xl px-6 lg:px-8 z-10 text-center">
        <div className="mb-20">
          <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-blue-500 mb-4">
            El Estándar BlackTI
          </h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-white/95">
            Por qué nos eligen
          </h3>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {statsItems.map((stat, idx) => (
            <div
              key={idx}
              className="group flex flex-col items-center"
            >
              {/* Icono */}
              <div className="mb-8 flex size-24 items-center justify-center rounded-3xl bg-white/5 border border-white/10 text-blue-500 transition-all duration-500 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-400 shadow-2xl shadow-blue-900/20">
                <span className="material-symbols-outlined !text-4xl">
                  {stat.icon}
                </span>
              </div>

              {/* Valor con count-up */}
              <div className="text-6xl font-black text-white mb-3 tracking-tighter transition-colors duration-500 group-hover:text-blue-400">
                {stat.prefix && <span>{stat.prefix}</span>}
                <CountUp value={stat.number} />
                {stat.suffix && <span>{stat.suffix}</span>}
              </div>

              {/* Label */}
              <h5 className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-blue-500">
                {stat.label}
              </h5>

              {/* Texto */}
              <p className="text-slate-300 leading-relaxed text-sm max-w-xs mx-auto opacity-80 group-hover:opacity-100 transition-opacity">
                {stat.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
