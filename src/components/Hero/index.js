import React from "react";
import TextElement from "../TextElement";

import { HeroWrapper } from './styles';

function Hero(props) {
    const {imgSide, src, alt, title, text} = props
    if (text && imgSide && src) {    
        if (imgSide === 'right') { 
            return (
                <HeroWrapper className="hero">
                        <TextElement title={title} text={text} /> 
                        <img src={src} alt={alt} />
                </HeroWrapper> 
            )
        }

        return ( 
            <HeroWrapper className="hero">
                    <img src={src} alt={alt} />
                    <TextElement title={title} text={text} />
            </HeroWrapper>
        )
    }

    return (
        <HeroWrapper className="hero">
                {title} 
        </HeroWrapper>
    )

}

export default Hero;