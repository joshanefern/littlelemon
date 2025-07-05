import React from 'react';
import BookingForm from "../Components/BookingForm";

function BookingPage({ submitForm }) {
  return (
    <main className="booking-page">
      <h1>Reserve a Table</h1>
      <BookingForm submitForm={submitForm} />
    </main>
  );
}

export default BookingPage;
