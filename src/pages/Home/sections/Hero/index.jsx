import styled from 'styled-components'

import { Button } from "../../../../components/Button";

import heroBg from '/img/hero-bg.png';
import { GradientOverlay } from '../gradientOverlay';

import video from '/video/presentation_mastic.mp4';

const media = {
    tablet: `@media only screen and (max-width: 768px)`,
}


const HeroWrapper = styled.section`
    background-color: #1D202D;
    width: 100vw;
    min-height: 100vh;
    display:flex;
    flex-flow: row wrap;
    position: relative;
    scroll-snap-align: start;
`

const Container = styled.div`
    width: 100%;
    max-width: 1300px;
    margin: 0 auto;
    display: flex;
    flex-flow: row wrap;

    ${media.tablet} {
        flex-direction: column;
    }
`

const Col1 = styled.div`
    width: 100%;
    flex:1;
    display:flex;
    flex-flow: column nowrap;
    align-items: flex-start;
    justify-content: center;
    z-index: 2;

    > * {
        z-index: 2;
    }

    h1 {
        font-size: 90px;
        font-family: 'Modak', cursive;
        font-weight: 400;
        margin: 0;
        text-align: center;

        color:white;
        z-index: 2;
        text-transform: Uppercase;

        @media(max-width: 600px){
            font-size: 70px;
        }
        @media(max-width: 400px){
            font-size: 50px;
        }
    }
    p{
        font-size: 20px;
        color:white;
        z-index: 2;
        @media(max-width: 350px){
            font-size: 16px;
        }
    }
`

const HeroCard = styled.div`
    width: 100%;
    max-width: 450px;
    margin: 0 auto;
    height: 430px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const ButtonsContainer = styled.div`
    display:flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-content: center;
    width: 100%;
    gap: 8px;

    z-index:1;
`

const Col2 = styled.div`
    flex:1.5;
    display:flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    min-width: 300px;

    > * {
        z-index: 2;
    }

    @media(max-width: 1000px){
        width: 100%;
        flex-flow: row nowrap;
        align-items:center;
        justify-content:center;
    }
`

const BgImage = styled.img`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: auto;
    z-index: 0;
`

const VideoPlayer = styled.video`
    max-width: 700px;
    width: 100%;
    height: 400px;
    width: 100%;
    height: 430px;
    z-index: 2;
    object-fit: cover;

    @media(max-width: 600px){
        height: 200px;
    }
`

const SourceVideo = styled.source`
    z-index: 2;
`;

const ObjectVideo = styled.object`
    z-index: 2;
`;

const EmbedVideo = styled.embed`
    z-index: 2;
`;

export function HeroSection(){
    return (
        <HeroWrapper>
            <GradientOverlay />
            <BgImage 
                src={heroBg}
            />
            <Container>
                
                <Col1>
                    <HeroCard>
                        <h1>Automate</h1>
                        <p>
                            Cultive plantas de forma automática, sustentável e limpa com nosso produto
                        </p>
                        <ButtonsContainer>
                            <Button type="primary">
                                Mais sobre
                            </Button>
                            <Button type="secondary">
                                Baixe nosso aplicativo
                            </Button>
                        </ButtonsContainer>
                    </HeroCard>
                    
                </Col1>
                <Col2>
                    <VideoPlayer controls poster="/img/thumb1.png">
                        <SourceVideo src={video} type="video/mp4" />
                        <ObjectVideo>
                            <EmbedVideo src="demo.mp4" type="application/x-shockwave-flash" 
                            allowfullscreen="false" allowscriptaccess="always" />  		
                        </ObjectVideo>
                        Formato não suportado  
                    </VideoPlayer>         
                </Col2>
            </Container>
            
        </HeroWrapper>
    )
}