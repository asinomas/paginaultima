import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqData: FAQItem[] = [
    {
      question: "¿Qué hace cada perfil TI y por qué contratarlo a través de nuestro Consultorio TI?",
      answer: "No solo ofrecemos perfiles tecnológicos. Entregamos profesionales evaluados, acompañados y alineados al negocio, listos para generar impacto real en tu empresa desde el primer día."
    },
    {
      question: "¿Qué diferencia a nuestro Consultorio TI de otras consultoras?",
      answer: "Seleccionamos profesionales validados técnica y funcionalmente • Evaluamos habilidades blandas, comunicación y adaptación al equipo • Acompañamos al profesional y a la empresa durante toda la asignación • Ajustamos el perfil según el contexto y objetivos del negocio • Reducimos tiempos de onboarding y rotación"
    },
    {
      question: "¿Qué aporta un Líder Técnico de nuestro Consultorio TI?",
      answer: "Además de definir arquitectura y liderar decisiones técnicas, es un perfil con visión de negocio, capaz de alinear tecnología, plazos y objetivos empresariales."
    },
    {
      question: "¿Qué aporta un Scrum Master de nuestro Consultorio TI?",
      answer: "No solo aplica Scrum: mejora la madurez ágil del equipo, facilita la comunicación con stakeholders y acelera la entrega de valor."
    },
    {
      question: "¿Qué aporta un Desarrollador Android o iOS?",
      answer: "Nuestros desarrolladores mobile están enfocados en productos reales, con experiencia en rendimiento, seguridad y experiencia de usuario en entornos productivos."
    },
    {
      question: "¿Qué aporta un Desarrollador Java?",
      answer: "Aporta estabilidad, escalabilidad y buenas prácticas en sistemas empresariales críticos, con experiencia en entornos corporativos."
    },
    {
      question: "¿Qué aporta un Desarrollador Backend?",
      answer: "No solo desarrolla APIs: entiende el negocio, prioriza seguridad, rendimiento y escalabilidad desde el diseño."
    },
    {
      question: "¿Qué aporta un Desarrollador Frontend?",
      answer: "Más que interfaces atractivas, entrega experiencias de usuario funcionales, alineadas a la identidad de la empresa."
    },
    {
      question: "¿Qué aporta un Desarrollador Fullstack?",
      answer: "Perfil integral que reduce dependencias, acelera desarrollos y mantiene coherencia técnica en todo el producto."
    },
    {
      question: "¿Qué aporta un DevOps de nuestro Consultorio TI?",
      answer: "Optimiza infraestructura y procesos, reduce fallas en producción y mejora la continuidad operativa mediante automatización real."
    },
    {
      question: "¿Qué aporta un UX/UI Designer?",
      answer: "Diseña pensando en el usuario final y en los objetivos del negocio, aumentando adopción y satisfacción del cliente."
    },
    {
      question: "¿Qué aporta un Especialista en Ciberseguridad?",
      answer: "Trabaja de forma preventiva, no reactiva, protegiendo los activos digitales y la reputación de la empresa."
    },
    {
      question: "¿Qué aporta nuestra Mesa de Ayuda / Soporte TI?",
      answer: "Atención cercana, tiempos de respuesta definidos y continuidad operativa sin fricción para el usuario final."
    },
    {
      question: "¿Qué aporta un Desarrollador Python?",
      answer: "Capaz de automatizar procesos, analizar datos y desarrollar soluciones inteligentes que generan eficiencia y ahorro."
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      ref={ref}
      className={`bg-white py-24 md:py-32 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* LEFT COLUMN - Title and Description */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Frequently asked questions
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Can't find the answer you're looking for? Reach out to our{' '}
              <a href="#contact" className="text-[#135bec] hover:underline font-medium">
                customer support
              </a>{' '}
              team.
            </p>
          </div>

          {/* RIGHT COLUMN - FAQ Items */}
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div
                key={index}
                className="border-b border-slate-200 last:border-b-0"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full py-6 flex items-start justify-between gap-4 text-left hover:text-[#135bec] transition-colors duration-200 group"
                >
                  <span className="text-lg font-semibold text-slate-900 group-hover:text-[#135bec] transition-colors duration-200">
                    {item.question}
                  </span>
                  <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-slate-100 group-hover:bg-[#135bec] transition-all duration-200">
                    {openIndex === index ? (
                      <Minus className="w-4 h-4 text-slate-600 group-hover:text-white transition-colors duration-200" />
                    ) : (
                      <Plus className="w-4 h-4 text-slate-600 group-hover:text-white transition-colors duration-200" />
                    )}
                  </span>
                </button>
                
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-96 opacity-100 mb-6' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-base text-slate-600 leading-relaxed pr-10">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
