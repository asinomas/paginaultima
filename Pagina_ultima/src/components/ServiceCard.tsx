const ServiceCard: React.FC<ServiceCardProps> = ({ specialty }) => {
  const [isOpen, setIsOpen] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setTimeout(() => {
        cardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 100);
    }
  };

  return (
    <div ref={cardRef} className="group relative rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col">
      
      {/* Marca de agua */}
      <div className="absolute -top-6 -right-6 text-slate-100 group-hover:text-blue-50 transition-all duration-700 pointer-events-none z-0 group-hover:scale-125">
        <specialty.icon size={180} strokeWidth={1} />
      </div>
      
      {/* Contenido superior con fondo blanco y padding */}
      <div className="bg-white p-12 relative z-10">
        {/* Icono principal */}
        <div className="mb-8 flex size-14 items-center justify-center rounded-2xl bg-slate-50 text-[#135bec] group-hover:bg-[#135bec] group-hover:text-white transition-all duration-500 shadow-sm">
          <specialty.icon size={28} />
        </div>

        {/* Contenido */}
        <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">{specialty.title}</h3>
        <p className="text-slate-500 leading-relaxed text-sm mb-6">{specialty.description}</p>

        {/* Botón */}
        <button 
          onClick={handleToggle}
          className="flex items-center text-[#135bec] text-[10px] font-bold uppercase tracking-[0.2em] group/btn transition-transform duration-300 hover:scale-105 origin-left w-fit"
        >
          <span>Detalles técnicos</span>
          <ChevronRight 
            className={`ml-2 transition-all duration-300 ${isOpen ? 'rotate-90' : ''}`} 
            size={14} 
          />
        </button>
      </div>

      {/* Acordeón - el gris llega hasta los bordes */}
      <div 
        className={`overflow-hidden transition-all duration-500 bg-slate-50 ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="border-t border-slate-100 px-12 py-6">
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
  );
};
