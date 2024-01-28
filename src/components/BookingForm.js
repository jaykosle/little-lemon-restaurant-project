import React from 'react';

function BookingForm({ availableTimes, updateTimes }) {
  // Event handler for date change
  const handleDateChange = (event) => {
    const selectedDate = event.target.value;
    // Dispatch state change based on selected date
    updateTimes(selectedDate);
  };

  return (
    <form style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}>
      <label htmlFor="res-date">Choose date</label>
      <input type="date" id="res-date" onChange={handleDateChange} />
      <label htmlFor="res-time">Choose time</label>
      <select id="res-time">
        {availableTimes.map((time, index) => (
          <option key={index}>{time}</option>
        ))}
      </select>
      {/* Other form elements */}
    </form>
  );
}

export default BookingForm;
