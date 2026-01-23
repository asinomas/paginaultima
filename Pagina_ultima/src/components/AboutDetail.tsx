import React, { useState } from 'react';
import { Linkedin, ArrowRight } from 'lucide-react';
import WorldMap from './WorldMap';
import OfficeDetails from './OfficeDetails';
import { OFFICE_LOCATIONS } from '../constants';
import { OfficeLocation } from '../types';

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
      bio: 'Experto en arquitectura de sistemas y gestión operativa, especializado en garantizar la continuidad de negocio.',
      linkedin: 'https://linkedin.com/in/rodrigo-andres-ledesma-ritchie-6370aa26'
    },
    {
      name: 'Cristian Quezada',
      role: 'Arquitecto TI',
      image: '/team/cristian.jpg',
      bio: 'Estratega en consultoría IT con una trayectoria destacada en la dirección de proyectos complejos de transformación digital.',
      linkedin: 'https://linkedin.com/in/cristian-quezada-00372920'
    },
    {
      name: 'Byron Molina',
      role: 'Backend Developer',
      image: '/team/byron.jpg',
      bio: 'Especialista en arquitecturas financieras con Golang y NestJS, liderando el cumplimiento normativo y despliegue escalable en GCP para la aplicación Tapp de Caja Los Andes.',
      linkedin: 'https://linkedin.com/in/bmolinh'
    },
    {
      name: 'Daniela Paredes',
      role: 'Project Management Office',
      image: '/team/daniela.jpg',
      bio: 'Líder en planificacion, gestión y desarrollo y supervision organizacional, enfocada en equipos técnicos de alto rendimiento.',
      linkedin: 'https://linkedin.com/in/daniela-paredes-vidal'
    }
  ];

  return (
    <div className="bg-white min-h-screen pt-24 antialiased">
      {/* SECCIÓN HERO / HISTORIA */}
      <section className="container mx-auto max-w-7xl px-6 lg:px-8 mb-32">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-[#135bec] mb-6">Nuestra Historia</h4>
            <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-[1.1] mb-8 tracking-tighter">
              El Gen de la <span className="text-[#135bec] italic">Excelencia</span>
            </h1>
            <p className="text-lg lg:text-xl text-slate-500 leading-relaxed mb-10 max-w-xl">
              Nacimos con la visión de cerrar la brecha entre la complejidad técnica y el éxito empresarial. Hoy, BlackTI es sinónimo de resiliencia y precisión.
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
            <div className="relative w-full max-w-md">
              <div className="aspect-square bg-slate-100 rounded-[3rem] overflow-hidden rotate-3 hover:rotate-0 transition-transform duration-700 shadow-2xl border border-slate-200">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
                  alt="Team Work" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="absolute -bottom-6 -left-10 bg-white p-6 rounded-3xl shadow-xl border border-slate-100 hidden md:block">
                <p className="text-3xl font-black text-[#135bec] mb-1">2014</p>
                <p className="text-[9px] font-bold uppercase tracking-widest text-slate-400">Año de Fundación</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DIRECTORIO EJECUTIVO */}
      <section className="container mx-auto max-w-7xl px-6 lg:px-8 mb-40">
        <div className="text-center mb-24">
          <h2 className="text-3xl lg:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Directorio Ejecutivo</h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">Líderes apasionados por la tecnología que dirigen el rumbo de cada proyecto con rigor y visión.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {team.map((member, i) => (
            <div key={i} className="group flex flex-col items-center text-center">
              <div className="aspect-[3/4] w-full
