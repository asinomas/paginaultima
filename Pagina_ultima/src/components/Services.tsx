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
        
        {/* PARTE SUPERIOR: Título (Izquierda) y Perfiles (Derecha) */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-20">
          
          {/* Bloque de Texto */}
          <div className="max-w-2xl">
            <span className="text-[10px] font-bold tracking-[0.4em] text-[#135bec] uppercase mb-6 block">
              Excelencia Operativa
            </span>
            <h3 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-8 tracking-tight leading-[1.1]">
              Consultoría de <span className="text-[#135bec] italic">Alto Nivel</span>
            </h3>
            <div className="w-16 h-1 bg-[#135bec] mb-8"></div>
            <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
              En BlackTI conectamos el mejor talento técnico con los desafíos más complejos de la industria, asegurando una ejecución impecable en cada proyecto.
            </p>
          </div>

          {/* Bloque de Perfiles (Contenedor Flotante) */}
          <div className="bg-white p-8 rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-100 max-w-md w-full">
            <h4 className="text-[10px] font-bold tracking-[0.3em] text-slate-300 uppercase mb-6">
              Perfiles Especializados
            </h4>
            <div className="flex flex-wrap gap-2">
              {profiles.map((profile, index) => (
                <span 
                  key={index}
                  className="px-3 py-1.5 bg-slate-50 text-slate-500 text-[11px] font-medium rounded-lg border border-slate-100 hover:border-[#135bec] hover:text-[#135bec] transition-all cursor-default"
                >
                  {profile}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* PARTE INFERIOR: Tarjetas de Servicios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Tarjeta 1 */}
          <ServiceCard 
            Icon={Target} 
            title="Consultoría Estratégica" 
            description="Alineamos la tecnología con los objetivos de negocio para maximizar el retorno de inversión y la eficiencia operativa de su empresa." 
          />
          {/* Tarjeta 2 */}
          <ServiceCard 
            Icon={Layout} 
            title="Arquitectura de Sistemas" 
            description="Diseñamos infraestructuras robustas y escalables preparadas para soportar el crecimiento continuo y la demanda tecnológica actual." 
          />
          {/* Tarjeta 3 */}
          <ServiceCard 
            Icon={Shield} 
            title="Seguridad TI" 
            description="Protegemos sus activos digitales mediante protocolos de vanguardia, cifrado avanzado y análisis proactivo de amenazas." 
          />
        </div>
      </div>
    </section>
  );
};

// Sub-componente para las tarjetas para mantener el código limpio
const ServiceCard = ({ Icon, title, description }: { Icon: any, title: string, description: string }) => (
  <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-50 hover:shadow-xl transition-all duration-500 group flex flex-col h-full">
    <div className="w-12 h-12 bg-blue-50/50 rounded-xl flex items-center justify-center mb-8 group-hover:bg-[#135bec] transition-all duration-300 shadow-sm border border-blue-100/50">
      <Icon className="text-[#135bec] group-hover:text-white" size={24} />
    </div>
    <h4 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">{title}</h4>
    <p className="text-slate-500 leading-relaxed text-[13.5px] mb-10 flex-grow">
      {description}
    </p>
    <button className="flex items-center text-[#135bec] font-bold text-[10px] uppercase tracking-[0.2em] group/btn transition-all">
      Saber más 
      <ArrowRight className="ml-2 transition-transform group-hover/btn:translate-x-1" size={14} />
    </button>
  </div>
);

export default HighLevelConsulting;
