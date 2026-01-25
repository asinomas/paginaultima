import React, { useState, useEffect } from 'react';

interface LightProperties {
  size: number;
  blur: number;
  opacity: number;
  duration: number;
}

const getRandomProperties = (previous?: LightProperties): LightProperties => {
  let newProps: LightProperties;
  let attempts = 0;
  const maxAttempts = 10;
  
  do {
    newProps = {
      size: 30 + Math.random() * 15, // 30% a 45% (reducido)
      blur: 80 + Math.random() * 50, // 80px a 130px
      opacity: 0.20 + Math.random() * 0.15, // 0.20 a 0.35 (más opaco)
      duration: 5 + Math.random() * 8, // 5s a 13s (rangos más amplios)
    };
    attempts++;
  } while (
    previous &&
    attempts < maxAttempts &&
    Math.abs(newProps.size - previous.size) < 5 &&
    Math.abs(newProps.blur - previous.blur) < 10 &&
    Math.abs(newProps.opacity - previous.opacity) < 0.03 &&
    Math.abs(newProps.duration - previous.duration) < 2 // Diferencia mínima de 2s
  );
  
  return newProps;
};

const HeroLights: React.FC = () => {
  // Estado para las propiedades de cada luz
  const [lights, setLights] = useState([
    { position: { top: '-10%', left: '-10%' }, ...getRandomProperties(), key: 0 },
    { position: { top: '-10%', right: '-10%' }, ...getRandomProperties(), key: 1 },
    { position: { bottom: '-10%', left: '-10%' }, ...getRandomProperties(), key: 2 },
    { position: { bottom: '-10%', right: '-10%' }, ...getRandomProperties(), key: 3 },
  ]);

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
            filter: `blur(${light.blur}px) brightness(0.7)`,
            animation: `pulse ${light.duration}s ease-in-out infinite`,
            transition: 'opacity 3s ease-in-out, width 3s ease-in-out, height 3s ease-in-out, filter 3s ease-in-out',
          }}
        />
      ))}
      
      {/* Gradiente de fondo */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#135bec]/10 via-transparent to-transparent opacity-60" />
      
      {/* Textura de fondo */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: "url('https://www.transparenttextures.com/patterns/carbon-fibre.png')"
        }}
      />
      
      {/* Definimos la animación pulse personalizada */}
      <style>{`
        @keyframes pulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.08);
          }
          100% {
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default HeroLights;
