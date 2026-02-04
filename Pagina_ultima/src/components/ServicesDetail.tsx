import React from 'react';
import { Terminal, Lightbulb, Network, Lock, Cloud, BarChart3 } from 'lucide-react';
import ServiceCard from './ServiceCard';
import ServicesHeroLights from './ServicesHeroLights';
import ScrollAnimation from './ScrollAnimation';

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

  const profiles = [
    "Líder Técnico", "Scrum Master", "Dev Android", "Dev Java",
    "BackEnd", "FrontEnd", "Fullstack", "Devops", "UX/UI",
    "Ciberseguridad", "Mesa de Ayuda", "Python", "Dev IOS"
  ];

  const specialties = [
    {
      icon: Terminal,
      title: 'Consultoría TI',
      description: 'Asesoramiento experto de nuestro equipo para optimizar su infraestructura y procesos tecnológicos mediante auditorías profundas.',
      details: [
        'Auditorías profundas de infraestructura',
        'Optimización de procesos y flujos de trabajo',
        'Evaluación de arquitecturas existentes',
        'Recomendaciones de seguridad y escalabilidad',
        'Plan de mejora continua'
      ]
    },
    {
      icon: Lightbulb,
      title: 'Estrategia Digital',
      description: 'Transformamos su visión en resultados tangibles mediante planes de digitalización avanzados alineados con su negocio.',
      details: [
        'Planes de digitalización estratégicos',
        'Implementación de KPIs y métricas de éxito',
        'Gestión del cambio organizacional',
        'Soporte en marketing digital'
      ]
    },
    {
      icon: Network,
      title: 'Gestión de Proyectos',
      description: 'Ejecución precisa y eficiente de iniciativas complejas con metodologías ágiles que garantizan tiempos de entrega.',
      details: [
        'Implementación de metodologías Scrum, Kanban',
        'Reporting ejecutivo',
        'Planificación y seguimiento de proyectos',
        'Coordinación de equipos'
      ]
    },
    {
      icon: Lock,
      title: 'Ciberseguridad',
      description: 'Protección integral de sus activos digitales mediante firewalls avanzados y protocolos de encriptación de alto grado.',
      details: [
        'Auditorías de seguridad y pentesting',
        'Implementación de políticas de seguridad ISO 27001 y compliance',
        'Firewall y encriptación de datos',
        'Monitoreo 24/7 y respuesta ante incidentes'
      ]
    },
    {
      icon: Cloud,
      title: 'Soluciones Cloud',
      description: 'Migración y gestión de infraestructuras en la nube para mejorar la escalabilidad y reducir costes.',
      details: [
        'Migración a AWS, Azure, Google Cloud',
        'Arquitecturas cloud-native y serverless',
        'Implementación de DevOps y CI/CD',
        'Gestión y monitoreo continuo de recursos cloud'
      ]
    },
    {
      icon: BarChart3,
      title: 'Análisis de Datos',
      description: 'Convertimos sus datos en decisiones inteligentes mediante herramientas de Business Intelligence y Big Data.',
      details: [
        'Implementación de Business Intelligence y Big Data (Power BI, Tableau)',
        'Desarrollo de pipelines de datos ETL/ELT',
        'Análisis predictivo y machine learning',
        'Dashboards ejecutivos',
        'Gobierno de datos y calidad de información'
      ]
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pt-16 pb-32 antialiased">

      {/* 1. HERO SECTION */}
      <section className="container mx-auto max-w-7xl px-6 lg:px-8 mb-24">
        <div className="relative overflow-hidden rounded-[3rem] bg-[#0b0e14] p-12 lg:p-24">
          <ServicesHeroLights />

          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-2/3">
              <h1 className="text-4xl lg:text-7xl font-black text-white mb-8">
                Arquitectura <br />
                <span className="text-[#135bec] italic">Sin Compromisos</span>
              </h1>

              <p className="text-lg text-slate-400 mb-10">
                Nuestros profesionales pueden incorporarse bajo esquemas flexibles y adaptados a cada empresa.
              </p>

              <button
                onClick={onContactClick}
                className="rounded-2xl bg-[#135bec] px-10 py-5 font-bold text-white"
              >
                Iniciar Transformación
              </button>
            </div>

            <div className="lg:w-1/3 hidden lg:flex justify-center">
              <img
                src="./images/pc-software.webp"
                alt="PC con códigos de programación"
                className="scale-[1.5]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. SECCIÓN TÉCNICA */}
      <section className="container mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollAnimation>
          <div className="mb-24">
            <h3 className="text-xs font-bold uppercase mb-8">
              Modelo de Colaboración
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {collaborationModels.map((service, index) => (
                <span key={index} className="border-l-2 pl-4">
                  {service}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialties.map((item, idx) => (
              <ServiceCard
                key={idx}
                Icon={item.icon}
                title={item.title}
                description={item.description}
                details={item.details}
                buttonText="Detalles del servicio"
                detailsTitle=""
              />
            ))}
          </div>
        </ScrollAnimation>
      </section>
    </div>
  );
};

export default ServicesDetail;
