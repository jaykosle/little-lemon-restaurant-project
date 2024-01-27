// Import necessary modules
import React,{ useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import your page components (replace these with your actual components)
import HomePage from './HomePage';
import BookingPage from './BookingPage';
import BookingForm from './BookingForm'; // Assuming BookingForm is in the same directory

// Main component with Routes
const Main = () => {

  const [availableTimes, setAvailableTimes] = useState(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Pass availableTimes state and setAvailableTimes function to BookingForm */}
        <Route
          path="/booking"
          element={<BookingPage><BookingForm availableTimes={availableTimes} setAvailableTimes={setAvailableTimes} /></BookingPage>}
        />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default Main;
