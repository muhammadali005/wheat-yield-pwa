import React from "react";
import NavigationBar from "../components/common/NavigationBar";
import KeyFeatures from "./sections/KeyFeatures";
import Testimonials from "../components/Home/Testimonials";
import ConnectWithUs from "../components/Home/ConnectWithUs";
import Footer from "../components/Footer";
import Slider from "./sections/Slider";

const Home = () => {
  return (
    <>
      <NavigationBar />
      <Slider />
      <KeyFeatures />
      <ConnectWithUs />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Home;
