import React from 'react'
import { useNavigate } from "react-router-dom";
import type { BookingDetails } from "../App";
import Header from '../components/Header'
import BookingForm from '../BookingForm'
import { BsFillCalendarRangeFill } from 'react-icons/bs'
import RoomCard from '../components/RoomCard';
import roomtile1 from "../assets/roomtile-1.jpg";
import roomtile2 from "../assets/roomtile-2.jpg";

type BookingProps = {
    booking: BookingDetails;
    setBooking: React.Dispatch<React.SetStateAction<BookingDetails>>;
};




const Room = ({ booking, setBooking }: BookingProps) => {
    const navigate = useNavigate();

    const handleViewRates = () => {
        navigate("/summary", {
            state: booking,
        });
    };

    const roomData = [
        {
            title: "Single Room",
            price: 147,
            images: [roomtile1, roomtile2],
        },
        {
            title: "Double Room",
            price: 220,
            images: [roomtile2, roomtile1],
        },
        {
            title: "Shared Room",
            price: 450,
            images: [roomtile1],
        },
        {
            title: "Private Suite",
            price: 450,
            images: [roomtile1],
        },
    ];


    return (
        <div className='rooms'>
            <div className="hero">
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
                            <div className="btn btn-success btn-lg d-inline-flex align-items-center gap-2" onClick={handleViewRates}>
                                <BsFillCalendarRangeFill />
                                <span>Book Now</span>
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

            {/* RoomCard */}
            <div className='container'>
                {roomData.map((room, idx) => (
                    <div key={idx}>
                        <RoomCard
                            images={room.images}
                            title={room.title}
                            price={room.price}
                            onViewDetails={() => console.log(`View details for ${room.title}`)}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Room