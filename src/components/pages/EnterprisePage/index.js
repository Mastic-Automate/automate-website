import './EnterprisePage.css'
import React from "react";
import StickyHeader from '../../StickyHeader';
import Hero from '../../Hero';
import Problematic from '../../Problematic';
import EnterpriseFooter from '../../EnterpriseFooter';
import ProjectsSection from '../../ProjectsSection';

export default function EnterprisePage() {
    return (
        <div id="enterprise-container">
            <StickyHeader logo={<h1>MASTIC</h1>} links={[{link: '/mastic', linkName:'HOME'}, {link: '/', linkName:'PRODUTOS'}, {link: '#about-us', linkName:'SOBRE NÓS'}]} />

            <Hero title={
                <div className='hero-text' style={{
                    resizeMode: 'cover'
                }}>
                    <div className='letter m'>M</div>
                    <div className='letter a'>A</div>
                    <div className='letter s'>S</div>
                    <img src='./img/tree.png' alt='Árvore similar a aroeira' />
                    <div className='letter t'>T</div>
                    <div className='letter i'>I</div>
                    <div className='letter c'>C</div>
                </div>} />

            <Problematic />
            <ProjectsSection />
            
            <EnterpriseFooter />

        </div>
    )
}