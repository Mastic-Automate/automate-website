import React from "react";
import TextElement from "../TextElement";
import './Hero.css'

function Hero(props) {
    const {imgSide, src, alt, title, text} = props
    if (text && imgSide && src) {    
        if (imgSide === 'right') { 
            return (
                <section className="hero">
                    <TextElement title={title} text={text} /> 
                    <img src={src} alt={alt} />
                </section> 
            )
        }

        return ( 
            <section className="hero">
                <img src={src} alt={alt} />
                <TextElement title={title} text={text} />
            </section>
        )
    }

    return (
        <section className="hero">
            {title}
        </section>
    )

}

export default Hero;