import React, { useEffect, useState } from 'react';

const logos = [
  { name: 'Grupo Sura', src: './logos/grupo-sura.png' },
  { name: 'Casa&Ideas', src: './logos/casa-ideas.png' },
  { name: 'Globant', src: './logos/globant.png' },
  { name: 'Marubeni', src: './logos/marubeni.png' },
  { name: 'Everis', src: './logos/everis.png' },
  { name: 'Compunet', src: './logos/compunet.png' },
];

const HomeHero: React.FC = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setAnimate(true), 600);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative bg-white overflow-hidden">
      {/* HERO */}
      <div className="container mx-auto px-6 pt-28 pb-16">
        <div className="relative flex items-center justify-center">
          {/* TEXTO */}
          <div
            className={`transition-transform duration-[900ms] ease-out
              ${animate ? '-translate-x-[140px]' : 'translate-x-0'}
            `}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 max-w-xl text-center md:text-left">
              Arquitectura y optimización para empresas digitales
            </h1>
            <p className="mt-6 text-slate-600 max-w-xl text-center md:text-left">
              Escalamos plataformas, reducimos costos y mejoramos rendimiento
              con soluciones de ingeniería modernas.
            </p>
            <div className="mt-8 flex gap-4 justify-center md:justify-start">
              <button className="px-6 py-3 bg-slate-900 text-white rounded-lg">
                Contáctanos
              </button>
              <button className="px-6 py-3 border border-slate-300 rounded-lg">
                Ver servicios
              </button>
            </div>
          </div>

          {/* IMAGEN */}
          <div
            className={`absolute right-0 transition-transform duration-[900ms] ease-out
              ${animate ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-100'}
            `}
          >
            <img
              src="./hero-image.png"
              alt="Hero"
              className="w-[420px] max-w-none"
            />
          </div>
        </div>
      </div>

      {/* FRANJA DE LOGOS */}
      <div className="relative overflow-hidden border-t border-slate-100 py-10">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="flex animate-infinite-scroll">
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex items-center justify-center
                min-w-[180px] md:min-w-[260px]
                grayscale opacity-40 hover:grayscale-0 hover:opacity-100
                transition-all duration-500"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="h-10 md:h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* ANIMACIÓN */}
      <style>{`
        @keyframes infinite-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-infinite-scroll {
          display: flex;
          width: max-content;
          animation: infinite-scroll 45s linear infinite;
        }
        .animate-infinite-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default HomeHero;
