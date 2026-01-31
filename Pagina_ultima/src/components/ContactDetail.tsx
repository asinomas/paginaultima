import React from 'react';
import {
  Mail,
  Phone,
  MapPin,
  ShieldCheck,
  Clock,
  UserCheck,
} from 'lucide-react';

const ContactDetail: React.FC = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-5xl mx-auto px-6">

        {/* Título */}
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          Conversemos sobre tu proyecto
        </h2>
        <p className="text-slate-600 max-w-2xl mb-12">
          Cuéntanos tu necesidad y uno de nuestros consultores se pondrá en contacto contigo.
        </p>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Formulario */}
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Nombre
              </label>
              <input
                type="text"
                placeholder="Tu nombre"
                className="w-full rounded-lg border border-slate-300 px-4 py-3
                  focus:outline-none focus:ring-2 focus:ring-[#135bec]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="tu@email.com"
                className="w-full rounded-lg border border-slate-300 px-4 py-3
                  focus:outline-none focus:ring-2 focus:ring-[#135bec]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Mensaje
              </label>
              <textarea
                rows={4}
                placeholder="Cuéntanos brevemente en qué podemos ayudarte"
                className="w-full rounded-lg border border-slate-300 px-4 py-3
                  focus:outline-none focus:ring-2 focus:ring-[#135bec]"
              />
            </div>

            <button
              type="submit"
              className="bg-[#135bec] text-white px-6 py-3 rounded-lg font-semibold
                hover:bg-[#0f4fd8] transition"
            >
              Enviar mensaje
            </button>
          </form>

          {/* Información de contacto */}
          <div className="space-y-6">
            <div className="flex items-start gap-3 text-slate-700">
              <Mail className="mt-1 text-[#135bec]" size={20} />
              <span>contacto@blackti.cl</span>
            </div>

            <div className="flex items-start gap-3 text-slate-700">
              <Phone className="mt-1 text-[#135bec]" size={20} />
              <span>+56 9 4403 0716</span>
            </div>

            <div className="flex items-start gap-3 text-slate-700">
              <MapPin className="mt-1 text-[#135bec]" size={20} />
              <span>
                Av. Apoquindo 6410, Of 605<br />
                Las Condes, Santiago
              </span>
            </div>

            {/* Trust badges (único cambio mantenido) */}
            <div className="mt-8 space-y-3 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-[#135bec]" />
                Respuesta en menos de 24h
              </div>
              <div className="flex items-center gap-2">
                <UserCheck size={16} className="text-[#135bec]" />
                Atención personalizada
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-[#135bec]" />
                Confidencialidad garantizada
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactDetail;
