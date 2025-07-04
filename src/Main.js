import CallToAction from './Components/CallToAction';
import Specials from './Components/Specials';
import CustomersSay from './Components/CustomersSay';
import Chicago from './Components/Chicago';
import { useNavigate } from 'react-router-dom';
import BookingPage from './Pages/BookingPage';

function Main() {
  const navigate = useNavigate();

  const submitForm = (formData) => {
    if (window.submitAPI && window.submitAPI(formData)) {
      navigate('/confirmed');
    }
  };

  return (
    <main>
      <CallToAction />
      <Specials />
      <CustomersSay />
      <Chicago />
      <BookingPage submitForm={submitForm} />
    </main>
  );
}

export default Main;
