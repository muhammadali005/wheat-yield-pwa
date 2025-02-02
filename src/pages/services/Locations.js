import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import NavigationBar from '../../components/common/NavigationBar';
import Footer from "../../components/Footer";
import RahimYarKhanImg from "../../assets/images/stations/rahimyarkhan.jpg";
import MultanImg from "../../assets/images/stations/Multan.jpeg";
import FaisalabadImg from "../../assets/images/stations/Faisalabad.jpeg";
import BahawalnagarImg from "../../assets/images/stations/Bhawalnagar.jpeg";

const Locations = () => {
  const cities = [
    { name: "Rahim Yar Khan", reason: "A key agricultural hub with a growing industrial sector.", image: RahimYarKhanImg },
    { name: "Multan", reason: "A major economic and cultural center known for its trade and commerce.", image: MultanImg },
    { name: "Faisalabad", reason: "Pakistan’s textile capital with a strong manufacturing base.", image: FaisalabadImg },
    { name: "Bahawalnagar", reason: "A developing region with potential for business expansion.", image: BahawalnagarImg }
  ];

  return (
    <>
      <NavigationBar />
      <Container className="my-5">
        <h2 className="text-center mb-4" style={{color:"#005C45"}}>Our Coverage Areas</h2>
        <Row className="justify-content-center">
          {cities.map((city, index) => (
            <Col key={index} md={6} lg={3} className="mb-4">
              <Card className="text-center shadow-sm">
                <Card.Img variant="top" src={city.image} className="mx-auto d-block" style={{ width: '100px', height: '100px' }} />
                <Card.Body>
                  <Card.Title style={{color:"#005C45"}}>{city.name}</Card.Title>
                  <Card.Text>{city.reason}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Locations;