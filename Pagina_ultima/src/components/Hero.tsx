import React, { useState, useEffect, useCallback, memo, useRef } from 'react';
import { motion, useReducedMotion, Variants } from 'framer-motion';
import HeroLights from './HeroLights';

interface HeroProps {
  onNavigate: (page: 'home' | 'services' | 'about' | 'contact') => void;
}

const HERO_ANIMATION_DELAY = 1500;
const MOBILE_BREAKPOINT = 1024;
const DEV_FORCE_ANIMATION = true;

const BASE_LOGOS = [
  { name: 'Grupo Sura', src: './logos/grupo-sura.png' },
  { name: 'Casa&Ideas', src: './logos/casa-ideas.png' },
  { name: 'Globant', src: './logos/globant.png' },
  { name: 'Marubeni', src: './logos/marubeni.png' },
  { name: 'Everis', src: './logos/everis.png' },
  { name: 'Compunet', src: './logos/compunet.png' },
];

const throttle = (fn: (...args: unknown[]) => void, delay: number) => {
  let inThrottle = false;
  return (...args: unknown[]) => {
    if (!inThrottle) {
      fn(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), delay);
    }
  };
};

const Logo = memo(({ logo }: { logo: { name: string; src: string } }) => (
  <div className="flex-shrink-0 flex items-center justify-center min-w-[140px] md:min-w-[180px] grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
    <img
      src={logo.src}
      alt={logo.name}
      loading="lazy"
      className="h-8 md:h-10 w-auto object-contain"
    />
  </div>
));

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const reduceMotion = useReducedMotion();
  const animated = DEV_FORCE_ANIMATION && !reduceMotion;

  const [moveLayout, setMoveLayout] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const lastWidthRef = useRef(1024);

  const checkMobile = useCallback(() => {
    const w = window.innerWidth;
    setIsMobile(w < MOBILE_BREAKPOINT);
    lastWidthRef.current = w;
  }, []);

  useEffect(() => {
    checkMobile();

    const onResize = throttle(() => {
      if (Math.abs(window.innerWidth - lastWidthRef.current) > 10) {
        checkMobile();
      }
    }, 200);

    window.addEventListener('resize', onResize);

    const timer = setTimeout(() => {
      setMoveLayout(true);
    }, HERO_ANIMATION_DELAY);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', onResize);
    };
  }, [checkMobile]);

  const logosToRender = animated ? [...BASE_LOGOS, ...BASE_LOGOS] : BASE_LOGOS;

  const containerVariants: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: animated ? 0.2 : 0 } },
  };

  const itemVariants: Variants = {
    hidden: animated ? { opacity: 0, y: 20 } : { opacity: 1 },
    show: { opacity: 1, y: 0, transition: { duration: 0.9 } },
  };

  return (
    <section className="relative min-h-screen bg-[#0b0e14] overflow-hidden pt-28">
      <HeroLights />

      <div className="container mx-auto max-w-7xl px-6 lg:px-10 flex items-center min-h-[75vh]">
        <div className="relative w-full">

          {/* TEXTO */}
          <motion.div
            initial={{ opacity: 0, y: 20, x: 0 }}
            animate={{
              opacity: 1,
              y: 0,
              x: animated && moveLayout && !isMobile ? '-12vw' : 0,
            }}
            transition={{
              opacity: { duration: 1 },
              y: { duration: 1 },
              x: {
                duration: 1.4,
                ease: 'easeInOut',
                delay: HERO_ANIMATION_DELAY / 1000,
              },
            }}
            className="relative z-10 max-w-xl mx-auto lg:mx-0 text-center lg:text-left"
          >
            <motion.div variants={containerVariants} initial="hidden" animate="show">
              <motion.h1
                variants={itemVariants}
                className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight"
              >
                <span className="text-[#135bec] italic">Construyendo </span>
                <span className="text-white">el futuro</span>
                <br />
                <span className="text-white">de tu </span>
                <span className="text-[#135bec] italic">Empresa</span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="mt-6 text-lg md:text-xl text-slate-300"
              >
                Arquitectura para <span className="font-semibold text-white">startups </span>
                Optimización para <span className="font-semibold text-white">empresas </span>
                Acompañamiento en cada <span className="font-semibold text-white">etapa</span>
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="mt-8 flex gap-4 justify-center lg:justify-start"
              >
                <button
                  onClick={() => onNavigate('contact')}
                  className="px-8 py-4 bg-blue-600 text-white font-bold rounded-2xl"
                >
                  Solicitar Consultoría
                </button>
                <button
                  onClick={() => onNavigate('services')}
                  className="px-8 py-4 bg-slate-800 text-white rounded-2xl"
                >
                  Servicios
                </button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* IMAGEN */}
          <motion.div
            initial={{ opacity: 0, x: '30vw' }}
            animate={{
              opacity: animated && moveLayout && !isMobile ? 1 : 0,
              x: animated && moveLayout && !isMobile ? '12vw' : '30vw',
            }}
            transition={{
              duration: 1.4,
              ease: 'easeInOut',
              delay: HERO_ANIMATION_DELAY / 1000,
            }}
            className="hidden lg:block absolute top-1/2 right-0 -translate-y-1/2"
          >
            <img
              src="./images/foto-hero.jpg"
              alt="Equipo BlackTI"
              className="w-[320px] h-[480px] rounded-3xl object-cover shadow-2xl"
            />
          </motion.div>
        </div>
      </div>

      {/* LOGOS */}
      <div className="py-6 border-t border-slate-800/50 bg-slate-900/20">
        <p className="text-center text-slate-400 text-[10px] font-bold uppercase tracking-[0.5em] mb-4">
          Han confiado en nosotros
        </p>

        <div className="overflow-hidden">
          <div className="flex animate-infinite-scroll">
            {logosToRender.map((logo, i) => (
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
          animation: infinite-scroll 40s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
