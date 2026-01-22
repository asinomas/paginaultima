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
    <section className="bg-white py-20 border-y border-slate-100 overflow-hidden">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <p className="mb-12 text-center text-[10px] font-bold uppercase tracking-[0.5em] text-slate-400">
            Alianzas que impulsan el Cambio Global
          </p>

          {/* Contenedor con efecto de desvanecimiento en los bordes */}
          <div className="relative w-full overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-20 before:bg-gradient-to-r before:from-white before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-20 after:bg-gradient-to-l after:after:from-white after:to-transparent">
            
            <div className="flex animate-scroll hover:pause-scroll gap-16 items-center">
              {/* Duplicamos los logos para crear el efecto infinito */}
              {[...logos, ...logos].map((logo, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 flex items-center justify-center grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 ease-in-out cursor-pointer"
                  style={{ minWidth: '160px' }}
                >
                  <img
                    alt={logo.name}
                    className="h-10 w-auto object-contain max-w-[140px]"
                    src={logo.src}
                    onError={(e) => {
                      // Fallback en caso de que la imagen no exista
                      (e.target as HTMLImageElement).src = `https://via.placeholder.com/150x50?text=${logo.name}`;
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Estilo necesario para la animación de scroll infinito */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          display: flex;
          width: max-content;
          animation: scroll 50s linear infinite;
        }
        .pause-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Logos;
