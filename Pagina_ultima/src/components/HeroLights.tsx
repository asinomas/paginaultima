import React, { useMemo } from 'react';

const LIGHTS = 4;

const pulseDurations = ['5s', '6s', '8s', '10s'] as const;
const pulseDelays = ['0s', '1s', '2s', '0.5s'] as const;
const opacities = ['10', '15', '20'] as const; // Tailwind opacity /10 /15 /20
const colors = ['#135bec', 'blue'] as const;

function getRandom<T>(arr: readonly T[]) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const HeroLights: React.FC = () => {
  // Generamos aleatoriamente las luces solo una vez
  const lights = useMemo(() => {
    return Array.from({ length: LIGHTS }, (_, i) => ({
      top: `${Math.random() * 15 - 10}%`,      // valores entre -10% y 5%
      left: `${Math.random() * 15 - 10}%`,
      right: `${Math.random() * 15 - 10}%`,
      bottom: `${Math.random() * 15 - 10}%`,
      w: `${35 + Math.random() * 20}%`,       // ancho entre 35% y 55%
      h: `${35 + Math.random() * 20}%`,       // alto entre 35% y 55%
      color: getRandom(colors),
      opacity: getRandom(opacities),
      duration: getRandom(pulseDurations),
      delay: getRandom(pulseDelays),
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {lights.map((l, i) => (
        <div
          key={i}
          className={`absolute rounded-full blur-[100px] animate-[pulse_${l.duration}_infinite]`}
          style={{
            top: l.top,
            left: l.left,
            right: l.right,
            bottom: l.bottom,
            width: l.w,
            height: l.h,
            backgroundColor: l.color,
            opacity: parseInt(l.opacity) / 100,
            animationDelay: l.delay,
          }}
        />
      ))}

      {/* Gradiente y textura de fondo intactos */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#135bec]/10 via-transparent to-transparent opacity-60"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 pointer-events-none"></div>
    </div>
  );
};

export default HeroLights;
