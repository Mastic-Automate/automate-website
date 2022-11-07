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
    width: 90%;
    max-width: 1300px;

    margin: 0 auto;
    display: flex;
    justify-content: flex-end;
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
    width: 100%;
    max-width: 500px;

    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: flex-end;

    h1, p {
        z-index:2;
    }

    h1 {
        margin: 0;
        color:white;
        font-size: 90px;
        font-weight: 400;
        font-family: 'Modak', cursive;
        line-height: 60px;

        @media(max-width: 800px){
            line-height: 30px;
            font-size: 60px;
        }
        @media(max-width: 400px){
            line-height: 10px;
            font-size: 40px;
        }
    }

    p {
        color:white;
        font-size: 20px;
        font-family: Poppins;
        text-align: right;

        opacity: 0.8;
    }
`;

const AboutIllustration = styled.img`
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 0;
    height: auto;
    width: 50%;

    ${media.tablet} {
        width: 100%;
        bottom: 0;
        left: 0;
    }
`
const WebsiteButton = styled(Button)`

`

export function AboutSection(){
    return (
        <AboutWrapper id="about-section">
            <GradientOverlay />
            <AboutIllustration 
                src="/img/about-illustration.png"
                alt="A logo da Mastic, que consiste em uma árvore composta por circúitos e o nome da empresa escrito por cima"
            />

            <Container>
                <Column>
                    <ColumnText>
                        <Card>
                            <h1>Sobre nós</h1>
                            <p>
                                Somos a Mastic, uma empresa com o objetivo de mudar o Brasil
                            </p>
                            
                            <WebsiteButton 
                                type="primary" 
                                onClick={()=> {window.open('https://mastic-next-deploy.vercel.app/', '_blank')}}
                            >
                                Acesse nosso website
                            </WebsiteButton>
                        </Card>
                    </ColumnText>
                </Column>

                
                
            </Container>
        </AboutWrapper>
    )
}