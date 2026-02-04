import React, { useEffect, useRef, useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Clock,
  UserCheck,
} from 'lucide-react';

const ContactDetail: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const EMAIL_DE_RECEPCION = 'contacto@blackti.cl';

  /* ---------------- STAGGER (IntersectionObserver) ---------------- */
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    itemsRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <div className="bg-white pt-16 pb-24 antialiased">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* COLUMNA IZQUIERDA */}
          <div className="relative h-full w-full rounded-[3rem] overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center blur-sm scale-[1.4]"
              style={{ backgroundImage: "url(/images/contact.webp)" }}
            />

            <div className="relative z-10 flex flex-col justify-center h-full p-6 lg:p-0">
              <h4 className="text-[#135bec] font-bold uppercase tracking-[0.2em] text-[11px] mb-4">
                Hablemos hoy
              </h4>

              <h2 className="text-5xl lg:text-6xl font-black text-slate-900 mb-8 tracking-tighter leading-tight">
                Diseñemos el <br />
                <span className="text-[#135bec] italic">Futuro</span>
              </h2>

              <p className="text-slate-500 text-lg mb-12 max-w-md leading-relaxed font-medium">
                Estamos listos para transformar tus desafíos en grandes oportunidades.
              </p>

              {/* INFO DE CONTACTO CON GRID + STAGGER */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                {/* EMAIL */}
                <div
                  ref={(el) => (itemsRef.current[0] = el)}
                  className="contact-item flex items-center gap-6"
                  style={{ transitionDelay: '0ms' }}
                >
                  <div className="size-14 rounded-2xl bg-slate-50 flex items-center justify-center text-[#135bec]">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                      Email
                    </p>
                    <p className="text-slate-900 font-bold text-lg">
                      {EMAIL_DE_RECEPCION}
                    </p>
                  </div>
                </div>

                {/* TELÉFONO */}
                <div
                  ref={(el) => (itemsRef.current[1] = el)}
                  className="contact-item flex items-center gap-6"
                  style={{ transitionDelay: '120ms' }}
                >
                  <div className="size-14 rounded-2xl bg-slate-50 flex items-center justify-center text-[#135bec]">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                      Teléfono
                    </p>
                    <p className="text-slate-900 font-bold text-lg">
                      +569 4403 0716
                    </p>
                  </div>
                </div>

                {/* OFICINA */}
                <div
                  ref={(el) => (itemsRef.current[2] = el)}
                  className="contact-item flex items-center gap-6 md:col-span-2"
                  style={{ transitionDelay: '240ms' }}
                >
                  <div className="size-14 rounded-2xl bg-slate-50 flex items-center justify-center text-[#135bec]">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                      Oficina Central
                    </p>
                    <p className="text-slate-900 font-bold text-lg leading-snug">
                      Av. Apoquindo 6410, Of 605, Las Condes, RM, Chile
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* COLUMNA DERECHA – FORM (sin cambios funcionales) */}
          <div className="bg-slate-50 p-12 rounded-[3rem]">
            <form onSubmit={handleSubmit} className="space-y-6">
              <input required placeholder="Nombre" className="w-full p-4 rounded-xl border" />
              <input required placeholder="Email" className="w-full p-4 rounded-xl border" />
              <textarea required rows={4} placeholder="Mensaje" className="w-full p-4 rounded-xl border" />
              <button className="w-full bg-[#135bec] text-white py-4 rounded-xl flex justify-center gap-2">
                Enviar <Send size={18} />
              </button>
            </form>

            <div className="mt-6 text-sm text-slate-500 space-y-2">
              <div className="flex gap-2 items-center">
                <Clock size={14} /> Respuesta en menos de 24h
              </div>
              <div className="flex gap-2 items-center">
                <UserCheck size={14} /> Atención personalizada
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ANIMACIONES */}
      <style>{`
        .contact-item {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .contact-item.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
};

export default ContactDetail;
