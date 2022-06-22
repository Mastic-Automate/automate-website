import React from "react";
import TextElement from "../TextElement";

import { HeroWrapper, Container } from './styles';

function Hero(props) {
    const {imgSide, src, alt, title, text} = props
    if (text && imgSide && src) {    
        if (imgSide === 'right') { 
            return (
                <HeroWrapper className="hero">
                    <Container>
                        <TextElement title={title} text={text} /> 
                        <img src={src} alt={alt} />
                    </Container>
                </HeroWrapper> 
            )
        }

        return ( 
            <HeroWrapper className="hero">
                <Container>
                    <img src={src} alt={alt} />
                    <TextElement title={title} text={text} />
                </Container>     
            </HeroWrapper>
        )
    }

    return (
        <HeroWrapper className="hero">
            <Container>
                {title}
            </Container> 
        </HeroWrapper>
    )

}

export default Hero;