import React from 'react';

const Logos: React.FC = () => {
  const logos = [
    { name: 'Grupo Sura', src: '/logos/grupo-sura.png' },
    { name: 'Casa&Ideas', src: '/logos/casa-ideas.png' },
    { name: 'Globant', src: '/logos/globant.png' },
    { name: 'Marubeni', src: '/logos/marubeni.png' },
    { name: 'Everis', src: '/logos/everis.png' },
    { name: 'Compunet', src: '/logos/compunet.png' },
  ];

  return (
    <section className="bg-white py-16 border-t border-slate-100 overflow-hidden">
      <div className="container mx-auto px-6 mb-10">
        <p className="text-center text-[10px] font-bold uppercase tracking-[0.5em] text-slate-400">
          Alianzas que impulsan el Cambio Global
        </p>
      </div>

      {/* Contenedor del Carrusel */}
      <div className="relative flex overflow-hidden">
        <div className="flex animate-infinite-scroll gap-16 items-center">
          {/* Renderizamos dos veces para el efecto infinito */}
          {[...logos, ...logos, ...logos].map((logo, idx) => (
            <div key={idx} className="flex-shrink-0 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
              <img
                alt={logo.name}
                className="h-8 md:h-10 w-auto object-contain"
                src={logo.src}
                style={{ minWidth: '120px' }}
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes infinite-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 25s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Logos;
