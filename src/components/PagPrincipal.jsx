import Navegation from './Navegation.jsx'
import ImageDeg from './ImageDeg.jsx';

import { Button, Col, Container, Row } from 'react-bootstrap';

const PagPrincipal = () => {
  return (
    <>
    <Container>
      <Row>
        <Col><Navegation /></Col>
      </Row>
      <Row>
        <Col className='hola'>
          <h1>Pon aprueba tus conocimientos y desarolla tus habilidades en distintos laboratorios!!</h1>
          <button className='hola1'>Probar laboratorios!!</button>
        </Col>
        <Col>
          <ImageDeg />
        </Col>
      </Row>
    </Container>
  </>
  )
}

export default PagPrincipal