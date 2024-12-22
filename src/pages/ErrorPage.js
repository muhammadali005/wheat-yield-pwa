import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const ErrorPage = () => {
  return (
    <Container className="error-page text-center py-5">
      <Row>
        <Col>
          <h1>404</h1>
          <p>The page you are looking for does not exist.</p>
          <Button variant="primary" href="/">
            Go to Home
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ErrorPage;
