import styled from 'styled-components'
import { useState } from 'react'

const media = {
    tablet: '@media(max-width: 960px)',
}

const Container = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 2;
    display: flex;
    align-items: center;
    padding: 5px;
    flex-flow: row nowrap;
    align-items:center;
    justify-content: space-between;

    ${media.tablet} {
            z-index: 997;
        & ul {
        max-width: 265px;
        }
    }

`

const LinksWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: end;

    ${media.tablet}{
        display: none;
    }

    &.active {
        position: absolute;
        background-color: #1D202D;
        opacity: 0.8;
        width: 100%;
        height: 50vh;
        display: flex;
        justify-content: center;

        top: 0;

        & > div{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-end;
            padding: 2rem;
            display: flex;

            gap: 30px;
        }
    }
`;

const Links = styled.div`
    flex: 1;
    display:flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    max-width: 400px;
    z-index: 997;

    
`
const Link = styled.a`
    color: white;
    font-family: Poppins;
    text-decoration: none;
    opacity: .7;
    transition: opacity .3s;
    z-index: 997;
    display: block;

    &:hover{
        opacity: 1;
    }

    
`
const Logo = styled.img`
    width: auto;
    height: 64px;
    z-index: 997;
`

export const Nav = styled.nav`
    display: flex;
    justify-content: flex-end;
    width: 100%;
`;

export const MenuIcon = styled.div`
    display: none;
    z-index: 999;

    ${media.tablet} {
        height: 25px;
        width: 25px;
        display: block;
        position: absolute;
        right: 2rem;
        top: 2rem;

        ${media.tablet} {
            &.on .one {
                transform: rotate(45deg) translate(4px, 10px);
            }
            &.on .two {
                opacity: 0;
            }
            
            &.on .three {
                transform: rotate(-45deg) translate(1px, -7.5px);
            }
        }
        
    }
`;

export const IconBar = styled.div`
    background-color: white;
    height: 3px;
    width: 100%;
    margin: 5px auto;
    border-radius: 6px;
    transition-duration: .4s;
`;

export function Header(){
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click)

    return (
        <Container>
            <Logo 
                src="/img/automate-logo.png"
                alt='Logo do Automate, que consiste na palavra "Automate" escrita de forma arredondada a lembrar um tomate'
            />
            <Nav className="navbar-items">
                <MenuIcon className={click ? `menu-icon on` : `menu-icon`} onClick={handleClick}>
                    <IconBar className="one"></IconBar>
                    <IconBar className="two"></IconBar>
                    <IconBar className="three"></IconBar>
                </MenuIcon>

                <LinksWrapper className={click ? 'nav-menu active' : 'nav-menu'}>
                    <Links>
                        <Link href="#app-section">Nosso App</Link>
                        <Link href="#product-section">Nosso produto</Link>
                        <Link href="#about-section">Sobre nós</Link>
                    </Links>
                    
                </LinksWrapper>
                    
            </Nav>
        </Container>
    )
}