import React, { useState, useEffect, useCallback, memo, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import HeroLights from './HeroLights';

/* ================================
   🔧 FLAG DESARROLLO
================================ */
const FORCE_ANIMATIONS_DEV = true;

interface HeroProps {
  onNavigate: (page: 'home' | 'services' | 'about' | 'contact') => void;
}

const HERO_ANIMATION_DELAY = 1500;
const MOBILE_BREAKPOINT = 1024;

const BASE_LOGOS = [
  { name: 'Grupo Sura', src: './logos/grupo-sura.png' },
  { name: 'Casa&Ideas', src: './logos/casa-ideas.png' },
  { name: 'Globant', src: './logos/globant.png' },
  { name: 'Marubeni', src: './logos/marubeni.png' },
  { name: 'Everis', src: './logos/everis.png' },
  { name: 'Compunet', src: './logos/compunet.png' },
];

/* ================================
   LOGO
================================ */
const Logo = memo(({ logo }: { logo: { name: string; src: string } }) => (
  <div
    className="
      flex-shrink-0 flex items-center justify-center
      min-w-[180px] md:min-w-[260px]
      h-[40px] md:h-[48px]
      grayscale opacity-40
      hover:grayscale-0 hover:opacity-100
      transition-all duration-500
    "
  >
    <img
      src={logo.src}
      alt={logo.name}
      loading="lazy"
      className="
        max-h-[26px] md:max-h-[32px]
        max-w-[140px] md:max-w-[180px]
        w-auto h-auto object-contain
      "
      onError={(e) => {
        (e.target as HTMLImageElement).style.display = 'none';
      }}
    />
  </div>
));

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const systemReducedMotion = useReducedMotion();
  const shouldReduceMotion = FORCE_ANIMATIONS_DEV
    ? false
    : systemReducedMotion;

  const [showImage, setShowImage] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const lastWidthRef = useRef(1024);

  const checkMobile = useCallback(() => {
    const w = window.innerWidth;
    setIsMobile(w < MOBILE_BREAKPOINT);
    lastWidthRef.current = w;
  }, []);

  useEffect(() => {
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const t = setTimeout(() => setShowImage(true), HERO_ANIMATION_DELAY);
    return () => {
      clearTimeout(t);
      window.removeEventListener('resize', checkMobile);
    };
  }, [checkMobile]);

  /* ================================
     🔑 CLAVE:
     UN SOLO DESPLAZAMIENTO COMPARTIDO
  ================================ */
  const groupX =
    !showImage || shouldReduceMotion || isMobile ? 0 : '-6vw';

  return (
    <section className="relative min-h-screen bg-[#0b0e14] overflow-hidden pt-32 md:pt-40">
      <HeroLights />

      {/* ================= HERO ================= */}
      <div className="container mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0, x: groupX }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* TEXTO */}
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.15]">
              <span className="text-[#135bec] italic">Construyendo </span>
              <span className="text-white/95">el futuro</span>
              <br />
              <span className="text-white/95">de tu </span>
              <span className="text-[#135bec] italic">Empresa</span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-slate-300 font-light max-w-xl mx-auto lg:mx-0">
              Arquitectura para{' '}
              <span className="font-semibold text-white/90">startups </span>
              Optimización para{' '}
              <span className="font-semibold text-white/90">empresas </span>
              Acompañamiento en cada{' '}
              <span className="font-semibold text-white/90">etapa</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <button
                onClick={() => onNavigate('contact')}
                className="px-8 py-4 bg-blue-600 text-white font-bold rounded-2xl hover:scale-105 transition"
              >
                Solicitar Consultoría
              </button>

              <button
                onClick={() => onNavigate('services')}
                className="px-8 py-4 bg-slate-800 text-white rounded-2xl hover:scale-105 transition"
              >
                Servicios
              </button>
            </div>
          </div>

          {/* IMAGEN */}
          {showImage && (
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              className="hidden lg:flex justify-center"
            >
              <img
                src="./images/foto-hero.jpg"
                alt="Consultores BlackTI"
                className="rounded-3xl shadow-2xl w-[339px] h-[510px] object-cover"
              />
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* ================= LOGOS (−1/3 ALTURA) ================= */}
      <div className="py-8 mt-20 border-t border-slate-800/50 bg-slate-900/20 overflow-hidden">
        <div className="container mx-auto px-6">
          <p className="text-center text-slate-400 text-[9px] font-bold uppercase tracking-[0.45em] mb-4">
            Han confiado en nosotros
          </p>

          <div className="relative overflow-hidden">
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0b0e14] to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0b0e14] to-transparent z-10" />

            <div className="flex w-max animate-infinite-scroll">
              {[...BASE_LOGOS, ...BASE_LOGOS].map((logo, i) => (
                <Logo key={`${logo.name}-${i}`} logo={logo} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes infinite-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-infinite-scroll {
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
