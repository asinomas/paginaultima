import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#0b0e14] overflow-hidden pt-20">
      
      {/* Elementos decorativos de fondo (Atmósfera tecnológica) */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Luz superior izquierda - Efecto Glow */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#135bec]/20 rounded-full blur-[120px] animate-pulse"></div>
        
        {/* Luz inferior derecha - Efecto Glow */}
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[100px]"></div>
        
        {/* Degradado central para profundidad */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-[#135bec]/10 via-transparent to-transparent"></div>
        
        {/* Textura de Fibra de Carbono sutil de la referencia */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 pointer-events-none"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Badge: Innovación Digital con punto animado */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#135bec]/10 border border-[#135bec]/20 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#135bec] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#135bec]"></span>
            </span>
            <span className="text-[#135bec] text-[10px] font-bold uppercase tracking-[0.2em]">Innovación Digital</span>
          </div>
          
          {/* Título Principal */}
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-8 leading-[1.1]">
            Potenciando el <span className="text-[#135bec]">Talento</span> con Inteligencia
          </h1>
          
          {/* Descripción */}
          <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Unimos ingeniería de clase mundial con visión humana para crear soluciones que definen industrias.
          </p>

          {/* Botones de Acción con nuevos textos */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-8 py-4 bg-[#135bec] text-white rounded-xl font-bold hover:bg-blue-500 transition-all shadow-lg shadow-[#135bec]/20 active:scale-95">
              Agendar Consultoría
            </button>
            <button className="px-8 py-4 bg-white/5 text-white border border-white/10 rounded-xl font-bold hover:bg-white/10 transition-all backdrop-blur-sm active:scale-95">
              Explorar Soluciones
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
