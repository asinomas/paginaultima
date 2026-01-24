import React, { useState, useRef, useEffect } from 'react';
import { Terminal, Lightbulb, Network, Lock, Cloud, BarChart3, ArrowRight, ChevronRight } from 'lucide-react';

interface ServicesDetailProps {
  onContactClick: () => void;
}

interface Specialty {
  icon: React.ElementType;
  title: string;
  description: string;
  details: string[];
}

interface ServiceCardProps {
  specialty: Specialty;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ specialty }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <div className="group relative bg-white p-12 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col">
      
      {/* Marca de agua */}
      <div className="absolute -top-6 -right-6 text-slate-100 group-hover:text-blue-50 transition-all duration-700 pointer-events-none z-0 group-hover:scale-125">
        <specialty.icon size={180} strokeWidth={1} />
      </div>

      {/* Icono principal */}
      <div className="relative z-10 mb-8 flex size-14 items-center justify-center rounded-2xl bg-slate-50 text-[#135bec] group-hover:bg-[#135bec] group-hover:text-white transition-all duration-500 shadow-sm">
        <specialty.icon size={28} />
      </div>

      {/* Título y descripción */}
      <div className="relative z-10 flex flex-col">
        <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">{specialty.title}</h3>
        <p className="text-slate-500 leading-relaxed text-sm mb-4">{specialty.description}</p>

        {/* Botón acordeón */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center text-[#135bec] text-[10px] font-bold uppercase tracking-[0.2em] group/btn transition-transform duration-300 hover:scale-105 origin-left w-fit mb-4"
        >
          <span>Detalles técnicos</span>
          <ChevronRight
            className={`ml-2 transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}
            size={14}
          />
        </button>

        {/* Contenido acordeón */}
        <div
          ref={contentRef}
          className="overflow-hidden transition-all duration-500"
          style={{ maxHeight: height }}
        >
          <ul className="pl-5 text-sm text-slate-500">
            {specialty.details.map((detail, idx) => (
              <li key={idx} className="flex items-center mb-1">
                <ChevronRight className="mr-2 w-3 h-3 text-[#135bec] flex-shrink-0" />
                {detail}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const ServicesDetail: React.FC<ServicesDetailProps> = ({ onContactClick }) => {
  const collaborationModels = [
    "Servicio Head Hunting",
    "Servicio Staffing",
    "Servicio Digital Factoring",
    "Servicio Mesa de Ayuda"
  ];

  const specialties: Specialty[] = [
    {
      icon: Terminal,
      title: 'Consultoría TI',
      description: 'Asesoramiento experto de nuestro equipo para optimizar su infraestructura y procesos tecnológicos mediante auditorías profundas.',
      details: [
        'Auditorías completas de infraestructura y redes',
        'Optimización de infraestructura',
        'Recomendaciones de seguridad y escalabilidad'
      ]
    },
    {
      icon: Lightbulb,
      title: 'Estrategia Digital',
      description: 'Transformamos su visión en resultados tangibles mediante planes de digitalización avanzados alineados con su negocio.',
      details: [
        'Planificación de digitalización estrategica',
        'Optimización de flujos de trabajos',
        'Implementación de métricas KPI',
        'Soporte en marketing digital'
      ]
    },
    {
      icon: Network,
      title: 'Gestión de Proyectos',
      description: 'Ejecución precisa y eficiente de iniciativas complejas con metodologías ágiles que garantizan tiempos de entrega.',
      details: [
        'Metodologías ágiles y Scrum',
        'Planificación y seguimiento de proyectos', 
        'Reporting ejecutivo',
        'Coordinación de equipos'
      ]
    },
    {
      icon: Lock,
      title: 'Ciberseguridad',
      description: 'Protección integral de sus activos digitales mediante firewalls avanzados y protocolos de encriptación de alto grado.',
      details: [
        'Auditorías de seguridad', 
        'Pentesting', 
        'Firewall y encriptación de datos', 
        'Monitoreo y respuesta ante incidentes'
        'Implementación de políticas de seguridad y compliance'
      ]
    },
    {
      icon: Cloud,
      title: 'Soluciones Cloud',
      description: 'Migración y gestión de infraestructuras en la nube para mejorar la escalabilidad y reducir costes.',
      details: [
        'Migración y gestión de infraestructuras',
        'Gestión y monitoreo continuo de servidores',
        'Optimización de recursos'
      ]
    },
    {
      icon: BarChart3,
      title: 'Análisis de Datos',
      description: 'Convertimos sus datos en decisiones inteligentes mediante herramientas de Business Intelligence y Big Data.',
      details: [
        'Implementación de Business Intelligence y Big Data',
        'Dashboards personalizados',
        'Análisis predictivo y reporting'
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
        
        {/* 3. GRID DE TARJETAS DE ESPECIALIDAD CON MARCA DE AGUA ANIMADA */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialties.map((item, idx) => (
            <ServiceCard key={idx} specialty={item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServicesDetail;
