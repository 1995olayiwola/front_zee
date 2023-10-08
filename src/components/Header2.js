import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom'

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="/">
           <img src="http://res.cloudinary.com/olatechbus/image/upload/v1696785401/ui5vzud4ptnmbfiw3iov.jpg" alt="ZEEGOLD INVESTMENT LIMITED"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/"><Link className="nav-link" to="/">Home</Link></Nav.Link>
            <Nav.Link href="/blog"><Link  className="nav-link" to="/blog">Blog</Link></Nav.Link>
            <Nav.Link href="/about"><Link  className="nav-link" to="/about">About</Link></Nav.Link>
            <Nav.Link href="/contact"><Link  className="nav-link" to="/contact">Contact</Link></Nav.Link>
            <NavDropdown title="Category" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Category</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
           
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;