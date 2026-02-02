import React, { useEffect, useState, memo } from 'react';
import { motion } from 'framer-motion';
import HeroLights from './HeroLights';

interface HeroProps {
  onNavigate: (page: 'home' | 'services' | 'about' | 'contact') => void;
}

const BASE_LOGOS = [
  { name: 'Grupo Sura', src: './logos/grupo-sura.png' },
  { name: 'Casa&Ideas', src: './logos/casa-ideas.png' },
  { name: 'Globant', src: './logos/globant.png' },
  { name: 'Marubeni', src: './logos/marubeni.png' },
  { name: 'Everis', src: './logos/everis.png' },
  { name: 'Compunet', src: './logos/compunet.png' },
];

const Logo = memo(({ logo }: { logo: { name: string; src: string } }) => (
  <div
    className="
      flex-shrink-0 flex items-center justify-center
      px-8 md:px-12
      grayscale opacity-40
      hover:grayscale-0 hover:opacity-100
      transition-all duration-500
    "
  >
    <img
      src={logo.src}
      alt={logo.name}
      loading="lazy"
      className="h-8 md:h-10 w-auto object-contain max-w-[140px] md:max-w-[180px]"
    />
  </div>
));

// VERSIÓN DESARROLLO - SIEMPRE CON ANIMACIONES
const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    // Mostrar imagen después de 1.2 segundos (cuando el texto ya apareció)
    const timer = setTimeout(() => setShowImage(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="relative min-h-screen bg-[#0b0e14] overflow-hidden pt-32 md:pt-40"
      aria-labelledby="hero-heading"
    >
      <HeroLights />

      <div className="container mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16 relative">
          
          {/* TEXTO - Aparece en el centro absoluto de la página, luego se mueve a la izquierda cuando aparece la imagen */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              opacity: { duration: 1.2 },
              y: { duration: 1.2 },
            }}
            style={{
              position: showImage ? 'relative' : 'absolute',
              left: showImage ? 'auto' : '50%',
              transform: showImage ? 'none' : 'translateX(-50%)',
              width: showImage ? 'auto' : 'auto',
              zIndex: 20,
            }}
            className="text-center"
          >
            <motion.h1
              id="hero-heading"
              className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
            >
              <span className="text-[#135bec] italic">Construyendo </span>
              <span className="text-white">el futuro</span>
              <br />
              <span className="text-white">de tu </span>
              <span className="text-[#135bec] italic">Empresa</span>
            </motion.h1>

            <motion.p 
              className="mt-6 text-lg md:text-2xl text-slate-300 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Arquitectura para <span className="font-semibold text-white">startups</span>{' '}
              Optimización para <span className="font-semibold text-white">empresas</span>{' '}
              Acompañamiento en cada <span className="font-semibold text-white">etapa</span>
            </motion.p>

            <motion.div 
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <button
                onClick={() => onNavigate('contact')}
                className="
                  px-8 py-4 
                  bg-gradient-to-r from-blue-600 to-blue-500
                  text-white font-bold rounded-2xl 
                  hover:from-blue-500 hover:to-blue-400
                  hover:shadow-lg hover:shadow-blue-500/50
                  hover:scale-105
                  transition-all duration-300
                "
              >
                Solicitar Consultoría
              </button>

              <button
                onClick={() => onNavigate('services')}
                className="
                  px-8 py-4 
                  border border-slate-700 
                  bg-gradient-to-r from-slate-900/50 to-slate-800/50
                  text-white rounded-2xl 
                  hover:border-slate-600 
                  hover:from-slate-800/80 hover:to-slate-700/80
                  hover:shadow-lg hover:shadow-slate-700/30
                  hover:scale-105
                  transition-all duration-300
                "
              >
                Servicios
              </button>
            </motion.div>
          </motion.div>

          {/* IMAGEN - Aparece desde la derecha y empuja el texto a la izquierda */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{
              opacity: showImage ? 1 : 0,
              x: showImage ? 0 : 100,
            }}
            transition={{
              duration: 1.5,
              ease: [0.43, 0.13, 0.23, 0.96],
            }}
            className="hidden lg:flex justify-center lg:justify-end"
          >
            <img
              src="./images/foto-hero.jpg"
              alt="Equipo BlackTI"
              className="w-[340px] h-[510px] object-cover rounded-3xl shadow-2xl"
            />
          </motion.div>
        </div>
      </div>

      {/* FRANJA DE LOGOS - Visible sin scroll */}
      <motion.div 
        className="mt-0 border-t border-slate-800/50 bg-slate-900/20 py-6 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.3 }}
      >
        <p className="text-center text-slate-400 text-[10px] font-bold uppercase tracking-[0.5em] mb-6">
          Han confiado en nosotros
        </p>

        <div className="relative">
          <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-[#0b0e14] to-transparent z-10" />
          <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-[#0b0e14] to-transparent z-10" />

          <div className="flex animate-infinite-scroll">
            {[...BASE_LOGOS, ...BASE_LOGOS].map((logo, i) => (
              <Logo key={i} logo={logo} />
            ))}
          </div>
        </div>
      </motion.div>

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
