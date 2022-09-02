import React from 'react';

import enterpriseLogo from '../../assets/img/logo-mastic-removedBG.png';
import { ProblematicWrapper,
        Card,
        CardContainer,
        CardHeader,
        Logo,
        TitleWrapper,
        CardTitle} from './styles';

function Problematic() {
    return (
        <ProblematicWrapper className='problematic-wrapper'>
            <Card className='card'>
                <CardContainer className='card-container'>
                    <CardHeader className='card-header'>
                        <Logo src={ enterpriseLogo } alt="logo-mastic" className="logo-mastic" />
                        <div className='header-title'>Nossas prioridades</div>
                    </CardHeader>
                    <div className='card-text'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    </div>
                    <button className='card-button'>Saiba mais</button>
                </CardContainer>
            </Card>

            <Card className='card' id='meioAmbiente'>
                <TitleWrapper className='title-wrapper'>
                    <CardTitle className='card-title bg-gray'>
                    
                        <h2 className='title'>Meio Ambiente</h2>
                        <span className='card-data'>Um artigo publicado pelo UOL Notícias em 2015 comprova, através de dados obtidos pelo IBGE, que entre os anos de 2000 e 2010, a agricultura foi o maior causador do desmatamento. A fonte indica que o total de área desmatada foi quase o equivalente à área total do estado de São Paulo, isso vale um total de 65% de todo o desmatamento ocorrido no período observado. </span>
                    </CardTitle>
                </TitleWrapper>  
            </Card>
            
            <Card className='card' id='periferias'>
                <TitleWrapper className='title-wrapper'>
                    <CardTitle className='card-title bg-green'>
                        <h2 className='title'>Periferias</h2>
                        <span className='card-data'>é visível que a economia nacional sofreu um grande baque. Por conta disso, a população mais necessitada (que recebe até 1,5 salário-mínimo per capita) teve seu acesso a produtos básicos, como os alimentos, restrito. Dessa forma, mais uma vez a sociedade brasileira entrou no mapa da fome. </span>
                    </CardTitle>
                </TitleWrapper>
            </Card>
    </ProblematicWrapper>
    )
    
}

export default Problematic;