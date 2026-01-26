import React, { useState, useEffect } from 'react';
import HeroLights from './HeroLights'; 

interface HeroProps {
  onNavigate: (page: 'home' | 'services' | 'about' | 'contact') => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowImage(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#0b0e14] overflow-hidden pt-20 antialiased">
      
      <HeroLights />
      <div className="container mx-auto px-6 relative z-10">
        <div className={`max-w-7xl mx-auto flex items-center gap-12 transition-all duration-1000 ${showImage ? 'justify-between' : 'justify-center'}`}>
          <div className="max-w-4xl text-center">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#135bec]/10 border border-[#135bec]/20 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#135bec] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#135bec]"></span>
              </span>
              <span className="text-[#135bec] text-[11px] font-bold uppercase tracking-[0.2em]">Servicio de Consultoría TI</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white/95 tracking-tight mb-8 leading-[1.1] selection:bg-[#135bec]/30">
              Potenciando el{' '}
              <span className="relative inline-block italic text-[#135bec] drop-shadow-[0_0_15px_rgba(19,91,236,0.3)] filter transition-all duration-700">
                Talento
              </span>{' '}
              con Inteligencia
            </h1>
            
            <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            BlackTI combina experiencia, creatividad y un enfoque estratégico para convertir la tecnología en valor real para su empresa
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={() => onNavigate('contact')}
                className="group relative overflow-hidden px-8 py-4 bg-[#135bec] text-white rounded-xl font-bold transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-[#135bec]/30"
              >
                <span className="relative z-10">Agendar Consultoría</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-[#135bec] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button 
                onClick={() => onNavigate('services')}
                className="px-8 py-4 bg-white/5 text-white border border-white/10 rounded-xl font-bold hover:bg-white/10 transition-all backdrop-blur-sm active:scale-95"
              >
                Explorar Soluciones
              </button>
            </div>
          </div>

          <div 
            className={`relative w-[440px] h-[440px] bg-red-500 flex-shrink-0 transition-all duration-1000 ${
              showImage ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
            }`}
            style={{
              maskImage: 'radial-gradient(ellipse at center, black 60%, transparent 100%)',
              WebkitMaskImage: 'radial-gradient(ellipse at center, black 60%, transparent 100%)'
            }}
          >
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
