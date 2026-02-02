import React, { useState, useEffect, useCallback, memo, useRef } from 'react';
import { motion, useReducedMotion, Variants } from 'framer-motion';
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
const RESIZE_THROTTLE_DELAY = 200;

const BASE_LOGOS = [
  { name: 'Grupo Sura', src: './logos/grupo-sura.png' },
  { name: 'Casa&Ideas', src: './logos/casa-ideas.png' },
  { name: 'Globant', src: './logos/globant.png' },
  { name: 'Marubeni', src: './logos/marubeni.png' },
  { name: 'Everis', src: './logos/everis.png' },
  { name: 'Compunet', src: './logos/compunet.png' },
];

const throttle = (fn: () => void, delay: number) => {
  let inThrottle = false;
  return () => {
    if (!inThrottle) {
      fn();
      inThrottle = true;
      setTimeout(() => (inThrottle = false), delay);
    }
  };
};

/* ================================
   LOGO
================================ */
const Logo = memo(
  ({
    logo,
    animated,
  }: {
    logo: { name: string; src: string };
    animated: boolean;
  }) => (
    <div
      className={`flex-shrink-0 flex items-center justify-center px-6
        min-w-[140px] md:min-w-[200px]
        transition-all duration-500
        ${
          animated
            ? 'grayscale opacity-40 hover:grayscale-0 hover:opacity-100'
            : 'grayscale opacity-40'
        }`}
    >
      <img
        src={logo.src}
        alt={logo.name}
        loading="lazy"
        className="h-9 md:h-12 w-auto object-contain"
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = 'none';
        }}
      />
    </div>
  )
);

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const systemReducedMotion = useReducedMotion();
  const shouldReduceMotion = FORCE_ANIMATIONS_DEV
    ? false
    : systemReducedMotion;

  const [moveLayout, setMoveLayout] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const lastWidthRef = useRef<number>(1024);

  const checkMobile = useCallback(() => {
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

  const heroTextX =
    shouldReduceMotion || !moveLayout || isMobile ? 0 : 'var(--hero-text-x)';

  const heroImageX =
    shouldReduceMotion || !moveLayout || isMobile ? 0 : 'var(--hero-image-x)';

  const heroTextInitial = shouldReduceMotion
    ? { opacity: 1, x: 0, y: 0 }
    : { opacity: 0, y: 20 };

  const heroImageInitial = shouldReduceMotion
    ? { opacity: 1, x: 0 }
    : { opacity: 0, x: 'calc(min(40vw, 400px))' };

  const logosToRender = shouldReduceMotion
    ? BASE_LOGOS
    : [...BASE_LOGOS, ...BASE_LOGOS];

  const containerVariants: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: shouldReduceMotion
      ? { opacity: 1, y: 0 }
      : { opacity: 0, y: 20 },
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
      className="relative min-h-screen flex flex-col justify-between bg-[#0b0e14] overflow-hidden pt-32 md:pt-40 antialiased"
      style={
        {
          '--hero-text-x': 'calc(-15vw)',
          '--hero-image-x': 'calc(min(-3vw, -40px))',
        } as React.CSSProperties
      }
    >
      <HeroLights />

      {/* ================= HERO ================= */}
      <div className="container mx-auto max-w-7xl px-6 lg:px-8 flex-1 flex items-center relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
          {/* TEXTO */}
          <motion.div
            initial={heroTextInitial}
            animate={{ opacity: 1, x: heroTextX, y: 0 }}
            transition={{
              opacity: { duration: 1 },
              x: { duration: 1.5, delay: HERO_ANIMATION_DELAY / 1000 },
              y: { duration: 1 },
            }}
            className="space-y-6 text-center lg:text-left"
          >
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="space-y-4"
            >
              <motion.h1
                variants={itemVariants}
                className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.15]"
              >
                <span className="text-[#135bec] italic">
                  Construyendo{' '}
                </span>
                <span className="text-white/95">el futuro</span>
                <br />
                <span className="text-white/95">de tu </span>
                <span className="text-[#135bec] italic">
                  Empresa
                </span>
              </motion.h1>

              {/* ✅ SUBTÍTULO COMPLETO */}
              <motion.p
                variants={itemVariants}
                className="text-lg sm:text-xl md:text-2xl text-slate-300 font-light max-w-2xl mx-auto lg:mx-0"
              >
                Arquitectura para{' '}
                <span className="font-semibold text-white/90">
                  startups{' '}
                </span>
                Optimización para{' '}
                <span className="font-semibold text-white/90">
                  empresas{' '}
                </span>
                Acompañamiento en cada{' '}
                <span className="font-semibold text-white/90">
                  etapa
                </span>
              </motion.p>

              {/* BOTONES */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4"
              >
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
              </motion.div>
            </motion.div>
          </motion.div>

          {/* IMAGEN */}
          <motion.div
            initial={heroImageInitial}
            animate={{ opacity: 1, x: heroImageX }}
            transition={{
              opacity: { duration: 1.2 },
              x: { duration: 1.5, delay: HERO_ANIMATION_DELAY / 1000 },
            }}
            className="hidden lg:flex justify-center"
          >
            <img
              src="./images/foto-hero.jpg"
              alt="Consultores BlackTI"
              className="rounded-3xl shadow-2xl w-[339px] h-[510px] object-cover"
            />
          </motion.div>
        </div>
      </div>

      {/* ================= LOGOS ================= */}
      <div className="py-14 border-t border-slate-800/50 bg-slate-900/20 overflow-hidden">
        <div className="container mx-auto px-6">
          <p className="text-center text-slate-400 text-[10px] font-bold uppercase tracking-[0.5em] mb-6">
            Han confiado en nosotros
          </p>

          <div className="relative overflow-hidden">
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0b0e14] to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0b0e14] to-transparent z-10" />

            <div className="flex w-max animate-infinite-scroll">
              {logosToRender.map((logo, index) => (
                <Logo
                  key={`${logo.name}-${index}`}
                  logo={logo}
                  animated={!shouldReduceMotion}
                />
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
