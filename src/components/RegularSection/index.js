import React from "react";
import TextElement from "../TextElement";

import { RegularSectionWrapper, Container } from './styles';

function RegularSection(props) {
    const {imgSide, src, alt, title, text} = props

    if (imgSide === 'right') { 
        return (
            <RegularSectionWrapper className="regular-section">
                <Container>
                    <TextElement title={title} text={text} /> 
                    <img src={src} alt={alt} />
                </Container>
            </RegularSectionWrapper> 
        )
    } 
    
    return ( 
        <RegularSectionWrapper className={`regular-section ${imgSide}`}>
            <Container>
                <img src={src} alt={alt} />
                <TextElement title={title} text={text} />
            </Container>  
        </RegularSectionWrapper>
    )
}

export default RegularSection;