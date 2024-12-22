import React, { useState } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../../assets/images/hukomat punjab.jpg";
 
const NavigationBar = () => {
  const [language, setLanguage] = useState('EN'); 

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'EN' ? 'UR' : 'EN'));
  };

  return (
    <Navbar expand="lg" style={{ backgroundColor: '#2A2A7C' }}>
      <Container>
        <Navbar.Brand href="/" style={{ color: 'white', fontWeight: 'bold' }}>
          <img
            src={logo}
            alt="Logo"
            style={{ height: '40px', marginRight: '10px' }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" style={{ color: 'white' }}>
              Home
            </Nav.Link>
            <Nav.Link href="/service" style={{ color: 'white' }}>
              Service
            </Nav.Link>
            <Nav.Link href="/farmers-guide" style={{ color: 'white' }}>
              Farmer's Guide
            </Nav.Link>
            <Nav.Link href="/weather-analytic" style={{ color: 'white' }}>
              Weather Analytic
            </Nav.Link>
            <Nav.Link href="/collaboration" style={{ color: 'white' }}>
              Collaboration
            </Nav.Link>
            <Nav.Link href="/contact-us" style={{ color: 'white' }}>
              Contact Us
            </Nav.Link>
            <Nav.Link href="/about-us" style={{ color: 'white' }}>
              About Us
            </Nav.Link>
          </Nav>
          <Nav>
            <Button
              onClick={toggleLanguage}
              style={{ color: 'white', borderColor: 'white' }}
            >
              {language === 'EN' ? 'Urdu' : 'English'}
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
