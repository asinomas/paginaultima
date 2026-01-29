import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import HeroLights from './HeroLights';

interface HeroProps {
  onNavigate: (page: 'home' | 'services' | 'about' | 'contact') => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [moveLayout, setMoveLayout] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detectar mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const timer = setTimeout(() => {
      setMoveLayout(true);
    }, 1500);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-between bg-[#0b0e14] overflow-hidden pt-32 md:pt-40 antialiased">
      {/* LUCES Y FONDO */}
      <HeroLights />

      {/* CONTENIDO PRINCIPAL DEL HERO - CENTRADO VERTICALMENTE */}
      <div className="flex-1 flex items-center justify-center">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-7xl mx-auto flex items-center justify-center gap-6">

            {/* TEXTO HERO */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                x: (moveLayout && !isMobile) ? -210 : 0
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
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#135bec]"></span>
                  </span>
                  <span className="text-[#6b9cec] text-[10px] font-semibold uppercase tracking-[0.15em]">
                    Consultoría Estratégica en TI
                  </span>
                </motion.div>

                {/* TITULO CORPORATIVO */}
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.15] selection:bg-[#135bec]/20"
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
                  Arquitectura sólida para{" "}
                  <span className="text-slate-300/100 font-bold">startups</span>. Optimización continua para{" "}
                  <span className="text-slate-300/100 font-bold">empresas</span>. Acompañamiento en cada{" "}
                  <span className="text-slate-300/100 font-bold">etapa</span>.
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
                    className="group relative overflow-hidden px-8 py-4 bg-[#135bec] text-white rounded-xl font-bold transition-all duration-300 hover:scale-105 active:scale-95 shadow-2xl shadow-[#135bec]/30"
                  >
                    <span className="relative z-10">Solicitar Consultoría</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-[#135bec] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>

                  <button
                    onClick={() => onNavigate('services')}
                    className="px-8 py-4 bg-white/5 text-white border border-white/10 rounded-xl font-bold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm active:scale-95"
                  >
                    Ver Servicios
                  </button>
                </motion.div>

              </div>
            </motion.div>

            {/* IMAGEN HERO - SOLO DESKTOP */}
            <motion.div
              initial={{ opacity: 0, x: 400 }}
              animate={{ 
                opacity: (moveLayout && !isMobile) ? 1 : 0,
                x: (moveLayout && !isMobile) ? -50 : 400
              }}
              transition={{ 
                duration: 2, 
                ease: 'easeInOut'
              }}
               className="hidden lg:block absolute right-0 top-[120px] w-[339px] h-[600px] flex-shrink-0 overflow-hidden rounded-[20%_3%_20%_3%]">
              <img
                src="./images/foto-hero.jpg"
                alt="Grupo de personas en una oficina analizando datos"
                className="w-full h-full object-cover scale-[1.3]"
              />
            </motion.div>

          </div>
        </div>
      </div>

      {/* FRANJA DE LOGOS - PARTE INFERIOR DEL HERO */}
      <div className="relative pt-16 pb-8 overflow-hidden z-10">

        
        {/* Línea divisoria - para logos */}
        <span class="flex items-center">
        <div className="absolute top-8 left-0 right-0 h-px bg-linear-to-r from-transparent to-bg-white/5"></div>
         <div className="absolute top-8 left-0 right-0 h-px bg-linear-to-l from-bg-white to-transparent/5"></div>
        </span>


        {/* Texto franja logos */}
        <div className="container mx-auto px-6 mb-8">
          <p className="text-center text-[10px] font-bold uppercase tracking-[0.5em] text-slate-400">
            Quiénes han confiado en nosotros
          </p>
        </div>

        {/* Contenedor del Carrusel */}
        <div className="relative flex overflow-hidden">
          {/* Máscaras de desvanecimiento laterales */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0b0e14] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0b0e14] to-transparent z-10 pointer-events-none"></div>

          {/* Logos en movimiento */}
          <div className="flex animate-infinite-scroll">
            {[
              { name: 'Grupo Sura', src: './logos/grupo-sura.png' },
              { name: 'Casa&Ideas', src: './logos/casa-ideas.png' },
              { name: 'Globant', src: './logos/globant.png' },
              { name: 'Marubeni', src: './logos/marubeni.png' },
              { name: 'Everis', src: './logos/everis.png' },
              { name: 'Compunet', src: './logos/compunet.png' },
              { name: 'Grupo Sura', src: './logos/grupo-sura.png' },
              { name: 'Casa&Ideas', src: './logos/casa-ideas.png' },
              { name: 'Globant', src: './logos/globant.png' },
              { name: 'Marubeni', src: './logos/marubeni.png' },
              { name: 'Everis', src: './logos/everis.png' },
              { name: 'Compunet', src: './logos/compunet.png' },
            ].map((logo, idx) => (
              <div 
                key={idx} 
                className="flex-shrink-0 flex items-center justify-center transition-all duration-500 px-8"
                style={{ width: '280px' }}
              >
                <img
                  alt={logo.name}
                  src={logo.src}
                  loading="lazy"
                  className="h-12 md:h-16 w-auto object-contain brightness-0 invert grayscale opacity-40 hover:grayscale-0 hover:opacity-100 hover:brightness-100 hover:invert-0"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Estilos de animación */}
      <style>{`
        @keyframes infinite-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-infinite-scroll {
          display: flex;
          width: max-content;
          animation: infinite-scroll 45s linear infinite;
        }
        .animate-infinite-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Hero;
