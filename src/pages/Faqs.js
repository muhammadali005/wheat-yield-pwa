import React from "react";
import { Accordion, Container, Row, Col, Card } from "react-bootstrap";
import NavigationBar from "../components/common/NavigationBar";
import Footer from "../components/Footer"

const FAQs = () => {
  return (
    <>
      <NavigationBar />
      <Container
        className="d-flex justify-content-center align-items-center py-5"
        style={{ minHeight: "100vh" }}
      >
        <Card className="shadow-sm p-4 w-100" style={{ maxWidth: "80%" }}>
          <h1 className="text-center mb-4" style={{ color: "#5A4DAD" }}>
            Frequently Asked Questions (FAQs)
          </h1>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                How can agricultural professionals use our app?
              </Accordion.Header>
              <Accordion.Body>
                Our app provides real-time weather updates, AI-driven yield
                predictions, and crop management tools. Farmers can access
                optimum sowing guidance, chemical recommendations, and
                phenological stage tracking to make informed decisions for
                better farming outcomes.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header>
                What are the benefits of using this app?
              </Accordion.Header>
              <Accordion.Body>
                - Increased Productivity: Optimize farming practices with AI
                insights. 
                <br/>- AI Predictions: Get accurate yield forecasts and
                crop health analysis. 
                <br/>- Resource Efficiency: Proper use of
                fertilizers, pesticides, and irrigation. 
                <br/>- Time & Cost Saving:
                Reduce manual labor and increase farm efficiency.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>Is the app free to use?</Accordion.Header>
              <Accordion.Body>
                Yes! Our app is free for farmers and agricultural professionals.
                Our goal is to provide affordable and accessible solutions for
                improving agricultural productivity.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
              <Accordion.Header>
                Can I access the app on mobile?
              </Accordion.Header>
              <Accordion.Body>
                Yes! Our app is fully responsive and works smoothly on mobile
                phones, tablets, and desktops.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="4">
              <Accordion.Header>
                How accurate are the AI predictions?
              </Accordion.Header>
              <Accordion.Body>
                Our AI models analyze remote sensing data, climate variables,
                and historical yield records to ensure high accuracy. However,
                factors like unexpected weather conditions can affect the
                predictions.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Card>
      </Container>
      <Footer />
    </>
  );
};

export default FAQs;
