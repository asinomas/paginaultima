import React, { useState, useEffect, useCallback, memo, useRef } from 'react';
import { motion, Variants } from 'framer-motion';
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

const Logo = memo(
  ({ logo, animated }: { logo: { name: string; src: string }; animated: boolean }) => (
    <div
      className={`flex-shrink-0 flex items-center justify-center
      min-w-[120px] md:min-w-[180px]
      h-[44px] md:h-[52px]
      transition-all duration-500
      ${animated ? 'grayscale opacity-40 hover:grayscale-0 hover:opacity-100' : 'grayscale opacity-40'}
    `}
    >
      <img
        src={logo.src}
        alt={logo.name}
        loading="lazy"
        className="max-h-[26px] md:max-h-[34px] max-w-[120px] md:max-w-[150px] object-contain"
      />
    </div>
  )
);

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
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
      if (Math.abs(window.innerWidth - lastWidthRef.current) > 10) {
        checkMobile();
      }
    }, 200);

    window.addEventListener('resize', onResize);
    const timer = setTimeout(() => setMoveLayout(true), HERO_ANIMATION_DELAY);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', onResize);
    };
  }, [checkMobile]);

  const animated = DEV_FORCE_ANIMATION && !isMobile;
  const logosToRender = animated ? [...BASE_LOGOS, ...BASE_LOGOS] : BASE_LOGOS;

  const itemVariants: Variants = {
    hidden: animated ? { opacity: 0, y: 20 } : { opacity: 1 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section className="relative min-h-[92vh] flex flex-col bg-[#0b0e14] pt-24 overflow-hidden">
      <HeroLights />

      <div className="container mx-auto max-w-7xl px-6 flex-1 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center w-full">
          {/* TEXTO */}
          <motion.div
            initial={animated ? { x: '-12vw', opacity: 0 } : false}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.4, ease: 'easeInOut' }}
            className="text-center lg:text-left space-y-6"
          >
            <motion.h1
              variants={itemVariants}
              initial="hidden"
              animate="show"
              className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight"
            >
              <span className="text-[#135bec] italic">Construyendo </span>
              <span className="text-white">el futuro</span>
              <br />
              <span className="text-white">de tu </span>
              <span className="text-[#135bec] italic">Empresa</span>
            </motion.h1>

            <p className="text-lg md:text-xl text-slate-300 max-w-xl mx-auto lg:mx-0">
              Arquitectura para <span className="font-semibold text-white">startups </span>
              Optimización para <span className="font-semibold text-white">empresas </span>
              Acompañamiento en cada <span className="font-semibold text-white">etapa</span>
            </p>

            <div className="flex gap-4 justify-center lg:justify-start">
              <button
                onClick={() => onNavigate('contact')}
                className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold"
              >
                Solicitar Consultoría
              </button>
              <button
                onClick={() => onNavigate('services')}
                className="px-8 py-4 bg-slate-800 text-white rounded-2xl"
              >
                Servicios
              </button>
            </div>
          </motion.div>

          {/* IMAGEN */}
          <motion.div
            initial={animated ? { x: '12vw', opacity: 0 } : false}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.4, ease: 'easeInOut' }}
            className="hidden lg:flex justify-center -translate-y-8"
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
              <Logo key={i} logo={logo} animated={animated} />
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
          width: max-content;
          display: flex;
          animation: infinite-scroll 40s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
