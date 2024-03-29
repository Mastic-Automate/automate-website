import React from 'react';
import { useEffect } from 'react';

import styled from 'styled-components';
import {PixCard} from '../../components/PixCard';
import { Popup } from '../../components/Popup/Popup';
import {QrCode} from '../../components/qrCode';
import {CaretLeft} from "phosphor-react";

// import {GradientOverlay} from '../gradientOverlay';

const media = {
    tablet: `@media only screen and (max-width: 768px)`,
}

const CheckoutPageWrapper = styled.section`
    background-color: #1D202D;
    width: 100vw;
    height: 100vh;
    display:flex;
    flex-direction: row;
    justify-content: center;
    overflow: hidden;
    position: relative;

    h1{
        margin: 0;
        font-family: 'Modak', cursive;
        font-weight: 400;
        line-height: 60px;
        font-size: 91px;

        @media(max-width: 800px){
            font-size: 60px;
        }
        @media(max-width: 600px){
            font-size: 40px;
        }
    }
    p{
        font-family: Poppins;
        font-size: 20px;
        opacity: 0.8;
    }
`

const Container = styled.div`
    width: 90%;
    max-width: 1300px;

    display: flex;
    justify-content: center;
    align-items: flex-end;


    margin: 0 auto;

    & > h1, p {
        color: white;
        z-index:2;
    }
`;

const GoBackButton = styled.a`
    border: none;
    position: absolute;
    top: 2rem;
    left: 2rem;
`;

const CheckoutPageIllustration = styled.img`
    width: 50%;
    max-width: 500px;

    margin-bottom: -50px;

    ${media.tablet}{
        display: none;
    }
`;

function CheckoutPage() {
    return (
        

        <CheckoutPageWrapper>
            <Container>
                <CheckoutPageIllustration 
                    src='/img/checkoutpage-illustration.svg'
                />

                <PixCard>
                    <QrCode />
                    
                </PixCard>
                <GoBackButton href="./home">
                    <CaretLeft size={80} weight="bold" color="white"/>
                </GoBackButton>
            </Container>
            <Popup text={"Nosso produto ainda não está disponível para venda. Porém, estamos sempre aptos à sua doação."}/>
        </CheckoutPageWrapper>
    )
    
}

export default CheckoutPage;