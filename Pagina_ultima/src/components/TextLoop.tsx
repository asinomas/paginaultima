import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface TextLoopProps {
  children: React.ReactNode[];
  interval?: number;
  className?: string;
  transition?: {
    duration?: number;
    ease?: any;
  };
  variants?: {
    initial: any;
    animate: any;
    exit: any;
  };
}

const TextLoop: React.FC<TextLoopProps> = ({
  children,
  interval = 2600,
  className = '',
  transition = {
    duration: 0.45,
    ease: 'easeInOut',
  },
  variants = {
    initial: {
      y: 12,
      opacity: 0,
      filter: 'blur(2px)',
    },
    animate: {
      y: 0,
      opacity: 1,
      filter: 'blur(0px)',
    },
    exit: {
      y: -12,
      opacity: 0,
      filter: 'blur(2px)',
    },
  },
}) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!children || children.length <= 1) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % children.length);
    }, interval);

    return () => clearInterval(timer);
  }, [children, interval]);

  return (
    <span className={`relative inline-block ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={transition}
          className="inline-block whitespace-nowrap will-change-transform"
        >
          {children[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

export default TextLoop;
