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

const ServicesDetail: React.FC<ServicesDetailProps> = ({ onContactClick }) => {
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
        'Asesoramiento experto de nuestroequipo para optimizar su infraestructura y procesos tecnológicos mediante auditorías profundas.',
      details: [
        'Auditorías tecnológicas',
        'Optimización de procesos',
        'Roadmap tecnológico'
      ]
    },
    {
      icon: Lightbulb,
      title: 'Estrategia Digital',
      description:
        'Transformamos su visión en resultados tangibles mediante planes de digitalización avanzados alineados con su negocio.',
      details: [
        'Estrategia digital',
        'Transformación tecnológica',
        'Innovación y adopción'
      ]
    },
    {
      icon: Network,
      title: 'Gestión de Proyectos',
      description:
        'Ejecución precisa y eficiente de iniciativas complejas con metodologías ágiles que garantizan tiempos de entrega.',
      details: [
        'Gestión ágil',
        'Control de alcance y tiempos',
        'Reporting ejecutivo'
      ]
    },
    {
      icon: Lock,
      title: 'Ciberseguridad',
      description:
        'Protección integral de sus activos digitales mediante firewalls avanzados y protocolos de encriptación de alto grado.',
      details: [
        'Auditorías de seguridad',
        'Pentesting',
        'Monitoreo y respuesta'
      ]
    },
    {
      icon: Cloud,
      title: 'Soluciones Cloud',
      description:
        'Migración y gestión de infraestructuras en la nube para mejorar la escalabilidad y reducir costes.',
      details: [
        'Migraciones cloud',
        'Arquitecturas escalables',
        'Optimización de costos'
      ]
    },
    {
      icon: BarChart3,
      title: 'Análisis de Datos',
      description:
        'Convertimos sus datos en decisiones inteligentes mediante herramientas de Business Intelligence y Big Data.',
      details: [
        'Business Intelligence',
        'Big Data',
        'Dashboards ejecutivos'
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
                <span className="text-[#135bec] italic drop-shadow-[0_0_15px_rgba(19,91,236,0.3)]">
                  Sin Compromisos
                </span>
              </h1>
              <p className="text-lg lg:text-xl text-slate-400 leading-relaxed max-w-2xl mb-10">
                Impulsando la excelencia digital a través de soluciones tecnológicas estratégicas. En BlackTI ayudamos a su empresa a escalar en el entorno moderno.
              </p>
              <button
                onClick={onContactClick}
                className="rounded-2xl bg-[#135bec] px-10 py-5 text-base font-bold text-white shadow-2xl shadow-[#135bec]/30 hover:scale-105 active:scale-95 transition-all"
              >
                Iniciar Transformación
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MODELO DE COLABORACIÓN */}
      <section className="container mx-auto max-w-7xl px-6 lg:px-8 mb-24">
        <h3 className="text-[10px] font-bold tracking-[0.4em] text-slate-400 uppercase mb-8 border-b border-slate-200 pb-2">
          Modelo de Colaboración
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-8">
          {collaborationModels.map((service, index) => (
            <span
              key={index}
              className="text-xl md:text-2xl font-light text-slate-600 tracking-tight border-l-2 border-[#135bec] pl-5"
            >
              {service}
            </span>
          ))}
        </div>
      </section>

      {/* 3. GRID DE TARJETAS (MISMO CÓDIGO + ACORDEÓN) */}
      <section className="container mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialties.map((item, idx) => {
            const [isExpanded, setIsExpanded] = useState(false);

            return (
              <div
                key={idx}
                className="group relative bg-white p-12 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col h-full"
              >
                {/* Marca de agua */}
                <div className="absolute -top-6 -right-6 text-slate-100 group-hover:text-blue-50 transition-all duration-700 pointer-events-none z-0 group-hover:scale-125">
                  <item.icon size={180} strokeWidth={1} />
                </div>

                <div className="relative z-10 mb-8 flex size-14 items-center justify-center rounded-2xl bg-slate-50 text-[#135bec] group-hover:bg-[#135bec] group-hover:text-white transition-all duration-500 shadow-sm">
                  <item.icon size={28} />
                </div>

                <div className="relative z-10 flex flex-col h-full">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-slate-500 leading-relaxed text-sm mb-6 flex-grow">
                    {item.description}
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

                  {/* ACORDEÓN */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      isExpanded ? 'max-h-96 mt-6' : 'max-h-0'
                    }`}
                  >
                    <ul className="space-y-2 pt-4 border-t border-slate-100">
                      {item.details.map((detail, i) => (
                        <li
                          key={i}
                          className="flex items-start text-sm text-slate-600"
                        >
                          <ArrowRight
                            className="text-[#135bec] mr-2 mt-0.5"
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
          })}
        </div>
      </section>
    </div>
  );
};

export default ServicesDetail;
