import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import slide1 from "../../assets/images/slider/slide1.jpg";
import slide2 from "../../assets/images/slider/slide2.jpg";
import slide3 from "../../assets/images/slider/slide3.jpeg";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} style={{ maxHeight: "400px" }}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide1}
          alt="First slide"
          style={{ height: "300px", objectFit: "cover", opacity:0.5 }}
        />
        <Carousel.Caption>
          <h3 style={{opacity:0.5, color:"black", marginBottom:"12%"}}>AI - Driven Wheat Crop Optimization And Yield Prediction Tool</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide2}
          alt="Second slide"
          style={{ height: "300px", objectFit: "cover", opacity:0.5 }}
        />
        <Carousel.Caption>
          <h3 style={{opacity:0.5, color:"black", marginBottom:"12%"}}>AI - Driven Wheat Crop Optimization And Yield Prediction Tool</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide3}
          alt="Third slide"
          style={{ height: "300px", objectFit: "cover", opacity:0.5 }}
        />
        <Carousel.Caption>
          <h3 style={{opacity:0.5, color:"black", marginBottom:"12%"}}>AI - Driven Wheat Crop Optimization And Yield Prediction Tool</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
