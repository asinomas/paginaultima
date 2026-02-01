import React, { useState, useEffect, useCallback, memo, useRef } from 'react';
import { motion, useReducedMotion, Variants } from 'framer-motion';
import HeroLights from './HeroLights';

interface HeroProps {
  onNavigate: (page: 'home' | 'services' | 'about' | 'contact') => void;
}

const HERO_ANIMATION_DELAY = 1500;
const MOBILE_BREAKPOINT = 1024;

// Throttle del resize:
// Testear en móviles reales para confirmar que no introduce lag.
// Si se percibe retraso en dispositivos de gama baja, reducir a 100ms.
const RESIZE_THROTTLE_DELAY = 200;

const BASE_LOGOS = [
  { name: 'Grupo Sura', src: './logos/grupo-sura.png' },
  { name: 'Casa&Ideas', src: './logos/casa-ideas.png' },
  { name: 'Globant', src: './logos/globant.png' },
  { name: 'Marubeni', src: './logos/marubeni.png' },
  { name: 'Everis', src: './logos/everis.png' },
  { name: 'Compunet', src: './logos/compunet.png' },
];

// Throttle simple y predecible para resize
const throttle = (fn: (...args: unknown[]) => void, delay: number) => {
  let inThrottle = false;
  return (...args: unknown[]) => {
    if (!inThrottle) {
      fn(...args);
      inThrottle = true;
      setTimeout(() => {
        inThrottle = false;
      }, delay);
    }
  };
};

