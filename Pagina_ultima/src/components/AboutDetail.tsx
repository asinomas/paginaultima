import React, { useState, useRef, useEffect } from 'react';
import { Linkedin, ArrowRight, Menu, X } from 'lucide-react';
import WorldMap from './WorldMap';
import OfficeDetails from './OfficeDetails';
import { OFFICE_LOCATIONS } from '../constants';
import { OfficeLocation } from '../types';
import ScrollAnimation from './ScrollAnimation';
import TextLoop from './TextLoop'; // Asegúrate de que este archivo exista

interface AboutDetailProps {
  onContactClick: () => void;
  onNavigate: (page: 'home' | 'services' | 'about' | 'contact') => void;
}

const AboutDetail: React.FC<AboutDetailProps> = ({ onContactClick, onNavigate }) => {
  const [selectedOffice, setSelectedOffice] = useState<OfficeLocation>(
    OFFICE_LOCATIONS.find(o => o.type === 'Headquarters') || OFFICE_LOCATIONS[0]
  );
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  // --- LÓGICA DE VISIBILIDAD PARA EL LOOP ---
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [titleVisible, setTitleVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setTitleVisible(true);
      },
      { threshold: 0.1 }
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

      {/* SECCIÓN PRINCIPAL */}
      <section className="relative bg-[#F8FAFC] pt-48 pb-18">
        <div className="container mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            
            {/* TEXTO IZQUIERDA */}
            <div className="lg:w-1/2">
              <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#135bec] mb-4">Nuestra Historia</h4>
              
              <h1 ref={titleRef} className="text-5xl lg:text-7xl font-black text-slate-900 leading-[1.1] mb-8 tracking-tighter">
                El Gen BlackTI{' '}
                {titleVisible ? (
                  <TextLoop className="text-[#135bec] italic">
                    <span>Excelencia</span>
                    <span>Compromiso</span>
                    <span>Resultados</span>
                    <span>Innovación</span>
                  </TextLoop>
                ) : (
                  <span className="text-[#135bec] italic">Excelencia</span>
                )}
              </h1>

              <p className="text-lg text-slate-500 mb-6 leading-relaxed tracking-tighter">
                Nacimos para transformar la complejidad técnica en valor empresarial. Somos una startup que trasciende la simple implementación técnica, nos sumergimos en la cultura de nuestros clientes para convertir obstáculos en motores de crecimiento sin perder la continuidad operativa.
              </p>
              
              <button onClick={onContactClick} className="bg-[#135bec] text-white font-bold px-10 py-5 rounded-2xl flex items-center gap-2 hover:scale-105 transition-all">
                Unirse al equipo <ArrowRight size={18} />
              </button>
            </div>

            {/* IMAGEN DERECHA */}
            <div className="lg:w-1/2 flex justify-center relative scale-[0.9] -translate-y-6">
              <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80" 
                  className="h-[600px] w-full object-cover scale-x-[-1]" 
                  alt="Team BlackTI"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN EQUIPO */}
      <section className="container mx-auto max-w-7xl px-6 lg:px-8 py-10">
        <div className="text-center mb-4 flex flex-col items-center">
          <div className="flex items-center w-full justify-center mb-6">
            <div className="h-0.5 flex-1 bg-gradient-to-r from-transparent to-slate-200 hidden md:block mr-10" />
            <h2 className="text-3xl lg:text-5xl font-extrabold text-slate-900 tracking-tight px-6">Quiénes somos</h2>
            <div className="h-0.5 flex-1 bg-gradient-to-l from-transparent to-slate-200 hidden md:block ml-10" />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-20 items-start">
          {/* TEXTO IZQUIERDA */}
          <div className="lg:w-[35%] lg:sticky lg:top-32">
            <h4 className="text-[#135bec] font-bold uppercase tracking-[0.2em] text-[11px] mb-4">Conócenos</h4>
            <h2 className="text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-[1.1]">Equipo</h2>
            <p className="text-slate-500 text-base leading-relaxed font-normal">
              Profesionales apasionados, con un muy buen mindset que dirigen el rumbo de cada proyecto con rigor y visión.
              Nuestro equipo está integrado por personas con experiencia en diseño, desarrollo y estrategia para ofrecer resultados tangibles adaptándose a tus tiempos y objetivos.
            </p>
          </div>

          {/* GRID DE FOTOS */}
          <div className="lg:w-[65%]">
            <ScrollAnimation>
              <div className="origin-top-right scale-[0.85] transform">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {team.map((member, i) => (
                    <div key={i} className="group">
                      <div className={`aspect-[3/4] w-full rounded-3xl overflow-hidden relative shadow-2xl transition-all duration-700 ${expandedCard === i ? 'bg-white' : ''}`}>
                        {/* IMAGEN */}
                        <div className={`absolute inset-0 transition-opacity duration-700 ${expandedCard === i ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                          <img 
                            alt={member.name} 
                            className="grayscale w-full h-full object-cover transition-all duration-[1.5s] group-hover:scale-105 will-change-transform backface-visibility-hidden" 
                            src={member.image} 
                            loading="lazy"
                            onError={(e) => {(e.target as HTMLImageElement).src='https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=800';}}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                        </div>

                        {/* NOMBRE Y LINKEDIN */}
                        <div className={`absolute bottom-6 left-6 right-6 text-right transition-all duration-700 ${expandedCard === i ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                          <h4 className="text-white text-xl font-bold mb-1">{member.name}</h4>
                          <p className="text-white/80 text-xs font-normal uppercase tracking-wider mb-3">{member.role}</p>
                          <div className="flex justify-end">
                            <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex size-9 rounded-xl bg-transparent items-center justify-center cursor-pointer hover:bg-slate-700/50 transition-all text-white shadow-lg backdrop-blur-sm">
                              <Linkedin size={16} />
                            </a>
                          </div>
                        </div>

                        {/* CONTENIDO EXPANDIDO */}
                        <div className={`absolute inset-0 flex flex-col p-6 transition-all duration-700 ${expandedCard === i ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                          <div className="flex items-start gap-4 mb-6">
                            <div className="flex-shrink-0 w-16 h-16 rounded-full overflow-hidden">
                              <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale"/>
                            </div>
                            <div className="flex-1">
                              <h4 className="text-slate-900 text-lg font-bold leading-tight">{member.name}</h4>
                              <p className="text-slate-600 text-xs font-semibold uppercase tracking-tight mt-1">{member.role}</p>
                            </div>
                          </div>
                          <div className="flex-1 flex items-center justify-center px-2">
                            <p className="text-slate-700 text-sm leading-tight text-center">{member.bio}</p>
                          </div>
                        </div>

                        {/* BOTÓN HAMBURGUESA */}
                        <button onClick={() => toggleCard(i)} className="absolute top-4 right-4 z-20 size-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300 group/btn">
                          {expandedCard === i ? <X size={18} className="text-slate-900 transition-transform group-hover/btn:rotate-90"/> : <Menu size={18} className="text-white transition-transform group-hover/btn:scale-110"/>}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* SECCIÓN MAPA GLOBAL */}
      <ScrollAnimation>
        <section className="bg-slate-950 py-24 border-t border-slate-900">
          <div className="container mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-16">
              <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
                <span className="text-[#135bec] italic">Talento</span>
                <span className="text-white/90"> sin fronteras, </span>
                <span className="text-[#135bec] italic">soporte</span>
                <span className="text-white/90"> sin interrupciones</span>
              </h2>
              <p className="mt-6 text-base md:text-lg text-white/70 font-medium">
                Nuestro equipo se encuentra en las siguientes ubicaciones
              </p>
              <div className="mt-8 w-20 h-1 bg-[#135bec] rounded-full"></div>
            </div>

            <div className="bg-slate-900/20 border border-slate-800/60 rounded-[3rem] overflow-hidden backdrop-blur-sm">
              <div className="flex flex-col lg:flex-row min-h-[600px]">
                <div className="flex-[2.5] relative p-8 min-h-[500px]">
                  <WorldMap onSelectOffice={setSelectedOffice} selectedOfficeId={selectedOffice.id} />
                </div>

                <div className="flex-1 bg-slate-900/40 border-l border-slate-800/60 p-10 flex flex-col justify-between">
                  <OfficeDetails office={selectedOffice} />

                  <div className="mt-12">
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-6">Navegar Ubicaciones</p>
                    <div className="grid grid-cols-2 gap-2">
                      {OFFICE_LOCATIONS.map(office => (
                        <button key={office.id} onClick={() => setSelectedOffice(office)} className={`px-4 py-3 rounded-xl text-[10px] font-bold uppercase tracking-wider transition-all duration-300 ${selectedOffice.id === office.id ? 'bg-[#135bec] text-white shadow-lg shadow-[#135bec]/20' : 'bg-slate-800/40 text-slate-400 hover:text-white hover:bg-slate-800'}`}>
                          {office.city}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>
    </div>
  );
};

export default AboutDetail;
