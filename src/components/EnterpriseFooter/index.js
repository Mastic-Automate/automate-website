import React from 'react'
import enterpriseLogo from '../../img/logo-mastic-removedBG.png';
import './EnterpriseFooter.css'

import { FooterWrapper, Container, OurPriorities, ContainerPriorities, BGGreen } from './styles';

export default function EnterpriseFooter() {
    return (
        <FooterWrapper className='enterprise-footer'>
            <BGGreen></BGGreen>
            <Container>
                <OurPriorities className='our-priorities'>
                    <ContainerPriorities>
                        <div className='title'>
                            <img src={ enterpriseLogo } alt='Logo da Mastic' />
                            <h2>Nossas Prioridades</h2>
                        </div>
                        
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    </ContainerPriorities>
                </OurPriorities>
                <div className='projects'>
                    <h2>Projetos</h2>
                    <div className='project'>
                        <div className='img'></div>
                        <h3>AUTOMATE</h3>
                    </div>
                    <div className='project'>
                        <div className='img'></div>
                        <h3>AUTOMATE</h3>
                    </div>
                    <div className='project'>
                        <div className='img'></div>
                        <h3>AUTOMATE</h3>
                    </div>                
                </div>
                <div className='fast-links'>
                    <h2>Links Rápidos</h2>
                    <ul>
                        <li>HOME</li>
                        <li>Produtos</li>
                        <li>sobre nós</li>
                    </ul>
                </div>
            </Container>
            
        </FooterWrapper>
    )
}