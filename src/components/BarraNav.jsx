import { Link } from 'react-router-dom';
import {Container, Nav, Navbar} from 'react-bootstrap';


const BarraNav = () => {
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">🏡Home</Nav.Link>
            <Nav.Link as={Link} to="/contacto">📒Contacto</Nav.Link>
                       <Navbar.Text className="text-white ms-3 text-decoration-none">Happy Cake 🍰 </Navbar.Text>
            
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default BarraNav