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
            color: "#5A4DAD",
            textTransform: "uppercase",
            margin: 0,
          }}
        >
          Key Features Section
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
              onClick={() => navigate("/extensive-weather-insights")}
            >
              <Card.Body>
                <h5 style={{ color: "#5A4DAD", fontSize:"large", fontWeight: "bold" }}>
                  Extensive Weather
                  <br />
                  Insights
                </h5>
                <p style={{ color: "#5A4DAD", fontSize:"large" }}>
                  Utilize 24 years of detailed climatic data for strategic
                  farming decisions
                </p>
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
                <h5 style={{ color: "#5A4DAD", fontWeight: "bold", fontSize:"large" }}>
                  AI-Driven
                  <br />
                  Predictions
                </h5>
                <p style={{ color: "#5A4DAD", fontSize:"large"}}>
                  Accurate yield forecasting based on machine learning models
                </p>
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
              onClick={() => navigate("/crop-management-tools")}
            >
              <Card.Body>
                <h5 style={{ color: "#5A4DAD", fontWeight: "bold", fontSize:"large" }}>
                  Crop Management
                  <br />
                  Tools
                </h5>
                <p style={{ color: "#5A4DAD", fontSize:"large"}}>
                  Comprehensive guidance on sowing, irrigation and chemical
                  recommendations
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default KeyFeatures;
