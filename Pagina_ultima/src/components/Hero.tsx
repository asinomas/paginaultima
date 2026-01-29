import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import HeroLights from './HeroLights';

interface HeroProps {
  onNavigate: (page: 'home' | 'services' | 'about' | 'contact') => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [moveLayout, setMoveLayout] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMoveLayout(true);
    }, 1500); // 1.5s centrado

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#0b0e14] overflow-hidden pt-20 antialiased">
      {/* LUCES Y FONDO */}
      <HeroLights />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-6">

          {/* TEXTO HERO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              x: moveLayout ? -210 : 0
            }}
            transition={{ 
              opacity: { duration: 1.5, ease: 'easeOut' },
              y: { duration: 1.5, ease: 'easeOut' },
              x: { duration: 2, ease: 'easeInOut', delay: 0 }
            }}
            className="max-w-4xl text-center"
          >
            <div className="inline-block">

              {/* BADGE */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#135bec]/10 border border-[#135bec]/20 mb-8"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#135bec] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#135bec]"></span>
                </span>
                <span className="text-[#135bec] text-[11px] font-bold uppercase tracking-[0.2em]">
                  Servicio de Consultoría TI
                </span>
              </motion.div>

              {/* TITULO */}
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1] selection:bg-[#135bec]/30"
              >
                <span className="text-[#135bec] italic drop-shadow-[0_0_15px_rgba(19,91,236,0.3)]">
                  Talento
                </span>

                <span className="text-white/95">
                  {" "}que Impulsa{" "}
                </span>

                <span className="text-[#135bec] italic drop-shadow-[0_0_15px_rgba(19,91,236,0.3)]">
                  Resultados
                </span>
              </motion.h1>

              {/* DESCRIPCION */}
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="text-lg text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed"
              >
                <span className="font-bold">BlackTI</span> te conecta profesionales TI de alto nivel con empresas que buscan excelencia
              </motion.p>

              {/* CTA */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
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
              </motion.div>

            </div>
          </motion.div>

          {/* IMAGEN HERO */}
          <motion.div
            initial={{ opacity: 0, x: 400 }}
            animate={{ 
              opacity: moveLayout ? 1 : 0,
              x: moveLayout ? -50 : 400
            }}
            transition={{ 
              duration: 2, 
              ease: 'easeInOut'
            }}
            className="absolute right-0 w-[339px] h-[509px] flex-shrink-0 overflow-hidden rounded-[20%_3%_20%_3%]"
          >
            <img
              src="./images/foto-hero.jpg"
              alt="Hero"
              className="w-full h-full object-cover scale-[1.3]"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
