// Home.tsx
import type { BookingDetails } from "./App";
import { useNavigate } from "react-router-dom";
import BookingForm from "./BookingForm";
import GuestSelector from "./GuestSelector";
import logo from "./assets/logoWHRH.svg";
import "./App.css";

type HomeProps = {
  booking: BookingDetails;
  setBooking: React.Dispatch<React.SetStateAction<BookingDetails>>;
};

const Home = ({ booking, setBooking }: HomeProps) => {
  const navigate = useNavigate();

  const { checkInDate, checkOutDate, adults, children, rooms } = booking;

  const shouldShowAlert = checkInDate !== null && checkOutDate !== null;

  const handleViewRates = () => {
    navigate("/summary", {
      state: booking,
    });
  };

  return (
    <div className="homepage position-relative">
      <div className="hero text-light p-5 d-flex flex-column align-items-center justify-content-center position-relative">
        <header className="d-flex justify-content-between w-100 position-absolute sticky-top top-0 p-3 shadow-sm">
          <div className="logo">
            <img src={logo} width="25%" alt="Logo" />
          </div>
          <nav className="d-flex justify-content-center gap-5 align-content-center pt-2">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="d-flex justify-content-end">
            <button className="btn btn-success">Book Now</button>
          </div>
        </header>
        <h1>Find serenity.</h1>
        <p>Book your personalized healing retreat in Houston.</p>
        <button className="btn btn-success">Start Booking</button>
      </div>

      <div className="position-relative my-3">
        <div className="booking-panel container position-absolute start-50 translate-middle-x rounded">
          <div className="row">
            <div className="col-md-5">
              <BookingForm booking={booking} setBooking={setBooking} />
            </div>
            <div className="col-md-4 d-flex flex-column justify-content-center align-items-center">
              <GuestSelector booking={booking} setBooking={setBooking} />
            </div>
            <div className="col-md-3 d-flex flex-column justify-content-center align-items-center">
              <p className="mb-0 invisible">...</p>
              <div className="btn btn-success" onClick={handleViewRates}>
                View rates
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-5">
        {shouldShowAlert && (
          <div className="alert alert-info text-center mx-auto w-75 alert-dismissible mt-3">
            One extra day will be added for pre-arrival as per our booking
            policy.
          </div>
        )}
      </div>

      <footer className="text-center ">
        <p>&copy; 2023 Wellness Retreats. All rights reserved.</p>
        <p>
          Follow us on social media:
          <a href="#" className="mx-2">
            Facebook
          </a>
          <a href="#" className="mx-2">
            Instagram
          </a>
          <a href="#" className="mx-2">
            Twitter
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Home;
