import React from 'react';

// Datos de tu componente Profiles
const services = [
  "Servicio Head Hunting",
  "Servicio Staffing",
  "Servicio Digital Factoring",
  "Servicio Mesa de Ayuda"
];

const profiles = [
  "Líder Técnico", "Dev IOS", "Dev Android", "Dev Java", "Scrum Master",
  "BackEnd", "FrontEnd", "Fullstack", "Devops", "UX/UI", "QA",
  "Python", "CiberSeguridad", "Mesa de Ayuda"
];

const HighLevelConsulting: React.FC = () => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Contenedor Principal en Grid (Título a la izq, Perfiles a la der) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
          
          {/* LADO IZQUIERDO: Título y Descripción */}
          <div className="max-w-xl">
            <span className="text-[10px] font-bold tracking-[0.4em] text-[#135bec] uppercase mb-6 block">
              Nuestras Capacidades
            </span>
            <h3 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-8 tracking-tight leading-[1.1]">
              Consultoría de <span className="text-[#135bec] italic">Alto Nivel</span>
            </h3>
            <div className="w-16 h-1 bg-[#135bec] mb-8"></div>
            <p className="text-lg text-slate-500 leading-relaxed">
              Combinamos décadas de experiencia con las últimas innovaciones tecnológicas para entregar resultados que transforman industrias.
            </p>
          </div>

          {/* LADO DERECHO: Tu código de Perfiles (Zona Roja) */}
          <div className="bg-slate-50/50 p-8 rounded-3xl border border-slate-100">
            <div className="space-y-12">
              {/* Sección: Modelo de Colaboración */}
              <section className="text-left">
                <h2 className="text-[10px] font-bold tracking-[0.4em] text-slate-400 uppercase mb-6 border-b border-slate-200 pb-2">
                  Modelo de Colaboración
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {services.map((service, index) => (
                    <li key={index} className="flex items-center space-x-3 text-slate-700 border-l-2 border-slate-900 pl-4 py-1 transition-all hover:bg-white hover:shadow-sm">
                      <span className="text-sm font-medium tracking-tight">{service}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Sección: Perfiles */}
              <section className="text-left">
                <h3 className="text-[10px] font-bold tracking-[0.4em] text-slate-400 uppercase mb-6 border-b border-slate-200 pb-2">
                  Perfiles Especializados
                </h3>
                <div className="flex flex-wrap gap-2">
                  {profiles.map((profile, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1.5 bg-white border border-slate-200 text-slate-600 text-[11px] font-medium rounded-md hover:border-[#135bec] hover:text-[#135bec] transition-all duration-200 cursor-default shadow-sm"
                    >
                      {profile}
                    </span>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>

        {/* Tarjetas inferiores (Las que ya tenías: Estratégica, Arquitectura, etc.) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {/* Aquí irían tus componentes de las 3 tarjetas blancas de la imagen */}
        </div>

      </div>
    </section>
  );
};

export default HighLevelConsulting;
