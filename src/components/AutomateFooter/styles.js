import styled from "styled-components";

export const FooterAutomate = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    max-height: 1024px;
    width: 100%;
    max-width: 1300px;
    margin: 0 auto;

    &.automate h3 {
        font-weight: 700;
        font-size: 5rem;
        line-height: 5.859rem;
        color: var(--color-text);
        margin-bottom: 8.2rem;
    }

    &.automate p {
        padding: 0px 15px;
        line-height: 5.273rem;
        font-size: 4.5rem;
        color: var(--color-secondary-text);
        max-width: 1216px;
    }
`;