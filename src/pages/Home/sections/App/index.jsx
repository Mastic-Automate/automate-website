import styled from 'styled-components';
import { GradientOverlay } from '../gradientOverlay';

const AppWrapper = styled.section`
    scroll-snap-align: start;
    height: 100vh;
    display:flex;
    flex-flow: column nowrap;
    align-items:flex-end;
    justify-content:center;

    overflow-x: hidden;

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
        margin: 0;
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

        opacity: 0.8;
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
    height: 100%;
`

export function AppSection(){
    return (
        <AppWrapper id="app-section">
            <BgAppImage 
                src="/img/app1.png"
                alt="Um celular com o aplicativo Automate aberto na home, com enfoque em suas plantas"
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