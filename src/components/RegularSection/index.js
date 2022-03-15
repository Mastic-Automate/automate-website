import TextElement from "../TextElement";
import './RegularSection.css'

function RegularSection(props) {
    const {imgSide, src, alt, title, text} = props

    if (imgSide === 'right') { 
        return (
            <section className="regular-section">
                <TextElement title={title} text={text} /> 
                <img src={src} alt={alt} className />
            </section> 
        )
    } 

    return ( 
        <section className={`regular-section ${imgSide}`}>
            <img src={src} alt={alt} />
            <TextElement title={title} text={text} />
        </section>
    )
}

export default RegularSection;