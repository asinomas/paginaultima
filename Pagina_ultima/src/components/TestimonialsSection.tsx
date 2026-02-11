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
  },
   {
    name: "Andrea Fuentes",
    role: "Product Manager",
    company: "SaaS Growth",
    quote: "Trabajar con BlackTI fue clave para escalar nuestro producto. Entendieron el negocio y entregaron soluciones técnicas reales.",
    avatar: "https://ui-avatars.com/api/?name=Andrea+Fuentes&background=6366f1&color=fff",
    rating: 5
  },
  {
    name: "Javier Rojas",
    role: "Head of Engineering",
    company: "E-Commerce LATAM",
    quote: "El equipo se integró como parte de la compañía. Velocidad, calidad y comunicación constante. Difícil de encontrar hoy.",
    avatar: "https://ui-avatars.com/api/?name=Javier+Rojas&background=0ea5e9&color=fff",
    rating: 5
  },
  {
    name: "Valentina Pérez",
    role: "COO",
    company: "HealthTech Solutions",
    quote: "Gracias a BlackTI optimizamos procesos críticos y reducimos tiempos de entrega. Su enfoque estratégico marcó la diferencia.",
    avatar: "https://ui-avatars.com/api/?name=Valentina+Perez&background=ec4899&color=fff",
    rating: 5
  },
  {
    name: "Daniel Ortega",
    role: "Founder",
    company: "AI Startup",
    quote: "Nos ayudaron desde la arquitectura hasta el equipo técnico. Sin ellos no habríamos llegado al mercado tan rápido.",
    avatar: "https://ui-avatars.com/api/?name=Daniel+Ortega&background=22c55e&color=fff",
    rating: 5
  }
];

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex(prev =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex(prev =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="relative py-16 overflow-hidden border-y border-white/5">
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-[1px] grayscale brightness-70 contrast-120"
        style={{ backgroundImage: "url('/images/testimonials.webp')" }}
      >
        <div className="absolute inset-0 bg-gray-900/50" />
      </div>

      {/* Contenido */}
      <div className="relative z-10 container mx-auto max-w-6xl px-6">
        <div className="relative h-[36vh]">
          
          {/* Botón anterior */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full border-2 border-white/50 hover:border-white hover:bg-white/10 transition-all flex items-center justify-center"
            aria-label="Testimonio anterior"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Testimonio */}
          <div className="h-full flex items-center justify-center">
            <div className="max-w-3xl text-left px-20">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                {currentTestimonial.name}
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                {currentTestimonial.role} en {currentTestimonial.company}
              </p>

              <div className="relative mb-8 flex items-start gap-4">
                <div className="text-6xl md:text-7xl text-white/70 font-serif leading-none pt-2">
                  "
                </div>
                <blockquote className="text-lg md:text-xl text-white leading-relaxed">
                  {currentTestimonial.quote}
                </blockquote>
              </div>
            </div>
          </div>

          {/* Botón siguiente */}
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full border-2 border-white/50 hover:border-white hover:bg-white/10 transition-all flex items-center justify-center"
            aria-label="Siguiente testimonio"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Indicadores + CTA */}
        <div className="text-center mt-10">
          <div className="flex gap-3 justify-center mb-6">
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

          <p className="text-white/80 text-base mb-4">
            ¿Quieres ser parte de nuestros casos de éxito?
          </p>
          <a
            href="#contacto"
            className="inline-block border-2 border-white/50 hover:border-white bg-white/10 hover:bg-white/20 text-white px-7 py-3 rounded-full font-bold transition-all"
          >
            Solicitar Consultoría
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
