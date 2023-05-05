
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import img from "../images/matematicas.png"

function App() {

   return (
      <>
         <Container>
            <Navbar collapseOnSelect expand="lg">
               <Container>
                  <Navbar.Brand href="#home">
                     <img
                        src={img}
                        width="35"
                        height="35"
                     />{' '}
                     Math Learn Lab
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse id="responsive-navbar-nav">
                     <Nav fill className="ms-auto">
                        <Nav.Link className='px-4' href="#Documentacion">Documentacion</Nav.Link>
                        <Nav.Link className='px-4' href="#Ayuda">Ayuda</Nav.Link>
                        <Button variant="outline-dark" className='mx-2 px-4'>Registrarse</Button>
                        <Button variant="dark" className='mx-2 px-4'>Iniciar Sesion</Button>
                     </Nav>
                  </Navbar.Collapse>
               </Container>
            </Navbar>
         </Container>
      </>
   )
}

export default App
