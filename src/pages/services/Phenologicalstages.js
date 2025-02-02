import React from 'react';
import NavigationBar from '../../components/common/NavigationBar';
import pimg from "../../assets/images/Phenological stages.jpg"; // Correct image import

const Phenologicalstages = () => {
  return (
    <>
      <NavigationBar />
      <img src={pimg} alt="Phenological stages" /> {/* Added alt text for accessibility */}
    </>
  );
}

export default Phenologicalstages;
