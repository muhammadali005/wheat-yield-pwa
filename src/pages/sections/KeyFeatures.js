import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const KeyFeatures = () => {
  const navigate = useNavigate();

  return (
    <Container fluid className="p-0">
      <div
        style={{
          textAlign: "center",
          padding: "20px 0",
        }}
      >
        <h1
          style={{
            fontWeight: "bold",
            color: "#005C45",
            textTransform: "uppercase",
            margin: 0,
          }}
        >
          Key Features
        </h1>
      </div>
      
      <Container className="mt-4">
        <Row>
        <Col md={4}>
            <Card
              className="text-center mb-3"
              style={{
                backgroundColor: "#FFF1F1",
                border: "none",
                borderRadius: "10px",
                padding: "20px",
                cursor: "pointer",
              }}
              onClick={() => navigate("/weather-updates")}
            >
              <Card.Body>
                <h5 style={{ color: "#005C45", fontWeight: "bold" }}>
                  Weather Updates
                </h5>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card
              className="text-center mb-3"
              style={{
                backgroundColor: "#FFF1F1",
                border: "none",
                borderRadius: "10px",
                padding: "20px",
                cursor: "pointer",
              }}
              onClick={() => navigate("/ai-driven-predictions")}
            >
              <Card.Body>
                <h5 style={{ color: "#005C45", fontWeight: "bold" }}>
                  AI-Driven Predictions
                </h5>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card
              className="text-center mb-3"
              style={{
                backgroundColor: "#FFF1F1",
                border: "none",
                borderRadius: "10px",
                padding: "20px",
                cursor: "pointer",
              }}
              onClick={() => navigate("/crop-management-tool")}
            >
              <Card.Body>
                <h5 style={{ color: "#005C45", fontWeight: "bold" }}>
                  Crop Management Tool
                </h5>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container className="mt-4">
        <Row>
          <Col md={4}>
            <Card
              className="text-center mb-3"
              style={{
                backgroundColor: "#FFF1F1",
                border: "none",
                borderRadius: "10px",
                padding: "20px",
                cursor: "pointer",
              }}
              onClick={() => navigate("/farmers-guide")}
            >
              <Card.Body>
                <h5 style={{ color: "#005C45", fontWeight: "bold" }}>
                  Farmer's Guide 
                </h5>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card
              className="text-center mb-3"
              style={{
                backgroundColor: "#FFF1F1",
                border: "none",
                borderRadius: "10px",
                padding: "20px",
                cursor: "pointer",
              }}
              onClick={() => navigate("/how-to-tutorials")}
            >
              <Card.Body>
                <h5 style={{ color: "#005C45", fontWeight: "bold" }}>
                  How-To Tutorials
                </h5>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card
              className="text-center mb-3"
              style={{
                backgroundColor: "#FFF1F1",
                border: "none",
                borderRadius: "10px",
                padding: "20px",
                cursor: "pointer",
              }}
              onClick={() => navigate("/pest-control-tips")}
            >
              <Card.Body>
                <h5 style={{ color: "#005C45", fontWeight: "bold" }}>
                Pest Control Tips
                </h5>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container className="mt-4">
        <Row>
          
        </Row>
      </Container>
    </Container>
  );
};

export default KeyFeatures;
