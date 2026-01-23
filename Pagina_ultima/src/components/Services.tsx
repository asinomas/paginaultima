import React from 'react';
import { Shield, Layout, Target, ArrowRight } from 'lucide-react';

const profiles = [
  "Líder Técnico", "Scrum Master", "Dev Android", "Dev Java",
  "BackEnd", "FrontEnd", "Fullstack", "Devops", "UX/UI",
  "CiberSeguridad", "Mesa de Ayuda", "Python", "Dev IOS"
];

const HighLevelConsulting: React.FC = () => {
  return (
    <section className="bg-slate-50 py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* PARTE SUPERIOR: Título (con salto de línea) y Perfiles */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-24">
          
          {/* Bloque de Texto con salto de línea */}
          <div className="max-w-xl">
            <span className="text-[10px] font-bold tracking-[0.4em] text-[#135bec] uppercase mb-6 block">
              Excelencia Operativa
            </span>
            <h3 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-8 tracking-tight leading-[1.1]">
              Consultoría de <br /> 
              <span className="text-[#135bec] italic">Alto Nivel</span>
            </h3>
            <div className="w-16 h-1 bg-[#135bec] mb-8"></div>
            <p className="text-lg text-slate-600 leading-relaxed">
              En BlackTI conectamos el mejor talento técnico con los desafíos más complejos de la industria.
            </p>
          </div>

          {/* Bloque de Perfiles con MÁS espacio */}
          <div className="flex-1 w-full lg:max-w-xl">
            <h4 className="text-[10px] font-bold tracking-[0.3em] text-slate-400 uppercase mb-8 border-b border-slate-200 pb-2 inline-block">
              Perfiles Especializados
            </h4>
            
            {/* gap-4 para más espacio entre globos */}
            <div className="flex flex-wrap gap-4 justify-start">
              {profiles.map((profile, index) => (
                <span 
                  key={index}
                  className="px-5 py-2.5 bg-white text-slate-500 text-[12px] font-semibold rounded-xl border border-transparent shadow-sm hover:border-[#135bec] hover:text-[#135bec] transition-all duration-300 cursor-default hover:shadow-md hover:-translate-y-1"
                >
                  {profile}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* PARTE INFERIOR: Tarjetas de Servicios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard 
            Icon={Target} 
            title="Consultoría Estratégica" 
            description="Alineamos la tecnología con los objetivos de negocio para maximizar el retorno de inversión y la eficiencia operativa." 
          />
          <ServiceCard 
            Icon={Layout} 
            title="Arquitectura de Sistemas" 
            description="Diseñamos infraestructuras robustas y escalables preparadas para soportar el crecimiento continuo." 
          />
          <ServiceCard 
            Icon={Shield} 
            title="Seguridad TI" 
            description="Protegemos sus activos digitales mediante protocolos de vanguardia y análisis proactivo de amenazas." 
          />
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ Icon, title, description }: { Icon: any, title: string, description: string }) => (
  <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-500 group flex flex-col h-full">
    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-8 group-hover:bg-[#135bec] transition-all duration-300">
      <Icon className="text-[#135bec] group-hover:text-white" size={24} />
    </div>
    <h4 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">{title}</h4>
    <p className="text-slate-500 leading-relaxed text-sm mb-10 flex-grow">
      {description}
    </p>
    <button className="flex items-center text-[#135bec] font-bold text-[10px] uppercase tracking-[0.2em] group/btn">
      Saber más 
      <ArrowRight className="ml-2 transition-transform group-hover/btn:translate-x-1" size={14} />
    </button>
  </div>
);

export default HighLevelConsulting;
