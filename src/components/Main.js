import React, { useReducer } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import BookingPage from './BookingPage';
import BookingForm from './BookingForm';

// Define action types
const UPDATE_TIMES = 'UPDATE_TIMES';
const INITIALIZE_TIMES = 'INITIALIZE_TIMES';

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_TIMES:
      // Logic to update availableTimes based on selected date (action.payload)
      return state; // Placeholder, replace with your logic
    case INITIALIZE_TIMES:
      return action.payload; // Initialize availableTimes
    default:
      return state;
  }
};

const Main = () => {
  // Initialize availableTimes
  const initialState = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  const [availableTimes, dispatch] = useReducer(reducer, initialState);

  // Function to update availableTimes based on selected date
  const updateTimes = (selectedDate) => {
    dispatch({ type: UPDATE_TIMES, payload: selectedDate });
  };

  // Function to initialize availableTimes
  const initializeTimes = () => {
    dispatch({ type: INITIALIZE_TIMES, payload: initialState });
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage>
          {/* Pass availableTimes state and updateTimes function to BookingForm */}
          <BookingForm availableTimes={availableTimes} updateTimes={updateTimes} />
        </BookingPage>} />
      </Routes>
    </Router>
  );
};

export default Main;
