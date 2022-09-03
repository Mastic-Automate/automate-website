import styled from 'styled-components'
import { CommentCard } from '../../../../components/CommentCard'
import { MarkedText } from '../../MarkedText'
import { GradientOverlay } from '../gradientOverlay';

const CommentsWrapper = styled.section`
    background-color: #1D202D;
    scroll-snap-align: start;
    min-height: 100vh;
    position: relative;
    width: 100%;

    h1, p {
        z-index:2;
    }

    h1 {
        color:white;
        font-size: 60px;
        font-weight: 400;
        font-family: 'Modak', cursive;
        line-height: 60px;
        margin: 0 0 25px;

        @media(max-width: 800px){
            font-size: 50px;
        }
        @media(max-width: 400px){
            font-size: 40px;
        }
    }

    h3 {
        font-size: 40px;
        font-family: 'Modak', cursive;
        font-weight: 400;
        color: rgba(255, 255, 255, .4);
        @media(max-width: 800px){
            font-size: 20px;
        }
    }

    p {
        color:white;
        font-size: 18px;
        font-family: Poppins;
    }
`

const Container = styled.div`
    width: 100%;
    max-width: 1300px;

    margin: 0 auto;

    display: flex;
    flex-flow: row wrap;
    justify-content: center;
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

const FeedBackImg = styled.img`
    position: absolute;
    bottom: 0;
    left: 0;

    width: 50%;
`

const BgCards = styled.img`
    width: 100vw;
    position: absolute;
    bottom: 0;
    left:0;
    z-index: 0;
`


export function CommentsSection(){
    return (
        <CommentsWrapper>
            <GradientOverlay />
            <BgCards 
                src="/img/feedback-cards.png"
            />
            <Container>
                
                <Column>
                    <FeedBackImg 
                        src="/img/feedback.png"
                    />
                </Column>

                <Column>
                    <ColumnText>
                        <h3>Feedback</h3>
                        <h1>Veja o que nossos <MarkedText>usuários</MarkedText> têm a dizer</h1>

                        <CommentCard 
                            text='"A ideia automatizar os cuidados das plantas é ótimo, vai facilitar e otimizar tempo"'
                        />
                    </ColumnText>
                </Column>

            </Container>
            
        </CommentsWrapper>
    )
}