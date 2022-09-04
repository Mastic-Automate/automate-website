import styled from 'styled-components'

const media = {
    tablet: `@media only screen and (max-width: 768px)`,
}

const Container = styled.div`
    max-width: 550px;
    width: 100%;
    max-height: 390px;
    background-color:rgba(31, 35, 53, .8);
    border-radius: 16px;
    border: 1px solid #263238;
    padding: 30px;
    backdrop-filter: blur(10px);
    z-index: 2;

    img{
        width: 100%;
        height: auto;
    }
`
const Title = styled.h2`
    font-family: Poppins;
    font-size: 32px;
    font-weight: bold;
    color: white;

    ${media.tablet} {
        margin-bottom: 10px;
        font-size: 16px;
    }

`

export function QuestionCard({title, children}) {
    return (
        <Container>
            <Title>{title}</Title>
            {children}
        </Container>
    )
}