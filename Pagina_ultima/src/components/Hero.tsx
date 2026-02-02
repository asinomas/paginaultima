import React, { memo } from 'react';
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
      opacity-60 brightness-90
      hover:opacity-100 hover:brightness-100
      transition-all duration-500
    "
  >
    <img
      src={logo.src}
      alt={logo.name}
      loading="lazy"
      className="
      h-8 md:h-10 w-auto object-contain
      max-w-[140px] md:max-w-[180px]
      filter grayscale opacity-70
      hover:grayscale-0 hover:opacity-100
      transition-all duration-500
     "
    />
  </div>
));

// VERSIÓN DESARROLLO - SIEMPRE CON ANIMACIONES
const Hero: React.FC<HeroProps> = ({ onNavigate }) => {

  return (
    <section
      className="relative min-h-screen overflow-hidden pt-32 md:pt-40"
      aria-labelledby="hero-heading"
    >
      {/* Imagen de fondo */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(./images/foto-hero.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Overlay oscuro para mejorar legibilidad */}
        <div className="absolute inset-0 bg-[#0b0e14]/50" />
      </div>

      <HeroLights />

      <div className="container mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-center min-h-[70vh]">
          
          {/* TEXTO - Centrado */}
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
              Arquitectura para <span className="font-semibold text-white">startups</span>.{' '}
              Optimización para <span className="font-semibold text-white">empresas</span>.{' '}
              Acompañamiento en cada <span className="font-semibold text-white">etapa</span>.
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
        </div>
      </div>

      {/* FRANJA DE LOGOS - Visible sin scroll */}
      <motion.div 
        className="-mt-12 border-t border-slate-700/80 bg-slate-900/30 pt-6 pb-9 overflow-hidden relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.3 }}
      >
        <p className="text-center text-slate-300 text-[10px] font-bold uppercase tracking-[0.5em] mb-4">
          Han confiado en nosotros
        </p>


        {/* Difuminado en los costados */}
        <div className="relative">
          <div
  className="
    pointer-events-none
    absolute inset-y-0 left-0 w-32 z-10
    bg-gradient-to-r
    from-slate-900/30
    to-transparent
  "
/>

<div
  className="
    pointer-events-none
    absolute inset-y-0 right-0 w-32 z-10
    bg-gradient-to-l
    from-slate-900/30
    to-transparent
  "
/>


          <div
  className="
    flex animate-infinite-scroll
    [mask-image:linear-gradient(to_right,
      transparent_0%,
      black_8%,
      black_92%,
      transparent_100%
    )]
    [-webkit-mask-image:linear-gradient(to_right,
      transparent_0%,
      black_8%,
      black_92%,
      transparent_100%
    )]
  "
>
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
