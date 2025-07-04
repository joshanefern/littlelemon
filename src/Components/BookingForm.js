import { useReducer, useState } from 'react';

const initializeTimes = () => {
  const today = new Date();
  if (window.fetchAPI) {
    return window.fetchAPI(today);
  } else {
    return ['12:00','13:00','14:00','15:00','16:00','17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
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
    <div className="booking-container">
      <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '20px', marginBottom: '40px' }}>
        <label htmlFor="res-date">Choose date</label>
        <input 
          type="date" 
          id="res-date"
          value={date}
          onChange={handleDateChange}
          required
        />
  
        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        >
          <option value="" disabled>Select time</option>
          {availableTimes.map((timeOption) => (
            <option key={timeOption} value={timeOption}>{timeOption}</option>
          ))}
        </select>
  
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          id="guests"
          min="1"
          max="10"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          required
        />
  
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
        >
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
  
        <button type="submit">Make Reservation</button>
      </form>
  
      {bookingData.length > 0 && (
        <section className="reservations-section">
          <h2>Submitted Bookings</h2>
          <table className="bookings-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Time</th>
                <th>Guests</th>
                <th>Occasion</th>
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
    </div>
  );
}

export default BookingForm;
export { initializeTimes, updateTimes };
