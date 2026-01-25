import React, { useState, useEffect } from 'react';

interface HeroProps {
  onNavigate: (page: 'home' | 'services' | 'about' | 'contact') => void;
}

interface Light {
  id: number;
  style: { top?: string; bottom?: string; left?: string; right?: string };
  color: string;
  opacity: number;
  duration: string;
  animation: string;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const pulseDurations = ['5s', '6s', '8s', '10s'];
  const opacities = [0.1, 0.15, 0.2];
  const animations = ['infinite', 'infinite_reverse', 'infinite_1s', 'infinite_2s'];
  const colors = ['#135bec', 'blue'];

  const randomFrom = <T,>(arr: T[]) => arr[Math.floor(Math.random() * arr.length)];

  const positionRanges = [
    { top: [-10, -5], left: [-10, -5] },
    { bottom: [-10, -5], left: [-10, -5] },
    { top: [-5, 0], right: [-10, -5] },
    { bottom: [-5, 0], right: [-5, 0] },
  ];

  const [lights, setLights] = useState<Light[]>(() =>
    Array.from({ length: 4 }).map((_, idx) => ({
      id: idx,
      style: {
        top: positionRanges[idx].top ? `${randomFrom(positionRanges[idx].top)}%` : undefined,
        bottom: positionRanges[idx].bottom ? `${randomFrom(positionRanges[idx].bottom)}%` : undefined,
        left: positionRanges[idx].left ? `${randomFrom(positionRanges[idx].left)}%` : undefined,
        right: positionRanges[idx].right ? `${randomFrom(positionRanges[idx].right)}%` : undefined,
      },
      color: randomFrom(colors),
      opacity: randomFrom(opacities),
      duration: randomFrom(pulseDurations),
      animation: randomFrom(animations),
    }))
  );

  useEffect(() => {
    const timeouts: NodeJS.Timeout[] = [];

    lights.forEach((light, idx) => {
      const scheduleNext = (lastDuration?: string) => {
        const availableDurations = pulseDurations.filter(d => d !== lastDuration);
        const nextDuration = randomFrom(availableDurations);

        const timeout = setTimeout(() => {
          setLights(prev =>
            prev.map((l, i) =>
              i === idx
                ? {
                    ...l,
                    style: {
                      top: positionRanges[i].top ? `${randomFrom(positionRanges[i].top)}%` : undefined,
                      bottom: positionRanges[i].bottom ? `${randomFrom(positionRanges[i].bottom)}%` : undefined,
                      left: positionRanges[i].left ? `${randomFrom(positionRanges[i].left)}%` : undefined,
                      right: positionRanges[i].right ? `${randomFrom(positionRanges[i].right)}%` : undefined,
                    },
                    color: randomFrom(colors),
                    opacity: randomFrom(opacities),
                    duration: nextDuration,
                  }
                : l
            )
          );

          scheduleNext(nextDuration);
        }, parseInt(nextDuration) * 1000);

        timeouts.push(timeout);
      };

      scheduleNext(light.duration);
    });

    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#0b0e14] overflow-hidden pt-20 antialiased">
      
      {/* Sistema de Luces Dinámicas en 4 Esquinas */}
      <div className="absolute inset-0 overflow-hidden">
        {lights.map(light => (
          <div
            key={light.id}
            className={`absolute rounded-full blur-[100px] animate-[pulse_${light.duration}_${light.animation}] transition-all duration-2000`}
            style={{
              ...light.style,
              width: `${35 + light.id * 5}%`,
              height: `${35 + light.id * 5}%`,
              backgroundColor: light.color,
              opacity: light.opacity,
            }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-[#135bec]/10 via-transparent to-transparent opacity-60"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 pointer-events-none"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#135bec]/10 border border-[#135bec]/20 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#135bec] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#135bec]"></span>
            </span>
            <span className="text-[#135bec] text-[11px] font-bold uppercase tracking-[0.2em]">
              Servicio de Consultoría TI
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-8 leading-[1.1] selection:bg-[#135bec]/30">
            Potenciando el{' '}
            <span className="relative inline-block italic text-[#135bec] drop-shadow-[0_0_15px_rgba(19,91,236,0.3)] filter transition-all duration-700">
              Talento
            </span>{' '}
            con Inteligencia
          </h1>

          <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Unimos ingeniería de clase mundial con visión humana para crear soluciones que definen industrias.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('contact')}
              className="group relative overflow-hidden px-8 py-4 bg-[#135bec] text-white rounded-xl font-bold transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-[#135bec]/30"
            >
              <span className="relative z-10">Agendar Consultoría</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-[#135bec] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            <button
              onClick={() => onNavigate('services')}
              className="px-8 py-4 bg-white/5 text-white border border-white/10 rounded-xl font-bold hover:bg-white/10 transition-all backdrop-blur-sm active:scale-95"
            >
              Explorar Soluciones
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
