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

const ServiceCard: React.FC<ServiceCardProps> = ({ Icon, title, description, details, buttonText = "Saber más", detailsTitle = "Servicios:" }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const cardRef = React.useRef<HTMLDivElement>(null);

  return (
    <div 
      ref={cardRef} 
      className="relative bg-white rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-500 group flex flex-col overflow-hidden"
    >
      
      <div className="p-10">
        {/* ICONO DE FONDO (Marca de Agua) */}
        <div className="absolute -top-6 -right-6 text-slate-100 group-hover:text-blue-50 group-hover:scale-125 transition-all duration-700 pointer-events-none z-0">
          <Icon size={180} strokeWidth={1} />
        </div>
        
        {/* Icono Principal */}
        <div className="relative z-10 w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-8 group-hover:bg-[#135bec] transition-all duration-300">
          <Icon className="text-[#135bec] group-hover:text-white" size={24} />
        </div>
        
        {/* Contenido */}
        <div className="relative z-10">
          <h4 
            className="text-xl font-bold text-slate-900 mb-4 tracking-tight"
            onMouseEnter={() => setIsExpanded(true)}
            onMouseLeave={() => setIsExpanded(false)}
          >
            {title}
          </h4>
          <p 
            className="text-slate-500 leading-relaxed text-sm mb-6"
            onMouseEnter={() => setIsExpanded(true)}
            onMouseLeave={() => setIsExpanded(false)}
          >
            {description}
          </p>
          
          {/* Indicador Visual */}
          <div 
            className="flex items-center text-[#135bec] font-bold text-[10px] uppercase tracking-[0.2em] transition-transform duration-300 w-fit"
            onMouseEnter={() => setIsExpanded(true)}
            onMouseLeave={() => setIsExpanded(false)}
          >
            <span>{buttonText}</span>
            <ChevronDown 
              className={`ml-2 transition-all duration-300 ${isExpanded ? 'rotate-180' : ''}`}
              size={14} 
            />
          </div>
        </div>
      </div>

      {/* Acordeón con detalles */}
      <div className={`overflow-hidden transition-all duration-[1s] ease-in-out ${isExpanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className={`px-10 pb-10 ${detailsTitle ? 'pt-2' : 'pt-4'} relative z-10 bg-slate-50/50 border-t border-slate-100`}>
          {detailsTitle && (
            <h5 className="text-xs font-bold text-slate-900 mb-4 uppercase tracking-wider">
              {detailsTitle}
            </h5>
          )}
          <ul className="space-y-2">
            {details.map((detail, idx) => (
              <li key={idx} className="flex items-start text-sm text-slate-600">
                <span className="text-[#135bec] mr-2 mt-0.5 flex-shrink-0 font-bold">›</span>
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
