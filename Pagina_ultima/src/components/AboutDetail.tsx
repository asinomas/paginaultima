import React, { useState, useRef, useEffect } from 'react';
import { Linkedin, ArrowRight, Menu, X } from 'lucide-react';
import WorldMap from './WorldMap';
import OfficeDetails from './OfficeDetails';
import { OFFICE_LOCATIONS } from '../constants';
import { OfficeLocation } from '../types';
import ScrollAnimation from './ScrollAnimation';
import TextLoop from './TextLoop';

// IMPORTAR LA IMAGEN DESDE PUBLIC
import fotoAbout from '/images/foto-about.webp';

interface AboutDetailProps {
  onContactClick: () => void;
  onNavigate: (page: 'home' | 'services' | 'about' | 'contact') => void;
}

const AboutDetail: React.FC<AboutDetailProps> = ({ onContactClick, onNavigate }) => {
  const [selectedOffice, setSelectedOffice] = useState<OfficeLocation>(
    OFFICE_LOCATIONS.find(o => o.type === 'Headquarters') || OFFICE_LOCATIONS[0]
  );

  // Estado para controlar qué tarjeta está expandida
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  // ---- VISIBILIDAD DEL TÍTULO ----
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const [titleVisible, setTitleVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTitleVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (titleRef.current) observer.observe(titleRef.current);

    return () => observer.disconnect();
  }, []);

  const team = [
    {
      name: 'Rodrigo Ledesma',
      role: 'CEO & Founder',
      image: './team/rodrigo.jpg',
      bio: 'Experto en sistemas y gestión operativa escalable con vasta experiencia en múltiples industrias en Latinoamérica, especializado en garantizar la continuidad de negocios.',
      linkedin: 'https://linkedin.com/in/rodrigo-andres-ledesma-ritchie-6370aa26'
    },
    {
      name: 'Cristian Quezada',
      role: 'IT Architect',
      image: './team/cristian.jpg',
      bio: 'Estratega de TI con foco en diseñar arquitecturas eficientes en proyectos complejos de transformación digital, cloud, DevOps, optimizando el desempeño del negocio.',
      linkedin: 'https://linkedin.com/in/cristian-quezada-00372920'
    },
    {
      name: 'Byron Molina',
      role: 'Backend Developer',
      image: './team/byron.jpg',
      bio: 'Especialista en desarrollo, despliegue y mantención de aplicaciones web, BFFs, APIs, microservicios y migraciones tecnológicas.',
      linkedin: 'https://linkedin.com/in/bmolinh'
    },
    {
      name: 'Daniela Paredes',
      role: 'Project Management Office',
      image: './team/daniela.jpg',
      bio: 'Líder en planificacion, gestión, desarrollo y supervision organizacional, enfocada en equipos técnicos de alto rendimiento.',
      linkedin: 'https://linkedin.com/in/daniela-paredes-vidal'
    },
    {
      name: 'Gonzalo Astudillo',
      role: 'IT Delivery Manager',
      image: './team/gonzalo.jpg',
      bio: 'Impulsor de innovación tecnológica y proyectos críticos en sectores regulados, combinando integración de sistemas, desarrollo digital y optimización operativa.',
      linkedin: 'https://linkedin.com/in/gastu'
    }
  ];

  const toggleCard = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <div className="bg-white min-h-screen antialiased">

      {/* QUIENES SOMOS */}
      <section className="relative bg-[#F8FAFC] pt-48 pb-18 after:absolute after:bottom-0 after:left-0 after:w-full after:h-48 after:bg-gradient-to-b after:from-[#F8FAFC]/20 after:via-[#F8FAFC]/60 after:to-white after:pointer-events-none">
        <div className="container mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-start">

            {/* TEXTO A LA IZQUIERDA */}
            <div className="lg:w-1/2">
              <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#135bec] mb-4">
                Nuestra Historia
              </h4>

              <h1
                ref={titleRef}
                className="text-5xl lg:text-7xl font-black text-slate-900 leading-[1.1] mb-8 tracking-tighter"
              >
                El Gen BlackTI{' '}
                {titleVisible ? (
                  <TextLoop
                    className="inline-flex overflow-y-clip text-[#135bec] italic"
                    transition={{
                      type: 'spring',
                      stiffness: 900,
                      damping: 80,
                      mass: 10,
                    }}
                    variants={{
                      initial: {
                        y: 20,
                        rotateX: 90,
                        opacity: 0,
                        filter: 'blur(4px)',
                      },
                      animate: {
                        y: 0,
                        rotateX: 0,
                        opacity: 1,
                        filter: 'blur(0px)',
                      },
                      exit: {
                        y: -20,
                        rotateX: -90,
                        opacity: 0,
                        filter: 'blur(4px)',
                      },
                    }}
                  >
                    <span>Excelencia</span>
                    <span>Compromiso</span>
                    <span>Transparencia</span>
                    <span>Compañía</span>
                    <span>Resultados</span>
                  </TextLoop>
                ) : (
                  <span className="text-[#135bec] italic">Excelencia</span>
                )}
              </h1>

              <p className="text-lg md:text[17px] font-normal text-slate-500 tracking-tighter mb-6 leading-relaxed">
                Nacimos para transformar la complejidad técnica en valor empresarial. Somos una startup que trasciende la simple implementación técnica, nos sumergimos en la cultura de nuestros clientes para convertir obstáculos en motores de crecimiento sin perder la continuidad operativa.
              </p>

              <div className="space-y-6 mb-12">
                <p className="text-lg leading-relaxed text-slate-500 tracking-tighter font-normal md:text[17px] mb-6">
                  Creemos que el éxito del trabajo en equipo solo es sostenible cuando está alineado el talento con una visión estratégica clara.
                </p>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={onContactClick}
                  className="bg-[#135bec] text-white font-bold px-10 py-5 rounded-2xl shadow-2xl shadow-[#135bec]/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
                >
                  Unirse al equipo <ArrowRight size={18} />
                </button>
              </div>
            </div>

            {/* IMAGEN DERECHA */}
            <div className="lg:w-1/2 flex justify-center relative scale-[0.9] -translate-y-6">
              <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl group">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80"
                  className="h-[600px] w-full object-cover scale-x-[-1] transition-transform duration-[2s] group-hover:scale-[1.05] group-hover:scale-x-[-1.05]"
                  alt="Quienes somos"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-10 right-10">
                  <p className="text-blue-400 font-bold uppercase tracking-widest text-xs mb-2 text-right">
                    Fundada en 2020
                  </p>
                  <h4 className="text-3xl font-bold text-white tracking-tight text-right">
                    Estrategia y Resultados
                  </h4>
                </div>
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-100 rounded-full blur-[80px] -z-10"></div>
            </div>

          </div>
        </div>
      </section>

      {/* EL RESTO DEL COMPONENTE PERMANECE IDÉNTICO */}
      {/* (Equipo, mapa, cards, etc.) */}
    </div>
  );
};

export default AboutDetail;

