import React, { useState } from 'react';
import { Rocket, Building2 } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const HighLevelConsulting: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const collaborationModels = [
    'Servicio Head Hunting',
    'Servicio Staffing',
    'Servicio Digital Factoring',
    'Servicio Mesa de Ayuda',
  ];

  const toggleCard = (index: number) => {
    setActiveCard(activeCard === index ? null : index);
  };

  return (
    <section
      ref={ref}
      className={`bg-slate-50 py-24 md:py-32 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* GRID PRINCIPAL */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          
          {/* COLUMNA IZQUIERDA */}
          <div>
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#135bec] uppercase mb-4 block">
              Excelencia Operativa
            </span>

            <h3 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-8 tracking-tight leading-[1.1]">
              Consultoría de <br />
              <span className="text-[#135bec] italic">Alto Nivel</span>
            </h3>

            <div className="w-16 h-1 bg-[#135bec] mb-8"></div>

            {/* TEXTO LIMITADO DE ANCHO */}
            <p className="text-lg text-slate-600 leading-relaxed max-w-md">
              Conectamos organizaciones con profesionales TI validados para escalar productos, equipos y operaciones, listos para generar impacto real.
              Desarrollamos una confianza a largo plazo que nos permite ser parte del cumplimiento de los objetivos de nuestros clientes.
            </p>
          </div>

          {/* COLUMNA DERECHA */}
          <div>
            {/* MODELOS DE COLABORACIÓN */}
            <div className="mb-16">
              <h4 className="text-[10px] font-bold tracking-[0.3em] text-slate-400 uppercase mb-8 border-b border-slate-200 pb-2 inline-block">
                Modelos de Colaboración
              </h4>

              <div className="flex flex-wrap gap-8">
                {collaborationModels.map((model, index) => (
                  <div key={index} className="flex items-center gap-4 group">
                    <div className="w-1 h-6 bg-[#135bec] group-hover:h-8 transition-all duration-300"></div>
                    <span className="text-base font-medium text-slate-700 group-hover:text-[#135bec] transition-colors duration-300">
                      {model}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* TARJETAS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* CARD 1 */}
              <div className="parent">
                <div className="card">
                  <div className="glass"></div>
                  <div className="content">
                    <span className="title">Startups</span>
                    <span className="subtitle">
                      <Rocket className="inline w-5 h-5 mr-2" />
                      Escala tu equipo rápido
                    </span>
                    <p className="description">
                      Desarrollamos un roadmap claro para construir solidez para el futuro.
                    </p>
                  </div>

                  <div className="bottom">
                    <div
                      className={`view-more ${activeCard === 0 ? 'active' : ''}`}
                      onClick={() => toggleCard(0)}
                    >
                      <button className="view-more-button">
                        {activeCard === 0 ? 'Ver menos' : 'Ver más'}
                      </button>
                      <svg
                        className={`svg ${activeCard === 0 ? 'rotate' : ''}`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                    </div>
                  </div>

                  <div className={`accordion-content ${activeCard === 0 ? 'open' : ''}`}>
                    <ul className="space-y-3 text-sm">
                      <li>• Validación técnica sin overhead</li>
                      <li>• Flexibilidad (part-time / full-time)</li>
                      <li>• Ideal para MVPs y crecimiento acelerado</li>
                    </ul>
                  </div>

                  <div className="logo">
                    <span className="circle circle1"></span>
                    <span className="circle circle2"></span>
                    <span className="circle circle3"></span>
                    <span className="circle circle4"></span>
                    <span className="circle circle5">
                      <Rocket className="svg-icon" strokeWidth={2.5} />
                    </span>
                  </div>
                </div>
              </div>

              {/* CARD 2 */}
              <div className="parent">
                <div className="card">
                  <div className="glass"></div>
                  <div className="content">
                    <span className="title">Empresas & Corporaciones</span>
                    <span className="subtitle">
                      <Building2 className="inline w-5 h-5 mr-2" />
                      Procesos de selección robustos
                    </span>
                    <p className="description">
                      Desarrollamos un roadmap claro para construir solidez para el futuro.
                    </p>
                  </div>

                  <div className="bottom">
                    <div
                      className={`view-more ${activeCard === 1 ? 'active' : ''}`}
                      onClick={() => toggleCard(1)}
                    >
                      <button className="view-more-button">
                        {activeCard === 1 ? 'Ver menos' : 'Ver más'}
                      </button>
                      <svg
                        className={`svg ${activeCard === 1 ? 'rotate' : ''}`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                    </div>
                  </div>

                  <div className={`accordion-content ${activeCard === 1 ? 'open' : ''}`}>
                    <ul className="space-y-3 text-sm">
                      <li>• Cumplimiento, documentación y governance</li>
                      <li>• Perfiles senior y especializados</li>
                      <li>• Integración con RRHH y proveedores</li>
                    </ul>
                  </div>

                  <div className="logo">
                    <span className="circle circle1"></span>
                    <span className="circle circle2"></span>
                    <span className="circle circle3"></span>
                    <span className="circle circle4"></span>
                    <span className="circle circle5">
                      <Building2 className="svg-icon" strokeWidth={2.5} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ESTILOS ORIGINALES (SIN CAMBIOS VISUALES) */}
      <style jsx>{`
        .parent {
          max-width: 320px;
          height: 360px;
          perspective: 1000px;
        }
        /* ——— resto de tus estilos intactos ——— */
      `}</style>
    </section>
  );
};

export default HighLevelConsulting;
