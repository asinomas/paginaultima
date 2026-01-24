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
      'Ejecución eficiente de iniciativas complejas con metodologías ágiles.',
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
      'Migración y gestión de infraestructuras en la nube.',
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
      'Convertimos datos en decisiones inteligentes.',
    details: [
      'Business Intelligence',
      'Big Data y analítica avanzada',
      'Dashboards ejecutivos'
    ]
  }
];

/* ---------------- TARJETA ACORDEÓN ---------------- */

const ServiceCard = ({ Icon, title, description, details }: any) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative bg-white rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-500 group flex flex-col overflow-hidden">
      <div className="p-12">
        {/* Marca de agua */}
        <div className="absolute -top-6 -right-6 text-slate-100 group-hover:text-blue-50 transition-all duration-700 pointer-events-none group-hover:scale-125">
          <Icon size={180} strokeWidth={1} />
        </div>

        {/* Icono */}
        <div className="relative z-10 mb-8 flex size-14 items-center justify-center rounded-2xl bg-slate-50 text-[#135bec] group-hover:bg-[#135bec] group-hover:text-white transition-all duration-500 shadow-sm">
          <Icon size={28} />
        </div>

        {/* Contenido */}
        <div className="relative z-10">
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
      </div>

      {/* Acordeón */}
      <div
        className={`overflow-hidden transition-all duration-500 ${
          isExpanded ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="px-12 pb-10 pt-2 bg-slate-50/50 border-t border-slate-100">
          <ul className="space-y-2">
            {details.map((detail: string, idx: number) => (
              <li key={idx} className="flex items-start text-sm text-slate-600">
                <ArrowRight
                  className="text-[#135bec] mr-2 mt-0.5 flex-shrink-0"
                  size={12}
                />
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
      {/* HERO y secciones superiores SIN CAMBIOS */}

      {/* GRID DE TARJETAS CON ACORDEÓN */}
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
