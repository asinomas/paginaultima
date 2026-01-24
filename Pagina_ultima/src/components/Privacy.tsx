import React from 'react';

interface PrivacyProps {
  onNavigate?: (page: 'home' | 'services' | 'about' | 'contact' | 'terms' | 'privacy') => void;
}

const Privacy: React.FC<PrivacyProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen py-16 px-4 bg-slate-50">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-8 md:p-12">
        
        {/* Header */}
        <header className="text-center mb-4 pb-3 border-b-4 border-[#135bec]">
          <h1 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">
            Política de Privacidad
          </h1>
          <p className="text-gray-600 text-xs italic">
            Última actualización: Enero 2026
          </p>
        </header>

        {/* Contenido */}
        <div className="text-gray-800 space-y-2 text-xs leading-snug">
          
          <section>
            <h2 className="text-sm font-bold text-slate-900 mb-1">
              1. Introducción
            </h2>
            <p className="text-justify leading-snug">
              En BlackTI nos tomamos muy en serio la privacidad de nuestros clientes y visitantes. Esta Política de Privacidad describe cómo recopilamos, usamos, almacenamos y protegemos su información personal cuando utiliza nuestro sitio web y servicios de consultoría TI.
            </p>
          </section>

          <section>
            <h2 className="text-sm font-bold text-slate-900 mb-1">
              2. Información que Recopilamos
            </h2>
            <p className="text-justify leading-snug mb-2">
              Podemos recopilar los siguientes tipos de información:
            </p>
            <ul className="list-disc ml-8 space-y-1 text-justify">
              <li><strong>Información de contacto:</strong> nombre, correo electrónico, número de teléfono, empresa</li>
              <li><strong>Información técnica:</strong> dirección IP, tipo de navegador, sistema operativo, páginas visitadas</li>
              <li><strong>Información de uso:</strong> cómo interactúa con nuestro sitio web y servicios</li>
              <li><strong>Información profesional:</strong> cargo, industria, necesidades de consultoría</li>
            </ul>
          </section>

          <section>
            <h2 className="text-sm font-bold text-slate-900 mb-1">
              3. Cómo Recopilamos su Información
            </h2>
            <p className="text-justify leading-snug mb-2">
              Recopilamos información a través de:
            </p>
            <ul className="list-disc ml-8 space-y-1 text-justify">
              <li>Formularios de contacto y solicitudes de consultoría</li>
              <li>Cookies y tecnologías de seguimiento similares</li>
              <li>Comunicaciones por correo electrónico o teléfono</li>
              <li>Reuniones y consultas directas</li>
            </ul>
          </section>

          <section>
            <h2 className="text-sm font-bold text-slate-900 mb-1">
              4. Uso de su Información
            </h2>
            <p className="text-justify leading-snug mb-2">
              Utilizamos su información personal para:
            </p>
            <ul className="list-disc ml-8 space-y-1 text-justify">
              <li>Responder a sus consultas y proporcionar servicios de consultoría</li>
              <li>Personalizar y mejorar su experiencia en nuestro sitio web</li>
              <li>Enviar comunicaciones relacionadas con nuestros servicios (con su consentimiento)</li>
              <li>Analizar el rendimiento del sitio web y optimizar nuestros servicios</li>
              <li>Cumplir con obligaciones legales y regulatorias</li>
              <li>Prevenir fraudes y garantizar la seguridad de nuestros sistemas</li>
            </ul>
          </section>

          <section>
            <h2 className="text-sm font-bold text-slate-900 mb-1">
              5. Base Legal para el Procesamiento de Datos
            </h2>
            <p className="text-justify leading-snug mb-2">
              Procesamos su información personal bajo las siguientes bases legales:
            </p>
            <ul className="list-disc ml-8 space-y-1 text-justify">
              <li><strong>Consentimiento:</strong> cuando usted nos proporciona su información voluntariamente</li>
              <li><strong>Ejecución de contrato:</strong> para proporcionar los servicios solicitados</li>
              <li><strong>Interés legítimo:</strong> para mejorar nuestros servicios y comunicaciones</li>
              <li><strong>Cumplimiento legal:</strong> cuando la ley nos obliga a procesar cierta información</li>
            </ul>
          </section>

          <section>
            <h2 className="text-sm font-bold text-slate-900 mb-1">
              6. Compartir su Información
            </h2>
            <p className="text-justify leading-snug mb-2">
              No vendemos su información personal. Podemos compartir su información con:
            </p>
            <ul className="list-disc ml-8 space-y-1 text-justify">
              <li><strong>Proveedores de servicios:</strong> que nos ayudan a operar nuestro sitio web y negocios</li>
              <li><strong>Socios comerciales:</strong> cuando sea necesario para proporcionar servicios conjuntos (con su consentimiento)</li>
              <li><strong>Autoridades legales:</strong> cuando sea requerido por ley o para proteger nuestros derechos</li>
            </ul>
            <p className="text-justify leading-snug mt-2">
              Todos los terceros están obligados contractualmente a mantener la confidencialidad de su información.
            </p>
          </section>

          <section>
            <h2 className="text-sm font-bold text-slate-900 mb-1">
              7. Cookies y Tecnologías de Seguimiento
            </h2>
            <p className="text-justify leading-snug mb-2">
              Utilizamos cookies y tecnologías similares para:
            </p>
            <ul className="list-disc ml-8 space-y-1 text-justify">
              <li>Mejorar la funcionalidad del sitio web</li>
              <li>Analizar el tráfico y comportamiento del usuario</li>
              <li>Recordar sus preferencias</li>
              <li>Proporcionar contenido personalizado</li>
            </ul>
            <p className="text-justify leading-snug mt-2">
              Puede configurar su navegador para rechazar cookies, aunque esto puede afectar la funcionalidad del sitio.
            </p>
          </section>

          <section>
            <h2 className="text-sm font-bold text-slate-900 mb-1">
              8. Seguridad de los Datos
            </h2>
            <p className="text-justify leading-snug">
              Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger su información personal contra acceso no autorizado, alteración, divulgación o destrucción. Esto incluye encriptación, controles de acceso, y auditorías de seguridad regulares.
            </p>
          </section>

          <section>
            <h2 className="text-sm font-bold text-slate-900 mb-1">
              9. Retención de Datos
            </h2>
            <p className="text-justify leading-snug">
              Conservamos su información personal solo durante el tiempo necesario para cumplir con los propósitos descritos en esta política, a menos que la ley requiera o permita un período de retención más largo. Los datos de contacto se conservan mientras mantengamos una relación comercial o hasta que solicite su eliminación.
            </p>
          </section>

          <section>
            <h2 className="text-sm font-bold text-slate-900 mb-1">
              10. Sus Derechos
            </h2>
            <p className="text-justify leading-snug mb-2">
              Usted tiene derecho a:
            </p>
            <ul className="list-disc ml-8 space-y-1 text-justify">
              <li><strong>Acceso:</strong> solicitar una copia de su información personal</li>
              <li><strong>Rectificación:</strong> corregir información inexacta o incompleta</li>
              <li><strong>Eliminación:</strong> solicitar la eliminación de su información (derecho al olvido)</li>
              <li><strong>Restricción:</strong> limitar el procesamiento de su información</li>
              <li><strong>Portabilidad:</strong> recibir sus datos en formato estructurado y transferible</li>
              <li><strong>Oposición:</strong> oponerse al procesamiento de su información para ciertos propósitos</li>
              <li><strong>Retirar consentimiento:</strong> en cualquier momento, sin afectar la legalidad del procesamiento previo</li>
            </ul>
          </section>

          <section>
            <h2 className="text-sm font-bold text-slate-900 mb-1">
              11. Transferencias Internacionales
            </h2>
            <p className="text-justify leading-snug">
              Su información puede ser transferida y procesada en países fuera de Chile. Cuando realicemos transferencias internacionales, nos aseguramos de que existan garantías adecuadas para proteger su información de acuerdo con esta política y las leyes aplicables.
            </p>
          </section>

          <section>
            <h2 className="text-sm font-bold text-slate-900 mb-1">
              12. Privacidad de Menores
            </h2>
            <p className="text-justify leading-snug">
              Nuestros servicios no están dirigidos a menores de 18 años. No recopilamos intencionalmente información personal de menores. Si descubrimos que hemos recopilado información de un menor, la eliminaremos de inmediato.
            </p>
          </section>

          <section>
            <h2 className="text-sm font-bold text-slate-900 mb-1">
              13. Cambios a esta Política
            </h2>
            <p className="text-justify leading-snug">
              Podemos actualizar esta Política de Privacidad periódicamente. Le notificaremos sobre cambios significativos publicando la nueva política en nuestro sitio web y actualizando la fecha de "última actualización". Le recomendamos revisar esta política regularmente.
            </p>
          </section>

          <section>
            <h2 className="text-sm font-bold text-slate-900 mb-1">
              14. Contacto
            </h2>
            <p className="text-justify leading-snug mb-2">
              Si tiene preguntas sobre esta Política de Privacidad o desea ejercer sus derechos, puede contactarnos a través de:
            </p>
            <div className="bg-blue-50 border-l-4 border-[#135bec] p-4 rounded">
              <p className="font-semibold text-gray-800 text-xs">
                Para consultas sobre privacidad y protección de datos, por favor utilice los medios de contacto disponibles en nuestro sitio web principal.
              </p>
            </div>
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

export default Privacy;
