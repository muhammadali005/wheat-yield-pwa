import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import CropManagementTool from "./pages/services/Cropmanagementtool";
import WheatCropCalendar from "./pages/services/Wheatcropcalendar";
import Locations from "./pages/services/Locations";
import FarmersGuide from "./pages/services/Farmersguide";
import YieldPrediction from "./pages/services/Yieldprediction";
import PhenologicalStages from "./pages/services/Phenologicalstages";
import Faqs from "./pages/Faqs";
import Acknowledgment from "./pages/Acknowledgment";
import Pestcontroltips from "./pages/Pestcontroltips";
import Howtotutorials from "./pages/Howtotutorials";
import Bestpractices from "./pages/Bestpractices";
import Aidrivenpredictions from "./pages/Aidrivenpredictions";
import Weatherupdates from "./pages/Weatherupdates";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/crop-management-tool" element={<CropManagementTool />} />
        <Route path="/wheat-crop-calendar" element={<WheatCropCalendar />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/pest-control-tips" element={<Pestcontroltips />} />
        <Route path="/farmers-guide" element={<FarmersGuide />} />
        <Route path="/weather-updates" element={<Weatherupdates />} />
        <Route path="/ai-driven-predictions" element={<Aidrivenpredictions />} />
        <Route path="/best-practices" element={<Bestpractices />} />
        <Route path="/how-to-tutorials" element={<Howtotutorials />} />
        <Route path="/yield-prediction" element={<YieldPrediction />} />
        <Route path="/phenological-stages" element={<PhenologicalStages />} />
        <Route path="/faqs" element=<Faqs /> />
        <Route path="/acknowledgement" element=<Acknowledgment /> />
      </Routes>
    </Router>
  );
};

export default App;
