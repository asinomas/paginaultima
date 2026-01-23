import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#0b0e14] overflow-hidden pt-20">
      
      {/* Sistema de Luces Dinámicas en 4 Esquinas */}
      <div className="absolute inset-0 overflow-hidden">
        
        {/* LUZ 1: Animada entre Arriba-Izquierda y Abajo-Derecha */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#135bec]/20 rounded-full blur-[120px] animate-[pulse_8s_infinite] mix-blend-screen"></div>
        
        {/* LUZ 2: Animada entre Abajo-Izquierda y Arriba-Derecha */}
        <div className="absolute bottom-[-10%] left-[-10%] w-[45%] h-[45%] bg-blue-600/10 rounded-full blur-[100px] animate-[pulse_12s_infinite_reverse] opacity-70"></div>
        
        {/* LUZ 3: Brillo en Arriba-Derecha */}
        <div className="absolute top-[-5%] right-[-10%] w-[40%] h-[40%] bg-[#135bec]/15 rounded-full blur-[110px] animate-[pulse_10s_infinite_2s]"></div>

        {/* LUZ 4: Brillo en Abajo-Derecha (para cerrar el ciclo) */}
        <div className="absolute bottom-[-5%] right-[-5%] w-[35%] h-[35%] bg-blue-500/10 rounded-full blur-[90px] animate-[pulse_7s_infinite_1s]"></div>

        {/* Capa de textura y profundidad fija */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#135bec]/10 via-transparent to-transparent opacity-60"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 pointer-events-none"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Badge: Líderes en Innovación */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#135bec]/10 border border-[#135bec]/20 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#135bec] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#135bec]"></span>
            </span>
            <span className="text-[#135bec] text-[10px] font-bold uppercase tracking-[0.2em]">Líderes en Innovación</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-8 leading-[1.1]">
            Potenciando el <span className="text-[#135bec]">Talento</span> con Inteligencia
          </h1>
          
          <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Unimos ingeniería de clase mundial con visión humana para crear soluciones que definen industrias.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="group relative overflow-hidden px-8 py-4 bg-[#135bec] text-white rounded-xl font-bold transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-[#135bec]/30">
              <span className="relative z-10">Agendar Consultoría</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-[#135bec] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
