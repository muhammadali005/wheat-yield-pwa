import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import icon1 from "../../assets/images/icon1.png";
import icon2 from "../../assets/images/icon2.png";
import icon3 from "../../assets/images/icon3.png";

const Features = () => {
  const features = [
    { icon: icon1, title: "AI-Powered Predictions", text: "Get accurate forecasts with machine learning." },
    { icon: icon2, title: "Remote Sensing Data", text: "Analyze satellite data for better insights." },
    { icon: icon3, title: "User-Friendly Interface", text: "Accessible tools for all farmers." },
  ];

  return (
    <Container className="features-section py-5">
      <h2 className="text-center mb-4">Key Features</h2>
      <Row>
        {features.map((feature, idx) => (
          <Col key={idx} md={4} className="mb-3">
            <Card className="text-center">
              <Card.Img variant="top" src={feature.icon} style={{ width: "50px", margin: "20px auto" }} />
              <Card.Body>
                <Card.Title>{feature.title}</Card.Title>
                <Card.Text>{feature.text}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Features;
