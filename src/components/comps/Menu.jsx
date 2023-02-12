import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import {Link, NavLink} from 'react-router-dom';
//import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import  React from 'react';

function Menu() {
    

  return (
    <>
      <Navbar bg="dark" variant="dark" className='bg-black h-20 w-full'>
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link>
              {' '}
              <Link className="text-decoration-none text-white" to="/">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              {' '}
               <Link className="text-decoration-none text-white" to="/Myprofile">
                Profile
              </Link>
            </Nav.Link>
            <Nav.Link >
              {' '}
             <Link className="text-decoration-none text-white" to="/bank"> 
                Bank
             </Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default Menu;


