import React, { useEffect, useState } from 'react';

interface Light {
  id: number;
  style: { top?: string; bottom?: string; left?: string; right?: string };
  color: string;
  opacity: number;
  duration: string;
  animation: string;
}

const pulseDurations = ['5s', '6s', '8s', '10s'];
const opacities = [0.1, 0.15, 0.2];
const animations = ['infinite', 'infinite_reverse', 'infinite_1s', 'infinite_2s'];
const colors = ['#135bec', 'blue'];

const positions = [
  { top: [-10, -5], left: [-10, -5] },
  { bottom: [-10, -5], left: [-10, -5] },
  { top: [-5, 0], right: [-10, -5] },
  { bottom: [-5, 0], right: [-5, 0] },
];

const randomFrom = <T,>(arr: T[]) => arr[Math.floor(Math.random() * arr.length)];

const HeroLights: React.FC = () => {
  const [lights, setLights] = useState<Light[]>(() =>
    Array.from({ length: 4 }).map((_, i) => ({
      id: i,
      style: {
        top: positions[i].top ? `${randomFrom(positions[i].top)}%` : undefined,
        bottom: positions[i].bottom ? `${randomFrom(positions[i].bottom)}%` : undefined,
        left: positions[i].left ? `${randomFrom(positions[i].left)}%` : undefined,
        right: positions[i].right ? `${randomFrom(positions[i].right)}%` : undefined,
      },
      color: randomFrom(colors),
      opacity: randomFrom(opacities),
      duration: randomFrom(pulseDurations),
      animation: randomFrom(animations),
    }))
  );

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];

    lights.forEach((light, index) => {
      const next = (prev?: string) => {
        const available = pulseDurations.filter(d => d !== prev);
        const duration = randomFrom(available);

        const timer = setTimeout(() => {
          setLights(prev =>
            prev.map((l, i) =>
              i === index
                ? {
                    ...l,
                    style: {
                      top: positions[i].top ? `${randomFrom(positions[i].top)}%` : undefined,
                      bottom: positions[i].bottom ? `${randomFrom(positions[i].bottom)}%` : undefined,
                      left: positions[i].left ? `${randomFrom(positions[i].left)}%` : undefined,
                      right: positions[i].right ? `${randomFrom(positions[i].right)}%` : undefined,
                    },
                    color: randomFrom(colors),
                    opacity: randomFrom(opacities),
                    duration,
                  }
                : l
            )
          );
          next(duration);
        }, parseInt(duration) * 1000);

        timers.push(timer);
      };

      next(light.duration);
    });

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {lights.map(light => (
        <div
          key={light.id}
          className={`absolute rounded-full blur-[100px] animate-[pulse_${light.duration}_${light.animation}]`}
          style={{
            ...light.style,
            width: `${35 + light.id * 5}%`,
            height: `${35 + light.id * 5}%`,
            backgroundColor: light.color,
            opacity: light.opacity,
          }}
        />
      ))}
    </div>
  );
};

export default HeroLights;
