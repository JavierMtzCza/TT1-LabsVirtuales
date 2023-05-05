import Navegation from './components/Navegation.jsx'
import ImageDeg from './components/ImageDeg.jsx';

import "./app.css"

import { Button, Col, Container, Row } from 'react-bootstrap';

const App = () => {
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

export default App