import React from 'react';
import './ProductSection.css'
import { ProductSectionWrapper,
        Container,
        FlexCol } from './styles'

import holographicTomato from '../../assets/img/tomateHolografico.png';
import RenderLinks from '../Header/RenderLinks';

function ProductSection({links, closeMenu}) {
  return (
    <ProductSectionWrapper className='productSection-wrapper'>
      <Container className="container">
        <FlexCol className='col flex-col automate'>
          <h1 className='primary-title'>Automate</h1>
          <p className='primary-text'> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
          <div href="#" className='primary-btn'>
            <RenderLinks links={links} click={closeMenu}/>
          </div>
        </FlexCol>
            <FlexCol className='col flex-col'>
                <img src={holographicTomato} alt='Tomate Holográfico'/>
            </FlexCol>
      </Container>
            
    </ProductSectionWrapper>
  );
}

export default ProductSection;