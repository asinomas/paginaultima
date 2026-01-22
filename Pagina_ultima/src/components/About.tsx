import React from 'react';

import { CheckCircle2 } from 'lucide-react';


const About: React.FC = () => {
  const features = [
    'Ingeniería de Clase Mundial',
    'Seguridad Multicapa',
    'Escalabilidad Sin Límites',
    'Transparencia Radical'
  ];

  return (
    <section id="nosotros" className="bg-white py-32 overflow-hidden">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-20 lg:grid-cols-2 lg:items-center">
          <div className="relative">
            <div className="relative z-10 overflow-hidden rounded-[2.5rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)] group">
              <img 
                alt="Innovación y Propósito BlackTI" 
                className="h-[600px] w-full object-cover transition-transform duration-[2s] group-hover:scale-110" 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 to-transparent opacity-60"></div>
              <div className="absolute bottom-10 left-10 text-white">
                <p className="text-xs font-bold uppercase tracking-widest mb-2">Fundada en 2014</p>
                <p className="text-3xl font-extrabold tracking-tight">Sede Principal en Santiago</p>
              </div>
            </div>
            {/* Shapes */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -z-10 animate-pulse"></div>
            <div className="absolute -top-10 -left-10 w-48 h-48 bg-blue-100/50 rounded-full blur-[60px] -z-10"></div>
          </div>

          <div className="flex flex-col">
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full bg-primary/5 px-4 py-2 border border-primary/10">
              <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-xs font-extrabold uppercase tracking-widest text-primary">Nuestra Identidad</span>
            </div>
            <h2 className="mb-8 text-4xl font-extrabold tracking-tight text-slate-900 lg:text-6xl leading-[1.1]">
              Liderando el Futuro con <span className="text-primary italic">Propósito</span> Real
            </h2>
            <div className="space-y-6 mb-12">
              <p className="text-lg leading-relaxed text-slate-500">
                Somos una firma boutique de consultoría que trasciende la simple implementación técnica. Nos sumergimos en la cultura de nuestros clientes para convertir obstáculos en motores de crecimiento.
              </p>
              <p className="text-lg leading-relaxed text-slate-500">
                Creemos que el éxito tecnológico solo es sostenible cuando está alineado con un Talento Humano excepcional y una visión estratégica clara.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-y-5 sm:grid-cols-2 mb-12">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-4 group">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:scale-110">
                    <span className="material-symbols-outlined !text-xl">done_all</span>
                  </div>
                  <span className="text-sm font-bold text-slate-700 tracking-tight">{feature}</span>
                </div>
              ))}
            </div>
            <button className="group relative w-fit overflow-hidden rounded-2xl bg-slate-900 px-10 py-5 text-sm font-bold text-white shadow-2xl transition-all hover:bg-primary hover:-translate-y-1">
              <span className="relative z-10 flex items-center gap-3">
                Nuestro Método Operativo
                <span className="material-symbols-outlined !text-xl transition-transform group-hover:translate-x-1">arrow_right_alt</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
