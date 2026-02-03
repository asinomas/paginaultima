<div className="lg:sticky lg:top-0 min-h-screen relative -mx-6 lg:-mx-8">

  {/* Fondo con imagen y blur ligero */}
  <div
    className="absolute inset-0 z-0 w-full h-full"
    style={{
      backgroundImage: "url('/images/contact.webp')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      filter: 'blur(4px)',
      opacity: 0.2,
    }}
  />

  {/* Contenido encima del fondo */}
  <div className="relative z-10 flex flex-col justify-center h-full px-6 lg:px-8">
    <h4 className="text-[#135bec] font-bold uppercase tracking-[0.2em] text-[11px] mb-4">
      Hablemos hoy
    </h4>

    <h2 className="text-5xl lg:text-6xl font-black text-slate-900 mb-8 tracking-tighter leading-tight">
      Diseñemos el <br />
      <span className="text-[#135bec] italic">Futuro</span>
    </h2>

    <p className="text-slate-500 text-lg mb-12 max-w-md leading-relaxed font-medium">
      Estamos listos para transformar tus desafíos en grandes oportunidades.
      Déjanos un mensaje y juntos tomemos la mejor decisión.
    </p>

    <div className="space-y-8">
      <div className="flex items-center gap-6 group">
        <div className="size-14 rounded-2xl bg-slate-50 flex items-center justify-center text-[#135bec] group-hover:bg-[#135bec] group-hover:text-white transition-all duration-300">
          <Mail size={24} />
        </div>
        <div>
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Email</p>
          <p className="text-slate-900 font-bold text-lg">{EMAIL_DE_RECEPCION}</p>
        </div>
      </div>

      <div className="flex items-center gap-6 group">
        <div className="size-14 rounded-2xl bg-slate-50 flex items-center justify-center text-[#135bec] group-hover:bg-[#135bec] group-hover:text-white transition-all duration-300">
          <Phone size={24} />
        </div>
        <div>
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Teléfono</p>
          <p className="text-slate-900 font-bold text-lg">+569 4403 0716</p>
        </div>
      </div>

      <div className="flex items-center gap-6 group">
        <div className="size-14 rounded-2xl bg-slate-50 flex items-center justify-center text-[#135bec] group-hover:bg-[#135bec] group-hover:text-white transition-all duration-300">
          <MapPin size={24} />
        </div>
        <div>
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Oficina Central</p>
          <p className="text-slate-900 font-bold text-lg">
            Av. Apoquindo 6410, Of 605, Las Condes, Región Metropolitana, Chile
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
