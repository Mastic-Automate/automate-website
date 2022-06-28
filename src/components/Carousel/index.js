import React, { useEffect, useState } from 'react';

import { Container,
        Items,
        Item,
        ButtonContainer,
        SlideButton,
        Title,
        Texts,
        SubTitle,
        Description  } from './styles';

function Carousel({data, time}) {
    const [current, setCurrent] = useState(1)

    const handleCurrent = (number) => {
        if (number > data.length) {
            number = 1
        } else if (number <= 0) {
            number = data.length
        }

        setCurrent(number)
    }

    useEffect(() => {
        const next = current + 1
        if (time) {
            const timer = setInterval(() => {
                handleCurrent(next)
            }, time);
            return () => clearInterval(timer);
        }
    }, );

    const classesID = {
        'prev': (current - 1) > 0 ? (current - 1) : data.length,
        'active': current,
        'next': current + 1 <= data.length ? current + 1 : 1,
    }

    const classes = [
        'prev',
        'active',
        'next',
    ]

    let currentName = ''
    let currentDescription = ''

    const itemsHTMLCollection = data.map(({id, image, name, description}) => {
        let classDiv = ''    
        const classID = Object.values(classesID).indexOf(id)
            
        if (classes[classID]) {
            classDiv = classes[classID]

            if (classID === 1) {
                currentName = name
                currentDescription = description
            }
        }

        return (
            <Item className={`item ${classDiv}`} key={id}>
                <img src={ image } alt="logo-mastic" className="logo-mastic" />
            </Item>
        )
    })  

    const prev =  current - 1
    const next = current + 1

    return (
        <Container className="carousel-wrapper">
            <Texts>
                <Title>NOSSO TIME</Title>
                <SubTitle>{`${currentName}`}</SubTitle>
            </Texts>
            
            <Items className="items">
                {itemsHTMLCollection}
                

                <ButtonContainer className="button-container">
                    <SlideButton 
                        className="slideButton" 
                        onClick={ () => handleCurrent(prev) }
                    >
                        <i className="fas fa-angle-left"></i>
                    </SlideButton>
                    <SlideButton 
                        className="slideButton" 
                        onClick={ () => handleCurrent(next) } 
                    >
                        <i className="fas fa-angle-righ"></i>
                    </SlideButton>
                </ButtonContainer>
            </Items>

            <Description>{`${currentDescription}`}</Description>
        </Container>
    );
}

export default Carousel;