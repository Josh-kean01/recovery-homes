import { useLocation, useNavigate } from 'react-router-dom';
import type { BookingDetails } from './App';

const CompleteBooking = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const booking = location.state as BookingDetails;

    if (!booking) {
        return <p>Error: Booking details are missing.</p>;
    }

    const {
        checkInDate,
        checkOutDate,
        adults,
        children,
        childrenAges,
        rooms,
        totalPrice,
    } = booking;

    const handleConfirm = (e: React.FormEvent) => {
        e.preventDefault(); // Prevent form submission
        alert('Booking confirmed!');
        navigate('/thank-you');
    };

    return (
        <div className="container my-5">
            <h2 className="text-center mb-4">Complete Your Booking</h2>
            <div className="row">
                {/* LEFT: Booking Summary */}
                <div className="col-md-6 border-end pe-4">
                    <h5>Your Stay</h5>
                    <p>
                        <strong>Check-in:</strong> {checkInDate?.toDateString()} <br />
                        <strong>Check-out:</strong> {checkOutDate?.toDateString()} <br />
                        <strong>Rooms:</strong> {rooms} <br />
                        <strong>Guests:</strong> {adults} Adult(s), {children} Children
                    </p>
                    {children > 0 && (
                        <p>
                            <strong>Children's Ages:</strong> {childrenAges?.join(', ')}
                        </p>
                    )}
                    <p className="mt-3">
                        <strong>Total Price:</strong>{' '}
                        {totalPrice ? `$${totalPrice}` : '---'}
                    </p>
                </div>

                {/* RIGHT: Guest Info + Payment */}
                <div className="col-md-6 ps-4">
                    <h5>Guest Information</h5>
                    <form onSubmit={handleConfirm}>
                        <div className="mb-3">
                            <label htmlFor="fullName" className="form-label">Full Name</label>
                            <input type="text" id="fullName" className="form-control" required />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email Address</label>
                            <input type="email" id="email" className="form-control" required />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label">Phone Number</label>
                            <input type="tel" id="phone" className="form-control" required />
                        </div>

                        <h5 className="mt-4">Payment Information</h5>

                        <div className="mb-3">
                            <label htmlFor="cardName" className="form-label">Cardholder Name</label>
                            <input type="text" id="cardName" className="form-control" required />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="cardNumber" className="form-label">Card Number</label>
                            <input type="text" id="cardNumber" className="form-control" required />
                        </div>

                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="expiry" className="form-label">Expiry Date</label>
                                <input type="text" id="expiry" className="form-control" placeholder="MM/YY" required />
                            </div>

                            <div className="col-md-6 mb-3">
                                <label htmlFor="cvv" className="form-label">CVV</label>
                                <input type="text" id="cvv" className="form-control" required />
                            </div>
                        </div>

                        <button className="btn btn-success w-100 mt-3" type="submit">
                            Confirm & Pay
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CompleteBooking;
