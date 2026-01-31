import React, { useState, useEffect, useCallback } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import HeroLights from './HeroLights';

interface HeroProps {
  onNavigate: (page: 'home' | 'services' | 'about' | 'contact') => void;
}

const HERO_ANIMATION_DELAY = 1500;
const MOBILE_BREAKPOINT = 1024;
const RESIZE_DEBOUNCE_DELAY = 150;

const BASE_LOGOS = [
  { name: 'Grupo Sura', src: './logos/grupo-sura.png' },
  { name: 'Casa&Ideas', src: './logos/casa-ideas.png' },
  { name: 'Globant', src: './logos/globant.png' },
  { name: 'Marubeni', src: './logos/marubeni.png' },
  { name: 'Everis', src: './logos/everis.png' },
  { name: 'Compunet', src: './logos/compunet.png' },
];

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const shouldReduceMotion = useReducedMotion();

  const [moveLayout, setMoveLayout] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const checkMobile = useCallback(() => {
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
  }, []);

  useEffect(() => {
    checkMobile();

    let timeoutId: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(checkMobile, RESIZE_DEBOUNCE_DELAY);
    };

    window.addEventListener('resize', handleResize);

    const timer = setTimeout(() => {
      setMoveLayout(true);
    }, HERO_ANIMATION_DELAY);

    return () => {
      clearTimeout(timer);
      clearTimeout(timeoutId);
      window.removeEventListener('resize', handleResize);
    };
  }, [checkMobile]);

  // POSICIÓN TEXTO Y IMAGEN
  const heroTextX = shouldReduceMotion || isMobile ? -210 : moveLayout ? -210 : 0;
  const heroImageX = shouldReduceMotion || isMobile ? -50 : moveLayout ? -50 : 400;
  const heroImageOpacity = shouldReduceMotion || moveLayout || isMobile ? 1 : 0;

  // POSICIÓN INICIAL SOLO SI REDUCE-MOTION
  const heroTextInitial = shouldReduceMotion ? { opacity: 1, x: -210, y: 0 } : { opacity: 0, x: 0, y: 20 };
  const heroImageInitial = shouldReduceMotion ? { opacity: 1, x: -50 } : { opacity: 0, x: 400 };

  return (
    <section
      className="relative min-h-screen flex flex-col justify-between bg-[#0b0e14] overflow-hidden pt-32 md:pt-40 antialiased"
      aria-labelledby="hero-heading"
    >
      <HeroLights />

      <div className="flex-1 flex items-center justify-center">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-7xl mx-auto flex items-center justify-center gap-6 -translate-y-2">

            {/* TEXTO HERO */}
            <motion.div
              initial={heroTextInitial}
              animate={{ opacity: 1, x: heroTextX, y: 0 }}
              transition={
                shouldReduceMotion
                  ? {}
                  : {
                      opacity: { duration: 1.5, ease: 'easeOut' },
                      y: { duration: 1.5, ease: 'easeOut' },
                      x: { duration: 2, ease: 'easeInOut' },
                    }
              }
              className="max-w-4xl text-center"
            >
              <div className="inline-block">
                {/* BADGE */}
                <motion.div
                  initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
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

                {/* TÍTULO */}
                <motion.h1
                  id="hero-heading"
                  initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.15]"
                >
                  <span className="text-[#135bec] italic">Construyendo </span>
                  <span className="text-white/95">el futuro</span>
                  <br />
                  <span className="text-white/95">de tu </span>
                  <span className="text-[#135bec] italic">Empresa</span>
                </motion.h1>

                {/* DESCRIPCIÓN */}
                <motion.p
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="text-base md:text-lg text-slate-300/90 mb-8 max-w-2xl mx-auto leading-relaxed font-light"
                >
                  Arquitectura sólida para{' '}
                  <span className="font-bold text-slate-300">startups</span>. Optimización continua para{' '}
                  <span className="font-bold text-slate-300">empresas</span>. Acompañamiento en cada{' '}
                  <span className="font-bold text-slate-300">etapa</span>.
                </motion.p>

                {/* CTA */}
                <motion.div
                  initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                  <button
                    onClick={() => onNavigate('contact')}
                    className="group relative overflow-hidden px-8 py-4 bg-[#135bec] text-white rounded-xl font-bold transition-all duration-300 hover:scale-105 active:scale-95 shadow-2xl shadow-[#135bec]/30"
                  >
                    Solicitar Consultoría
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

            {/* IMAGEN HERO */}
            <motion.div
              initial={heroImageInitial}
              animate={{ opacity: heroImageOpacity, x: heroImageX }}
              transition={{ duration: 2, ease: 'easeInOut' }}
              className="hidden lg:block absolute right-0 -top-8 w-[340px] h-[440px] overflow-hidden rounded-[20%_3%_20%_3%]"
            >
              <img
                src="./images/foto-hero.jpg"
                alt="Equipo BlackTI"
                className="w-full h-full object-cover scale-[1.1]"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* FRANJA DE LOGOS */}
      <div className="relative pt-16 pb-8 overflow-hidden z-10">
        <div className="absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <div className="container mx-auto px-6 mb-8">
          <p className="text-center text-[10px] font-bold uppercase tracking-[0.5em] text-slate-400">
            Han confiado en nosotros
          </p>
        </div>
        <div
          className="relative overflow-hidden"
          role="region"
          aria-label="Empresas que han confiado en BlackTI"
          style={{
            WebkitMaskImage:
              'linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 12%, rgba(0,0,0,1) 88%, rgba(0,0,0,0) 100%)',
            WebkitMaskRepeat: 'no-repeat',
            WebkitMaskSize: '100% 100%',
            maskImage:
              'linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 12%, rgba(0,0,0,1) 88%, rgba(0,0,0,0) 100%)',
            maskRepeat: 'no-repeat',
            maskSize: '100% 100%',
          }}
        >
          <div className="flex animate-infinite-scroll gap-6 md:gap-8">
            {[...BASE_LOGOS, ...BASE_LOGOS].map((logo, idx) => (
              <div key={`logo-${logo.name}-${idx}`} className="flex-shrink-0 flex items-center justify-center px-4 w-[180px] sm:w-[220px] md:w-[280px]">
                <img
                  src={logo.src}
                  alt={logo.name}
                  loading="lazy"
                  className="h-8 sm:h-10 md:h-12 w-auto object-contain filter grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              </div>
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
