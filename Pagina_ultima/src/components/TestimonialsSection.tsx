import React from 'react';

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
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto max-w-7xl px-6">
        <h2 
          id="testimonials-heading" 
          className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-900"
        >
          Lo que dicen nuestros clientes
        </h2>
        <p className="text-center text-slate-600 mb-16 max-w-2xl mx-auto">
          Empresas de todos los tamaños confían en nosotros para sus proyectos de transformación digital
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <article 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100"
            >
              {/* Header con avatar y nombre */}
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={testimonial.avatar} 
                  alt="" 
                  className="w-16 h-16 rounded-full"
                  width="64"
                  height="64"
                />
                <div>
                  <p className="font-bold text-slate-900 text-lg">{testimonial.name}</p>
                  <p className="text-sm text-slate-600">
                    {testimonial.role} en {testimonial.company}
                  </p>
                </div>
              </div>
              
              {/* Quote */}
              <blockquote className="text-slate-700 italic mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              
              {/* Rating */}
              <div 
                className="flex gap-1" 
                role="img" 
                aria-label={`Valoración: ${testimonial.rating} de 5 estrellas`}
              >
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i} 
                    className="w-5 h-5 text-yellow-400" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* CTA adicional */}
        <div className="text-center mt-16">
          <p className="text-slate-600 mb-6">¿Quieres ser parte de nuestros casos de éxito?</p>
          <a 
            href="#contacto"
            className="inline-block bg-[#135bec] text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl"
          >
            Solicitar Consultoría Gratuita
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
