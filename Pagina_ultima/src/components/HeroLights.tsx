import React, { useMemo } from 'react';

const lightColors = ['#135bec', 'blue'];
const lightOpacities = [10, 15, 20]; // usando Tailwind style /10, /15, /20
const pulseDurations = ['5s', '6s', '8s', '10s'];
const pulseInfinites = ['infinite', 'infinite_reverse', 'infinite_1s', 'infinite_2s'];

interface Light {
  color: string;
  opacity: number;
  top: string;
  left: string;
  size: string;
  blur: string;
  pulse: string;
}

const generateRandomLights = (): Light[] => {
  const lights: Light[] = [];

  // Vamos a generar 4 luces
  for (let i = 0; i < 4; i++) {
    // Posición aleatoria, solo top+left para no colapsar
    const top = `${Math.random() * 15 - 10}%`; // -10% a +5%
    const left = `${Math.random() * 15 - 10}%`; // -10% a +5%

    // Color y opacidad aleatoria
    const color = lightColors[Math.floor(Math.random() * lightColors.length)];
    const opacity = lightOpacities[Math.floor(Math.random() * lightOpacities.length)];

    // Tamaño y blur aproximado
    const size = `${35 + Math.random() * 20}%`; // 35% a 55%
    const blur = `${90 + Math.random() * 40}px`; // 90px a 130px

    // Pulse duration aleatorio
    const pulse = pulseDurations[Math.floor(Math.random() * pulseDurations.length)];

    lights.push({
      color,
      opacity,
      top,
      left,
      size,
      blur,
      pulse,
    });
  }

  return lights;
};

const HeroLights: React.FC = () => {
  // Generamos luces una sola vez al renderizar
  const lights = useMemo(() => generateRandomLights(), []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {lights.map((light, idx) => (
        <div
          key={idx}
          className={`absolute rounded-full animate-[pulse_${light.pulse}_infinite]`}
          style={{
            top: light.top,
            left: light.left,
            width: light.size,
            height: light.size,
            backgroundColor: `${light.color}`,
            opacity: light.opacity / 100,
            filter: `blur(${light.blur})`,
          }}
        ></div>
      ))}
      {/* Gradiente de fondo */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#135bec]/10 via-transparent to-transparent opacity-60"></div>
      {/* Textura de fondo */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 pointer-events-none"></div>
    </div>
  );
};

export default HeroLights;
