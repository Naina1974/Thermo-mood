import { Hero } from './components/Hero';
import { Simulator } from './components/Simulator';
import { Documentation } from './components/Documentation';
import { About } from './components/About';
import { DataLogger } from './components/DataLogger';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />

      <div id="simulator">
        <Simulator />
      </div>

      <div id="documentation">
        <Documentation />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="data">
        <DataLogger />
      </div>

      <Footer />
    </div>
  );
}

export default App;
