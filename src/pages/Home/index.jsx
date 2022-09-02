import styled from 'styled-components'
import { AppSection } from './sections/App'
import { CommentsSection } from './sections/Comments'
import { HeroSection } from './sections/Hero'
import { ProblematicSection } from './sections/Problematic'
import { ProductSection } from './sections/Product'

const Container = styled.div`
    overflow-y: scroll;
    background-color: #1D202D;
    height: 100vh;
    max-width: 100vw;
    @media(min-width: 1000px){
        scroll-snap-type:y mandatory;
    }
`

export function Home(){
    return (
        <Container>
            <HeroSection />
            <ProblematicSection />
            <AppSection />
            <ProductSection />
            <CommentsSection />
        </Container>
    )
}