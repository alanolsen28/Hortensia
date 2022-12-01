import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Cartwidget from '../Cartwidget/Cartwidget';
import "../carrito.css";
import { Link } from 'react-router-dom';

let logo = '/img/logo.jpg'

function NavBar(p) {
  return (
    <Navbar className='colorCrema' expand="lg">
      <Container>
           <Link to='/'><p className='navlink'>Hortensia</p></Link>  
        <img src={logo} width='50' className='m-3'/>
        <Navbar.Toggle aria-controls="basic-navbr-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/category/ramos"><p className='navlink container'>Ramos</p></Link>
            <Link to="/category/flores"><p className='navlink container'>Flores</p></Link>    
          </Nav>
          <br />
            <Form className="d-flex">
            <Form.Control
              type="search"
              className="me-2"
              aria-label="Search"
              placeholder="Buscar"
            />
          <Cartwidget/>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>


  );
}

export default NavBar;

