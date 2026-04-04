import React from 'react';
import { Routes, Route } from 'react-router-dom';

// 1. All Imports stay at the very top
import Navbar from './components/layouts/Navbar.jsx';
import Footer from './components/layouts/Footer.jsx'; 
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
import PageNotFound from './pages/PageNotFound.jsx';

function App() {
  return (
    // "flex-col justify-between" ensures the footer stays at the bottom
    <div className="min-h-screen flex flex-col justify-between bg-gray-50">
      
      {/* Top Section: Navbar and Content */}
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          {/* Catch-all route for 404 */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
      
      {/* Bottom Section: Footer */}
      <Footer /> 

    </div>
  );
}

export default App;