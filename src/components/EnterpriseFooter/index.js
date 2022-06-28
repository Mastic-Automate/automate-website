import React from 'react'
import enterpriseLogo from '../../assets/img/logo-mastic-removedBG.png';
import { FooterWrapper,
        Container,
        OurPriorities, 
        BGGreen, 
        Title, 
        Projects, 
        LinksWrapper,
        Project, 
        FastLinks, } from './styles';


export default function EnterpriseFooter() {
    return (
        <FooterWrapper className='enterprise-footer'>
            <BGGreen></BGGreen>
            <Container>
                <OurPriorities className='our-priorities'>
                        <Title className='title'>
                            <img src={ enterpriseLogo } alt='Logo da Mastic' />
                            <h2>Nossas Prioridades</h2>
                        </Title>
                        
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                </OurPriorities>
                <LinksWrapper>
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
                </LinksWrapper>
                
            </Container>
            
        </FooterWrapper>
    )
}