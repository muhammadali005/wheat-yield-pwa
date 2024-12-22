import React from "react";
import cropImage from "../../assets/images/mainHomeImg.jpg";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const HomePageImg = () => {
  const navigate = useNavigate();

  return (
    <div
      className="position-relative"
      style={{
        backgroundImage: `url(${cropImage})`,
        height: "400px",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="position-absolute w-100 h-100"
        style={{
          top: 0,
          left: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      ></div>

      {/* Content */}
      <div
        className="position-absolute text-center text-white"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <h1 className="text-uppercase fw-bold">Wheat Crop Optimization and Yield Prediction Using ML</h1>
        <h4 className="fw-bold my-3">Data-Driven Farming Solutions</h4>

        <Container>
          <Row className="justify-content-center">
            <Col xs="auto">
              <Button
                className="me-2"
                style={{
                  padding: "10px 40px",
                  fontSize: "16px",
                  backgroundColor: "#2A2A7C",
                  border: "none",
                  borderRadius: "20px",
                  color: "#fff",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
                }}
                onClick={() => navigate("/signin")}
              >
                Sign In
              </Button>
              <Button
                style={{
                  padding: "10px 40px",
                  fontSize: "16px",
                  backgroundColor: "#2A2A7C",
                  border: "none",
                  borderRadius: "20px",
                  color: "#fff",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
                }}
                onClick={() => navigate("/signup")}
              >
                Sign Up
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default HomePageImg;
