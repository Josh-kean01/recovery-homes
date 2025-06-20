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

  const { checkInDate, checkOutDate } = booking;

  const shouldShowAlert = checkInDate !== null && checkOutDate !== null;

  const handleViewRates = () => {
    navigate("/summary", {
      state: booking,
    });
  };

  return (
    <div className="homepage position-relative">
      <div className="hero text-light p-5 d-flex flex-column align-items-center justify-content-center position-relative">
        <header className="d-flex justify-content-between w-100 position-absolute sticky-top top-0 p-2 p-md-4 shadow-sm">
          <div
            className="logo d-flex flex-column justify-content-center"
            style={{ width: "75px" }}
          >
            <img src={logo} alt="Logo" className="w-100" />
          </div>
          <nav className="d-flex justify-content-center gap-lg-5 gap-2 align-content-center pt-2">
            <a className="small" href="#about">About</a>
            <a className="small" href="#services">Services</a>
            <a className="small" href="#contact">Contact</a>
          </nav>
          <div className="d-flex justify-content-end w-auto">
            <button className="btn btn-success"><span className="small">Book Now</span></button>
          </div>
        </header>
        <div className="text-center">
          <h1>Find serenity.</h1>
          <p>Book your personalized healing retreat in Houston.</p>
          <button className="btn btn-success">Start Booking</button>
        </div>
      </div>

      <div className="position-relative my-3">
        <div className="booking-panel container position-absolute start-50 translate-middle-x rounded">
          <div className="row">
            <div className="col-md-6 col-12 d-flex justify-content-start align-items-center">
              <BookingForm booking={booking} setBooking={setBooking} />
            </div>
            <div className="col-md-4 col-8 d-flex justify-content-start align-items-center">
              <GuestSelector booking={booking} setBooking={setBooking} />
            </div>
            <div className="col-md-2 col-4 d-flex justify-content-end align-items-center">
              <div className="py-4">
                <p className="mb-2 invisible">...</p>
                <div className="btn btn-success px-2 px-md-auto" onClick={handleViewRates}>
                  <span className="small">View rates</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-5">
        {shouldShowAlert && (
          <div className="alert alert-info text-center mx-auto w-75 alert-dismissible mt-4">
            One extra day will be added for pre-arrival as per our booking
            policy.
          </div>
        )}
      </div>

      <footer className="text-center my-5">
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
