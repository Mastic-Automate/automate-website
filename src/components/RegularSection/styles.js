import styled from "styled-components";

const media = {
    tablet: `@media(max-width: 700px)`,

};

export const RegularSectionWrapper = styled.section`
    height: 100vh;
    max-height: 1024px;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: space-between;

    & img {
        max-width: 45%;
        max-height: calc(100% - 10rem);
    }

    ${media.tablet} {
        flex-direction: column-reverse;
        justify-content: center;

        &.right {
            flex-direction: column;
        }

        & img {
            max-width: 100%;
            max-height: calc(50vh - 10rem);
        }
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