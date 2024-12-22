import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const PredictionTool = () => {
  return (
    <Container className="prediction-tool-section py-5 bg-light">
      <h2 className="text-center mb-4">Try Our Prediction Tool</h2>
      <Row className="justify-content-center">
        <Col md={6}>
          <Form>
            <Form.Group controlId="formAreaSize" className="mb-3">
              <Form.Label>Area Size (in acres)</Form.Label>
              <Form.Control type="number" placeholder="Enter area size" />
            </Form.Group>
            <Form.Group controlId="formSoilType" className="mb-3">
              <Form.Label>Soil Type</Form.Label>
              <Form.Control as="select">
                <option value="clay">Clay</option>
                <option value="sandy">Sandy</option>
                <option value="loamy">Loamy</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formIrrigation" className="mb-3">
              <Form.Label>Irrigation Level</Form.Label>
              <Form.Control type="number" placeholder="Enter irrigation level (liters per acre)" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Predict Yield
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default PredictionTool;
