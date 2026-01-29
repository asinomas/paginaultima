import React from 'react';
import { Compass, Layers, Shield } from 'lucide-react';
import ServiceCard from './ServiceCard';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const profiles = [
  "Líder Técnico", "Scrum Master", "Dev Android", "Dev Java",
  "BackEnd", "FrontEnd", "Fullstack", "Devops", "UX/UI",
  "Ciberseguridad", "Mesa de Ayuda", "Python", "Dev IOS"
];

const servicesData = [
  {
    Icon: Code,
    title: "Desarrollo",
    description:
      "Alineamos soluciones digitales generen impacto y crecimiento sostenible, permiten a tu empresa crecer con confianza.",
    details: [
      "Backend",
      "Frontend",
      "Fullstack",
      "Android/iOS"
    ]
  },
  {
    Icon: UserCheck,
    title: "Liderazgo",
    description:
      "Guiamos equipos tecnológicos para que trabajen alineados con los objetivos de negocio.",
    details: [
      "Scrum Master",
      "Líder Técnico",
      "Gestión de Equipos"
    ]
  },
  {
    Icon: Shieldcheck,
    title: "Especialidades",
    description:
      "Capacidades clave que refuerzan la operación diaria, la seguridad y la experiencia del usuario, con seguimiento activo y acompañamiento constante.",
    details: [
      "Ciberseguridad",
      "DevOps",
      "UX/UI"
    ]
  }
];

const HighLevelConsulting: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className={`bg-slate-50 py-24 md:py-32 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-24">
          <div className="max-w-xl">
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#135bec] uppercase mb-4 block">
              Excelencia Operativa
            </span>

            <h3 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-8 tracking-tight leading-[1.1]">
              Consultoría de <br />
              <span className="text-[#135bec] italic">Alto Nivel</span>
            </h3>

            <div className="w-16 h-1 bg-[#135bec] mb-8"></div>

            <p className="text-lg text-slate-600 leading-relaxed">
              Eliminamos su riesgo operativo entregando profesionales evaluados,
              acompañados y alineados al negocio, listos para generar impacto real
              en tu empresa. Desarrollamos una confianza a largo plazo que nos
              permite ser parte del cumplimiento de los objetivos de nuestros
              clientes.
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
                  className="px-5 py-2.5 bg-white text-slate-500 text-[12px] font-semibold rounded-xl shadow-sm
                             hover:text-[#135bec] hover:-translate-y-1 hover:shadow-md transition-all duration-300"
                >
                  {profile}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* TARJETAS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-stretch">
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

export default HighLevelConsulting;
