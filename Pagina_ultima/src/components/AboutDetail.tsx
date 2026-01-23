import React, { useState } from 'react';
import { Linkedin, ArrowRight } from 'lucide-react';
import WorldMap from './WorldMap'; 
import OfficeDetails from './OfficeDetails';
import { OFFICE_LOCATIONS } from '../constants'; // El ".." es para salir de components e ir a src
import { OfficeLocation } from '../types';     // El ".." es para salir de components e ir a src

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
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      bio: 'Experto en arquitectura de sistemas y gestión operativa, especializado en garantizar la continuidad de negocio.',
      linkedin: 'https://linkedin.com/in/rodrigoledesma'
    },
    {
      name: 'Cristian Quezada',
      role: 'Estratega IT',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      bio: 'Estratega en consultoría IT con una trayectoria destacada en la dirección de proyectos complejos de transformación digital.',
      linkedin: 'https://linkedin.com/in/cristianquezada'
    },
    {
      name: 'Héctor Aspée',
      role: 'Cloud Services',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      bio: 'Consultor senior especializado en servicios cloud y modernización de plataformas digitales.',
      linkedin: 'https://linkedin.com/in/hectoraspee'
    },
    {
      name: 'Daniela Paredes',
      role: 'Gestión Humana',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      bio: 'Líder de gestión humana y desarrollo organizacional, enfocada en equipos técnicos de alto rendimiento.',
      linkedin: 'https://linkedin.com/in/danielaparedes'
    }
  ];

  return (
    <div className="bg-white min-h-screen pt-24 pb-32 antialiased">
      {/* SECCIÓN EQUIPO */}
      <section className="container mx-auto max-w-7xl px-6 lg:px-8 mb-32">
        <div className="text-center mb-24">
          <h2 className="text-3xl lg:text-5xl font-extrabold text-slate-900 mb-6">Directorio Ejecutivo</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">Líderes apasionados por la tecnología que dirigen el rumbo de cada proyecto.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {team.map((member, i) => (
            <div key={i} className="group flex flex-col items-center text-center">
              <div className="aspect-[3/4] w-full rounded-[2.5rem] overflow-hidden mb-8 bg-slate-50 border border-slate-100 relative">
                <img 
                  alt={member.name} 
                  className="grayscale w-full h-full object-cover transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" 
                  src={member.image} 
                />
                <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="size-10 rounded-xl bg-white flex items-center justify-center text-[#135bec] shadow-lg hover:bg-[#135bec] hover:text-white transition-all">
                    <Linkedin size={18} />
                  </a>
                </div>
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-2">{member.name}</h4>
              <p className="text-[11px] font-black text-[#135bec] mb-6 uppercase tracking-widest">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECCIÓN MAPA GLOBAL */}
      <section className="bg-slate-950 py-24">
        <div className="container mx-auto max-w-7xl px-6 lg:px-8">
          <div className="bg-slate-900/40 border border-slate-800 rounded-[3rem] overflow-hidden shadow-2xl">
            <div className="flex flex-col lg:flex-row min-h-[600px]">
              <div className="flex-[2] p-8 relative min-h-[400px]">
                <WorldMap onSelectOffice={setSelectedOffice} selectedOfficeId={selectedOffice.id} />
              </div>
              <div className="flex-1 bg-slate-900/50 border-l border-slate-800 p-10">
                <OfficeDetails office={selectedOffice} />
                <div className="mt-12 grid grid-cols-2 gap-2">
                  {OFFICE_LOCATIONS.map(office => (
                    <button
                      key={office.id}
                      onClick={() => setSelectedOffice(office)}
                      className={`px-4 py-2 rounded-lg text-[10px] font-bold uppercase transition-all ${
                        selectedOffice.id === office.id ? 'bg-[#135bec] text-white' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
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
      </section>
    </div>
  );
};

export default AboutDetail;
