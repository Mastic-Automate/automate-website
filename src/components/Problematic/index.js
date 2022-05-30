import React from 'react';
import './Problematic.css';
import enterpriseLogo from '../../img/enterprise-logo.png';

function Problematic() {
    return (
        <section className='problematic-wrapper'>
            <div className='card'>
                <div className='card-container'>
                    <div className='card-header'>
                        <img src={ enterpriseLogo } alt="logo-mastic" className="logo-mastic" />
                        <div className='header-title'>Nossas prioridades</div>
                    </div>
                    <div className='card-text'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    </div>
                    <button className='card-button'>Saiba mais</button>
                </div>
            </div>

            <div className='card' id='meioAmbiente'>
                <div className='title-wrapper'>
                    <div className='card-title bg-gray'>
                    
                        <h2 className='title'>Meio Ambiente</h2>
                        <span className='card-data'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span>
                    </div>
                </div>  
            </div>
            
            <div className='card' id='periferias'>
                <div className='title-wrapper'>
                    <div className='card-title bg-green'>
                        <h2 className='title'>Periferias</h2>
                        <span className='card-data'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span>
                    </div>
                </div>
            </div>
    </section>
    )
    
}

export default Problematic;