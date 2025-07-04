import { Routes, Route } from 'react-router-dom';
import AboutPage from './Pages/AboutPage';
import Header from './Components/Header';
import Nav from './Components/Nav';
import Main from './Main';
import BookingPage from './Pages/BookingPage';
import ConfirmedBooking from './Pages/ConfirmedBooking';
import Footer from './Components/Footer';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
