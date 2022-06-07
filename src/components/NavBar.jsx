import React from "react";
import CartWidget from "./CartWidget";
import { Navbar, Nav, Container } from "react-bootstrap";
import Logo from "./Logo";

function NavBar() {
  return (
    <Navbar bg="success" variant="dark">
      <Logo />
      <Container>
        <Navbar.Brand href="#home">Golf ToURU</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Inicio</Nav.Link>
          <Nav.Link href="#features">Tienda</Nav.Link>
          <Nav.Link href="#pricing">Contacto</Nav.Link>
          <CartWidget />
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
