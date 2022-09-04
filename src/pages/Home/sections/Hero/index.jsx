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
    width: 100%;
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
        width: 90%;
        flex-direction: column-reverse;
        padding: 0 0 80px; 
    }
`

const Col1 = styled.div`
    width: 50%;
    padding: 0 50px;
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
        color:white;
        z-index: 2;
        text-transform: Uppercase;
        margin: 0;

        ${media.tablet} {
            text-align: center;
            font-size: 60px;
        }

    }
    p{
        font-size: 20px;
        color:white;
        z-index: 2;
        opacity: .8;
        font-family: Poppins;

        @media(max-width: 350px){
            font-size: 16px;
        }
    }
    ${media.tablet} {
        text-align: center;
        padding: 0;
        width: 100%;
    }
`

const HeroCard = styled.div`
    width: 100%;
    margin: 0 auto;
    height: 430px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;


    ${media.tablet} {
        justify-content: center;
        height: 300px;
    }
`;

const ButtonsContainer = styled.div`
    display:flex;
    flex-flow: row;
    justify-content: flex-start;
    width: 100%;
    gap: 8px;
    z-index:1;
`

const Col2 = styled.div`
    width: 50%;
    padding: 0 50px;
    flex:1.5;
    display:flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    min-width: 300px;
    > * {
        z-index: 2;
    }
    ${media.tablet}{
        width: 100%;
        padding: 0;
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
                        <div>
                            <h1>Automate</h1>
                            <p>
                                Cultive plantas de forma automática, sustentável e limpa com nosso produto
                            </p>
                        </div>
                        
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