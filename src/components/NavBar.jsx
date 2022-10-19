import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Cartwidget from './Cartwidget';


function NavBar() {
  return (
    <Container fluid>
    <Navbar bg="light" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="#home">Hortensia</Navbar.Brand>  
         <img src='./img/logo.jpg' width='50'/>
        <Navbar.Toggle aria-controls="basic-navbr-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Ramos</Nav.Link>
            <Nav.Link href="#link">Flores</Nav.Link>
          </Nav>
            <Form className="d-flex">
            <Form.Control
              type="search"
              className="me-2"
              aria-label="Search"
              placeholder="Buscar"
            />
          <Button variant="outline-success">
          <img src={Cartwidget}/>
          </Button>git commit - m
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Container>
  );
}

export default NavBar;