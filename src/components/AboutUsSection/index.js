import React from 'react'
import enterpriseLogo from '../../img/logo-mastic-removedBG.png';
import './AboutUs.css'

export default function AboutUs() {
    return (
        <section id='about-us'>
            <div className='about-us-header'>
                <img src={ enterpriseLogo } alt='Logo Mastic' />
            </div>
            <div className='about-us-details'>
                <div className='detail about-us-description'>
                    <h2>Sobre nós</h2>
                    

                </div>
                <div className='detail our-values'>
                    <h2>Nossos Valores</h2>
                </div>
                <div className='detail our-mission'>
                    <h2>Nossa MIssão</h2>
                </div>
            </div>
        </section>
    )
}