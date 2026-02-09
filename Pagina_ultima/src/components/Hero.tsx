import React, { memo, useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import HeroLights from './HeroLights';

interface HeroProps {
  onNavigate: (page: 'home' | 'services' | 'about' | 'contact') => void;
}

// Constantes de color
const COLORS = {
  primary: '#135bec',
  bgDark: '#0b0e14',
} as const;

// Constantes de timing para animaciones
const ANIMATION_TIMINGS = {
  slow: 1.2,
  medium: 0.8,
  fast: 0.4,
  carousel: 45,
} as const;

const BASE_LOGOS = [
  { name: 'Grupo Sura', src: '/logos/grupo-sura.png' },
  { name: 'Casa&Ideas', src: '/logos/casa-ideas.png' },
  { name: 'Globant', src: '/logos/globant.png' },
  { name: 'Marubeni', src: '/logos/marubeni.png' },
  { name: 'Everis', src: '/logos/everis.png' },
  { name: 'Compunet', src: '/logos/compunet.png' },
];

const Logo = memo(({ logo }: { logo: { name: string; src: string } }) => {
  const logoRef = useRef<HTMLDivElement>(null);
  const [opacity, setOpacity] = useState(1);

  // Prepara los paths: gris por defecto
  const graySrc = logo.src.replace(/(\.png|\.jpg|\.jpeg|\.svg)$/, '-gris$1');

  useEffect(() => {
    const handleScroll = () => {
      if (!logoRef.current) return;
      
      const rect = logoRef.current.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      
      const fadeZone = viewportWidth * 0.15;
      let newOpacity = 1;
      
      if (rect.right > viewportWidth - fadeZone) {
        const distanceFromEdge = viewportWidth - rect.left;
        newOpacity = Math.min(1, distanceFromEdge / fadeZone);
      }
      if (rect.left < fadeZone) {
        newOpacity = Math.max(0, rect.right / fadeZone);
      }
      
      setOpacity(newOpacity);
    };

    const interval = setInterval(handleScroll, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={logoRef}
      className="flex-shrink-0 flex items-center justify-center px-8 md:px-12 hover:scale-110 transition-transform duration-500"
      style={{ opacity }}
    >
      <img
        src={graySrc}
        data-color-src={logo.src}
        alt={logo.name}
        loading="lazy"
        className="h-8 md:h-10 w-auto object-contain max-w-[140px] md:max-w-[180px] transition-all duration-500"
        onMouseEnter={(e) => {
          const img = e.currentTarget;
          img.src = img.dataset.colorSrc || logo.src;
        }}
        onMouseLeave={(e) => {
          const img = e.currentTarget;
          img.src = graySrc;
        }}
      />
    </div>
  );
});

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <section className="relative min-h-screen overflow-hidden pt-24 md:pt-32" aria-labelledby="hero-heading">
      {/* Fondo */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(/images/foto-hero.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: `${COLORS.bgDark}20`,
            filter: 'brightness(0.30)',
          }}
        />
      </div>

      <HeroLights />

      <div className="container mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-center min-h-[65vh]">
          {/* Versión con animaciones */}
          {!prefersReducedMotion && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ opacity: { duration: ANIMATION_TIMINGS.slow }, y: { duration: ANIMATION_TIMINGS.slow } }}
              className="text-center"
            >
              <motion.h1
                id="hero-heading"
                className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: ANIMATION_TIMINGS.slow }}
              >
                <span style={{ color: COLORS.primary }} className="italic drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">
                  Construyendo{' '}
                </span>
                <span className="text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">el futuro</span>
                <br />
                <span className="text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">de tu </span>
                <span style={{ color: COLORS.primary }} className="italic drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">
                  Negocio
                </span>
              </motion.h1>

              <motion.p
                className="mt-6 text-lg md:text-2xl text-slate-200 max-w-2xl mx-auto drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: ANIMATION_TIMINGS.medium, delay: ANIMATION_TIMINGS.fast }}
              >
                Desarrollo para <span className="font-normal text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">startups</span>.{' '}
                Optimización para <span className="font-normal text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">empresas</span>.{' '}
                Acompañamiento en cada <span className="font-normal text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">etapa</span>.
              </motion.p>

              <motion.div
                className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: ANIMATION_TIMINGS.medium, delay: ANIMATION_TIMINGS.medium }}
              >
                <button
                  onClick={() => onNavigate('contact')}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold rounded-2xl hover:from-blue-500 hover:to-blue-400 hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300"
                >
                  Solicitar Consultoría
                </button>
                <button
                  onClick={() => onNavigate('services')}
                  className="px-8 py-4 border border-slate-700 bg-gradient-to-r from-slate-900/50 to-slate-800/50 text-white rounded-2xl hover:border-slate-600 hover:from-slate-800/80 hover:to-slate-700/80 hover:shadow-lg hover:shadow-slate-700/30 hover:scale-105 transition-all duration-300"
                >
                  Servicios
                </button>
              </motion.div>
            </motion.div>
          )}

          {/* Versión sin animaciones */}
          {prefersReducedMotion && (
            <div className="text-center">
              <h1
                id="hero-heading"
                className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight"
              >
                <span style={{ color: COLORS.primary }} className="italic drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">
                  Construyendo{' '}
                </span>
                <span className="text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">el futuro</span>
                <br />
                <span className="text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">de tu </span>
                <span style={{ color: COLORS.primary }} className="italic drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">
                  Negocio
                </span>
              </h1>

              <p className="mt-6 text-lg md:text-2xl text-slate-200 max-w-2xl mx-auto">
                Desarrollo para <span className="font-normal text-white">startups</span>.{' '}
                Optimización para <span className="font-normal text-white">empresas</span>.{' '}
                Acompañamiento en cada <span className="font-normal text-white">etapa</span>.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => onNavigate('contact')}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold rounded-2xl hover:from-blue-500 hover:to-blue-400 hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300"
                >
                  Solicitar Consultoría
                </button>
                <button
                  onClick={() => onNavigate('services')}
                  className="px-8 py-4 border border-slate-700 bg-gradient-to-r from-slate-900/50 to-slate-800/50 text-white rounded-2xl hover:border-slate-600 hover:from-slate-800/80 hover:to-slate-700/80 hover:shadow-lg hover:shadow-slate-700/30 hover:scale-105 transition-all duration-300"
                >
                  Servicios
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Franja de logos */}
      {!prefersReducedMotion && (
        <motion.div 
          className="mt-6 border-t border-slate-700/40 bg-slate-900/30 pt-6 pb-6 overflow-hidden relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: ANIMATION_TIMINGS.slow + 0.1 }}
        >
          <p className="text-center text-slate-300 text-[10px] font-bold uppercase tracking-[0.5em] mb-4">
            Han confiado en nosotros
          </p>
          <div className="relative">
            <div className="flex animate-infinite-scroll">
              {[...BASE_LOGOS, ...BASE_LOGOS].map((logo, i) => (
                <Logo key={i} logo={logo} />
              ))}
            </div>
          </div>
        </motion.div>
      )}

      {prefersReducedMotion && (
        <div className="mt-6 border-t border-slate-700/40 bg-slate-900/30 pt-6 pb-6 overflow-hidden relative z-10">
          <p className="text-center text-slate-300 text-[10px] font-bold uppercase tracking-[0.5em] mb-4">
            Han confiado en nosotros
          </p>
          <div className="relative">
            <div className="flex justify-center flex-wrap gap-8 md:gap-12 px-8">
              {BASE_LOGOS.map((logo, i) => (
                <div key={i} className="flex-shrink-0 flex items-center justify-center">
                  <img
                    src={logo.src.replace(/(\.png|\.jpg|\.jpeg|\.svg)$/, '-gris$1')}
                    data-color-src={logo.src}
                    alt={logo.name}
                    loading="lazy"
                    className="h-8 md:h-10 w-auto object-contain max-w-[140px] md:max-w-[180px] transition-all duration-500"
                    onMouseEnter={(e) => { const img = e.currentTarget; img.src = img.dataset.colorSrc || logo.src; }}
                    onMouseLeave={(e) => { const img = e.currentTarget; img.src = logo.src.replace(/(\.png|\.jpg|\.jpeg|\.svg)$/, '-gris$1'); }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes infinite-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-infinite-scroll {
          display: flex;
          width: max-content;
          animation: infinite-scroll ${ANIMATION_TIMINGS.carousel}s linear infinite;
          will-change: transform;
        }
        .animate-infinite-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Hero;
