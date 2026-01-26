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
    <section className="bg-white py-20 border-t border-slate-100 overflow-hidden">
      <div className="container mx-auto px-6 mb-12">
        <p className="text-center text-[10px] font-bold uppercase tracking-[0.5em] text-slate-400">
          Quienes ya han confiado en nosotros
        </p>
      </div>

      {/* Contenedor del Carrusel */}
      <div className="relative flex overflow-hidden">
        {/* Máscaras de desvanecimiento laterales */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>

        {/* Renderizamos la lista de logos dos veces */}
        <div className="flex animate-infinite-scroll">
          {[...logos, ...logos].map((logo, idx) => (
            <div 
              key={idx} 
              className="flex-shrink-0 flex items-center justify-center grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 px-8"
              style={{ width: '280px' }}
            >
              <img
                alt={logo.name}
                src={logo.src}
                loading="lazy"
                className={`h-12 md:h-16 w-auto object-contain
                  ${logo.name === 'Compunet' ? 'invert' : ''}
                `}
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
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

export default Logos;
