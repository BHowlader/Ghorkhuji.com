import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

import BackgroundAnimation from './components/BackgroundAnimation';

function App() {
  return (
    <div className="App">
      <BackgroundAnimation />
      <Navbar />
      <Hero />
      <Services />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
