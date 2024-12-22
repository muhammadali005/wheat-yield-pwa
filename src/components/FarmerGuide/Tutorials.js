import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const Tutorials = () => {
  const tutorials = [
    { title: "Using the Prediction Tool", videoUrl: "/videos/tutorial1.mp4" },
    { title: "Pest Control Tips", videoUrl: "/videos/tutorial2.mp4" },
    { title: "Fertilizer Application", videoUrl: "/videos/tutorial3.mp4" },
  ];

  return (
    <Container className="tutorials-section py-5">
      <h2 className="text-center mb-4">How-To Tutorials</h2>
      <Row>
        {tutorials.map((tutorial, idx) => (
          <Col key={idx} md={4} className="mb-3">
            <Card>
              <Card.Body>
                <Card.Title>{tutorial.title}</Card.Title>
                <Card.Text>
                  <a href={tutorial.videoUrl} target="_blank" rel="noopener noreferrer">
                    Watch Video
                  </a>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Tutorials;
