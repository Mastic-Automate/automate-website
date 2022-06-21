import styled from "styled-components";


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
    width: clamp(100px, 41%, 3200px);
    height: 100%;
    left: 0;
    background: #4F8735;
    z-index: 1;
`;

export const Container = styled.div`
    width: 90%;
    max-width: 1400px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    z-index: 2;
    
`;

export const OurPriorities = styled.div`
    width: 45%;
    min-width: 350px;
    height: 100%;
    font-size: 1.7rem;
    padding: 4rem 6rem;
    background-image: linear-gradient(to left,#42702E, #4F8735);
    left: 0;
    bottom: 0;

    & p { 
        text-align: justify;
    }
`;

    export const ContainerPriorities = styled.div`
        width: 100%;
        max-width: 320px;
        display: flex;
        flex-direction: column;
    `;

export const Title = styled.div`
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: space-between;

    & img {
        max-width: 85px;
    }

    & h2 {
        width: 60%;
        margin: auto;
        text-align: left;
        border-left: 1px solid white;
        padding-left: 2rem;
    }

`;

export const Projects = styled.div`
    width: 20%;
    padding-left: 6rem;
    min-width: 320px;
`;

export const Project = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
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
    width: 48%;
    text-align: left;
    margin-left: 2rem;

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