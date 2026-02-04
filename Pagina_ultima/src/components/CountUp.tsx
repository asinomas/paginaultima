import { useEffect, useRef, useState } from 'react';

interface CountUpProps {
  value: number;
  duration?: number; // ms
}

const CountUp: React.FC<CountUpProps> = ({ value, duration = 2800 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          let startTime: number | null = null;

          const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const elapsed = timestamp - startTime;

            const progress = Math.min(elapsed / duration, 1);

            // easing suave (easeOutCubic)
            const eased = 1 - Math.pow(1 - progress, 3);

            setCount(Math.floor(eased * value));

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(value);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.6 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, duration]);

  return <span ref={ref}>{count}</span>;
};

export default CountUp;
