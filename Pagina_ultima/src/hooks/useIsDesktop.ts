import { useEffect, useState } from 'react';

export const useIsDesktop = () => {
  const getInitialValue = () => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(min-width: 1024px)').matches;
  };

  const [isDesktop, setIsDesktop] = useState(getInitialValue);

  useEffect(() => {
    const query = window.matchMedia('(min-width: 1024px)');

    const handleChange = () => {
      setIsDesktop(query.matches);
    };

    if (query.addEventListener) {
      query.addEventListener('change', handleChange);
    } else {
      // @ts-ignore legacy Safari
      query.addListener(handleChange);
    }

    return () => {
      if (query.removeEventListener) {
        query.removeEventListener('change', handleChange);
      } else {
        // @ts-ignore legacy Safari
        query.removeListener(handleChange);
      }
    };
  }, []);

  return isDesktop;
};
