import React from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { HouseFill, TelephoneFill, EnvelopeFill } from "react-bootstrap-icons";

const ConnectWithUs = () => {
  return (
    <>
      <h2
        style={{
          textAlign: "center",
          fontWeight: "bold",
          color: "#005C45",
          textTransform: "uppercase",
          margin: 0,
        }}
      >
        Connect With Us
      </h2>
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col md={6}>
            <Card className="shadow-sm p-4">
              <h2 style={{ color: "#005C45" }} className="mb-3">
                Send a Message
              </h2>
              <Form>
                <Row className="mb-3">
                  <Col>
                    <Form.Control type="text" placeholder="Your Name" />
                  </Col>
                  <Col>
                    <Form.Control type="email" placeholder="Your Email" />
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col>
                    <Form.Control type="text" placeholder="Your Subject" />
                  </Col>
                  <Col>
                    <Form.Select>
                      <option value="general">General</option>
                      <option value="support">Support</option>
                      <option value="feedback">Feedback</option>
                    </Form.Select>
                  </Col>
                </Row>
                <Form.Group className="mb-3">
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Your Message"
                  />
                </Form.Group>
                <Button
                  className="w-100"
                  style={{ backgroundColor: "#005C45", color:"white", border: "none" }}
                >
                  Send Message
                </Button>
              </Form>
            </Card>
          </Col>

          <Col md={6} className="mt-4 mt-md-0">
            <Card className="shadow-sm p-4">
              <h2
                style={{ color: "#005C45" }}
                className="mb-3 text-uppercase fw-bold text-center"
              >
                Our Location
              </h2>
              <div className="mb-3">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3616.3875954231708!2d67.1277322085433!3d24.986942340096935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb347fe1d300161%3A0x1091c0456b003ca9!2sIqra%20University%20Gulshan%20Campus%20Extension!5e0!3m2!1sen!2s!4v1738340557672!5m2!1sen!2s"
                  width="100%"
                  height="225"
                  style={{ border: 0, borderRadius: "10px" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ConnectWithUs;
