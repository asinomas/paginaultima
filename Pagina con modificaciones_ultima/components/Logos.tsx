import React from 'react';

const Logos: React.FC = () => {
  const logos = [
    { name: 'Grupo Sura', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC25COy7Low0wHC8VzLIcnEqFOv1a4pW7o6Gia3JwE4iOaVKktDfSGBPwlKNcJHcFyPUcFUh87hQGHrhS2q_Zf4dWCeW4f_va0CO5UkDapWQao6kEaGr5iI0W-hLn5vhliTwELXXkBoO8t_Nbv1raUtQtF8vdKKXBaPcAapxgOBjlh3bLDxXiIWhLU2mzs25knNrNtk4YW1TUK5Sb9XqueYM-LL1w7Fs7ZhEPMLl6r-IDDnBN3UEpMRiiMBi8MXSjxsZezSw9OKBdE' },
    { name: 'Casa&Ideas', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_PR3PiwHCezgpRYUlPoR4MlsEMaQWdEYyPH96_F_wUKFiiR1VzSzRGavtV_5k2DBcIxwI-snSdcsIFw4DUDyg12YPj8ZXILScOr1Ec-LzKPhOunv7qfxU7F8MJO6QLpjZpsoyhEtrHBQcX4IjzF15mnwcAIjxDONTU9q7a08xQoC1qTAyLJk4yulqmko7wVuPU1bCAetKpU6sCaivIIt7diKlRk5CEOHSwuwgP93BWLLX9Q5J2e6lYxJX41-8szwMHAdnH-Cnx88' },
    { name: 'Globant', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuChl8wrgb1JseDf17WTzv6Mk-REesFCHJB_t-75RG8x7BGPbAOKdK7SQ7qbwcy_VQiI_Pm-6vc_xMiWekwcMyhbQ7bbOKmaGNLFzk1eJ7s6sLcfnZyoGKuVKEEcbMfXkPg6Quvi_XYZVIwl-NjdthzSM6iCPh4Ppq2YVoJmDdjPAbyhfkkXWZXpXPv1hsRL_DAefsQb--hIfXwjc1Lo7u0jtLut6hCEYKYjq9R0XKI027272FG8X4grb7O8rxmCesIIrb_5UJzTxdo' },
    { name: 'Marubeni', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBrGNUT01l514xwYHwInp_zr42-hd_10WrpbFbJfVfXzMYRYBe6rW6toknvlzEqGSXxGGFLe7TdO2dqnPCplar-keoC03lmCNpjzJy5kN7oym_DukcZcpRL1N1GO2pza7HiVEV2lXsPGiaRfzaA31TK2wpDV_ZQLfx2eqTYbPw2opDg5t_gqIgh946NHaeC8okUGv1xt8SYMPJ2c-cCDJNg_i3iZiXqZEEFWXBplb_URxm5G0Q3lAoatdJk3-TOA4ZjbGq0_5zjorI' }
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