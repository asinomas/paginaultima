import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Aparece cuando el usuario baja más de 400px
      if (window.pageYOffset > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          /* bottom-28 lo posiciona sobre el botón del chat (que tiene bottom-8) */
          className="fixed bottom-28 right-10 z-50 p-3 rounded-full bg-white text-[#135bec] shadow-xl border border-slate-100 hover:bg-[#135bec] hover:text-white transition-all duration-300 hover:scale-110 active:scale-90 group"
          aria-label="Volver arriba"
        >
          <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
