import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavLink , Link} from 'react-router-dom'
export default function NavBar() {

    const red = {
        color:"red",
    }

  return (
    <>
      <Navbar fixed='top' bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand style={{color:'red'}}><Link to={'/'}>RPM Tienda</Link></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link ><NavLink to={'/category/Honda'}>Honda</NavLink></Nav.Link>
            <Nav.Link ><NavLink to={'/category/Yamaha'}>Yamaha</NavLink></Nav.Link>
            <Nav.Link ><NavLink to={'/category/Kawazaki'}>Kawazaki</NavLink></Nav.Link>
          </Nav>
        </Container>
        <CartWidget/>
      </Navbar>    
      </>
  );
}