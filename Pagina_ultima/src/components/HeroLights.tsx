import React, { useMemo } from 'react';

const durations = ['5s', '6s', '8s', '10s'];
const delays = ['0s', '1s', '2s'];
const opacities = ['10', '15', '20'];
const colors = ['#135bec', 'blue'];

const getRandomItem = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];

const HeroLights: React.FC = () => {
  const lights = useMemo(() => {
    return Array(4)
      .fill(0)
      .map(() => ({
        duration: getRandomItem(durations),
        delay: getRandomItem(delays),
        opacity: getRandomItem(opacities),
        color: getRandomItem(colors),
      }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {lights.map((light, i) => {
        // Posiciones fijas de las 4 esquinas
        const positions = [
          { top: '-10%', left: '-10%' },
          { bottom: '-10%', left: '-10%' },
          { top: '-5%', right: '-10%' },
          { bottom: '-5%', right: '-5%' },
        ];

        // Tamaños y blur aproximados al original
        const sizes = ['50%', '45%', '40%', '35%'];
        const blurs = ['120px', '100px', '110px', '90px'];

        const pos = positions[i];
        const size = sizes[i];
        const blur = blurs[i];

        return (
          <div
            key={i}
            className={`absolute rounded-full blur-[${blur}] animate-[pulse_${light.duration}_infinite]`}
            style={{
              ...pos,
              width: size,
              height: size,
              backgroundColor: `${light.color}/` + light.opacity,
              animationDelay: light.delay,
            }}
          />
        );
      })}

      {/* Gradiente y textura de fondo */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#135bec]/10 via-transparent to-transparent opacity-60"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 pointer-events-none"></div>
    </div>
  );
};

export default HeroLights;
