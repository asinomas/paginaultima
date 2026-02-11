import React, { useState, useEffect, useRef } from 'react';
import { Plus, Minus } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
  const { ref: scrollRef, isVisible } = useScrollAnimation();
  const containerRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqData: FAQItem[] = [
    {
      question: "¿Qué hacemos en BlackTI?",
      answer: "Nuestro servicio es entregar células de trabajo de alto rendimiento listas para producir desde el primer día. Cubrimos todo el espectro: desde el diseño UX/UI y el desarrollo en Java, Python o Mobile, hasta la infraestructura DevOps y el blindaje en Ciberseguridad. Tú pones la visión y nosotros el equipo experto que la hace realidad, sin fricciones y a escala."
    },
    {
      question: "¿Qué diferencia a nuestro Consultorio TI de otras consultoras?",
      answer: "Seleccionamos profesionales validados técnica y funcionalmente, evaluando habilidades blandas, comunicación y adaptación al equipo. Acompañamos al profesional y a la empresa durante toda la asignación, ajustando el perfil según el contexto y objetivos del negocio, reduciendo tiempos de onboarding y rotación."
    },
    {
      question: "¿Qué pasa si el profesional no se adapta a mi empresa?",
      answer: "Realizaremos las gestiones para su remplazo sin costo en las primeras 2 semanas."
    },
    {
      question: "¿Qué hace cada perfil TI y por qué contratarlo a través de BlackTI?", 
      answer: "No solo ofrecemos perfiles tecnológicos. Entregamos profesionales evaluados, acompañados y alineados al negocio, listos para generar impacto real en tu empresa desde el primer día."
    },
    {
      question: "¿Cuánto tiempo toma tener un profesional trabajando?",
      answer: "Dependiendo del rol solicitado entre 48-72 horas desde el primer contacto."
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  // Cierra todas las preguntas si hago click fuera del contenedor
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpenIndex(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <section
      ref={scrollRef}
      className={`bg-white py-24 md:py-32 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8" ref={containerRef}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* LEFT COLUMN - Title and Description */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Preguntas frecuentes
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              ¿No encuentras respuesta a tu pregunta? No te preocupes, nuestro{' '}
              <a href="#contact" className="text-[#135bec] hover:underline font-medium">
                servicio al cliente
              </a>{' '}
              estará encantado de aclarar tus dudas.
            </p>
          </div>

          {/* RIGHT COLUMN - FAQ Items */}
          <div className="space-y-4">
            {faqData.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div key={index} className="border-b border-slate-200 last:border-b-0">
                  <button
                    onClick={() => toggleAccordion(index)}
                    aria-expanded={isOpen}
                    className={`w-full py-6 flex items-start justify-between gap-4 text-left transition-colors duration-200 ${
                      isOpen ? 'text-[#135bec]' : 'text-slate-900 hover:text-[#135bec]'
                    }`}
                  >
                    <span className="text-lg font-semibold">{item.question}</span>
                    <span
                      className={`flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full transition-all duration-300 ${
                        isOpen ? 'bg-[#135bec] rotate-180' : 'bg-slate-100'
                      }`}
                    >
                      {isOpen ? (
                        <Minus className="w-4 h-4 text-white" />
                      ) : (
                        <Plus className="w-4 h-4 text-slate-600" />
                      )}
                    </span>
                  </button>

                  {/* AnimatePresence para que solo una respuesta abierta se vea animada */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: 'easeInOut' }}
                        className="overflow-hidden mt-4 mb-6"
                      >
                        <p className="text-base text-slate-600 leading-relaxed pr-10">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQSection;
