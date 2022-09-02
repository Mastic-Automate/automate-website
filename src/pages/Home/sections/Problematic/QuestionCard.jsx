import styled from 'styled-components'

const Container = styled.div`
    max-width: 600px;
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
    @media(max-width: 600px){
        font-size: 16px;
    }
    font-weight: bold;
    color: white;
`

export function QuestionCard({title, children}) {
    return (
        <Container>
            <Title>{title}</Title>
            {children}
        </Container>
    )
}