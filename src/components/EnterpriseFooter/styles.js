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
    justify-content: space-between;
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
`;

    export const ContainerPriorities = styled.div`
        width: 100%;
        max-width: 320px;
        display: flex;
        flex-direction: column;
    `;