import React from 'react';
import { Terminal, Lightbulb, Network, Lock, Cloud, BarChart3 } from 'lucide-react';
import ServiceCard from './ServiceCard';

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
    <div className="bg-slate-50 min-h-screen pt-24 pb-32 antialiased">
      {/* 1. HERO SECTION */}
      <section className="container mx-auto max-w-7xl px-6 lg:px-8 mb-24">
        <div className="relative overflow-hidden rounded-[3rem] bg-[#0b0e14] p-12 lg:p-24 text-center lg:text-left">
          <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#135bec]/20 rounded-full blur-[100px]" />

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



            
            {/* COLUMNA DERECHA */}
            <div className="lg:w-1/3 hidden lg:flex flex-col items-end gap-8">


              {/* Imagen */}
                <img
                  src="/images/hero-image.gif"
                  alt="Imagen representativa"
                  className="w-112 h-auto object-contain"
                />
              

              
              {/* Estadísticas */}
              <div className="grid grid-cols-2 gap-4">
                <div className="h-40 w-40 bg-white/5 rounded-3xl border border-white/10 flex flex-col items-center justify-center backdrop-blur-sm">
                  <span className="text-3xl font-black text-[#135bec]">10+</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                    Años Exp.
                  </span>
                </div>

                <div className="h-40 w-40 bg-white/5 rounded-3xl border border-white/10 flex flex-col items-center justify-center backdrop-blur-sm translate-y-8">
                  <span className="text-3xl font-black text-[#135bec]">500+</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                    Proyectos
                  </span>
                </div>
              </div>

              

            </div>
          </div>
        </div>
      </section>

      {/* 2. SECCIÓN TÉCNICA */}
      <section className="container mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <h2 className="text-3xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Nuestra <span className="text-[#135bec] italic">Especialización</span>
          </h2>
          <div className="h-0.5 flex-1 bg-slate-200 hidden md:block mx-10" />
          <p className="text-slate-500 text-sm font-bold uppercase tracking-widest">
            Servicios End-to-End
          </p>
        </div>

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
      </section>
    </div>
  );
};

export default ServicesDetail;
