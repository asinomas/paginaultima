import React, { useEffect, useState } from 'react';

interface Light {
  top: string;
  left: string;
  width: string;
  height: string;
  bgColor: string;
  blur: string;
  duration: string;
  delay: string;
  opacity: number;
}

const pulseDurations = ['5s', '6s', '8s', '10s'];
const pulseDelays = ['0s', '1s', '2s'];
const colors = ['#135bec', 'blue-500', 'blue-600'];
const opacities = [0.1, 0.15, 0.2];

const HeroLights: React.FC = () => {
  const [lights, setLights] = useState<Light[]>([]);

  useEffect(() => {
    const generatedLights: Light[] = [];

    for (let i = 0; i < 4; i++) {
      // Elegir valores random de los arrays, sin repetir
      const duration = pulseDurations.splice(Math.floor(Math.random() * pulseDurations.length), 1)[0];
      const delay = pulseDelays[Math.floor(Math.random() * pulseDelays.length)];
      const opacity = opacities[Math.floor(Math.random() * opacities.length)];
      const color = colors[Math.floor(Math.random() * colors.length)];

      // Posiciones y tamaños fijos como antes
      const positions = [
        { top: '-10%', left: '-10%', width: '50%', height: '50%', blur: '120px' },
        { bottom: '-10%', left: '-10%', width: '45%', height: '45%', blur: '100px' },
        { top: '-5%', right: '-10%', width: '40%', height: '40%', blur: '110px' },
        { bottom: '-5%', right: '-5%', width: '35%', height: '35%', blur: '90px' }
      ];

      generatedLights.push({
        ...positions[i],
        bgColor: color,
        duration,
        delay,
        opacity
      } as Light);
    }

    setLights(generatedLights);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {lights.map((light, idx) => (
        <div
          key={idx}
          className={`absolute rounded-full blur-[${light.blur}]`}
          style={{
            top: light.top,
            bottom: (light as any).bottom,
            left: (light as any).left,
            right: (light as any).right,
            width: light.width,
            height: light.height,
            backgroundColor: light.bgColor,
            animation: `pulse ${light.duration} infinite`,
            animationDelay: light.delay,
            opacity: light.opacity
          }}
        />
      ))}

      {/* Gradiente sobre las luces */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#135bec]/10 via-transparent to-transparent opacity-60"></div>

      {/* Textura de fondo */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 pointer-events-none"></div>
    </div>
  );
};

export default HeroLights;
