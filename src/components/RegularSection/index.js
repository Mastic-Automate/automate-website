import React from "react";
import TextElement from "../TextElement";

import { RegularSectionWrapper } from './styles';

function RegularSection(props) {
    const {imgSide, src, alt, title, text} = props

    if (imgSide === 'right') { 
        return (
            <RegularSectionWrapper className="regular-section">
                <TextElement title={title} text={text} /> 
                <img src={src} alt={alt} />
            </RegularSectionWrapper> 
        )
    } 
    
    return ( 
        <RegularSectionWrapper className={`regular-section ${imgSide}`}>
            <img src={src} alt={alt} />
            <TextElement title={title} text={text} />  
        </RegularSectionWrapper>
    )
}

export default RegularSection;