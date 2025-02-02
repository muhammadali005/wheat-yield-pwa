import React, { useState } from "react";
import { Navbar, Nav, Container, Button, Dropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../assets/images/logo.jpg";

const NavigationBar = () => {
  const [language, setLanguage] = useState("EN");
  const navigate = useNavigate();

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "EN" ? "UR" : "EN"));
  };

  return (
    <Navbar expand="lg" style={{ backgroundColor: "#2A2A7C", fontSize: "large", }}>
      <Container>
        <Navbar.Brand as={Link} to="/" style={{ color: "white", fontWeight: "bold" }}>
          {/* <p>AI-driven Wheat Crop Optimization and yield prediction Tool</p> */}
          <img
            src={logo}
            alt="Logo"
            style={{ height: "40px", marginRight: "10px" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" style={{ color: "white" }}>
              Home
            </Nav.Link>
            <Dropdown as={Nav.Item} className="nav-item-hover">
              <Dropdown.Toggle
                as={Nav.Link}
                style={{
                  color: "white",
                  border: "none",
                  background: "none",
                  textDecoration: "none",
                }}
              >
                Services
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => navigate("/crop-management-tool")}>
                  Crop Management Tool
                </Dropdown.Item>
                <Dropdown.Item onClick={() => navigate("/wheat-crop-calendar")}>
                  Wheat Crop Calendar
                </Dropdown.Item>
                <Dropdown.Item onClick={() => navigate("/locations")}>
                  Our Locations
                </Dropdown.Item>
                <Dropdown.Item onClick={() => navigate("/farmers-guide")}>
                  Farmer's Guide
                </Dropdown.Item>
                <Dropdown.Item onClick={() => navigate("/yield-prediction")}>
                  Yield Prediction
                </Dropdown.Item>
                <Dropdown.Item onClick={() => navigate("/phenological-stages")}>
                  Phenological Stages
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Nav.Link as={Link} to="/about-us" style={{ color: "white" }}>
              About Us
            </Nav.Link>
            <Nav.Link as={Link} to="/faqs" style={{ color: "white" }}>
              FAQ's
            </Nav.Link>
            <Dropdown as={Nav.Item} className="nav-item-hover">
              <Dropdown.Toggle
                as={Nav.Link}
                style={{
                  color: "white",
                  border: "none",
                  background: "none",
                  textDecoration: "none",
                }}
              >
                Acknowledgement
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>
                  Meteo Blue
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
          <Nav>
            <Button 
              style={{ color: "white", borderColor: "white" }} 
              onClick={() => navigate("/login")}
            >
              Login
            </Button>
          </Nav>
          &nbsp;
          <Nav>
            <Button
              style={{ color: "white", borderColor: "white" }}
              onClick={() => navigate("/signup")}
            >
              SignUp
            </Button>
          </Nav>
          &nbsp;
          <Nav>
            <Button
              onClick={toggleLanguage}
              style={{ color: "white", borderColor: "white" }}
            >
              {language === "EN" ? "Urdu" : "English"}
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>

      <style>
        {`
          .nav-item-hover:hover .dropdown-menu {
            display: block;
          }
          .nav-item-hover .dropdown-toggle::after {
            display: none !important;
          }
        `}
      </style>
    </Navbar>
  );
};

export default NavigationBar;
