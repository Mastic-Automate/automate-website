import styled from 'styled-components'

const Container = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 2;
    display: flex;
    flex-flow: row nowrap;
    align-items:center;
    justify-content: space-between;
`

const Links = styled.div`
    flex: 1;
    display:flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    max-width: 400px;
`
const Link = styled.a`
    color: white;
    font-family: Poppins;
    text-decoration: none;
    opacity: .7;
    transition: opacity .3s;

    &:hover{
        opacity: 1;
    }
`
const Logo = styled.img`
    width: auto;
    height: 80px;
`

export function Header(){
    return (
        <Container>
            <Logo 
                src="/img/automate-logo.png"
            />
            <Links>
                <Link href="#app-section">Nosso App</Link>
                <Link href="#product-section">Nosso produto</Link>
                <Link href="#about-section">Sobre nós</Link>
            </Links>
        </Container>
    )
}