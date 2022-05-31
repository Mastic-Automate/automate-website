import React from 'react';
import './ProductSection.css';

import holographicTomato from '../../img/tomateHolografico.png'
import RenderLinks from '../Header/RenderLinks';

// import { Container } from './styles';

function ProductSection({links, closeMenu}) {
  return (
      <section className='productSection-wrapper'>
          <div className='container'>
              <div className='col flex-col'>
                <h1 className='primary-title'>Automate</h1>
                <p className='primary-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                
                
                <div href="#" className='primary-btn'>
                    <RenderLinks links={links} click={closeMenu}/>
                </div>
              </div>
              <div className='col col-img'>
                  <img src={holographicTomato} alt='Tomate Holográfico'/>
              </div>
          </div>
      </section>
  );
}

export default ProductSection;