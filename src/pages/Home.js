import React from "react";
import NavigationBar from "../components/common/NavigationBar";
import HomePageImg from "./sections/HomePageImg";
import KeyFeatures from "./sections/KeyFeatures";
import CollaborationSection from "./sections/CollaborationSection";
import WeatherAnalytic from "./sections/WeatherAnalytic";
import FarmersGuide from "./sections/FarmersGuide";
import Testimonials from "../components/Home/Testimonials";

const Home = () => {
  return (
    <>
      <NavigationBar />
      <HomePageImg />
      <KeyFeatures />
      <CollaborationSection />
      <WeatherAnalytic />
      <FarmersGuide />
      <Testimonials />
    </>
  );
};

export default Home;
