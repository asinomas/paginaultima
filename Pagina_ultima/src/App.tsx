import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Logos from './components/Logos';
import About from './components/About';
import Stats from './components/Stats';
import Services from './components/Services';
import Footer from './components/Footer';

// Página Principal: Hero + Logos corporativos
const Home = () => (
  <>
    <Hero />
    <Logos />
  </>
);

// Página Nosotros: Historia + Estadísticas
const NosotrosPage = () => (
  <>
    <About />
    <Stats />
  </>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <Routes>
            {/* Ruta Raíz */}
            <Route path="/" element={<Home />} />
            
            {/* Ruta de Nosotros */}
            <Route path="/nosotros" element={<NosotrosPage />} />
            
            {/* Ruta de Servicios */}
            <Route path="/servicios" element={<Services />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
