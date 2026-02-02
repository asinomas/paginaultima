import React, { useEffect, useState, memo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
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

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const shouldReduceMotion = useReducedMotion();
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    // Mostrar imagen después de que el texto haya aparecido
    const timer = setTimeout(() => setShowImage(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  // VERSIÓN SIN ANIMACIONES (para usuarios con preferencias de movimiento reducido)
  if (shouldReduceMotion) {
    return (
      <section
        className="relative min-h-screen bg-[#0b0e14] overflow-hidden pt-32 md:pt-40"
        aria-labelledby="hero-heading"
      >
        <HeroLights />

        <div className="container mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16">
            
            {/* TEXTO */}
            <div className="text-center lg:text-left">
              <h1
                id="hero-heading"
                className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight"
              >
                <span className="text-[#135bec] italic">Construyendo </span>
                <span className="text-white">el futuro</span>
                <br />
                <span className="text-white">de tu </span>
                <span className="text-[#135bec] italic">Empresa</span>
              </h1>

              <p className="mt-6 text-lg md:text-2xl text-slate-300 max-w-2xl mx-auto lg:mx-0">
                Arquitectura para <span className="font-semibold text-white">startups</span>{' '}
                Optimización para <span className="font-semibold text-white">empresas</span>{' '}
                Acompañamiento en cada <span className="font-semibold text-white">etapa</span>
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => onNavigate('contact')}
                  className="px-8 py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition-colors"
                >
                  Solicitar Consultoría
                </button>

                <button
                  onClick={() => onNavigate('services')}
                  className="px-8 py-4 border border-slate-700 text-white rounded-2xl hover:border-slate-600 transition-colors"
                >
                  Servicios
                </button>
              </div>
            </div>

            {/* IMAGEN */}
            <div className="hidden lg:flex justify-center lg:justify-end">
              <img
                src="./images/foto-hero.jpg"
                alt="Equipo BlackTI"
                className="w-[340px] h-[510px] object-cover rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* FRANJA DE LOGOS */}
        <div className="mt-20 border-t border-slate-800/50 bg-slate-900/20 py-6 overflow-hidden">
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
        </div>

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
  }

  // VERSIÓN CON ANIMACIONES
  return (
    <section
      className="relative min-h-screen bg-[#0b0e14] overflow-hidden pt-32 md:pt-40"
      aria-labelledby="hero-heading"
    >
      <HeroLights />

      <div className="container mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16">
          
          {/* TEXTO - Aparece centrado, luego se mueve a la izquierda cuando aparece la imagen */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: 1,
              y: 0,
              x: showImage ? -40 : 0,
            }}
            transition={{
              opacity: { duration: 0.8, delay: 0.2 },
              y: { duration: 0.8, delay: 0.2 },
              x: { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] },
            }}
            className="text-center lg:text-left"
          >
            <h1
              id="hero-heading"
              className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight"
            >
              <motion.span 
                className="text-[#135bec] italic inline-block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Construyendo{' '}
              </motion.span>
              <motion.span 
                className="text-white inline-block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                el futuro
              </motion.span>
              <br />
              <motion.span 
                className="text-white inline-block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                de tu{' '}
              </motion.span>
              <motion.span 
                className="text-[#135bec] italic inline-block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                Empresa
              </motion.span>
            </h1>

            <motion.p 
              className="mt-6 text-lg md:text-2xl text-slate-300 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              Arquitectura para <span className="font-semibold text-white">startups</span>{' '}
              Optimización para <span className="font-semibold text-white">empresas</span>{' '}
              Acompañamiento en cada <span className="font-semibold text-white">etapa</span>
            </motion.p>

            <motion.div 
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              <button
                onClick={() => onNavigate('contact')}
                className="px-8 py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition-colors"
              >
                Solicitar Consultoría
              </button>

              <button
                onClick={() => onNavigate('services')}
                className="px-8 py-4 border border-slate-700 text-white rounded-2xl hover:border-slate-600 transition-colors"
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
              duration: 0.8,
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

      {/* FRANJA DE LOGOS - Más compacta */}
      <motion.div 
        className="mt-20 border-t border-slate-800/50 bg-slate-900/20 py-6 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.5 }}
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
