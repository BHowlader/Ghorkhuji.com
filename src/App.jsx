import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import AppShowcase from './components/AppShowcase';
import Team from './components/Team';
import GrowthTeam from './components/GrowthTeam';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackgroundAnimation from './components/BackgroundAnimation';

function App() {
  return (
    <div className="App">
      <BackgroundAnimation />
      <Navbar />
      <main className="page-shell">
        <Hero />
        <Services />
        <AppShowcase />
        <Team />
        <GrowthTeam />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
