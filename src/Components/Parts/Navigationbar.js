import React from 'react';
import "./Navigationbar.css";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
const Navigationbar = () => {
    return (
        <div>
     <Navbar bg="light" expand="lg">
      <Container fluid>
      <Navbar.Brand href="#home">
            <img
              src="https://icms-image.slatic.net/images/ims-web/bfe8de2c-b737-42ab-b1f1-576042ab0412.png"
              width="70"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            
            <Form className="d-flex " size="lg">
            <Form.Control 
              type="search"
              placeholder="Search"
              className="col-8 center me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          </Nav>
          <Button variant="outline-success">Login</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  
        </div>
    );
};

export default Navigationbar;