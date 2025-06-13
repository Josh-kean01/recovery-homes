import { Link, useLocation, } from "react-router-dom";
import type { BookingDetails } from "./App";
import { format } from "date-fns";
import image from "./assets/Image1.png"; // Replace with your actual image path

const BookingSummary = () => {
    const location = useLocation();
    const bookingData = location.state as BookingDetails;

    if (!bookingData || !bookingData.checkInDate || !bookingData.checkOutDate) {
        return <p>Error: Booking information is missing.</p>;
    }

    const { checkInDate, checkOutDate, adults, children, rooms, childrenAges } =
        bookingData;

    // Sample Pricing Logic
    const pricePerNight = 150;
    const nights =
        (checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 60 * 60 * 24);
    const extraNight = 1; // As per “pre-arrival extra night” logic
    const totalNights = nights + extraNight;
    const totalCost = totalNights * pricePerNight;

    return (
        <div className="container mt-5">
            <h2>Booking Summary</h2>

            <svg xmlns="http://www.w3.org/2000/svg" className="d-none">
                <symbol id="info-fill" viewBox="0 0 16 16">
                    <path fill="currentColor" d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                </symbol>
            </svg>

            <div className="alert alert-info mt-4 mx-3 d-flex align-items-center" role="alert">
                <svg className="bi flex-shrink-0 me-2" role="img" aria-label="Info:" width="24" height="24">
                    <use xlinkHref="#info-fill" />
                </svg>
                <div>
                    You’ll be required to arrive the day before your
                    check-in date for pre-retreat preparation. This will add one extra
                    chargeable night.
                </div>
            </div>



            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        {/* Image showing location */}
                        <div className="">
                            <img
                                src={image} // Replace with your actual image path
                                alt="Recovery Home Location"
                                className="img-fluid rounded"
                            />
                        </div>

                    </div>
                    <div className="col-md-6">
                        {/* Breakdown */}
                        <div className="card p-4 shadow-sm">
                            <h5>Retreat Details:</h5>
                            <p>
                                <strong>Check-in:</strong> {format(checkInDate, "PPP")} <br />
                                <strong>Check-out:</strong> {format(checkOutDate, "PPP")} <br />
                                <strong>Adults:</strong> {adults} <br />
                                <strong>Children:</strong> {children} ({childrenAges.join(", ")}){" "}
                                <br />
                                <strong>Rooms:</strong> {rooms}
                            </p>

                            <h6>Pricing:</h6>
                            <ul>
                                <li>Nights (including extra night): {totalNights}</li>
                                <li>Rate per night: ${pricePerNight}</li>
                                <li>
                                    <strong>Total: ${totalCost}</strong>
                                </li>
                            </ul>
                        </div>

                        <div className="d-flex justify-content-end mt-3">
                            {/* Next Button */}
                            <Link to="/complete-booking" state={{ ...bookingData, totalPrice: totalCost, }} className="btn btn-success">
                                Complete Your Booking
                            </Link>
                        </div>
                    </div>
                </div>
            </div>







        </div>
    );
};

export default BookingSummary;
