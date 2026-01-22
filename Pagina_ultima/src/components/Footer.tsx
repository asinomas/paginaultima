import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0b0e14] text-white py-16 border-t border-white/5">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <span className="text-2xl font-bold tracking-tighter mb-4 block">BlackTI</span>
            <p className="text-slate-500 text-sm max-w-xs">
              Arquitectura cloud y transformación digital estratégica para empresas de alto rendimiento.
            </p>
          </div>
          {/* ... resto de columnas iguales ... */}
        </div>
        <div className="pt-8 border-t border-white/5 text-center text-[10px] text-slate-600 font-bold uppercase tracking-widest">
          © 2026 BlackTI Technologies.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
