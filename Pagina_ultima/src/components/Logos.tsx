import grupoSura from '../assets/logos/grupo-sura.png';
import casaIdeas from '../assets/logos/casa-ideas.png';
import globant from '../assets/logos/globant.png';
import marubeni from '../assets/logos/marubeni.png';
import everis from '../assets/logos/everis.png';
import compunet from '../assets/logos/compunet.png';

export const logos = [
  { name: 'Grupo Sura', src: grupoSura },
  { name: 'Casa&Ideas', src: casaIdeas },
  { name: 'Globant', src: globant },
  { name: 'Marubeni', src: marubeni },
  { name: 'Everis', src: everis },
  { name: 'Compunet', src: compunet },
];

const Logos: React.FC = () => {
  return (
    <section className="bg-white py-24 border-t border-slate-100">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <p className="mb-16 text-center text-xs font-bold uppercase tracking-[0.4em] text-slate-400">
            Alianzas que impulsan el Cambio Global
          </p>
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
