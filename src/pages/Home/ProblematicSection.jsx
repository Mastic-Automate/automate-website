import styled from "styled-components"

const Container = styled.div`
    display:flex;
    flex-flow: row nowrap;
    width: 100vw;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
`

const Section = styled.div`
    height: 100vh;
    min-width: 100vw;
    scroll-snap-align: start;
`

export function ProblematicSection(){
    return (
        <Container>
            <Section>
                <h3>Automate é...</h3>
                <h1>Renda extra</h1>
            </Section>
            <Section>
                <h3>Automate é...</h3>
                <h1>Acessível</h1>
            </Section>
            <Section>
                <h3>Automate é...</h3>
                <h1>Alimentos naturais</h1>
            </Section>
        </Container>
    )
}