import React from 'react';
import NavigationBar from '../../components/common/NavigationBar';
import pimg from "../../assets/images/Phenological stages.jpg"; // Correct image import
import Footer from '../../components/Footer';
import { Container } from 'react-bootstrap';

const Phenologicalstages = () => {
  return (
    <>
      <NavigationBar />
      <Container className="text-center my-4">
        <h2 style={{ color: "#005C45" }}>Phenological Stages</h2>
        <img src={pimg} alt="Phenological stages" className="img-fluid mt-3" style={{ maxWidth: "100%", height: "auto" }} />
      </Container>
      <Footer />
    </>
  );
}

export default Phenologicalstages;
