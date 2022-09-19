import styled from 'styled-components';
import { Button } from '../../../../components/Button';
import { GradientOverlay } from '../gradientOverlay';

const AboutWrapper = styled.section`
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
    align-items: center;

    z-index: 2;
`;

const Card = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 500px;
    width: 100%;
    gap: 4px;

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

const Logo = styled.img`
    width: 80%;
    max-width: 150px;
    height: auto;
    align-self: center;
`
const WebsiteButton = styled(Button)`
    align-self: center;
`

export function AboutSection(){
    return (
        <AboutWrapper id="about-section">
            <GradientOverlay />
            <Container>
                <Card>
                    <h1>Sobre nós</h1>
                    <p>
                        Somos a Mastic, uma empresa com o objetivo de mudar o Brasil
                    </p>
                    <Logo 
                        src="/img/enterprise-logo.png"
                        alt="A logo da Mastic, que consiste em uma árvore composta por circúitos e o nome da empresa escrito por cima"
                    />
                    <WebsiteButton onClick={()=> {window.open('http://mastic-website-deploy.vercel.app/', '_blank')}}>
                        Acesse nosso website
                    </WebsiteButton>
                </Card>
                
            </Container>
        </AboutWrapper>
    )
}