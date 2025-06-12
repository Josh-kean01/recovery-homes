import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import BookingSummary from "./BookingSummary";
import CompleteBooking from "./CompleteBooking";

export type BookingDetails = {
    checkInDate: Date | null;
    checkOutDate: Date | null;
    adults: number;
    children: number;
    rooms: number;
    childrenAges: string[];
    totalPrice?: 0, // Initalize totalPrice
};

const App = () => {
    const [booking, setBooking] = useState<BookingDetails>({
        checkInDate: null,
        checkOutDate: null,
        adults: 0,
        children: 0,
        rooms: 1,
        childrenAges: [],
    });

    return (
        <Routes>
            <Route path="/" element={<Home booking={booking} setBooking={setBooking} />} />
            <Route path="/summary" element={<BookingSummary />} />
            <Route path="/complete-booking" element={<CompleteBooking booking={booking} />} />
        </Routes>
    );
};

export default App;
