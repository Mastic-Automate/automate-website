import React from 'react';

import bianca from '../../img/bianca.jpeg';
import gabriel from '../../img/gabriel.jpeg';
import gustavo from '../../img/gustavo.jpeg';
import kevin from '../../img/kevin.jpeg';
import simone from '../../img/simone.jpeg';
import victor from '../../img/victor.jpeg';
import yanCarlos from '../../img/yanCarlos.jpeg';
import yanMendonca from '../../img/yanMendonca.jpeg';

import { Container, Items, Item, ButtonContainer, SlideButton  } from './styles';

function Carousel() {

    document.addEventListener("DOMContentLoaded", function(event) {
    
        const slides = document.querySelectorAll('.item');
        const slideButton = document.querySelectorAll('.slideButton');

        let current = 0;
        let prev = 7;
        let next = 1;

        for (let i = 0; i < slideButton.length; i++) {
            slideButton[i].addEventListener('click', () => i === 0 ? gotoPrev() : gotoNext());
        }

        const gotoPrev = () => current > 0 ? gotoNum(current - 1) : gotoNum(slides.length - 1);

        const gotoNext = () => current < slides.length - 1 ? gotoNum(current + 1) : gotoNum(0);

        const gotoNum = number => {
            current = number;
            prev = current - 1;
            next = current + 1;

            for (let i = 0; i < slides.length; i++) {
                slides[i].classList.remove('active');
                slides[i].classList.remove('prev');
                slides[i].classList.remove('next');
            }

            if (next === slides.length) {
                next = 0;
            }

            if (prev === -1) {
                prev = 7;
            }

            slides[current].classList.add('active');
            slides[prev].classList.add('prev');
            slides[next].classList.add('next');
        }
        
    });

    

  return (
    <Container className="carousel-wrapper">
        <Items className="items">
            <Item className="item active">
                <img src={ bianca } alt="logo-mastic" className="logo-mastic" />
            </Item>

            <Item className="item next">
                <img src={ gabriel } alt="logo-mastic" className="logo-mastic" />
            </Item>

            <Item className="item">
                <img src={ gustavo } alt="logo-mastic" className="logo-mastic" />
            </Item>

            <Item className="item">
                <img src={ kevin } alt="logo-mastic" className="logo-mastic" />
            </Item>

            <Item className="item">
                <img src={ simone } alt="logo-mastic" className="logo-mastic" />
            </Item>

            <Item className="item">
                <img src={ victor } alt="logo-mastic" className="logo-mastic" />
            </Item>

            <Item className="item">
                <img src={ yanCarlos } alt="logo-mastic" className="logo-mastic" />
            </Item>

            <Item className="item prev">
                <img src={ yanMendonca } alt="logo-mastic" className="logo-mastic" />
            </Item>
            <ButtonContainer className="button-container">
                <SlideButton className="slideButton">
                    <i className="fas fa-angle-left"></i>
                </SlideButton>
                <SlideButton className="slideButton">
                    <i className="fas fa-angle-right"></i>
                </SlideButton>
            </ButtonContainer>
        </Items>
    </Container>
  );
}

export default Carousel;