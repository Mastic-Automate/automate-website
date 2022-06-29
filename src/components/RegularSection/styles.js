import styled from "styled-components";

const media = {
    tablet: `@media(max-width: 700px)`,

};

export const RegularSectionWrapper = styled.section`
    width: 100vw;
    max-width: 1300px;
    height: calc(100vh - 10rem);
    max-height: 1300px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 5rem auto;

    & img {
        max-width: 50%;
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