import React, { useState } from 'react';
import { Rocket, Building2 } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const HighLevelConsulting: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const collaborationModels = [
    "Servicio Head Hunting",
    "Servicio Staffing",
    "Servicio Digital Factoring",
    "Servicio Mesa de Ayuda"
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
        {/* HEADER */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-24">
          <div className="max-w-xl">
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#135bec] uppercase mb-4 block">
              Excelencia Operativa
            </span>
            <h3 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-8 tracking-tight leading-[1.1]">
              Consultoría de <br />
              <span className="text-[#135bec] italic">Alto Nivel</span>
            </h3>
            <div className="w-16 h-1 bg-[#135bec] mb-8"></div>
            <p className="text-lg text-slate-600 leading-relaxed">
              Conectamos organizaciones con profesionales TI validados para escalar productos, equipos y operaciones, listos para generar impacto real.
              Desarrollamos una confianza a largo plazo que nos permite ser parte del cumplimiento de los objetivos de nuestros clientes.
            </p>
          </div>

          {/* COLLABORATION MODELS */}
          <div className="flex-1 w-full lg:max-w-xl">
            <h4 className="text-[10px] font-bold tracking-[0.3em] text-slate-400 uppercase mb-8 border-b border-slate-200 pb-2 inline-block">
              Modelos de Colaboración
            </h4>
            <div className="space-y-4">
              {collaborationModels.map((model, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-1 h-6 bg-[#135bec] group-hover:h-8 transition-all duration-300"></div>
                  <span className="text-base font-medium text-slate-700 group-hover:text-[#135bec] transition-colors duration-300">
                    {model}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* TARJETAS - 3D UI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch max-w-5xl mx-auto">
          {/* CARD 1 - Startups */}
          <div className="parent">
            <div className="card">
              <div className="glass"></div>
              <div className="content">
                <span className="title">Startups</span>
                <span className="text">
                  <Rocket className="inline w-4 h-4 mr-2" />
                  Escala tu equipo rápido
                </span>
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
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </div>
              </div>
              <div className={`accordion-content ${activeCard === 0 ? 'open' : ''}`}>
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

          {/* CARD 2 - Empresas & Corporaciones */}
          <div className="parent">
            <div className="card">
              <div className="glass"></div>
              <div className="content">
                <span className="title">Empresas & Corporaciones</span>
                <span className="text">
                  <Building2 className="inline w-4 h-4 mr-2" />
                  Procesos de selección robustos
                </span>
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
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </div>
              </div>
              <div className={`accordion-content ${activeCard === 1 ? 'open' : ''}`}>
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
                    <span>Integración con RRHH y proveedores</span>
                  </li>
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

      <style jsx>{`
        .parent {
          width: 100%;
          max-width: 400px;
          height: 420px;
          perspective: 1000px;
          margin: 0 auto;
        }

        .card {
          height: 100%;
          border-radius: 50px;
          background: linear-gradient(135deg, rgb(71, 85, 105) 0%, rgb(51, 65, 85) 100%);
          transition: all 0.5s ease-in-out;
          transform-style: preserve-3d;
          box-shadow: rgba(0, 0, 0, 0) 40px 50px 25px -40px, rgba(0, 0, 0, 0.2) 0px 25px 25px -5px;
          position: relative;
          cursor: pointer;
        }

        .glass {
          transform-style: preserve-3d;
          position: absolute;
          inset: 8px;
          border-radius: 55px;
          border-top-right-radius: 100%;
          background: linear-gradient(0deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.2) 100%);
          transform: translate3d(0px, 0px, 25px);
          border-left: 1px solid rgba(255, 255, 255, 0.2);
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
          transition: all 0.5s ease-in-out;
        }

        .content {
          padding: 100px 60px 0px 30px;
          transform: translate3d(0, 0, 26px);
        }

        .content .title {
          display: block;
          color: #e2e8f0;
          font-weight: 900;
          font-size: 20px;
        }

        .content .text {
          display: block;
          color: rgba(226, 232, 240, 0.7);
          font-size: 15px;
          margin-top: 20px;
        }

        .bottom {
          padding: 10px 12px;
          transform-style: preserve-3d;
          position: absolute;
          bottom: 20px;
          left: 20px;
          right: 20px;
          display: flex;
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
          padding: 10px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 12px;
        }

        .bottom .view-more:hover {
          transform: translate3d(0, 0, 10px);
          background: rgba(255, 255, 255, 0.15);
        }

        .bottom .view-more .view-more-button {
          background: none;
          border: none;
          color: #cbd5e1;
          font-weight: bolder;
          font-size: 12px;
          cursor: pointer;
        }

        .bottom .view-more .svg {
          fill: none;
          stroke: #cbd5e1;
          stroke-width: 3px;
          max-height: 15px;
          transition: transform 0.3s ease;
        }

        .bottom .view-more .svg.rotate {
          transform: rotate(180deg);
        }

        .accordion-content {
          position: absolute;
          bottom: 80px;
          left: 30px;
          right: 30px;
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.5s ease-in-out, opacity 0.5s ease-in-out;
          opacity: 0;
          transform: translate3d(0, 0, 26px);
          color: rgba(226, 232, 240, 0.9);
        }

        .accordion-content.open {
          max-height: 200px;
          opacity: 1;
        }

        .accordion-content .bullet {
          color: #94a3b8;
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
          box-shadow: rgba(100, 100, 111, 0.2) -10px 10px 20px 0px;
          backdrop-filter: blur(5px);
          background: rgba(148, 163, 184, 0.2);
          transition: all 0.5s ease-in-out;
        }

        .logo .circle1 {
          width: 170px;
          transform: translate3d(0, 0, 20px);
          top: 8px;
          right: 8px;
        }

        .logo .circle2 {
          width: 140px;
          transform: translate3d(0, 0, 40px);
          top: 10px;
          right: 10px;
          backdrop-filter: blur(1px);
          transition-delay: 0.4s;
        }

        .logo .circle3 {
          width: 110px;
          transform: translate3d(0, 0, 60px);
          top: 17px;
          right: 17px;
          transition-delay: 0.8s;
        }

        .logo .circle4 {
          width: 80px;
          transform: translate3d(0, 0, 80px);
          top: 23px;
          right: 23px;
          transition-delay: 1.2s;
        }

        .logo .circle5 {
          width: 50px;
          transform: translate3d(0, 0, 100px);
          top: 30px;
          right: 30px;
          display: grid;
          place-content: center;
          transition-delay: 1.6s;
          background: linear-gradient(135deg, #64748b 0%, #475569 100%);
        }

        .logo .circle5 .svg-icon {
          width: 20px;
          height: 20px;
          color: white;
        }

        .parent:hover .card {
          transform: rotate3d(1, 1, 0, 30deg);
          box-shadow: rgba(0, 0, 0, 0.3) 30px 50px 25px -40px, rgba(0, 0, 0, 0.1) 0px 25px 30px 0px;
        }

        .parent:hover .card .logo .circle2 {
          transform: translate3d(0, 0, 60px);
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
            min-height: 420px;
          }
          
          .content {
            padding: 80px 40px 0px 25px;
          }
        }
      `}</style>
    </section>
  );
};

export default HighLevelConsulting;
