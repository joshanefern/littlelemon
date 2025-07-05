import React from 'react';
import { useReducer, useState } from 'react';

const initializeTimes = () => {
  const today = new Date();
  if (window.fetchAPI) {
    return window.fetchAPI(today);
  } else {
    return ['12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  }
};

const updateTimes = (state, action) => {
  if (action.type === 'UPDATE_TIMES') {
    const selectedDate = new Date(action.date);
    if (window.fetchAPI) {
      return window.fetchAPI(selectedDate);
    } else {
      return state;
    }
  }
  return state;
};

function BookingForm({ submitForm }) {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(2);
  const [occasion, setOccasion] = useState('Birthday');
  const [bookingData, setBookingData] = useState([]);

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    dispatch({ type: 'UPDATE_TIMES', date: selectedDate });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { date, time, guests, occasion };
    if (submitForm) {
      submitForm(formData);
    }
    setBookingData(prev => [...prev, formData]);
    setDate('');
    setTime('');
    setGuests(2);
    setOccasion('Birthday');
  };

  return (
    <section className="booking-container" aria-label="Reservation Form Section">
      <form
        onSubmit={handleSubmit}
        className="booking-form"
        aria-describedby="bookingInstructions"
      >
        <fieldset>
          <legend id="bookingInstructions">Make a reservation by filling out the form below</legend>

          <div className="form-field">
            <label htmlFor="res-date">Choose date</label>
            <input
              type="date"
              id="res-date"
              value={date}
              onChange={handleDateChange}
              required
              aria-required="true"
            />
          </div>

          <div className="form-field">
            <label htmlFor="res-time">Choose time</label>
            <select
              id="res-time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
              aria-required="true"
              aria-label="Select reservation time"
            >
              <option value="" disabled>Select time</option>
              {availableTimes.map((timeOption) => (
                <option key={timeOption} value={timeOption}>{timeOption}</option>
              ))}
            </select>
          </div>

          <div className="form-field">
            <label htmlFor="guests">Number of guests</label>
            <input
              type="number"
              id="guests"
              min="1"
              max="10"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              required
              aria-required="true"
              aria-describedby="guestCountHelp"
            />
            <small id="guestCountHelp">Please enter between 1 and 10 guests</small>
          </div>

          <div className="form-field">
            <label htmlFor="occasion">Occasion</label>
            <select
              id="occasion"
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
              aria-label="Select occasion for reservation"
            >
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
            </select>
          </div>

          <button
            type="submit"
            aria-label="On Click: Make reservation"
            className="button"
          >
            Make Reservation
          </button>
        </fieldset>
      </form>

      {bookingData.length > 0 && (
        <section
          className="reservations-section"
          aria-live="polite"
          aria-label="Submitted bookings"
        >
          <header>
            <h2>Submitted Bookings</h2>
          </header>
          <table className="bookings-table" role="table">
            <thead>
              <tr>
                <th scope="col">Date</th>
                <th scope="col">Time</th>
                <th scope="col">Guests</th>
                <th scope="col">Occasion</th>
              </tr>
            </thead>
            <tbody>
              {bookingData.map((booking, index) => (
                <tr key={index}>
                  <td>{booking.date}</td>
                  <td>{booking.time}</td>
                  <td>{booking.guests}</td>
                  <td>{booking.occasion}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      )}
    </section>
  );
}

export default BookingForm;
export { initializeTimes, updateTimes };
