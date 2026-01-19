import React from 'react';

const ContactDetail: React.FC = () => {
  const contactInfo = [
    { icon: 'location_on', label: 'Ubicación', value: 'Santiago, Chile', sub: 'Hub Tecnológico Regional' },
    { icon: 'mail', label: 'Correo Electrónico', value: 'contacto@blackti.cl', sub: 'Consultas 24/7' },
    { icon: 'phone_iphone', label: 'Teléfono', value: '+569 4403 0716', sub: 'L-V 09:00 - 18:00' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Mensaje enviado. Un consultor ejecutivo de BlackTI se pondrá en contacto pronto.');
  };

  return (
    <div className="bg-slate-50 min-h-screen pt-32 pb-40">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          
          <div className="lg:col-span-5 space-y-12">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-6">Hablemos hoy</h4>
              <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-[1.1] mb-8">Escribamos el <span className="text-primary italic">Mañana</span></h1>
              <p className="text-lg text-slate-500 leading-relaxed mb-12 max-w-md">
                Hablemos de tu próximo proyecto y cómo podemos ayudarte a crecer con soluciones de vanguardia en BlackTI.
              </p>
            </div>

            <div className="space-y-8">
              {contactInfo.map((info, idx) => (
                <div key={idx} className="flex items-center gap-6 group">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white border border-slate-100 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white shadow-lg shadow-slate-200/50">
                    <span className="material-symbols-outlined !text-3xl">{info.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{info.label}</h3>
                    <p className="text-xl font-bold text-slate-900 mb-0.5">{info.value}</p>
                    <p className="text-[10px] font-bold text-primary uppercase tracking-widest">{info.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-white rounded-[2.5rem] p-8 md:p-16 shadow-[0_30px_100px_-20px_rgba(0,0,0,0.1)] border border-slate-100">
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="relative group">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-1 mb-2 block group-focus-within:text-primary transition-colors">Nombre Completo</label>
                    <input required type="text" placeholder="Ej. Juan Pérez" className="w-full h-16 rounded-2xl border-slate-100 bg-slate-50 focus:ring-4 focus:ring-primary/10 focus:border-primary focus:bg-white transition-all px-6 text-base outline-none font-medium" />
                  </div>
                  <div className="relative group">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-1 mb-2 block group-focus-within:text-primary transition-colors">Correo Electrónico</label>
                    <input required type="email" placeholder="ejemplo@correo.com" className="w-full h-16 rounded-2xl border-slate-100 bg-slate-50 focus:ring-4 focus:ring-primary/10 focus:border-primary focus:bg-white transition-all px-6 text-base outline-none font-medium" />
                  </div>
                </div>
                <div className="relative group">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-1 mb-2 block group-focus-within:text-primary transition-colors">Mensaje del Proyecto</label>
                  <textarea required placeholder="Cuéntanos brevemente sobre tus retos tecnológicos..." rows={5} className="w-full rounded-2xl border-slate-100 bg-slate-50 focus:ring-4 focus:ring-primary/10 focus:border-primary focus:bg-white transition-all p-6 text-base resize-none outline-none font-medium"></textarea>
                </div>
                <button type="submit" className="group relative w-full overflow-hidden rounded-2xl bg-primary h-20 text-lg font-bold text-white shadow-2xl shadow-primary/30 transition-all hover:scale-[1.02] active:scale-95">
                  <span className="relative z-10 flex items-center justify-center gap-4">
                    Enviar Propuesta
                    <span className="material-symbols-outlined !text-2xl transition-transform group-hover:translate-x-2">send</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactDetail;