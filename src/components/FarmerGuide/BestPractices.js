import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const BestPractices = () => {
  const practices = [
    { title: "Soil Preparation", text: "Steps to prepare fertile soil for wheat." },
    { title: "Seed Selection", text: "Choosing the right wheat variety for your region." },
    { title: "Irrigation Scheduling", text: "Optimal watering cycles for better yields." },
  ];

  return (
    <Container className="best-practices py-5">
      <h2 className="text-center mb-4">Best Practices</h2>
      <Row>
        {practices.map((practice, idx) => (
          <Col key={idx} md={4} className="mb-3">
            <Card>
              <Card.Body>
                <Card.Title>{practice.title}</Card.Title>
                <Card.Text>{practice.text}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BestPractices;
