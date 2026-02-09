import React, { memo, useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import HeroLights from './HeroLights';

interface HeroProps {
  onNavigate: (page: 'home' | 'services' | 'about' | 'contact') => void;
}

const COLORS = {
  primary: '#135bec',
  bgDark: '#0b0e14',
} as const;

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
  const [hovered, setHovered] = useState(false);
  const graySrc = logo.src.replace('.png', '-gris.png');

  return (
    <div
      className="flex-shrink-0 flex items-center justify-center px-8 md:px-12 hover:scale-110 transition-transform duration-500"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={hovered ? logo.src : graySrc}
        alt={logo.name}
        loading="lazy"
        className="h-8 md:h-10 w-auto object-contain max-w-[140px] md:max-w-[180px] transition-all duration-500"
      />
    </div>
  );
});

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <section
      className="relative min-h-screen overflow-hidden pt-24 md:pt-32"
      aria-labelledby="hero-heading"
    >
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(/images/foto-hero.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div 
          className="absolute inset-0"
          style={{
            backgroundColor: `${COLORS.bgDark}40`,
            filter: 'brightness(0.30)', 
          }}
        />
      </div>

      <HeroLights />

      <div className="container mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        {/* Hero principal: se mantiene igual, sin cambios */}
      </div>

      {/* FRANJA DE LOGOS */}
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
          <div className="relative flex justify-center flex-wrap gap-8 md:gap-12 px-8">
            {BASE_LOGOS.map((logo, i) => (
              <Logo key={i} logo={logo} />
            ))}
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
