import React, { useEffect, useState } from 'react';

interface Light {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  width: string;
  height: string;
  color: string;
  blur: string;
  duration: number;
  infinite: string;
  opacity: string;
}

const durations = [5, 6, 8, 10]; // en segundos
const infinities = ['infinite', 'infinite_reverse_1s', 'infinite_2s'];
const colors = ['#135bec', 'blue-500', 'blue-600']; // usar solo azul y #135bec
const opacities = ['10', '15', '20'];

const HeroLights: React.FC = () => {
  const [lights, setLights] = useState<Light[]>([]);

  useEffect(() => {
    // Generar 4 luces únicas
    const newLights: Light[] = Array.from({ length: 4 }, (_, i) => {
      // Asignamos duración única
      const duration = durations[i % durations.length];
      const infinite = infinities[i % infinities.length];
      const color = i % 2 === 0 ? '#135bec' : i === 1 ? 'blue-600' : 'blue-500';
      const opacity = opacities[i % opacities.length];

      // Posiciones y tamaños iniciales
      const positions = [
        { top: '-10%', left: '-10%', width: '50%', height: '50%', blur: '120px' },
        { bottom: '-10%', left: '-10%', width: '45%', height: '45%', blur: '100px' },
        { top: '-5%', right: '-10%', width: '40%', height: '40%', blur: '110px' },
        { bottom: '-5%', right: '-5%', width: '35%', height: '35%', blur: '90px' },
      ];

      return {
        ...positions[i],
        color,
        duration,
        infinite,
        opacity,
      };
    });

    setLights(newLights);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {lights.map((light, i) => (
        <div
          key={i}
          className={`
            absolute
            ${light.top ? `top-[${light.top}]` : ''}
            ${light.bottom ? `bottom-[${light.bottom}]` : ''}
            ${light.left ? `left-[${light.left}]` : ''}
            ${light.right ? `right-[${light.right}]` : ''}
            w-[${light.width}] h-[${light.height}]
            rounded-full
            blur-[${light.blur}]
            bg-[${light.color}]/${light.opacity}
            animate-[pulse_${light.duration}s_${light.infinite}]
          `}
        />
      ))}

      {/* Gradiente de fondo */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#135bec]/10 via-transparent to-transparent opacity-60"></div>
      
      {/* Textura */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 pointer-events-none"></div>
    </div>
  );
};

export default HeroLights;
