import styled from "styled-components"
import {CaretLeft, CaretRight} from "phosphor-react";

import {QuestionCard} from './QuestionCard'
import { GradientOverlay } from "../gradientOverlay";

const media = {
    tablet: `@media only screen and (max-width: 768px)`,
}

const ProblematicWrapper = styled.section`
    background-color: #1D202D;
    width: 100%;
    min-height: 100vh;
    display:flex;
    flex-flow: row nowrap;
    overflow-x: scroll;
    scroll-snap-align: center;
    scroll-behavior: smooth;
    scroll-snap-type: x mandatory;
    position: relative;
    
`

const Container= styled.div`
    width: 100%;
    max-width: 1300px;
    display:flex;
    flex-flow: row wrap;
    
    margin:0 auto;
    justify-content: center;
`;

const ContainerArrows = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;

    position: absolute;

    top: 50%;
    z-index: 2;
`;

const Section = styled.div`
    min-height: 100vh;
    min-width: 100vw;
    scroll-snap-align: start;
    flex-flow: row wrap;
    display:flex;
    align-items:center;
    position: relative;

    h1 {
        line-height: 30px;
        padding-bottom: 50px;
        color: white;
        font-size: 91px;
        font-weight: 400;
        font-family: 'Modak', cursive;
        margin: 0;

        @media(max-width: 800px){
            font-size: 60px;
        }
        @media(max-width: 400px){
            font-size: 40px;
        }
    }

    h3 {
        line-height: 10px;
        font-family: 'Modak', cursive;
        font-weight: 400;
        font-size: 40px;
        color: rgba(255, 255, 255, .4);
        @media(max-width: 800px){
            font-size: 20px;
        }
    }
    p {

        font-size: 24px;
        font-family: Poppins;
        color: #FFFFFF;
        opacity: .8;
        margin: 0;
        @media(max-width: 400px){
            font-size: 16px;
        }
    }
`
const MarkedText = styled.span`
    color: #22C27F;
`

const Column = styled.div`
    width: 50%;
    min-width: 300px;
    display:flex;
    flex-flow: column nowrap;
    justify-content:center;
    align-items: center;
    z-index:2;

    &.card-column {
        margin: 50px 0;
    }
`;

const ColumnText = styled.div`
    height: 390px;
    max-width: 510px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    ${media.tablet} {
        height: 200px;
        width: 100%;
    }
`;

const CardsQuestionsImageBg = styled.img`
    position: absolute;
    right: 0;
    bottom: 0;
    width: 100%;
    
    height: auto;
`

export function ProblematicSection(){
    return (
        <ProblematicWrapper>
            <Section id="section2">
                <GradientOverlay />
                <Container>
                    <ContainerArrows>    
                        
                        <CaretRight size={80} weight="bold" color="none"/>

                        <a href="#section2.1">
                            <CaretRight size={80} weight="bold" color="white"/>
                        </a>
                        
                    </ContainerArrows>

                    <CardsQuestionsImageBg 
                        src="/img/Cards_pesquisa.png"
                    />
                    <Column>
                        <ColumnText>
                            <div>
                                <h3>Automate é...</h3>
                                <h1>
                                    <MarkedText>Renda</MarkedText> extra
                                </h1>
                            </div>
                            
                            <p>
                                Conhecemos nosso público alvo e sabemos que a grande maioria tem interesse em uma renda extra de forma prática
                            </p>
                        </ColumnText>
                            
                    </Column>

                    <Column className="card-column">
                        <QuestionCard
                            title="Você teria interesse em:"
                        >
                        <img 
                            src="/img/pergunta2.png"
                            alt="Um gráfico indicando os interesses dos participantes da pesquisa, indicando que a maioria têm interesse em uma renda extra de forma prática"
                        />
                        </QuestionCard>
                    </Column>
                </Container>
            </Section>

            
            <Section id="section2.1">
            <GradientOverlay />
                <Container>
                    <ContainerArrows>    

                        <a href="#section2">
                            <CaretLeft size={80} weight="bold" color="white"/>
                        </a>
                        
                        <a href="#section2.2">
                            <CaretRight size={80} weight="bold" color="white"/>
                        </a>
                        
                    </ContainerArrows>

                    <CardsQuestionsImageBg 
                        src="/img/Cards_pesquisa.png"
                    />
                    <Column>
                        <ColumnText>
                            <div>
                                <h3>Automate é...</h3>
                                <h1>
                                    <MarkedText>Acessível</MarkedText>
                                </h1>
                            </div>
                            
                            <p>
                                Temos ciência do poder de compra de nosso público alvo, e sabemos quanto estão dispostos a pagar por nosso produto
                            </p>
                        </ColumnText>
                    </Column>
                    <Column className="card-column">
                        <QuestionCard title="Qual o valor máximo que você pagaria em um dispositivo desses?">
                            <img 
                                src="/img/pergunta13.png"
                                alt="Um gráfico apontando uma pesquisa sobre o preço que nosso público alvo está disposto a pagar, indicando que a maioria pagaria entre 70 e 80 reais"
                            />
                        </QuestionCard>
                    </Column>
                </Container>
            </Section>
            
            <Section id="section2.2">
            <GradientOverlay />
                <Container> 
                    <ContainerArrows>          
                        <a href="#section2.1">
                            <CaretLeft size={80} weight="bold" color="white"/>
                        </a>          
                    </ContainerArrows>

                    <CardsQuestionsImageBg 
                        src="/img/Cards_pesquisa.png"
                    />
                    <Column>
                        <h3>Automate é...</h3>
                        <h1>
                            Alimentos <MarkedText>naturais</MarkedText>
                        </h1>
                        <p>
                            Através do plantio de alimentos em ambiente caseiro, é possível produzir alimento livre de agrotóxicos e saudável, além de criar um negócio sustentável
                        </p>
                    </Column>
                </Container>
            </Section>
            
        </ProblematicWrapper>
    )
}