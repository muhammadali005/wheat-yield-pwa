import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import logo from "../assets/images/logo.jpg";

const Footer = () => {
  return (
    <footer className="py-4" style={{ backgroundColor: "#2A2A7C", color: "white" }}>
      <Container>
        <Row>
          <Col md={3} className="text-center text-md-start mb-3 mb-md-0">
            <img src={logo} alt="Logo" style={{ width: "120px" }} />
            <p className="mt-2">
              Our AI-driven platform provides accurate wheat yield predictions, 
              helping farmers make informed decisions for better crop management.
            </p>
          </Col>

          <Col md={3} className="text-center text-md-end">
          </Col>

          <Col md={3} className="text-center mb-3 mb-md-0">
            <h5>Quick Links</h5>
            <Nav className="flex-column">
              <Nav.Link href="/" className="text-light">Home</Nav.Link>
              <Nav.Link href="/features" className="text-light">Services</Nav.Link>
              <Nav.Link href="/acknowledgement" className="text-light">Acknowledgement</Nav.Link>
            </Nav>
          </Col>

          <Col md={3} className="text-center text-md-end">
            <h5>Contact Us</h5>
            <p>Email: student@iqra.edu.pk</p>
            <p>Phone: +92 300 1234567</p>
            <p>Location: Karachi, Pakistan</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
