import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Logos from './components/Logos';
import About from './components/About';
import Stats from './components/Stats';
import Services from './components/Services';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        {/* Usamos IDs para que el menú pueda saltar a cada sección */}
        <section id="inicio">
          <Hero />
        </section>

        <section id="nosotros" className="scroll-mt-20">
          <About />
          <Stats />
        </section>

        <section id="servicios" className="scroll-mt-20">
          <Services />
        </section>
        
        {/* Aquí es donde iría la IA en el futuro, por ahora solo el ancla de contacto */}
        <section id="contacto" className="scroll-mt-20">
          <Logos />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
