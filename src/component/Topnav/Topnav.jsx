import React, { Fragment } from 'react'
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import Offcanvas from 'react-bootstrap/Offcanvas';
import '../../assets/css/custom.css';

function Topnav() {
  return (
    <Fragment>
        <>
        
       <Navbar expand={false} fixed="top"className='nav'>
  <Container fluid>
    <Navbar.Brand ><NavLink to='/' className='navtitle'>HABS HOME</NavLink></Navbar.Brand>
    <Navbar.Toggle aria-controls="offcanvasNavbar" className='bg-light' />
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel" className='navItem'>HABS HOME</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <Nav.Link  >< NavLink exact activeStyle={{color:"rgb(201, 128, 11)"}} to='/' className='navItem'>HOME</NavLink></Nav.Link>
          <Nav.Link ><NavLink exact activeStyle={{color:"rgb(201, 128, 11)"}} to='/about' className='navItem'>ABOUT</NavLink></Nav.Link>
          <Nav.Link><NavLink exact activeStyle={{color:"rgb(201, 128, 11)"}} to='/prop' className='navItem'>AVAILABLE PROPERTIES</NavLink></Nav.Link>
          <Nav.Link><NavLink exact activeStyle={{color:"rgb(201, 128, 11)"}} to='/contact' className='navItem'>CONTACT</NavLink></Nav.Link>
          
          
          
   


        </Nav>
        <Form className="d-flex" >
              <Form.Control
                type="search"
                name="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                
              />
              <Button variant="outline-dark" type="submit" className='navItem'>
                Search
              </Button>
            </Form>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>
</>
    </Fragment>
  )
}

export default Topnav
