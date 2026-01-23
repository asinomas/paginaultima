import React from 'react';

const Terms: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 text-white">
      <h1 className="text-3xl font-bold mb-6">Términos y Condiciones</h1>
      <p className="mb-4">
        Al utilizar los servicios de BlackTI, aceptas estos términos y condiciones. Es importante leerlos cuidadosamente antes de usar nuestro sitio web.
      </p>
      <p className="mb-4">
        Nuestros servicios se proporcionan “tal cual” y no nos hacemos responsables de daños indirectos o incidentales. El uso de la información proporcionada en este sitio es bajo tu propio riesgo.
      </p>
      <p>
        Para cualquier duda sobre estos términos, puedes contactarnos a través del formulario de contacto.
      </p>
    </div>
  );
};

export default Terms;
