import styled from 'styled-components';
import { Button } from '../../../../components/Button';
import { GradientOverlay } from '../gradientOverlay';

const media = {
    tablet: `@media only screen and (max-width: 768px)`,
}

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
    width: 100%;
    max-width: 1300px;
    height: 100%;

    margin: 0 auto;

    display: flex;
    flex-flow: row wrap;
    justify-content: center;

    z-index: 2;
`;

const Column = styled.div`
    width: 50%;
    height: 100%;
    min-width: 300px;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > * {
        z-index: 2;
    }

`;

const ColumnText = styled.div`
    width: 100%;

`;

const Card = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 500px;
    width: 100%;
    gap: 4px;
    align-items: flex-start;
    justify-content: flex-start;

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

const AboutIllustration = styled.img`
    position: absolute;
    bottom: 0;
    left: 5%;

    width: 50%;

    ${media.tablet} {
        width: 100%;
    }
`
const WebsiteButton = styled(Button)`

`

export function AboutSection(){
    return (
        <AboutWrapper id="about-section">
            <GradientOverlay />
            
            <Container>

                <Column>
                    <AboutIllustration 
                        src="/img/about-illustration.png"
                        alt="A logo da Mastic, que consiste em uma árvore composta por circúitos e o nome da empresa escrito por cima"
                    />
                </Column>

                <Column>
                    <ColumnText>
                        <Card>
                            <h1>Sobre nós</h1>
                            <p>
                                Somos a Mastic, uma empresa com o objetivo de mudar o Brasil
                            </p>
                            
                            <WebsiteButton type="primary" onClick={()=> {window.open('http://mastic-website-deploy.vercel.app/', '_blank')}}>
                                Acesse nosso website
                            </WebsiteButton>
                        </Card>
                    </ColumnText>
                </Column>

                
                
            </Container>
        </AboutWrapper>
    )
}