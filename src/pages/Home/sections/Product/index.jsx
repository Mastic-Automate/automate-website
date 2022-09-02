import styled from 'styled-components'
import { Button } from '../../../../components/Button'

import {GradientOverlay} from '../gradientOverlay'

const ProductWrapper = styled.section`
    scroll-snap-align: start;
    height: 100vh;
    display:flex;
    flex-flow: column nowrap;
    justify-content: center;
    position: relative;
    overflow: hidden;

    h1, p {
        color: white;
        z-index:2;
    }

    h1{
        font-family: 'Modak', cursive;
        font-weight: 400;
        line-height: 60px;
        font-size: 91px;

        @media(max-width: 800px){
            font-size: 60px;
        }
        @media(max-width: 600px){
            font-size: 40px;
        }
    }
    p{
        font-size: 20px;
    }
`

const Container = styled.div`
    width: 90%;
    max-width: 1300px;

    margin: 0 auto;
`;

const Card = styled.div`
    width: 100%;
    max-width: 500px;

    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    @media(min-width: 400px){
        gap: 50px;
        align-items: flex-start;
    }

    > * {
        z-index: 2;
    }
`;

const ProductImg = styled.img`
    position: absolute;
    right: 0;
    bottom: -200px;
    z-index: 0;
    width: 50%;
    height: auto;
`

export function ProductSection(){
    return (
        <ProductWrapper>
            <GradientOverlay />
            <ProductImg 
                src="/img/automate-product.png"
            />

            <Container>
                <Card>
                    <h1>NOSSO PRODUTO</h1>
                    <p>
                        Nosso dispositivo é capaz de monitorar o solo de um vaso de planta e mante-lo úmido para garantir o crescimento saudável de sua planta
                    </p>
                    <Button>
                        Comprar
                    </Button>
                </Card>
                
            </Container>  
        </ProductWrapper>
    )
}