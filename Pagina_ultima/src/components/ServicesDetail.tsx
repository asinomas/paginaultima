import React, { useState, useRef, useEffect } from "react";
import {
  Terminal,
  Lightbulb,
  Network,
  Lock,
  Cloud,
  BarChart3,
} from "lucide-react";
import ServiceCard from "./ServiceCard";
import ServicesHeroLights from "./ServicesHeroLights";
import ScrollAnimation from "./ScrollAnimation";

interface ServicesDetailProps {
  onContactClick?: () => void;
}

const ServicesDetail: React.FC<ServicesDetailProps> = ({
  onContactClick = () => {},
}) => {
  /* =========================
     SERVICIOS
  ========================= */
  const specialties = [
    {
      icon: Terminal,
      title: "Consultoría TI",
      description:
        "Asesoramiento experto para optimizar infraestructura y procesos tecnológicos.",
      details: [
        "Auditorías de infraestructura",
        "Optimización de procesos",
        "Evaluación de arquitectura",
        "Recomendaciones de seguridad",
        "Plan de mejora continua",
      ],
    },
    {
      icon: Lightbulb,
      title: "Estrategia Digital",
      description:
        "Planes de digitalización alineados a objetivos de negocio.",
      details: [
        "Roadmaps digitales",
        "KPIs y métricas",
        "Gestión del cambio",
        "Soporte en marketing digital",
      ],
    },
    {
      icon: Network,
      title: "Gestión de Proyectos",
      description:
        "Ejecución eficiente de proyectos con metodologías ágiles.",
      details: [
        "Scrum y Kanban",
        "Reporting ejecutivo",
        "Planificación",
        "Coordinación de equipos",
      ],
    },
    {
      icon: Lock,
      title: "Ciberseguridad",
      description:
        "Protección integral de los activos digitales de la empresa.",
      details: [
        "Auditorías de seguridad",
        "Pentesting",
        "Firewalls",
        "Monitoreo 24/7",
      ],
    },
    {
      icon: Cloud,
      title: "Soluciones Cloud",
      description:
        "Infraestructura cloud escalable y optimizada en costos.",
      details: [
        "AWS / Azure / GCP",
        "Arquitecturas cloud-native",
        "DevOps y CI/CD",
        "Monitoreo continuo",
      ],
    },
    {
      icon: BarChart3,
      title: "Análisis de Datos",
      description:
        "Datos convertidos en decisiones estratégicas.",
      details: [
        "Power BI / Tableau",
        "ETL / ELT",
        "Análisis predictivo",
        "Dashboards ejecutivos",
      ],
    },
  ];

  /* =========================
     PERFILES
  ========================= */
  const profiles = [
    "Tech Lead",
    "Scrum Master",
    "Ciberseguridad",
    "DevOps",
    "Dev Java",
    "Python",
    "BackEnd",
    "FrontEnd",
    "Fullstack",
    "UX/UI",
    "Dev Android/iOS",
    "Mesa de Ayuda",
  ];

  const profileDescriptions: Record<string, string> = {
    "Tech Lead":
      "Define arquitectura, lidera decisiones técnicas y alinea tecnología con objetivos de negocio.",
    "Scrum Master":
      "Facilita equipos ágiles y maximiza la entrega de valor.",
    Ciberseguridad:
      "Protege los activos digitales de forma preventiva.",
    DevOps:
      "Automatiza procesos y mejora la estabilidad productiva.",
    "Dev Java":
      "Desarrolla sistemas empresariales robustos y escalables.",
    Python:
      "Automatiza procesos y crea soluciones eficientes.",
    BackEnd:
      "Diseña APIs seguras y eficientes.",
    FrontEnd:
      "Construye interfaces enfocadas en experiencia de usuario.",
    Fullstack:
      "Perfil integral adaptable a múltiples capas.",
    "UX/UI":
      "Diseño centrado en el usuario y la conversión.",
    "Dev Android/iOS":
      "Aplicaciones móviles nativas y seguras.",
    "Mesa de Ayuda":
      "Soporte continuo y cercano.",
  };

  const [activeProfile, setActiveProfile] = useState<string | null>(null);
  const [displayProfile, setDisplayProfile] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  /* =========================
     EFECTOS
  ========================= */
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
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (activeProfile === displayProfile) return;

    if (isVisible) {
      setIsVisible(false);
      const timeout = setTimeout(() => {
        setDisplayProfile(activeProfile);
        if (activeProfile)
          requestAnimationFrame(() => setIsVisible(true));
      }, 250);
      return () => clearTimeout(timeout);
    }

    if (activeProfile) {
      setDisplayProfile(activeProfile);
      requestAnimationFrame(() => setIsVisible(true));
    } else {
      setDisplayProfile(null);
    }
  }, [activeProfile]);

  /* =========================
     RENDER
  ========================= */
  return (
    <div className="bg-slate-50 min-h-screen pt-16 pb-32">
      {/* ================= HERO ================= */}
      <section className="container mx-auto max-w-7xl px-6 lg:px-8 mb-24">
        <div className="relative overflow-hidden rounded-[3rem] bg-[#0b0e14] p-12 lg:p-24">
          <ServicesHeroLights />

          {/* Imagen decorativa derecha */}
          <div className="hidden lg:block absolute top-0 right-0 h-full w-[40%] pointer-events-none">
            <img
              src="/images/foto-service-hero.png"
              alt="Equipo colaborando"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0b0e14] via-[#0b0e14]/50 to-transparent" />
          </div>

          <div className="relative z-10 max-w-3xl">
            <h1 className="text-4xl lg:text-7xl font-black text-white mb-8">
              Talento TI para <br />
              <span className="text-[#135bec] italic">
                Impulsar tu Empresa
              </span>
            </h1>

            <p className="text-lg text-slate-400 mb-10 max-w-2xl">
              Nuestros profesionales se integran a tu equipo bajo
              distintos esquemas de contratación.
            </p>

            <button
              onClick={onContactClick}
              className="rounded-2xl bg-[#135bec] px-10 py-5 font-bold text-white hover:scale-105 transition"
            >
              Iniciar Transformación
            </button>
          </div>
        </div>
      </section>

      {/* ================= PERFILES ================= */}
      <section
        ref={containerRef}
        className="container mx-auto max-w-7xl px-6 lg:px-8 mb-24"
      >
        <h2 className="text-3xl font-black mb-10">
          Perfiles Disponibles
        </h2>

        <div className="flex flex-wrap gap-3 mb-8">
          {profiles.map((profile) => (
            <button
              key={profile}
              onClick={() =>
                setActiveProfile(
                  activeProfile === profile ? null : profile
                )
              }
              className={`rounded-xl px-5 py-2 text-sm font-semibold transition ${
                activeProfile === profile
                  ? "bg-[#135bec] text-white"
                  : "bg-slate-200 hover:bg-slate-300"
              }`}
            >
              {profile}
            </button>
          ))}
        </div>

        {displayProfile && (
          <div
            className={`max-w-3xl transition-all duration-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <p className="text-lg text-slate-700">
              {profileDescriptions[displayProfile]}
            </p>
          </div>
        )}
      </section>

      {/* ================= SERVICIOS ================= */}
      <section className="container mx-auto max-w-7xl px-6 lg:px-8">
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
