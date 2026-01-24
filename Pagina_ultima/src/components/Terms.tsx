import React from 'react';

interface TermsProps {
  onNavigate?: (page: 'home' | 'services' | 'about' | 'contact' | 'terms' | 'privacy') => void;
}

const Terms: React.FC<TermsProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen py-16 px-4 bg-slate-50">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-8 md:p-12">
        
        {/* Header */}
        <header className="text-center mb-4 pb-3 border-b-4 border-[#135bec]">
          <h1 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">
            Términos y Condiciones
          </h1>
          <p className="text-gray-600 text-xs italic">
            Última actualización: Enero 2026
          </p>
        </header>

        {/* Contenido */}
        <div className="text-gray-800 space-y-2 text-xs leading-snug">
          
          <section>
            <h2 className="text-base font-bold text-slate-900 mb-1">
              1. Aceptación de los Términos
            </h2>
            <p className="text-justify leading-snug">
              Bienvenido a BlackTI. Al acceder y utilizar este sitio web, usted acepta cumplir y estar sujeto a los siguientes términos y condiciones de uso. Si no está de acuerdo con alguna parte de estos términos, le recomendamos no utilizar nuestro sitio web.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              2. Descripción del Servicio
            </h2>
            <p className="text-justify leading-relaxed">
              BlackTI es una empresa de consultoría en tecnologías de la información que ofrece servicios profesionales especializados. Este sitio web tiene fines informativos y de contacto para potenciales clientes interesados en nuestros servicios de consultoría TI.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              3. Uso del Sitio Web
            </h2>
            <p className="text-justify leading-snug mb-2">
              Al utilizar este sitio web, usted se compromete a:
            </p>
            <ul className="list-disc ml-8 space-y-1 text-justify">
              <li>Utilizar el sitio únicamente con fines legales y legítimos</li>
              <li>No intentar acceder a áreas restringidas del sitio web</li>
              <li>No transmitir material malicioso, virus o código dañino</li>
              <li>No realizar actividades que puedan dañar, deshabilitar o sobrecargar el sitio</li>
              <li>Proporcionar información veraz y actualizada en los formularios de contacto</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              4. Propiedad Intelectual
            </h2>
            <p className="text-justify leading-relaxed mb-4">
              Todo el contenido presente en este sitio web, incluyendo pero no limitado a textos, gráficos, logotipos, imágenes, clips de audio, descargas digitales y compilaciones de datos, es propiedad de BlackTI o de sus proveedores de contenido y está protegido por las leyes de propiedad intelectual aplicables.
            </p>
            <p className="text-justify leading-relaxed">
              Queda prohibida la reproducción, distribución, modificación o uso comercial del contenido sin autorización expresa por escrito de BlackTI.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              5. Información y Presupuestos
            </h2>
            <p className="text-justify leading-relaxed mb-4">
              La información proporcionada en este sitio web sobre nuestros servicios de consultoría TI es de carácter general e informativo. Los presupuestos y propuestas comerciales específicas serán proporcionados de forma personalizada según las necesidades de cada cliente.
            </p>
            <div className="bg-blue-50 border-l-4 border-[#135bec] p-4 rounded">
              <p className="font-semibold text-gray-800">
                Importante: La información en este sitio no constituye una oferta vinculante. Todos los servicios están sujetos a disponibilidad y evaluación previa.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              6. Privacidad y Protección de Datos
            </h2>
            <p className="text-justify leading-relaxed mb-4">
              BlackTI respeta su privacidad y se compromete a proteger sus datos personales. La información recopilada a través de formularios de contacto será utilizada únicamente para:
            </p>
            <ul className="list-disc ml-8 space-y-2 text-justify">
              <li>Responder a sus consultas y solicitudes</li>
              <li>Proporcionar información sobre nuestros servicios</li>
              <li>Enviar comunicaciones relacionadas con nuestros servicios (si usted lo autoriza)</li>
            </ul>
            <p className="text-justify leading-snug mt-2">
              No compartiremos su información personal con terceros sin su consentimiento, excepto cuando sea requerido por ley.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              7. Enlaces a Sitios de Terceros
            </h2>
            <p className="text-justify leading-relaxed">
              Este sitio web puede contener enlaces a sitios web de terceros. BlackTI no se hace responsable del contenido, políticas de privacidad o prácticas de sitios web de terceros. El acceso a estos enlaces es bajo su propia responsabilidad.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              8. Limitación de Responsabilidad
            </h2>
            <p className="text-justify leading-relaxed mb-4">
              BlackTI no será responsable por:
            </p>
            <ul className="list-disc ml-8 space-y-2 text-justify">
              <li>Interrupciones o errores en el funcionamiento del sitio web</li>
              <li>Pérdida de datos o información transmitida a través del sitio</li>
              <li>Daños indirectos, incidentales o consecuentes derivados del uso del sitio</li>
              <li>Decisiones tomadas basándose únicamente en la información general del sitio</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              9. Modificaciones
            </h2>
            <p className="text-justify leading-relaxed">
              BlackTI se reserva el derecho de modificar estos términos y condiciones en cualquier momento. Las modificaciones entrarán en vigor inmediatamente después de su publicación en el sitio web. Es responsabilidad del usuario revisar periódicamente estos términos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              10. Ley Aplicable y Jurisdicción
            </h2>
            <p className="text-justify leading-relaxed">
              Estos términos y condiciones se rigen por las leyes de Chile. Cualquier disputa relacionada con estos términos será sometida a la jurisdicción exclusiva de los tribunales competentes de Santiago, Chile.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              11. Contacto
            </h2>
            <p className="text-justify leading-relaxed">
              Si tiene alguna pregunta sobre estos Términos y Condiciones, puede contactarnos a través de los medios proporcionados en nuestro sitio web principal.
            </p>
          </section>

        </div>

        {/* Botón para volver al inicio */}
        <div className="text-center mt-12">
          <button
            onClick={() => onNavigate?.('home')}
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#135bec] text-white rounded-xl font-bold hover:scale-105 active:scale-95 transition-all shadow-lg shadow-[#135bec]/30"
          >
            <span>← Volver al Inicio</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Terms;
