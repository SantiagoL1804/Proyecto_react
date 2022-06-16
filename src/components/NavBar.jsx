import React from "react";
import CartWidget from "./CartWidget";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import Logo from "./Logo";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Navbar bg="success" variant="dark">
      <Logo />
      <Container>
        <Navbar.Brand exact="true" to="/">
          Golf ToURU
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link to="/inicio">Inicio</Nav.Link>
            <NavDropdown title="Categorías" id="basic-nav-dropdown">
              <NavDropdown.Item to="#action/3.1">Drivers</NavDropdown.Item>
              <NavDropdown.Item to="#action/3.2">Hierros</NavDropdown.Item>
              <NavDropdown.Item to="#action/3.3">Putters</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
            <Nav.Link to="/contacto">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <CartWidget items={4} />
      </Container>
    </Navbar>
  );
}

export default NavBar;
