import React from 'react';
import './ProjectsSection.css';

import enterpriseLogo from '../../img/logo-mastic-removedBG.png';

function ProjectsSection() {
  return (
    <div className='projects-wrapper'>
        <div className='card-projects'>
            <h1 className='card-projects-title'>Projetos</h1>
            <img src={ enterpriseLogo } className="logo-mastic"></img>
        </div>
        <div className='carousel-wrapper'>
            <div className='carousel'></div>

            <button>Ver projetos</button>
        </div>
        
        
    </div>
  );
}

export default ProjectsSection;