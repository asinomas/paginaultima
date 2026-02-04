import React, { useState } from 'react';
import { Rocket, Building2 } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const HighLevelConsulting: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);

  const collaborationModels = [
    "Head Hunting",
    "Staff Augmentation",
    "Outsourcing",
    "Mesa de Ayuda"
  ];

  return (
    <section
      ref={ref}
      className={`bg-slate-50 py-24 md:py-32 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* HEADER */}
        <div className="mb-16 flex flex-col lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-xl mb-8 lg:mb-0">
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#135bec] uppercase mb-4 block">
              Excelencia Operativa
            </span>
            <h3 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-8 tracking-tight leading-[1.1]">
              Consultoría de <br />
              <span className="text-[#135bec] italic">Alto Nivel</span>
            </h3>
            <div className="w-16 h-1 bg-[#135bec] mb-8"></div>
            <p className="text-lg text-slate-600 leading-relaxed max-w-md">
              Conectamos organizaciones con profesionales TI validados para escalar productos, equipos y operaciones, listos para generar impacto real.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed max-w-md">
              Desarrollamos una confianza a largo plazo que nos permite ser parte del cumplimiento de los objetivos de nuestros clientes.
            </p>
          </div>

          {/* COLLABORATION MODELS */}
          <div className="lg:ml-8">
            <h4 className="text-[11px] font-bold tracking-[0.2em] text-[#135bec] uppercase mb-4 block">
              Modelos de Colaboración
            </h4>
            <div className="flex flex-wrap gap-8 mb-8">
              {collaborationModels.map((model, index) => (
                <div
                  key={index}
                  className="flex items-center gap-6 group"
                >
                  <div className="w-1 h-6 bg-[#135bec] group-hover:h-8 transition-all duration-300"></div>
                  <span className="text-base font-medium text-slate-700 group-hover:text-[#135bec] transition-colors duration-300">
                    {model}
                  </span>
                </div>
              ))}
            </div>

            {/* TARJETAS - 3D UI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch max-w-5xl">
              {/* CARD 1 - Startups */}
              <div className="parent">
                <div className="card">
                  <div className="glass"></div>
                  <div className={`content ${isHovered1 ? 'faded' : ''}`}>
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
                      className="view-more"
                      onMouseEnter={() => setIsHovered1(true)}
                      onMouseLeave={() => setIsHovered1(false)}
                    >
                      <button className="view-more-button">
                        Ver más
                      </button>
                      <svg 
                        className="svg"
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 24 24" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      >
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                    </div>
                    <div className="accordion-content">
                      <ul className="space-y-3 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="bullet">•</span>
                          <span>Validación técnica sin overhead</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="bullet">•</span>
                          <span>Flexibilidad (part-time / full-time)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="bullet">•</span>
                          <span>Ideal para MVPs y crecimiento acelerado</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="logo">
                    <span className="circle circle3"></span>
                    <span className="circle circle4"></span>
                    <span className="circle circle5">
                      <Rocket className="svg-icon" strokeWidth={2.5} />
                    </span>
                  </div>
                </div>
              </div>

              {/* CARD 2 - Empresas & Corporaciones */}
              <div className="parent">
                <div className="card">
                  <div className="glass"></div>
                  <div className={`content ${isHovered2 ? 'faded' : ''}`}>
                    <span className="title">Empresas</span>
                    <span className="subtitle">
                      <Building2 className="inline w-5 h-5 mr-2" />
                      Reducción de costos y tiempos 
                    </span>
                    <p className="description">
                      Generamos procesos de selección robustos específicos para cada empresa
                    </p>
                  </div>
                  <div className="bottom">
                    <div 
                      className="view-more"
                      onMouseEnter={() => setIsHovered2(true)}
                      onMouseLeave={() => setIsHovered2(false)}
                    >
                      <button className="view-more-button">
                        Ver más
                      </button>
                      <svg 
                        className="svg"
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 24 24" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      >
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                    </div>
                    <div className="accordion-content">
                      <ul className="space-y-3 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="bullet">•</span>
                          <span>Cumplimiento, documentación y governance</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="bullet">•</span>
                          <span>Perfiles senior y especializados</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="bullet">•</span>
                          <span>Acompañamiento y soporte continuo
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="logo">
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

      <style jsx>{`
        .parent {
          width: 100%;
          max-width: 260px;
          height: 340px;
          perspective: 1000px;
        }

        .card {
          height: 100%;
          border-radius: 45px;
          background: linear-gradient(135deg, #1e5fd9 0%, #135bec 100%);
          transition: all 0.5s ease-in-out;
          transform-style: preserve-3d;
          box-shadow: rgba(19, 91, 236, 0) 40px 50px 25px -40px, rgba(19, 91, 236, 0.2) 0px 25px 25px -5px;
          position: relative;
          cursor: pointer;
        }

        .glass {
          transform-style: preserve-3d;
          position: absolute;
          inset: 8px;
          border-radius: 50px;
          border-top-right-radius: 100%;
          background: linear-gradient(0deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.25) 100%);
          transform: translate3d(0px, 0px, 25px);
          border-left: 1px solid rgba(255, 255, 255, 0.3);
          border-bottom: 1px solid rgba(255, 255, 255, 0.3);
          transition: all 0.5s ease-in-out;
        }

        .content {
          padding: 70px 50px 0px 25px;  /* Elevado: de 85px a 100px */
          transform: translate3d(0, 0, 26px);
          transition: opacity 0.5s ease-in-out;
        }

        .content.faded {
          opacity: 0;
        }

        .content .title {
          display: block;
          color: #ffffff;
          font-weight: 900;
          font-size: 27px;
          margin-bottom: 12px;
        }

        .content .subtitle {
          display: flex;
          align-items: center;
          color: rgba(255, 255, 255, 0.95);
          font-size: 15px;
          font-weight: 600;
          margin-bottom: 8px;
        }

        .content .description {
          color: rgba(255, 255, 255, 0.75);
          font-size: 13px;
          line-height: 1.5;
          margin-top: 12px;
        }

        .bottom {
          padding: 10px 12px;
          transform-style: preserve-3d;
          position: absolute;
          bottom: 10px;  /* Descendido: de 18px a 10px */
          left: 18px;
          right: 18px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          transform: translate3d(0, 0, 26px);
        }

        .bottom .view-more {
          display: flex;
          align-items: center;
          width: 100%;
          justify-content: space-between;
          transition: all 0.2s ease-in-out;
          cursor: pointer;
          padding: 10px 12px;
          background: rgba(255, 255, 255, 0.15);
          border-radius: 12px;
          backdrop-filter: blur(10px);
        }

        .bottom .view-more:hover {
          transform: translate3d(0, 0, 10px);
          background: rgba(255, 255, 255, 0.25);
        }

        .bottom .view-more .view-more-button {
          background: none;
          border: none;
          color: #ffffff;
          font-weight: 700;
          font-size: 12px;
          text-left;
          cursor: pointer;
        }

        .bottom .view-more .svg {
          fill: none;
          stroke: #ffffff;
          stroke-width: 3px;
          max-height: 15px;
        }

        .accordion-content {
          position: absolute;
          bottom: 70px;  /* Ajustado: de 75px a 70px para alineación */
          left: 25px;
          right: 25px;
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.5s ease-in-out, opacity 0.5s ease-in-out;
          opacity: 0;
          transform: translate3d(0, 0, 26px);
          color: rgba(255, 255, 255, 0.95);
        }

        .view-more:hover ~ .accordion-content {
          max-height: 180px;
          opacity: 1;
        }

        .accordion-content .bullet {
          color: rgba(255, 255, 255, 0.7);
        }

        .logo {
          position: absolute;
          right: 0;
          top: 0;
          transform-style: preserve-3d;
        }

        .logo .circle {
          display: block;
          position: absolute;
          aspect-ratio: 1;
          border-radius: 50%;
          top: 0;
          right: 0;
          box-shadow: rgba(19, 91, 236, 0.3) -10px 10px 20px 0px;
          backdrop-filter: blur(5px);
          background: rgba(255, 255, 255, 0.15);
          transition: all 0.5s ease-in-out;
        }

        .logo .circle3 {
          width: 100px;
          transform: translate3d(0, 0, 60px);
          top: 15px;
          right: 15px;
          transition-delay: 0.8s;
        }

        .logo .circle4 {
          width: 75px;
          transform: translate3d(0, 0, 80px);
          top: 20px;
          right: 20px;
          transition-delay: 1.2s;
        }

        .logo .circle5 {
          width: 50px;
          transform: translate3d(0, 0, 100px);
          top: 25px;
          right: 25px;
          display: grid;
          place-content: center;
          transition-delay: 1.6s;
          background: linear-gradient(135deg, #0d47a1 0%, #1565c0 100%);
        }

        .logo .circle5 .svg-icon {
          width: 20px;
          height: 20px;
          color: white;
        }

        .parent:hover .card {
          transform: rotate3d(1, 1, 0, 30deg);
          box-shadow: rgba(19, 91, 236, 0.3) 30px 50px 25px -40px, rgba(19, 91, 236, 0.15) 0px 25px 30px 0px;
        }

        .parent:hover .card .logo .circle3 {
          transform: translate3d(0, 0, 80px);
        }

        .parent:hover .card .logo .circle4 {
          transform: translate3d(0, 0, 100px);
        }

        .parent:hover .card .logo .circle5 {
          transform: translate3d(0, 0, 120px);
        }

        @media (max-width: 768px) {
          .parent {
            height: auto;
            min-height: 380px;
          }
          
          .content {
            padding: 70px 40px 0px 20px;
          }
        }
      `}</style>
    </section>
  );
};

export default HighLevelConsulting;
