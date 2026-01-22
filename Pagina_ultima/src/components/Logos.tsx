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
    <section className="bg-white py-24 border-t border-slate-100">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <p className="mb-16 text-center text-xs font-bold uppercase tracking-[0.4em] text-slate-400">
            Alianzas que impulsan el Cambio Global
          </p>

          <div className="flex overflow-x-auto w-full gap-16 py-4 no-scrollbar">
            {logos.map((logo, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 flex items-center justify-center p-4 filter grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                style={{ minWidth: '150px' }}
              >
                <img
                  alt={logo.name}
                  className="max-h-14 w-auto object-contain"
                  src={logo.src}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Logos;
