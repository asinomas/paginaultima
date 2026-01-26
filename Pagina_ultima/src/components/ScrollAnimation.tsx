// src/components/ScrollAnimation.tsx
import React, { ReactNode } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({ children, className = '' }) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;
