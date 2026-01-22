import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Logos from './components/Logos';
import About from './components/About';
import Stats from './components/Stats';
import Services from './components/Services';
import Footer from './components/Footer';

// Página Principal: Hero de alto impacto
const Home = () => (
  <div className="animate-in fade-in duration-700">
    <Hero />
  </div>
);

// Página Nosotros: Información corporativa y métricas
const NosotrosPage = () => (
  <div className="animate-in fade-in duration-700">
    <About />
    <Stats />
  </div>
);

// Página Servicios: Catálogo de soluciones
const ServiciosPage = () => (
  <div className="animate-in fade-in duration-700">
    <Services />
  </div>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar />
        
        {/* El flex-grow asegura que el contenido empuje al footer hacia abajo */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nosotros" element={<NosotrosPage />} />
            <Route path="/servicios" element={<ServiciosPage />} />
          </Routes>
          
          {/* Franja de logos: Estará presente antes del footer en todas las páginas */}
          <div className="border-t border-slate-100 bg-white">
            <Logos />
          </div>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
