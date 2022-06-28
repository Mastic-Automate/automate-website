import styled from "styled-components";

const media = {
    tablet: `@media(max-width: 768px)`,
    cell: `@media(max-width: 375px)`
}

export const FooterWrapper = styled.footer`
    display: flex;
    justify-content: center;
    margin: 0;
    bottom: 0;
    color: white;
    background-color: #242434;
    position: relative;

    & h2 {
        font-family: Nasalization;
        font-weight: 400;
        font-size: 3rem;
    }

    & p {
        color: white;
    }
`;

export const BGGreen = styled.div`
    position: absolute;
    width: clamp(50px, 50%, 3200px);
    height: 100%;
    left: 0;
    background: #4F8735;
    z-index: 1;

    ${media.tablet} {
        display: none;
    }
`;

export const Container = styled.div`
    background-color: #242434;
    width: 100%;
    max-width: 1400px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    z-index: 2;
    
    ${media.tablet} {
        flex-direction: column;
        align-items: flex-start;
    }

`;

export const OurPriorities = styled.div`
    width: 45%;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    font-size: 1.7rem;
    padding: 4rem 6rem;
    background-image: linear-gradient(to left,#42702E, #4F8735);
    left: 0;
    bottom: 0;

    & p { 
        text-align: justify;
    }

    ${media.tablet} {
        width: 100%;
        padding: 4rem 3rem;
    }

`;

export const Title = styled.div`
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2rem;

    & img {
        max-width: 85px;
    }

    & h2 {
        width: 60%;
        text-align: left;
        border-left: 1px solid white;
        padding-left: 2rem;
    }   

`;

export const LinksWrapper = styled.div`
    width: 90%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    

    ${media.tablet} {
        justify-content: space-between;
        padding: 20px 0;
    }

`;

export const Projects = styled.div`
    text-align: left;
`;

export const Project = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-top: 2rem;

    &:first-child() {
        margin-top: 1rem;
    }

    & h3 {
        font-family: 'Oswald-Light';
        font-weight: 400;
    }

    & img {
        width: 40px;
        height: 40px;
        background-color: #CACACA;
        margin-right: 10px;
    }
    
`;

export const FastLinks = styled.div`
    text-align: left;

    & h2 {
        width: 100%;
    }

    & ul {
        margin-bottom: 0;
    }

    & ul li {
        font-family: Oswald-Light;
        list-style-type: square;
        list-style-position: inside;
        text-transform: uppercase;
        margin-top: 2rem;
        margin-left: 0.4rem;
    }

`;