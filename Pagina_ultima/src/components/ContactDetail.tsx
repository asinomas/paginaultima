import React from "react";

const ContactDetail: React.FC = () => {
  return (
    <section className="relative w-full bg-slate-900 text-slate-100 py-20 px-6">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Contáctanos
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Cuéntanos tu idea o proyecto y te responderemos lo antes posible.
          </p>
        </div>

        {/* Contact content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Información de contacto
              </h3>
              <p className="text-slate-400">
                Estamos disponibles para resolver tus dudas y ayudarte a dar
                el siguiente paso.
              </p>
            </div>

            <div className="space-y-4 text-slate-300">
              <p>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:contacto@tudominio.cl"
                  className="text-blue-400 hover:underline"
                >
                  contacto@tudominio.cl
                </a>
              </p>

              <p>
                <strong>Horario:</strong> Lun a Vie, 9:00 – 18:00
              </p>

              <p>
                <strong>Ubicación:</strong> Chile
              </p>
            </div>
          </div>

          {/* Form */}
          <form className="bg-slate-800 rounded-2xl p-6 space-y-4 shadow-lg">
            <div>
              <label className="block text-sm mb-1">Nombre</label>
              <input
                type="text"
                className="w-full rounded-lg bg-slate-900 border border-slate-700 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Email</label>
              <input
                type="email"
                className="w-full rounded-lg bg-slate-900 border border-slate-700 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Mensaje</label>
              <textarea
                rows={4}
                className="w-full rounded-lg bg-slate-900 border border-slate-700 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-blue-600 hover:bg-blue-500 transition-colors py-2 font-semibold"
            >
              Enviar mensaje
            </button>
          </form>
        </div>

        {/* Trust badges — AQUÍ ESTÁ BIEN COLOCADO */}
        <div className="mt-12">
          <div className="flex flex-wrap items-center justify-center gap-6 text-slate-400 text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              <span>Respuesta en menos de 24h</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              <span>Atención personalizada</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-500" />
              <span>Confidencialidad garantizada</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactDetail;
