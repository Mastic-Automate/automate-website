import React from 'react';
import './ProblematicSection.css';
import enterpriseLogo from '../../img/enterprise-logo.png';

function ProblematicSection() {
    return (
        <section className='problematic-wrapper'>
            <div className='card'>
                <div className='card-container'>
                    <div className='card-header'>
                        <img src={ enterpriseLogo } class="logo-mastic"></img>
                        <div className=''>Nossas prioridades</div>
                    </div>
                    <div className='card-text'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    </div>
                    <button className='card-button'>Saiba mais</button>
                </div>
            </div>

            <div className='card' id='meioAmbiente'>
                <div className='card-title bg-gray'>
                    <h2 className='title'>Meio Ambiente</h2>
                </div>
            </div>
            
            <div className='card' id='periferias'>
                <div className='card-title bg-green'>
                <h2 className='title'>Periferias</h2>
                </div>
            </div>
    </section>
    )
    
}

export default ProblematicSection;