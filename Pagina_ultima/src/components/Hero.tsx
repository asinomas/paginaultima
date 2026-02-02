import React, { useState, useEffect, memo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import HeroLights from './HeroLights';

interface HeroProps {
  onNavigate: (page: 'home' | 'services' | 'about' | 'contact') => void;
}

const HERO_DELAY = 1.2;

const BASE_LOGOS = [
  { name: 'Grupo Sura', src: './logos/grupo-sura.png' },
  { name: 'Casa&Ideas', src: './logos/casa-ideas.png' },
  { name: 'Globant', src: './logos/globant.png' },
  { name: 'Marubeni', src: './logos/marubeni.png' },
  { name: 'Everis', src: './logos/everis.png' },
  { name: 'Compunet', src: './logos/compunet.png' },
];

const Logo = memo(({ logo }: { logo: { name: string; src: string } }) => (
  <div className="flex items-center justify-center min-w-[180px] md:min-w-[260px]">
    <img
      src={logo.src}
      alt={logo.name}
      className="h-10 md:h-12 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
    />
  </div>
));

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const shouldReduceMotion = useReducedMotion();
  const [shift, setShift] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShift(true), HERO_DELAY * 1000);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-screen bg-[#0b0e14] overflow-hidden pt-32 md:pt-40">
      {/* BACKGROUND EFFECTS */}
      <HeroLights />

      <div className="container mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* TEXTO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              x: shift && !shouldReduceMotion ? 'calc(-14vw)' : 0,
            }}
            transition={{
              opacity: { duration: 1 },
              y: { duration: 1 },
              x: { duration: 1.4, ease: 'easeInOut' },
            }}
            className="space-y-6 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-md bg-[#135bec]/5 border border-[#135bec]/20 mb-6">
              <span className="text-[#6b9cec] text-[10px] font-semibold uppercase tracking-[0.15em]">
                Consultoría Estratégica en TI
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.15]">
              <span className="text-[#135bec] italic">Construyendo </span>
              <span className="text-white">el futuro</span><br />
              <span className="text-white">de tu </span>
              <span className="text-[#135bec] italic">Empresa</span>
            </h1>

            <p className="text-lg md:text-2xl text-slate-300 max-w-2xl mx-auto lg:mx-0">
              Arquitectura para <span className="font-semibold text-white">startups</span>{' '}
              Optimización para <span className="font-semibold text-white">empresas</span>{' '}
              Acompañamiento en cada <span className="font-semibold text-white">etapa</span>
            </p>

            <div className="flex gap-4 justify-center lg:justify-start pt-4">
              <button
                onClick={() => onNavigate('contact')}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold rounded-2xl"
              >
                Solicitar Consultoría
              </button>
              <button
                onClick={() => onNavigate('services')}
                className="px-8 py-4 bg-slate-800/50 text-white rounded-2xl border border-slate-700"
              >
                Servicios
              </button>
            </div>
          </motion.div>

          {/* IMAGEN */}
          <motion.div
            initial={{ opacity: 0, x: '35vw' }}
            animate={{
              opacity: 1,
              x: shift && !shouldReduceMotion ? 0 : '35vw',
            }}
            transition={{
              opacity: { duration: 1 },
              x: { duration: 1.4, ease: 'easeInOut' },
            }}
            className="relative hidden lg:flex justify-center"
          >
            <img
              src="./images/foto-hero.jpg"
              alt="Equipo BlackTI"
              className="rounded-3xl shadow-2xl w-[339px] h-[510px] object-cover"
            />
          </motion.div>
        </div>
      </div>

      {/* FRANJA LOGOS (REDUCIDA 1/3) */}
      <div className="mt-16 py-8 border-t border-slate-800/50 bg-slate-900/20">
        <p className="text-center text-slate-400 text-[10px] font-bold uppercase tracking-[0.5em] mb-6">
          Han confiado en nosotros
        </p>

        <div className="overflow-hidden">
          <div className="flex animate-infinite-scroll">
            {[...BASE_LOGOS, ...BASE_LOGOS].map((logo, i) => (
              <Logo key={`${logo.name}-${i}`} logo={logo} />
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
