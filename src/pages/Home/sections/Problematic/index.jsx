import styled from "styled-components"

import {QuestionCard} from './QuestionCard'
import { GradientOverlay } from "../gradientOverlay";

const ProblematicWrapper = styled.section`
    background-color: #1D202D;
    width: 100vw;
    min-height: 100vh;
    display:flex;
    flex-flow: row nowrap;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
    scroll-snap-align: start;
    position: relative;
    scroll-snap-align: start;

    @media(max-width: 1000px){
        flex-flow: column nowrap;
        align-items:center;
    }

    
`

const Container= styled.div`
    width: 90%;
    max-width: 1300px;
    display:flex;
    flex-flow: row wrap;
    
    margin:0 auto;
    justify-content: center;
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
        color: white;
        font-size: 91px;
        font-weight: 400;
        font-family: 'Modak', cursive;

        line-height: 60px;
        padding: 10px 0 40px 0;

        @media(max-width: 800px){
            font-size: 60px;
        }
        @media(max-width: 400px){
            font-size: 40px;
        }
    }
    h3 {
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
        color: #FFFFFF;
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
    max-width: 510px;
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
            <Section>
                <GradientOverlay />
                <Container>
                    <CardsQuestionsImageBg 
                        src="/img/Cards_pesquisa.png"
                    />
                    <Column>
                        <ColumnText>
                            <h3>Automate é...</h3>
                            <h1>
                                <MarkedText>Renda</MarkedText> extra
                            </h1>
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
                        />
                        </QuestionCard>
                    </Column>
                </Container>
            </Section>

            
            <Section>
            <GradientOverlay />
                <Container>
                    <CardsQuestionsImageBg 
                        src="/img/Cards_pesquisa.png"
                    />
                    <Column>
                        <ColumnText>
                            <h3>Automate é...</h3>
                            <h1>
                                <MarkedText>Acessível</MarkedText>
                            </h1>
                            <p>
                                Temos ciência do poder de compra de nosso público alvo, e sabemos quanto estão dispostos a pagar por nosso produto
                            </p>
                        </ColumnText>
                    </Column>
                    <Column className="card-column">
                        <QuestionCard title="Qual o valor máximo que você pagaria em um dispositivo desses?">
                            <img 
                                src="/img/pergunta13.png"
                            />
                        </QuestionCard>
                    </Column>
                </Container>
            </Section>
            
            <Section>
            <GradientOverlay />
                <Container>
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