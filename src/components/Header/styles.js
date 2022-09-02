import styled, { keyframes } from 'styled-components';

const media = {
    tablet: '@media(max-width: 960px)',
}

const fadeIn = keyframes`
    0% {
        opacity: 0;
    }

    2% {
        opacity: 0.02;
        visibility: visible;
        display: flex;
    }
    
    100% {
        opacity: 1;
        
    }
`;

const fadeOut = keyframes`
    0% {
        opacity: 1;
        display: flex;
        visibility: visible;
    }
    
    100% {
        opacity: 0;
        display: none;
        visibility: hidden;
    }
`;
    


export const HeaderWrapper = styled.header`
    width: 100vw;
    
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
    padding: 3rem 2.5rem;
    
    min-height: 70px;
    height: 10rem;
    left: 0px;
    right: 0px;
    top: 0px;

    a {
        font-weight: 700;
        font-size: 2.5rem;
        line-height: 2.1rem;
    }

    ul {
        display: flex;
        width: 100%;
        justify-content: space-around;
    }

    ${media.tablet} {
            position: relative;
            z-index: 997;
        & ul {
        max-width: 265px;
        }
    }
        

`;

export const Container = styled.div`
    width: 90%;
    max-width: 1300px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Logo = styled.div`
    min-width: 30px;
    max-width: 4%;
    height: 100%;
    border-radius: 10px;
`;

export const Nav = styled.nav`
    max-width: 50%;

    ${media.tablet} {
        min-width: 265px;
    }
`;

export const MenuIcon = styled.div`
    display: none;

    ${media.tablet} {
        height: 25px;
        width: 25px;
        display: block;

        position: absolute;
        right: 5rem;
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

export const NavMenu = styled.div`
    ${media.tablet} {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        min-height: 70px;
        height: fit-content;
        background-color: ${props => props.backgroundcolor ? props.backgroundcolor : 'black'};
        position: absolute;
        width: 100vw;
        padding-top: 4rem;
        z-index: 998;
        transition: 0.8s;
        left: 0;
        top: 100%;
        animation: ${fadeOut} .3s linear forwards;

        & ul {
            width: 40%;
            padding: 2rem 0;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin: auto;
            visibility: inherit;
            display: flex;
        }

            & ul li {
                margin: 1rem auto;
                padding-bottom: 6px;
                padding-left: 2px;
                width: 100%;
                text-align: center;
                margin-bottom: 15px;
                border-bottom: 1px solid rgba(255, 255, 255, 0.223);
                visibility: inherit;
                display: inherit;
            }
        
        &.active {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            min-height: 70px;
            height: fit-content;
            background-color: ${props => props.backgroundcolor ? props.backgroundcolor : 'black'};
            visibility: visible;
            animation: ${fadeIn} 0.5s linear forwards;
        }
    }
`;

export const Link = styled.a`
    position: relative;

    &::before {
        content: "";
        position: absolute;
        background: #fff;
        bottom: -5px;
        left: 0;
        width: 0;
        height: 2px;
        transition: 1s;
    }

    &:hover {
        &::before{
            width: 100%;
        }
    }
`;