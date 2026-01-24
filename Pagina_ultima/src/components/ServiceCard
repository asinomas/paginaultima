import React, { useState, ReactNode } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  details?: string[]; // Opcional, para el acordeón
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description, details }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="group relative bg-white p-12 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col h-full">
      
      {/* Marca de agua */}
      <div className="absolute -top-6 -right-6 text-slate-100 group-hover:text-blue-50 transition-all duration-700 pointer-events-none z-0 group-hover:scale-125">
        <Icon size={180} strokeWidth={1} />
      </div>

      {/* Icono principal */}
      <div className="relative z-10 mb-8 flex size-14 items-center justify-center rounded-2xl bg-slate-50 text-[#135bec] group-hover:bg-[#135bec] group-hover:text-white transition-all duration-500 shadow-sm">
        <Icon size={28} />
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 flex flex-col h-full">
        <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">{title}</h3>
        <p className="text-slate-500 leading-relaxed text-sm mb-6 flex-grow">{description}</p>

        {details && details.length > 0 && (
          <>
            {/* Botón acordeón */}
            <button
              onClick={handleToggle}
              className="flex items-center text-[#135bec] text-[10px] font-bold uppercase tracking-[0.2em] group/btn transition-transform duration-300 hover:scale-105 origin-left w-fit mb-4"
            >
              <span>Detalles</span>
              <ChevronDown
                className={`ml-2 transition-all duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                size={14}
              />
            </button>

            {/* Contenido acordeón */}
            <div
              className={`overflow-hidden transition-all duration-500 ${
                isExpanded ? 'max-h-96' : 'max-h-0'
              }`}
            >
              <ul className="space-y-2">
                {details.map((detail, idx) => (
                  <li key={idx} className="flex items-start text-sm text-slate-600">
                    <ArrowRight className="text-[#135bec] mr-2 mt-0.5 flex-shrink-0" size={12} />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;
