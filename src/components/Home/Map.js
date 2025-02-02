import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const Map = () => {
  return ( 
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <h2
            className="text-center fw-bold text-uppercase"
            style={{ color: "#5A4DAD" }}
          >
            Our Location
          </h2>
          <Card className="shadow-sm p-3 mt-3">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3616.3875954231708!2d67.1277322085433!3d24.986942340096935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb347fe1d300161%3A0x1091c0456b003ca9!2sIqra%20University%20Gulshan%20Campus%20Extension!5e0!3m2!1sen!2s!4v1738340557672!5m2!1sen!2s"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Map;
