import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Logos from './components/Logos';
import About from './components/About';
import Stats from './components/Stats';
import Services from './components/Services';
import Footer from './components/Footer';

// Página Principal: Ahora solo tiene el Hero
const Home = () => (
  <>
    <Hero />
  </>
);

// Página Nosotros: Sobre la empresa y estadísticas
const NosotrosPage = () => (
  <>
    <About />
    <Stats />
  </>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white selection:bg-blue-100 selection:text-blue-900">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nosotros" element={<NosotrosPage />} />
            <Route path="/servicios" element={<Services />} />
          </Routes>
          
          {/* Los logos ahora están aquí: se verán en todas las páginas justo antes del footer */}
          <Logos />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
