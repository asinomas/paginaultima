import Navbar from './components/Navbar'; // Ajusta al nombre de tu archivo
import Hero from './components/Hero';     // Ajusta al nombre de tu archivo
import AIConsultant from './components/AIConsultant';
import Footer from './components/Footer'; // Ajusta al nombre de tu archivo
// Importa aquí el resto de tus componentes (.tsx)

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        
        {/* Aquí insertamos el Consultor de IA dentro de tu diseño */}
        <section id="ai-consultor" style={{ padding: '40px 0' }}>
          <AIConsultant />
        </section>

        {/* Aquí pones el resto de tus componentes */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
