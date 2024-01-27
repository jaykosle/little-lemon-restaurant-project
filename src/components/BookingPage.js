import React from 'react';
import BookingForm from './BookingForm'; // Importing the BookingForm component

function BookingPage() {
    return (
        <div>
            <h1>Booking Page</h1>
            {/* Additional content before the form */}
            <BookingForm />
            {/* Additional content after the form */}
        </div>
    );
}

export default BookingPage;
