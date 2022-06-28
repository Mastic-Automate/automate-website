import styled from "styled-components";
import meioAmbiente from '../../assets/img/meio-ambiente.png';
import periferia from '../../assets/img/periferias.png';

const media = {
    tablet: `@media only screen and (max-width: 768px)`,
}

export const ProblematicWrapper = styled.section`
    margin: auto;
    margin-top: 100px;
    margin-bottom: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    max-width: 1300px;
    height: 350px;
    background-color: #407A26;

    ${media.tablet} {
        flex-direction: column;
        width: 44
        0px;
        height: calc(350px * 3);
    }
`;

export const Card = styled.div`
    width: 100%;
    height: 100%;
    min-height: 350px;
    max-height: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-position: center;
    background-repeat: no-repeat;

    &#meioAmbiente {
        background-image: url(${meioAmbiente});
    }

    &#periferias {
        background-image: url(${periferia});
    }
`;

    export const CardContainer = styled.div`
        width: 90%;
        height: 90%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        
        & .card-button {
            padding: 10px 0;
            background: none;
            text-transform: uppercase;
            color: #fff;
            border: 1px solid #fff;
            border-radius: 10px;
            transition: 0.5s;

            font-size: 1.5rem;
            font-family: 'Oswald';
        }

            & .card-button:hover {
                background-color: #fff;
                color: #407A26;
            }

        & .card-text {
            text-align: justify;
            color: #fff;
            opacity: 80%;

            font-size: 2rem;
            font-family: 'Oswald';
            font-weight: lighter;
        }
    `;

    export const CardHeader = styled.div`
        width: 100%;
        height: 80px;
        display: flex;
        align-items: center;

        & .header-title {
            font-size: 3.7rem;
            color: #fff;
            margin-left: 10px;

            font-family: 'Nasalization';
        }
    `;

        export const Logo = styled.img`
            width: 64px;
            height: 64px;
        `;

export const TitleWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    position: relative;
    transform: translateY(calc(100% - 50px));
    transition: transform 1s;

    &:hover {
        transform: translateY(0);
    }
`;

    export const CardTitle = styled.div`
        position: absolute;
    
        display: flex;
        align-items: flex-start;
        width: 100%;
        height: 100%;
        color: #fff;

        &.bg-gray {
            background: #242434;
        }

        &.bg-green {
            background: #407A26;
        }

        & .title {
            width: 100%;
            height: 50px;
            display: flex;
            align-items: center;
            margin: 0 10px;

            font-size: 2.5rem;
            font-family: 'Nasalization';
            text-transform: uppercase;
        }

        & .card-data {
            width: 100%;
            height: 100%;
            background: #171722;
            position: absolute;
            display: flex;
            bottom: -50px;
            padding: 10px 15px;

            text-align: justify;
            font-family: 'Oswald';
        }
    `;