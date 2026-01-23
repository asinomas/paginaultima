import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

const ContactDetail: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  
  // EDITAR AQUÍ EL CORREO ELECTRÓNICO
 
  const EMAIL_DE_RECEPCION = "pruebadelcontacto@blackti.cl"; 
  

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulación de envío profesional
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
          
          {/* COLUMNA IZQUIERDA: FRASE EXACTA CON DOBLE RESALTADO AZUL */}
          <div className="lg:sticky lg:top-32">
            <h4 className="text-[#135bec] font-bold uppercase tracking-widest text-xs mb-4">Contacto</h4>
            <h2 className="text-5xl lg:text-7xl font-black text-slate-900 mb-8 tracking-tighter leading-[0.9]">
              <span className="text-[#135bec]">Hablemos hoy</span> <br />
              y diseñemos el <br />
              <span className="text-[#135bec]">futuro.</span>
            </h2>
            <p className="text-slate-500 text-lg mb-12 max-w-md leading-relaxed">
              Estamos listos para transformar tus desafíos tecnológicos en ventajas competitivas. Déjanos un mensaje y te contactaremos en menos de 24 horas.
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
                  <p className="text-slate-900 font-bold text-lg">+56 2 2345 6789</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="size-14 rounded-2xl bg-slate-50 flex items-center justify-center text-[#135bec] group-hover:bg-[#135bec] group-hover:text-white transition-all duration-300">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Oficina Central</p>
                  <p className="text-slate-900 font-bold text-lg">Santiago, Chile</p>
                </div>
              </div>
            </div>
          </div>

          {/* COLUMNA DERECHA: FORMULARIO CON SISTEMA DE ÉXITO */}
          <div className="relative group">
            <div className="bg-slate-900 p-8 lg:p-12 rounded-[3rem] shadow-2xl relative overflow-hidden min-h-[580px] flex flex-col justify-center border border-white/5">
              
              {/* PANTALLA DE ÉXITO */}
              {isSent && (
                <div className="absolute inset-0 bg-slate-900 z-50 flex flex-col items-center justify-center text-center p-8 animate-[fadeIn_0.5s_ease-out]">
                  <div className="size-24 bg-green-500/10 text-green-400 rounded-full flex items-center justify-center mb-8 border border-green-500/20 shadow-[0_0_40px_rgba(34,197,94,0.15)]">
                    <CheckCircle2 size={52} strokeWidth={2.5} />
                  </div>
                  <h3 className="text-3xl font-black text-white mb-4 tracking-tight">¡Mensaje Enviado!</h3>
                  <p className="text-slate-400 text-lg max-w-[280px] mb-10 leading-relaxed">
                    Gracias por confiar en nosotros. Te contactaremos a la brevedad.
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
                  <input required type="text" placeholder="Tu nombre" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:ring-2 focus:ring-[#135bec] outline-none transition-all placeholder:text-slate-600 focus:bg-white/10" />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-[#135bec] uppercase tracking-[0.2em] ml-1">Email Corporativo</label>
                  <input required type="email" placeholder="ejemplo@empresa.com" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:ring-2 focus:ring-[#135bec] outline-none transition-all placeholder:text-slate-600 focus:bg-white/10" />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-[#135bec] uppercase tracking-[0.2em] ml-1">Mensaje</label>
                  <textarea required rows={5} placeholder="¿En qué podemos ayudarte?" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:ring-2 focus:ring-[#135bec] outline-none transition-all placeholder:text-slate-600 focus:bg-white/10 resize-none"></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-[#135bec] text-white font-bold py-5 rounded-2xl shadow-xl shadow-[#135bec]/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 disabled:opacity-50 mt-4 group/btn"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2 font-bold uppercase tracking-widest text-sm text-white">
                       Enviando...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2 font-bold uppercase tracking-widest text-sm text-white">
                      Enviar Mensaje 
                      <Send size={18} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform text-white" />
                    </span>
                  )}
                </button>
              </form>
            </div>
            {/* Efecto de luz decorativo */}
            <div className="absolute -inset-4 bg-[#135bec]/10 blur-[100px] -z-10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
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
