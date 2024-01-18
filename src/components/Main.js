// Import necessary modules
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import your page components (replace these with your actual components)
import HomePage from './HomePage';
import BookingPage from './BookingPage';

// Main component with Routes
const Main = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default Main;
