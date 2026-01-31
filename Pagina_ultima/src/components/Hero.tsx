{/* FRANJA DE LOGOS */}
<div className="relative pt-16 pb-8 overflow-hidden z-10">
  <div className="absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

  <div className="container mx-auto px-6 mb-8">
    <p className="text-center text-[10px] font-bold uppercase tracking-[0.5em] text-slate-400">
      Han confiado en nosotros
    </p>
  </div>

  {/* CONTENEDOR DE LOGOS CON DIFUMINADO */}
  <div
    className="relative overflow-hidden"
    role="region"
    aria-label="Empresas que han confiado en BlackTI"
    style={{
      WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 12%, rgba(0,0,0,1) 88%, rgba(0,0,0,0) 100%)',
      WebkitMaskRepeat: 'no-repeat',
      WebkitMaskSize: '100% 100%',
      maskImage: 'linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 12%, rgba(0,0,0,1) 88%, rgba(0,0,0,0) 100%)',
      maskRepeat: 'no-repeat',
      maskSize: '100% 100%',
    }}
  >
    <div className="flex animate-infinite-scroll">
      {[...BASE_LOGOS, ...BASE_LOGOS].map((logo, idx) => (
        <div
          key={`logo-${logo.name}-${idx}`}
          className="flex-shrink-0 flex items-center justify-center px-8 w-[280px]"
        >
          <img
            src={logo.src}
            alt={logo.name}
            loading="lazy"
            className="h-10 md:h-12 w-auto object-contain filter grayscale opacity-80 hover:grayscale-0 hover:opacity-100"
          />
        </div>
      ))}
    </div>
  </div>
</div>
