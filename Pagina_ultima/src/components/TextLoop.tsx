import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

interface TextLoopProps {
  children: React.ReactNode[];
  interval?: number;
  className?: string;
  transition?: any;
  variants?: any;
}

const TextLoop: React.FC<TextLoopProps> = ({
  children,
  interval = 2500,
  className = '',
  transition,
  variants,
}) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % children.length);
    }, interval);

    return () => clearInterval(timer);
  }, [children.length, interval]);

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
          className="inline-block whitespace-nowrap"
        >
          {children[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

export default TextLoop;
