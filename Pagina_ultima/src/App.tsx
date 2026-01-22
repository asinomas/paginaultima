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
        <Hero />
        <Logos />
        <About />
        <Stats />
        <Services />
      </main>
      <Footer />
    </div>
  );
}

export default App;
