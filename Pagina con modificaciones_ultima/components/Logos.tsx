import React from 'react';

const Logos: React.FC = () => {
  const logos = [
    { name: 'Grupo Sura', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Grupo_Sura_logo.svg/1280px-Grupo_Sura_logo.svg.png' },
    { name: 'Casa&Ideas', src: 'https://static.wikia.nocookie.net/logopedia/images/0/01/Casaideas_logo.png/revision/latest?cb=20220120020452' },
    { name: 'Globant', src: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Globant-LightBG-Color%403x.png' },
    { name: 'Marubeni', src: 'https://companieslogo.com/img/orig/8002.T_BIG-8c9cf180.png?t=1720244490' }
    { name: 'Everis', src: 'https://iconape.com/wp-content/png_logo_vector/everis-ntt-data-logo.png' }
    { name: 'Compunet', src: 'https://www.compunetgroup.net/logo-compunet.png' }
  
  ];

  return (
    <section className="bg-white py-24 border-t border-slate-100">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <p className="mb-16 text-center text-xs font-bold uppercase tracking-[0.4em] text-slate-400">Alianzas que impulsan el Cambio Global</p>
          <div className="grid grid-cols-2 items-center justify-items-center gap-16 md:grid-cols-4 w-full">
            {logos.map((logo, idx) => (
              <div key={idx} className="group flex items-center justify-center p-4 filter grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 transform hover:scale-110">
                <img alt={logo.name} className="max-h-14 w-auto object-contain" src={logo.src} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Logos;
