import React, { useState, useRef, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

interface Specialty {
  icon: React.ElementType;
  title: string;
  description: string;
  details: string[];
}

interface ServiceCardProps {
  specialty: Specialty;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ specialty }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      // Altura total del contenido + padding
      setHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <div className="group relative bg-white p-12 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col">
      
      {/* Marca de agua */}
      <div className="absolute -top-6 -right-6 text-slate-100 group-hover:text-blue-50 transition-all duration-700 pointer-events-none z-0 group-hover:scale-125">
        <specialty.icon size={180} strokeWidth={1} />
      </div>

      {/* Icono principal */}
      <div className="relative z-10 mb-8 flex size-14 items-center justify-center rounded-2xl bg-slate-50 text-[#135bec] group-hover:bg-[#135bec] group-hover:text-white transition-all duration-500 shadow-sm">
        <specialty.icon size={28} />
      </div>

      {/* Título y descripción */}
      <div className="relative z-10 flex flex-col">
        <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">{specialty.title}</h3>
        <p className="text-slate-500 leading-relaxed text-sm mb-4">{specialty.description}</p>

        {/* Botón acordeón */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center text-[#135bec] text-[10px] font-bold uppercase tracking-[0.2em] group/btn transition-transform duration-300 hover:scale-105 origin-left w-fit mb-4"
        >
          <span>Detalles técnicos</span>
          <ChevronRight
            className={`ml-2 transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}
            size={14}
          />
        </button>

        {/* Contenedor acordeón con fondo gris que rellena toda la expansión */}
        <div
          style={{ maxHeight: height }}
          className="transition-all duration-500 overflow-hidden w-full bg-slate-50/50 border-t border-slate-100 box-border"
        >
          <div ref={contentRef} className="px-8 py-6 w-full">
            <ul className="text-sm text-slate-500 space-y-2">
              {specialty.details.map((detail, idx) => (
                <li key={idx} className="flex items-center">
                  <ChevronRight className="mr-2 w-3 h-3 text-[#135bec] flex-shrink-0" />
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
