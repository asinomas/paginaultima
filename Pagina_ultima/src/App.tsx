import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Logos from './components/Logos';
import Stats from './components/Stats';
import About from './components/About';
import Services from './components/Services';
import AIConsultant from './components/AIConsultant'; 
import Footer from './components/Footer';

function App() {
  return (
    /* Contenedor maestro con fondo blanco y texto oscuro por defecto */
    <div className="min-h-screen w-full bg-white text-slate-900 selection:bg-blue-100">
      
      {/* Navegación superior */}
      <Navbar />

      <main>
        {/* Sección de impacto principal */}
        <Hero />

        {/* Carrusel de confianza / marcas */}
        <div className="bg-gray-50 border-y border-gray-100">
          <Logos />
        </div>

        {/* Información corporativa */}
        <About />

        {/* Cifras y métricas clave */}
        <Stats />

        {/* Catálogo de servicios especializados */}
        <Services />

        {/* Consultor IA integrado con fondo sutil para resaltar */}
        <section id="ai-consultant" className="py-24 bg-slate-50 border-t border-gray-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Consultor IA BlackTI
                </h2>
                <p className="text-lg text-gray-600">
                  Resuelve tus dudas tecnológicas en tiempo real con nuestra inteligencia especializada.
                </p>
              </div>
              
              {/* Contenedor del Chat con sombra para darle profundidad */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                <AIConsultant />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Pie de página */}
      <Footer />
      
    </div>
  );
}

export default App;
