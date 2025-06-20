import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt, FaLongArrowAltRight } from "react-icons/fa";
import type { BookingDetails } from "./App";

type BookingFormProps = {
    booking: BookingDetails;
    setBooking: React.Dispatch<React.SetStateAction<BookingDetails>>;
};

const BookingForm = ({ booking, setBooking }: BookingFormProps) => {
    const { checkInDate, surgeryDate, checkOutDate } = booking;

    const handleChange = (field: keyof BookingDetails, date: Date | null) => {
        setBooking((prev) => ({ ...prev, [field]: date }));
    };

    const getNightCount = () => {
        if (checkInDate && checkOutDate) {
            const msPerDay = 1000 * 60 * 60 * 24;
            const nights = Math.ceil(
                (checkOutDate.getTime() - checkInDate.getTime()) / msPerDay
            );
            return nights + 1;
        }
        return 0;
    };

    return (
        <div className="booking-form p-lg-4 py-2 pt-3 rounded w-100">
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

            <div className="d-flex gap-lg-2 w-100">
                {/* Check-in Date */}
                <DatePicker
                    selected={checkInDate}
                    onChange={(date) => handleChange("checkInDate", date)}
                    selectsStart
                    startDate={checkInDate}
                    endDate={checkOutDate}
                    className="form-control date-picker"
                    placeholderText="Check-in"
                    dateFormat="eee, MMM d"
                    maxDate={surgeryDate ? new Date(surgeryDate.getTime() - 86400000) : undefined}
                    popperPlacement="bottom-end"

                />

                <div className="d-flex align-items-center justify-content-center">
                    <FaLongArrowAltRight className="text-muted px-1 px-md-0 mx-md-2" />
                </div>

                {/* Surgery Date */}
                <DatePicker
                    selected={surgeryDate}
                    onChange={(date) => handleChange("surgeryDate", date)}
                    className="form-control date-picker"
                    placeholderText="Surgery Date"
                    dateFormat="eee, MMM d"
                    minDate={checkInDate ? new Date(checkInDate.getTime() + 86400000) : undefined}
                    maxDate={checkOutDate ? new Date(checkOutDate.getTime() - 86400000) : undefined}
                // disabled={!checkInDate}
                />

                <div className="d-flex align-items-center justify-content-center">
                    <FaLongArrowAltRight className="text-muted px-1 px-md-0 mx-md-2" />
                </div>

                {/* Check-out Date */}
                <DatePicker
                    selected={checkOutDate}
                    onChange={(date) => handleChange("checkOutDate", date)}
                    selectsEnd
                    startDate={checkInDate}
                    endDate={checkOutDate}
                    className="form-control date-picker"
                    placeholderText="Check-out"
                    dateFormat="eee, MMM d"
                    minDate={surgeryDate ? new Date(surgeryDate.getTime() + 86400000) : checkInDate ?? undefined}
                    popperPlacement="bottom-start"

                />
            </div>
        </div>
    );
};

export default BookingForm;
