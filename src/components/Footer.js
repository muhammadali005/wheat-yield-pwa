import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import logo from "../assets/images/logo.png";

const Footer = () => {
  return (
    <footer
      className="py-4"
      style={{ backgroundColor: "#005C45", color: "white" }}
    >
      <Container>
        <Row>
          <Col md={6} className="d-flex flex-column mb-3 mb-md-0">
            <div className="d-flex align-items-center">
              <img
                src={logo}
                alt="Logo"
                style={{ width: "120px", marginRight: "10px" }}
              />
              <p className="fw-bold mb-0">
                AI-Driven Wheat Crop Optimization and Yield Prediction Tool
              </p>
            </div>
            <p className="mt-2 mb-0">
              Our AI-driven platform provides accurate wheat yield predictions,
              helping farmers make informed decisions for better crop
              management.
            </p>
          </Col>


          <Col md={3} className="text-center mb-3 mb-md-0">
            <h5>Quick Links</h5>
            <Nav className="flex-column">
              <Nav.Link href="/" className="text-light">
                Home
              </Nav.Link>
              <Nav.Link href="/features" className="text-light">
                Services
              </Nav.Link>
              <Nav.Link href="/acknowledgement" className="text-light">
                Acknowledgement
              </Nav.Link>
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
