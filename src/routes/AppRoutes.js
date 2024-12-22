import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import FarmerGuide from '../pages/FarmerGuide';
import TutorialsPage from '../pages/TutorialsPage';
import ErrorPage from '../pages/ErrorPage.js';

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/farmer-guide" element={<FarmerGuide />} />
      <Route path="/tutorials" element={<TutorialsPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </Router>
);

export default AppRoutes;
