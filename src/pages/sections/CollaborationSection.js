import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import meteoblue from "../../assets/images/meteoblue.png";
import "./CollaborationSection.css"; 

const CollaborationSection = () => {
  const imageDetails = [
    { url: "https://www.meteoblue.com/", src: meteoblue, alt: "MeteoBlue" },
  ];

  const handleImageClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <Container fluid className="p-0">
      <div>
        <div className="header">
          <p>Acknowledgement Section</p>
        </div>
        <Row className="justify-content-center no-gutters">
          {imageDetails.map((image, index) => (
            <Col key={index} xs={12} sm={4} className="image-column">
              <img
                src={image.src}
                alt={image.alt}
                onClick={() => handleImageClick(image.url)}
                className="collaboration-image"
              />
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default CollaborationSection;
