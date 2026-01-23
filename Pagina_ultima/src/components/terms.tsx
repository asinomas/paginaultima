import React from "react";

const Terms: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-16 px-6 text-gray-200">
      <h1 className="text-3xl font-bold mb-6">Términos y Condiciones</h1>

      <p>
        El acceso y uso del sitio web de <strong>BlackTI</strong> implica la aceptación de los presentes Términos y Condiciones.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Objeto del sitio web</h2>
      <p>
        El sitio tiene como finalidad informar sobre servicios de consultoría TI, facilitar contacto y difundir contenidos informativos. No constituye una oferta vinculante ni asesoría específica.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Uso permitido</h2>
      <p>
        El usuario se compromete a utilizar el sitio de manera lícita, absteniéndose de introducir virus, acceder sin autorización a sistemas de BlackTI o realizar actividades ilegales.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Propiedad intelectual</h2>
      <p>
        Todos los contenidos del sitio son propiedad de BlackTI o terceros autorizados. Queda prohibida su reproducción, distribución o modificación sin autorización.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Responsabilidad</h2>
      <p>
        BlackTI no garantiza disponibilidad continua del sitio ni ausencia de errores. No se responsabiliza por decisiones basadas en la información publicada ni por contenidos de terceros.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Modificaciones</h2>
      <p>
        BlackTI puede modificar estos Términos en cualquier momento, publicándose en el sitio.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Legislación aplicable</h2>
      <p>
        Estos Términos se rigen por la legislación de la República de Chile y cualquier controversia será sometida a los tribunales de Santiago de Chile.
      </p>
    </div>
  );
};

export default Terms;
