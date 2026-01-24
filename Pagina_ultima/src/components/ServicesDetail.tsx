import React, { useState } from 'react';
import {
  Terminal,
  Lightbulb,
  Network,
  Lock,
  Cloud,
  BarChart3,
  ArrowRight,
  ChevronDown
} from 'lucide-react';

interface ServicesDetailProps {
  onContactClick: () => void;
}

/* ---------------- DATOS ---------------- */

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
    description:
      'Asesoramiento experto de nuestro equipo para optimizar su infraestructura y procesos tecnológicos.',
    details: [
      'Auditorías tecnológicas y diagnósticos de madurez',
      'Optimización de procesos TI',
      'Roadmap tecnológico alineado al negocio'
    ]
  },
  {
    icon: Lightbulb,
    title: 'Estrategia Digital',
    description:
      'Transformamos su visión en resultados tangibles mediante planes de digitalización avanzados.',
    details: [
      'Definición de estrategia digital',
      'Transformación cultural y tecnológica',
      'Innovación y adopción tecnológica'
    ]
  },
  {
    icon: Network,
    title: 'Gestión de Proyectos',
    description:
      'Ejecución precisa y eficiente de iniciativas complejas con metodologías ágiles.',
    details: [
      'Gestión ágil y tradicional (Scrum / PMI)',
      'Control de alcance, tiempo y costos',
      'PMO y reporting ejecutivo'
    ]
  },
  {
    icon: Lock,
    title: 'Ciberseguridad',
    description:
      'Protección integral de sus activos digitales mediante controles avanzados.',
    details: [
      'Auditorías y pentesting',
      'Políticas de seguridad y compliance',
      'Monitoreo y respuesta a incidentes'
    ]
  },
  {
    icon: Cloud,
    title: 'Soluciones Cloud',
    description:
      'Migración y gestión de infraestructuras en la nube para mejorar la escalabilidad.',
    details: [
      'Arquitecturas cloud escalables',
      'Migraciones AWS / Azure / GCP',
      'Optimización de costos y rendimiento'
    ]
  },
  {
    icon: BarChart3,
    title: 'Análisis de Datos',
    description:
      'Convertimos sus datos en decisiones inteligentes.',
    details: [
      'Business Intelligence',
      'Big Data y analítica avanzada',
      'Dashboards ejecutivos'
    ]
  }
];

/* ---------------- TARJETA CON ACORDEÓN ---------------- */

const ServiceCard = ({ Icon, title, description, details }: any) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative bg-white p-12 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col">
      
      {/* Marca de agua */}
      <div className="absolute -top-6 -right-6 text-slate-100 group-hover:text-blue-50 transition-all duration-700 pointer-events-none group-hover:scale-125">
        <Icon size={180} strokeWidth={1} />
      </div>

      {/* Icono */}
      <div className="relative z-10 mb-8 flex size-14 items-center justify-center rounded-2xl bg-slate-50 text-[#135bec] hover:bg-[#135bec] hover:text-white transition-all duration-500 shadow-sm">
        <Icon size={28} />
      </div>

      {/* Contenido */}
      <div className="relative z-10 flex flex-col">
        <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">
          {title}
        </h3>

        <p className="text-slate-500 leading-relaxed text-sm mb-8">
          {description}
        </p>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center text-[#135bec] text-[10px] font-bold uppercase tracking-[0.2em] transition-transform duration-300 hover:scale-105 origin-left w-fit"
        >
          <span>Detalles técnicos</span>
          <ChevronDown
            className={`ml-2 transition-all duration-300 ${
              isExpanded ? 'rotate-180' : ''
            }`}
            size={14}
          />
        </button>
      </div>

      {/* Acordeón */}
      <div
        className={`overflow-hidden transition-all duration-500 ${
          isExpanded ? 'max-h-96 mt-6' : 'max-h-0'
        }`}
      >
        <div className="pt-4 border-t border-slate-100">
          <ul className="space-y-2">
            {details.map((detail: string, idx: number) => (
              <li key={idx} className="flex items-start text-sm text-slate-600">
                <ArrowRight className="text-[#135bec] mr-2 mt-0.5" size={12} />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

/* ---------------- COMPONENTE PRINCIPAL ---------------- */

const ServicesDetail: React.FC<ServicesDetailProps> = ({ onContactClick }) => {
  return (
    <div className="bg-slate-50 min-h-screen pt-24 pb-32 antialiased">
      
      {/* 1. HERO */}
      <section className="container mx-auto max-w-7xl px-6 lg:px-8 mb-24">
        <div className="relative overflow-hidden rounded-[3rem] bg-[#0b0e14] p-12 lg:p-24">
          <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#135bec]/20 rounded-full blur-[100px]" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-2/3">
              <h1 className="text-4xl lg:text-7xl font-black text-white leading-tight mb-8 tracking-tighter">
                Arquitectura <br />
                <span className="text-[#135bec] italic">Sin Compromisos</span>
              </h1>
              <p className="text-lg lg:text-xl text-slate-400 mb-10 max-w-2xl">
                Impulsando la excelencia digital a través de soluciones tecnológicas estratégicas.
              </p>
              <button
                onClick={onContactClick}
                className="rounded-2xl bg-[#135bec] px-10 py-5 text-base font-bold text-white shadow-2xl hover:scale-105 transition-all"
              >
                Iniciar Transformación
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MODELO DE COLABORACIÓN */}
      <section className="container mx-auto max-w-7xl px-6 lg:px-8 mb-24">
        <h3 className="text-[10px] font-bold tracking-[0.4em] text-slate-400 uppercase mb-8 border-b pb-2">
          Modelo de Colaboración
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {collaborationModels.map((item, idx) => (
            <span
              key={idx}
              className="text-xl font-light text-slate-600 border-l-2 border-[#135bec] pl-5"
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* 3. TARJETAS CON ACORDEÓN */}
      <section className="container mx-auto max-w-7xl px-6 lg:px-8">
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

export default ServicesDetail;
