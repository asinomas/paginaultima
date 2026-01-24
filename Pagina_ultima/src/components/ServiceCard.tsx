import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

interface ServiceCardProps {
  Icon: any;
  title: string;
  description: string;
  details: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ Icon, title, description, details }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState('0px');
  const [opacity, setOpacity] = useState(0);

  // Calcula altura y opacidad cuando se expande o contrae
  useEffect(() => {
    if (contentRef.current) {
      if (isExpanded) {
        setMaxHeight(`${contentRef.current.scrollHeight}px`);
        setTimeout(() => setOpacity(1), 50); // Fade-in
      } else {
        setOpacity(0); // Fade-out
        setMaxHeight('0px');
      }
    }
  }, [isExpanded]);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
    if (!isExpanded) {
      setTimeout(() => {
        cardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 150);
    }
  };

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
          <h4 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">{title}</h4>
          <p className="text-slate-500 leading-relaxed text-sm mb-6">{description}</p>

          {/* Botón Saber Más */}
          <button
            onClick={handleToggle}
            className="flex items-center text-[#135bec] font-bold text-[10px] uppercase tracking-[0.2em] group/btn transition-transform duration-300 hover:scale-105 origin-left w-fit"
          >
            <span>Saber más</span>
            <ChevronDown
              className={`ml-2 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
              size={14}
            />
          </button>
        </div>
      </div>

      {/* Acordeón con efecto slide + fade */}
      <div
        style={{ maxHeight }}
        className="overflow-hidden transition-max-height duration-500 ease-in-out"
      >
        <div
          ref={contentRef}
          className="px-10 pt-2 pb-10 relative z-10 bg-slate-50/50 border-t border-slate-100 transition-opacity duration-500"
          style={{ opacity }}
        >
          <h5 className="text-xs font-bold text-slate-900 mb-4 uppercase tracking-wider">
            Servicios:
          </h5>
          <ul className="space-y-2">
            {details.map((detail, idx) => (
              <li key={idx} className="flex items-start text-sm text-slate-600">
                <ArrowRight className="text-[#135bec] mr-2 mt-0.5 flex-shrink-0" size={12} />
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
