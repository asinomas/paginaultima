import React, { useState } from 'react';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Carlos Méndez",
    role: "CTO",
    company: "TechStartup SpA",
    quote: "BlackTI transformó nuestra infraestructura cloud. Su equipo es altamente profesional y los resultados fueron inmediatos. Recomendado 100%.",
    avatar: "https://ui-avatars.com/api/?name=Carlos+Mendez&background=135bec&color=fff",
    rating: 5
  },
  {
    name: "María González",
    role: "Gerente TI",
    company: "Retail Corp",
    quote: "El staffing de desarrolladores que nos proporcionaron superó nuestras expectativas. Profesionales capacitados que se integraron perfectamente.",
    avatar: "https://ui-avatars.com/api/?name=Maria+Gonzalez&background=10b981&color=fff",
    rating: 5
  },
  {
    name: "Roberto Silva",
    role: "CEO",
    company: "FinTech Solutions",
    quote: "Su consultoría en ciberseguridad nos ayudó a certificar ISO 27001. Excelente conocimiento técnico y atención personalizada.",
    avatar: "https://ui-avatars.com/api/?name=Roberto+Silva&background=f59e0b&color=fff",
    rating: 5
  }
];

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Imagen de fondo */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('/images/testimonials.webp')",
        }}
      >
        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Contenido */}
      <div className="relative z-10 container mx-auto max-w-6xl px-6 py-24">
        <div className="relative flex items-center justify-center h-[50vh]">
        
          
          {/* Botón anterior - lado izquierdo */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 w-14 h-14 rounded-full border-2 border-white/50 hover:border-white hover:bg-white/10 transition-all flex items-center justify-center group"
            aria-label="Testimonio anterior"
          >
            <svg 
              className="w-6 h-6 text-white" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M15 19l-7-7 7-7" 
              />
            </svg>
          </button>

          {/* Contenido del testimonio - alineado a la izquierda */}
          <div className="max-w-3xl text-left px-20">
            {/* Nombre y rol */}
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              {currentTestimonial.name}
            </h2>
            <p className="text-lg text-gray-300 mb-10">
              {currentTestimonial.role} en {currentTestimonial.company}
            </p>

            {/* Quote con comillas grandes */}
            <div className="relative mb-10 flex items-start gap-4">
              <div className="text-6xl md:text-7xl text-white/70 font-serif leading-none pt-2">
                "
              </div>
              <blockquote className="text-lg md:text-xl text-white leading-relaxed">
                {currentTestimonial.quote}
              </blockquote>
            </div>
          </div>

          {/* Botón siguiente - lado derecho */}
          <button
            onClick={nextTestimonial}
            className="absolute right-0 w-14 h-14 rounded-full border-2 border-white/50 hover:border-white hover:bg-white/10 transition-all flex items-center justify-center group"
            aria-label="Siguiente testimonio"
          >
            <svg 
              className="w-6 h-6 text-white" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 5l7 7-7 7" 
              />
            </svg>
          </button>
        </div>

        {/* Indicadores y CTA - abajo */}
        <div className="text-center mt-12">
          {/* Indicadores de puntos */}
          <div className="flex gap-3 justify-center mb-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'bg-white w-8' 
                    : 'bg-white/40 hover:bg-white/60'
                }`}
                aria-label={`Ir al testimonio ${index + 1}`}
              />
            ))}
          </div>

          {/* CTA */}
          <div>
            <p className="text-white/80 mb-6">¿Quieres ser parte de nuestros casos de éxito?</p>
            <a 
              href="#contacto"
              className="inline-block border-2 border-white/50 hover:border-white bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-bold transition-all"
            >
              Solicitar Consultoría
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
