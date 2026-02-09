import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface ServiceCardProps {
  Icon: any;
  title: string;
  description: string;
  details: string[];
  buttonText?: string;
  detailsTitle?: string;   
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  Icon,
  title,
  description,
  details,
  buttonText = "Saber más",
  detailsTitle = "Roles / Capacidades:"
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className="
        relative bg-white rounded-[2.5rem] shadow-xl
        border border-slate-100
        transition-all duration-500
        group overflow-hidden
        min-h-[360px]
      "
      onMouseLeave={() => setIsExpanded(false)}
    >
      {/* CONTENIDO BASE */}
      <div
           className={`
            p-10 relative z-10
            transition-opacity duration-300
            ${isExpanded ? 'opacity-0 pointer-events-none' : 'opacity-100'}
           `}
          >
        
        {/* ICONO DE FONDO */}
        <div className="
          absolute -top-6 -right-6 text-slate-100
          group-hover:text-blue-50
          group-hover:scale-125
          transition-all duration-700
          pointer-events-none z-0
        ">
          <Icon size={180} strokeWidth={1} />
        </div>

        {/* ICONO PRINCIPAL */}
        <div className="
          relative z-10 w-12 h-12 bg-blue-50
          rounded-xl flex items-center justify-center mb-8
          group-hover:bg-[#135bec]
          transition-all duration-300
        ">
          <Icon className="text-[#135bec] group-hover:text-white" size={24} />
        </div>

        {/* TEXTO */}
        <div className="relative z-10">
          <h4
            className="text-xl font-bold text-slate-900 mb-4 tracking-tight"
            onMouseEnter={() => setIsExpanded(true)}
          >
            {title}
          </h4>

          <p
            className="text-slate-500 leading-relaxed text-sm mb-2"
            onMouseEnter={() => setIsExpanded(true)}
          >
            {description}
          </p>

          {/* INDICADOR */}
          <div
            className="
              flex items-center text-[#135bec]
              font-bold text-[10px] uppercase tracking-[0.2em]
              transition-transform duration-300 w-fit
            "
            onMouseEnter={() => setIsExpanded(true)}
          >
            <span>{buttonText}</span>
            <ChevronDown
              className={`ml-2 transition-all duration-300 ${
                isExpanded ? 'rotate-180' : ''
              }`}
              size={14}
            />
          </div>
        </div>
      </div>

      {/* OVERLAY DEL ACORDEÓN */}
      <div
        className={`
          absolute inset-0
          bg-white/95 backdrop-blur-sm
          transition-all duration-500 ease-out
          ${isExpanded
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-6 pointer-events-none'}
        `}
      >
        {/* ICONO DE FONDO (SE MANTIENE) */}
        <div className="
          absolute -top-6 -right-6 text-slate-100
          pointer-events-none
        ">
          <Icon size={180} strokeWidth={1} />
        </div>

        <div className="relative z-10 px-10 py-10">
          {detailsTitle && (
            <h5 className="text-xs font-bold text-slate-900 mb-4 uppercase tracking-wider">
              {detailsTitle}
            </h5>
          )}

          <ul className="space-y-2">
            {details.map((detail, idx) => (
              <li
                key={idx}
                className="flex items-start text-sm text-slate-600"
              >
                <span className="text-[#135bec] mr-2 mt-0.5 flex-shrink-0 font-bold">
                  ›
                </span>
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
