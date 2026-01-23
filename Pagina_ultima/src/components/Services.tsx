import React from 'react';
import { Shield, Layout, Target } from 'lucide-react';

const services = [
  "Servicio Head Hunting",
  "Servicio Staffing",
  "Servicio Digital Factoring",
  "Servicio Mesa de Ayuda"
];

const profiles = [
  "Líder Técnico", "Dev IOS", "Dev Android", "Dev Java", "Scrum Master",
  "BackEnd", "FrontEnd", "Fullstack", "Devops", "UX/UI", "QA",
  "Python", "CiberSeguridad", "Mesa de Ayuda"
];

const HighLevelConsulting: React.FC = () => {
  return (
    <section className="bg-slate-50 py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* FILA SUPERIOR: Título + Perfiles (Tu zona roja) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
          
          {/* Lado Izquierdo: Título Principal */}
          <div className="max-w-xl">
            <span className="text-[10px] font-bold tracking-[0.4em] text-[#135bec] uppercase mb-6 block">
              Excelencia Operativa
            </span>
            <h3 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-8 tracking-tight leading-[1.1]">
              Consultoría de <span className="text-[#135bec] italic">Alto Nivel</span>
            </h3>
            <div className="w-16 h-1 bg-[#135bec] mb-8"></div>
            <p className="text-lg text-slate-600 leading-relaxed">
              En BlackTI conectamos el mejor talento técnico con los desafíos más complejos de la industria, asegurando una ejecución impecable en cada proyecto.
            </p>
          </div>

          {/* Lado Derecho: Especialización y Perfiles (Zona Roja) */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <div className="space-y-10">
              <section>
                <h4 className="text-[10px] font-bold tracking-[0.3em] text-slate-400 uppercase mb-6 border-b border-slate-100 pb-2">
                  Modelo de Colaboración
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {services.map((service, index) => (
                    <li key={index} className="flex items-center space-x-3 text-slate-700 border-l-2 border-[#135bec] pl-4 py-1 hover:bg-slate-50 transition-colors">
                      <span className="text-sm font-medium">{service}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h4 className="text-[10px] font-bold tracking-[0.3em] text-slate-400 uppercase mb-6 border-b border-slate-100 pb-2">
                  Perfiles Especializados
                </h4>
                <div className="flex flex-wrap gap-2">
                  {profiles.map((profile, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1.5 bg-slate-50 text-slate-600 text-[11px] font-medium rounded-md border border-slate-100 hover:border-[#135bec] hover:text-[#135bec] transition-all cursor-default"
                    >
                      {profile}
                    </span>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>

        {/* FILA INFERIOR: Las 3 Tarjetas de Servicios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Tarjeta 1 */}
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group">
            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#135bec] transition-colors">
              <Target className="text-[#135bec] group-hover:text-white" size={28} />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-4">Consultoría Estratégica</h4>
            <p className="text-slate-500 leading-relaxed text-sm">
              Alineamos la tecnología con los objetivos de negocio para maximizar el retorno de inversión y la eficiencia.
            </p>
          </div>

          {/* Tarjeta 2 */}
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group">
            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#135bec] transition-colors">
              <Layout className="text-[#135bec] group-hover:text-white" size={28} />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-4">Arquitectura de Sistemas</h4>
            <p className="text-slate-500 leading-relaxed text-sm">
              Diseñamos infraestructuras robustas, escalables y preparadas para el crecimiento continuo de su empresa.
            </p>
          </div>

          {/* Tarjeta 3 */}
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group">
            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#135bec] transition-colors">
              <Shield className="text-[#135bec] group-hover:text-white" size={28} />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-4">Seguridad TI</h4>
            <p className="text-slate-500 leading-relaxed text-sm">
              Protegemos sus activos digitales con protocolos de vanguardia y análisis proactivo de vulnerabilidades.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HighLevelConsulting;
