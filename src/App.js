import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutPage from './Pages/AboutPage';
import Header from './Components/Header';
import Nav from './Components/Nav';
import Main from './Main.js'
import BookingPage from './Pages/BookingPage.js';
import Footer from './Components/Footer.js';
import './App.css'


function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;