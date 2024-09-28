import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <>
    <Navbar bg="dark" data-bs-theme="dark" style={{height:"60px"}}>
      <Container>
        <Navbar.Brand href="#home"><NavLink to="/"className="text-decoration-none text-blue">Cloud Uploads</NavLink></Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home"><NavLink to="/register"className="text-decoration-none">Register</NavLink></Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    </>
  )
}

export default Header
