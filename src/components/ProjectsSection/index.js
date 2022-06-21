import React from 'react';
import './ProjectsSection.css';

import enterpriseLogo from '../../assets/img/logo-mastic-removedBG.png';

function ProjectsSection() {
return (
  <div className='projects-wrapper'>
    <div className='card-projects'>
      <h1 className='card-projects-title'>Projetos</h1>
      <div className='row'>
        <div className='line'></div>
        <img src={ enterpriseLogo } alt="logo-mastic" className="logo-mastic" />
        <div className='line'></div>
      </div>
    </div>
    <div className='carousel-wrapper'>
      <div className='carousel'>

        <div className='card'>
          <div className='card-header'>
            <img src='./img/automate-logo-cutted.png' alt='logo do automate' />
          </div>
          <div className='card-body'>
            <h1>Automate</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <button className='btn-card'>SAIBA mais</button>
          </div>
        </div>

        <div className='card'>
          <div className='card-header'>
            <img src='./img/automate-logo-cutted.png' alt='logo do automate' />
          </div>
          <div className='card-body'>
            <h1>Automate</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <button className='btn-card'>SAIBA mais</button>
          </div>
        </div>

        <div className='card'>
          <div className='card-header'>
            <img src='./img/automate-logo-cutted.png' alt='logo do automate' />
          </div>
          <div className='card-body'>
            <h1>Automate</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <button className='btn-card'>SAIBA mais</button>
          </div>
        </div>

      </div>
      <button className='btn-primary'>Veja mais projetos</button>
    </div>
  </div>
);
}

export default ProjectsSection;