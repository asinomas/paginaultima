function App() {
  return (
    <div className="bg-white text-slate-900 min-h-screen"> 
      {/* El resto de tus componentes */}

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Logos from './components/Logos';
import Stats from './components/Stats';
import About from './components/About';
import Services from './components/Services';
import AIConsultant from './components/AIConsultant'; // Tu nueva IA
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Logos />
      
      <main>
        <About />
        <Stats />
        <Services />
        
        {/* Sección destacada para tu Consultor IA */}
        <section id="ai-consultant" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-10">Consultor IA BlackTI</h2>
            <AIConsultant />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
