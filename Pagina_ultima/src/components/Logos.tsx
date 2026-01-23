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
        {/* Agregamos una máscara de desvanecimiento a los lados para que se vea más profesional */}
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>

        <div className="flex animate-infinite-scroll gap-12 items-center">
          {/* Duplicamos los logos para el loop infinito */}
          {[...logos, ...logos, ...logos, ...logos].map((logo, idx) => (
            <div 
              key={idx} 
              className="flex-shrink-0 flex items-center justify-center grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 px-4"
              style={{ width: '180px' }} // Esto garantiza que la distancia sea igual para todos
            >
              <img
                alt={logo.name}
                className="h-8 md:h-10 w-auto object-contain"
                src={logo.src}
                onError={(e) => {
                  // Esto evita que se vea un icono roto si el archivo no existe
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
          to { transform: translateX(-33.33%); }
        }
        .animate-infinite-scroll {
          display: flex;
          width: max-content;
          animation: infinite-scroll 40s linear infinite;
        }
        /* Pausar al pasar el mouse */
        .animate-infinite-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Logos;
