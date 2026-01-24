import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  details: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description, details }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | null>(null);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [isOpen]);

  return (
    <div className="group relative bg-white p-12 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col">
      {/* Marca de agua */}
      <div className="absolute -top-6 -right-6 text-slate-100 group-hover:text-blue-50 transition-all duration-700 pointer-events-none z-0 group-hover:scale-125">
        <Icon size={180} strokeWidth={1} />
      </div>

      <div className="relative z-10 mb-8 flex items-center justify-center rounded-2xl bg-slate-50 text-[#135bec] group-hover:bg-[#135bec] group-hover:text-white transition-all duration-500 shadow-sm">
        <Icon size={28} />
      </div>

      <div className="relative z-10 flex flex-col">
        <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">{title}</h3>
        <p className="text-slate-500 leading-relaxed text-sm mb-6">{description}</p>

        {/* Botón de acordeón */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center text-[#135bec] text-[10px] font-bold uppercase tracking-[0.2em] w-fit transition-transform duration-300 hover:scale-105"
        >
          <span>Detalles técnicos</span>
          <ArrowRight
            className={`ml-2 transition-transform duration-300 ${isOpen ? 'rotate-90' : 'rotate-0'}`}
            size={14}
          />
        </button>

        {/* Contenedor del detalle con slide */}
        <div
          ref={contentRef}
          style={{ maxHeight: isOpen ? `${height}px` : '0px' }}
          className="overflow-hidden transition-[max-height] duration-500"
        >
          <ul className="mt-4 space-y-2">
            {details.map((detail, idx) => (
              <li key={idx} className="flex items-center text-slate-500 text-sm">
                <ArrowRight className="mr-2 text-[#135bec] w-4 h-4 flex-shrink-0" />
                {detail}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
