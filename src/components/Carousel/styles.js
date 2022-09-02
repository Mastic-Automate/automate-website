import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    min-height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Oswald';
    margin: 100px 0;
`;

export const Texts = styled.div`
    font-size: 30px;
    margin: 0 auto 70px auto;
`

export const Title = styled.h1`
    text-align: center;
    width: 100%;

    font-family: 'Nasalization';
`;

export const SubTitle = styled.h1`
    text-align: center;
    width: 100%;
    transition: .8s;

    font-family: 'Oswald-ExtraLight';
    opacity: 0.7;
`;

export const Description = styled.p`
    padding: 0 10% 0 10%;
    margin-top: -15px;
    margin-bottom: 50px;
    text-align: center;
    width: 100%;
    color: white;

    font-family: 'Oswald-ExtraLight';
    opacity: 0.7;
    font-size: 25px;
`;

export const Items = styled.div`
    width: 100%;
    min-height: 450px;
    height: 100%;
    user-select: none;
    display: flex;
    justify-content: center;
    align-items: center;
    object-fit: contain;
`;

    export const Item = styled.div`
        position: absolute;
        width: 400px;
        height: 400px;
        overflow: hidden;
        transition: all 500ms ease-in-out;
        z-index: -1;
        opacity: 0;
        border-radius: 100%;
        object-fit: contain;

        & img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        &.active {
            margin-bottom: 100px;
            opacity: 1;
            z-index: 3;
            box-shadow: 0 0 105px -35px rgba(0, 0, 0, 0.75);
        }

        &.prev {
            z-index: 2;
            opacity: 0.25;
            margin-right: 500px;
        }

        &.prev h2 {
            display: none;
        }

        &.next {
            z-index: 2;
            opacity: 0.50;
            margin-left: 500px;
        }
`;

export const ButtonContainer = styled.div`
    width: 90%;
    height: 100%;
    margin-bottom: 100px;
    max-width: 400px;
    z-index: 4;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const SlideButton = styled.div`
    display: flex;
    align-items: center;
    color: #fff;
    font-size: 32px;
    cursor: pointer;
    position: relative;
    opacity: 0.75;
    transition: all 300ms ease-in-out;

    &:hover {
        opacity: 1;
    }

    &:before {
        content: " ";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 50px;
        height: 50px;
        background-color: rgba(0, 0, 0, 1);
        border-radius: 50%;
        z-index: -99;
    }
`;


