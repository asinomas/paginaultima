import React, { useState } from 'react';
import { Rocket, Building2 } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const collaborationModels = [
  "Servicio Head Hunting",
  "Servicio Staffing",
  "Servicio Digital Factoring",
  "Servicio Mesa de Ayuda"
];

const HighLevelConsulting: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [activeCard, setActiveCard] = useState<number | null>(null);

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
            <div className="flex flex-wrap gap-4 justify-start">
              {collaborationModels.map((model, index) => (
                <span
                  key={index}
                  className="px-5 py-2.5 bg-white text-slate-500 text-[12px] font-semibold rounded-xl shadow-sm
                             hover:text-[#135bec] hover:-translate-y-1 hover:shadow-md transition-all duration-300"
                >
                  {model}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* TARJETAS - 3D UI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch max-w-5xl mx-auto">
          {/* CARD 1 - Startups */}
          <div className="parent">
            <div className="card group">
              <div className="logo">
                <span className="circle circle1"></span>
                <span className="circle circle2"></span>
                <span className="circle circle3"></span>
                <span className="circle circle4"></span>
                <span className="circle circle5">
                  <Rocket className="w-8 h-8 text-white" strokeWidth={2.5} />
                </span>
              </div>
              <div className="glass"></div>
              <div className="content">
                <span className="title">Startups</span>
                <span className="text flex items-center gap-2">
                  <Rocket className="w-4 h-4" />
                  Escala tu equipo rápido
                </span>
              </div>
              <div className="bottom">
                <div 
                  className={`view-more cursor-pointer ${activeCard === 0 ? 'active' : ''}`}
                  onClick={() => toggleCard(0)}
                >
                  <button className="view-more-button">
                    {activeCard === 0 ? 'Ver menos' : 'Ver más'}
                  </button>
                  <svg 
                    className={`svg transition-transform duration-300 ${activeCard === 0 ? 'rotate-180' : ''}`}
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </div>
                <div 
                  className={`overflow-hidden transition-all duration-500 ${
                    activeCard === 0 ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0'
                  }`}
                >
                  <ul className="space-y-3 text-sm text-slate-300">
                    <li className="flex items-start gap-2">
                      <span className="text-[#135bec] mt-1">•</span>
                      <span>Validación técnica sin overhead</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#135bec] mt-1">•</span>
                      <span>Flexibilidad (part-time / full-time)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#135bec] mt-1">•</span>
                      <span>Ideal para MVPs y crecimiento acelerado</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* CARD 2 - Empresas & Corporaciones */}
          <div className="parent">
            <div className="card group">
              <div className="logo">
                <span className="circle circle1"></span>
                <span className="circle circle2"></span>
                <span className="circle circle3"></span>
                <span className="circle circle4"></span>
                <span className="circle circle5">
                  <Building2 className="w-8 h-8 text-white" strokeWidth={2.5} />
                </span>
              </div>
              <div className="glass"></div>
              <div className="content">
                <span className="title">Empresas & Corporaciones</span>
                <span className="text flex items-center gap-2">
                  <Building2 className="w-4 h-4" />
                  Procesos de selección robustos
                </span>
              </div>
              <div className="bottom">
                <div 
                  className={`view-more cursor-pointer ${activeCard === 1 ? 'active' : ''}`}
                  onClick={() => toggleCard(1)}
                >
                  <button className="view-more-button">
                    {activeCard === 1 ? 'Ver menos' : 'Ver más'}
                  </button>
                  <svg 
                    className={`svg transition-transform duration-300 ${activeCard === 1 ? 'rotate-180' : ''}`}
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </div>
                <div 
                  className={`overflow-hidden transition-all duration-500 ${
                    activeCard === 1 ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0'
                  }`}
                >
                  <ul className="space-y-3 text-sm text-slate-300">
                    <li className="flex items-start gap-2">
                      <span className="text-[#135bec] mt-1">•</span>
                      <span>Cumplimiento, documentación y governance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#135bec] mt-1">•</span>
                      <span>Perfiles senior y especializados</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#135bec] mt-1">•</span>
                      <span>Integración con RRHH y proveedores</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .parent {
          width: 100%;
          height: 100%;
          perspective: 1000px;
        }

        .card {
          height: 420px;
          background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
          border-radius: 20px;
          padding: 2rem;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: all 0.5s cubic-bezier(0.23, 1, 0.320, 1);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
        }

        .card:hover {
          transform: translateY(-10px);
          box-shadow: 0 30px 70px rgba(19, 91, 236, 0.3);
        }

        .logo {
          position: relative;
          width: 80px;
          height: 80px;
          margin-bottom: 1.5rem;
        }

        .circle {
          position: absolute;
          border-radius: 50%;
          transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
        }

        .circle1 {
          width: 80px;
          height: 80px;
          background: rgba(19, 91, 236, 0.1);
          top: 0;
          left: 0;
        }

        .circle2 {
          width: 70px;
          height: 70px;
          background: rgba(19, 91, 236, 0.2);
          top: 5px;
          left: 5px;
        }

        .circle3 {
          width: 60px;
          height: 60px;
          background: rgba(19, 91, 236, 0.3);
          top: 10px;
          left: 10px;
        }

        .circle4 {
          width: 50px;
          height: 50px;
          background: rgba(19, 91, 236, 0.5);
          top: 15px;
          left: 15px;
        }

        .circle5 {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #135bec 0%, #0a3d9f 100%);
          top: 20px;
          left: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .card:hover .circle1 { transform: scale(1.1); }
        .card:hover .circle2 { transform: scale(1.15); }
        .card:hover .circle3 { transform: scale(1.2); }
        .card:hover .circle4 { transform: scale(1.25); }
        .card:hover .circle5 { transform: scale(1.3) rotate(10deg); }

        .glass {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          pointer-events: none;
        }

        .content {
          position: relative;
          z-index: 1;
          flex: 1;
        }

        .title {
          display: block;
          font-size: 1.5rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 0.75rem;
        }

        .text {
          display: flex;
          font-size: 0.95rem;
          color: #94a3b8;
          line-height: 1.6;
        }

        .bottom {
          position: relative;
          z-index: 1;
        }

        .view-more {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 1.25rem;
          background: rgba(19, 91, 236, 0.1);
          border-radius: 12px;
          transition: all 0.3s ease;
        }

        .view-more:hover {
          background: rgba(19, 91, 236, 0.2);
        }

        .view-more-button {
          background: none;
          border: none;
          color: #135bec;
          font-weight: 600;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .view-more-button:hover {
          color: #60a5fa;
        }

        .view-more .svg {
          width: 20px;
          height: 20px;
          stroke: #135bec;
          fill: none;
          stroke-width: 2;
        }


        @media (max-width: 768px) {
          .card {
            height: auto;
            min-height: 380px;
          }
        }
      `}</style>
    </section>
  );
};

export default HighLevelConsulting;
