import './LandingPage.css'
import React from "react";
import AutomateFooter from "../AutomateFooter";
import Hero from "../Hero";
import RegularSection from "../RegularSection";
import StickyHeader from "../StickyHeader";

function LandingPage() {
    return (
        <div id="landing-page">
            <StickyHeader logo={<img src="./img/tomate-icon.png" alt="Logo da empresa" />} links={[{link: '/', linkName:'Nosso Produto'}, {link: '/mastic', linkName:'Sobre nós'}]} resizeWidth={500} />

            <Hero imgSide="right" src="/img/woman-planting.svg" alt="Mulher plantando" title="Automate" text={<p>Cultivando possibilidades</p>} />

            <RegularSection imgSide="right" src="/img/config-screen.png" alt="imagem do celular na tela de sincronização" title="Fácil de configurar" text={<p>Automatize o crescimento da sua planta</p>} />

            <RegularSection imgSide="left" src="/img/monitoring-screen.png" alt="imagem do celular na tela de monitoramento" title="Cuidados especiais" text={<p>Monitore sua planta constantemente</p>} />

            <AutomateFooter />
        </div>
    )
}

export default LandingPage;