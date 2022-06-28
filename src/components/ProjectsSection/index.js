import React from 'react';
import { ProjectsWrapper,
        CardProjects,
        Row,
        Line,
        CarouselWrapper,
        Carousel,
        Card,
        CardHeader,
        CardBody} from './styles';

import enterpriseLogo from '../../assets/img/logo-mastic-removedBG.png';

function ProjectsSection() {
return (
  <ProjectsWrapper className='projects-wrapper'>
    <CardProjects className='card-projects'>
      <h1 className='card-projects-title'>Projetos</h1>
      <Row className='row'>
        <Line className='line'></Line>
        <img src={ enterpriseLogo } alt="logo-mastic" className="logo-mastic" />
        <Line className='line'></Line>
      </Row>
    </CardProjects>
    <CarouselWrapper className='carousel-wrapper'>
      <Carousel className='carousel'>

        <Card className='card'>
          <CardHeader className='card-header'>
            <img src='./img/automate-logo-cutted.png' alt='logo do automate' />
          </CardHeader>
          <CardBody className='card-body'>
            <h1>Automate</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <button className='btn-card'>SAIBA mais</button>
          </CardBody>
        </Card>

        <Card className='card'>
          <CardHeader className='card-header'>
            <img src='./img/automate-logo-cutted.png' alt='logo do automate' />
          </CardHeader>
          <CardBody className='card-body'>
            <h1>Automate</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <button className='btn-card'>SAIBA mais</button>
          </CardBody>
        </Card>

        <Card className='card'>
          <CardHeader className='card-header'>
            <img src='./img/automate-logo-cutted.png' alt='logo do automate' />
          </CardHeader>
          <CardBody className='card-body'>
            <h1>Automate</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <button className='btn-card'>SAIBA mais</button>
          </CardBody>
        </Card>

      </Carousel>
      <button className='btn-primary'>Veja mais projetos</button>
    </CarouselWrapper>
  </ProjectsWrapper>
);
}

export default ProjectsSection;