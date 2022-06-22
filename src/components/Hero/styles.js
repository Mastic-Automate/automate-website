import styled from "styled-components";

const media = {
    tablet: '@media(max-width: 700px)',
};

export const HeroWrapper = styled.section`
    height: 60vw;
    max-height: 1024px;
    display: flex;
    align-items: center;
    justify-content: center;

    & img {
        width: 100%;
    }

    & .section-text h1 {
        font-size: 10rem;
        line-height: 11.719rem;
        color: var(--color-title);
    }

    & .section-text p {
        font-size: 5.5rem;
        line-height: 6.445rem;
        font-weight: 400;
        color: var(--color-text);
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
    width: 90%;
    max-width: 1300px;
    height: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;