// Home.tsx
import { useNavigate } from "react-router-dom";
import type { BookingDetails } from "../App";
import BookingForm from "../BookingForm";
import RoomTile from "../components/RoomTile";
import Header from "../components/Header";
import { BsFillCalendarRangeFill } from "react-icons/bs";
import roomtile1 from "../assets/roomtile-1.jpg";
import roomtile2 from "../assets/roomtile-2.jpg";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import "../App.css";
// import Select from "react-select";

type BookingProps = {
  booking: BookingDetails;
  setBooking: React.Dispatch<React.SetStateAction<BookingDetails>>;
};


const Home = ({ booking, setBooking }: BookingProps) => {
  const navigate = useNavigate();

  const handleViewRates = () => {
    navigate("/rooms", {
      state: booking,
    });
  };

  return (
    <div className="homepage position-relative p-0">
      <div className="hero ">
        <div className="d-flex justify-content-center">
          <Header />
        </div>
        <div className="p-5 d-flex flex-column justify-content-center container text-light">
          <div className="text-start py-5">
            <p className="lh-1">
              <span className="text-uppercase ps-1 fs-2">Welcome to</span>
              <br />
              <span className="hero-text-big" style={{}}>
                Houston
              </span>{" "}
              <br />
              <span className="fs-5 ps-1">Recovery Home.</span>
            </p>
            <p className="fs-5 ps-1 ">
              Book your stay and enjoy Luxury redefined at the most affordable
              rates.
            </p>
          </div>
        </div>

        <div className="container px-lg-5" style={{ maxWidth: "1100px" }}>
          <div className="container booking-panel rounded">
            <BookingForm booking={booking} setBooking={setBooking} />
          </div>

          <div className="row p-4">
            <div className="col"></div>
            <div className="col-4 d-flex justify-content-center align-items-center">
              <div className="btn btn-success btn-lg" onClick={handleViewRates}>
                <span className="small">
                  <BsFillCalendarRangeFill />
                </span>{" "}
                <span className="small"> Book Now</span>
              </div>
            </div>
            <div className="col">
              <p>Choose Add-0n Services</p>
              <div className="row">
                <div className="col"></div>
                <div className="col"></div>
                <div className="col"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RoomTile */}
      <div className="container py-5">
        <h4 className="text-center">All our room types are including complementary breakfast</h4>
        {[
          {
            title: "Luxury redefined",
            description: "Our rooms are designed to transport you into an environment made for leisure. Take your mind off the day- to - day of home life and find a private paradise for yourself.",
            image: roomtile1,
          },
          {
            title: "Leave your worries in the sand",
            description: "We love life at the beach. Being close to the ocean with access to endless sandy beach ensures a relaxed state of mind.It  seems like time stands still watching the  ocean.",
            image: roomtile2,
          },
          {
            title: "Standard Room",
            description: "Comfortable room with all basic amenities.",
            image: roomtile1,
          },
        ].map((room, idx) => (
          <div key={idx} className="mb-4">
            <RoomTile title={room.title} description={room.description} image={room.image} />
          </div>
        ))}
      </div>

      {/* Testimonials */}
      <div className="carousel">
        <Testimonials />
      </div>

      {/* Footer */}
      <div className="pt-5">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
