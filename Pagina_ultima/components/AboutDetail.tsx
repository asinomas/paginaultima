import React from 'react';

interface AboutDetailProps {
  onContactClick: () => void;
  onNavigate: (page: 'home' | 'services' | 'about' | 'contact') => void;
}

const AboutDetail: React.FC<AboutDetailProps> = ({ onContactClick, onNavigate }) => {
  const team = [
    {
      name: 'Cristian Quezada',
      role: 'Estratega IT',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      bio: 'Estratega en consultoría IT con una trayectoria destacada en la dirección de proyectos complejos de transformación digital.'
    },
    {
      name: 'Rodrigo Ledesma',
      role: 'Arquitectura y Operaciones',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      bio: 'Experto en arquitectura de sistemas y gestión operativa, especializado en garantizar la continuidad de negocio.'
    },
    {
      name: 'Héctor Aspée',
      role: 'Cloud Services',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      bio: 'Consultor senior especializado en servicios cloud y modernización de plataformas digitales.'
    },
    {
      name: 'Daniela Paredes',
      role: 'Gestión Humana',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      bio: 'Líder de gestión humana y desarrollo organizacional, enfocada en equipos técnicos de alto rendimiento.'
    }
  ];

  return (
    <div className="bg-white min-h-screen pt-24 pb-32">
      <section className="container mx-auto max-w-7xl px-6 lg:px-8 mb-32">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
             <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-6">Nuestra Historia</h4>
             <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-[1.1] mb-8">El Gen de la <span className="text-primary italic">Excelencia</span></h1>
             <p className="text-lg lg:text-xl text-slate-500 leading-relaxed mb-10">
               Nacimos con la visión de cerrar la brecha entre la complejidad técnica y el éxito empresarial. Hoy, BlackTI es sinónimo de resiliencia y precisión.
             </p>
             <div className="flex gap-4">
                <button onClick={onContactClick} className="bg-primary text-white font-bold px-10 py-5 rounded-2xl shadow-2xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all">
                  Unirse al equipo
                </button>
             </div>
          </div>
          <div className="lg:w-1/2 relative">
             <div className="aspect-square bg-slate-100 rounded-[3rem] overflow-hidden rotate-3 hover:rotate-0 transition-transform duration-700 shadow-2xl">
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="Team Work" className="w-full h-full object-cover" />
             </div>
             <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-2xl border border-slate-100 hidden md:block">
                <p className="text-4xl font-black text-primary mb-1">2014</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Año de Fundación</p>
             </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-24">
           <h2 className="text-3xl lg:text-5xl font-extrabold text-slate-900 mb-6">Directorio Ejecutivo</h2>
           <p className="text-slate-500 max-w-2xl mx-auto">Líderes apasionados por la tecnología que dirigen el rumbo de cada proyecto con rigor y visión.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {team.map((member, i) => (
            <div key={i} className="group flex flex-col items-center text-center">
              <div className="aspect-[3/4] w-full rounded-[2rem] overflow-hidden mb-8 bg-slate-50 shadow-sm border border-slate-100 relative group">
                <img alt={member.name} className="grayscale w-full h-full object-cover transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110" src={member.image} />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                   <div className="text-white text-left">
                      <p className="text-[10px] font-bold uppercase tracking-widest mb-2">Connect via</p>
                      <div className="flex gap-3">
                         <div className="size-8 rounded-lg bg-white/20 backdrop-blur-md flex items-center justify-center cursor-pointer hover:bg-white/40">
                            <span className="material-symbols-outlined !text-sm">share</span>
                         </div>
                      </div>
                   </div>
                </div>
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-2">{member.name}</h4>
              <p className="text-xs font-extrabold text-primary mb-6 uppercase tracking-widest">{member.role}</p>
              <p className="text-slate-500 text-sm leading-relaxed max-w-[200px]">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutDetail;