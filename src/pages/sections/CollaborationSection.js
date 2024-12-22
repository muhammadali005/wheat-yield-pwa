import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import soilGrids from "../../assets/images/soil grids.jpg";
import govpunjab from "../../assets/images/hukomat punjab.jpg";
import meteoblue from "../../assets/images/meteoblue.png";
import "./CollaborationSection.css"; // Import the custom CSS

const CollaborationSection = () => {
  const imageDetails = [
    { url: "https://soil.punjab.gov.pk/", src: govpunjab, alt: "Hukomat Punjab" },
    { url: "https://soilgrids.org/", src: soilGrids, alt: "Soil Grids" },
    { url: "https://www.meteoblue.com/", src: meteoblue, alt: "MeteoBlue" },
  ];

  const handleImageClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <Container fluid className="p-0">
      <div>
        {/* Header */}
        <div className="header">
          <h1>Collaboration Section</h1>
        </div>

        {/* Image Row */}
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
