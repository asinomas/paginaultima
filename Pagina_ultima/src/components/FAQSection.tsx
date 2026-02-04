import React, { useState, useRef, useEffect } from "react";
import { Terminal, Lightbulb, Network, Lock, Cloud, BarChart3 } from "lucide-react";
import ServiceCard from "./ServiceCard";
import ServicesHeroLights from "./ServicesHeroLights";
import ScrollAnimation from "./ScrollAnimation";

interface ServicesDetailProps {
  onContactClick?: () => void;
}

const ServicesDetail: React.FC<ServicesDetailProps> = ({ onContactClick = () => {} }) => {
  const specialties = [
    { icon: Terminal, title: "Consultoría TI", description: "Asesoramiento experto de nuestro equipo para optimizar su infraestructura y procesos tecnológicos mediante auditorías profundas.", details: ["Auditorías profundas de infraestructura", "Optimización de procesos y flujos de trabajo", "Evaluación de arquitecturas existentes", "Recomendaciones de seguridad y escalabilidad", "Plan de mejora continua"] },
    { icon: Lightbulb, title: "Estrategia Digital", description: "Transformamos su visión en resultados tangibles mediante planes de digitalización avanzados alineados con su negocio.", details: ["Planes de digitalización estratégicos", "Implementación de KPIs y métricas de éxito", "Gestión del cambio organizacional", "Soporte en marketing digital"] },
    { icon: Network, title: "Gestión de Proyectos", description: "Ejecución precisa y eficiente de iniciativas complejas con metodologías ágiles que garantizan tiempos de entrega.", details: ["Implementación de metodologías Scrum, Kanban", "Reporting ejecutivo", "Planificación y seguimiento de proyectos", "Coordinación de equipos"] },
    { icon: Lock, title: "Ciberseguridad", description: "Protección integral de sus activos digitales mediante firewalls avanzados y protocolos de encriptación de alto grado.", details: ["Auditorías de seguridad y pentesting", "Implementación de políticas de seguridad ISO 27001 y compliance", "Firewall y encriptación de datos", "Monitoreo 24/7 y respuesta ante incidentes"] },
    { icon: Cloud, title: "Soluciones Cloud", description: "Migración y gestión de infraestructuras en la nube para mejorar la escalabilidad y reducir costes.", details: ["Migración a AWS, Azure, Google Cloud", "Arquitecturas cloud-native y serverless", "Implementación de DevOps y CI/CD", "Gestión y monitoreo continuo de recursos cloud"] },
    { icon: BarChart3, title: "Análisis de Datos", description: "Convertimos sus datos en decisiones inteligentes mediante herramientas de Business Intelligence y Big Data.", details: ["Implementación de Business Intelligence y Big Data (Power BI, Tableau)", "Desarrollo de pipelines de datos ETL/ELT", "Análisis predictivo y machine learning", "Dashboards ejecutivos", "Gobierno de datos y calidad de información"] },
  ];

  const profiles = [
    "Líder Técnico",
    "Scrum Master",
    "Dev Android/iOS",
    "Dev Java",
    "BackEnd",
    "FrontEnd",
    "Fullstack",
    "Devops",
    "UX/UI",
    "Ciberseguridad",
    "Mesa de Ayuda",
    "Python",
  ];

  const profileDescriptions: Record<string, string> = {
    "Líder Técnico": "Además de definir arquitectura y liderar decisiones técnicas, es un perfil con visión de negocio, capaz de alinear tecnología, plazos y objetivos empresariales.",
    "Scrum Master": "No solo aplica Scrum: mejora la madurez ágil del equipo, facilita la comunicación con stakeholders y acelera la entrega de valor.",
    "Dev Android/iOS": "Nuestros desarrolladores mobile están enfocados en productos reales, con experiencia en rendimiento, seguridad y experiencia de usuario en entornos productivos.",
    "Dev Java": "Aporta estabilidad, escalabilidad y buenas prácticas en sistemas empresariales críticos, con experiencia en entornos corporativos.",
    BackEnd: "No solo desarrolla APIs: entiende el negocio, prioriza seguridad, rendimiento y escalabilidad desde el diseño.",
    FrontEnd: "Más que interfaces atractivas, entrega experiencias de usuario funcionales, alineadas a la identidad de la empresa.",
    Fullstack: "Perfil integral que reduce dependencias, acelera desarrollos y mantiene coherencia técnica en todo el producto.",
    Devops: "Optimiza infraestructura y procesos, reduce fallas en producción y mejora la continuidad operativa mediante automatización real.",
    "UX/UI": "Diseña pensando en el usuario final y en los objetivos del negocio, aumentando adopción y satisfacción del cliente.",
    Ciberseguridad: "Trabaja de forma preventiva, no reactiva, protegiendo los activos digitales y la reputación de la empresa.",
    "Mesa de Ayuda": "Atención cercana, tiempos de respuesta definidos y continuidad operativa sin fricción para el usuario final.",
    Python: "Capaz de automatizar procesos, analizar datos y desarrollar soluciones inteligentes que generan eficiencia y ahorro.",
  };

  const [activeProfile, setActiveProfile] = useState<string | null>(null);
  const [displayProfile, setDisplayProfile] = useState<string | null>(null);
  const [transitioning, setTransitioning] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setActiveProfile(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Control fade-out / fade-in al cambiar de perfil
  useEffect(() => {
    if (activeProfile !== displayProfile) {
      if (displayProfile) {
        setTransitioning(true);
        const timeout = setTimeout(() => {
          setDisplayProfile(activeProfile);
          setTransitioning(false);
        }, 300); // Duración fade-out
        return () => clearTimeout(timeout);
      } else {
        setDisplayProfile(activeProfile);
      }
    }
  }, [activeProfile, displayProfile]);

  return (
    <div className="bg-slate-50 min-h-screen pt-16 pb-32 antialiased">
      {/* HERO SECTION */}
      <section className="container mx-auto max-w-7xl px-6 lg:px-8 mb-24">
        <div className="relative overflow-hidden rounded-[3rem] bg-[#0b0e14] p-12 lg:p-24 text-center lg:text-left">
          <ServicesHeroLights />
          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-2/3">
              <h1 className="text-4xl lg:text-7xl font-black text-white leading-tight mb-8 tracking-tighter">
                Talento TI para <br />
                <span className="text-[#135bec] italic drop-shadow-[0_0_15px_rgba(19,91,236,0.3)]">
                  Impulsar tu Empresa
                </span>
              </h1>
              <p className="text-lg lg:text-xl text-slate-400 leading-relaxed max-w-2xl mb-10">
                Nuestros profesionales pueden incorporarse bajo esquemas de outsourcing, staff augmentation o por proyecto, adaptándose a las necesidades específicas de cada empresa.
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

      {/* PERFILES ESPECIALIZADOS */}
      <section
        ref={containerRef}
        className="container mx-auto max-w-7xl px-6 lg:px-8 mb-12"
      >
        <div className="mb-4 flex items-center justify-start max-w-[600px]">
          <span className="text-sm font-semibold text-slate-500 mr-4">
            Perfiles especializados
          </span>
          <div className="flex-1 h-[0.5px] bg-slate-300"></div>
        </div>

        <div className="flex gap-8 relative">
          {/* Contenedor izquierdo dinámico */}
          <div className="w-1/3 min-w-[280px] p-4">
            {displayProfile && (
              <div
                className={`bg-slate-100 rounded-md shadow-sm p-4 transition-opacity duration-500 ${
                  transitioning ? "opacity-0" : "opacity-100"
                }`}
              >
                <p className="text-slate-800 text-sm font-medium max-h-[200px] overflow-y-auto">
                  {profileDescriptions[displayProfile]}
                </p>
              </div>
            )}
          </div>

          {/* Burbujas derecha: siempre alineadas */}
          <div className="flex-1 flex flex-wrap gap-3 justify-end max-w-[calc(100%-300px)]">
            {profiles.map((profile) => (
              <button
                key={profile}
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveProfile(activeProfile === profile ? null : profile);
                }}
                className={`bg-[#135bec]/10 text-black px-4 py-2 rounded-full text-sm font-semibold hover:bg-[#135bec]/20 hover:scale-105 hover:shadow-md transition-all ${
                  activeProfile === profile ? "bg-[#135bec]/20" : ""
                }`}
              >
                {profile}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN DE SERVICIOS */}
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

        <ScrollAnimation>
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
