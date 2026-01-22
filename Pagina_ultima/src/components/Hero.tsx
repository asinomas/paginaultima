import React from 'react';

import { ArrowRight } from 'lucide-react';


interface HeroProps {
  onConsultingClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onConsultingClick }) => {
  return (
    <section className="relative flex min-h-screen items-center bg-brand-dark pt-20 overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[100px]"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
      </div>

      <div className="container relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="max-w-3xl animate-fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Líderes en Innovación TI
            </div>
            <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-white sm:text-7xl lg:leading-[1.1]">
              Ingeniería <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Superior</span> para Empresas del Futuro
            </h1>
            <p className="mb-10 text-xl leading-relaxed text-slate-400 max-w-2xl">
              En BlackTI transformamos la complejidad técnica en ventaja competitiva. Diseñamos ecosistemas digitales resilientes, seguros y escalables.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={onConsultingClick}
                className="group relative overflow-hidden rounded-xl bg-primary px-8 py-4 text-base font-bold text-white transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-primary/30"
              >
                <span className="relative z-10">Agendar Consultoría</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
              <button className="rounded-xl border border-slate-700 bg-white/5 px-8 py-4 text-base font-bold text-white transition-all hover:bg-white/10 hover:border-slate-500 active:scale-95 backdrop-blur-sm">
                Nuestras Capacidades
              </button>
            </div>
          </div>
          
          <div className="hidden lg:block relative w-full max-w-md animate-float">
             <div className="relative z-10 glass-card p-4 rounded-3xl">
                <img 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80" 
                  alt="Tech Innovation" 
                  className="rounded-2xl shadow-2xl"
                />
             </div>
             <div className="absolute -bottom-10 -left-10 glass-card p-6 rounded-2xl shadow-2xl animate-pulse">
                <div className="flex items-center gap-4">
                  <div className="bg-primary p-2 rounded-lg text-white">
                    <span className="material-symbols-outlined">trending_up</span>
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">+150% ROI</p>
                    <p className="text-slate-400 text-xs text-nowrap">Optimización Promedio</p>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
