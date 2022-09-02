import styled from "styled-components";

import projectsBG from '../../assets/img/bg-projects.png';

const media = {
    lgBreakpoint: `@media only screen and (max-width: 1024px)`,
}

export const ProjectsWrapper = styled.section`
    margin: 10rem auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    max-width: 1300px;
    min-height: 630px;
    background-image: url(${projectsBG});
    background-position: top;
    background-repeat: no-repeat;

    & button:hover {
        filter: brightness(90%);
    }

    
`;

export const CardProjects = styled.div`
    margin: 50px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & .card-projects-title {
        font-size: 7rem;
        text-transform: uppercase;
        color: #fff; 
        font-family: 'Nasalization';
        font-weight: 400;
        letter-spacing: 1px;
    }

`;

    export const Row = styled.div`
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        & .logo-mastic {
            width: 80px;
            height: 80px;
        }
    `;

    export const Line = styled.div`
        height: 2px;
        width: 35%;
        border-radius: 10px;
        margin: auto;
        background-color: white;
    `;

export const CarouselWrapper = styled.div`
    width: 100%;
    min-height: 400px;
    margin-top: 26.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    & .btn-primary {
        background: #407A26;
        font-family: 'Oswald';
        letter-spacing: 1px;
        font-size: 2.2rem;
        text-align: center;
        width: 315px;
        height: 54px;
        text-transform: uppercase;
        color: #fff;
        border: 1px solid #fff;
        border-radius: 10px;
        cursor: pointer;
    }

    ${media.lgBreakpoint} {
        margin-top: 300px;
    }
`;

export const Carousel = styled.div`
    width: 100%;
    max-width: 1300px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 6rem;
    display: flex;
    justify-content: space-between;

    ${media.lgBreakpoint} {
        flex-direction: column;
        justify-content: end;
        align-items: center;
    }
`;

export const Card = styled.div`
    padding: 0;
    background-image: linear-gradient(180deg, rgb(221, 221, 221), rgb(248, 248, 248));
    border-radius: 20px;
    width: 100%;
    max-width: 350px;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &:hover {
        background-color: white;
        background-image: linear-gradient(white, white);
        transform: translate(0, -20px);
        box-shadow: 1px 1px 50px 10px rgba(0, 0, 0, 0.25);
    }

    &:hover .card-body {
        transition: none;
        border: 1px solid black;
        border-top: 0px solid black;
        border-bottom-left-radius: 16px;
        border-bottom-right-radius: 16px;
    }

    ${media.lgBreakpoint} {
        background-color: white;
        background-image: none;
        transform: none;
        box-shadow: 1px 1px 50px 10px rgba(0, 0, 0, 0.25);
        width: 90%;
        min-width: 300px;
        max-width: 500px;
        height: 450px;
        margin-bottom: 50px;
    }
`;

    export const CardHeader = styled.div`
        width: 100%;
        height: 43%;
        padding: 0;
        border-top-left-radius: 16px;
        border-top-right-radius: 16px;
        background-color: #262535;
        display: flex;
        justify-content: center;
        align-items: center;

        & img {
            height: 86%;
        }
    `;

    export const CardBody = styled.div`
        height: 57%;
        width: 100%;
        padding-left: 20px;
        padding-right: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        padding-bottom: 4%;

        & h1 {
            text-transform: uppercase;
            text-align: center;
            font-size: 2.6rem;
            width: 100%;
            font-family: Nasalization;
            font-weight: 400;
            color: #4B902D;
        }

        & p {
            padding-left: 10px;
            padding-right: 10px;
            font-family: Oswald-Light;
            font-size: 1.7rem;
        }

        & button.btn-card {
            width: 90%;
            height: 35px;
            text-transform: uppercase;
            font-family: Oswald;
            letter-spacing: 1px;
            font-size: 1.7rem;
            margin-top: .5rem;
            border: none;
            border-radius: 10px;
            background-color: #4B902D;
            color: white;
            cursor: pointer;
        }
    `;