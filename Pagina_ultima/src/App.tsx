import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Logos, { logos } from './components/Logos';
import Stats from './components/Stats';
import About from './components/About';
import Services from './components/Services';
import AIConsultant from './components/AIConsultant'; 
import Footer from './components/Footer';
import LogoTicker from './components/LogoTicker';

function App() {
  return (
    <div className="min-h-screen w-full bg-white text-slate-900">
      <Navbar />

      <main>
        {/* Hero */}
        <section id="inicio">
          <Hero />
        </section>

        {/* Logos originales */}
        <Logos />

        {/* Sección Nosotros */}
        <section id="nosotros" className="scroll-mt-20">
          <About />
          <Stats />
        </section>

        {/* Sección Servicios */}
        <section id="servicios" className="scroll-mt-20">
          <Services />
        </section>

        {/* Sección Contacto / IA */}
        <section id="contacto" className="py-24 bg-slate-50 scroll-mt-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-10">Contacto e IA</h2>
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100">
                <AIConsultant />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Ticker corporativo gris antes del Footer */}
      <LogoTicker logos={logos} />

      <Footer />
    </div>
  );
}

export default App;
