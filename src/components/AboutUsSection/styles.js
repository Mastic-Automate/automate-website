import styled from "styled-components";

const media = {
    tablet: '@media(max-width: 960px)',
}

export const AboutUsWrapper = styled.section`
    width: 100vw;
    background-color: #242434;
    color: white;
`;

export const AboutUsHeader = styled.div`
    background-image: linear-gradient(to left, #267B00, #123C00 );
    padding: 2rem 0;
    width: 100%;

    & img {
        max-width: 200px;
    }

    & h2 {
        text-transform: uppercase;
        text-align: center;
        max-width: 40%;
        color: white;
        font-size: 6rem;
        font-weight: 300;
        letter-spacing: 2px;
        font-family: 'Oswald-ExtraLight';
    }

`;

export const Container = styled.div`
    width: 100%;
    max-width: 1300px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const AboutUsDetails = styled.div`
    width: 100%;
    min-height: calc(100% - 260px);
    padding-bottom: 10rem;
    min-height: 750px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ContainerDetails = styled.div`
    height: 90%;
    display: flex;
    justify-content: center;
    align-items: center;

    ${media.tablet} {
        flex-direction: column;
    }
`;

export const Detail = styled.div`
    padding: 5rem 0;
    height: 31vw;
    width: 33%;
    min-width: 300px;
    min-height: 300px;
    max-width: 600px;
    max-height: 550px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: green;
    border-radius: 50%;

    & h2 {
        margin-top: 4rem;
        width: 80%;
        font-size: 3rem;
        margin: 0 auto;
        text-align: center;
        font-family: 'Nasalization';
        font-weight: 400;
    }

    & p {
        font-size: 2.1rem;
        letter-spacing: 1px;
        font-family: 'Oswald-ExtraLight';
        color: white;
        width: 75%;
        text-align: center;
        margin: 0 auto;
        margin-top: 2rem;
    }

    &.about-us-description {
        background-color: #436F2F;
        order: 1;
    }

    &.our-values {
        background-color: #407A26;
        margin-left: -4rem;
        order: 2;
    }   

    &.our-mission {
        margin-left: -4rem;
        background-color: #459022;
        order: 3;
    }

    ${media.tablet} {
        margin-top: 5rem;
        margin-left: 0;
        margin-right: 0;
        width: 380px;
        height: 330px;

        & h2 {
            margin-top: 0rem;
        }

       
    }
`;