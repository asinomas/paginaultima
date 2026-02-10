import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface TextLoopProps {
  children: React.ReactNode[];
  interval?: number;
  className?: string;
}

const TextLoop: React.FC<TextLoopProps> = ({
  children,
  interval = 2800, // más lento para que se vea natural
  className = '',
}) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!children || children.length <= 1) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % children.length);
    }, interval);

    return () => clearInterval(timer);
  }, [children, interval]);

  const variants = {
    initial: { opacity: 0, y: 4 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -4 },
  };

  const transition = { duration: 0.6, ease: 'easeInOut' };

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
