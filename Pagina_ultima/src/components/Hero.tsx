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
    show: { transition: { staggerChildren: 0.2 } },
  };

  const itemVariants: Variants = {
    hidden: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: 'easeOut' },
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
      {/* resto del JSX sin cambios */}
    </section>
  );
};

export default Hero;

