import React, { useState } from 'react';
import { Mail, Phone, Send, CheckCircle2, Globe } from 'lucide-react';

const ContactDetail: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  // ========================================================
  // EDITAR AQUÍ EL CORREO ELECTRÓNICO
  // ========================================================
  const EMAIL_DE_RECEPCION = "aqui va el correo real para editar"; 
  // ========================================================

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Evita que la página se recargue
    setIsSubmitting(true);

    // Simulación de envío
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <div className="bg-white min-h-screen pt-32 pb-24 antialiased">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Columna Izquierda: Información de contacto */}
          <div className="lg:sticky lg:top-32">
            <h4 className="text-[#135bec] font-bold uppercase tracking-[0.2em] text-xs mb-4">Contacto Directo</h4>
            <h2 className="text-5xl lg:text-6xl font-black text-slate-900 mb-8 tracking-tighter leading-none">
              Impulsemos tu <br />
              <span className="text-[#135bec]">visión digital.</span>
            </h2>
            <p className="text-slate-500 text-lg mb-12 max-w-md leading-relaxed">
              ¿Tienes un desafío técnico o una idea innovadora? Nuestro equipo de expertos está listo para asesorarte.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-6 p-4 rounded-3xl hover:bg-slate-50 transition-colors group">
                <div className="size-14 rounded-2xl bg-[#135bec]/5 flex items-center justify-center text-[#135bec] group-hover:bg-[#135bec] group-hover:text-white transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Escríbenos</p>
                  <p className="text-slate-900 font-bold text-lg">{EMAIL_DE_RECEPCION}</p>
                </div>
              </div>

              <div className="flex items-center gap-6 p-4 rounded-3xl hover:bg-slate-50 transition-colors group">
                <div className="size-14 rounded-2xl bg-[#135bec]/5 flex items-center justify-center text-[#135bec] group-hover:bg-[#135bec] group-hover:text-white transition-all">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Llámanos</p>
                  <p className="text-slate-900 font-bold text-lg">+56 2 2345 6789</p>
                </div>
              </div>

              <div className="flex items-center gap-6 p-4 rounded-3xl hover:bg-slate-50 transition-colors group">
                <div className="size-14 rounded-2xl bg-[#135bec]/5 flex items-center justify-center text-[#135bec] group-hover:bg-[#135bec] group-hover:text-white transition-all">
                  <Globe size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Presencia Global</p>
                  <p className="text-slate-900 font-bold text-lg">Operaciones en 6 países</p>
                </div>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Formulario con pantalla de éxito */}
          <div className="relative group">
            <div className="bg-slate-900 p-8 lg:p-12 rounded-[3rem] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.3)] relative overflow-hidden min-h-[550px] flex flex-col justify-center border border-white/5">
              
              {/* PANTALLA DE ÉXITO (Solo se muestra cuando isSent es true) */}
              {isSent && (
                <div className="absolute inset-0 bg-slate-900 z-50 flex flex-col items-center justify-center text-center p-8 animate-[fadeIn_0.5s_ease-out]">
                  <div className="size-24 bg-green-500/10 text-green-400 rounded-full flex items-center justify-center mb-8 border border-green-500/20 shadow-[0_0_40px_rgba(34,197,94,0.15)]">
                    <CheckCircle2 size={52} strokeWidth={2.5} />
                  </div>
                  <h3 className="text-3xl font-black text-white mb-4 tracking-tight">¡Mensaje Enviado!</h3>
                  <p className="text-slate-400 text-lg max-w-[280px] leading-relaxed mb-10">
                    Gracias por confiar en nosotros. Te contactaremos en breve.
                  </p>
                  <button 
                    onClick={() => setIsSent(false)}
                    className="px-8 py-3 rounded-xl border border-white/10 text-white/50 font-bold text-xs uppercase tracking-widest hover:bg-white/5 hover:text-white transition-all"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              )}

              {/* FORMULARIO */}
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-[#135bec] uppercase tracking-[0.2em] ml-1">Nombre Completo</label>
                  <input 
                    required 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:ring-2 focus:ring-[#135bec] outline-none transition-all placeholder:text-slate-600 focus:bg-white/10" 
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-[#135bec] uppercase tracking-[0.2em] ml-1">Email Corporativo</label>
                  <input 
                    required 
                    type="email" 
                    placeholder="john@empresa.com" 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:ring-2 focus:ring-[#135bec] outline-none transition-all placeholder:text-slate-600 focus:bg-white/10" 
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-[#135bec] uppercase tracking-[0.2em] ml-1">Mensaje</label>
                  <textarea 
                    required 
                    rows={4} 
                    placeholder="¿En qué podemos ayudarte?" 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:ring-2 focus:ring-[#135bec] outline-none transition-all placeholder:text-slate-600 focus:bg-white/10 resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-[#135bec] text-white font-bold py-5 rounded-2xl shadow-xl shadow-[#135bec]/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 disabled:opacity-50 mt-6 group/btn"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="size-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Procesando...
                    </span>
                  ) : (
                    <>
                      Iniciar Consultoría 
                      <Send size={18} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </div>
            
            {/* Efecto de luz de fondo */}
            <div className="absolute -inset-4 bg-[#135bec]/20 blur-[100px] -z-10 rounded-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
};

export default ContactDetail;
