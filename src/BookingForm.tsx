import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt, FaLongArrowAltRight } from "react-icons/fa";
import type { BookingDetails } from "./App";

type BookingFormProps = {
    booking: BookingDetails;
    setBooking: React.Dispatch<React.SetStateAction<BookingDetails>>;
};

const BookingForm = ({ booking, setBooking }: BookingFormProps) => {
    const { checkInDate, checkOutDate } = booking;

    const handleCheckInChange = (date: Date | null) => {
        setBooking((prev) => ({ ...prev, checkInDate: date }));
    };

    const handleCheckOutChange = (date: Date | null) => {
        setBooking((prev) => ({ ...prev, checkOutDate: date }));
    };

    const getNightCount = () => {
        if (checkInDate && checkOutDate) {
            const msPerDay = 1000 * 60 * 60 * 24;
            const nights = Math.ceil(
                (checkOutDate.getTime() - checkInDate.getTime()) / msPerDay
            );
            return nights + 1; // +1 for pre-arrival
        }
        return 0;
    };

    return (
        <div className="booking-form p-4 rounded">
            <label
                className="form-label d-flex align-items-center text-muted"
                style={{ fontVariant: "small-caps" }}
            >
                <FaCalendarAlt />
                &nbsp;Dates
                {checkInDate && checkOutDate && (
                    <div className="small ms-2 mb-0">{getNightCount()} night(s)</div>
                )}
            </label>

            <div className="d-flex align-items-center">
                <DatePicker
                    selected={checkInDate}
                    onChange={handleCheckInChange}
                    selectsStart
                    startDate={checkInDate}
                    endDate={checkOutDate}
                    className="form-control date-picker"
                    placeholderText="Check-in"
                    dateFormat="eee, MMM d"
                />
                <div className="p-2">
                    <FaLongArrowAltRight />
                </div>
                <DatePicker
                    selected={checkOutDate}
                    onChange={handleCheckOutChange}
                    selectsEnd
                    startDate={checkInDate}
                    endDate={checkOutDate}
                    minDate={checkInDate ?? undefined}
                    className="form-control date-picker"
                    placeholderText="Check-out"
                    dateFormat="eee, MMM d"
                />
            </div>
        </div>
    );
};

export default BookingForm;
