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

  // Duplicamos los logos para un efecto de marquee continuo
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <section className="relative w-full overflow-hidden bg-white border-t border-slate-100 py-16">
      {/* Gradientes de desvanecimiento laterales */}
      <div className="absolute left-0 top-0 z-20 h-full w-24 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
      <div className="absolute right-0 top-0 z-20 h-full w-24 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>

      <div
        className="flex animate-marquee gap-16"
        style={{ animation: 'marquee 50s linear infinite' }}
      >
        {duplicatedLogos.map((logo, idx) => (
          <div
            key={idx}
            className="flex items-center justify-center min-w-[150px] md:min-w-[250px] grayscale opacity-40 transition-all duration-500"
          >
            <img
              src={logo.src}
              alt={logo.name}
              className="max-h-14 w-auto object-contain"
            />
          </div>
        ))}
      </div>

      {/* Animación marquee */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
    </section>
  );
};

export default Logos;
