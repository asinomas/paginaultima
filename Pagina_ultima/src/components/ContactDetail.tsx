import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

const ContactDetail: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  // EDITAR AQUÍ EL CORREO ELECTRÓNICO
  const EMAIL_DE_RECEPCION = "Ccontacto@blackti.cl"; 

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
    <div className="bg-white min-h-screen pt-16 pb-24 antialiased">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* COLUMNA IZQUIERDA: ESTILO "EXCELENCIA OPERATIVA" APLICADO */}
          <div className="lg:sticky lg:top-32">
            {/* Texto ajustado a 11px para ser más pequeño y elegante */}
            <h4 className="text-[#135bec] font-bold uppercase tracking-[0.2em] text-[11px] mb-4">
              Hablemos hoy
            </h4>
            
            <h2 className="text-5xl lg:text-6xl font-black text-slate-900 mb-8 tracking-tighter leading-tight">
              Diseñemos el <br />
              <span className="text-[#135bec] italic">Futuro</span>
            </h2>
            
            <p className="text-slate-500 text-lg mb-12 max-w-md leading-relaxed font-medium">
              Estamos listos para transformar tus desafíos en grandes oportunidades. Déjanos un mensaje y nos contactaremos.
              Nuestro equipo resolverá tus dudas, te ofrecerá información y te ayudará a tomar la mejor decisión.
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
                  <p className="text-slate-900 font-bold text-lg">Av. Apoquindo 6410, Of 605, Las Condes, Región Metropolitana, Chile</p>
                </div>
              </div>
            </div>
          </div>



          

           {/* Opciones de contacto alternativas */}
<div className="flex flex-wrap items-center justify-center gap-4 mb-8">
  <span className="text-slate-400 text-sm">o contacta directamente:</span>
  <a 
    href="https://wa.me/56944030716" 
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all shadow-md hover:shadow-lg"
    aria-label="Contactar por WhatsApp"
  >
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
    WhatsApp
  </a>
  <a 
    href="tel:+56944030716"
    className="flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all shadow-md hover:shadow-lg"
    aria-label="Llamar por teléfono"
  >
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
    Llamar
  </a>
</div>


          

          {/* COLUMNA DERECHA: FORMULARIO CLARO */}
          <div className="relative group">
            <div className="bg-slate-50 p-8 lg:p-12 rounded-[3rem] border border-slate-100 relative overflow-hidden min-h-[580px] flex flex-col justify-center shadow-sm">
              
              {/* IMAGEN DURANTE ISSUBMITTING */}
              {isSubmitting && (
                <div className="absolute inset-0 flex items-center justify-center z-40 pointer-events-none">
                  <img 
                    src="./images/hero-image-speed.webp" 
                    alt="Enviando" 
                    className="w-auto h-auto max-w-md object-contain opacity-20 -translate-y-10"
                    onError={(e) => {
                      console.log('Error cargando hero-image.webp');
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                </div>
              )}

              {isSent && (
                <div className="absolute inset-0 bg-white/95 backdrop-blur-sm z-50 flex flex-col items-center justify-center text-center p-8 animate-[fadeIn_0.5s_ease-out]">
                  <div className="size-24 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-8 border border-blue-200 shadow-lg shadow-blue-500/10">
                    <CheckCircle2 size={52} strokeWidth={2.5} />
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">¡Mensaje Enviado!</h3>
                  <p className="text-slate-500 text-lg max-w-[280px] mb-10 leading-relaxed">
                    Gracias por confiar en nosotros. Te contactaremos a la brevedad.
                  </p>
                  <button 
                    onClick={() => setIsSent(false)}
                    className="px-8 py-3 rounded-xl border border-slate-200 text-slate-400 font-bold text-xs uppercase tracking-widest hover:bg-slate-100 hover:text-slate-600 transition-all"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Nombre Completo</label>
                  <input required type="text" placeholder="Tu nombre" className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 text-slate-900 focus:ring-2 focus:ring-[#135bec] focus:border-transparent outline-none transition-all placeholder:text-slate-300" />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Email Corporativo</label>
                  <input required type="email" placeholder="ejemplo@empresa.com" className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 text-slate-900 focus:ring-2 focus:ring-[#135bec] focus:border-transparent outline-none transition-all placeholder:text-slate-300" />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Mensaje</label>
                  <textarea required rows={5} placeholder="Cuentanos sobre tu proyecto..." className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 text-slate-900 focus:ring-2 focus:ring-[#135bec] focus:border-transparent outline-none transition-all placeholder:text-slate-300 resize-none"></textarea>
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




                  

                  {/* Trust badges */}
<div className="flex flex-wrap items-center justify-center gap-6 mt-6 text-slate-400 text-xs">
  <div className="flex items-center gap-2">
    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
      <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
    <span>Respuesta en menos de 24h</span>
  </div>
  <div className="flex items-center gap-2">
    <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
    </svg>
    <span>Datos protegidos y confidenciales</span>
  </div>
  <div className="flex items-center gap-2">
    <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
    <span>Consultoría inicial sin costo</span>
  </div>
</div>





                  
                  )}
                </button>
              </form>
            </div>
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
