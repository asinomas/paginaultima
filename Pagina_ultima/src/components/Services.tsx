import React, { useState } from 'react';
import { Shield, Layout, Target, ArrowRight, ChevronDown } from 'lucide-react';

const profiles = [
  "Líder Técnico", "Scrum Master", "Dev Android", "Dev Java",
  "BackEnd", "FrontEnd", "Fullstack", "Devops", "UX/UI",
  "CiberSeguridad", "Mesa de Ayuda", "Python", "Dev IOS"
];

const servicesData = [
  {
    Icon: Target,
    title: "Consultoría Estratégica",
    description: "Alineamos la tecnología con los objetivos de negocio para maximizar la inversión y la eficiencia operativa de su empresa.",
    details: [
      "Evaluamos la situación actual de la empresa, identificamos oportunidades de mejora y diseñamos un roadmap tecnológico alineado a los objetivos del negocio, enfocado en la eficiencia operativa y el retorno de inversión"
    ]
  },
  {
    Icon: Layout,
    title: "Arquitectura de Sistemas",
    description: "Diseñamos infraestructuras robustas y escalables preparadas para soportar el crecimiento continuo y la demanda tecnológica actual.",
    details: [
      "Diseño de arquitecturas cloud-native y microservicios",
      "Integración de sistemas legacy con nuevas plataformas",
      "Soluciones de alta disponibilidad y recuperación ante desastres",
      "Optimización de rendimiento y escalabilidad horizontal",
      "Documentación técnica completa y transfer de conocimiento"
    ]
  },
  {
    Icon: Shield,
    title: "Seguridad TI",
    description: "Protegemos sus activos digitales mediante protocolos de vanguardia, cifrado avanzado y análisis proactivo de amenazas.",
    details: [
      "Auditorías de seguridad y evaluación de vulnerabilidades",
      "Implementación de políticas de seguridad y compliance",
      "Monitoreo 24/7 y respuesta a incidentes",
      "Cifrado de datos en tránsito y en reposo",
      "Capacitación en concienciación de seguridad para equipos"
    ]
  }
];

const HighLevelConsulting: React.FC = () => {
  return (
    <section className="bg-slate-50 py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* PARTE SUPERIOR: Título y Perfiles */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-24">
          
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
              En BlackTI desarrollamos una confianza a largo plazo que nos permite ser parte del cumplimiento y logro de los objetivos de nuestros clientes.
            </p>
          </div>

          <div className="flex-1 w-full lg:max-w-xl">
            <h4 className="text-[10px] font-bold tracking-[0.3em] text-slate-400 uppercase mb-8 border-b border-slate-200 pb-2 inline-block">
              Perfiles Especializados
            </h4>
            
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

        {/* PARTE INFERIOR: Tarjetas con Acordeón */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard 
              key={index}
              Icon={service.Icon}
              title={service.title}
              description={service.description}
              details={service.details}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ Icon, title, description, details }: { 
  Icon: any, 
  title: string, 
  description: string,
  details: string[]
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const cardRef = React.useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
    if (!isExpanded) {
      setTimeout(() => {
        cardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 100);
    }
  };

  return (
    <div ref={cardRef} className="relative bg-white rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-500 group flex flex-col overflow-hidden">
      
      <div className="p-10">
        {/* ICONO DE FONDO (Marca de Agua) */}
        <div className="absolute -top-6 -right-6 text-slate-100 group-hover:text-blue-50 group-hover:scale-125 transition-all duration-700 pointer-events-none z-0">
          <Icon size={180} strokeWidth={1} />
        </div>
        
        {/* Icono Principal */}
        <div className="relative z-10 w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-8 group-hover:bg-[#135bec] transition-all duration-300">
          <Icon className="text-[#135bec] group-hover:text-white" size={24} />
        </div>

        {/* Contenido */}
        <div className="relative z-10">
          <h4 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">{title}</h4>
          <p className="text-slate-500 leading-relaxed text-sm mb-6">
            {description}
          </p>

          {/* Botón Saber Más */}
          <button 
            onClick={handleToggle}
            className="flex items-center text-[#135bec] font-bold text-[10px] uppercase tracking-[0.2em] group/btn transition-transform duration-300 hover:scale-105 origin-left w-fit"
          >
            <span>Saber más</span>
            <ChevronDown 
              className={`ml-2 transition-all duration-300 ${isExpanded ? 'rotate-180' : ''}`} 
              size={14} 
            />
          </button>
        </div>
      </div>

      {/* Acordeón con detalles */}
      <div 
        className={`overflow-hidden transition-all duration-500 ${
          isExpanded ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="px-10 pb-10 pt-2 relative z-10 bg-slate-50/50 border-t border-slate-100">
          <h5 className="text-xs font-bold text-slate-900 mb-4 uppercase tracking-wider">
            Servicios:
          </h5>
          <ul className="space-y-2">
            {details.map((detail, idx) => (
              <li key={idx} className="flex items-start text-sm text-slate-600">
                <ArrowRight className="text-[#135bec] mr-2 mt-0.5 flex-shrink-0" size={12} />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HighLevelConsulting;
