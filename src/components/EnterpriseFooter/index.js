import React from 'react'
import enterpriseLogo from '../../img/logo-mastic-removedBG.png';

import { FooterWrapper, Container, OurPriorities, ContainerPriorities, BGGreen, Title, Projects, Project, FastLinks } from './styles';

export default function EnterpriseFooter() {
    return (
        <FooterWrapper className='enterprise-footer'>
            <BGGreen></BGGreen>
            <Container>
                <OurPriorities className='our-priorities'>
                    <ContainerPriorities>
                        <Title className='title'>
                            <img src={ enterpriseLogo } alt='Logo da Mastic' />
                            <h2>Nossas Prioridades</h2>
                        </Title>
                        
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    </ContainerPriorities>
                </OurPriorities>
                <Projects className='projects'>
                    <h2>Projetos</h2>
                    <Project className='project'>
                        <div className='img'></div>
                        <h3>AUTOMATE</h3>
                    </Project>
                    <Project className='project'>
                        <div className='img'></div>
                        <h3>AUTOMATE</h3>
                    </Project>
                    <Project className='project'>
                        <div className='img'></div>
                        <h3>AUTOMATE</h3>
                    </Project>                
                </Projects>
                <FastLinks className='fast-links'>
                    <h2>Links Rápidos</h2>
                    <ul>
                        <li>HOME</li>
                        <li>Produtos</li>
                        <li>sobre nós</li>
                    </ul>
                </FastLinks>
            </Container>
            
        </FooterWrapper>
    )
}