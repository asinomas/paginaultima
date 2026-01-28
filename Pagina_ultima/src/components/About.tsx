import React from 'react';
import ScrollAnimation from './ScrollAnimation';

const About: React.FC = () => {
  return (
    <ScrollAnimation>
      <section className="bg-white py-32 overflow-hidden">
        <div className="container mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* TEXTO A LA IZQUIERDA */}
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 border border-blue-100">
                <span className="text-blue-600 text-xs font-bold uppercase tracking-widest">Nuestra Identidad</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-8 leading-[1.1]">
                Liderando con <span className="text-blue-600 italic">Propósito</span> Real
              </h2>
              <p className="text-lg md:text[17px] font-normal text-slate-500 tracking-tighter mb-6 leading-relaxed">
                Nacimos para transformar la complejidad técnica en valor empresarial. Somos un equipo de alto rendimiento, con obsesión por el detalle y mentalidad problem-solver.
              </p>
              <div className="space-y-6 mb-12">
                <p className="text-lg leading-relaxed text-slate-500 tracking-tighter font-normal md:text[17px] mb-6">
                  Nuestra experiencia se traduce en soluciones. Ofrece el ecosistema completo para que un producto digital no solo nazca, sino que escale y sea seguro.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                {['Ingeniería Superior', 'Seguridad Total', 'Escalabilidad', 'Transparencia'].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">
                      <span className="material-symbols-outlined !text-sm">done</span>
                    </div>
                    <span className="font-bold text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* IMAGEN A LA DERECHA */}
            <div className="relative">
              <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl group">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80" 
                  className="h-[600px] w-full object-cover transition-transform duration-[2s] group-hover:scale-105"
                  alt="Nosotros"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-10 left-10">
                  <p className="text-blue-400 font-bold uppercase tracking-widest text-xs mb-2">Fundada en 2014</p>
                  <h4 className="text-3xl font-bold text-white tracking-tight">Estrategia y Resultados</h4>
                </div>
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-100 rounded-full blur-[80px] -z-10"></div>
            </div>
          </div>
        </div>
      </section>
    </ScrollAnimation>
  );
};

export default About;
