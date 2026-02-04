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
    { icon: Terminal, title: "Consultoría TI", description: "Asesoramiento experto...", details: ["Auditorías profundas", "Optimización de procesos"] },
    { icon: Lightbulb, title: "Estrategia Digital", description: "Transformamos su visión...", details: ["Planes de digitalización", "KPIs y métricas"] },
    { icon: Network, title: "Gestión de Proyectos", description: "Ejecución precisa...", details: ["Scrum/Kanban", "Reporting"] },
    { icon: Lock, title: "Ciberseguridad", description: "Protección integral...", details: ["Auditorías de seguridad", "Firewall"] },
    { icon: Cloud, title: "Soluciones Cloud", description: "Migración y gestión...", details: ["AWS/Azure", "DevOps"] },
    { icon: BarChart3, title: "Análisis de Datos", description: "Convertimos sus datos...", details: ["BI y Big Data", "Dashboards ejecutivos"] },
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
    "Líder Técnico": "Además de definir arquitectura y liderar decisiones técnicas...",
    "Scrum Master": "No solo aplica Scrum: mejora la madurez ágil del equipo...",
    "Dev Android/iOS": "Nuestros desarrolladores mobile están enfocados en productos reales...",
    "Dev Java": "Aporta estabilidad, escalabilidad y buenas prácticas en sistemas empresariales críticos...",
    BackEnd: "No solo desarrolla APIs: entiende el negocio, prioriza seguridad...",
    FrontEnd: "Más que interfaces atractivas, entrega experiencias de usuario funcionales...",
    Fullstack: "Perfil integral que reduce dependencias, acelera desarrollos...",
    Devops: "Optimiza infraestructura y procesos, reduce fallas en producción...",
    "UX/UI": "Diseña pensando en el usuario final y en los objetivos del negocio...",
    Ciberseguridad: "Trabaja de forma preventiva, no reactiva, protegiendo los activos digitales...",
    "Mesa de Ayuda": "Atención cercana, tiempos de respuesta definidos y continuidad operativa...",
    Python: "Capaz de automatizar procesos, analizar datos y desarrollar soluciones inteligentes...",
  };

  const [activeProfile, setActiveProfile] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Click fuera para cerrar la descripción
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
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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

        <div className="flex gap-8">
          {/* Contenedor izquierdo dinámico con fade */}
          <div className="w-1/3 p-4 min-h-[120px]">
            <div
              className={`transition-opacity duration-300 ${
                activeProfile ? "opacity-100" : "opacity-0 h-0"
              }`}
            >
              {activeProfile && (
                <p className="text-slate-800 text-sm font-medium">
                  {profileDescriptions[activeProfile]}
                </p>
              )}
            </div>
          </div>

          {/* Burbujas derecha */}
          <div className="flex-1 flex flex-wrap gap-3 justify-end max-w-[600px]">
            {profiles.map((profile) => (
              <button
                key={profile}
                onClick={() =>
                  setActiveProfile(activeProfile === profile ? null : profile)
                }
                className={`bg-[#135bec]/10 text-black px-4 py-2 rounded-full text-sm font-semibold hover:bg-[#135bec]/20 transition-colors ${
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
