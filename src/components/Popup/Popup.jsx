import { useState } from "react";

import styled from "styled-components";
import { GradientOverlay } from "../../pages/Home/sections/gradientOverlay";

import PopupImgSrc from "../../../public/img/automate-logo.png"

const PopupWrapper = styled.div`    
    display: none;

    &.active{
        visibility: visible;
        width: 100vw;
        height: 100vh;

        display: flex;
        justify-content: center;
        align-items: center;

        position: absolute;
    }
`

const Container = styled.div`
    position: absolute;
    z-index: 999;
`;

const PopupContent = styled.div`
    width: 320px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    color: #000;
    text-align: center;
    border-radius: 20px;
    padding: 30px 40px;

    & > p {
        color: #000;
    }

    button.close {
        width: 30px;
        font-size: 20px;
        color: #c0c5cb;
        align-self: flex-end;
        background-color: transparent;
        border: none;
        margin-bottom: 10px;
    }
`;

const PopupImg = styled.img`
    width: 82px;
    margin-bottom: 15px;
`;


export function Popup({text}) {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click)

    return (
        <PopupWrapper 
            className={click ? 'popup-wrapper' : 'popup-wrapper active'}
        >
            <GradientOverlay />

            <Container className="container">
                <PopupContent>
                    <button 
                        className="close" 
                        onClick={handleClick}
                    >✖
                    </button>
                    <PopupImg src={PopupImgSrc} alt="cookies-img" />
                    <p>{text}</p>
                        
                </PopupContent>
            </Container>
        </PopupWrapper>   
    )
}