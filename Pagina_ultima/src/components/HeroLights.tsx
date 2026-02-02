import React, { useState, useEffect } from 'react';

interface LightProperties {
  size: number;
  blur: number;
  opacity: number;
  duration: number;
}

// Valores discretos disponibles
const availableSizes = [25, 30, 35, 40, 45, 50];
const availableOpacities = [0.08, 0.10, 0.12, 0.15];
const availableBlurs = [90, 100, 110, 120];

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
    // Si todos están usados, resetear y elegir uno diferente al anterior
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
    // Si todos están usados, resetear y elegir uno diferente al anterior
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
    duration: 6 + Math.random() * 6, // 6s a 12s
  };
};

const HeroLights: React.FC = () => {
  // Estado para las propiedades de cada luz
  const [lights, setLights] = useState(() => 
    [
      { position: { top: '-10%', left: '-10%' }, ...getRandomProperties(undefined, 0), key: 0 },
      { position: { top: '-10%', right: '-10%' }, ...getRandomProperties(undefined, 1), key: 1 },
      { position: { bottom: '-10%', left: '-10%' }, ...getRandomProperties(undefined, 2), key: 2 },
      { position: { bottom: '-10%', right: '-10%' }, ...getRandomProperties(undefined, 3), key: 3 },
    ]
  );

  useEffect(() => {
    // Función para actualizar una luz específica
    const updateLight = (index: number) => {
      setLights(prev => {
        const newLights = [...prev];
        const currentDuration = newLights[index].duration;
        
        // Programar la siguiente actualización para cuando termine el ciclo actual
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
              ...getRandomProperties(previousProps),
              key: updated[index].key + 1, // Cambiar key para forzar re-render de animación
            };
            return updated;
          });
          
          // Continuar el ciclo
          updateLight(index);
        }, currentDuration * 1000);
        
        return newLights;
      });
    };

    // Iniciar el ciclo para cada luz
    const timers = lights.map((_, index) => {
      setTimeout(() => updateLight(index), lights[index].duration * 1000);
      return index;
    });

    // Cleanup
    return () => {
      // Los timeouts se limpian automáticamente cuando el componente se desmonta
    };
  }, []); // Solo ejecutar una vez al montar

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
            filter: `blur(${light.blur}px) brightness(0.85)`,
            animation: `pulse ${light.duration}s cubic-bezier(0.4, 0, 0.6, 1) infinite`,
            transition: 'opacity 4s cubic-bezier(0.4, 0, 0.6, 1), width 4s cubic-bezier(0.4, 0, 0.6, 1), height 4s cubic-bezier(0.4, 0, 0.6, 1), filter 4s cubic-bezier(0.4, 0, 0.6, 1)',
          }}
        />
      ))}
      
      {/* Gradiente de fondo */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#135bec]/10 via-transparent to-transparent opacity-60" />
      
      {/* Textura de fondo */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{backgroundImage: "url('https://www.transparenttextures.com/patterns/asfalt-dark.png')",
                opacity: 0.05,
                filter: 'blur(0.6px)
        }}
      />
      
      {/* Definimos la animación pulse tipo respiración suave */}
      <style>{`
        @keyframes pulse {
          0%, 100% {
            transform: scale(0.98);
          }
          50% {
            transform: scale(1.02);
          }
        }
      `}</style>
    </div>
  );
};

export default HeroLights;
