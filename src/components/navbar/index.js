import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

const NavBar = () => {
  return (
  
<Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Steam-Stats</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/home"  >Home</Nav.Link>
        <Nav.Link href="/profile">Stats</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Dropdown 1</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Dropdown 2</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Dropdown 3</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Signout</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>


    
  );
};
export default NavBar;