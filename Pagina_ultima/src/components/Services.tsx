import React from 'react';
import { Compass, Layers } from 'lucide-react';
import ServiceCard from './ServiceCard';

const profiles = [
  "Líder Técnico", "Scrum Master", "Dev Android", "Dev Java",
  "BackEnd", "FrontEnd", "Fullstack", "Devops", "UX/UI",
  "CiberSeguridad", "Mesa de Ayuda", "Python", "Dev IOS"
];

const servicesData = [
  {
    Icon: Compass,
    title: "Visión Estratégica",
    description: "Alineamos la tecnología con los objetivos reales del negocio, priorizando decisiones que generen impacto y crecimiento sostenible.",
    details: [
      "Priorización basada en impacto y ROI",
      "Roadmap tecnológico alineado al negocio",
      "Soporte a la toma de decisiones"
    ]
  },
  {
    Icon: Layers,
    title: "Excelencia Técnica",
    description: "Diseñamos soluciones tecnológicas con altos estándares de calidad, enfocadas en arquitecturas limpias, escalables y sostenibles.",
    details: [
      "Buenas prácticas y estándares",
      "Diseño mantenible y escalable",
      "Transferencia de conocimiento"
    ]
  }
];

const HighLevelConsulting: React.FC = () => {
  return (
    <section className="bg-slate-50 py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

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
              En BlackTI desarrollamos una confianza a largo plazo que nos permite ser parte del cumplimiento de los objetivos de nuestros clientes.
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-stretch">

          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
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

          {/* Imagen SIN tarjeta (solo fondo blanco, sin sombra) */}
          <div className="relative h-full rounded-[2.5rem] overflow-hidden p-6 group">
            <img
              src="/images/team-collaboration.gif"
              alt="Equipo colaborando en sesión estratégica"
              className="w-full h-[320px] object-cover scale-80 rounded-[2rem] transition-transform duration-500 group-hover:scale-105"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default HighLevelConsulting;
