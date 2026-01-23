import React from "react";

const Privacy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-16 px-6 text-gray-200">
      <h1 className="text-3xl font-bold mb-6">Política de Privacidad</h1>

      <p>
        En <strong>BlackTI</strong> respetamos y protegemos la privacidad de los visitantes de nuestro sitio web y de quienes se contactan con nosotros, conforme a la Ley N° 19.628 sobre Protección de la Vida Privada.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Datos personales recopilados</h2>
      <p>
        BlackTI puede recopilar datos como nombre, correo electrónico, empresa, teléfono y mensajes enviados voluntariamente a través de formularios de contacto.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Finalidad del tratamiento</h2>
      <p>
        Los datos se utilizan únicamente para responder consultas, enviar información sobre nuestros servicios y mantener comunicaciones profesionales. BlackTI no vende ni cede datos personales a terceros.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Derechos del titular</h2>
      <p>
        El titular puede ejercer sus derechos de acceso, rectificación, cancelación u oposición escribiendo a: <a href="mailto:soporte@blackti.cl" className="underline">soporte@blackti.cl</a>.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Cookies</h2>
      <p>
        El sitio puede utilizar cookies técnicas o analíticas para mejorar la experiencia. El usuario puede bloquearlas desde su navegador.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Cambios en la política</h2>
      <p>
        BlackTI se reserva el derecho de modificar esta Política de Privacidad. Cualquier cambio será publicado en esta página.
      </p>
    </div>
  );
};

export default Privacy;
