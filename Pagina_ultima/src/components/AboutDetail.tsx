import React, { useState } from 'react';
import { Linkedin, ArrowRight } from 'lucide-react';
import WorldMap from './WorldMap';
import OfficeDetails from './OfficeDetails';
import { OFFICE_LOCATIONS } from '../constants';
import { OfficeLocation } from '../types';

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

  const team = [
    {
      name: 'Rodrigo Ledesma',
      role: 'CEO & Founder',
      image: '/team/rodrigo.jpg',
      bio: 'Experto en arquitectura de sistemas y gestión operativa escalable, especializado en garantizar la continuidad de negocios.',
      linkedin: 'https://linkedin.com/in/rodrigo-andres-ledesma-ritchie-6370aa26'
    },
    {
      name: 'Cristian Quezada',
      role: 'Arquitecto TI',
      image: '/team/cristian.jpg',
      bio: 'Estratega en consultoría IT con una amplia trayectoria en la dirección de proyectos complejos de transformación digital.',
      linkedin: 'https://linkedin.com/in/cristian-quezada-00372920'
    },
    {
      name: 'Byron Molina',
      role: 'Backend Developer',
      image: '/team/byron.jpg',
      bio: 'Especialista FullStack. Experto en desarrollo, despliegue y mantención de aplicaciones web, BFFs, APIs y microservicios.',
      linkedin: 'https://linkedin.com/in/bmolinh'
    },
    {
      name: 'Daniela Paredes',
      role: 'Project Management Office',
      image: '/team/daniela.jpg',
      bio: 'Líder en planificacion, gestión, desarrollo y supervision organizacional, enfocada en equipos técnicos de alto rendimiento.',
      linkedin: 'https://linkedin.com/in/daniela-paredes-vidal'
    }
  ];

  return (
    <div className="bg-white min-h-screen pt-24 antialiased">

      
      {/* SECCIÓN HERO / HISTORIA */}
      <section className="bg-[#F8FAFC] container mx-auto max-w-7xl px-6 lg:px-8 mb-32">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#135bec] mb-4">Nuestra Historia</h4>
            <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-[1.1] mb-8 tracking-tighter leading-tight">
              El Gen BlackTI <span className="text-[#135bec] italic">Excelencia</span>
            </h1>
            <p className="text-base lg:text-xl text-slate-500 font-normal leading-relaxed mb-10 max-w-xl">
              Nacimos para transformar la complejidad técnica en valor empresarial. Somos un equipo de alto rendimiento, con obsesión por el detalle y mentalidad problem-solver.
            </p>
            <div className="flex gap-4">
              <button 
                onClick={onContactClick} 
                className="bg-[#135bec] text-white font-bold px-10 py-5 rounded-2xl shadow-2xl shadow-[#135bec]/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
              >
                Unirse al equipo <ArrowRight size={18} />
              </button>
            </div>
          </div>
          
          <div className="lg:w-1/2 flex justify-center relative">


            
            {/* IMAGEN LIBRE */}
            <div className="relative hidden md:flex">
              <div className="shadow-xl rounded-3xl scale-[1.3] -translate-y-1 -translate-x-5">
                <img 
                  src={fotoAbout} 
                  alt="Team Work" 
                  className="w-full max-w-md object-contain translate-x-[1]" 
                  onError={(e) => {
                    console.log('Error cargando foto-about.webp');
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop';
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>



      
      {/* QUIENES SOMOS */}
<section className="container mx-auto max-w-7xl px-6 lg:px-8 mb-40">
  <div className="text-center mb-24 flex flex-col items-center">
    <div className="flex items-center w-full justify-center mb-6">
      <div className="h-0.5 flex-1 bg-slate-200 hidden md:block mx-10" /> {/* Línea izquierda */}
      <h2 className="text-3xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
        ¿Quienes Somos?
      </h2>
      <div className="h-0.5 flex-1 bg-slate-200 hidden md:block mx-10" /> {/* Línea derecha */}
    </div>
    <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
      Líderes apasionados por la tecnología que dirigen el rumbo de cada proyecto con rigor y visión.
    </p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
    {team.map((member, i) => (
      <div key={i} className="group flex flex-col items-center text-center">
        <div className="aspect-[3/4] w-3/4 mx-auto rounded-[2.5rem] overflow-hidden mb-8 bg-slate-50 shadow-sm border border-slate-100 relative">
          <img 
            alt={member.name} 
            className="grayscale w-full h-full object-cover transition-all duration-[1.5s] group-hover:grayscale-0 group-hover:scale-105" 
            src={member.image} 
            loading="lazy"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=800';
            }}
          />
          <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
            <a 
              href={member.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="size-10 rounded-xl bg-white/90 backdrop-blur-md flex items-center justify-center cursor-pointer hover:bg-[#135bec] hover:text-white transition-all text-[#135bec] shadow-lg border border-white/20"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>
        <h4 className="text-2xl font-bold text-slate-900 mb-2">{member.name}</h4>
        <p className="text-[11px] font-black text-[#135bec] mb-6 uppercase tracking-[0.2em]">{member.role}</p>
        <p className="text-slate-500 text-sm leading-relaxed max-w-[220px]">{member.bio}</p>
      </div>
    ))}
  </div>
</section>


      

      {/* SECCIÓN MAPA GLOBAL */}
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
                <WorldMap 
                  onSelectOffice={setSelectedOffice} 
                  selectedOfficeId={selectedOffice.id} 
                />
              </div>

              <div className="flex-1 bg-slate-900/40 border-l border-slate-800/60 p-10 flex flex-col justify-between">
                <OfficeDetails office={selectedOffice} />

                <div className="mt-12">
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-6">Navegar Ubicaciones</p>
                  <div className="grid grid-cols-2 gap-2">
                    {OFFICE_LOCATIONS.map(office => (
                      <button
                        key={office.id}
                        onClick={() => setSelectedOffice(office)}
                        className={`px-4 py-3 rounded-xl text-[10px] font-bold uppercase tracking-wider transition-all duration-300 ${
                          selectedOffice.id === office.id
                          ? 'bg-[#135bec] text-white shadow-lg shadow-[#135bec]/20'
                          : 'bg-slate-800/40 text-slate-400 hover:text-white hover:bg-slate-800'
                        }`}
                      >
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
    </div>
  );
};

export default AboutDetail;
