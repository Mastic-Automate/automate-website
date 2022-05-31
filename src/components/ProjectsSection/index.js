import React from 'react';
import './ProjectsSection.css';

import enterpriseLogo from '../../img/logo-mastic-removedBG.png';

function ProjectsSection() {
  return (
    <div className='projects-wrapper'>
        <div className='card-projects'>
            <h1 className='card-projects-title'>Projetos</h1>
            <img src={ enterpriseLogo } alt="logo-mastic" className="logo-mastic"></img>
        </div>
        <div className='carousel-wrapper'>
            <div className='carousel'>
              <div className='card'>
                <div className='card-header'>

                </div>
                <div className='card-body'>

                </div>

              </div>
              <div className='card active'>
                <div className='card-header'>

                </div>
                <div className='card-body'>

                </div>
                
              </div>
              <div className='card'>
                <div className='card-header'>

                </div>
                <div className='card-body'>

                </div>
                
              </div>
            </div>
              

            <button className='btn-primary'>Ver projetos</button>
        </div>
        
        
    </div>
  );
}

export default ProjectsSection;