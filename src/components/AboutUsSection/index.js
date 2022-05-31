import React from 'react'
import enterpriseLogo from '../../img/logo-mastic-removedBG.png';
import './AboutUs.css'

export default function AboutUs() {
    return (
        <section id='about-us'>
            <div className='about-us-header'>
                <div className='title'>
                    <img src={ enterpriseLogo } alt='Logo Mastic' />
                    <h2>Uma empresa ecológica</h2>
                </div>
            </div>
            <div className='about-us-details'>
                <div className='container-details'>
                    <div className='detail our-mission'>
                        <h2>Nossa MIssão</h2>
                        <p>Buscar melhorar a autonomia agrônoma das periferias, podendo ter sua própria horta, para uso próprio ajudando na sua alimentação saudável ou para vender em nosso site, gerando assim uma "renda extra".</p>
                    </div>
                    <div className='detail our-values'>
                        <h2>Nossos Valores</h2>
                        <p>Valorizamos um ambiente de trabalho saudável e o bem estar de nossos funcionários, o trabalho em equipe é essencial e todos somos pessoas antes de empregados.</p>
                    </div>
                    <div className='detail about-us-description'>
                        <h2>Sobre nós</h2>
                        <p>A Mastic é uma empresa criada por um grupo de 8 estudantes da ETEC Cidade Tiradentes, foi criada com o intuito de complementar nosso TCC do curso de Desenvolvimento de Sistemas, porém visando uma oportunidade de crescer dentro desse mercado de agricultura e mecatronica sustentável e econômico.</p>
                    </div>
                    
                    
                </div>
            </div>
        </section>
    )
}