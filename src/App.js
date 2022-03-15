import Header from './components/Header'
import Hero from './components/Hero';
import RegularSection from './components/RegularSection';
import { Image } from 'react';
import './App.css';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <Hero imgSide="right" src="/img/woman-planting.svg" alt="Mulher plantando" title="Automate" text={<p>Cultivando possibilidades</p>} />

      <RegularSection imgSide="right" src="/img/config-screen.png" alt="imagem do celular na tela de sincronização" title="Fácil de configurar" text={<p>Automatize o crescimento da sua planta</p>} />

      <RegularSection imgSide="left" src="/img/monitoring-screen.png" alt="imagem do celular na tela de monitoramento" title="Cuidados especiais" text={<p>Monitore sua planta constantemente</p>} />

      <Footer />
    </div>
  );
}

export default App;
