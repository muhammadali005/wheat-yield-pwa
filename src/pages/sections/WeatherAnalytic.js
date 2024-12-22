import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const WeatherAnalytic = () => {
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
          Weather Analytics Section
        </h1>
      </div>

      <Container className="mt-4">
        <Row>
          <Col md={4}>
            <Card
              className="text-center mb-3"
              style={{
                border: "2px solid #5A4DAD", // Add border for highlighting
                borderRadius: "10px",
                padding: "100px",
                cursor: "pointer",
              }}
              onClick={() => navigate("/current-weather-conidtions")}
            >
              <Card.Body>
                <h5
                  style={{
                    color: "#5A4DAD",
                    fontSize: "large",
                    fontWeight: "bold",
                  }}
                >
                  Current Weather Conditions
                </h5>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card
              className="text-center mb-3"
              style={{
                border: "2px solid #5A4DAD", 
                borderRadius: "10px",
                padding: "100px",
                paddingTop:"110px",
                paddingBottom:"110px",
                cursor: "pointer",
              }}
              onClick={() => navigate("rainfall-prediction")}
            >
              <Card.Body>
                <h5
                  style={{
                    color: "#5A4DAD",
                    fontWeight: "bold",
                    fontSize: "large",
                  }}
                >
                  Rainfall Prediction
                </h5>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card
              className="text-center mb-3"
              style={{
                border: "2px solid #5A4DAD", // Add border for highlighting
                borderRadius: "10px",
                padding: "100px",
                cursor: "pointer",
              }}
              onClick={() => navigate("extreme-weather-conditions")}
            >
              <Card.Body>
                <h5
                  style={{
                    color: "#5A4DAD",
                    fontWeight: "bold",
                    fontSize: "large",
                  }}
                >
                  Extreme Weather Conditions
                </h5>
              </Card.Body>
            </Card>
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
};

export default WeatherAnalytic;
