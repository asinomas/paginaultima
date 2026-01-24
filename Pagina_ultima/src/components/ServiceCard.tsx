const ServiceCard: React.FC<ServiceCardProps> = ({ specialty }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <div className="group relative bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col">

      {/* Marca de agua */}
      <div className="absolute -top-6 -right-6 text-slate-100 group-hover:text-blue-50 transition-all duration-700 pointer-events-none z-0 group-hover:scale-125">
        <specialty.icon size={180} strokeWidth={1} />
      </div>

      {/* Icono principal */}
      <div className="relative z-10 mb-8 flex items-center justify-center rounded-2xl bg-slate-50 text-[#135bec] group-hover:bg-[#135bec] group-hover:text-white transition-all duration-500 shadow-sm w-14 h-14">
        <specialty.icon size={28} />
      </div>

      {/* Título y descripción */}
      <div className="relative z-10 flex flex-col px-12 pb-4">
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
      </div>

      {/* Contenedor acordeón completo con fondo gris */}
      <div
        style={{ maxHeight: height }}
        className="transition-all duration-500 overflow-hidden w-full"
      >
        <div
          ref={contentRef}
          className="bg-slate-50/50 border-t border-slate-100 px-12 py-6 w-full box-border"
        >
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
