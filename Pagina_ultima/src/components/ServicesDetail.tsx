import React, { useState } from 'react';
import { Terminal, Lightbulb, Network, Lock, Cloud, BarChart3, ArrowRight, ChevronDown } from 'lucide-react';

interface ServicesDetailProps {
  onContactClick?: () => void;
}

const ServicesDetail: React.FC<ServicesDetailProps> = ({ onContactClick = () => {} }) => {
  const collaborationModels = [
    "Servicio Head Hunting",
    "Servicio Staffing",
    "Servicio Digital Factoring",
    "Servicio Mesa de Ayuda"
  ];

  const specialties = [
    {
      icon: Terminal,
      title: 'Consultoría TI',
      description: 'Asesoramiento experto de nuestro equipo para optimizar su infraestructura y procesos tecnológicos mediante auditorías profundas.',
      details: [
        'Auditorías completas de infraestructura tecnológica',
        'Optimización de procesos y flujos de trabajo',
        'Evaluación de arquitecturas existentes',
        'Recomendaciones estratégicas personalizadas',
        'Plan de mejora continua y roadmap tecnológico'
      ]
    },
    {
      icon: Lightbulb,
      title: 'Estrategia Digital',
      description: 'Transformamos su visión en resultados tangibles mediante planes de digitalización avanzados alineados con su negocio.',
      details: [
        'Análisis de madurez digital de la organización',
        'Diseño de roadmap de transformación digital',
        'Definición de KPIs y métricas de éxito',
        'Gestión del cambio organizacional',
        'Capacitación y acompañamiento continuo'
      ]
    },
    {
      icon: Network,
      title: 'Gestión de Proyectos',
      description: 'Ejecución precisa y eficiente de iniciativas complejas con metodologías ágiles que garantizan tiempos de entrega.',
      details: [
        'Implementación de metodologías ágiles (Scrum, Kanban)',
        'Gestión de equipos multidisciplinarios',
        'Control de costos, tiempos y alcance',
        'Reportes ejecutivos y seguimiento continuo',
        'Mitigación proactiva de riesgos'
      ]
    },
    {
      icon: Lock,
      title: 'Ciberseguridad',
      description: 'Protección integral de sus activos digitales mediante firewalls avanzados y protocolos de encriptación de alto grado.',
      details: [
        'Auditorías de seguridad y pentesting',
        'Implementación de políticas de seguridad ISO 27001',
        'Monitoreo 24/7 de amenazas y vulnerabilidades',
        'Respuesta a incidentes y recuperación',
        'Capacitación en concienciación de seguridad'
      ]
    },
    {
      icon: Cloud,
      title: 'Soluciones Cloud',
      description: 'Migración y gestión de infraestructuras en la nube para mejorar la escalabilidad y reducir costes.',
      details: [
        'Migración a AWS, Azure, Google Cloud',
        'Arquitecturas cloud-native y serverless',
        'Optimización de costos en la nube',
        'Implementación de DevOps y CI/CD',
        'Monitoreo y gestión de recursos cloud'
      ]
    },
    {
      icon: BarChart3,
      title: 'Análisis de Datos',
      description: 'Convertimos sus datos en decisiones inteligentes mediante herramientas de Business Intelligence y Big Data.',
      details: [
        'Implementación de soluciones de BI (Power BI, Tableau)',
        'Desarrollo de pipelines de datos ETL/ELT',
        'Análisis predictivo y machine learning',
        'Dashboards ejecutivos y reportería avanzada',
        'Gobierno de datos y calidad de información'
      ]
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pt-24 pb-32 antialiased">
      {/* 1. HERO SECTION */}
      <section className="container mx-auto max-w-7xl px-6 lg:px-8 mb-24">
        <div className="relative overflow-hidden rounded-[3rem] bg-[#0b0e14] p-12 lg:p-24 text-center lg:text-left">
          <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#135bec]/20 rounded-full blur-[100px]"></div>
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-2/3">
              <h1 className="text-4xl lg:text-7xl font-black text-white leading-tight mb-8 tracking-tighter">
                Arquitectura <br />
                <span className="text-[#135bec] italic drop-shadow-[0_0_15px_rgba(19,91,236,0.3)]">Sin Compromisos</span>
              </h1>
              <p className="text-lg lg:text-xl text-slate-400 leading-relaxed max-w-2xl mb-10">
                Impulsando la excelencia digital a través de soluciones tecnológicas estratégicas. En BlackTI ayudamos a su empresa a escalar en el entorno moderno.
              </p>
              <button onClick={onContactClick} className="rounded-2xl bg-[#135bec] px-10 py-5 text-base font-bold text-white shadow-2xl shadow-[#135bec]/30 hover:scale-105 active:scale-95 transition-all">
                Iniciar Transformación
              </button>
            </div>
            
            <div className="lg:w-1/3 hidden lg:block">
              <div className="grid grid-cols-2 gap-4">
                 <div className="h-40 bg-white/5 rounded-3xl border border-white/10 flex flex-col items-center justify-center backdrop-blur-sm">
                    <span className="text-3xl font-black text-[#135bec]">10+</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Años Exp.</span>
                 </div>
                 <div className="h-40 bg-white/5 rounded-3xl border border-white/10 flex flex-col items-center justify-center backdrop-blur-sm translate-y-8">
                    <span className="text-3xl font-black text-[#135bec]">500+</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Proyectos</span>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SECCIÓN TÉCNICA: MODELO DE COLABORACIÓN */}
      <section className="container mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Cabecera Principal */}
        <div className="mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
           <h2 className="text-3xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
             Nuestra <span className="text-[#135bec] italic">Especialización</span>
           </h2>
           <div className="h-0.5 flex-1 bg-slate-200 hidden md:block mx-10"></div>
           <p className="text-slate-500 text-sm font-bold uppercase tracking-widest">Servicios End-to-End</p>
        </div>

        {/* LISTA DE MODELO DE COLABORACIÓN */}
        <div className="mb-24">
          <h3 className="text-[10px] font-bold tracking-[0.4em] text-slate-400 uppercase mb-8 border-b border-slate-200 pb-2">
            Modelo de Colaboración
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-8">
            {collaborationModels.map((service, index) => (
              <div key={index} className="group cursor-default">
                <span className="text-xl md:text-2xl font-light text-slate-600 tracking-tight border-l-2 border-[#135bec] pl-5 group-hover:text-slate-950 group-hover:border-slate-900 transition-all duration-300 block">
                  {service}
                </span>
              </div>
            ))}
          </div>
        </div>
        
        {/* 3. GRID DE TARJETAS DE ESPECIALIDAD CON ACORDEÓN */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialties.map((item, idx) => (
            <ServiceCard 
              key={idx}
              Icon={item.icon}
              title={item.title}
              description={item.description}
              details={item.details}
            />
          ))}
        </div>
      </section>
    </div>
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
                <span className="text-[#135bec] mr-2 mt-0.5 flex-shrink-0 font-bold">›</span>
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServicesDetail;
