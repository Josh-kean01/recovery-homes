import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import BookingSummary from "./BookingSummary";
import CompleteBooking from "./CompleteBooking";
import ThankYou from "./ThankYou";

export type BookingDetails = {
    checkInDate: Date | null;
    checkOutDate: Date | null;
    surgeryDate?: Date | null; // Optional surgery date
    // adults: number;
    // children: number;
    rooms: number;
    // childrenAges: string[];
    totalPrice?: number, // Initalize totalPrice
    guests: number;
    guestNights: number;
};

const App = () => {
    const [booking, setBooking] = useState<BookingDetails>({
        checkInDate: null,
        surgeryDate: null, // Optional surgery date
        checkOutDate: null,
        rooms: 1,
        guests: 0,
        guestNights: 1,
    });

    return (
        <Routes>
            <Route path="/" element={<Home booking={booking} setBooking={setBooking} />} />
            <Route path="/summary" element={<BookingSummary />} />
            <Route path="/complete-booking" element={<CompleteBooking />} />
            <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
    );
};

export default App;
