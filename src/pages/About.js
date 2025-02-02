import React from "react";
import NavigationBar from "../components/common/NavigationBar";
import { Container, Row, Col, Card } from "react-bootstrap";
import Footer from "../components/Footer"

const About = () => {
  return (
    <>
      <NavigationBar />
        <Row className="justify-content-center mt-4 mb-4 w-100">
          <Col md={8}>
            <Card className="shadow-sm p-4">
              <h1 className="text-center mb-4" style={{color:"#005C45"}}>
                About Us
              </h1>
              <p className="text-center">
                We are a team of final-year students pursuing a Bachelor of Science in Computer Science. 
                As part of our Final Year Project (FYP), we are developing an AI-powered agricultural 
                assistance platform. Our goal is to provide farmers and agricultural experts with 
                real-time insights, AI-driven yield predictions, and crop management recommendations 
                to optimize farming practices.
              </p>
              <p className="text-center">
                Our project incorporates machine learning, remote sensing data, and web technologies 
                to enhance decision-making in modern agriculture. We are passionate about innovation and 
                committed to building solutions that make a real-world impact.
              </p>
              <p className="text-center">
                Stay connected with us for more updates on our project!
              </p>
            </Card>
          </Col>
        </Row>
      <Footer />
    </>
  );
};

export default About;
