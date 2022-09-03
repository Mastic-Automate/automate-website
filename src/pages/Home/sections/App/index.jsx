import styled from 'styled-components';
import { GradientOverlay } from '../gradientOverlay';

const AppWrapper = styled.section`
    scroll-snap-align: start;
    background-color: #1D202D;
    height: 100vh;
    display:flex;
    flex-flow: column nowrap;
    align-items:flex-end;
    justify-content:center;

    position: relative;
    scroll-snap-align: start;
`

const Container = styled.div`
    width: 90%;
    max-width: 1300px;

    margin: 0 auto;

    display: flex;
    flex-direction: column;
    align-items: flex-end;

    z-index: 2;
`;

const Card = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 500px;
    width: 100%;

    h1, p {
        z-index:2;
    }

    h1 {
        color:white;
        font-size: 90px;
        font-weight: 400;
        font-family: 'Modak', cursive;

        @media(max-width: 800px){
            font-size: 60px;
        }
        @media(max-width: 400px){
            font-size: 40px;
        }
    }

    p {
        color:white;
        font-size: 20px;
        font-family: Poppins;
    }
`;

const BgAppImage = styled.img`
    position: absolute;
    bottom: 0;
    z-index: 0;
    left: 100px;
    @media(max-width:600px){
        left: 4px;
    }
    height: auto;
    max-width: 90vw;
`

export function AppSection(){
    return (
        <AppWrapper>
            <BgAppImage 
                src="/img/app1.png"
            />
            <GradientOverlay />
            <Container>
                <Card>
                    <h1>Nosso app</h1>
                    <p>
                        Gerencie seus dispositivos através do aplicativo automate
                    </p>
                </Card>
                
            </Container>
        </AppWrapper>
    )
}