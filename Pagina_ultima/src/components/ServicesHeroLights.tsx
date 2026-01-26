import React, { useState, useEffect } from 'react';

interface LightProperties {
  size: number;
  blur: number;
  opacity: number;
  duration: number;
}

// Valores discretos disponibles para 2 luces
const availableSizes = [45, 50]; // Solo 2 tamaños para 2 luces
const availableOpacities = [0.15, 0.20]; // Solo 2 opacidades
const availableBlurs = [100, 110];

// Tracking de valores usados actualmente
let usedSizes = new Set<number>();
let usedOpacities = new Set<number>();

const getRandomProperties = (previous?: LightProperties, lightIndex?: number): LightProperties => {
  // Seleccionar tamaño único
  const availableUnusedSizes = availableSizes.filter(s => !usedSizes.has(s));
  let size: number;
  
  if (availableUnusedSizes.length > 0) {
    size = availableUnusedSizes[Math.floor(Math.random() * availableUnusedSizes.length)];
  } else {
    usedSizes.clear();
    const differentSizes = availableSizes.filter(s => s !== previous?.size);
    size = differentSizes[Math.floor(Math.random() * differentSizes.length)];
  }
  
  // Seleccionar opacidad única
  const availableUnusedOpacities = availableOpacities.filter(o => !usedOpacities.has(o));
  let opacity: number;
  
  if (availableUnusedOpacities.length > 0) {
    opacity = availableUnusedOpacities[Math.floor(Math.random() * availableUnusedOpacities.length)];
  } else {
    usedOpacities.clear();
    const differentOpacities = availableOpacities.filter(o => o !== previous?.opacity);
    opacity = differentOpacities[Math.floor(Math.random() * differentOpacities.length)];
  }
  
  // Liberar valores anteriores si existen
  if (previous) {
    usedSizes.delete(previous.size);
    usedOpacities.delete(previous.opacity);
  }
  
  // Marcar nuevos valores como usados
  usedSizes.add(size);
  usedOpacities.add(opacity);
  
  return {
    size,
    blur: availableBlurs[Math.floor(Math.random() * availableBlurs.length)],
    opacity,
    duration: 8 + Math.random() * 4, // 8s a 12s
  };
};

const ServicesHeroLights: React.FC = () => {
  // Estado para las propiedades de cada luz (solo 2 luces en esquinas superiores)
  const [lights, setLights] = useState(() => 
    [
      { position: { top: '-20%', left: '-10%' }, ...getRandomProperties(undefined, 0), key: 0 },
      { position: { top: '-20%', right: '-10%' }, ...getRandomProperties(undefined, 1), key: 1 },
    ]
  );

  useEffect(() => {
    const updateLight = (index: number) => {
      setLights(prev => {
        const newLights = [...prev];
        const currentDuration = newLights[index].duration;
        
        setTimeout(() => {
          setLights(prev => {
            const updated = [...prev];
            const previousProps = {
              size: updated[index].size,
              blur: updated[index].blur,
              opacity: updated[index].opacity,
              duration: updated[index].duration,
            };
            
            updated[index] = {
              ...updated[index],
              ...getRandomProperties(previousProps, index),
              key: updated[index].key + 1,
            };
            return updated;
          });
          
          updateLight(index);
        }, currentDuration * 1000);
        
        return newLights;
      });
    };

    const timers = lights.map((_, index) => {
      setTimeout(() => updateLight(index), lights[index].duration * 1000);
      return index;
    });

    return () => {};
  }, []);

  return (
    <>
      {lights.map((light, idx) => (
        <div
          key={`light-${idx}-${light.key}`}
          className="absolute rounded-full"
          style={{
            ...light.position,
            width: `${light.size}%`,
            height: `${light.size}%`,
            backgroundColor: '#135bec',
            opacity: light.opacity,
            filter: `blur(${light.blur}px)`,
            animation: `pulseServices ${light.duration}s cubic-bezier(0.4, 0, 0.6, 1) infinite`,
            transition: 'opacity 4s cubic-bezier(0.4, 0, 0.6, 1), width 4s cubic-bezier(0.4, 0, 0.6, 1), height 4s cubic-bezier(0.4, 0, 0.6, 1), filter 4s cubic-bezier(0.4, 0, 0.6, 1)',
          }}
        />
      ))}
      
      {/* Textura de fondo */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: "url('https://www.transparenttextures.com/patterns/carbon-fibre.png')"
        }}
      />
      
      <style>{`
        @keyframes pulseServices {
          0%, 100% {
            transform: scale(0.98);
          }
          50% {
            transform: scale(1.02);
          }
        }
      `}</style>
    </>
  );
};

export default ServicesHeroLights;
