import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Testimonials.css";
import img1 from "../../assets/images/icon1.jpeg"
import img2 from "../../assets/images/icon2.jpeg"

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ali Khan",
      feedback: "This tool helped me increase my wheat yield by 25%! Highly recommended.",
      location: "Multan, Pakistan",
      image: img1,
    },
    {
      name: "Sara Ahmed",
      feedback: "Easy to use and very accurate predictions. A must-have for farmers.",
      location: "Lahore, Pakistan",
      image: img2,
    }
  ];

  return (
    <div style={{ backgroundColor: "white", padding: "50px 0" }}>
      <Container className="testimonials-section"  style={{ backgroundColor: "white"}}>
        <h2 className="text-center mb-5">Testimonials Section</h2>
        <Row>
          {testimonials.map((testimonial, idx) => (
            <Col key={idx} md={6} className="mb-4">
              <Card className="testimonial-card text-center">
                <div className="testimonial-avatar mx-auto mt-3">
                  <img
                    src={testimonial.image}
                    alt={`${testimonial.name}`}
                    className="rounded-circle"
                  />
                </div>
                <Card.Body>
                  <h5 className="testimonial-name">{testimonial.name}</h5>
                  <p className="testimonial-feedback">"{testimonial.feedback}"</p>
                  <p className="testimonial-location">{testimonial.location}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Testimonials;
