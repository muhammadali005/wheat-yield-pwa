import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import cropImage from "../../assets/images/crop.jpg";

const FarmersGuideSection = () => {
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
          Farmer's Guide
        </h1>
      </div>

      <div
        style={{
          position: "relative",
          backgroundImage: `url(${cropImage})`,
          height: "400px",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        ></div>

        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              textTransform: "uppercase",
              fontWeight: "bold",
              color: "white",
            }}
          >
            Empowering Farmers
          </h1>
          <h3
            style={{
              fontWeight: "bold",
              color: "white",
              margin: "10px 0",
            }}
          >
            Your Ultimate Wheat Cultivation Guide
          </h3>
          <h5
            style={{
              margin: "0 auto",
              maxWidth: "500px",
              color: "white",
            }}
          >
            Learn best practices, gain insights, and maximize your yield with
            our expert guidance
          </h5>
        </div>
      </div>

      {/* <Container className="mt-4">
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
              onClick={() => navigate("/best-practices")}
            >
              <Card.Body>
                <h5 style={{ color: "#5A4DAD", fontWeight: "bold" }}>
                  Best Practices
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
                <h5 style={{ color: "#5A4DAD", fontWeight: "bold" }}>
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
              onClick={() => navigate("/chemical-pest-control")}
            >
              <Card.Body>
                <h5 style={{ color: "#5A4DAD", fontWeight: "bold" }}>
                  Chemical & Pest Control Tips
                </h5>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container> */}
    </Container>
  );
};

export default FarmersGuideSection;
