import React, { useEffect, useState, useRef, memo } from 'react';
import { motion, useReducedMotion, Variants } from 'framer-motion';
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
      min-w-[180px] md:min-w-[260px]
      grayscale opacity-40
      hover:grayscale-0 hover:opacity-100
      transition-all duration-500
    "
  >
    <img
      src={logo.src}
      alt={logo.name}
      loading="lazy"
      className="h-10 md:h-12 w-auto object-contain"
    />
  </div>
));

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const shouldReduceMotion = useReducedMotion();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setAnimate(true), 400);
    return () => clearTimeout(t);
  }, []);

  /* VARIANTES CLARAS Y CONTROLADAS */
  const textX = shouldReduceMotion ? 0 : animate ? -140 : 0;
  const imageX = shouldReduceMotion ? 0 : animate ? 0 : 240;

  return (
    <section
      className="relative min-h-screen bg-[#0b0e14] overflow-hidden pt-32 md:pt-40"
      aria-labelledby="hero-heading"
    >
      {/* FONDO + LUCES (NO SE TOCAN) */}
      <HeroLights />

      <div className="container mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">

          {/* TEXTO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              x: textX,
            }}
            transition={{
              opacity: { duration: 0.8 },
              x: { duration: 1.2, ease: 'easeInOut' },
            }}
            className="text-center lg:text-left"
          >
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
                className="px-8 py-4 bg-blue-600 text-white font-bold rounded-2xl"
              >
                Solicitar Consultoría
              </button>

              <button
                onClick={() => onNavigate('services')}
                className="px-8 py-4 border border-slate-700 text-white rounded-2xl"
              >
                Servicios
              </button>
            </div>
          </motion.div>

          {/* IMAGEN */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              x: imageX,
            }}
            transition={{
              opacity: { duration: 0.6 },
              x: { duration: 1.2, ease: 'easeInOut' },
            }}
            className="hidden lg:flex justify-center"
          >
            <img
              src="./images/foto-hero.jpg"
              alt="Equipo BlackTI"
              className="w-[340px] h-[510px] object-cover rounded-3xl shadow-2xl"
            />
          </motion.div>
        </div>
      </div>

      {/* FRANJA DE LOGOS — MISMA POSICIÓN, MISMO TAMAÑO */}
      <div className="mt-24 border-t border-slate-800/50 bg-slate-900/20 py-10 overflow-hidden">
        <p className="text-center text-slate-400 text-[10px] font-bold uppercase tracking-[0.5em] mb-8">
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
};

export default Hero;
