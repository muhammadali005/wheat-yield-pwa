import React from "react";
import NavigationBar from "../components/common/NavigationBar";
import KeyFeatures from "./sections/KeyFeatures";
import Testimonials from "../components/Home/Testimonials";
import ConnectWithUs from "../components/Home/ConnectWithUs";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <NavigationBar />
      <KeyFeatures />
      <ConnectWithUs />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Home;
