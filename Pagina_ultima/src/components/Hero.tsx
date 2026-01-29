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
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#0b0e14] overflow-hidden pt-12 antialiased">
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

              {/* BADGE CORPORATIVO */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-md bg-[#135bec]/5 border border-[#135bec]/20 mb-8"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#135bec] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#135bec]"></span>
                </span>
                <span className="text-[#6b9cec] text-[10px] font-semibold uppercase tracking-[0.15em] letterspacing">
                  Consultoría Estratégica en TI
                </span>
              </motion.div>

              {/* TITULO CORPORATIVO - SIN GRADIENTES EXCESIVOS */}
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.15] selection:bg-[#135bec]/20"
              >
                <span className="text-white/95">
                  De Cimientos a{" "}
                </span>
                <span className="text-[#135bec] drop-shadow-[0_0_20px_rgba(19,91,236,0.25)]">
                  Escalabilidad
                </span>
              </motion.h1>

              {/* DESCRIPCION PROFESIONAL */}
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="text-base md:text-lg text-slate-300/90 mb-8 max-w-2xl mx-auto leading-relaxed font-light"
              >
                Arquitectura sólida para startups. Optimización continua para empresas. Acompañamiento en cada etapa
              </motion.p>

              {/* CTA CORPORATIVO */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <button
                  onClick={() => onNavigate('contact')}
                  className="group relative overflow-hidden px-8 py-4 bg-[#135bec] text-white rounded-lg font-semibold transition-all hover:bg-[#1047c4] active:scale-98 shadow-lg shadow-[#135bec]/20"
                >
                  <span className="relative z-10">Solicitar Consultoría</span>
                </button>

                <button
                  onClick={() => onNavigate('services')}
                  className="px-8 py-4 bg-white/5 text-white border border-white/15 rounded-lg font-semibold hover:bg-white/10 hover:border-white/25 transition-all backdrop-blur-sm active:scale-98"
                >
                  Ver Servicios
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
