import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'next/link'


// Make Function
const NavBar = () => {
  return (<>
   <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Link className='navbar-brand' href="/">Todo Application</Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
              <Link className='nav-link' href="/login">Login</Link>
              <Link className='nav-link' href="/register">Register</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>);
}

// Export Function For Use in Another File
export default NavBar;