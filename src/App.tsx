import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Approach from './components/Approach';
import Solutions from './components/Solutions';
import Gallery from './components/Gallery';
import Location from './components/Location';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Approach />
        <Solutions />
        <Gallery />
        <Location />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