const Logo = memo(({ logo }: { logo: { name: string; src: string } }) => (
  <div className="flex-shrink-0 flex items-center justify-center px-4 w-[180px] sm:w-[220px] md:w-[280px]">
    <img
      src={logo.src}
      alt={logo.name}
      loading="lazy"
      className="h-8 sm:h-10 md:h-12 w-auto object-contain filter grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
      onError={(e) => {
        (e.target as HTMLImageElement).style.display = 'none';
      }}
    />
  </div>
));

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const shouldReduceMotion = useReducedMotion();

  const [moveLayout, setMoveLayout] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // useRef en lugar de state para el ancho:
  // evita re-renders en cada resize y solo se usa para comparar cambios
  const lastWidthRef = useRef<number>(1024);

  const checkMobile = useCallback(() => {
    if (typeof window === 'undefined') return;

    const width = window.innerWidth;
    setIsMobile(width < MOBILE_BREAKPOINT);
    lastWidthRef.current = width;
  }, []);

  useEffect(() => {
    checkMobile();

    const onResize = throttle(() => {
      const width = window.innerWidth;
      if (Math.abs(width - lastWidthRef.current) > 10) {
        checkMobile();
      }
    }, RESIZE_THROTTLE_DELAY);

    window.addEventListener('resize', onResize);

    const layoutTimer = window.setTimeout(
      () => setMoveLayout(true),
      HERO_ANIMATION_DELAY
    );

    return () => {
      clearTimeout(layoutTimer);
      window.removeEventListener('resize', onResize);
    };
  }, [checkMobile]);

  // Offsets fijos en CSS (predecibles y fáciles de mantener)
  const heroTextX =
    shouldReduceMotion || !moveLayout || isMobile ? 0 : 'var(--hero-text-x)';

  const heroImageX =
    shouldReduceMotion || !moveLayout || isMobile
      ? 0
      : 'var(--hero-image-x)';

  const heroImageOpacity =
    shouldReduceMotion || moveLayout || isMobile ? 1 : 0;

  const heroTextInitial = shouldReduceMotion
    ? { opacity: 1, x: 0, y: 0 }
    : { opacity: 0, y: 20 };

  const heroImageInitial = shouldReduceMotion
    ? { opacity: 1, x: 0 }
    : { opacity: 0, x: 'calc(min(40vw, 400px))' };

  const logosToRender = shouldReduceMotion
    ? BASE_LOGOS
    : [...BASE_LOGOS, ...BASE_LOGOS];

  const logoAnimationClass = shouldReduceMotion
    ? ''
    : 'animate-infinite-scroll';

  const containerVariants: Variants = {
    hidden: {},
    show: { 
      transition: { 
        staggerChildren: shouldReduceMotion ? 0 : 0.2 
      } 
    },
  };

  const itemVariants: Variants = {
    hidden: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: shouldReduceMotion 
        ? { duration: 0 } 
        : { duration: 1, ease: 'easeOut' },
    },
  };

  return (
    <section
      className={`relative min-h-screen flex flex-col justify-between bg-[#0b0e14] overflow-hidden pt-32 md:pt-40 antialiased ${
        shouldReduceMotion ? 'hero-reduce-motion' : ''
      }`}
      aria-labelledby="hero-heading"
      style={
        {
          '--hero-text-x': 'calc(-15vw)',
          '--hero-image-x': 'calc(min(-3vw, -40px))',
        } as React.CSSProperties
      }
    >
      <HeroLights />
      
      <div className="container mx-auto max-w-7xl px-6 lg:px-8 flex-1 flex items-center relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
          
          {/* Texto del Hero */}
          <motion.div
            initial={heroTextInitial}
            animate={{
              opacity: 1,
              x: heroTextX,
              y: 0,
            }}
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : {
                    opacity: { duration: 1 },
                    x: { duration: 1.5, delay: HERO_ANIMATION_DELAY / 1000, ease: 'easeInOut' },
                    y: { duration: 1, ease: 'easeOut' },
                  }
            }
            className="space-y-6 text-center lg:text-left"
          >
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="space-y-4"
            >
              {/* BADGE CORPORATIVO */}
              <motion.div 
                initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={
                  shouldReduceMotion
                    ? { duration: 0 }
                    : { duration: 0.6, delay: 0.3 }
                }
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-md bg-[#135bec]/5 border border-[#135bec]/20 mb-8"
              >
                <span className="relative flex h-2 w-2">
                  <span className={`absolute inline-flex h-full w-full rounded-full bg-[#135bec] opacity-75 ${
                    shouldReduceMotion ? '' : 'animate-ping'
                  }`}></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#135bec]"></span>
                </span>
                <span className="text-[#6b9cec] text-[10px] font-semibold uppercase tracking-[0.15em]">
                  Consultoría Estratégica en TI
                </span>
              </motion.div>

              {/* TITULO CORPORATIVO */}
              <motion.h1 
                variants={itemVariants}
                id="hero-heading"
                className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.15] selection:bg-[#135bec]/20"
              >
                <span className="text-[#135bec] italic drop-shadow-[0_0_20px_rgba(19,91,236,0.25)]">
                  Construyendo{" "}
                </span>
                <span className="text-white/95">
                  el futuro
                </span>
                <br />
                <span className="text-white/95">
                  de tu{" "}
                </span>
                <span className="text-[#135bec] italic drop-shadow-[0_0_20px_rgba(19,91,236,0.25)]">
                  Empresa
                </span>
              </motion.h1>

              {/* SUBTITULO */}
              <motion.p
                variants={itemVariants}
                className="text-lg sm:text-xl md:text-2xl text-slate-300 font-light max-w-2xl mx-auto lg:mx-0"
              >
                Arquitectura para <span className="font-semibold text-white-400">startups,{' '}</span> 
                Optimización para <span className="font-semibold text-white-400">empresas,{' '}</span>
                Acompañamiento en cada <span className="font-semibold text-white-400">etapa</span>
              </motion.p>

              {/* BOTONES */}
              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <button
                  onClick={() => onNavigate('contact')}
                  className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold rounded-2xl shadow-2xl shadow-blue-500/20 hover:shadow-blue-500/40 hover:scale-105 active:scale-95 transition-all duration-300 overflow-hidden"
                  aria-label="Contactar con BlackTI"
                >
                  <span className="relative z-10">Solicitar Consultoría</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>

                <button
                  onClick={() => onNavigate('services')}
                  className="px-8 py-4 bg-slate-800/50 backdrop-blur-sm text-white font-bold rounded-2xl border border-slate-700 hover:bg-slate-700/50 hover:border-slate-600 hover:scale-105 active:scale-95 transition-all duration-300"
                  aria-label="Explorar Servicios BlackTI"
                >
                  Servicios
                </button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Imagen del Hero */}
          <motion.div
            initial={heroImageInitial}
            animate={{
              opacity: heroImageOpacity,
              x: heroImageX,
            }}
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : {
                    opacity: { duration: 1.2, delay: 0.3 },
                    x: { duration: 1.5, delay: HERO_ANIMATION_DELAY / 1000, ease: 'easeInOut' },
                  }
            }
            className="relative hidden lg:flex justify-center items-center"
          >
            <div className="relative w-[339px]">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl" />
              <img
                src="./images/foto-hero.jpg"
                alt="Consultores de BlackTI desarrollando estrategias para empresas"
                loading="eager"
                className="relative rounded-3xl shadow-2xl w-[339px] h-[510px] object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Logos de clientes */}
      <div className="relative z-10 py-12 border-t border-slate-800/50 bg-slate-900/20 backdrop-blur-sm">
        <div className="container mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-center text-slate-400 text-sm font-semibold uppercase tracking-wider mb-8">
            Han confiado en nosotros
          </p>

          <div className="relative overflow-hidden">
            <div className={`flex ${logoAnimationClass}`}>
              {logosToRender.map((logo, index) => (
                <Logo key={`${logo.name}-${index}`} logo={logo} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
