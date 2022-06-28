import React from 'react'
import enterpriseLogo from '../../assets/img/logo-mastic-removedBG.png';
import Carousel from '../Carousel';
import team from '../../assets/data/team.js'

import { AboutUsWrapper,
        AboutUsHeader,
        AboutUsDetails,
        ContainerDetails,
        Detail } from './styles';

export default function AboutUs() {
    return (
        <AboutUsWrapper id='about-us'>
            <AboutUsHeader className='about-us-header'>    
                    <img src={ enterpriseLogo } alt='Logo Mastic' />
                    <h2>Uma empresa ecológica</h2>
            </AboutUsHeader>

            <Carousel data={team} time={5000} />

            <AboutUsDetails className='about-us-details'>
                <ContainerDetails className='container-details'>
                    <Detail className='detail our-mission'>
                        <h2>Nossa MIssão</h2>
                        <p>Buscar melhorar a autonomia agrônoma das periferias, podendo ter sua própria horta, para uso próprio ajudando na sua alimentação saudável ou para vender em nosso site, gerando assim uma "renda extra".</p>
                    </Detail>
                    <Detail className='detail our-values'>
                        <h2>Nossos Valores</h2>
                        <p>Valorizamos um ambiente de trabalho saudável e o bem estar de nossos funcionários, o trabalho em equipe é essencial e todos somos pessoas antes de empregados.</p>
                    </Detail>
                    <Detail className='detail about-us-description'>
                        <h2>Sobre nós</h2>
                        <p>A Mastic é uma empresa criada por um grupo de 8 estudantes da ETEC Cidade Tiradentes, foi criada com o intuito de complementar nosso TCC do curso de Desenvolvimento de Sistemas, porém visando uma oportunidade de crescer dentro desse mercado de agricultura e mecatronica sustentável e econômico.</p>
                    </Detail>
                    
                    
                </ContainerDetails>
            </AboutUsDetails>
        
        </AboutUsWrapper>
    )
}